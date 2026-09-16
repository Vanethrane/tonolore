/**
 * Repair broken wiki-prose holes in static page JSON (and optionally DB).
 *
 * Fixes patterns like:
 *   "Pikachu is an -type Pokémon who a"
 *   "who appears in ."
 *   leftover Category: lines / template crumbs
 *
 * Usage:
 *   node scripts/repairBrokenWikiProse.js
 *   node scripts/repairBrokenWikiProse.js --db
 *   node scripts/repairBrokenWikiProse.js --dry-run
 */

const fs = require("fs");
const path = require("path");
const {
    scrubProseHoles,
    scrubWikiText,
    hasBrokenWikiProse,
    inferMissingTypeLabel
} = require("./lib/wikiPlainText");

const ROOT = path.join(__dirname, "..");
const PAGES_DIR = path.join(ROOT, "docs", "data", "pages");

const HOLE_HINT =
    /\ban?\s+-types?\b|\bappears in\s*\.|\bwho\s+a\b|\bin\s+\.|\bCategory:|\{\{|\[\[|known as\s+in\s+/i;

function walkJsonFiles(dir, out = []) {
    if (!fs.existsSync(dir)) {
        return out;
    }
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkJsonFiles(full, out);
        } else if (entry.isFile() && entry.name.endsWith(".json")) {
            out.push(full);
        }
    }
    return out;
}

function repairPlain(value, hintText = "") {
    if (!value || typeof value !== "string") {
        return value;
    }
    let next = value;
    if (HOLE_HINT.test(next) || hasBrokenWikiProse(next)) {
        next = scrubWikiText(next, { hintText });
    }
    return restoreInferredType(next, hintText);
}

function restoreInferredType(text, hintText = "") {
    if (!text || typeof text !== "string" || !hintText) {
        return text;
    }
    if (/\b[A-Z][a-z]+(?:-[A-Z][a-z]+)?-type\b/.test(text)) {
        return text;
    }
    const typed = String(hintText).match(
        /\b(?:is|was|are|were)\s+an?\s+([A-Z][a-z]+(?:-[A-Z][a-z]+)?)-type\b/
    );
    const label = typed?.[1] || inferMissingTypeLabel("", hintText);
    if (!label) {
        return text;
    }
    const article = /^[aeiou]/i.test(label) ? "an" : "a";
    return text.replace(
        /\b(is|was|are|were)\s+a\s+(Pokémon|Pokemon)\b/,
        (_, verb, noun) => `${verb} ${article} ${label}-type ${noun}`
    );
}

function repairHtml(value, hintText = "") {
    if (!value || typeof value !== "string") {
        return value;
    }
    let next = value;
    if (HOLE_HINT.test(next)) {
        next = scrubProseHoles(next, { hintText });
    }
    return restoreInferredType(next, hintText);
}

function repairPageDocument(doc) {
    let changed = false;
    const hint = doc.entity?.description || "";
    const touch = (obj, key, repairFn) => {
        if (!obj || typeof obj[key] !== "string") {
            return;
        }
        const next = repairFn(obj[key]);
        if (next !== obj[key]) {
            obj[key] = next;
            changed = true;
        }
    };

    if (doc.entity) {
        touch(doc.entity, "description", (v) => repairPlain(v));
        touch(doc.entity, "short_description", (v) => repairPlain(v, hint || doc.entity.description));
        touch(doc.entity, "image_alt", (v) => repairPlain(v, hint));
    }
    const descHint = doc.entity?.description || hint;
    if (doc.page) {
        touch(doc.page, "meta_description", (v) => repairPlain(v, descHint));
        touch(doc.page, "meta_title", (v) => repairPlain(v));
        touch(doc.page, "title", (v) => repairPlain(v));
        touch(doc.page, "content", (v) => repairHtml(v, descHint));
        touch(doc.page, "overview", (v) => repairHtml(v, descHint));
    }

    // Nested connection blurbs sometimes copy the broken lead.
    const scrubDeepStrings = (node) => {
        if (!node || typeof node !== "object") {
            return;
        }
        if (Array.isArray(node)) {
            for (const item of node) {
                scrubDeepStrings(item);
            }
            return;
        }
        for (const [key, val] of Object.entries(node)) {
            if (typeof val === "string" && HOLE_HINT.test(val)) {
                const next =
                    /<|>/.test(val) ? repairHtml(val, descHint) : repairPlain(val, descHint);
                if (next !== val) {
                    node[key] = next;
                    changed = true;
                }
            } else if (val && typeof val === "object") {
                scrubDeepStrings(val);
            }
        }
    };

    scrubDeepStrings(doc.connections);
    scrubDeepStrings(doc.rabbit_holes);

    return changed;
}

async function repairDatabase() {
    let pool;
    try {
        ({ pool } = require("../server/db"));
    } catch (err) {
        console.warn("DB module unavailable:", err.message);
        return { updated: 0, skipped: true };
    }

    try {
        const { rows } = await pool.query(
            `SELECT id, description, short_description
             FROM entities
             WHERE description ~* $1
                OR short_description ~* $1`,
            [
                String.raw`(an?\s+-type|appears in\s*\.|who\s+a\b|Category:|\{\{|\[\[)`
            ]
        );

        let updated = 0;
        for (const row of rows) {
            const description = repairPlain(row.description || "");
            const short_description = repairPlain(
                row.short_description || "",
                description
            );
            if (
                description === row.description &&
                short_description === row.short_description
            ) {
                continue;
            }
            await pool.query(
                `UPDATE entities
                 SET description = $2,
                     short_description = $3,
                     updated_at = NOW()
                 WHERE id = $1`,
                [row.id, description, short_description]
            );
            updated += 1;
        }

        // Page HTML / meta
        const pageRows = await pool.query(
            `SELECT id, content, meta_description, overview
             FROM pages
             WHERE content ~* $1
                OR meta_description ~* $1
                OR COALESCE(overview, '') ~* $1`,
            [
                String.raw`(an?\s+-type|appears in\s*\.|who\s+a\b|Category:)`
            ]
        );

        for (const row of pageRows.rows) {
            const content = repairHtml(row.content || "");
            const meta_description = repairPlain(row.meta_description || "");
            const overview = row.overview
                ? repairHtml(row.overview)
                : row.overview;
            if (
                content === row.content &&
                meta_description === row.meta_description &&
                overview === row.overview
            ) {
                continue;
            }
            await pool.query(
                `UPDATE pages
                 SET content = $2,
                     meta_description = $3,
                     overview = $4,
                     updated_at = NOW()
                 WHERE id = $1`,
                [row.id, content, meta_description, overview]
            );
            updated += 1;
        }

        return { updated, scannedEntities: rows.length, scannedPages: pageRows.rows.length };
    } finally {
        await pool.end().catch(() => {});
    }
}

async function main() {
    const dryRun = process.argv.includes("--dry-run");
    const withDb = process.argv.includes("--db");

    const files = walkJsonFiles(PAGES_DIR);
    let scanned = 0;
    let changedFiles = 0;
    let holeFiles = 0;

    for (const file of files) {
        scanned += 1;
        let raw;
        try {
            raw = fs.readFileSync(file, "utf8");
        } catch {
            continue;
        }
        if (
            !HOLE_HINT.test(raw) &&
            !(
                /\bis a (?:Pokémon|Pokemon)\b/.test(raw) &&
                /\bis an? [A-Z][a-z]+(?:-[A-Z][a-z]+)?-type\b/.test(raw)
            )
        ) {
            continue;
        }
        holeFiles += 1;

        let doc;
        try {
            doc = JSON.parse(raw);
        } catch {
            console.warn("skip invalid JSON:", path.relative(ROOT, file));
            continue;
        }

        const changed = repairPageDocument(doc);
        if (!changed) {
            continue;
        }
        changedFiles += 1;
        if (!dryRun) {
            let written = false;
            for (let attempt = 0; attempt < 5; attempt += 1) {
                try {
                    fs.writeFileSync(file, `${JSON.stringify(doc)}\n`, "utf8");
                    written = true;
                    break;
                } catch (err) {
                    if (attempt === 4) {
                        console.warn(
                            "write failed:",
                            path.relative(ROOT, file),
                            err.code || err.message
                        );
                    } else {
                        Atomics.wait(
                            new Int32Array(new SharedArrayBuffer(4)),
                            0,
                            0,
                            50 * (attempt + 1)
                        );
                    }
                }
            }
            if (!written) {
                changedFiles -= 1;
                continue;
            }
        }
        if (changedFiles <= 20 || changedFiles % 500 === 0) {
            console.log(
                `${dryRun ? "[dry-run] " : ""}fixed ${path.relative(ROOT, file)}`
            );
        }
    }

    console.log(
        `\nStatic pages: scanned=${scanned} holeHits=${holeFiles} fixed=${changedFiles}${
            dryRun ? " (dry-run)" : ""
        }`
    );

    if (withDb) {
        try {
            const result = await repairDatabase();
            if (result.skipped) {
                console.log("DB repair skipped");
            } else {
                console.log(
                    `DB: entities=${result.scannedEntities} pages=${result.scannedPages} updated=${result.updated}`
                );
            }
        } catch (err) {
            console.warn("DB repair failed:", err.message);
        }
    }
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
