require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");

(async () => {
    const c = new Client({ connectionString: process.env.DATABASE_URL });
    await c.connect();
    const e = await c.query(
        `SELECT COUNT(*)::int AS n FROM entities WHERE metadata->>'universe' = 'cosmere'`
    );
    const p = await c.query(
        `SELECT COUNT(*)::int AS n
         FROM pages p
         JOIN entities e ON e.id = p.entity_id
         WHERE e.metadata->>'universe' = 'cosmere' AND p.status = 'published'`
    );
    console.log(`Cosmere entities: ${e.rows[0].n}`);
    console.log(`Cosmere pages: ${p.rows[0].n}`);
    await c.end();
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
