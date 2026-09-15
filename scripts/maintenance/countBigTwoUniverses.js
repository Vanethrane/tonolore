require("../../server/src/config/env");
const { pool } = require("../../server/src/db");

async function main() {
    const result = await pool.query(`
    SELECT metadata->>'universe' AS u, COUNT(*)::int AS n
    FROM entities
    WHERE metadata->>'universe' IN (
      'marvel','dc','spider-man','batman-comics','superman-comics',
      'x-men','wolverine-comics','wonder-woman-comics'
    )
    GROUP BY 1
    ORDER BY n DESC
  `);
    console.log(result.rows);
}

main()
    .catch((e) => {
        console.error(e);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
