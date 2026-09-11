const app = require("./app");
const { PORT } = require("./config/env");

app.listen(PORT, () => {
    console.log(`Ton-o-Lore API running on http://localhost:${PORT}`);
});
