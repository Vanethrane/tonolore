/**
 * Rebuild compact, sharded search index for the static SPA.
 *
 * Writes:
 *   docs/data/search-index.json          (meta + subjects + shard map)
 *   docs/data/search/shards/<id>.json    (compact entity rows)
 *   mirrors under data/ as well
 *
 *   node scripts/maintenance/rebuildSearchIndex.js
 */

require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");

const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");

function writeFileRetry(filePath, contents) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const tmp = `${filePath}.${process.pid}.tmp`;
    let lastError = null;
    for (let attempt = 0; attempt < 8; attempt += 1) {
        try {
            fs.writeFileSync(tmp, contents);
            try {
                fs.renameSync(tmp, filePath);
            } catch {
                fs.writeFileSync(filePath, contents);
                try {
                    fs.unlinkSync(tmp);
                } catch (_) {
                    /* ignore */
                }
            }
            return;
        } catch (error) {
            lastError = error;
            try {
                fs.unlinkSync(tmp);
            } catch (_) {
                /* ignore */
            }
            const end = Date.now() + 200 * (attempt + 1);
            while (Date.now() < end) {
                /* backoff */
            }
        }
    }
    throw lastError || new Error(`Failed to write ${filePath}`);
}

function writeBoth(rel, contents) {
    writeFileRetry(path.join(docs, rel), contents);
    writeFileRetry(path.join(root, rel), contents);
}

function normalize(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, " ");
}

function shardIdForName(name) {
    const norm = normalize(name);
    const ch = norm.charAt(0);
    if (ch >= "a" && ch <= "z") {
        return ch;
    }
    if (ch >= "0" && ch <= "9") {
        return "0";
    }
    return "_";
}

function compactEntity(row) {
    const metadata =
        typeof row.metadata === "string"
            ? JSON.parse(row.metadata || "{}")
            : row.metadata || {};
    const aliases = Array.isArray(metadata.aliases)
        ? metadata.aliases.map((alias) => String(alias).trim()).filter(Boolean).slice(0, 12)
        : [];

    return {
        id: row.id,
        n: row.name,
        s: row.slug,
        p: row.page_slug || `/${row.slug}`,
        t: row.type || "topic",
        a: aliases
    };
}

async function main() {
    console.log("Rebuilding sharded search index…");
    const result = await query(`
        SELECT
            e.id,
            e.slug,
            e.name,
            e.type,
            e.metadata,
            p.slug AS page_slug
        FROM pages p
        JOIN entities e ON e.id = p.entity_id
        WHERE p.status = 'published'
        ORDER BY e.name
    `);

    const shards = new Map();
    for (const row of result.rows) {
        const entity = compactEntity(row);
        const shardId = shardIdForName(entity.n);
        if (!shards.has(shardId)) {
            shards.set(shardId, []);
        }
        shards.get(shardId).push(entity);
    }

    // Clear prior shards
    for (const base of [docs, root]) {
        const dir = path.join(base, "data", "search", "shards");
        if (fs.existsSync(dir)) {
            for (const name of fs.readdirSync(dir)) {
                if (name.endsWith(".json")) {
                    try {
                        fs.unlinkSync(path.join(dir, name));
                    } catch (_) {
                        /* ignore */
                    }
                }
            }
        }
    }

    const shardIds = [...shards.keys()].sort();
    for (const shardId of shardIds) {
        const payload = {
            id: shardId,
            count: shards.get(shardId).length,
            entities: shards.get(shardId)
        };
        writeBoth(
            path.join("data", "search", "shards", `${shardId}.json`),
            `${JSON.stringify(payload)}\n`
        );
    }

    let subjects = [];
    const subjectsPath = path.join(docs, "data", "subjects.json");
    if (fs.existsSync(subjectsPath)) {
        try {
            const catalog = JSON.parse(fs.readFileSync(subjectsPath, "utf8"));
            subjects = (catalog.subjects || []).map((subject) => ({
                id: subject.id,
                n: subject.name,
                s: subject.id,
                p: subject.path || `/${subject.id}`,
                t: "subject",
                a: Array.isArray(subject.aliases) ? subject.aliases.slice(0, 8) : []
            }));
        } catch (_) {
            subjects = [];
        }
    }

    const meta = {
        version: 2,
        sharded: true,
        generated_at: new Date().toISOString(),
        count: result.rows.length,
        shards: shardIds,
        subjects,
        // Tiny bootstrap list for instant hits on very common roots
        entities: subjects.slice(0, 0)
    };

    writeBoth("data/search-index.json", `${JSON.stringify(meta)}\n`);

    // Legacy monolithic compact fallback (no descriptions) for older clients
    const compactAll = {
        version: 2,
        generated_at: meta.generated_at,
        count: result.rows.length,
        entities: result.rows.map(compactEntity)
    };
    writeBoth(
        "data/search-index-full.json",
        `${JSON.stringify(compactAll)}\n`
    );

    console.log(
        `Wrote ${result.rows.length} entities across ${shardIds.length} shards + ${subjects.length} subjects`
    );
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
