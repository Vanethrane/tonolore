require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");

(async () => {
    const c = new Client({ connectionString: process.env.DATABASE_URL });
    await c.connect();
    const cols = await c.query(
        "SELECT column_name FROM information_schema.columns WHERE table_name = 'entities' ORDER BY ordinal_position"
    );
    console.log(cols.rows.map((r) => r.column_name));
    const sample = await c.query(
        "SELECT slug, name, metadata FROM entities WHERE slug = 'monkey-d-luffy'"
    );
    console.log(JSON.stringify(sample.rows[0], null, 2));

    // current search for luffy
    const search = await c.query(
        `
        SELECT e.slug, e.name,
               CASE
                   WHEN e.name ILIKE $2 THEN 0
                   WHEN e.slug ILIKE $2 THEN 1
                   ELSE 2
               END AS rank
        FROM entities e
        WHERE e.name ILIKE $1 OR e.slug ILIKE $1 OR e.short_description ILIKE $1
        ORDER BY rank, e.name
        LIMIT 10
        `,
        ["%luffy%", "luffy%"]
    );
    console.log("current luffy results:", search.rows);
    await c.end();
})().catch((e) => {
    console.error(e);
    process.exit(1);
});
