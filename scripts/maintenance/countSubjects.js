const { query } = require("../../server/src/db");

(async () => {
    const subjects = [
        "one-piece",
        "star-wars",
        "five-nights-at-freddys",
        "harry-potter",
        "pokemon",
        "lord-of-the-rings"
    ];

    let totalEntities = 0;
    let totalPages = 0;

    for (const universe of subjects) {
        const entities = await query(
            "select count(*)::int as c from entities where metadata->>'universe' = $1",
            [universe]
        );
        const pages = await query(
            "select count(*)::int as c from pages where slug like $1",
            [`/${universe}%`]
        );
        const e = entities.rows[0].c;
        const p = pages.rows[0].c;
        totalEntities += e;
        totalPages += p;
        console.log(universe, { entities: e, pages: p });
    }

    console.log("TOTAL", { entities: totalEntities, pages: totalPages });
    process.exit(0);
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
