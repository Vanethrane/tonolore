const { query } = require("../../server/src/db");

(async () => {
    const entities = await query(
        "select count(*)::int as c from entities where metadata->>'universe' = $1",
        ["one-piece"]
    );
    const pages = await query(
        "select count(*)::int as c from pages where slug like $1",
        ["/one-piece%"]
    );
    const imaged = await query(
        "select count(*)::int as c from entities where metadata->>'universe' = $1 and image_url is not null",
        ["one-piece"]
    );
    const rels = await query("select count(*)::int as c from relationships");
    const sample = await query(
        `select name, image_license, left(image_url, 70) as image
         from entities
         where metadata->>'universe' = 'one-piece'
           and image_url is not null
         order by name
         limit 8`
    );

    console.log({
        entities: entities.rows[0].c,
        pages: pages.rows[0].c,
        with_fair_use_images: imaged.rows[0].c,
        relationships: rels.rows[0].c,
        sample_images: sample.rows
    });
    process.exit(0);
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
