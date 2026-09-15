/**
 * GSC-aligned query opportunity report from the live search index.
 * Use alongside Search Console → Queries (export CSV optional).
 *
 *   node scripts/maintenance/gscQueryOpportunities.js
 *   node scripts/maintenance/gscQueryOpportunities.js --gsc-csv=path/to/Queries.csv
 */

const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");
const SITE = "https://www.tonolore.com";

function parseArgs(argv) {
    const csv = argv.find((arg) => arg.startsWith("--gsc-csv="));
    return {
        csvPath: csv ? csv.slice("--gsc-csv=".length) : null,
        top: Number(
            (argv.find((arg) => arg.startsWith("--top=")) || "--top=40").slice(6)
        )
    };
}

function loadSearchIndex() {
    const file = path.join(docs, "data", "search-index.json");
    if (!fs.existsSync(file)) {
        throw new Error(`Missing ${file}`);
    }
    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function parseGscCsv(filePath) {
    if (!filePath || !fs.existsSync(filePath)) {
        return [];
    }
    const raw = fs.readFileSync(filePath, "utf8").replace(/^\uFEFF/, "");
    const lines = raw.split(/\r?\n/).filter(Boolean);
    if (lines.length < 2) {
        return [];
    }
    const headers = lines[0].split(",").map((h) => h.trim().toLowerCase());
    const qIdx = headers.findIndex((h) => h.includes("query") || h === "top queries");
    const iIdx = headers.findIndex((h) => h.includes("impression"));
    const cIdx = headers.findIndex((h) => h.includes("click"));
    const pIdx = headers.findIndex((h) => h.includes("position"));
    const ctrIdx = headers.findIndex((h) => h === "ctr" || h.includes("ctr"));

    return lines.slice(1).map((line) => {
        // naive CSV split; GSC exports are simple
        const cols = line.match(/("([^"]|"")*"|[^,]*)/g) || [];
        const clean = (i) =>
            i < 0
                ? ""
                : String(cols[i] || "")
                      .replace(/^"|"$/g, "")
                      .replace(/""/g, '"')
                      .trim();
        return {
            query: clean(qIdx),
            impressions: Number(String(clean(iIdx)).replace(/[^0-9.]/g, "")) || 0,
            clicks: Number(String(clean(cIdx)).replace(/[^0-9.]/g, "")) || 0,
            position: Number(String(clean(pIdx)).replace(/[^0-9.]/g, "")) || 0,
            ctr: clean(ctrIdx)
        };
    }).filter((row) => row.query);
}

function scoreEntity(entity) {
    const name = String(entity.name || "");
    const aliases = Array.isArray(entity.aliases) ? entity.aliases : [];
    const desc = String(entity.short_description || "");
    let score = 0;
    // Prefer distinctive multi-word names (query-like)
    if (name.split(/\s+/).length >= 2) score += 2;
    if (name.length >= 8 && name.length <= 40) score += 2;
    if (aliases.length) score += Math.min(3, aliases.length);
    if (desc.length >= 80) score += 2;
    if (entity.path || entity.slug) score += 1;
    return score;
}

function main() {
    const opts = parseArgs(process.argv.slice(2));
    const index = loadSearchIndex();
    const entities = index.entities || [];

    const ranked = [...entities]
        .map((entity) => ({ entity, score: scoreEntity(entity) }))
        .sort((a, b) => b.score - a.score || a.entity.name.localeCompare(b.entity.name))
        .slice(0, opts.top);

    console.log("=== GSC hygiene (Ton-o-Lore) ===");
    console.log(
        "1) Ignore the last 1–2 days in Search Console — the cliff is processing lag, not a ranking loss."
    );
    console.log(
        "2) Review Queries in GSC for the ~9/8 impression peak; export CSV and re-run with --gsc-csv=..."
    );
    console.log(
        "3) Keep publishing steady — fill workers + SEO shells + sitemap refresh support crawl velocity."
    );
    console.log("");
    console.log(`Search index entities: ${entities.length}`);
    console.log(`Top ${opts.top} on-site query-shaped targets (name/alias strength):`);
    for (const row of ranked) {
        const e = row.entity;
        const href = `${SITE}${String(e.path || `/${e.slug}`).startsWith("/") ? "" : "/"}${e.path || e.slug}`;
        console.log(
            `- ${e.name}  score=${row.score}  ${href}`
        );
    }

    const gsc = parseGscCsv(opts.csvPath);
    if (gsc.length) {
        console.log("");
        console.log(`GSC Queries from ${opts.csvPath} (top by impressions):`);
        const top = [...gsc]
            .sort((a, b) => b.impressions - a.impressions)
            .slice(0, opts.top);
        for (const row of top) {
            console.log(
                `- "${row.query}"  impr=${row.impressions}  clicks=${row.clicks}  pos=${row.position}  ctr=${row.ctr}`
            );
        }

        // Match GSC queries to on-site entities for title/CTR follow-ups
        console.log("");
        console.log("Matches to on-site entities (improve these titles/descriptions first):");
        let matched = 0;
        for (const row of top) {
            const q = row.query.toLowerCase();
            const hit = entities.find((entity) => {
                const name = String(entity.name || "").toLowerCase();
                const aliases = (entity.aliases || []).map((a) =>
                    String(a).toLowerCase()
                );
                return (
                    name === q ||
                    name.includes(q) ||
                    q.includes(name) ||
                    aliases.some((a) => a === q || a.includes(q) || q.includes(a))
                );
            });
            if (hit) {
                matched += 1;
                const href = `${SITE}${hit.path || `/${hit.slug}`}`;
                console.log(
                    `  "${row.query}" → ${hit.name}  (${href})  pos=${row.position}`
                );
            }
        }
        console.log(`Matched ${matched}/${top.length} top queries to entities.`);
    } else {
        console.log("");
        console.log(
            "No GSC CSV loaded. In Search Console → Search results → Queries → Export → save as CSV, then:"
        );
        console.log(
            "  node scripts/maintenance/gscQueryOpportunities.js --gsc-csv=Queries.csv"
        );
    }
}

main();
