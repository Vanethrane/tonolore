/**
 * Audit Ton-o-Lore for dead internal links and missing pages.
 *
 *   node scripts/maintenance/auditDeadLinks.js
 *   node scripts/maintenance/auditDeadLinks.js --fix
 *   node scripts/maintenance/auditDeadLinks.js --check-external --sample=40
 */

require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const https = require("https");
const http = require("http");
const { Client } = require("../../server/node_modules/pg");

const DATABASE_URL = process.env.DATABASE_URL;
const FIX = process.argv.includes("--fix");
const CHECK_EXTERNAL = process.argv.includes("--check-external");
const sampleArg = process.argv.find((a) => a.startsWith("--sample="));
const EXTERNAL_SAMPLE = sampleArg
    ? Number(sampleArg.slice("--sample=".length)) || 40
    : 40;

function normalizePath(href) {
    if (!href || typeof href !== "string") {
        return null;
    }
    if (!href.startsWith("/") || href.startsWith("//")) {
        return null;
    }
    if (href.startsWith("/rabbit-hole/")) {
        return { kind: "rabbit-hole", path: href.replace(/\/+$/, "") || "/" };
    }
    const path = ("/" + href.replace(/^\/+|\/+$/g, "")).replace(/\/+/g, "/");
    if (path === "/") {
        return { kind: "home", path: "/" };
    }
    return { kind: "page", path };
}

function extractHrefs(html) {
    const found = [];
    const re = /href=["']([^"']+)["']/gi;
    let match;
    while ((match = re.exec(String(html || "")))) {
        found.push(match[1]);
    }
    return found;
}

function headRequest(url, timeoutMs = 8000) {
    return new Promise((resolve) => {
        let settled = false;
        const done = (result) => {
            if (!settled) {
                settled = true;
                resolve(result);
            }
        };

        try {
            const lib = url.startsWith("https") ? https : http;
            const req = lib.request(
                url,
                {
                    method: "HEAD",
                    timeout: timeoutMs,
                    headers: {
                        "User-Agent":
                            "Ton-o-Lore/1.0 dead-link-audit (educational)"
                    }
                },
                (res) => {
                    // Follow one redirect for HEAD
                    if (
                        res.statusCode >= 300 &&
                        res.statusCode < 400 &&
                        res.headers.location
                    ) {
                        const next = new URL(res.headers.location, url).href;
                        headRequest(next, timeoutMs).then(done);
                        res.resume();
                        return;
                    }
                    done({
                        ok: res.statusCode >= 200 && res.statusCode < 400,
                        status: res.statusCode
                    });
                    res.resume();
                }
            );
            req.on("error", (error) =>
                done({ ok: false, status: 0, error: error.message })
            );
            req.on("timeout", () => {
                req.destroy();
                done({ ok: false, status: 0, error: "timeout" });
            });
            req.end();
        } catch (error) {
            done({ ok: false, status: 0, error: error.message });
        }
    });
}

async function main() {
    if (!DATABASE_URL) {
        throw new Error("DATABASE_URL missing");
    }

    const client = new Client({ connectionString: DATABASE_URL });
    await client.connect();

    const report = {
        pages: 0,
        entities: 0,
        entitiesWithoutPages: [],
        deadContentLinks: [],
        deadOverviewFallbacks: [],
        rabbitHoleLinks: [],
        relationshipsToMissingPages: [],
        externalDead: [],
        fixed: []
    };

    try {
        const pagesRes = await client.query(
            `SELECT p.id, p.slug, p.title, p.content, p.status, e.slug AS entity_slug, e.id AS entity_id
             FROM pages p
             JOIN entities e ON e.id = p.entity_id
             WHERE p.status = 'published'`
        );
        const entitiesRes = await client.query(
            `SELECT e.id, e.slug, e.name,
                    COALESCE(e.metadata->>'universe', e.metadata->>'theme') AS universe,
                    e.wikipedia_url, e.image_source, e.image_url,
                    e.metadata
             FROM entities e`
        );

        report.pages = pagesRes.rows.length;
        report.entities = entitiesRes.rows.length;

        const pageByPath = new Map(
            pagesRes.rows.map((row) => [row.slug, row])
        );
        const pageByEntityId = new Map(
            pagesRes.rows.map((row) => [row.entity_id, row])
        );

        // 1) Entities with no published page
        for (const entity of entitiesRes.rows) {
            if (!pageByEntityId.has(entity.id)) {
                report.entitiesWithoutPages.push({
                    slug: entity.slug,
                    name: entity.name,
                    universe: entity.universe
                });
            }
        }

        // 2) Scan baked HTML for href targets
        const deadKey = new Set();
        for (const page of pagesRes.rows) {
            const hrefs = extractHrefs(page.content);

            for (const href of hrefs) {
                const normalized = normalizePath(href);
                if (!normalized) {
                    continue;
                }
                if (normalized.kind === "home") {
                    continue;
                }
                if (normalized.kind === "rabbit-hole") {
                    report.rabbitHoleLinks.push({
                        from: page.slug,
                        href: normalized.path
                    });
                    continue;
                }
                if (!pageByPath.has(normalized.path)) {
                    const key = `${page.slug}=>${normalized.path}`;
                    if (!deadKey.has(key)) {
                        deadKey.add(key);
                        report.deadContentLinks.push({
                            from: page.slug,
                            href: normalized.path,
                            title: page.title
                        });
                    }
                }
            }
        }

        // 3) Relationships whose other end has no page
        const rels = await client.query(
            `
            SELECT r.id,
                   fe.slug AS from_slug,
                   te.slug AS to_slug,
                   fe.id AS from_id,
                   te.id AS to_id,
                   r.relationship
            FROM relationships r
            JOIN entities fe ON fe.id = r.from_entity_id
            JOIN entities te ON te.id = r.to_entity_id
            `
        );

        for (const rel of rels.rows) {
            const fromPage = pageByEntityId.has(rel.from_id);
            const toPage = pageByEntityId.has(rel.to_id);
            if (!fromPage || !toPage) {
                report.relationshipsToMissingPages.push({
                    from: rel.from_slug,
                    to: rel.to_slug,
                    relationship: rel.relationship,
                    missingFrom: !fromPage,
                    missingTo: !toPage
                });
            }
        }

        // 4) Optional external URL sample (wikipedia / image_source / fandom)
        if (CHECK_EXTERNAL) {
            const candidates = [];
            for (const entity of entitiesRes.rows) {
                if (entity.wikipedia_url) {
                    candidates.push({
                        slug: entity.slug,
                        kind: "wikipedia_url",
                        url: entity.wikipedia_url
                    });
                }
                if (entity.image_source) {
                    candidates.push({
                        slug: entity.slug,
                        kind: "image_source",
                        url: entity.image_source
                    });
                }
                const fandom =
                    entity.metadata && entity.metadata.fandom_url
                        ? entity.metadata.fandom_url
                        : null;
                if (fandom) {
                    candidates.push({
                        slug: entity.slug,
                        kind: "fandom_url",
                        url: fandom
                    });
                }
            }

            // Prefer core-looking / enrichment URLs first
            const sample = candidates.slice(0, EXTERNAL_SAMPLE);
            console.log(`Checking ${sample.length} external URLs…`);
            for (const row of sample) {
                const result = await headRequest(row.url);
                // Fandom often blocks HEAD with 403 while GET pages still work.
                const fandomHost = /fandom\.com/i.test(row.url);
                if (
                    !result.ok &&
                    !(fandomHost && (result.status === 403 || result.status === 405))
                ) {
                    report.externalDead.push({
                        ...row,
                        status: result.status,
                        error: result.error || null
                    });
                }
            }
        }

        // 5) Optional fix: strip dead <a class="entity-link"> from content/overview
        if (FIX && report.deadContentLinks.length) {
            const deadByFrom = new Map();
            for (const dead of report.deadContentLinks) {
                if (!deadByFrom.has(dead.from)) {
                    deadByFrom.set(dead.from, new Set());
                }
                deadByFrom.get(dead.from).add(dead.href);
            }

            for (const [fromPath, hrefSet] of deadByFrom) {
                const page = pageByPath.get(fromPath);
                if (!page) {
                    continue;
                }

                const stripDead = (html) =>
                    String(html || "").replace(
                        /<a\s+([^>]*?)href=["']([^"']+)["']([^>]*)>([\s\S]*?)<\/a>/gi,
                        (full, pre, href, post, inner) => {
                            const normalized = normalizePath(href);
                            if (
                                normalized &&
                                normalized.kind === "page" &&
                                hrefSet.has(normalized.path)
                            ) {
                                // Keep visible text, drop the dead link wrapper.
                                return inner;
                            }
                            return full;
                        }
                    );

                const nextContent = stripDead(page.content);

                if (nextContent !== page.content) {
                    await client.query(
                        `UPDATE pages
                         SET content = $2, updated_at = NOW()
                         WHERE id = $1`,
                        [page.id, nextContent]
                    );
                    report.fixed.push(fromPath);
                }
            }
        }

        const summary = {
            pages: report.pages,
            entities: report.entities,
            entitiesWithoutPages: report.entitiesWithoutPages.length,
            deadContentLinks: report.deadContentLinks.length,
            uniqueDeadTargets: new Set(
                report.deadContentLinks.map((d) => d.href)
            ).size,
            rabbitHoleLinks: report.rabbitHoleLinks.length,
            relationshipsToMissingPages:
                report.relationshipsToMissingPages.length,
            externalDead: report.externalDead.length,
            pagesFixed: report.fixed.length
        };

        console.log("\n=== Dead link audit ===\n");
        console.log(JSON.stringify(summary, null, 2));

        if (report.entitiesWithoutPages.length) {
            console.log("\nEntities without pages (sample 25):");
            console.log(
                report.entitiesWithoutPages
                    .slice(0, 25)
                    .map((e) => `${e.universe || "?"}/${e.slug}`)
                    .join("\n")
            );
        }

        if (report.deadContentLinks.length) {
            console.log("\nDead content/overview links (sample 40):");
            const byTarget = new Map();
            for (const dead of report.deadContentLinks) {
                byTarget.set(
                    dead.href,
                    (byTarget.get(dead.href) || 0) + 1
                );
            }
            const top = [...byTarget.entries()]
                .sort((a, b) => b[1] - a[1])
                .slice(0, 40);
            for (const [href, count] of top) {
                console.log(`  ${count}x  ${href}`);
            }
        }

        if (report.rabbitHoleLinks.length) {
            console.log(
                `\nRabbit-hole hrefs in pages: ${report.rabbitHoleLinks.length} (client-only route; page API will 404)`
            );
            console.log(
                report.rabbitHoleLinks
                    .slice(0, 10)
                    .map((r) => `${r.from} -> ${r.href}`)
                    .join("\n")
            );
        }

        if (report.externalDead.length) {
            console.log("\nExternal URL failures:");
            for (const row of report.externalDead.slice(0, 30)) {
                console.log(
                    `  ${row.kind} ${row.slug} [${row.status}] ${row.url}`
                );
            }
        }

        if (FIX) {
            console.log(`\nFixed pages (stripped dead entity-links): ${report.fixed.length}`);
        }

        // Exit non-zero if actionable dead page links remain (after optional fix)
        const remainingDead = FIX ? 0 : report.deadContentLinks.length;
        if (remainingDead > 0) {
            process.exitCode = 2;
        }
    } finally {
        await client.end();
    }
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
