/**
 * Build robots.txt and a sitemap index from the pages actually published
 * under docs/data/pages plus the category shelves.
 *
 *   node scripts/maintenance/buildSitemapFromPages.js
 */
const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "../..");
const docs = path.join(root, "docs");
const SITE = "https://www.tonolore.com";
const SHARD = 10000;
const today = new Date().toISOString().slice(0, 10);

function escapeXml(value) {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function walkJson(dir, out) {
    let entries;
    try {
        entries = fs.readdirSync(dir, { withFileTypes: true });
    } catch {
        return;
    }
    for (const entry of entries) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkJson(full, out);
        } else if (entry.isFile() && entry.name.endsWith(".json")) {
            out.push(full);
        }
    }
}

const pagesDir = path.join(docs, "data", "pages");
const files = [];
walkJson(pagesDir, files);

const urls = new Map();
function add(loc, priority, lastmod) {
    if (!urls.has(loc)) {
        urls.set(loc, { loc, priority, lastmod });
    }
}

add(`${SITE}/`, "1.0", today);

const categoryDir = path.join(docs, "category");
if (fs.existsSync(categoryDir)) {
    for (const entry of fs.readdirSync(categoryDir, { withFileTypes: true })) {
        if (!entry.isDirectory()) {
            continue;
        }
        const index = path.join(categoryDir, entry.name, "index.html");
        if (fs.existsSync(index)) {
            add(`${SITE}/category/${entry.name}`, "0.8", today);
        }
    }
}

for (const file of files) {
    const rel = path
        .relative(pagesDir, file)
        .replace(/\\/g, "/")
        .replace(/\.json$/, "");
    if (!rel || rel.split("/").includes("..")) {
        continue;
    }
    const depth = rel.split("/").length;
    const lastmod = fs.statSync(file).mtime.toISOString().slice(0, 10);
    add(`${SITE}/${rel}`, depth === 1 ? "0.7" : "0.5", lastmod);
}

const list = [...urls.values()].sort((a, b) => a.loc.localeCompare(b.loc));
const shardDir = path.join(docs, "sitemaps");
fs.mkdirSync(shardDir, { recursive: true });
for (const old of fs.readdirSync(shardDir)) {
    if (old.endsWith(".xml")) {
        fs.rmSync(path.join(shardDir, old));
    }
}

const shardNames = [];
for (let i = 0; i < list.length; i += SHARD) {
    const chunk = list.slice(i, i + SHARD);
    const name = `sitemap-${String(shardNames.length + 1).padStart(3, "0")}.xml`;
    const body = chunk
        .map(
            (url) => `  <url>
    <loc>${escapeXml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`
        )
        .join("\n");
    fs.writeFileSync(
        path.join(shardDir, name),
        `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`
    );
    shardNames.push(name);
}

const index = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${shardNames
    .map(
        (name) => `  <sitemap>
    <loc>${SITE}/sitemaps/${name}</loc>
    <lastmod>${today}</lastmod>
  </sitemap>`
    )
    .join("\n")}
</sitemapindex>
`;

fs.writeFileSync(path.join(docs, "sitemap.xml"), index);

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`;
fs.writeFileSync(path.join(docs, "robots.txt"), robots);
fs.writeFileSync(path.join(root, "robots.txt"), robots);
fs.copyFileSync(path.join(docs, "sitemap.xml"), path.join(root, "sitemap.xml"));

const rootShards = path.join(root, "sitemaps");
fs.mkdirSync(rootShards, { recursive: true });
for (const old of fs.readdirSync(rootShards)) {
    if (old.endsWith(".xml")) {
        fs.rmSync(path.join(rootShards, old));
    }
}
for (const name of shardNames) {
    fs.copyFileSync(path.join(shardDir, name), path.join(rootShards, name));
}

console.log(
    `sitemap: ${list.length} urls in ${shardNames.length} shards → ${SITE}/sitemap.xml`
);
