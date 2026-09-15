/**
 * Write SEO-tagged SPA shells for every published page JSON so GitHub Pages
 * returns unique <title>/description/canonical/OG/JSON-LD on first HTML hit
 * (critical for crawl + SERP CTR). Also covers legal routes + subject hubs.
 *
 *   node scripts/maintenance/writeSeoPageShells.js
 *   node scripts/maintenance/writeSeoPageShells.js --limit=500
 */

const fs = require("fs");
const path = require("path");
const {
    injectSpaSeoHead,
    absoluteCanonical
} = require("../lib/spaSeoInject");
const {
    shortenSerpTitle,
    schemaTypeForEntity,
    truncateMeta
} = require("../generate/pages/pageSeoContent");

const SITE_URL = (
    process.env.SITE_URL ||
    "https://www.tonolore.com"
).replace(/\/+$/, "");

const root = path.join(__dirname, "..", "..");
const docs = path.join(root, "docs");

const LEGAL = {
    privacy: {
        title: "Privacy Policy | Ton-o-Lore",
        description:
            "How Ton-o-Lore handles privacy, analytics, and personal information."
    },
    terms: {
        title: "Terms of Use | Ton-o-Lore",
        description:
            "Terms for using Ton-o-Lore as an independent educational encyclopedia."
    },
    copyright: {
        title: "Copyright & Fair Use | Ton-o-Lore",
        description:
            "Copyright notices, trademarks, and fair-use identification policy for Ton-o-Lore."
    },
    cookies: {
        title: "Cookie Notice | Ton-o-Lore",
        description: "Cookie and local storage practices on Ton-o-Lore."
    },
    contact: {
        title: "Contact | Ton-o-Lore",
        description: "Contact Ton-o-Lore / Vanethrane."
    }
};

function parseArgs(argv) {
    const limitRaw = argv.find((arg) => arg.startsWith("--limit="));
    return {
        limit: limitRaw ? Number(limitRaw.slice("--limit=".length)) || null : null,
        docsOnly: argv.includes("--docs-only")
    };
}

function spaShell() {
    const indexPath = path.join(docs, "index.html");
    if (!fs.existsSync(indexPath)) {
        throw new Error("Missing docs/index.html — run publishPages first");
    }
    return fs.readFileSync(indexPath, "utf8");
}

function writeFileRetry(filePath, contents) {
    const dir = path.dirname(filePath);
    fs.mkdirSync(dir, { recursive: true });
    const tmp = `${filePath}.${process.pid}.tmp`;
    let lastError = null;

    for (let attempt = 0; attempt < 8; attempt += 1) {
        try {
            fs.writeFileSync(tmp, contents);
            try {
                fs.renameSync(tmp, filePath);
            } catch {
                fs.writeFileSync(filePath, contents);
                try {
                    fs.unlinkSync(tmp);
                } catch (_) {
                    /* ignore */
                }
            }
            return true;
        } catch (error) {
            lastError = error;
            try {
                fs.unlinkSync(tmp);
            } catch (_) {
                /* ignore */
            }
            const end = Date.now() + 200 * (attempt + 1);
            while (Date.now() < end) {
                /* backoff */
            }
        }
    }

    throw lastError || new Error(`Failed to write ${filePath}`);
}

function writeShell(rel, html, docsOnly) {
    if (!rel || rel.startsWith("category/")) {
        return;
    }
    writeFileRetry(path.join(docs, rel, "index.html"), html);
    if (!docsOnly) {
        writeFileRetry(path.join(root, rel, "index.html"), html);
    }
}

function walkPageJson(dir, out = []) {
    if (!fs.existsSync(dir)) {
        return out;
    }
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkPageJson(full, out);
        } else if (entry.isFile() && entry.name.endsWith(".json")) {
            out.push(full);
        }
    }
    return out;
}

function seoFromPagePayload(payload) {
    const page = payload.page || {};
    const entity = payload.entity || {};
    const subject = payload.subject || null;
    const slug = page.slug || entity.path || `/${entity.slug}`;
    const canonical = page.canonical_url || absoluteCanonical(SITE_URL, slug);
    const rawTitle =
        page.meta_title ||
        `${entity.name || page.title || "Lore page"} | Ton-o-Lore`;
    const title = shortenSerpTitle(rawTitle, entity.name || page.title, 60);
    const description = truncateMeta(
        page.meta_description ||
            entity.short_description ||
            entity.description ||
            `Canonical Ton-o-Lore page for ${entity.name || "this subject"}.`,
        155
    );
    const image = entity.image_url || "";

    const categoryId = subject?.categories?.[0];
    const categoryLabel = categoryId
        ? String(categoryId)
              .split("-")
              .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
              .join(" ")
        : null;

    const breadcrumb = {
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${SITE_URL}/`
            }
        ]
    };
    if (categoryId && categoryLabel) {
        breadcrumb.itemListElement.push({
            "@type": "ListItem",
            position: 2,
            name: categoryLabel,
            item: `${SITE_URL}/category/${categoryId}`
        });
    }
    if (subject?.name && subject?.path && page.slug !== subject.path) {
        breadcrumb.itemListElement.push({
            "@type": "ListItem",
            position: breadcrumb.itemListElement.length + 1,
            name: subject.name,
            item: absoluteCanonical(SITE_URL, subject.path)
        });
    }
    breadcrumb.itemListElement.push({
        "@type": "ListItem",
        position: breadcrumb.itemListElement.length + 1,
        name: entity.name || page.title || "Page"
    });

    const aboutType = schemaTypeForEntity(entity);

    return {
        title,
        description,
        canonical,
        image,
        siteUrl: SITE_URL,
        type: "article",
        robots:
            "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
        jsonLd: {
            "@context": "https://schema.org",
            "@graph": [
                {
                    "@type": "WebPage",
                    name: title,
                    description,
                    url: canonical,
                    isPartOf: {
                        "@type": "WebSite",
                        name: "Ton-o-Lore",
                        url: `${SITE_URL}/`
                    },
                    about: {
                        "@type": aboutType,
                        name: entity.name || page.title,
                        alternateName: entity.aliases || [],
                        description
                    },
                    ...(image ? { primaryImageOfPage: image } : {})
                },
                breadcrumb
            ]
        }
    };
}

function main() {
    const opts = parseArgs(process.argv.slice(2));
    const shell = spaShell();
    let written = 0;

    // Home shell: keep SPA assets but arm crawl/share tags.
    const homeHtml = injectSpaSeoHead(shell, {
        title: "Ton-o-Lore | Lore encyclopedia for deep rabbit holes",
        description:
            "Find people, places, and plot threads across One Piece, Star Wars, Marvel, DC, Pokémon, and more. Canonical lore pages built for search and discovery.",
        canonical: `${SITE_URL}/`,
        siteUrl: SITE_URL,
        type: "website",
        image: "/favicon.svg",
        jsonLd: {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Ton-o-Lore",
            url: `${SITE_URL}/`,
            potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/?q={search_term_string}`,
                "query-input": "required name=search_term_string"
            }
        }
    });
    writeFileRetry(path.join(docs, "index.html"), homeHtml);
    writeFileRetry(path.join(docs, "404.html"), homeHtml);
    if (!opts.docsOnly) {
        writeFileRetry(path.join(root, "index.html"), homeHtml);
        writeFileRetry(path.join(root, "404.html"), homeHtml);
    }

    for (const [slug, meta] of Object.entries(LEGAL)) {
        const html = injectSpaSeoHead(shell, {
            title: meta.title,
            description: meta.description,
            canonical: `${SITE_URL}/${slug}`,
            siteUrl: SITE_URL,
            type: "website",
            jsonLd: {
                "@context": "https://schema.org",
                "@type": "WebPage",
                name: meta.title,
                description: meta.description,
                url: `${SITE_URL}/${slug}`
            }
        });
        writeShell(slug, html, opts.docsOnly);
        written += 1;
    }

    const pagesDir = path.join(docs, "data", "pages");
    const files = walkPageJson(pagesDir);
    const limited = opts.limit ? files.slice(0, opts.limit) : files;

    for (const file of limited) {
        let payload;
        try {
            payload = JSON.parse(fs.readFileSync(file, "utf8"));
        } catch {
            continue;
        }
        const rel = path
            .relative(pagesDir, file)
            .replace(/\\/g, "/")
            .replace(/\.json$/i, "");
        if (!rel || rel.startsWith("category/")) {
            continue;
        }
        const seo = seoFromPagePayload(payload);
        const html = injectSpaSeoHead(shell, seo);
        writeShell(rel, html, opts.docsOnly);
        written += 1;
        if (written % 2000 === 0) {
            console.log(`  … ${written} SEO shells`);
        }
    }

    // Subject hubs from catalog (in case a hub lacks page JSON).
    const subjectsPath = path.join(docs, "data", "subjects.json");
    if (fs.existsSync(subjectsPath)) {
        const catalog = JSON.parse(fs.readFileSync(subjectsPath, "utf8"));
        for (const subject of catalog.subjects || []) {
            const rel = String(subject.path || `/${subject.id}`).replace(
                /^\/+|\/+$/g,
                ""
            );
            if (!rel) {
                continue;
            }
            const target = path.join(docs, rel, "index.html");
            if (fs.existsSync(target)) {
                continue;
            }
            const title = `${subject.name} | Ton-o-Lore`;
            const description =
                subject.blurb ||
                `Open the ${subject.name} lore map on Ton-o-Lore — mapped people, places, and connections.`;
            const html = injectSpaSeoHead(shell, {
                title,
                description,
                canonical: absoluteCanonical(SITE_URL, `/${rel}`),
                image: subject.logo?.url || "",
                siteUrl: SITE_URL,
                type: "website",
                jsonLd: {
                    "@context": "https://schema.org",
                    "@type": "CollectionPage",
                    name: title,
                    description,
                    url: absoluteCanonical(SITE_URL, `/${rel}`)
                }
            });
            writeShell(rel, html, opts.docsOnly);
            written += 1;
        }
    }

    console.log(
        `Wrote ${written} SEO-tagged SPA shells (pages=${limited.length}${opts.limit ? ` limit=${opts.limit}` : ""})`
    );
}

main();
