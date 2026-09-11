/**
 * Replace generic "through shared lore" relationship titles with real blurbs
 * and fill missing explanations from both entity descriptions.
 *
 *   node scripts/maintenance/backfillSharedLore.js
 *   node scripts/maintenance/backfillSharedLore.js --dry-run
 *   node scripts/maintenance/backfillSharedLore.js pokemon
 */

require("../../server/src/config/env");

const { Client } = require("../../server/node_modules/pg");
const {
    buildMentionLore,
    connectionLoreBlurb,
    isGenericSharedLoreTitle,
    normalizeSpace
} = require("../lib/connectionLore");

const dryRun = process.argv.includes("--dry-run");
const subjectFilter = process.argv
    .slice(2)
    .find((arg) => arg !== "--dry-run" && !arg.startsWith("-"));

async function main() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    try {
        const params = [];
        let subjectClause = "";
        if (subjectFilter) {
            params.push(subjectFilter);
            subjectClause = `AND (
                from_e.metadata->>'universe' = $1
                OR to_e.metadata->>'universe' = $1
            )`;
        }

        const result = await client.query(
            `
            SELECT
                r.id,
                r.title,
                r.explanation,
                from_e.name AS from_name,
                from_e.short_description AS from_short,
                from_e.description AS from_description,
                to_e.name AS to_name,
                to_e.short_description AS to_short,
                to_e.description AS to_description
            FROM relationships r
            JOIN entities from_e ON from_e.id = r.from_entity_id
            JOIN entities to_e ON to_e.id = r.to_entity_id
            WHERE (
                r.explanation IS NULL
                OR btrim(r.explanation) = ''
                OR r.title ~* 'through shared lore\\.?$'
                OR r.explanation ~* 'through shared lore\\.?$'
            )
            ${subjectClause}
            ORDER BY r.updated_at DESC NULLS LAST
            `,
            params
        );

        console.log(
            `Candidates: ${result.rows.length}${subjectFilter ? ` (${subjectFilter})` : ""}${dryRun ? " [dry-run]" : ""}`
        );

        if (dryRun) {
            for (const row of result.rows.slice(0, 5)) {
                const lore = buildMentionLore(
                    {
                        name: row.from_name,
                        short_description: row.from_short,
                        description: row.from_description
                    },
                    {
                        name: row.to_name,
                        short_description: row.to_short,
                        description: row.to_description
                    }
                );
                console.log(
                    `  ${row.from_name} → ${row.to_name}\n    ${lore.explanation.slice(0, 160)}…`
                );
            }
            console.log(`Would update: ${result.rows.length}`);
            return;
        }

        await client.query("BEGIN");
        let updated = 0;
        const BATCH = 200;

        for (let i = 0; i < result.rows.length; i += BATCH) {
            const chunk = result.rows.slice(i, i + BATCH);
            const values = [];
            const placeholders = [];

            chunk.forEach((row, index) => {
                const lore = buildMentionLore(
                    {
                        name: row.from_name,
                        short_description: row.from_short,
                        description: row.from_description
                    },
                    {
                        name: row.to_name,
                        short_description: row.to_short,
                        description: row.to_description
                    }
                );

                const title = isGenericSharedLoreTitle(row.title)
                    ? lore.title
                    : normalizeSpace(row.title) || lore.title;

                const explanation =
                    normalizeSpace(row.explanation) &&
                    !isGenericSharedLoreTitle(row.explanation)
                        ? normalizeSpace(row.explanation)
                        : lore.explanation ||
                          connectionLoreBlurb(
                              {
                                  name: row.to_name,
                                  title: row.title,
                                  explanation: row.explanation,
                                  short_description: row.to_short,
                                  description: row.to_description,
                                  relationship: "connected_to"
                              },
                              { fromName: row.from_name }
                          );

                const base = index * 3;
                placeholders.push(
                    `($${base + 1}::uuid, $${base + 2}::text, $${base + 3}::text)`
                );
                values.push(row.id, title, explanation);
            });

            await client.query(
                `
                UPDATE relationships AS r
                SET
                    title = v.title,
                    explanation = v.explanation,
                    updated_at = NOW()
                FROM (VALUES ${placeholders.join(", ")}) AS v(id, title, explanation)
                WHERE r.id = v.id
                `,
                values
            );

            updated += chunk.length;
            if (updated % 2000 === 0 || updated === result.rows.length) {
                console.log(`Updated ${updated}/${result.rows.length}`);
            }
        }

        await client.query("COMMIT");
        console.log(`Updated: ${updated}`);
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
