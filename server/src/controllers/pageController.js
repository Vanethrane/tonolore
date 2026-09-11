const { query } = require("../db");
const {
    CATEGORY_CATALOG,
    getSubjectMeta,
    listSubjectMeta
} = require("../../../scripts/subjects/registry");
const {
    connectionLoreBlurb,
    isGenericSharedLoreTitle
} = require("../../../scripts/lib/connectionLore");
const { getSiteUrl, absoluteCanonical } = require("../lib/siteUrl");

function extractOverview(content) {
    if (!content) {
        return "";
    }

    const match = content.match(
        /<section class="overview">[\s\S]*?<\/section>/
    );

    return match ? match[0] : "";
}

function removeOverview(content) {
    if (!content) {
        return "";
    }

    return content
        .replace(/<section class="overview">[\s\S]*?<\/section>/, "")
        .trim();
}

async function getPage(req, res) {
    try {
        const slug = Array.isArray(req.params.slug)
            ? "/" + req.params.slug.join("/")
            : req.params.slug;

        const pageResult = await query(
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
            LEFT JOIN entities e
                ON e.id = p.entity_id
            WHERE p.slug = $1
              AND p.status = 'published'
            LIMIT 1
        `,
            [slug]
        );

        if (pageResult.rows.length === 0) {
            return res.status(404).json({
                error: "Page not found"
            });
        }

        const page = pageResult.rows[0];

        const metadata =
            typeof page.entity_metadata === "string"
                ? JSON.parse(page.entity_metadata)
                : page.entity_metadata || {};

        const theme = metadata.theme || metadata.universe || null;
        const subjectMeta = getSubjectMeta(theme);
        const siteUrl = getSiteUrl(req);
        const canonicalUrl = absoluteCanonical(siteUrl, page.slug);
        const aliases = Array.isArray(metadata.aliases)
            ? metadata.aliases
            : [];

        const connectionsResult = await query(
            `
            WITH RECURSIVE entity_paths AS (
                SELECT
                    id,
                    slug,
                    url_parent_id,
                    '/' || slug AS path
                FROM entities
                WHERE url_parent_id IS NULL

                UNION ALL

                SELECT
                    e.id,
                    e.slug,
                    e.url_parent_id,
                    ep.path || '/' || e.slug AS path
                FROM entities e
                JOIN entity_paths ep
                    ON e.url_parent_id = ep.id
            )

            SELECT
                r.id,
                r.relationship,
                r.title,
                r.explanation,
                r.strength,
                r.discovery_score,

                CASE
                    WHEN r.from_entity_id = $1 THEN 'outgoing'
                    ELSE 'incoming'
                END AS direction,

                r.from_entity_id,
                r.to_entity_id,

                other.id AS entity_id,
                other.slug,
                other.name,
                other.type,
                other.short_description,
                other.evidence,
                other.image_url,
                COALESCE(ep.path, '/' || other.slug) AS path

            FROM relationships r

            JOIN entities other
                ON other.id = CASE
                    WHEN r.from_entity_id = $1
                    THEN r.to_entity_id
                    ELSE r.from_entity_id
                END

            LEFT JOIN entity_paths ep
                ON ep.id = other.id

            WHERE
                r.from_entity_id = $1
                OR r.to_entity_id = $1

            ORDER BY
                r.discovery_score DESC,
                r.strength DESC

            LIMIT 24
        `,
            [page.entity_id]
        );

        const rabbitHolesResult = await query(
            `
            SELECT
                rh.slug,
                rh.title,
                rh.description,
                rh.depth,
                rh.weirdness_score,
                rh.obscurity_score,
                rh.overall_score

            FROM rabbit_holes rh

            WHERE rh.starting_entity_id = $1

            ORDER BY rh.overall_score DESC

            LIMIT 10
        `,
            [page.entity_id]
        );

        res.json({
            page: {
                id: page.id,
                theme,
                slug: page.slug,
                canonical_url: canonicalUrl,
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
                    page.entity_full_description ||
                    page.short_description,
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

            connections: connectionsResult.rows.map((connection) => {
                const lore = connectionLoreBlurb(connection, {
                    fromName: page.entity_name
                });
                return {
                    ...connection,
                    title: isGenericSharedLoreTitle(connection.title)
                        ? lore
                        : connection.title,
                    explanation: connection.explanation || lore
                };
            }),

            rabbit_holes: rabbitHolesResult.rows,

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
        });
    } catch (error) {
        console.error("Get page failed:", error);

        res.status(500).json({
            error: "Failed to load page"
        });
    }
}

async function listSubjects(req, res) {
    try {
        const result = await query(`
            SELECT
                metadata->>'universe' AS id,
                COUNT(*)::int AS entity_count
            FROM entities
            WHERE metadata->>'universe' IS NOT NULL
            GROUP BY metadata->>'universe'
            ORDER BY id
        `);

        const counts = new Map(
            result.rows.map((row) => [row.id, row.entity_count])
        );

        const subjects = listSubjectMeta().map((meta) => ({
            id: meta.id,
            name: meta.name,
            slug: meta.id,
            theme: meta.theme || meta.id,
            entity_count: counts.get(meta.id) || 0,
            path: `/${meta.rootSlug || meta.id}`,
            logo: meta.logo || null,
            categories: meta.categories || [],
            musicGenre: meta.musicGenre || null
        }));

        res.json({
            categories: CATEGORY_CATALOG,
            subjects
        });
    } catch (error) {
        console.error("List subjects failed:", error);
        res.status(500).json({ error: "Failed to list subjects" });
    }
}

module.exports = { getPage, listSubjects };
