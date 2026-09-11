const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const {
    robotsTxt,
    sitemapXml,
    renderCanonicalHtml
} = require("./controllers/seoController");

const app = express();

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", async (req, res) => {
    try {
        const { testConnection } = require("./db");
        const database = await testConnection();

        res.json({
            status: "ok",
            service: "Ton-o-Lore-api",
            database: "connected",
            databaseName: database.database,
            time: database.time
        });
    } catch (error) {
        console.error("Health check failed:", error);

        res.status(500).json({
            status: "error",
            service: "Ton-o-Lore-api",
            database: "disconnected",
            error: error.message
        });
    }
});

app.get("/robots.txt", robotsTxt);
app.get("/sitemap.xml", sitemapXml);
app.get("/canonical/*slug", renderCanonicalHtml);

const entityRoutes = require("./routes/entityRoutes");
const rabbitHoleRoutes = require("./routes/rabbitHoleRoutes");
const pageRoutes = require("./routes/pageRoutes");

app.use("/api/entities", entityRoutes);
app.use("/api/rabbit-holes", rabbitHoleRoutes);
app.use("/api/pages", pageRoutes);

const clientDist = path.resolve(__dirname, "../../client/dist");
if (fs.existsSync(clientDist)) {
    app.use(express.static(clientDist));
    app.get(/^(?!\/api\/).*/, (req, res, next) => {
        if (req.method !== "GET" && req.method !== "HEAD") {
            return next();
        }
        res.sendFile(path.join(clientDist, "index.html"), (error) => {
            if (error) {
                next();
            }
        });
    });
}

module.exports = app;
