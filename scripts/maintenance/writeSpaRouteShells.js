/**
 * Write SPA index shells under each subject (and format hub) so
 * GitHub Pages returns HTTP 200 for deep routes instead of relying
 * only on soft-404 → 404.html.
 *
 * Skips category/* — those keep the static SEO shelves from exportStaticSite.
 *
 *   node scripts/maintenance/writeSpaRouteShells.js
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const docs = path.join(docsPath());

function docsPath() {
    return path.join(__dirname, "..", "..", "docs");
}

function readSubjects() {
    const file = path.join(docs, "data", "subjects.json");
    if (!fs.existsSync(file)) {
        throw new Error(`Missing ${file}`);
    }
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function spaShell() {
    const indexPath = path.join(docs, "index.html");
    if (!fs.existsSync(indexPath)) {
        throw new Error("Missing docs/index.html — run publishPages first");
    }
    return fs.readFileSync(indexPath, "utf8");
}

function routesFromCatalog(catalog) {
    const routes = new Set();
    for (const subject of catalog.subjects || []) {
        const pathValue = subject.path || `/${subject.id}`;
        routes.add(String(pathValue).replace(/^\/+|\/+$/g, ""));
        const hubs = subject.categoryPaths || {};
        for (const hubPath of Object.values(hubs)) {
            routes.add(String(hubPath).replace(/^\/+|\/+$/g, ""));
        }
    }
    // Do not write category/* shells — exportStaticSite owns those pages.
    return [...routes].filter(Boolean);
}

function writeFileRetry(filePath, contents) {
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    const tmp = `${filePath}.${process.pid}.tmp`;
    let lastError = null;

    for (let attempt = 0; attempt < 8; attempt += 1) {
        try {
            fs.writeFileSync(tmp, contents);
            try {
                fs.renameSync(tmp, filePath);
            } catch {
                // Some Windows locks block rename-over; fall back to direct write.
                fs.writeFileSync(filePath, contents);
                try {
                    fs.unlinkSync(tmp);
                } catch (_) {
                    /* ignore */
                }
            }
            return true;
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

function writeShell(rel, html) {
    const targets = [path.join(docs, rel), path.join(root, rel)];
    for (const dir of targets) {
        // Never overwrite a non-SPA category shelf that already exists.
        if (rel.startsWith("category/")) {
            continue;
        }
        writeFileRetry(path.join(dir, "index.html"), html);
    }
}

function main() {
    const html = spaShell();
    const catalog = readSubjects();
    const routes = routesFromCatalog(catalog);
    let written = 0;
    for (const rel of routes) {
        writeShell(rel, html);
        written += 1;
    }
    console.log(`Wrote ${written} SPA route shells to docs/ and repo root`);
}

main();
