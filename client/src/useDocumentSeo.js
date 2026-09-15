import { useEffect } from "react";

function upsertMeta(attr, key, content) {
    if (content == null || content === "") {
        return;
    }

    let node = document.head.querySelector(`meta[${attr}="${key}"]`);

    if (!node) {
        node = document.createElement("meta");
        node.setAttribute(attr, key);
        document.head.appendChild(node);
    }

    node.setAttribute("content", content);
}

function upsertLink(rel, href) {
    if (!href) {
        return;
    }

    let node = document.head.querySelector(`link[rel="${rel}"]`);

    if (!node) {
        node = document.createElement("link");
        node.setAttribute("rel", rel);
        document.head.appendChild(node);
    }

    node.setAttribute("href", href);
}

function upsertJsonLd(id, data) {
    let node = document.getElementById(id);

    if (!data) {
        if (node) {
            node.remove();
        }
        return;
    }

    if (!node) {
        node = document.createElement("script");
        node.type = "application/ld+json";
        node.id = id;
        document.head.appendChild(node);
    }

    node.textContent = JSON.stringify(data);
}

/**
 * Apply unique title / description / canonical / OG tags for long-tail indexing.
 */
export function useDocumentSeo({
    title,
    description,
    canonicalUrl,
    imageUrl,
    type = "website",
    robots = null,
    jsonLd = null
}) {
    useEffect(() => {
        const previousTitle = document.title;

        if (title) {
            document.title = title;
        }

        upsertMeta("name", "description", description);
        upsertLink("canonical", canonicalUrl);

        if (robots) {
            upsertMeta("name", "robots", robots);
            upsertMeta("name", "googlebot", robots);
            upsertMeta("name", "bingbot", robots);
        }

        upsertMeta("property", "og:type", type);
        upsertMeta("property", "og:site_name", "Ton-o-Lore");
        upsertMeta("property", "og:locale", "en_US");
        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:url", canonicalUrl);
        if (imageUrl) {
            upsertMeta("property", "og:image", imageUrl);
            upsertMeta("property", "og:image:alt", title);
        }

        upsertMeta(
            "name",
            "twitter:card",
            imageUrl ? "summary_large_image" : "summary"
        );
        upsertMeta("name", "twitter:title", title);
        upsertMeta("name", "twitter:description", description);
        if (imageUrl) {
            upsertMeta("name", "twitter:image", imageUrl);
        }

        upsertJsonLd("Ton-o-Lore-jsonld", jsonLd);

        if (typeof window !== "undefined" && typeof window.gtag === "function") {
            const pagePath =
                canonicalUrl && /^https?:\/\//i.test(canonicalUrl)
                    ? new URL(canonicalUrl).pathname +
                      (new URL(canonicalUrl).search || "")
                    : `${window.location.pathname}${window.location.search || ""}`;
            window.gtag("config", "G-E57J1V5PJ1", {
                page_path: pagePath,
                page_title: title || document.title
            });
        }

        return () => {
            document.title = previousTitle;
        };
    }, [
        title,
        description,
        canonicalUrl,
        imageUrl,
        type,
        robots,
        JSON.stringify(jsonLd)
    ]);
}

export function siteOrigin() {
    if (typeof window !== "undefined" && window.location?.origin) {
        return window.location.origin;
    }

    return "http://localhost:5173";
}

/** BreadcrumbList JSON-LD for Google + Bing rich results. */
export function buildBreadcrumbJsonLd(origin, crumbs) {
    const items = (crumbs || [])
        .filter((crumb) => crumb && crumb.label)
        .map((crumb, index) => {
            const entry = {
                "@type": "ListItem",
                position: index + 1,
                name: crumb.label
            };
            if (crumb.href) {
                const path = String(crumb.href).startsWith("/")
                    ? crumb.href
                    : `/${crumb.href}`;
                entry.item = `${String(origin || "").replace(/\/+$/, "")}${path === "/" ? "/" : path}`;
            }
            return entry;
        });

    if (items.length < 2) {
        return null;
    }

    return {
        "@type": "BreadcrumbList",
        itemListElement: items
    };
}

export function schemaTypeForEntity(entity) {
    const type = String(entity?.type || "").toLowerCase();
    if (type === "person") {
        return "Person";
    }
    if (type === "place") {
        return "Place";
    }
    if (type === "organization") {
        return "Organization";
    }
    if (type === "work") {
        return "CreativeWork";
    }
    if (type === "event") {
        return "Event";
    }
    if (type === "object") {
        return "Product";
    }
    return "Thing";
}

/** Match shell/DB title shortening for hydrated SPA titles. */
export function shortenSerpTitle(rawTitle, entityName, max = 60) {
    let title = String(rawTitle || "").replace(/\s+/g, " ").trim();
    title = title
        .replace(
            /\s+[—-]\s+[^|]+,\s*lore\s*&\s*connections\s*\|\s*Ton-o-Lore$/i,
            " | Ton-o-Lore"
        )
        .replace(/\s+\|\s*Ton-o-Lore\s*\|\s*Ton-o-Lore$/i, " | Ton-o-Lore");
    if (title.length > max) {
        const name = String(entityName || "Lore page").trim();
        title = `${name} | Ton-o-Lore`;
        if (title.length > max) {
            title = `${name.slice(0, Math.max(12, max - 14)).trim()}… | Ton-o-Lore`;
        }
    }
    return title;
}
