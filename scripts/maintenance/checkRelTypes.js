const fs = require("fs");
const path = require("path");
const {
    RELATIONSHIP_LABELS,
    EXTRA_RELATIONSHIP_TYPES
} = require("../lib/relationshipLabels");

const allowed = new Set([
    ...Object.keys(RELATIONSHIP_LABELS),
    ...EXTRA_RELATIONSHIP_TYPES
]);

const root = path.join(__dirname, "..", "subjects");
for (const id of fs.readdirSync(root)) {
    const file = path.join(root, id, "data.js");
    if (!fs.existsSync(file)) continue;
    const text = fs.readFileSync(file, "utf8");
    const types = [
        ...text.matchAll(/rel\([^,]+,\s*[^,]+,\s*"([^"]+)"/g)
    ].map((m) => m[1]);
    const bad = [...new Set(types.filter((t) => !allowed.has(t)))];
    if (bad.length) {
        console.log(`${id}: ${bad.join(", ")}`);
    }
}
