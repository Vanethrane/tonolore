/**
 * Inject unique SEO tags into a Vite SPA shell so crawlers see per-URL meta
 * before (or without) executing JS.
 */

const DEFAULT_OG_IMAGE_PATH = "/og-default.png";
const GA_MEASUREMENT_ID = "G-E57J1V5PJ1";

const GOOGLE_TAG_HTML = `<!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    </script>`;

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function absoluteAsset(siteUrl, url) {
    if (!url) {
        return "";
    }
    if (/^https?:\/\//i.test(url)) {
        return url;
    }
    const base = String(siteUrl || "").replace(/\/+$/, "");
    return `${base}${String(url).startsWith("/") ? url : `/${url}`}`;
}

function absoluteCanonical(siteUrl, slugPath) {
    const path = String(slugPath || "/").startsWith("/")
        ? slugPath
        : `/${slugPath}`;
    return `${String(siteUrl || "").replace(/\/+$/, "")}${path === "/" ? "/" : path}`;
}

function stripGoogleTag(html) {
    return String(html || "")
        .replace(/<!--\s*Google tag \(gtag\.js\)\s*-->\s*/gi, "")
        .replace(
            /<script[^>]*src=["']https:\/\/www\.googletagmanager\.com\/gtag\/js\?id=G-[A-Z0-9]+["'][^>]*>\s*<\/script>\s*/gi,
            ""
        )
        .replace(
            /<script>\s*window\.dataLayer\s*=\s*window\.dataLayer\s*\|\|\s*\[\];[\s\S]*?gtag\(\s*['"]config['"]\s*,\s*['"]G-[A-Z0-9]+['"]\s*\);?\s*<\/script>\s*/gi,
            ""
        );
}

/** Ensure exactly one Google tag, immediately after <head>. */
function ensureGoogleTag(html) {
    let out = stripGoogleTag(html);
    if (!/<head[\s>]/i.test(out)) {
        return out;
    }
    return out.replace(/<head([^>]*)>/i, `<head$1>\n    ${GOOGLE_TAG_HTML}\n`);
}

/** Remove prior SEO tags so shells never stack homepage + page OG. */
function stripExistingSeoTags(html) {
    return String(html || "")
        .replace(/<meta\s+name=["']description["'][^>]*>\s*/gi, "")
        .replace(/<meta\s+name=["']robots["'][^>]*>\s*/gi, "")
        .replace(/<meta\s+name=["']googlebot["'][^>]*>\s*/gi, "")
        .replace(/<meta\s+name=["']bingbot["'][^>]*>\s*/gi, "")
        .replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "")
        .replace(/<meta\s+property=["']og:[^"']+["'][^>]*>\s*/gi, "")
        .replace(/<meta\s+name=["']twitter:[^"']+["'][^>]*>\s*/gi, "")
        .replace(
            /<script[^>]*id=["']Ton-o-Lore-jsonld["'][^>]*>[\s\S]*?<\/script>\s*/gi,
            ""
        )
        .replace(
            /<script[^>]*type=["']application\/ld\+json["'][^>]*>[\s\S]*?<\/script>\s*/gi,
            ""
        );
}

function injectSpaSeoHead(shellHtml, seo) {
    const title = seo.title || "Ton-o-Lore";
    const description =
        seo.description ||
        "Canonical lore pages for people, places, events, and ideas.";
    const canonical = seo.canonical || seo.canonicalUrl || "";
    const image = seo.image || seo.imageUrl || "";
    const siteUrl = seo.siteUrl || "https://www.tonolore.com";
    const ogType = seo.type || seo.ogType || "website";
    const robots =
        seo.robots ||
        "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
    const resolvedImage =
        absoluteAsset(siteUrl, image) ||
        absoluteAsset(siteUrl, DEFAULT_OG_IMAGE_PATH) ||
        absoluteAsset(siteUrl, "/favicon.svg");
    const twitterCard = "summary_large_image";

    const block = `
    <meta name="robots" content="${escapeHtml(robots)}"/>
    <meta name="googlebot" content="${escapeHtml(robots)}"/>
    <meta name="bingbot" content="${escapeHtml(robots)}"/>
    <meta name="description" content="${escapeHtml(description)}"/>
    ${canonical ? `<link rel="canonical" href="${escapeHtml(canonical)}"/>` : ""}
    <meta property="og:type" content="${escapeHtml(ogType)}"/>
    <meta property="og:site_name" content="Ton-o-Lore"/>
    <meta property="og:locale" content="en_US"/>
    <meta property="og:title" content="${escapeHtml(title)}"/>
    <meta property="og:description" content="${escapeHtml(description)}"/>
    ${canonical ? `<meta property="og:url" content="${escapeHtml(canonical)}"/>` : ""}
    <meta property="og:image" content="${escapeHtml(resolvedImage)}"/>
    <meta property="og:image:alt" content="${escapeHtml(title)}"/>
    <meta name="twitter:card" content="${escapeHtml(twitterCard)}"/>
    <meta name="twitter:title" content="${escapeHtml(title)}"/>
    <meta name="twitter:description" content="${escapeHtml(description)}"/>
    <meta name="twitter:image" content="${escapeHtml(resolvedImage)}"/>
    ${
        seo.jsonLd
            ? `<script type="application/ld+json" id="Ton-o-Lore-jsonld">${JSON.stringify(seo.jsonLd)}</script>`
            : ""
    }
`;

    let html = ensureGoogleTag(stripExistingSeoTags(shellHtml));
    html = html.replace(
        /<title>[\s\S]*?<\/title>/i,
        `<title>${escapeHtml(title)}</title>`
    );
    if (!/<head[\s>]/i.test(html)) {
        return html;
    }
    // Insert SEO metas before </head> so the Google tag stays first and intact.
    if (/<\/head>/i.test(html)) {
        return html.replace(/<\/head>/i, `${block}\n  </head>`);
    }
    return html.replace(/<head([^>]*)>/i, `<head$1>${block}`);
}

module.exports = {
    DEFAULT_OG_IMAGE_PATH,
    GA_MEASUREMENT_ID,
    GOOGLE_TAG_HTML,
    escapeHtml,
    absoluteAsset,
    absoluteCanonical,
    stripExistingSeoTags,
    stripGoogleTag,
    ensureGoogleTag,
    injectSpaSeoHead
};
