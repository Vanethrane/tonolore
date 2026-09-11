const { query } = require("../../server/src/db");

(async () => {
    const e = await query(
        "select count(*)::int as c from entities where metadata->>'universe' = $1",
        ["one-piece"]
    );
    const r = await query("select count(*)::int as c from relationships");
    const p = await query(
        "select slug from pages where slug like $1 order by slug limit 6",
        ["/one-piece%"]
    );
    const sample = await query(
        `select e.name, count(r.id)::int as links
         from entities e
         left join relationships r
           on r.from_entity_id = e.id or r.to_entity_id = e.id
         where e.slug = 'monkey-d-luffy'
         group by e.name`
    );
    console.log({
        entities: e.rows[0].c,
        relationships: r.rows[0].c,
        samplePages: p.rows.map((row) => row.slug),
        luffy: sample.rows[0]
    });
    process.exit(0);
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
