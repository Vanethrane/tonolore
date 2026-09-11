const { query } = require("../db");
const { getSiteUrl, absoluteCanonical } = require("../lib/siteUrl");

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

async function robotsTxt(req, res) {
    const siteUrl = getSiteUrl(req);

    res.type("text/plain").send(
        [
            "User-agent: *",
            "Allow: /",
            `Sitemap: ${siteUrl}/sitemap.xml`,
            ""
        ].join("\n")
    );
}

async function sitemapXml(req, res) {
    try {
        const siteUrl = getSiteUrl(req);
        const result = await query(
            `
            SELECT
                slug,
                COALESCE(updated_at, created_at) AS updated_at
            FROM pages
            WHERE status = 'published'
            ORDER BY slug
            `
        );

        const urls = [
            {
                loc: `${siteUrl}/`,
                lastmod: new Date().toISOString().slice(0, 10),
                priority: "1.0"
            },
            ...result.rows.map((row) => ({
                loc: absoluteCanonical(siteUrl, row.slug),
                lastmod: new Date(row.updated_at).toISOString().slice(0, 10),
                priority: row.slug.split("/").length <= 2 ? "0.8" : "0.6"
            }))
        ];

        const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map(
        (url) => `  <url>
    <loc>${escapeHtml(url.loc)}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join("\n")}
</urlset>
`;

        res.type("application/xml").send(body);
    } catch (error) {
        console.error("Sitemap failed:", error);
        res.status(500).type("text/plain").send("Failed to build sitemap");
    }
}

async function renderCanonicalHtml(req, res) {
    try {
        const slug = Array.isArray(req.params.slug)
            ? "/" + req.params.slug.join("/")
            : `/${String(req.params.slug || "").replace(/^\/+/, "")}`;

        const siteUrl = getSiteUrl(req);
        const canonical = absoluteCanonical(siteUrl, slug);

        const result = await query(
            `
            SELECT
                p.slug,
                p.title,
                p.meta_title,
                p.meta_description,
                p.content,
                e.name AS entity_name,
                e.type AS entity_type,
                e.image_url,
                e.image_alt,
                e.short_description,
                e.description
            FROM pages p
            LEFT JOIN entities e ON e.id = p.entity_id
            WHERE p.slug = $1
              AND p.status = 'published'
            LIMIT 1
            `,
            [slug]
        );

        if (!result.rows.length) {
            return res.status(404).type("html").send(`<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"/>
<title>Not found | Ton-o-Lore</title>
<link rel="canonical" href="${escapeHtml(canonical)}"/>
</head><body><h1>Page not found</h1><p><a href="${escapeHtml(siteUrl)}/">Ton-o-Lore home</a></p></body></html>`);
        }

        const page = result.rows[0];
        const title = page.meta_title || `${page.title} | Ton-o-Lore`;
        const description =
            page.meta_description ||
            page.short_description ||
            page.description ||
            `Canonical Ton-o-Lore page for ${page.entity_name || page.title}.`;
        const image = page.image_url || "";

        const jsonLd = {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: title,
            description,
            url: canonical,
            isPartOf: {
                "@type": "WebSite",
                name: "Ton-o-Lore",
                url: siteUrl
            },
            about: {
                "@type": "Thing",
                name: page.entity_name || page.title,
                description
            },
            ...(image ? { primaryImageOfPage: image } : {})
        };

        res.type("html").send(`<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}"/>
<link rel="canonical" href="${escapeHtml(canonical)}"/>
<meta property="og:type" content="article"/>
<meta property="og:title" content="${escapeHtml(title)}"/>
<meta property="og:description" content="${escapeHtml(description)}"/>
<meta property="og:url" content="${escapeHtml(canonical)}"/>
${image ? `<meta property="og:image" content="${escapeHtml(image)}"/>` : ""}
<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}"/>
<meta name="twitter:title" content="${escapeHtml(title)}"/>
<meta name="twitter:description" content="${escapeHtml(description)}"/>
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
<header>
  <p><a href="${escapeHtml(siteUrl)}/">Ton-o-Lore</a></p>
  <p class="type">${escapeHtml(page.entity_type || "topic")}</p>
  <h1>${escapeHtml(page.entity_name || page.title)}</h1>
  ${image ? `<img src="${escapeHtml(image)}" alt="${escapeHtml(page.image_alt || page.entity_name || page.title)}" width="360" referrerpolicy="no-referrer"/>` : ""}
</header>
<main>
${page.content || ""}
</main>
</body>
</html>`);
    } catch (error) {
        console.error("Canonical HTML render failed:", error);
        res.status(500).type("text/plain").send("Failed to render page");
    }
}

module.exports = {
    robotsTxt,
    sitemapXml,
    renderCanonicalHtml
};
