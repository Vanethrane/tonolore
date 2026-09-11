/**
 * Stamp metadata.kind on every entity so exports and future seeds keep
 * specific labels (Weapon, Location, Character, …) without re-deriving
 * only in the UI.
 *
 *   node scripts/maintenance/backfillEntityKinds.js
 *   node scripts/maintenance/backfillEntityKinds.js --dry-run
 *   node scripts/maintenance/backfillEntityKinds.js berserk
 */

require("../../server/src/config/env");

const { Client } = require("../../server/node_modules/pg");
const { inferEntityKind } = require("../lib/entityTypeLabel");

const dryRun = process.argv.includes("--dry-run");
const subjectFilter = process.argv
    .slice(2)
    .find((arg) => arg !== "--dry-run" && !arg.startsWith("-"));

async function main() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    try {
        const params = [];
        let clause = "";
        if (subjectFilter) {
            params.push(subjectFilter);
            clause = "WHERE metadata->>'universe' = $1";
        }

        const result = await client.query(
            `
            SELECT id, name, type, short_description, description, metadata
            FROM entities
            ${clause}
            ORDER BY name
            `,
            params
        );

        console.log(
            `Entities: ${result.rows.length}${subjectFilter ? ` (${subjectFilter})` : ""}${dryRun ? " [dry-run]" : ""}`
        );

        let updated = 0;
        const samples = [];

        await client.query("BEGIN");

        for (const row of result.rows) {
            const metadata =
                typeof row.metadata === "string"
                    ? JSON.parse(row.metadata || "{}")
                    : row.metadata || {};
            const kind = inferEntityKind({
                type: row.type,
                name: row.name,
                short_description: row.short_description,
                description: row.description,
                metadata
            });

            if (metadata.kind === kind) {
                continue;
            }

            if (samples.length < 8) {
                samples.push(`${row.name}: ${row.type} → ${kind}`);
            }

            if (!dryRun) {
                await client.query(
                    `
                    UPDATE entities
                    SET
                        metadata = COALESCE(metadata, '{}'::jsonb) || jsonb_build_object('kind', $2::text),
                        updated_at = NOW()
                    WHERE id = $1
                    `,
                    [row.id, kind]
                );
            }
            updated += 1;
        }

        if (dryRun) {
            await client.query("ROLLBACK");
        } else {
            await client.query("COMMIT");
        }

        for (const line of samples) {
            console.log(`  ${line}`);
        }
        console.log(`${dryRun ? "Would update" : "Updated"}: ${updated}`);
    } catch (error) {
        try {
            await client.query("ROLLBACK");
        } catch (_) {
            /* ignore */
        }
        throw error;
    } finally {
        await client.end();
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
