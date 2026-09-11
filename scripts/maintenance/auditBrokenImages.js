/**
 * Audit subject logos + entity image_url values.
 * Clears broken entity images when --fix is passed.
 *
 *   node scripts/maintenance/auditBrokenImages.js
 *   node scripts/maintenance/auditBrokenImages.js --fix
 *   node scripts/maintenance/auditBrokenImages.js --logos-only
 *   node scripts/maintenance/auditBrokenImages.js --sample=200
 */

require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");
const SUBJECT_LOGOS = require("../subjects/logos");
const { SUBJECT_IDS } = require("../subjects/registry");

function parseArgs(argv) {
    return {
        fix: argv.includes("--fix"),
        logosOnly: argv.includes("--logos-only"),
        entitiesOnly: argv.includes("--entities-only"),
        sample: (() => {
            const raw = argv.find((arg) => arg.startsWith("--sample="));
            return raw ? Number(raw.slice("--sample=".length)) || null : null;
        })(),
        concurrency: (() => {
            const raw = argv.find((arg) => arg.startsWith("--concurrency="));
            return raw ? Number(raw.slice("--concurrency=".length)) || 8 : 8;
        })()
    };
}

async function probeUrl(url) {
    if (!url || typeof url !== "string") {
        return { ok: false, status: 0, reason: "empty" };
    }

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 12000);

    try {
        let response = await fetch(url, {
            method: "GET",
            redirect: "follow",
            signal: controller.signal,
            headers: {
                "User-Agent": "Ton-o-Lore image audit (local maintenance)",
                Accept: "image/*,*/*;q=0.8",
                Referer: "https://tonolore.local/"
            }
        });

        // Some CDNs dislike GET bodies; abort read early.
        try {
            await response.body?.cancel?.();
        } catch {
            /* ignore */
        }

        if (response.status === 405 || response.status === 403) {
            // Retry once with a browser-like referrer for Commons / Fandom.
            response = await fetch(url, {
                method: "GET",
                redirect: "follow",
                signal: controller.signal,
                headers: {
                    "User-Agent":
                        "Mozilla/5.0 (compatible; Ton-o-LoreBot/1.0; +https://github.com/Vanethrane/tonolore)",
                    Accept: "image/avif,image/webp,image/*,*/*;q=0.8"
                }
            });
            try {
                await response.body?.cancel?.();
            } catch {
                /* ignore */
            }
        }

        const contentType = String(response.headers.get("content-type") || "");
        const ok =
            response.ok &&
            (!contentType ||
                contentType.startsWith("image/") ||
                contentType.includes("octet-stream") ||
                contentType.includes("svg"));

        return {
            ok,
            status: response.status,
            contentType,
            reason: ok ? "ok" : `http_${response.status}`
        };
    } catch (error) {
        return {
            ok: false,
            status: 0,
            reason: error.name === "AbortError" ? "timeout" : "network"
        };
    } finally {
        clearTimeout(timer);
    }
}

async function mapPool(items, concurrency, worker) {
    const results = new Array(items.length);
    let next = 0;

    async function run() {
        while (next < items.length) {
            const index = next;
            next += 1;
            results[index] = await worker(items[index], index);
        }
    }

    const runners = Array.from(
        { length: Math.min(concurrency, items.length || 1) },
        () => run()
    );
    await Promise.all(runners);
    return results;
}

async function auditLogos() {
    console.log("\n=== Subject logos ===\n");
    const entries = SUBJECT_IDS.map((id) => ({
        id,
        url: SUBJECT_LOGOS[id]?.url || null
    }));

    const missing = entries.filter((entry) => !entry.url);
    for (const entry of missing) {
        console.log(`MISSING logo  ${entry.id}`);
    }

    const withUrls = entries.filter((entry) => entry.url);
    const probed = await mapPool(withUrls, 6, async (entry) => {
        const result = await probeUrl(entry.url);
        return { ...entry, ...result };
    });

    const broken = probed.filter((entry) => !entry.ok);
    for (const entry of broken) {
        console.log(
            `BROKEN logo   ${entry.id}  [${entry.reason}]  ${entry.url}`
        );
    }

    console.log(
        `\nLogos: ${withUrls.length} present, ${missing.length} missing, ${broken.length} broken`
    );

    return { missing, broken };
}

async function auditEntities(client, opts) {
    console.log("\n=== Entity images ===\n");

    const counts = await client.query(`
        SELECT
            COUNT(*)::int AS total,
            COUNT(*) FILTER (WHERE image_url IS NULL OR BTRIM(image_url) = '')::int AS missing,
            COUNT(*) FILTER (WHERE image_url IS NOT NULL AND BTRIM(image_url) <> '')::int AS with_url
        FROM entities
        WHERE metadata->>'universe' IS NOT NULL
    `);
    console.log(
        `Entities: ${counts.rows[0].total} total | ${counts.rows[0].with_url} with image_url | ${counts.rows[0].missing} missing`
    );

    const byUniverse = await client.query(`
        SELECT
            metadata->>'universe' AS universe,
            COUNT(*)::int AS total,
            COUNT(*) FILTER (WHERE image_url IS NULL OR BTRIM(image_url) = '')::int AS missing
        FROM entities
        WHERE metadata->>'universe' IS NOT NULL
        GROUP BY 1
        ORDER BY missing DESC, universe
    `);

    console.log("\nMissing by universe (top 20):");
    for (const row of byUniverse.rows.slice(0, 20)) {
        if (row.missing > 0) {
            console.log(`  ${row.universe}: ${row.missing}/${row.total} missing`);
        }
    }

    let urlQuery = `
        SELECT image_url AS url, COUNT(*)::int AS uses
        FROM entities
        WHERE image_url IS NOT NULL AND BTRIM(image_url) <> ''
        GROUP BY image_url
        ORDER BY COUNT(*) DESC
    `;
    if (opts.sample) {
        urlQuery += ` LIMIT ${Number(opts.sample)}`;
    }

    const distinct = await client.query(urlQuery);
    console.log(
        `\nProbing ${distinct.rows.length} distinct image_url value(s)…`
    );

    const probed = await mapPool(
        distinct.rows,
        opts.concurrency,
        async (row, index) => {
            if (index > 0 && index % 50 === 0) {
                console.log(`  probed ${index}/${distinct.rows.length}`);
            }
            const result = await probeUrl(row.url);
            return { ...row, ...result };
        }
    );

    const broken = probed.filter((row) => !row.ok);
    console.log(`\nBroken distinct URLs: ${broken.length}`);
    for (const row of broken.slice(0, 40)) {
        console.log(
            `BROKEN entity [${row.reason}] x${row.uses}  ${row.url}`
        );
    }
    if (broken.length > 40) {
        console.log(`  …and ${broken.length - 40} more`);
    }

    let cleared = 0;
    if (opts.fix && broken.length) {
        const urls = broken.map((row) => row.url);
        const result = await client.query(
            `
            UPDATE entities
            SET
                image_url = NULL,
                image_source = NULL,
                image_credit = NULL,
                image_license = NULL,
                image_usage = NULL,
                image_alt = NULL
            WHERE image_url = ANY($1::text[])
            RETURNING id
            `,
            [urls]
        );
        cleared = result.rowCount;
        console.log(`\nCleared broken images on ${cleared} entities.`);
    }

    return { counts: counts.rows[0], broken, cleared };
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    let logoReport = { missing: [], broken: [] };
    let entityReport = null;

    if (!opts.entitiesOnly) {
        logoReport = await auditLogos();
    }

    if (!opts.logosOnly) {
        const client = new Client({
            connectionString: process.env.DATABASE_URL
        });
        await client.connect();
        try {
            entityReport = await auditEntities(client, opts);
        } finally {
            await client.end();
        }
    }

    console.log("\n=== Summary ===");
    console.log(
        `Logos missing=${logoReport.missing.length} broken=${logoReport.broken.length}`
    );
    if (entityReport) {
        console.log(
            `Entity images missing=${entityReport.counts.missing} brokenDistinct=${entityReport.broken.length} cleared=${entityReport.cleared}`
        );
    }
    if (!opts.fix && entityReport?.broken.length) {
        console.log("\nRe-run with --fix to NULL out broken entity image_url rows.");
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
