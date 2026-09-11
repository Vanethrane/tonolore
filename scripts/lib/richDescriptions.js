/**
 * Shared rich-description helpers for expand + seed.
 *
 * Ensures entity blurbs are multi-paragraph wiki leads — never
 * "X is documented on wiki.fandom.com." stubs — before pages go live.
 */

const fs = require("fs");
const path = require("path");
const { getExpandConfig } = require("./subjectExpandConfigs");
const { sleep, fetchWikitextIntros } = require("./fandomClient");
const { wikipediaQuery } = require("./wikiClient");

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

    const paragraphs = raw
        .split(/\n\n+/)
        .map((part) => part.trim())
        .filter(Boolean);
    if (paragraphs.length >= 2 && raw.length >= 320) {
        return false;
    }
    if (raw.length < 480) {
        return true;
    }
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

function candidateTitles(entity) {
    const meta =
        typeof entity.metadata === "string"
            ? JSON.parse(entity.metadata || "{}")
            : entity.metadata || {};
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
    push(entity.name);
    push(String(entity.name || "").replace(/\s*\([^)]*\)\s*$/, "").trim());
    for (const alias of meta.aliases || entity.aliases || []) {
        push(alias);
    }
    push(titleFromWikipediaUrl(entity.wikipedia_url));
    return titles.slice(0, 5);
}

function preferIntro(prevDescription, intro) {
    if (!intro || intro.length < 80) {
        return false;
    }
    if (isStubDescription(prevDescription)) {
        return true;
    }
    const prevLen = String(prevDescription || "").length;
    return intro.length >= Math.max(prevLen + 40, 200);
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

function patchExpandedFile(subjectId, updatesBySlug) {
    if (!updatesBySlug.size) {
        return null;
    }

    const outPath = path.join(
        __dirname,
        "..",
        "subjects",
        subjectId,
        "expanded.json"
    );
    const data = fs.existsSync(outPath)
        ? JSON.parse(fs.readFileSync(outPath, "utf8"))
        : { enrichments: [], entities: [], relationships: [], stats: {} };

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
        description_ensure_at: new Date().toISOString(),
        description_ensure_count: updatesBySlug.size
    };

    fs.writeFileSync(outPath, JSON.stringify(data, null, 2));
    return outPath;
}

/**
 * Fill thin/stub descriptions on an in-memory entity list.
 * Also patches subjects/<id>/expanded.json so the next seed keeps the copy.
 */
async function ensureRichDescriptions(subjectId, entities, opts = {}) {
    const list = Array.isArray(entities) ? [...entities] : [];
    const host = getExpandConfig(subjectId)?.fandom?.host || null;
    const log = opts.silent
        ? () => {}
        : (...args) => console.log(...args);

    let targets = list
        .map((entity, index) => ({ entity, index }))
        .filter(({ entity }) => isThinDescription(entity.description));

    if (opts.limit != null) {
        targets = targets.slice(0, opts.limit);
    }

    if (!targets.length) {
        log(
            `[rich] ${subjectId}: descriptions already rich (${list.length} entities)`
        );
        return { entities: list, filled: 0, missing: 0, attempted: 0 };
    }

    log(
        `[rich] ${subjectId}: filling ${targets.length} thin/stub descriptions` +
            (host ? ` via ${host}` : " via Wikipedia")
    );

    const remaining = new Map(targets.map((row) => [row.entity.slug, row]));
    const updatesBySlug = new Map();

    const applyIntro = (row, intro) => {
        if (!preferIntro(row.entity.description, intro)) {
            return false;
        }
        const fields = {
            description: intro,
            short_description: shortFromIntro(intro)
        };
        list[row.index] = {
            ...list[row.index],
            ...fields
        };
        updatesBySlug.set(row.entity.slug, fields);
        remaining.delete(row.entity.slug);
        return true;
    };

    if (host) {
        for (const batch of chunk(targets, BATCH)) {
            const jobs = batch
                .filter((row) => remaining.has(row.entity.slug))
                .map((row) => ({
                    row,
                    titles: candidateTitles(row.entity)
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
                console.warn(`  [rich] Fandom batch failed: ${error.message}`);
                if (/429/.test(error.message)) {
                    await sleep(12000);
                } else {
                    await sleep(800);
                }
            }

            for (const job of jobs) {
                if (!remaining.has(job.row.entity.slug)) {
                    continue;
                }
                let intro = null;
                for (const title of job.titles) {
                    if (introMap.get(title)) {
                        intro = introMap.get(title);
                        break;
                    }
                }
                applyIntro(job.row, intro);
            }

            process.stdout.write(
                `  [rich] fandom… ${updatesBySlug.size}/${targets.length}\r`
            );
            await sleep(opts.delayMs || FANDOM_PAUSE_MS);
        }
        log(
            `  [rich] Fandom filled ${updatesBySlug.size}; ${remaining.size} still thin`
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
                    titleFromWikipediaUrl(row.entity.wikipedia_url) ||
                    candidateTitles(row.entity)[0] ||
                    row.entity.name;
                if (!title) {
                    continue;
                }
                titleBySlug.set(row.entity.slug, title);
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
                    console.warn(
                        `  [rich] Wikipedia batch failed: ${error.message}`
                    );
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
                const title = titleBySlug.get(row.entity.slug);
                const intro = title ? extractMap.get(title) : null;
                if (applyIntro(row, intro)) {
                    wikiFilled += 1;
                }
            }

            await sleep(WIKI_PAUSE_MS);
        }
        if (wikiFilled) {
            log(`  [rich] Wikipedia filled ${wikiFilled}`);
        }
    }

    if (!opts.dryRun) {
        const patched = patchExpandedFile(subjectId, updatesBySlug);
        if (patched) {
            log(`  [rich] Patched ${patched}`);
        }
    }

    // Never leave stub strings on entities that still lack prose.
    for (const row of remaining.values()) {
        if (isStubDescription(list[row.index].description)) {
            const short = list[row.index].short_description;
            list[row.index] = {
                ...list[row.index],
                description: "",
                short_description:
                    short && !isStubDescription(short) ? short : undefined
            };
        }
    }

    return {
        entities: list,
        filled: updatesBySlug.size,
        missing: remaining.size,
        attempted: targets.length
    };
}

module.exports = {
    isStubDescription,
    isThinDescription,
    shortFromIntro,
    preferIntro,
    candidateTitles,
    ensureRichDescriptions,
    fetchWikipediaExtracts,
    patchExpandedFile
};
