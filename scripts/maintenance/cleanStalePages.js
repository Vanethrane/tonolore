const { query } = require("./server/src/db");

const stale = [
    "/one-piece/raftel",
    "/one-piece/nefertari-lili"
];

(async () => {
    for (const slug of stale) {
        const result = await query(
            `DELETE FROM pages WHERE slug = $1 RETURNING slug`,
            [slug]
        );

        if (result.rowCount) {
            console.log(`? Deleted stale page: ${slug}`);
        } else {
            console.log(`- Already gone: ${slug}`);
        }
    }

    console.log("\n? Stale pages cleaned.");
})();
