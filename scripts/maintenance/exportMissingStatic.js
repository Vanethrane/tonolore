/**
 * Export missing page JSON + SEO HTML shells for published pages that would
 * 404 on GitHub Pages (no docs/<slug>/index.html or data/pages JSON).
 *
 *   node scripts/maintenance/exportMissingStatic.js
 *   node scripts/maintenance/exportMissingStatic.js --limit=2000
 */

require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");
const { getSubjectMeta } = require("../subjects/registry");
const {
    absoluteCanonical,
    slugToRelativeDir
} = require("../lib/staticSeo");
const {
    injectSpaSeoHead
} = require("../lib/spaSeoInject");
const {
    connectionLoreBlurb,
    isGenericSharedLoreTitle
} = require("../lib/connectionLore");

const SITE_URL = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");
const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");
const pagesDir = path.join(docs, "data", "pages");

function parseArgs(argv) {
    const limitRaw = argv.find((arg) => arg.startsWith("--limit="));
    return {
        limit: limitRaw ? Number(limitRaw.slice("--limit=".length)) || null : null,
        shellsOnly: argv.includes("--shells-only"),
        jsonOnly: argv.includes("--json-only")
    };
}

function writeFileRetry(filePath, contents) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    const tmp = `${filePath}.${process.pid}.tmp`;
    let lastError = null;
    for (let attempt = 0; attempt < 8; attempt += 1) {
        try {
            fs.writeFileSync(tmp, contents);
            try {
                fs.renameSync(tmp, filePath);
            } catch {
                fs.writeFileSync(filePath, contents);
                try {
                    fs.unlinkSync(tmp);
                } catch (_) {
                    /* ignore */
                }
            }
            return;
        } catch (error) {
            lastError = error;
            try {
                fs.unlinkSync(tmp);
            } catch (_) {
                /* ignore */
            }
            const end = Date.now() + 200 * (attempt + 1);
            while (Date.now() < end) {
                /* backoff */
            }
        }
    }
    throw lastError || new Error(`Failed to write ${filePath}`);
}

function spaShell() {
    return fs.readFileSync(path.join(docs, "index.html"), "utf8");
}

function needsWork(slug, opts) {
    const rel = slugToRelativeDir(slug);
    if (!rel) {
        return false;
    }
    const jsonOk = fs.existsSync(path.join(pagesDir, `${rel}.json`));
    const shellOk = fs.existsSync(path.join(docs, rel, "index.html"));
    if (opts.shellsOnly) {
        return !shellOk;
    }
    if (opts.jsonOnly) {
        return !jsonOk;
    }
    return !jsonOk || !shellOk;
}

async function loadConnections(entityIds) {
    if (!entityIds.length) {
        return new Map();
    }
    const result = await query(
        `
        SELECT
            r.from_entity_id AS page_entity_id,
            other.id,
            other.name,
            other.slug,
            other.type,
            other.short_description,
            other.image_url,
            r.relationship,
            r.title,
            r.explanation,
            r.strength,
            r.discovery_score,
            COALESCE(tp.slug, '/' || other.slug) AS path
        FROM relationships r
        JOIN entities other ON other.id = r.to_entity_id
        LEFT JOIN pages tp ON tp.entity_id = other.id AND tp.status = 'published'
        WHERE r.from_entity_id = ANY($1::uuid[])
        ORDER BY r.discovery_score DESC NULLS LAST, r.strength DESC NULLS LAST
        `,
        [entityIds]
    );
    const map = new Map();
    for (const row of result.rows) {
        const list = map.get(row.page_entity_id) || [];
        if (list.length >= 24) {
            continue;
        }
        const { page_entity_id, ...connection } = row;
        list.push(connection);
        map.set(page_entity_id, list);
    }
    return map;
}

function buildPayload(page, connections) {
    const metadata =
        typeof page.entity_metadata === "string"
            ? JSON.parse(page.entity_metadata)
            : page.entity_metadata || {};
    const theme = metadata.theme || metadata.universe || null;
    const subjectMeta = getSubjectMeta(theme);
    const aliases = Array.isArray(metadata.aliases) ? metadata.aliases : [];
    const canonicalUrl = absoluteCanonical(SITE_URL, page.slug);

    return {
        page: {
            id: page.id,
            theme,
            slug: page.slug,
            canonical_url: canonicalUrl,
            title: page.title,
            meta_title: page.meta_title,
            meta_description: page.meta_description,
            content: page.content,
            overview: null,
            word_count: page.word_count,
            uniqueness_score: page.uniqueness_score
        },
        entity: {
            id: page.entity_id,
            name: page.entity_name,
            slug: page.entity_slug,
            type: page.entity_type,
            short_description: page.short_description,
            description: page.description,
            image_url: page.image_url,
            image_alt: page.image_alt,
            aliases,
            universe: theme
        },
        subject: subjectMeta
            ? {
                  id: subjectMeta.id,
                  name: subjectMeta.name,
                  path: `/${subjectMeta.rootSlug || subjectMeta.id}`,
                  categories: subjectMeta.categories || []
              }
            : null,
        connections: (connections || []).map((connection) => ({
            ...connection,
            title:
                connection.title && !isGenericSharedLoreTitle(connection.title)
                    ? connection.title
                    : connectionLoreBlurb(connection, {
                          fromName: page.entity_name
                      })
        })),
        rabbit_holes: [],
        copyright: subjectMeta?.copyright || null
    };
}

function writeShell(payload, shellHtml) {
    const rel = slugToRelativeDir(payload.page.slug);
    if (!rel) {
        return;
    }
    let title = String(
        payload.page.meta_title || `${payload.entity.name} | Ton-o-Lore`
    );
    title = title
        .replace(
            /\s+[—-]\s+[^|]+,\s*lore\s*&\s*connections\s*\|\s*Ton-o-Lore$/i,
            " | Ton-o-Lore"
        )
        .slice(0, 70);
    const description = String(
        payload.page.meta_description ||
            payload.entity.short_description ||
            payload.entity.description ||
            `Canonical Ton-o-Lore page for ${payload.entity.name}.`
    ).slice(0, 300);
    const html = injectSpaSeoHead(shellHtml, {
        title,
        description,
        canonical: payload.page.canonical_url,
        image: payload.entity.image_url || "",
        siteUrl: SITE_URL,
        type: "article",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
            url: payload.page.canonical_url
        }
    });
    writeFileRetry(path.join(docs, rel, "index.html"), html);
    writeFileRetry(path.join(root, rel, "index.html"), html);
}

async function main() {
    const opts = parseArgs(process.argv.slice(2));
    console.log("=== Export missing static pages (JSON + shells) ===");

    const pages = await query(`
        SELECT
            p.id,
            p.slug,
            p.title,
            p.meta_title,
            p.meta_description,
            p.content,
            p.word_count,
            p.uniqueness_score,
            e.id AS entity_id,
            e.name AS entity_name,
            e.slug AS entity_slug,
            e.type AS entity_type,
            e.short_description,
            e.description,
            e.image_url,
            e.image_alt,
            e.metadata AS entity_metadata
        FROM pages p
        JOIN entities e ON e.id = p.entity_id
        WHERE p.status = 'published'
        ORDER BY p.slug
    `);

    const todo = pages.rows.filter((row) => needsWork(row.slug, opts));
    const limited = opts.limit ? todo.slice(0, opts.limit) : todo;
    console.log(
        `Published ${pages.rows.length}; needing export ${todo.length}; doing ${limited.length}`
    );

    const shellHtml = spaShell();
    let jsonWritten = 0;
    let shellsWritten = 0;

    for (let i = 0; i < limited.length; i += 40) {
        const batch = limited.slice(i, i + 40);
        const ids = batch.map((row) => row.entity_id);
        const connectionsByEntity = opts.shellsOnly
            ? new Map()
            : await loadConnections(ids);

        for (const page of batch) {
            const rel = slugToRelativeDir(page.slug);
            if (!rel) {
                continue;
            }
            const jsonPath = path.join(pagesDir, `${rel}.json`);
            let payload = null;

            if (!opts.shellsOnly) {
                payload = buildPayload(
                    page,
                    connectionsByEntity.get(page.entity_id) || []
                );
                if (!fs.existsSync(jsonPath) || !opts.jsonOnly) {
                    writeFileRetry(jsonPath, `${JSON.stringify(payload)}\n`);
                    jsonWritten += 1;
                }
            } else if (fs.existsSync(jsonPath)) {
                try {
                    payload = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
                } catch (_) {
                    payload = null;
                }
            }

            if (!opts.jsonOnly) {
                if (!payload) {
                    payload = buildPayload(page, []);
                }
                writeShell(payload, shellHtml);
                shellsWritten += 1;
            }
        }

        if ((i + 40) % 400 === 0 || i + 40 >= limited.length) {
            console.log(
                `  … ${Math.min(i + 40, limited.length)}/${limited.length} (json=${jsonWritten}, shells=${shellsWritten})`
            );
        }
    }

    console.log(
        `Done. jsonWritten=${jsonWritten} shellsWritten=${shellsWritten}`
    );
    await pool.end();
}

main().catch((error) => {
    console.error(error);
    pool.end().finally(() => process.exit(1));
});
