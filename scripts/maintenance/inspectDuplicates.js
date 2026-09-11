const { query } = require("./server/src/db");

(async () => {
    const result = await query(`
        SELECT
            id,
            name,
            slug,
            type,
            url_parent_id
        FROM entities
        WHERE
            name IN ('Laugh Tale', 'Nefertari D. Lili')
            OR slug IN ('raftel', 'laugh-tale', 'nefertari-lili', 'nefertari-d-lili')
        ORDER BY name, slug
    `);

    console.table(result.rows);
})();
