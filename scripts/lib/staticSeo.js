/**
 * Shared builders for crawlable static SEO artifacts (Pages + Express).
 * Every public URL should resolve to a real HTML file with unique meta.
 */

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function absoluteCanonical(siteUrl, slugPath) {
    const path = String(slugPath || "/").startsWith("/")
        ? slugPath
        : `/${slugPath}`;

    return `${String(siteUrl || "").replace(/\/+$/, "")}${path === "/" ? "/" : path}`;
}

function slugToRelativeDir(slug) {
    return String(slug || "")
        .replace(/^\/+|\/+$/g, "")
        .split("/")
        .filter(Boolean)
        .join("/");
}

function buildRobotsTxt(siteUrl) {
    const base = String(siteUrl || "").replace(/\/+$/, "");
    return [
        "User-agent: *",
        "Allow: /",
        "",
        "User-agent: Googlebot",
        "Allow: /",
        "",
        "User-agent: Bingbot",
        "Allow: /",
        "",
        `Sitemap: ${base}/sitemap.xml`,
        ""
    ].join("\n");
}

function buildSitemapXml(siteUrl, entries) {
    const base = String(siteUrl || "").replace(/\/+$/, "");
    const urls = entries.map((entry) => {
        const loc = entry.loc.startsWith("http")
            ? entry.loc
            : absoluteCanonical(base, entry.loc);
        const lastmod =
            entry.lastmod || new Date().toISOString().slice(0, 10);
        const priority = entry.priority || "0.6";
        const changefreq = entry.changefreq || "weekly";

        return `  <url>
    <loc>${escapeHtml(loc)}</loc>
    <lastmod>${escapeHtml(lastmod)}</lastmod>
    <changefreq>${escapeHtml(changefreq)}</changefreq>
    <priority>${escapeHtml(priority)}</priority>
  </url>`;
    });

    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>
`;
}

const SITEMAP_MAX_URLS = 10000;

/**
 * Write sitemap index + chunked sitemap-N.xml (Google + Bing friendly).
 * Returns { indexPath, chunkCount, urlCount }.
 */
function writeSitemapArtifacts(targetDir, siteUrl, entries, writeFile) {
    const write =
        writeFile ||
        ((filePath, contents) => {
            const fs = require("fs");
            const path = require("path");
            fs.mkdirSync(path.dirname(filePath), { recursive: true });
            fs.writeFileSync(filePath, contents);
        });
    const path = require("path");
    const base = String(siteUrl || "").replace(/\/+$/, "");
    const list = Array.isArray(entries) ? entries : [];
    const chunks = [];
    for (let i = 0; i < list.length; i += SITEMAP_MAX_URLS) {
        chunks.push(list.slice(i, i + SITEMAP_MAX_URLS));
    }
    if (!chunks.length) {
        chunks.push([]);
    }

    const chunkNames = [];
    chunks.forEach((chunk, index) => {
        const name = `sitemap-${index + 1}.xml`;
        chunkNames.push(name);
        write(path.join(targetDir, name), buildSitemapXml(base, chunk));
    });

    const indexXml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${chunkNames
    .map(
        (name) => `  <sitemap>
    <loc>${escapeHtml(`${base}/${name}`)}</loc>
    <lastmod>${escapeHtml(new Date().toISOString().slice(0, 10))}</lastmod>
  </sitemap>`
    )
    .join("\n")}
</sitemapindex>
`;
    write(path.join(targetDir, "sitemap.xml"), indexXml);

    // Remove stale higher-numbered shards
    const fs = require("fs");
    for (const entry of fs.readdirSync(targetDir)) {
        const match = entry.match(/^sitemap-(\d+)\.xml$/i);
        if (!match) {
            continue;
        }
        const n = Number(match[1]);
        if (n > chunks.length) {
            try {
                fs.unlinkSync(path.join(targetDir, entry));
            } catch (_) {
                /* ignore */
            }
        }
    }

    return {
        indexPath: path.join(targetDir, "sitemap.xml"),
        chunkCount: chunks.length,
        urlCount: list.length
    };
}

function baseHead({
    title,
    description,
    canonical,
    image = "",
    siteUrl,
    cssHrefs = [],
    jsonLd = null,
    ogType = "website"
}) {
    const cssLinks = cssHrefs
        .map(
            (href) =>
                `<link rel="stylesheet" href="${escapeHtml(href)}"/>`
        )
        .join("\n");

    return `<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<meta name="referrer" content="no-referrer"/>
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}"/>
<link rel="canonical" href="${escapeHtml(canonical)}"/>
<meta property="og:type" content="${escapeHtml(ogType)}"/>
<meta property="og:site_name" content="Ton-o-Lore"/>
<meta property="og:title" content="${escapeHtml(title)}"/>
<meta property="og:description" content="${escapeHtml(description)}"/>
<meta property="og:url" content="${escapeHtml(canonical)}"/>
${image ? `<meta property="og:image" content="${escapeHtml(image)}"/>` : ""}
<meta name="twitter:card" content="${image ? "summary_large_image" : "summary"}"/>
<meta name="twitter:title" content="${escapeHtml(title)}"/>
<meta name="twitter:description" content="${escapeHtml(description)}"/>
<link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
${cssLinks}
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ""}
<style>
  :root { color-scheme: dark; }
  body { margin: 0; font-family: Georgia, "Times New Roman", serif; background: #0b0d10; color: #e8e4db; line-height: 1.65; }
  a { color: #3db8a0; }
  .wrap { width: min(920px, calc(100% - 40px)); margin: 0 auto; padding: 28px 0 72px; }
  .site-bar { display: flex; gap: 16px; flex-wrap: wrap; align-items: baseline; margin-bottom: 22px; font-family: system-ui, sans-serif; font-size: 0.9rem; }
  .site-bar strong { font-size: 1.15rem; letter-spacing: 0.04em; color: #f2efe8; }
  .trail { color: #9a9488; font-size: 0.85rem; margin: 0 0 18px; font-family: system-ui, sans-serif; }
  .eyebrow { text-transform: uppercase; letter-spacing: 0.14em; font-size: 0.72rem; color: #e0a45a; font-family: system-ui, sans-serif; font-weight: 700; }
  h1 { font-size: clamp(2rem, 5vw, 3.4rem); line-height: 1.05; margin: 10px 0 16px; }
  h2 { font-size: 1.45rem; margin: 36px 0 14px; }
  .lede { color: #9a9488; max-width: 42rem; }
  .card-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 12px; margin: 18px 0 0; }
  .card { display: block; padding: 16px; border: 1px solid rgba(232,228,219,0.12); background: #12161c; text-decoration: none; color: inherit; }
  .card:hover { border-color: rgba(61,184,160,0.45); }
  .card span { display: block; color: #e0a45a; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; font-family: system-ui, sans-serif; font-weight: 700; }
  .card strong { display: block; margin: 8px 0 6px; font-size: 1.15rem; }
  .card p { margin: 0; color: #9a9488; font-size: 0.92rem; }
  .hero-img { display: block; max-width: min(360px, 100%); height: auto; margin: 12px 0 18px; }
  main :where(p, li) { color: #cfc9bc; }
  main a { text-decoration-thickness: 1px; }
</style>`;
}

function siteBar(siteUrl) {
    return `<nav class="site-bar" aria-label="Site">
  <strong><a href="${escapeHtml(siteUrl)}/">Ton-o-Lore</a></strong>
  <a href="${escapeHtml(siteUrl)}/">All categories</a>
</nav>`;
}

function buildEntityPageHtml({
    siteUrl,
    page,
    connections = [],
    trail = [],
    cssHrefs = []
}) {
    const canonical = absoluteCanonical(siteUrl, page.slug);
    const title = page.meta_title || `${page.title} | Ton-o-Lore`;
    const description =
        page.meta_description ||
        page.short_description ||
        page.description ||
        `Canonical Ton-o-Lore page for ${page.entity_name || page.title}.`;
    const image = page.image_url || "";
    const name = page.entity_name || page.title;

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
            name,
            description
        },
        ...(image ? { primaryImageOfPage: image } : {})
    };

    const trailHtml = trail.length
        ? `<p class="trail">${trail
              .map((crumb, index) => {
                  const label = escapeHtml(crumb.label);
                  if (crumb.href && index < trail.length - 1) {
                      return `<a href="${escapeHtml(crumb.href)}">${label}</a>`;
                  }
                  return `<span>${label}</span>`;
              })
              .join(" / ")}</p>`
        : "";

    const connectionCards = connections
        .slice(0, 24)
        .map((connection) => {
            const href = absoluteCanonical(
                siteUrl,
                connection.path || `/${connection.slug}`
            );
            const blurb =
                connection.title ||
                connection.short_description ||
                connection.explanation ||
                "";
            return `<a class="card" href="${escapeHtml(href)}">
  <span>${escapeHtml(connection.relationship_label || connection.relationship || "Related")}</span>
  <strong>${escapeHtml(connection.name)}</strong>
  ${blurb ? `<p>${escapeHtml(blurb)}</p>` : ""}
</a>`;
        })
        .join("\n");

    return `<!doctype html>
<html lang="en">
<head>
${baseHead({
    title,
    description,
    canonical,
    image,
    siteUrl,
    cssHrefs,
    jsonLd,
    ogType: "article"
})}
</head>
<body>
<div class="wrap">
${siteBar(siteUrl)}
${trailHtml}
<header>
  <div class="eyebrow">${escapeHtml(page.entity_type || "topic")}</div>
  <h1>${escapeHtml(name)}</h1>
  ${
      image
          ? `<img class="hero-img" src="${escapeHtml(image)}" alt="${escapeHtml(page.image_alt || name)}" width="360" referrerpolicy="no-referrer" loading="eager"/>`
          : ""
  }
</header>
<section aria-label="Where to go next">
  <h2>Where to go next</h2>
  <p class="lede">Follow the strongest mapped connections from this page.</p>
  ${
      connectionCards
          ? `<div class="card-grid">${connectionCards}</div>`
          : `<p class="lede">No linked pages are mapped from here yet.</p>`
  }
</section>
<main>
${page.content || ""}
</main>
</div>
</body>
</html>
`;
}

function buildHomeHtml({ siteUrl, categories, cssHrefs = [] }) {
    const canonical = `${siteUrl}/`;
    const title = "Ton-o-Lore — Living lore maps";
    const description =
        "Canonical lore pages for people, places, events, and ideas — built for long-tail discovery across mapped subjects.";

    const categoryCards = categories
        .map((category) => {
            const href = absoluteCanonical(
                siteUrl,
                `/category/${category.id}`
            );
            const count = category.subjects?.length || 0;
            return `<a class="card" href="${escapeHtml(href)}">
  <span>Category</span>
  <strong>${escapeHtml(category.label)}</strong>
  <p>${escapeHtml(category.blurb || "")}${count ? ` · ${count} subjects` : ""}</p>
</a>`;
        })
        .join("\n");

    const subjectLinks = categories
        .flatMap((category) =>
            (category.subjects || []).map(
                (subject) =>
                    `<li><a href="${escapeHtml(absoluteCanonical(siteUrl, subject.path || `/${subject.id}`))}">${escapeHtml(subject.name)}</a> <span class="lede">(${escapeHtml(category.label)})</span></li>`
            )
        )
        .join("\n");

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Ton-o-Lore",
        url: siteUrl,
        description,
        potentialAction: {
            "@type": "SearchAction",
            target: `${siteUrl}/?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    return `<!doctype html>
<html lang="en">
<head>
${baseHead({
    title,
    description,
    canonical,
    siteUrl,
    cssHrefs,
    jsonLd,
    ogType: "website"
})}
</head>
<body>
<div class="wrap">
${siteBar(siteUrl)}
<header>
  <div class="eyebrow">Start here</div>
  <h1>Ton-o-Lore</h1>
  <p class="lede">${escapeHtml(description)}</p>
</header>
<section>
  <h2>Browse by medium</h2>
  <div class="card-grid">${categoryCards}</div>
</section>
<section>
  <h2>All subjects</h2>
  <ul>
${subjectLinks}
  </ul>
</section>
</div>
</body>
</html>
`;
}

function buildCategoryHtml({
    siteUrl,
    category,
    subjects,
    cssHrefs = []
}) {
    const canonical = absoluteCanonical(
        siteUrl,
        `/category/${category.id}`
    );
    const title = `${category.label} lore maps | Ton-o-Lore`;
    const description =
        category.blurb ||
        `Browse ${category.label} subjects on Ton-o-Lore — canonical pages built for long-tail discovery.`;

    const cards = subjects
        .map((subject) => {
            const href = absoluteCanonical(
                siteUrl,
                subject.path || `/${subject.id}`
            );
            const count = subject.entity_count
                ? `${subject.entity_count} mapped entities`
                : "Open the subject graph";
            return `<a class="card" href="${escapeHtml(href)}">
  <span>Subject</span>
  <strong>${escapeHtml(subject.name)}</strong>
  <p>${escapeHtml(count)}</p>
</a>`;
        })
        .join("\n");

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: title,
        description,
        url: canonical,
        isPartOf: {
            "@type": "WebSite",
            name: "Ton-o-Lore",
            url: siteUrl
        }
    };

    return `<!doctype html>
<html lang="en">
<head>
${baseHead({
    title,
    description,
    canonical,
    siteUrl,
    cssHrefs,
    jsonLd,
    ogType: "website"
})}
</head>
<body>
<div class="wrap">
${siteBar(siteUrl)}
<p class="trail"><a href="${escapeHtml(siteUrl)}/">Home</a> / <span>${escapeHtml(category.label)}</span></p>
<header>
  <div class="eyebrow">Category</div>
  <h1>${escapeHtml(category.label)}</h1>
  <p class="lede">${escapeHtml(description)}</p>
</header>
<section>
  <h2>Subjects</h2>
  <div class="card-grid">${cards}</div>
</section>
</div>
</body>
</html>
`;
}

function buildNotFoundHtml({ siteUrl, cssHrefs = [] }) {
    const canonical = absoluteCanonical(siteUrl, "/404");
    return `<!doctype html>
<html lang="en">
<head>
${baseHead({
    title: "Not found | Ton-o-Lore",
    description: "That Ton-o-Lore page is not published yet.",
    canonical,
    siteUrl,
    cssHrefs
})}
</head>
<body>
<div class="wrap">
${siteBar(siteUrl)}
<h1>Page not found</h1>
<p class="lede"><a href="${escapeHtml(siteUrl)}/">Return to Ton-o-Lore</a></p>
</div>
</body>
</html>
`;
}

module.exports = {
    escapeHtml,
    absoluteCanonical,
    slugToRelativeDir,
    buildRobotsTxt,
    buildSitemapXml,
    writeSitemapArtifacts,
    SITEMAP_MAX_URLS,
    buildEntityPageHtml,
    buildHomeHtml,
    buildCategoryHtml,
    buildNotFoundHtml
};
