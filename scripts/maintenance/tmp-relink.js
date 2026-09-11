const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "..", "generate", "pages", "generatePages.js");
let source = fs.readFileSync(file, "utf8");
const before = source;

source = source.replace(
    /<a href="\$\{pathFor\("([^"]+)"\)\}" class="entity-link">([^<]+)<\/a>/g,
    (_m, slug, label) => `\${link("${slug}", "${label}")}`
);

if (source === before) {
    console.error("No pathFor anchor replacements made");
    process.exit(1);
}

fs.writeFileSync(file, source);
console.log(
    "pathFor left:",
    (source.match(/pathFor\(/g) || []).length,
    "link() calls:",
    (source.match(/\$\{link\(/g) || []).length
);
