const path = require("path");
const dotenv = require("dotenv");

dotenv.config({
    path: path.resolve(__dirname, "../../../.env")
});

if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL is missing from .env");
}

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL,
    PORT: Number(process.env.PORT || 3001),
    NODE_ENV: process.env.NODE_ENV || "development",
    SITE_URL: process.env.SITE_URL || ""
};
