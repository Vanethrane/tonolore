const { query } = require("../db");

/**
 * Normalize a search string for forgiving matching:
 * "Monkey D. Luffy" / "monkey d luffy" / "Monkey-D-Luffy" → "monkey d luffy"
 */
function normalizeSearchText(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim()
        .replace(/\s+/g, " ");
}

function slugifySearch(value) {
    return normalizeSearchText(value).replace(/\s+/g, "-");
}

async function listEntities(req, res) {
    try {
        const limit = Math.min(Number(req.query.limit) || 50, 100);
        const offset = Math.max(Number(req.query.offset) || 0, 0);
        const search = (req.query.search || "").trim();

        let sql;
        let params;

        if (search) {
            const normalized = normalizeSearchText(search);
            const slugQuery = slugifySearch(search);

            sql = `
                WITH base AS (
                    SELECT
                        e.id,
                        e.slug,
                        e.name,
                        e.type,
                        e.short_description,
                        e.evidence,
                        e.image_url,
                        e.created_at,
                        e.metadata,
                        COALESCE(p.slug, '/' || e.slug) AS path,
                        lower(e.name) AS name_lower,
                        regexp_replace(
                            lower(e.name),
                            '[^a-z0-9]+',
                            ' ',
                            'g'
                        ) AS name_norm,
                        regexp_replace(
                            lower(e.slug),
                            '[^a-z0-9]+',
                            '-',
                            'g'
                        ) AS slug_norm,
                        COALESCE(e.metadata->'aliases', '[]'::jsonb) AS aliases,
                        (
                            SELECT COUNT(*)::int
                            FROM relationships r
                            WHERE r.from_entity_id = e.id
                               OR r.to_entity_id = e.id
                        ) AS rel_count
                    FROM entities e
                    LEFT JOIN pages p
                        ON p.entity_id = e.id
                       AND p.status = 'published'
                ),
                scored AS (
                    SELECT
                        b.*,
                        EXISTS (
                            SELECT 1
                            FROM jsonb_array_elements_text(b.aliases) AS alias(value)
                            WHERE lower(alias.value) = lower($1)
                               OR regexp_replace(
                                      lower(alias.value),
                                      '[^a-z0-9]+',
                                      ' ',
                                      'g'
                                  ) = $2
                        ) AS alias_exact,
                        EXISTS (
                            SELECT 1
                            FROM jsonb_array_elements_text(b.aliases) AS alias(value)
                            WHERE
                                regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) = $2
                                OR regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) LIKE $2 || ' %'
                                OR regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) LIKE '% ' || $2 || ' %'
                                OR regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) LIKE '% ' || $2
                        ) AS alias_fuzzy
                    FROM base b
                    WHERE
                        b.name_norm = $2
                        OR b.name_norm LIKE $2 || ' %'
                        OR b.name_norm LIKE '% ' || $2 || ' %'
                        OR b.name_norm LIKE '% ' || $2
                        OR b.name_norm LIKE replace($2, ' ', '%')
                        OR split_part(b.name_norm, ' ', 1) LIKE $2 || '%'
                        OR b.slug_norm = $3
                        OR b.slug_norm LIKE $3 || '-%'
                        OR b.slug_norm LIKE '%-' || $3 || '-%'
                        OR b.slug_norm LIKE '%-' || $3
                        OR EXISTS (
                            SELECT 1
                            FROM jsonb_array_elements_text(b.aliases) AS alias(value)
                            WHERE
                                regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) = $2
                                OR regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) LIKE $2 || ' %'
                                OR regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) LIKE '% ' || $2 || ' %'
                                OR regexp_replace(
                                    lower(alias.value),
                                    '[^a-z0-9]+',
                                    ' ',
                                    'g'
                                ) LIKE '% ' || $2
                                OR split_part(
                                    regexp_replace(
                                        lower(alias.value),
                                        '[^a-z0-9]+',
                                        ' ',
                                        'g'
                                    ),
                                    ' ',
                                    1
                                ) LIKE $2 || '%'
                        )
                        OR (
                            length($2) >= 4
                            AND (
                                b.short_description ILIKE '%' || $1 || '%'
                                OR b.metadata->>'fandom_title' ILIKE '%' || $1 || '%'
                            )
                        )
                )
                SELECT
                    id,
                    slug,
                    name,
                    type,
                    short_description,
                    evidence,
                    image_url,
                    created_at,
                    path,
                    CASE
                        -- Exact title / normalized title
                        WHEN name_lower = lower($1) OR name_norm = $2 THEN 0
                        -- Exact alias ("Luffy", "Zoro")
                        WHEN alias_exact THEN 1
                        -- Query tokens appear in order in the name
                        -- ("monkey d luffy" → "monkey d luffy")
                        WHEN $2 <> '' AND name_norm LIKE replace($2, ' ', '%') THEN 2
                        -- Whole query is a complete word in the name
                        -- ("luffy", "monkey")
                        WHEN $2 <> ''
                             AND (
                                 name_norm = $2
                                 OR name_norm LIKE $2 || ' %'
                                 OR name_norm LIKE '% ' || $2 || ' %'
                                 OR name_norm LIKE '% ' || $2
                             ) THEN 3
                        -- Alias word match (after real name hits)
                        WHEN alias_fuzzy THEN 4
                        -- Name / slug starts with the query as its own token(s)
                        WHEN name_norm LIKE $2 || ' %'
                             OR slug_norm = $3
                             OR slug_norm LIKE $3 || '-%' THEN 5
                        -- Typing prefix on the first name token ("monk" → monkey…)
                        WHEN split_part(name_norm, ' ', 1) LIKE $2 || '%' THEN 6
                        -- Description / metadata mention only
                        ELSE 20
                    END AS rank_bucket,
                    CASE
                        WHEN COALESCE(metadata->>'canon', 'true') = 'true'
                             AND COALESCE(metadata->>'discovered', 'false') <> 'true'
                        THEN 0
                        ELSE 1
                    END AS canon_rank,
                    rel_count,
                    length(name) AS name_len
                FROM scored
                ORDER BY
                    rank_bucket ASC,
                    canon_rank ASC,
                    rel_count DESC,
                    name_len ASC,
                    name ASC
                LIMIT $4 OFFSET $5
            `;

            params = [search, normalized, slugQuery || normalized, limit, offset];
        } else {
            sql = `
                SELECT
                    e.id,
                    e.slug,
                    e.name,
                    e.type,
                    e.short_description,
                    e.evidence,
                    e.image_url,
                    e.created_at,
                    COALESCE(p.slug, '/' || e.slug) AS path
                FROM entities e
                LEFT JOIN pages p
                    ON p.entity_id = e.id
                   AND p.status = 'published'
                ORDER BY e.name ASC
                LIMIT $1 OFFSET $2
            `;

            params = [limit, offset];
        }

        const result = await query(sql, params);

        res.json({
            count: result.rows.length,
            limit,
            offset,
            entities: result.rows.map(
                ({
                    rank_bucket,
                    canon_rank,
                    name_len,
                    rel_count,
                    ...entity
                }) => entity
            )
        });
    } catch (error) {
        console.error("List entities error:", error);

        res.status(500).json({
            error: "Failed to retrieve entities"
        });
    }
}

async function getEntity(req, res) {
    try {
        const { slug } = req.params;

        const result = await query(
            `
            SELECT
                id,
                slug,
                name,
                type,
                short_description,
                description,
                evidence,
                wikipedia_url,
                wikidata_id,
                image_url,
                metadata,
                created_at,
                updated_at
            FROM entities
            WHERE slug = $1
            LIMIT 1
        `,
            [slug]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({
                error: "Entity not found"
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error("Get entity error:", error);

        res.status(500).json({
            error: "Failed to retrieve entity"
        });
    }
}

async function getConnections(req, res) {
    try {
        const { slug } = req.params;

        const entityResult = await query(
            `
            SELECT id, slug, name, type
            FROM entities
            WHERE slug = $1
            LIMIT 1
        `,
            [slug]
        );

        if (entityResult.rows.length === 0) {
            return res.status(404).json({
                error: "Entity not found"
            });
        }

        const entity = entityResult.rows[0];

        const result = await query(
            `
            SELECT
                r.id,
                r.relationship,
                r.title,
                r.explanation,
                r.evidence,
                r.strength,
                r.discovery_score,
                CASE
                    WHEN r.from_entity_id = $1 THEN 'outgoing'
                    ELSE 'incoming'
                END AS direction,
                other.id AS entity_id,
                other.slug,
                other.name,
                other.type,
                other.short_description,
                other.evidence AS entity_evidence,
                other.image_url
            FROM relationships r
            JOIN entities other
                ON other.id = CASE
                    WHEN r.from_entity_id = $1
                    THEN r.to_entity_id
                    ELSE r.from_entity_id
                END
            WHERE
                r.from_entity_id = $1
                OR r.to_entity_id = $1
            ORDER BY
                COALESCE(r.discovery_score, 0) DESC,
                r.strength DESC,
                other.name ASC
        `,
            [entity.id]
        );

        res.json({
            entity,
            count: result.rows.length,
            connections: result.rows
        });
    } catch (error) {
        console.error("Get connections error:", error);

        res.status(500).json({
            error: "Failed to retrieve connections"
        });
    }
}

module.exports = {
    listEntities,
    getEntity,
    getConnections,
    normalizeSearchText
};
