require("../../server/node_modules/dotenv").config({
    path: require("path").join(__dirname, "..", "..", ".env")
});
const { Client } = require("../../server/node_modules/pg");

async function main() {
    const client = new Client({ connectionString: process.env.DATABASE_URL });
    await client.connect();

    const result = await client.query(`
        UPDATE pages
        SET
            title = REPLACE(REPLACE(title, 'TON-O-LORE', 'Ton-o-Lore'), 'Tonolore', 'Ton-o-Lore'),
            meta_title = REPLACE(REPLACE(meta_title, 'TON-O-LORE', 'Ton-o-Lore'), 'Tonolore', 'Ton-o-Lore'),
            meta_description = REPLACE(REPLACE(meta_description, 'TON-O-LORE', 'Ton-o-Lore'), 'Tonolore', 'Ton-o-Lore'),
            content = REPLACE(REPLACE(content, 'TON-O-LORE', 'Ton-o-Lore'), 'Tonolore', 'Ton-o-Lore'),
            updated_at = NOW()
        WHERE
            title ILIKE '%Tonolore%'
            OR title ILIKE '%TON-O-LORE%'
            OR meta_title ILIKE '%Tonolore%'
            OR meta_title ILIKE '%TON-O-LORE%'
            OR meta_description ILIKE '%Tonolore%'
            OR meta_description ILIKE '%TON-O-LORE%'
            OR content ILIKE '%Tonolore%'
            OR content ILIKE '%TON-O-LORE%'
    `);

    console.log(`Updated ${result.rowCount} pages`);
    await client.end();
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
