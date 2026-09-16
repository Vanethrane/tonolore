/**
 * Rewrite stored listing image URLs down to a small CDN edge (anti-rip).
 * Does not re-fetch art — only shrinks Fandom/Wikimedia thumb parameters.
 *
 *   node scripts/maintenance/downscaleListingImages.js
 *   node scripts/maintenance/downscaleListingImages.js --edge=220 --limit=500
 */

const fs = require("fs");
const path = require("path");

const EDGE = Number(
    (process.argv.find((a) => a.startsWith("--edge=")) || "--edge=220").split(
        "="
    )[1]
);
const LIMIT = Number(
    (process.argv.find((a) => a.startsWith("--limit=")) || "--limit=0").split(
        "="
    )[1]
);

function shrinkUrl(url) {
    if (!url || typeof url !== "string") {
        return url;
    }
    let next = url.replace(
        /\/scale-to-width-down\/\d+/gi,
        `/scale-to-width-down/${EDGE}`
    );
    next = next.replace(/\/(\d+)px-/g, (match, n) => {
        const size = Number(n);
        return !Number.isFinite(size) || size > EDGE ? `/${EDGE}px-` : match;
    });
    return next;
}

function walk(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, out);
        else if (entry.name.endsWith(".json")) out.push(full);
    }
    return out;
}

function rewriteDoc(doc) {
    let changed = false;
    const touch = (obj, key) => {
        if (!obj || typeof obj[key] !== "string") return;
        const next = shrinkUrl(obj[key]);
        if (next !== obj[key]) {
            obj[key] = next;
            changed = true;
        }
    };

    if (doc.entity) {
        touch(doc.entity, "image_url");
    }
    for (const connection of doc.connections || []) {
        touch(connection, "image_url");
    }

    // HTML content may embed the same thumb URLs.
    if (typeof doc.page?.content === "string") {
        const next = doc.page.content
            .replace(
                /\/scale-to-width-down\/\d+/gi,
                `/scale-to-width-down/${EDGE}`
            )
            .replace(/\/(\d{3,4})px-/g, (match, n) => {
                const size = Number(n);
                return !Number.isFinite(size) || size > EDGE
                    ? `/${EDGE}px-`
                    : match;
            });
        if (next !== doc.page.content) {
            doc.page.content = next;
            changed = true;
        }
    }

    return changed;
}

function main() {
    const root = path.join(__dirname, "..", "..", "docs", "data", "pages");
    const files = walk(root);
    let scanned = 0;
    let fixed = 0;

    for (const file of files) {
        if (LIMIT && scanned >= LIMIT) break;
        scanned += 1;
        let doc;
        try {
            doc = JSON.parse(fs.readFileSync(file, "utf8"));
        } catch {
            continue;
        }
        if (!rewriteDoc(doc)) continue;
        try {
            fs.writeFileSync(file, `${JSON.stringify(doc)}\n`, "utf8");
            fixed += 1;
        } catch (err) {
            console.warn("skip", path.relative(process.cwd(), file), err.code);
        }
        if (fixed <= 10 || fixed % 2000 === 0) {
            console.log("shrunk", path.relative(process.cwd(), file));
        }
    }

    console.log({ edge: EDGE, scanned, fixed });
}

main();
