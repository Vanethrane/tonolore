/**
 * Backfill fair-use identification thumbnails for entities missing image_url.
 *
 * Prefer Fandom pageimages (360px), then Wikipedia. Does NOT paste subject logos
 * onto entities unless you pass --logo-fallback.
 *
 *   node scripts/maintenance/backfillEntityImages.js --replace-logo-fallbacks
 *   node scripts/maintenance/backfillEntityImages.js dragon-ball pokemon
 *   node scripts/maintenance/backfillEntityImages.js --limit=500 pokemon
 */

require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});

const fs = require("fs");
const path = require("path");
const { Client } = require("../../server/node_modules/pg");
const { SUBJECT_IDS } = require("../subjects/registry");
const SUBJECT_LOGOS = require("../subjects/logos");
const { getExpandConfig } = require("../lib/subjectExpandConfigs");
const {
    sleep,
    fetchPageIdentities
} = require("../lib/fandomClient");
const { wikipediaQuery } = require("../lib/wikiClient");

const BATCH = 40;
const FANDOM_PAUSE_MS = 220;
const WIKI_PAUSE_MS = 450;
const WIKI_RETRY_PAUSE_MS = 12000;

/** Current + prior subject marks that were wrongly reused as entity thumbs. */
function knownSubjectLogoUrls() {
    const urls = new Set(
        Object.values(SUBJECT_LOGOS)
            .map((logo) => logo.url)
            .filter(Boolean)
    );
    for (const url of [
        "https://static.wikia.nocookie.net/brandon-sanderson/images/9/90/Cosmere.jpg/revision/latest/scale-to-width-down/360?cb=20210913152822",
        "https://static.wikia.nocookie.net/wot/images/d/d4/Wotlogo.png/revision/latest/scale-to-width-down/360?cb=20101021174042",
        "https://static.wikia.nocookie.net/berserk/images/e/e6/Site-logo.png/revision/latest/scale-to-width-down/360?cb=20210511205325"
    ]) {
        urls.add(url);
    }
    return [...urls];
}

function normalizeThumbUrl(url) {
    if (!url) {
        return url;
    }
    return String(url)
        .replace(/\/scale-to-width-down\/\d+/i, "/scale-to-width-down/360")
        .replace(/\/\d+px-/i, "/360px-");
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
            ? JSON.parse(row.metadata)
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
    return titles.slice(0, 6);
}

async function fetchWikipediaIdentities(titles, credit) {
    if (!titles.length) {
        return new Map();
    }

    let data;
    for (let attempt = 0; attempt < 4; attempt += 1) {
        try {
            data = await wikipediaQuery({
                titles: titles.join("|"),
                redirects: "1",
                prop: "pageimages|info",
                piprop: "thumbnail|name",
                pithumbsize: "360",
                inprop: "url"
            });
            break;
        } catch (error) {
            const msg = String(error.message || error);
            if (!/429|rate/i.test(msg) || attempt === 3) {
                throw error;
            }
            await sleep(WIKI_RETRY_PAUSE_MS * (attempt + 1));
        }
    }

    const redirectTo = new Map();
    for (const row of data.query?.redirects || []) {
        redirectTo.set(row.from, row.to);
    }

    const byTitle = new Map();
    for (const page of Object.values(data.query?.pages || {})) {
        if (page.missing != null || page.invalid != null) {
            continue;
        }
        byTitle.set(page.title, page);
    }

    const out = new Map();
    for (const requested of titles) {
        const resolved = redirectTo.get(requested) || requested;
        const page = byTitle.get(resolved);
        if (!page?.thumbnail?.source) {
            continue;
        }
        const source =
            page.fullurl ||
            `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`;
        out.set(requested, {
            image_url: normalizeThumbUrl(page.thumbnail.source),
            image_source: source,
            image_credit: `Fair-use identification thumbnail via Wikipedia. ${credit} Not free or redistributable artwork.`,
            image_license: "fair_use",
            image_usage: "fair_use_identification",
            image_alt: `Identification thumbnail for ${page.title}`
        });
    }
    return out;
}

function logoFields(subjectId, entityName) {
    const logo = SUBJECT_LOGOS[subjectId];
    if (!logo?.url) {
        return null;
    }
    return {
        image_url: logo.url,
        image_source: logo.source || null,
        image_credit:
            logo.credit ||
            "Fair-use subject identification mark. Not free or redistributable artwork.",
        image_license: logo.license || "fair_use",
        image_usage: logo.usage || "fair_use_identification",
        image_alt: logo.alt || `Identification mark for ${entityName}`
    };
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
        image_backfill_at: new Date().toISOString(),
        image_backfill_count: updatesBySlug.size
    };

    fs.writeFileSync(expanded.outPath, JSON.stringify(data, null, 2));
}

async function updateEntityImage(client, id, fields) {
    await client.query(
        `
        UPDATE entities
        SET
            image_url = $2,
            image_source = $3,
            image_credit = $4,
            image_license = $5,
            image_usage = $6,
            image_alt = $7,
            updated_at = NOW()
        WHERE id = $1
        `,
        [
            id,
            fields.image_url,
            fields.image_source,
            fields.image_credit,
            fields.image_license,
            fields.image_usage,
            fields.image_alt
        ]
    );
}

async function clearLogoFallbacks(client, subjectIds, dryRun) {
    const logos = knownSubjectLogoUrls();
    const result = await client.query(
        `
        SELECT id, slug, metadata->>'universe' AS universe
        FROM entities
        WHERE metadata->>'universe' = ANY($1::text[])
          AND image_url = ANY($2::text[])
        `,
        [subjectIds, logos]
    );

    console.log(
        `\nClearing ${result.rows.length} subject-logo placeholders…`
    );

    if (dryRun || !result.rows.length) {
        return result.rows.length;
    }

    await client.query(
        `
        UPDATE entities
        SET
            image_url = NULL,
            image_source = NULL,
            image_credit = NULL,
            image_license = NULL,
            image_usage = NULL,
            image_alt = NULL,
            updated_at = NOW()
        WHERE id = ANY($1::uuid[])
        `,
        [result.rows.map((row) => row.id)]
    );

    const byUniverse = new Map();
    for (const row of result.rows) {
        if (!byUniverse.has(row.universe)) {
            byUniverse.set(row.universe, []);
        }
        byUniverse.get(row.universe).push(row.slug);
    }

    for (const [universe, slugs] of byUniverse) {
        const expanded = loadExpanded(universe);
        if (!expanded.data) {
            continue;
        }
        const clearFields = {
            image_url: null,
            image_source: null,
            image_credit: null,
            image_license: null,
            image_usage: null,
            image_alt: null
        };
        const updates = new Map(slugs.map((slug) => [slug, clearFields]));
        patchExpanded(expanded, updates);
        console.log(`  Cleared placeholders in ${universe} expanded.json`);
    }

    return result.rows.length;
}

async function backfillSubject(client, subjectId, opts) {
    const config = getExpandConfig(subjectId);
    const fandom = config?.fandom || null;
    const credit =
        fandom?.rightsCredit ||
        "Rights remain with the respective franchise holders.";
    const host = fandom?.host || null;

    const limit = opts.limit || null;
    const result = await client.query(
        `
        SELECT id, slug, name, wikipedia_url, metadata
        FROM entities
        WHERE metadata->>'universe' = $1
          AND (image_url IS NULL OR BTRIM(image_url) = '')
        ORDER BY name
        ${limit ? `LIMIT ${Number(limit)}` : ""}
        `,
        [subjectId]
    );

    const rows = result.rows;
    console.log(`\n=== ${subjectId} — ${rows.length} missing images ===`);
    if (!rows.length) {
        return { filled: 0, missing: 0, attempted: 0 };
    }

    const updatesBySlug = new Map();
    const remaining = new Map(rows.map((row) => [row.id, row]));

    if (opts.logoOnly) {
        let logoFilled = 0;
        for (const row of rows) {
            const fields = logoFields(subjectId, row.name);
            if (!fields) {
                continue;
            }
            if (!opts.dryRun) {
                await updateEntityImage(client, row.id, fields);
            }
            updatesBySlug.set(row.slug, fields);
            remaining.delete(row.id);
            logoFilled += 1;
        }
        console.log(`  Subject-logo fallback filled ${logoFilled}`);
        if (!opts.dryRun && updatesBySlug.size) {
            const expanded = loadExpanded(subjectId);
            patchExpanded(expanded, updatesBySlug);
            if (expanded.data) {
                console.log(`  Patched ${expanded.outPath}`);
            }
        }
        return {
            filled: updatesBySlug.size,
            missing: remaining.size,
            attempted: rows.length
        };
    }

    if (host) {
        const jobs = rows.map((row) => ({
            row,
            titles: candidateTitles(row)
        }));

        for (const batch of chunk(jobs, Math.max(8, Math.floor(BATCH / 2)))) {
            const titleSet = [];
            const seenTitles = new Set();
            for (const job of batch) {
                for (const title of job.titles) {
                    if (!seenTitles.has(title)) {
                        seenTitles.add(title);
                        titleSet.push(title);
                    }
                }
            }

            const map = new Map();
            for (const titleBatch of chunk(titleSet, BATCH)) {
                try {
                    const part = await fetchPageIdentities(
                        host,
                        titleBatch,
                        360
                    );
                    for (const [key, value] of part) {
                        map.set(key, value);
                    }
                } catch (error) {
                    console.warn(`  Fandom batch failed: ${error.message}`);
                    await sleep(800);
                }
                await sleep(FANDOM_PAUSE_MS);
            }

            for (const job of batch) {
                if (!remaining.has(job.row.id)) {
                    continue;
                }
                let identity = null;
                for (const title of job.titles) {
                    const hit = map.get(title);
                    if (hit?.thumbnail) {
                        identity = hit;
                        break;
                    }
                }
                if (!identity?.thumbnail) {
                    continue;
                }

                const fields = {
                    image_url: normalizeThumbUrl(identity.thumbnail),
                    image_source:
                        identity.fullurl ||
                        `https://${host}/wiki/${encodeURIComponent(identity.title.replace(/ /g, "_"))}`,
                    image_credit: `Fair-use identification thumbnail via Fandom. ${credit} Not free or redistributable artwork.`,
                    image_license: "fair_use",
                    image_usage: "fair_use_identification",
                    image_alt: `Identification thumbnail for ${job.row.name}`
                };

                if (!opts.dryRun) {
                    await updateEntityImage(client, job.row.id, fields);
                }
                updatesBySlug.set(job.row.slug, fields);
                remaining.delete(job.row.id);
            }

            process.stdout.write(
                `  fandom… filled ${updatesBySlug.size}/${rows.length}\r`
            );
        }
        console.log(
            `  Fandom filled ${updatesBySlug.size}; ${remaining.size} still missing`
        );
    } else {
        console.log("  No Fandom host configured — Wikipedia only");
    }

    const leftovers = [...remaining.values()];
    let wikiFilled = 0;
    if (!opts.fandomOnly && leftovers.length) {
        for (const batch of chunk(leftovers, BATCH)) {
            const titleById = new Map();
            const titles = [];
            for (const row of batch) {
                const candidates = candidateTitles(row);
                const title =
                    titleFromWikipediaUrl(row.wikipedia_url) ||
                    candidates[0] ||
                    row.name;
                if (!title) {
                    continue;
                }
                titleById.set(row.id, title);
                titles.push(title);
            }

            let map = new Map();
            try {
                map = await fetchWikipediaIdentities(titles, credit);
            } catch (error) {
                console.warn(`  Wikipedia batch failed: ${error.message}`);
                await sleep(900);
                continue;
            }

            for (const row of batch) {
                const title = titleById.get(row.id);
                const fields = title ? map.get(title) : null;
                if (!fields) {
                    continue;
                }
                const withAlt = {
                    ...fields,
                    image_alt: `Identification thumbnail for ${row.name}`
                };
                if (!opts.dryRun) {
                    await updateEntityImage(client, row.id, withAlt);
                }
                updatesBySlug.set(row.slug, withAlt);
                remaining.delete(row.id);
                wikiFilled += 1;
            }

            process.stdout.write(
                `  wiki… filled ${updatesBySlug.size}/${rows.length}\r`
            );
            await sleep(WIKI_PAUSE_MS);
        }

        console.log(
            `  Wikipedia filled ${wikiFilled}; ${remaining.size} still missing`
        );
    } else if (leftovers.length) {
        console.log(
            `  Skipping Wikipedia (${remaining.size} still missing)`
        );
    }

    if (opts.logoFallback) {
        let logoFilled = 0;
        for (const row of [...remaining.values()]) {
            const fields = logoFields(subjectId, row.name);
            if (!fields) {
                continue;
            }
            if (!opts.dryRun) {
                await updateEntityImage(client, row.id, fields);
            }
            updatesBySlug.set(row.slug, fields);
            remaining.delete(row.id);
            logoFilled += 1;
        }
        if (logoFilled) {
            console.log(`  Subject-logo fallback filled ${logoFilled}`);
        }
    }

    if (!opts.dryRun && updatesBySlug.size) {
        const expanded = loadExpanded(subjectId);
        patchExpanded(expanded, updatesBySlug);
        if (expanded.data) {
            console.log(`  Patched ${expanded.outPath}`);
        }
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
        logoFallback: false,
        logoOnly: false,
        replaceLogoFallbacks: false,
        fandomOnly: false,
        subjects: []
    };
    for (const arg of argv) {
        if (arg === "--dry-run") {
            opts.dryRun = true;
        } else if (arg === "--logo-fallback") {
            opts.logoFallback = true;
        } else if (arg === "--no-logo-fallback") {
            opts.logoFallback = false;
        } else if (arg === "--logo-only") {
            opts.logoOnly = true;
        } else if (arg === "--replace-logo-fallbacks") {
            opts.replaceLogoFallbacks = true;
        } else if (arg === "--fandom-only") {
            opts.fandomOnly = true;
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
        `Image backfill${opts.dryRun ? " (dry-run)" : ""} for: ${opts.subjects.join(", ")}`
    );

    const totals = { filled: 0, missing: 0, attempted: 0 };

    try {
        if (opts.replaceLogoFallbacks) {
            await clearLogoFallbacks(client, opts.subjects, opts.dryRun);
        }

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
        `Done. Filled ${totals.filled} / ${totals.attempted}; still missing ${totals.missing}.`
    );
    console.log("==============================================");
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
