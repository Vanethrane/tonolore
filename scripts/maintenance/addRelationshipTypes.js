const { query } = require("./src/db");

const values = [
    "created",
    "serialized_in",
    "publishes",
    "published",
    "adapted_into",
    "produced",
    "adapted_from"
];

(async () => {
    for (const value of values) {
        await query(
            "ALTER TYPE relationship_type ADD VALUE IF NOT EXISTS '" + value + "'"
        );
        console.log("Ready:", value);
    }

    console.log("All relationship types are ready.");
    process.exit(0);
})().catch(error => {
    console.error(error);
    process.exit(1);
});
