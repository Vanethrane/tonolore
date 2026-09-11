const { query } = require("./src/db");

query("SELECT unnest(enum_range(NULL::relationship_type)) AS relationship")
    .then(result => {
        console.log(result.rows);
        process.exit(0);
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
