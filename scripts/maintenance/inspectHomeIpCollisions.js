/**
 * Inspect cross-IP slug collisions and Lex* placements.
 *   node scripts/maintenance/inspectHomeIpCollisions.js
 */
require("../../server/src/config/env");
const { query, pool } = require("../../server/src/db");

async function main() {
    const focus = await query(`
        SELECT e.slug, e.name, e.type,
               e.metadata->>'universe' AS universe,
               e.metadata->>'canon' AS canon,
               e.metadata->>'discovered' AS discovered,
               p.slug AS page_path,
               parent.slug AS parent_slug
        FROM entities e
        LEFT JOIN pages p ON p.entity_id = e.id AND p.status = 'published'
        LEFT JOIN entities parent ON parent.id = e.url_parent_id
        WHERE e.slug IN (
            'lex-corp','lex-luthor','batman','superman','metropolis',
            'dc-universe','wayne-enterprises','wonder-woman','joker'
        )
        ORDER BY e.slug
    `);
    console.log("=== focus slugs ===");
    console.log(JSON.stringify(focus.rows, null, 2));

    const collisions = await query(`
        WITH owned AS (
            SELECT e.slug, e.metadata->>'universe' AS universe, e.name
            FROM entities e
            WHERE e.metadata->>'universe' IN ('dc','marvel')
              AND COALESCE(e.metadata->>'discovered','') <> 'true'
        )
        SELECT e.slug, e.name,
               e.metadata->>'universe' AS guest_universe,
               o.universe AS home_universe,
               p.slug AS page_path
        FROM entities e
        JOIN owned o ON o.slug = e.slug
        LEFT JOIN pages p ON p.entity_id = e.id AND p.status = 'published'
        WHERE e.metadata->>'universe' IS DISTINCT FROM o.universe
          AND e.metadata->>'universe' NOT IN ('dc','marvel')
        ORDER BY e.metadata->>'universe', e.slug
        LIMIT 80
    `);
    console.log("\n=== guest universes holding dc/marvel core slugs (sample) ===");
    console.log(JSON.stringify(collisions.rows, null, 2));
    console.log("count", collisions.rowCount);

    const mkDc = await query(`
        SELECT e.slug, e.name, p.slug AS page_path
        FROM entities e
        LEFT JOIN pages p ON p.entity_id = e.id AND p.status = 'published'
        WHERE e.metadata->>'universe' = 'mortal-kombat'
          AND (
            e.slug IN ('batman','superman','lex-luthor','lex-corp','metropolis','dc-universe','wonder-woman','joker','flash','green-lantern')
            OR e.name ILIKE '%lex corp%'
            OR e.description ILIKE '%DC Universe%'
          )
        ORDER BY e.slug
        LIMIT 100
    `);
    console.log("\n=== MK entities that look like DC guests ===");
    console.log(JSON.stringify(mkDc.rows, null, 2));
}

main()
    .catch((e) => {
        console.error(e);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
