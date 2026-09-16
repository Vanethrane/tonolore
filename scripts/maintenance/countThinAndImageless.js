require("../../server/src/config/env");
const { pool } = require("../../server/src/db");

async function main() {
    const imageless = await pool.query(`
    SELECT COUNT(*)::int AS n FROM entities
    WHERE metadata->>'universe' IS NOT NULL
      AND (image_url IS NULL OR BTRIM(image_url)='')
  `);
    const thin = await pool.query(`
    SELECT COUNT(*)::int AS n FROM entities
    WHERE metadata->>'universe' IS NOT NULL
      AND (
        description IS NULL OR BTRIM(description)=''
        OR length(description) < 550
        OR cardinality(string_to_array(trim(description), E'\n\n')) < 2
      )
  `);
    const total = await pool.query(`
    SELECT COUNT(*)::int AS n FROM entities WHERE metadata->>'universe' IS NOT NULL
  `);
    console.log(
        JSON.stringify(
            {
                total: total.rows[0].n,
                imageless: imageless.rows[0].n,
                thinish: thin.rows[0].n
            },
            null,
            2
        )
    );
}

main()
    .catch((error) => {
        console.error(error);
        process.exitCode = 1;
    })
    .finally(() => pool.end());
