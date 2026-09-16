/**
 * Bing IndexNow (also used by Yandex, Seznam, Naver partners).
 *
 * Host the key file at https://www.tonolore.com/{key}.txt
 * Set INDEXNOW_KEY in .env (optional — a stable key is generated under docs/).
 *
 *   const { notifyIndexNow } = require("../lib/indexNow");
 *   await notifyIndexNow(["https://www.tonolore.com/dc/metropolis/lex-luthor"]);
 */

const fs = require("fs");
const path = require("path");
const https = require("https");

const ROOT = path.join(__dirname, "..", "..");
const DOCS = path.join(ROOT, "docs");
/** Stable public IndexNow key (must match hosted /{key}.txt on the site). */
const DEFAULT_KEY = "tonolore4b8c2e91a7f05d6c";

function loadOrCreateKey() {
    if (process.env.INDEXNOW_KEY) {
        return String(process.env.INDEXNOW_KEY).trim();
    }
    return DEFAULT_KEY;
}

function ensureKeyFile(key) {
    const name = `${key}.txt`;
    for (const dir of [DOCS, ROOT]) {
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, name), key);
    }
    return name;
}

function postJson(url, body) {
    return new Promise((resolve, reject) => {
        const payload = JSON.stringify(body);
        const req = https.request(
            url,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    "Content-Length": Buffer.byteLength(payload)
                }
            },
            (res) => {
                let data = "";
                res.on("data", (chunk) => {
                    data += chunk;
                });
                res.on("end", () => {
                    resolve({ status: res.statusCode, body: data });
                });
            }
        );
        req.on("error", reject);
        req.write(payload);
        req.end();
    });
}

/**
 * Notify IndexNow of URL updates (batches of ≤10k).
 */
async function notifyIndexNow(urls, options = {}) {
    const siteUrl = String(
        options.siteUrl || process.env.SITE_URL || "https://www.tonolore.com"
    ).replace(/\/+$/, "");
    const host = siteUrl.replace(/^https?:\/\//i, "").split("/")[0];
    const key = loadOrCreateKey();
    const keyLocation = `${siteUrl}/${ensureKeyFile(key)}`;
    const list = [
        ...new Set(
            (urls || [])
                .map((url) => String(url || "").trim())
                .filter((url) => /^https?:\/\//i.test(url))
        )
    ];
    if (!list.length) {
        return { submitted: 0, keyLocation };
    }

    let submitted = 0;
    for (let i = 0; i < list.length; i += 10000) {
        const chunk = list.slice(i, i + 10000);
        const result = await postJson("https://api.indexnow.org/indexnow", {
            host,
            key,
            keyLocation,
            urlList: chunk
        });
        if (result.status >= 200 && result.status < 300) {
            submitted += chunk.length;
        } else if (!options.silent) {
            console.warn(
                `[indexnow] HTTP ${result.status}: ${String(result.body).slice(0, 200)}`
            );
        }
    }
    return { submitted, keyLocation, total: list.length };
}

module.exports = {
    loadOrCreateKey,
    ensureKeyFile,
    notifyIndexNow
};
