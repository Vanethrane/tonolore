/**
 * Submit recently updated published URLs to Bing IndexNow (and partners).
 *
 *   node scripts/maintenance/notifyIndexNowRecent.js
 *   node scripts/maintenance/notifyIndexNowRecent.js --limit=200
 */

require("../../server/src/config/env");

const { query, pool } = require("../../server/src/db");
const { absoluteCanonical } = require("../lib/staticSeo");
const { notifyIndexNow, loadOrCreateKey, ensureKeyFile } = require("../lib/indexNow");

const SITE_URL = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");

async function main() {
    const limitRaw = process.argv.find((arg) => arg.startsWith("--limit="));
    const limit = limitRaw
        ? Number(limitRaw.slice("--limit=".length)) || 500
        : 500;

    ensureKeyFile(loadOrCreateKey());

    const pages = await query(
        `
        SELECT slug
        FROM pages
        WHERE status = 'published'
        ORDER BY updated_at DESC
        LIMIT $1
        `,
        [limit]
    );

    const urls = [
        `${SITE_URL}/`,
        ...pages.rows.map((row) => absoluteCanonical(SITE_URL, row.slug))
    ];

    const result = await notifyIndexNow(urls, { siteUrl: SITE_URL });
    console.log(
        `[indexnow] submitted ${result.submitted}/${result.total || urls.length} (key ${result.keyLocation})`
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
