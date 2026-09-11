/**
 * Push subject-package aliases into entities.metadata.aliases
 * without a full reseed (search ranking uses metadata aliases).
 */
require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});

const path = require("path");
const { Client } = require("../../server/node_modules/pg");
const { SUBJECT_IDS, loadSubject } = require("../subjects/registry");

async function main() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    let updated = 0;
    let skipped = 0;

    for (const id of SUBJECT_IDS) {
        const subject = loadSubject(id);
        for (const entity of subject.entities || []) {
            const aliases = [
                ...new Set(
                    (entity.aliases || [])
                        .map((alias) => String(alias || "").trim())
                        .filter(Boolean)
                )
            ];

            if (aliases.length === 0) {
                skipped += 1;
                continue;
            }

            const result = await client.query(
                `
                UPDATE entities
                SET metadata = jsonb_set(
                    COALESCE(metadata, '{}'::jsonb),
                    '{aliases}',
                    $2::jsonb,
                    true
                ),
                updated_at = NOW()
                WHERE slug = $1
                RETURNING slug
                `,
                [entity.slug, JSON.stringify(aliases)]
            );

            if (result.rowCount > 0) {
                updated += 1;
            } else {
                skipped += 1;
            }
        }
    }

    console.log(`Synced aliases on ${updated} entities (${skipped} skipped).`);
    await client.end();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
