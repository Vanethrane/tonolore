require("../../server/src/config/env");
const { query, pool } = require("../../server/src/db");
async function main() {
  const r = await query(`
    SELECT e.slug, e.name, e.metadata->>'universe' AS u,
           e.metadata->>'appearance_of' AS appearance_of, p.slug AS path
    FROM entities e
    LEFT JOIN pages p ON p.entity_id = e.id AND p.status = 'published'
    WHERE e.slug LIKE '%lex%' OR e.slug LIKE '%-in-mortal-kombat'
    ORDER BY e.slug LIMIT 80`);
  console.log(JSON.stringify(r.rows, null, 2));
  const rel = await query(`
    SELECT f.slug AS fs, t.slug AS ts, r.relationship
    FROM relationships r
    JOIN entities f ON f.id = r.from_entity_id
    JOIN entities t ON t.id = r.to_entity_id
    WHERE f.slug LIKE '%lex%' OR t.slug LIKE '%lex%' OR t.slug = 'mortal-kombat-vs-dc-universe'
    LIMIT 40`);
  console.log("rels", JSON.stringify(rel.rows, null, 2));
}
main().catch((e)=>{console.error(e);process.exitCode=1}).finally(()=>pool.end());
