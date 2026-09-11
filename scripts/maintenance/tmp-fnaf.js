require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");

(async () => {
    const c = new Client({ connectionString: process.env.DATABASE_URL });
    await c.connect();
    const r = await c.query(
        `SELECT e.slug, e.metadata->>'universe' AS universe, p.slug AS path
         FROM entities e
         JOIN pages p ON p.entity_id = e.id
         WHERE e.slug IN ('bonnie','foxy','chica','freddy-fazbear')
           AND e.metadata->>'universe' = 'five-nights-at-freddys'`
    );
    console.log(r.rows);

    const page = await c.query(
        `SELECT slug, substring(content from position('Bonnie' in content) for 200) AS snip
         FROM pages WHERE slug = '/five-nights-at-freddys'`
    );
    console.log(page.rows[0]);
    await c.end();
})().catch((e) => {
    console.error(e);
    process.exit(1);
});
