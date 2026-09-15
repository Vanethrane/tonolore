/**
 * Rebuild sitemap index + ≤10k URL shards from docs/sitemap.xml or page JSON.
 *   node scripts/maintenance/rebuildSitemapShards.js
 */
const fs = require("fs");
const path = require("path");
const {
    writeSitemapArtifacts,
    buildRobotsTxt
} = require("../lib/staticSeo");

const SITE = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");
const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");

function parseUrlset(file) {
    if (!fs.existsSync(file)) {
        return [];
    }
    const xml = fs.readFileSync(file, "utf8");
    const entries = [];
    const re =
        /<url>\s*<loc>([^<]+)<\/loc>(?:\s*<lastmod>([^<]*)<\/lastmod>)?/g;
    let match;
    while ((match = re.exec(xml))) {
        entries.push({
            loc: match[1],
            lastmod: match[2] || undefined,
            priority: "0.7",
            changefreq: "weekly"
        });
    }
    return entries;
}

function parseSitemap(file) {
    if (!fs.existsSync(file)) {
        return [];
    }
    const xml = fs.readFileSync(file, "utf8");
    if (!xml.includes("<sitemapindex")) {
        return parseUrlset(file);
    }
    const entries = [];
    const locRe = /<loc>([^<]+)<\/loc>/g;
    let match;
    while ((match = locRe.exec(xml))) {
        const loc = match[1];
        if (!/sitemap-\d+\.xml$/i.test(loc)) {
            continue;
        }
        const name = loc.split("/").pop();
        entries.push(...parseUrlset(path.join(docs, name)));
    }
    return entries;
}

function walkPages(dir, out = []) {
    if (!fs.existsSync(dir)) {
        return out;
    }
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkPages(full, out);
        } else if (entry.isFile() && entry.name.endsWith(".json")) {
            const rel = path
                .relative(path.join(docs, "data", "pages"), full)
                .replace(/\\/g, "/")
                .replace(/\.json$/i, "");
            out.push({
                loc: `${SITE}/${rel}`,
                priority: "0.7",
                changefreq: "weekly"
            });
        }
    }
    return out;
}

function main() {
    let entries = parseSitemap(path.join(docs, "sitemap.xml"));
    if (entries.length < 100) {
        entries = [
            { loc: `${SITE}/`, priority: "1.0", changefreq: "daily" },
            ...walkPages(path.join(docs, "data", "pages"))
        ];
    }
    // Dedupe
    const seen = new Set();
    entries = entries.filter((entry) => {
        const key = entry.loc;
        if (seen.has(key)) {
            return false;
        }
        seen.add(key);
        return true;
    });

    const infoDocs = writeSitemapArtifacts(docs, SITE, entries);
    writeSitemapArtifacts(root, SITE, entries);
    fs.writeFileSync(path.join(docs, "robots.txt"), buildRobotsTxt(SITE));
    fs.writeFileSync(path.join(root, "robots.txt"), buildRobotsTxt(SITE));
    console.log(infoDocs);
}

main();
