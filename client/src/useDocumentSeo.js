import { useEffect } from "react";

function upsertMeta(attr, key, content) {
    if (!content) {
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
    jsonLd = null
}) {
    useEffect(() => {
        const previousTitle = document.title;

        if (title) {
            document.title = title;
        }

        upsertMeta("name", "description", description);
        upsertLink("canonical", canonicalUrl);

        upsertMeta("property", "og:type", type);
        upsertMeta("property", "og:title", title);
        upsertMeta("property", "og:description", description);
        upsertMeta("property", "og:url", canonicalUrl);
        if (imageUrl) {
            upsertMeta("property", "og:image", imageUrl);
        }

        upsertMeta(
            "name",
            "twitter:card",
            imageUrl ? "summary_large_image" : "summary"
        );
        upsertMeta("name", "twitter:title", title);
        upsertMeta("name", "twitter:description", description);

        upsertJsonLd("Ton-o-Lore-jsonld", jsonLd);

        return () => {
            document.title = previousTitle;
        };
    }, [
        title,
        description,
        canonicalUrl,
        imageUrl,
        type,
        JSON.stringify(jsonLd)
    ]);
}

export function siteOrigin() {
    if (typeof window !== "undefined" && window.location?.origin) {
        return window.location.origin;
    }

    return "http://localhost:5173";
}
