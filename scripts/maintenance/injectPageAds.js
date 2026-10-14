/**
 * Insert the non-home ad block into static HTML that does not boot the SPA.
 * Homepage shells are skipped. Entity routes are covered by client/src/pageAds.js.
 */
const fs = require("fs");
const path = require("path");
const { pageAdsHtml } = require("../lib/staticSeo");

const root = path.resolve(__dirname, "../..");
const snippet = `\n${pageAdsHtml()}`;
const categories = [
    "anime",
    "books",
    "card-games",
    "comics",
    "culinary",
    "fighting-games",
    "folklore",
    "history",
    "horror",
    "internet-culture",
    "movies",
    "music",
    "mythology",
    "podcasts",
    "sci-fi",
    "science-nature",
    "sports",
    "tabletop",
    "television",
    "theater",
    "toys",
    "video-games",
    "western-animation",
    "wrestling"
];

const files = categories.map((id) =>
    path.join(root, "docs", "category", id, "index.html")
);
files.push(path.join(root, "docs", "404.static.html"));

let updated = 0;
let skipped = 0;

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.error(`missing ${file}`);
        skipped += 1;
        continue;
    }

    const html = fs.readFileSync(file, "utf8");
    if (html.includes("tonolore-page-ads") || html.includes('id="root"')) {
        skipped += 1;
        continue;
    }
    if (!html.includes("</body>")) {
        skipped += 1;
        continue;
    }

    const next = html.replace("</body>", `${snippet}\n</body>`);
    fs.rmSync(file);
    fs.writeFileSync(file, next);
    updated += 1;
}

console.log(`page ads: updated ${updated}, skipped ${skipped}`);
