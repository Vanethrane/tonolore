/**
 * Ensure Google Analytics tag (G-E57J1V5PJ1) is present once in every HTML shell.
 *
 *   node scripts/maintenance/injectGoogleTag.js
 */

const fs = require("fs");
const path = require("path");
const { ensureGoogleTag } = require("../lib/spaSeoInject");

const ROOT = path.join(__dirname, "..", "..");
const DOCS = path.join(ROOT, "docs");
const SKIP_DIRS = new Set(["data", "assets", "node_modules", ".git"]);

function walkHtml(dir, out = []) {
    if (!fs.existsSync(dir)) {
        return out;
    }
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            if (SKIP_DIRS.has(entry.name)) {
                continue;
            }
            walkHtml(full, out);
        } else if (entry.isFile() && entry.name.endsWith(".html")) {
            out.push(full);
        }
    }
    return out;
}

function main() {
    const files = [
        ...walkHtml(DOCS),
        path.join(ROOT, "client", "index.html")
    ].filter((file, index, all) => all.indexOf(file) === index);

    let scanned = 0;
    let fixed = 0;

    for (const file of files) {
        if (!fs.existsSync(file)) {
            continue;
        }
        scanned += 1;
        const html = fs.readFileSync(file, "utf8");
        if (!/<head[\s>]/i.test(html)) {
            continue;
        }
        const next = ensureGoogleTag(html);
        if (next === html) {
            continue;
        }
        fs.writeFileSync(file, next, "utf8");
        fixed += 1;
        if (fixed <= 15) {
            console.log("fixed", path.relative(ROOT, file));
        }
    }

    console.log(`Google tag inject: scanned=${scanned} fixed=${fixed}`);
}

main();
