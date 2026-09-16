require("../../server/src/config/env");
const { query, pool } = require("../../server/src/db");

const SLUGS = [
  "lex-corp",
  "lex-luthor",
  "lex-corp-in-mortal-kombat",
  "lex-luthor-in-mortal-kombat",
];

async function pagePathForEntity(entityId) {
  const result = await query(
    `
    WITH RECURSIVE chain AS (
      SELECT id, slug, url_parent_id, 0 AS d
      FROM entities WHERE id = $1
      UNION ALL
      SELECT x.id, x.slug, x.url_parent_id, c.d + 1
      FROM entities x
      JOIN chain c ON x.id = c.url_parent_id
      WHERE c.d < 16
    )
    SELECT '/' || string_agg(slug, '/' ORDER BY d DESC) AS path
    FROM chain
    `,
    [entityId]
  );
  return result.rows[0]?.path || null;
}

async function main() {
  const r = await query(
    `
    SELECT e.id, e.slug, e.name, e.type,
           e.metadata->>'universe' AS universe,
           e.metadata->>'appearance_of' AS appearance_of,
           e.url_parent_id,
           p.slug AS page_path,
           p.status
    FROM entities e
    LEFT JOIN pages p ON p.entity_id = e.id
    WHERE e.slug = ANY($1::text[])
    ORDER BY e.slug
    `,
    [SLUGS]
  );
  const out = [];
  for (const row of r.rows) {
    const computed = await pagePathForEntity(row.id);
    out.push({ ...row, computed_path: computed });
  }
  console.log("entities", JSON.stringify(out, null, 2));

  const rel = await query(
    `
    SELECT f.slug AS from_slug, t.slug AS to_slug, r.relationship
    FROM relationships r
    JOIN entities f ON f.id = r.from_entity_id
    JOIN entities t ON t.id = r.to_entity_id
    WHERE f.slug = ANY($1::text[]) OR t.slug = ANY($1::text[])
    ORDER BY f.slug, r.relationship, t.slug
    `,
    [SLUGS]
  );
  console.log("rels", JSON.stringify(rel.rows, null, 2));

  const missing = SLUGS.filter((s) => !r.rows.some((row) => row.slug === s));
  console.log("missing_slugs", missing);
}

main()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => pool.end());
