/**
 * Fix inverted relationship types so labels read correctly.
 *
 * Convention:
 *   creator --created--> work     → "Created" / "Created By"
 *   work --created_by--> creator  → "Created By" / "Created"
 *   publisher --publishes--> work
 */
require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");

const CREATOR_TO_WORK = [
    ["george-lucas", "star-wars"],
    ["eiichiro-oda", "one-piece"],
    ["jk-rowling", "harry-potter"],
    ["jrr-tolkien", "lord-of-the-rings"],
    ["jrr-tolkien", "the-hobbit"],
    ["jrr-tolkien", "the-silmarillion"],
    ["satoshi-tajiri", "pokemon"],
    ["scott-cawthon", "five-nights-at-freddys"]
];

async function main() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    let fixed = 0;

    for (const [fromSlug, toSlug] of CREATOR_TO_WORK) {
        const result = await client.query(
            `
            UPDATE relationships r
            SET relationship = 'created',
                title = COALESCE(r.title, $3),
                explanation = COALESCE(r.explanation, $3),
                updated_at = NOW()
            FROM entities f, entities t
            WHERE r.from_entity_id = f.id
              AND r.to_entity_id = t.id
              AND f.slug = $1
              AND t.slug = $2
              AND r.relationship::text = 'created_by'
            RETURNING r.id
            `,
            [fromSlug, toSlug, `${fromSlug} created ${toSlug}`]
        );
        fixed += result.rowCount;
    }

    const ace = await client.query(
        `
        UPDATE relationships r
        SET relationship = 'created_by', updated_at = NOW()
        FROM entities f, entities t
        WHERE r.from_entity_id = f.id
          AND r.to_entity_id = t.id
          AND f.slug = 'portgas-d-ace'
          AND t.slug = 'gol-d-roger'
          AND r.relationship::text = 'created'
        RETURNING r.id
        `
    );
    fixed += ace.rowCount;

    const family = await client.query(
        `
        UPDATE relationships r
        SET relationship = 'connected_to', updated_at = NOW()
        FROM entities f, entities t
        WHERE r.from_entity_id = f.id
          AND r.to_entity_id = t.id
          AND (
            (f.slug = 'monkey-d-dragon' AND t.slug = 'monkey-d-luffy')
            OR (f.slug = 'monkey-d-garp' AND t.slug = 'monkey-d-luffy')
            OR (f.slug = 'poseidon' AND t.slug = 'mermaid-princess-shirahoshi')
          )
          AND r.relationship::text = 'created_by'
        RETURNING r.id
        `
    );
    fixed += family.rowCount;

    const published = await client.query(
        `
        UPDATE relationships r
        SET relationship = 'publishes', updated_at = NOW()
        FROM entities f, entities t
        WHERE r.from_entity_id = f.id
          AND r.to_entity_id = t.id
          AND f.slug = 'shueisha'
          AND t.slug = 'one-piece-manga'
          AND r.relationship::text = 'published'
        RETURNING r.id
        `
    );
    fixed += published.rowCount;

    // Generic heuristic: person/org --created_by--> topic/work where the
    // explanation says the from-entity created the to-entity.
    const heuristic = await client.query(
        `
        UPDATE relationships r
        SET relationship = 'created', updated_at = NOW()
        FROM entities f, entities t
        WHERE r.from_entity_id = f.id
          AND r.to_entity_id = t.id
          AND r.relationship::text = 'created_by'
          AND f.type IN ('person', 'organization')
          AND t.type IN ('topic', 'work', 'object', 'concept')
          AND (
              COALESCE(r.explanation, '') ILIKE f.name || ' created %'
              OR COALESCE(r.title, '') ILIKE f.name || ' created %'
              OR COALESCE(r.explanation, '') ILIKE '% created ' || t.name || '%'
          )
        RETURNING f.slug AS from_slug, t.slug AS to_slug
        `
    );
    fixed += heuristic.rowCount;
    if (heuristic.rows.length) {
        console.log("Heuristic creator fixes:", heuristic.rows);
    }

    console.log(`Updated ${fixed} relationships.`);

    const check = await client.query(
        `
        SELECT f.name AS from_name, t.name AS to_name, r.relationship::text
        FROM relationships r
        JOIN entities f ON f.id = r.from_entity_id
        JOIN entities t ON t.id = r.to_entity_id
        WHERE f.slug = 'george-lucas' AND t.slug = 'star-wars'
        `
    );
    console.log("Lucas → Star Wars:", check.rows);

    await client.end();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
