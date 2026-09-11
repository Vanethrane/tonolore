const { query } = require("./src/db");

query("SELECT content FROM pages WHERE slug = 'one-piece'")
    .then(result => {
        console.log(result.rows[0].content);
        process.exit(0);
    })
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
