/**
 * Export static page JSON for music subjects only (faster than full site export).
 *   node scripts/maintenance/exportMusicPages.js
 */
require("../../server/src/config/env");

const fs = require("fs");
const path = require("path");
const { query, pool } = require("../../server/src/db");
const { musicSubjectIds } = require("../subjects/musicCatalog");
const { getSubjectMeta } = require("../subjects/registry");
const {
    absoluteCanonical,
    slugToRelativeDir
} = require("../lib/staticSeo");

const SITE_URL = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");
const root = path.join(__dirname, "..", "..");

function extractOverview(content) {
    if (!content) return "";
    const match = content.match(
        /<section class="overview">[\s\S]*?<\/section>/
    );
    return match ? match[0] : "";
}

function removeOverview(content) {
    if (!content) return "";
    return content
        .replace(/<section class="overview">[\s\S]*?<\/section>/, "")
        .trim();
}

function writeJson(filePath, data) {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.writeFileSync(filePath, JSON.stringify(data));
}

async function main() {
    const ids = musicSubjectIds();
    const result = await query(
        `
        SELECT
            p.*,
            e.name AS entity_name,
            e.slug AS entity_slug,
            e.type AS entity_type,
            e.short_description,
            e.description AS entity_full_description,
            e.evidence AS entity_evidence,
            e.metadata AS entity_metadata,
            e.wikipedia_url,
            e.image_url AS entity_image,
            e.image_source,
            e.image_credit,
            e.image_license,
            e.image_usage,
            e.image_alt
        FROM pages p
        LEFT JOIN entities e ON e.id = p.entity_id
        WHERE p.status = 'published'
          AND COALESCE(e.metadata->>'universe', '') = ANY($1::text[])
        ORDER BY p.slug
        `,
        [ids]
    );

    console.log(`Exporting ${result.rows.length} music pages…`);
    let written = 0;

    for (const page of result.rows) {
        const metadata =
            typeof page.entity_metadata === "string"
                ? JSON.parse(page.entity_metadata)
                : page.entity_metadata || {};
        const theme = metadata.theme || metadata.universe || null;
        const subjectMeta = getSubjectMeta(theme);
        const aliases = Array.isArray(metadata.aliases) ? metadata.aliases : [];
        const payload = {
            page: {
                id: page.id,
                theme,
                slug: page.slug,
                canonical_url: absoluteCanonical(SITE_URL, page.slug),
                title: page.title,
                meta_title: page.meta_title,
                meta_description: page.meta_description,
                content: removeOverview(page.content),
                overview: extractOverview(page.content),
                word_count: page.word_count,
                uniqueness_score: page.uniqueness_score
            },
            entity: {
                id: page.entity_id,
                name: page.entity_name,
                slug: page.entity_slug,
                type: page.entity_type,
                short_description: page.short_description,
                description:
                    page.entity_full_description || page.short_description,
                evidence: page.entity_evidence,
                universe: metadata.universe || null,
                aliases,
                wikipedia_url: page.wikipedia_url || null,
                image_url: page.entity_image,
                image_source: page.image_source,
                image_credit: page.image_credit,
                image_license: page.image_license,
                image_usage: page.image_usage,
                image_alt: page.image_alt
            },
            connections: [],
            rabbit_holes: [],
            copyright: subjectMeta?.copyright
                ? {
                      theme,
                      title: subjectMeta.copyright.title,
                      body: subjectMeta.copyright.body
                  }
                : null,
            subject: subjectMeta
                ? {
                      id: subjectMeta.id,
                      name: subjectMeta.name,
                      theme: subjectMeta.theme || subjectMeta.id,
                      path: `/${subjectMeta.rootSlug || subjectMeta.id}`,
                      logo: subjectMeta.logo || null,
                      categories: subjectMeta.categories || []
                  }
                : null
        };

        const rel = slugToRelativeDir(page.slug);
        if (!rel) continue;
        for (const dir of ["docs", ""]) {
            writeJson(
                path.join(root, dir, "data", "pages", `${rel}.json`),
                payload
            );
        }
        written += 1;
    }

    // Category static HTML shelf
    const { buildCategoryHtml } = require("../lib/staticSeo");
    const { CATEGORY_CATALOG } = require("../subjects/registry");
    const catalog = JSON.parse(
        fs.readFileSync(path.join(root, "docs", "data", "subjects.json"), "utf8")
    );
    const music = CATEGORY_CATALOG.find((c) => c.id === "music");
    const musicSubjects = catalog.subjects.filter((s) =>
        (s.categories || []).includes("music")
    );
    if (music) {
        const html = buildCategoryHtml({
            siteUrl: SITE_URL,
            category: music,
            subjects: musicSubjects
        });
        for (const dir of ["docs", ""]) {
            const out = path.join(root, dir, "category", "music", "index.html");
            fs.mkdirSync(path.dirname(out), { recursive: true });
            fs.writeFileSync(out, html);
        }
    }

    console.log(`Wrote ${written} music page JSON files + category/music`);
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
