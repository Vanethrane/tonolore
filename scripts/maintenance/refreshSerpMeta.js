/**
 * Refresh pages.meta_title / meta_description with CTR-tuned templates
 * (Google + Bing) without regenerating full page HTML.
 *
 *   node scripts/maintenance/refreshSerpMeta.js
 *   node scripts/maintenance/refreshSerpMeta.js --limit=5000
 *   node scripts/maintenance/refreshSerpMeta.js --dry-run
 */

require("../../server/src/config/env");

const { query, pool } = require("../../server/src/db");
const { getSubjectMeta } = require("../subjects/registry");
const {
    buildMetaTitle,
    buildMetaDescription
} = require("../generate/pages/pageSeoContent");

async function main() {
    const argv = process.argv.slice(2);
    const dryRun = argv.includes("--dry-run");
    const limitRaw = argv.find((arg) => arg.startsWith("--limit="));
    const limit = limitRaw
        ? Number(limitRaw.slice("--limit=".length)) || null
        : null;

    const pages = await query(
        `
        SELECT p.id, p.slug, p.meta_title, p.meta_description,
               e.name, e.type, e.short_description, e.description, e.metadata,
               e.metadata->>'universe' AS universe
        FROM pages p
        JOIN entities e ON e.id = p.entity_id
        WHERE p.status = 'published'
        ORDER BY p.updated_at DESC
        ${limit ? `LIMIT ${Number(limit)}` : ""}
        `
    );

    let updated = 0;
    for (const row of pages.rows) {
        const entity = {
            name: row.name,
            type: row.type,
            short_description: row.short_description,
            description: row.description,
            metadata:
                typeof row.metadata === "string"
                    ? JSON.parse(row.metadata || "{}")
                    : row.metadata || {}
        };
        const subjectMeta = getSubjectMeta(row.universe) || {
            name: row.universe,
            id: row.universe
        };
        const title = buildMetaTitle(entity, subjectMeta);
        // Connections omitted here for speed — description still CTR-tuned.
        const description = buildMetaDescription(entity, [], subjectMeta);
        if (
            title === row.meta_title &&
            description === row.meta_description
        ) {
            continue;
        }
        if (dryRun) {
            if (updated < 8) {
                console.log(`${row.slug}\n  title: ${title}\n  desc:  ${description}\n`);
            }
            updated += 1;
            continue;
        }
        await query(
            `
            UPDATE pages
            SET meta_title = $2,
                meta_description = $3,
                updated_at = NOW()
            WHERE id = $1
            `,
            [row.id, title, description]
        );
        updated += 1;
    }

    console.log(
        `${dryRun ? "[dry-run] would update" : "updated"} ${updated}/${pages.rows.length} pages`
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
