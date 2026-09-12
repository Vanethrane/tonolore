/**
 * Remove colliding bare format-hub entities (movies, anime, …)
 * left over before hubs were namespaced as `{root}-{medium}`.
 */

require("../../server/src/config/env");
const { query, pool } = require("../../server/src/db");

const BARE = [
    "movies",
    "television",
    "video-games",
    "anime",
    "manga",
    "comics",
    "books",
    "card-games",
    "tabletop",
    "live-action"
];

async function main() {
    const existing = await query(
        `
        SELECT e.id, e.slug, e.metadata->>'universe' AS universe, p.slug AS path
        FROM entities e
        LEFT JOIN pages p ON p.entity_id = e.id
        WHERE e.slug = ANY($1::text[])
          AND (
            e.metadata->>'kind' = 'format-hub'
            OR e.metadata->>'isFormatHub' = 'true'
          )
        `,
        [BARE]
    );

    console.log(`Found ${existing.rows.length} bare format-hub entities`);
    for (const row of existing.rows) {
        console.log(` - ${row.slug} (${row.universe}) ${row.path || ""}`);
    }

    if (!existing.rows.length) {
        return;
    }

    const ids = existing.rows.map((row) => row.id);

    // Reparent any children to the universe root before delete.
    await query(
        `
        UPDATE entities child
        SET url_parent_id = root.id
        FROM entities bare
        JOIN entities root
          ON root.slug = bare.metadata->>'universe'
         AND root.metadata->>'universe' = bare.metadata->>'universe'
        WHERE bare.id = ANY($1::uuid[])
          AND child.url_parent_id = bare.id
        `,
        [ids]
    );

    await query(`DELETE FROM pages WHERE entity_id = ANY($1::uuid[])`, [ids]);
    await query(`DELETE FROM relationships WHERE from_entity_id = ANY($1::uuid[]) OR to_entity_id = ANY($1::uuid[])`, [ids]);
    const deleted = await query(`DELETE FROM entities WHERE id = ANY($1::uuid[]) RETURNING slug`, [ids]);
    console.log(`Deleted ${deleted.rows.length} bare hubs`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
