require("../../server/src/config/env");
const { query, pool } = require("../../server/src/db");

async function main() {
    const r = await query(`
        SELECT e.slug, e.name, e.metadata->>'universe' AS u,
               p.slug AS path, parent.slug AS parent
        FROM entities e
        LEFT JOIN pages p ON p.entity_id = e.id AND p.status = 'published'
        LEFT JOIN entities parent ON parent.id = e.url_parent_id
        WHERE e.slug = ANY($1::text[])
        ORDER BY e.slug
    `, [[
        "batman", "darkseid", "deathstroke", "lex-corp", "the-joker",
        "the-flash", "captain-marvel", "shazam", "apokolips",
        "fortress-of-solitude", "lex-luthor"
    ]]);
    console.log(JSON.stringify(r.rows, null, 2));

    const batmanChain = await query(`
        WITH RECURSIVE chain AS (
            SELECT id, slug, url_parent_id, 0 AS d
            FROM entities WHERE slug = 'batman'
            UNION ALL
            SELECT x.id, x.slug, x.url_parent_id, c.d + 1
            FROM entities x
            JOIN chain c ON x.id = c.url_parent_id
            WHERE c.d < 12
        )
        SELECT slug, d FROM chain ORDER BY d DESC
    `);
    console.log("batman chain", batmanChain.rows);
}

main()
    .catch((e) => {
        console.error(e);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
