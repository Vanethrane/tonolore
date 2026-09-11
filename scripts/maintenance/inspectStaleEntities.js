const { query } = require("./server/src/db");

(async () => {
    const stale = [
        {
            name: "Laugh Tale",
            id: "e5e538b0-97b2-4ebe-94e3-cf0cc78264b4"
        },
        {
            name: "Nefertari D. Lili",
            id: "a8e8510a-5dd1-4c8c-a366-7bf59c8e68d9"
        }
    ];

    for (const item of stale) {
        const relationships = await query(`
            SELECT
                r.id,
                r.relationship,
                r.from_entity_id,
                r.to_entity_id,
                from_entity.name AS from_name,
                to_entity.name AS to_name
            FROM relationships r
            JOIN entities from_entity
                ON from_entity.id = r.from_entity_id
            JOIN entities to_entity
                ON to_entity.id = r.to_entity_id
            WHERE
                r.from_entity_id = $1
                OR r.to_entity_id = $1
            ORDER BY r.relationship
        `, [item.id]);

        const pages = await query(`
            SELECT id, slug, status
            FROM pages
            WHERE entity_id = $1
            ORDER BY slug
        `, [item.id]);

        console.log(`\n=== ${item.name} (${item.id}) ===`);

        console.log("\nRelationships:");
        console.table(relationships.rows);

        console.log("\nPages:");
        console.table(pages.rows);
    }
})();
