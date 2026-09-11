/**
 * Flip overview headings to "Who is" for people/characters.
 * Fast path while pages are already generated.
 */
require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");

(async () => {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    const result = await client.query(`
        UPDATE pages p
        SET
            content = regexp_replace(p.content, '<h2>What is ', '<h2>Who is '),
            updated_at = NOW()
        FROM entities e
        WHERE p.entity_id = e.id
          AND p.content LIKE '%<h2>What is %'
          AND (
              e.type = 'person'
              OR COALESCE(e.short_description, '') ~* 'fictional character|main character|title character'
              OR COALESCE(e.description, '') ~* 'fictional character|main character|title character'
          )
        RETURNING p.slug
    `);

    console.log(`Updated ${result.rowCount} person/character pages to "Who is".`);
    await client.end();
})().catch((error) => {
    console.error(error);
    process.exit(1);
});
