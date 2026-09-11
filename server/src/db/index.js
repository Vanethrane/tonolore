const { Pool } = require("pg");
const { DATABASE_URL } = require("../config/env");

const pool = new Pool({
    connectionString: DATABASE_URL,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 5000
});

pool.on("error", (err) => {
    console.error("Unexpected PostgreSQL pool error:", err);
});

async function query(text, params) {
    return pool.query(text, params);
}

async function testConnection() {
    const result = await pool.query(`
        SELECT
            current_database() AS database,
            NOW() AS time
    `);

    return result.rows[0];
}

module.exports = {
    pool,
    query,
    testConnection
};
