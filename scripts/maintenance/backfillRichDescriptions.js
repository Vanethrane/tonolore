/**
 * Backfill multi-paragraph descriptions for thin / stub entity blurbs.
 *
 * Prefer Fandom wikitext leads (batched revisions), then Wikipedia extracts.
 * Updates Postgres + scripts/subjects/<id>/expanded.json enrichments/entities.
 *
 *   node scripts/maintenance/backfillRichDescriptions.js
 *   node scripts/maintenance/backfillRichDescriptions.js berserk wheel-of-time
 *   node scripts/maintenance/backfillRichDescriptions.js --limit=200 pokemon
 *   node scripts/maintenance/backfillRichDescriptions.js --dry-run berserk
 */

require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});

const fs = require("fs");
const path = require("path");
const { Client } = require("../../server/node_modules/pg");
const { SUBJECT_IDS } = require("../subjects/registry");
const { getExpandConfig } = require("../lib/subjectExpandConfigs");
const {
    sleep,
    fetchWikitextIntros
} = require("../lib/fandomClient");
const { wikipediaQuery } = require("../lib/wikiClient");

const BATCH = 12;
const FANDOM_PAUSE_MS = 280;
const WIKI_PAUSE_MS = 1200;
const WIKI_RETRY_PAUSE_MS = 15000;

function isStubDescription(text) {
    const value = String(text || "")
        .replace(/\s+/g, " ")
        .trim()
        .toLowerCase();

    if (!value) {
        return true;
    }

    return (
        /is documented on .+\.fandom\.com\.?$/.test(value) ||
        /documented on (the )?one piece fandom wiki/.test(value) ||
        /documented on wookieepedia/.test(value) ||
        /^fictional (character|topic|place|organization|object|concept|work) from /.test(
            value
        ) ||
        /^topic in this subject graph\.?$/.test(value)
    );
}

function isThinDescription(text) {
    const raw = String(text || "")
        .replace(/\r\n/g, "\n")
        .trim();
    if (!raw || isStubDescription(raw)) {
        return true;
    }

    const paragraphs = raw.split(/\n\n+/).map((p) => p.trim()).filter(Boolean);
    if (paragraphs.length >= 2 && raw.length >= 320) {
        return false;
    }
    if (raw.length < 480) {
        return true;
    }
    // Long single blobs still benefit from a richer multi-paragraph lead.
    return paragraphs.length < 2 && raw.length < 1100;
}

function shortFromIntro(intro) {
    const first = String(intro || "")
        .split(/\n\n+/)[0]
        .replace(/\s+/g, " ")
        .trim();
    if (!first) {
        return null;
    }
    if (first.length <= 220) {
        return first;
    }
    return `${first.slice(0, 220).replace(/\s+\S*$/, "")}…`;
}

function chunk(arr, size) {
    const out = [];
    for (let i = 0; i < arr.length; i += size) {
        out.push(arr.slice(i, i + size));
    }
    return out;
}

function titleFromWikipediaUrl(url) {
    if (!url) {
        return null;
    }
    try {
        const match = String(url).match(/\/wiki\/([^?#]+)/);
        if (!match) {
            return null;
        }
        return decodeURIComponent(match[1].replace(/_/g, " "));
    } catch {
        return null;
    }
}

function candidateTitles(row) {
    const meta =
        typeof row.metadata === "string"
            ? JSON.parse(row.metadata || "{}")
            : row.metadata || {};
    const titles = [];
    const push = (value) => {
        const cleaned = String(value || "")
            .replace(/\s+/g, " ")
            .trim();
        if (cleaned && !titles.includes(cleaned)) {
            titles.push(cleaned);
        }
    };

    push(meta.fandom_title);
    push(row.name);
    push(String(row.name || "").replace(/\s*\([^)]*\)\s*$/, "").trim());
    for (const alias of meta.aliases || []) {
        push(alias);
    }
    push(titleFromWikipediaUrl(row.wikipedia_url));
    return titles.slice(0, 5);
}

function loadExpanded(subjectId) {
    const outPath = path.join(
        __dirname,
        "..",
        "subjects",
        subjectId,
        "expanded.json"
    );
    if (!fs.existsSync(outPath)) {
        return { outPath, data: null };
    }
    return {
        outPath,
        data: JSON.parse(fs.readFileSync(outPath, "utf8"))
    };
}

function patchExpanded(expanded, updatesBySlug) {
    if (!expanded?.data) {
        return;
    }

    const data = expanded.data;
    data.enrichments = data.enrichments || [];
    data.entities = data.entities || [];

    const enrichmentBySlug = new Map(
        data.enrichments.map((row, index) => [row.slug, index])
    );
    const entityBySlug = new Map(
        data.entities.map((row, index) => [row.slug, index])
    );

    for (const [slug, fields] of updatesBySlug) {
        const idx = enrichmentBySlug.get(slug);
        if (idx != null) {
            data.enrichments[idx] = { ...data.enrichments[idx], ...fields };
        } else {
            data.enrichments.push({ slug, ...fields });
            enrichmentBySlug.set(slug, data.enrichments.length - 1);
        }

        const eidx = entityBySlug.get(slug);
        if (eidx != null) {
            data.entities[eidx] = { ...data.entities[eidx], ...fields };
        }
    }

    data.stats = {
        ...(data.stats || {}),
        description_backfill_at: new Date().toISOString(),
        description_backfill_count: updatesBySlug.size
    };

    fs.writeFileSync(expanded.outPath, JSON.stringify(data, null, 2));
}

async function updateEntityDescription(client, id, fields) {
    await client.query(
        `
        UPDATE entities
        SET
            description = $2,
            short_description = COALESCE($3, short_description),
            updated_at = NOW()
        WHERE id = $1
        `,
        [id, fields.description, fields.short_description || null]
    );
}

async function fetchWikipediaExtracts(titles) {
    const out = new Map();
    if (!titles.length) {
        return out;
    }

    const data = await wikipediaQuery({
        titles: titles.join("|"),
        redirects: "1",
        prop: "extracts",
        explaintext: "1",
        exintro: "1",
        exlimit: "max"
    });

    const aliasToResolved = new Map();
    for (const title of titles) {
        aliasToResolved.set(title, title);
    }
    for (const row of data.query?.normalized || []) {
        aliasToResolved.set(row.from, row.to);
    }
    for (const row of data.query?.redirects || []) {
        aliasToResolved.set(row.from, row.to);
        for (const [from, to] of [...aliasToResolved.entries()]) {
            if (to === row.from) {
                aliasToResolved.set(from, row.to);
            }
        }
    }

    const extractByTitle = new Map();
    for (const page of Object.values(data.query?.pages || {})) {
        if (page.missing != null || !page.extract) {
            continue;
        }
        const text = String(page.extract)
            .replace(/\r\n/g, "\n")
            .trim();
        if (text.length < 80) {
            continue;
        }
        // Wikipedia extracts use single newlines between paragraphs.
        const normalized = text
            .split(/\n+/)
            .map((part) => part.trim())
            .filter(Boolean)
            .join("\n\n");
        extractByTitle.set(page.title, normalized);
    }

    for (const requested of titles) {
        const resolved = aliasToResolved.get(requested) || requested;
        const extract =
            extractByTitle.get(resolved) || extractByTitle.get(requested);
        if (extract) {
            out.set(requested, extract);
        }
    }

    return out;
}

async function loadThinTargets(client, subjectId, limit) {
    const subjectPath = path.join(__dirname, "..", "subjects", subjectId);
    const indexPath = path.join(subjectPath, "index.js");
    if (!fs.existsSync(indexPath)) {
        return [];
    }

    // Fresh require so prior expanded patches are visible if re-run.
    const resolved = require.resolve(indexPath);
    delete require.cache[resolved];
    const dataPath = path.join(subjectPath, "data.js");
    try {
        delete require.cache[require.resolve(dataPath)];
    } catch (_) {
        /* optional */
    }

    const pkg = require(indexPath);
    const merged = (pkg.entities || []).filter((entity) =>
        isThinDescription(entity.description)
    );

    const db = await client.query(
        `
        SELECT id, slug, name, description, short_description, wikipedia_url, metadata
        FROM entities
        WHERE metadata->>'universe' = $1
        `,
        [subjectId]
    );
    const bySlug = new Map(db.rows.map((row) => [row.slug, row]));

    const targets = [];
    const seen = new Set();

    for (const entity of merged) {
        if (seen.has(entity.slug)) {
            continue;
        }
        seen.add(entity.slug);
        const row = bySlug.get(entity.slug);
        targets.push({
            id: row?.id || null,
            slug: entity.slug,
            name: entity.name || row?.name,
            description: entity.description || row?.description || "",
            short_description:
                entity.short_description || row?.short_description || "",
            wikipedia_url: entity.wikipedia_url || row?.wikipedia_url || null,
            metadata: entity.metadata || row?.metadata || {}
        });
    }

    // DB-only stubs that somehow missed the package merge.
    for (const row of db.rows) {
        if (seen.has(row.slug) || !isThinDescription(row.description)) {
            continue;
        }
        seen.add(row.slug);
        targets.push({
            id: row.id,
            slug: row.slug,
            name: row.name,
            description: row.description || "",
            short_description: row.short_description || "",
            wikipedia_url: row.wikipedia_url,
            metadata: row.metadata || {}
        });
    }

    targets.sort((a, b) => {
        const score = (row) => {
            if (isStubDescription(row.description)) {
                return 0;
            }
            if (String(row.description || "").length < 160) {
                return 1;
            }
            return 2;
        };
        return score(a) - score(b) || String(a.name).localeCompare(String(b.name));
    });

    return limit != null ? targets.slice(0, limit) : targets;
}

async function backfillSubject(client, subjectId, opts) {
    const config = getExpandConfig(subjectId);
    const host = config?.fandom?.host || null;
    const rows = await loadThinTargets(client, subjectId, opts.limit);

    console.log(
        `\n[${subjectId}] ${rows.length} thin/stub descriptions` +
            (host ? ` · Fandom ${host}` : " · Wikipedia only")
    );

    if (!rows.length) {
        return { filled: 0, missing: 0, attempted: 0 };
    }

    const remaining = new Map(rows.map((row) => [row.slug, row]));
    const updatesBySlug = new Map();

    if (host) {
        for (const batch of chunk(rows, BATCH)) {
            const jobs = batch
                .filter((row) => remaining.has(row.slug))
                .map((row) => ({
                    row,
                    titles: candidateTitles(row)
                }))
                .filter((job) => job.titles.length);

            const titleSet = [];
            const seen = new Set();
            for (const job of jobs) {
                for (const title of job.titles) {
                    if (!seen.has(title)) {
                        seen.add(title);
                        titleSet.push(title);
                    }
                }
            }

            let introMap = new Map();
            try {
                introMap = await fetchWikitextIntros(host, titleSet, 3200);
            } catch (error) {
                console.warn(`  Fandom batch failed: ${error.message}`);
                if (/429/.test(error.message)) {
                    await sleep(12000);
                } else {
                    await sleep(800);
                }
            }

            for (const job of jobs) {
                if (!remaining.has(job.row.slug)) {
                    continue;
                }
                let intro = null;
                for (const title of job.titles) {
                    if (introMap.get(title)) {
                        intro = introMap.get(title);
                        break;
                    }
                }
                if (!intro || intro.length < 80) {
                    continue;
                }
                const prevLen = String(job.row.description || "").length;
                if (
                    !isStubDescription(job.row.description) &&
                    intro.length < Math.max(prevLen + 40, 200)
                ) {
                    continue;
                }

                const fields = {
                    description: intro,
                    short_description: shortFromIntro(intro)
                };
                if (!opts.dryRun && job.row.id) {
                    await updateEntityDescription(client, job.row.id, fields);
                }
                updatesBySlug.set(job.row.slug, fields);
                remaining.delete(job.row.slug);
            }

            process.stdout.write(
                `  fandom… filled ${updatesBySlug.size}/${rows.length}\r`
            );
            await sleep(FANDOM_PAUSE_MS);
        }
        console.log(
            `  Fandom filled ${updatesBySlug.size}; ${remaining.size} still thin`
        );
    }

    const leftovers = [...remaining.values()];
    if (leftovers.length) {
        let wikiFilled = 0;
        for (const batch of chunk(leftovers, BATCH)) {
            const titleBySlug = new Map();
            const titles = [];
            for (const row of batch) {
                const title =
                    titleFromWikipediaUrl(row.wikipedia_url) ||
                    candidateTitles(row)[0] ||
                    row.name;
                if (!title) {
                    continue;
                }
                titleBySlug.set(row.slug, title);
                if (!titles.includes(title)) {
                    titles.push(title);
                }
            }

            let extractMap = new Map();
            let wikiOk = false;
            for (let attempt = 0; attempt < 4 && !wikiOk; attempt += 1) {
                try {
                    extractMap = await fetchWikipediaExtracts(titles);
                    wikiOk = true;
                } catch (error) {
                    console.warn(`  Wikipedia batch failed: ${error.message}`);
                    if (/429/.test(error.message)) {
                        await sleep(WIKI_RETRY_PAUSE_MS * (attempt + 1));
                    } else {
                        await sleep(900);
                        break;
                    }
                }
            }
            if (!wikiOk) {
                continue;
            }

            for (const row of batch) {
                const title = titleBySlug.get(row.slug);
                const intro = title ? extractMap.get(title) : null;
                if (!intro || intro.length < 80) {
                    continue;
                }
                const prevLen = String(row.description || "").length;
                if (
                    !isStubDescription(row.description) &&
                    intro.length < Math.max(prevLen + 40, 200)
                ) {
                    continue;
                }

                const fields = {
                    description: intro,
                    short_description: shortFromIntro(intro)
                };
                if (!opts.dryRun && row.id) {
                    await updateEntityDescription(client, row.id, fields);
                }
                updatesBySlug.set(row.slug, fields);
                remaining.delete(row.slug);
                wikiFilled += 1;
            }

            await sleep(WIKI_PAUSE_MS);
        }
        if (wikiFilled) {
            console.log(`  Wikipedia filled ${wikiFilled}`);
        }
    }

    if (!opts.dryRun && updatesBySlug.size) {
        const expanded = loadExpanded(subjectId);
        if (!expanded.data) {
            expanded.data = {
                enrichments: [],
                entities: [],
                relationships: [],
                stats: {}
            };
        }
        patchExpanded(expanded, updatesBySlug);
        console.log(`  Patched ${expanded.outPath}`);
    }

    return {
        filled: updatesBySlug.size,
        missing: remaining.size,
        attempted: rows.length
    };
}

function parseArgs(argv) {
    const opts = {
        dryRun: false,
        limit: null,
        subjects: []
    };
    for (const arg of argv) {
        if (arg === "--dry-run") {
            opts.dryRun = true;
        } else if (arg.startsWith("--limit=")) {
            opts.limit = Number(arg.slice("--limit=".length));
        } else if (!arg.startsWith("-")) {
            opts.subjects.push(arg);
        }
    }
    if (!opts.subjects.length) {
        opts.subjects = [...SUBJECT_IDS];
    }
    return opts;
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    console.log(
        `Description backfill${opts.dryRun ? " (dry-run)" : ""} for: ${opts.subjects.join(", ")}`
    );

    const totals = { filled: 0, missing: 0, attempted: 0 };

    try {
        for (const subjectId of opts.subjects) {
            if (!SUBJECT_IDS.includes(subjectId)) {
                console.warn(`Unknown subject: ${subjectId}`);
                continue;
            }
            const stats = await backfillSubject(client, subjectId, opts);
            totals.filled += stats.filled;
            totals.missing += stats.missing;
            totals.attempted += stats.attempted;
        }
    } finally {
        await client.end();
    }

    console.log("\n==============================================");
    console.log(
        `Done. Filled ${totals.filled} / ${totals.attempted}; still thin ${totals.missing}.`
    );
    console.log(
        "Next: re-seed subjects if needed, then regenerate pages so HTML picks up new blurbs."
    );
    console.log("==============================================");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
