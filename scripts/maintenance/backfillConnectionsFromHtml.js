/**
 * Backfill empty page.connections from entity links embedded in page HTML.
 *
 *   node scripts/maintenance/backfillConnectionsFromHtml.js
 *   node scripts/maintenance/backfillConnectionsFromHtml.js --limit=500
 */

const fs = require("fs");
const path = require("path");

// Mirror of client deriveConnections (CJS for scripts).
function stripTags(html) {
    return String(html || "")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/\s+/g, " ")
        .trim();
}

function normalizePath(href) {
    const raw = String(href || "").split("#")[0].split("?")[0].trim();
    if (!raw || raw === "/" || /^https?:\/\//i.test(raw)) {
        return "";
    }
    const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
    return withSlash.replace(/\/+$/, "") || "/";
}

function slugFromPath(p) {
    const parts = String(p || "")
        .replace(/^\/+/, "")
        .split("/")
        .filter(Boolean);
    return parts[parts.length - 1] || "";
}

function inferTypeFromPath(p, name) {
    const blob = `${p} ${name}`.toLowerCase();
    if (/\b(movies?|films?|tv|anime|series|books?|games?|comics?|manga)\b/.test(blob)) {
        return "work";
    }
    if (/\b(characters?|people|person)\b/.test(blob)) return "person";
    if (/\b(locations?|places?)\b/.test(blob)) return "place";
    if (/\b(items?|objects?)\b/.test(blob)) return "object";
    if (/\b(events?)\b/.test(blob)) return "event";
    if (/\b(organizations?|teams?)\b/.test(blob)) return "organization";
    return "topic";
}

function deriveConnections(doc) {
    if (Array.isArray(doc.connections) && doc.connections.length) {
        return null;
    }
    const selfPath = normalizePath(doc.page?.slug || "");
    const html = `${doc.page?.content || ""}\n${doc.page?.overview || ""}`;
    const byPath = new Map();
    const linkRe = /<a\s+([^>]*?)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi;
    let match;
    while ((match = linkRe.exec(html))) {
        const attrs = `${match[1] || ""} ${match[3] || ""}`;
        const p = normalizePath(match[2]);
        if (!p || p === selfPath) continue;
        const name = stripTags(match[4]);
        if (!name || name.length < 2 || name.length > 100) continue;
        if (/^(open|here|source|fandom wiki|wikipedia)\b/i.test(name)) continue;
        if (byPath.has(p)) continue;
        const relationship = /data-relationship="([^"]+)"/i.test(attrs)
            ? attrs.match(/data-relationship="([^"]+)"/i)[1]
            : "Connected To";
        byPath.set(p, {
            id: `derived:${p}`,
            entity_id: `derived:${p}`,
            name,
            slug: slugFromPath(p),
            path: p,
            type: inferTypeFromPath(p, name),
            relationship,
            title: relationship,
            explanation: `${name} is linked from this page.`,
            discovery_score: 0.55,
            strength: 1,
            image_url: null
        });
    }
    return [...byPath.values()];
}

function walk(dir, out = []) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) walk(full, out);
        else if (entry.name.endsWith(".json")) out.push(full);
    }
    return out;
}

function main() {
    const limitArg = process.argv.find((a) => a.startsWith("--limit="));
    const limit = limitArg ? Number(limitArg.split("=")[1]) : Infinity;
    const root = path.join(__dirname, "..", "..", "docs", "data", "pages");
    const files = walk(root);
    let scanned = 0;
    let filled = 0;
    let already = 0;

    for (const file of files) {
        if (scanned >= limit) break;
        scanned += 1;
        let doc;
        try {
            doc = JSON.parse(fs.readFileSync(file, "utf8"));
        } catch {
            continue;
        }
        if (Array.isArray(doc.connections) && doc.connections.length) {
            already += 1;
            continue;
        }
        const next = deriveConnections(doc);
        if (!next || !next.length) continue;
        doc.connections = next;
        let written = false;
        for (let attempt = 0; attempt < 6; attempt += 1) {
            try {
                fs.writeFileSync(file, `${JSON.stringify(doc)}\n`, "utf8");
                written = true;
                break;
            } catch (err) {
                if (attempt === 5) {
                    console.warn("skip write", path.relative(process.cwd(), file), err.code || err.message);
                } else {
                    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 40 * (attempt + 1));
                }
            }
        }
        if (!written) continue;
        filled += 1;
        if (filled <= 12 || filled % 1000 === 0) {
            console.log(`filled ${path.relative(process.cwd(), file)} (+${next.length})`);
        }
    }

    console.log({ scanned, filled, already });
}

main();
