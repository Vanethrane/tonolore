/**
 * Derive connection cards from page JSON when the connections array is empty.
 * Static exports often keep linked pages only inside generated HTML.
 */

function stripTags(html) {
    return String(html || "")
        .replace(/<script[\s\S]*?<\/script>/gi, "")
        .replace(/<style[\s\S]*?<\/style>/gi, "")
        .replace(/<[^>]+>/g, " ")
        .replace(/&nbsp;/g, " ")
        .replace(/&amp;/g, "&")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/\s+/g, " ")
        .trim();
}

function normalizePath(href) {
    const raw = String(href || "").split("#")[0].split("?")[0].trim();
    if (!raw || raw === "/" || /^https?:\/\//i.test(raw) || raw.startsWith("mailto:")) {
        return "";
    }
    const withSlash = raw.startsWith("/") ? raw : `/${raw}`;
    return withSlash.replace(/\/+$/, "") || "/";
}

function slugFromPath(path) {
    const parts = String(path || "")
        .replace(/^\/+/, "")
        .split("/")
        .filter(Boolean);
    return parts[parts.length - 1] || "";
}

function inferTypeFromPath(path, name) {
    const blob = `${path} ${name}`.toLowerCase();
    if (/\b(movies?|films?)\b/.test(blob)) return "work";
    if (/\b(tv|anime|series|shows?)\b/.test(blob)) return "work";
    if (/\b(books?|novels?|manga|comics?)\b/.test(blob)) return "work";
    if (/\b(games|video-games?|videogames?)\b/.test(blob)) return "work";
    if (/\b(characters?|people|person)\b/.test(blob)) return "person";
    if (/\b(locations?|places?|worlds?|planets?)\b/.test(blob)) return "place";
    if (/\b(items?|objects?|weapons?)\b/.test(blob)) return "object";
    if (/\b(events?|battles?|wars?)\b/.test(blob)) return "event";
    if (/\b(organizations?|teams?|factions?|corps?)\b/.test(blob)) return "organization";
    return "topic";
}

function relationshipFromContext(html, index) {
    const windowStart = Math.max(0, index - 500);
    const before = html.slice(windowStart, index);
    const label =
        before.match(
            /data-relationship="([^"]+)"[^>]*>[\s\S]{0,200}$/i
        )?.[1] ||
        before.match(
            /<div class="fact-label">\s*([^<]+?)\s*<\/div>[\s\S]{0,200}$/i
        )?.[1] ||
        before.match(
            /<span class="topic-title">\s*([^<]+?)\s*<\/span>[\s\S]{0,300}$/i
        )?.[1] ||
        before.match(/<strong>([^<]{2,40}):<\/strong>\s*$/i)?.[1];
    return stripTags(label || "Connected To");
}

/**
 * @param {object} pageDoc fetchPageBySlug payload
 * @returns {object[]}
 */
export function deriveConnectionsFromPage(pageDoc) {
    const existing = Array.isArray(pageDoc?.connections)
        ? pageDoc.connections.filter(Boolean)
        : [];
    if (existing.length) {
        return existing;
    }

    const selfPath = normalizePath(pageDoc?.page?.slug || "");
    const html = `${pageDoc?.page?.content || ""}\n${pageDoc?.page?.overview || ""}`;
    if (!html.trim()) {
        return [];
    }

    const byPath = new Map();
    const linkRe =
        /<a\s+([^>]*?)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi;
    let match;
    while ((match = linkRe.exec(html))) {
        const before = match[1] || "";
        const after = match[3] || "";
        const attrs = `${before} ${after}`;
        const path = normalizePath(match[2]);
        if (!path || path === selfPath) {
            continue;
        }
        // Prefer lore graph links; still accept plain internal trails.
        const isLoreLink =
            /entity-link|connection|picture-link/i.test(attrs) ||
            /class="/i.test(attrs);
        if (!isLoreLink && !path.startsWith("/")) {
            continue;
        }

        const name = stripTags(match[4]);
        if (!name || name.length < 2 || name.length > 100) {
            continue;
        }
        if (/^(open|here|this|source|fandom wiki|wikipedia)\b/i.test(name)) {
            continue;
        }

        const relationship = relationshipFromContext(html, match.index);
        const type = inferTypeFromPath(path, name);
        const prev = byPath.get(path);
        if (prev) {
            if (
                relationship &&
                relationship !== "Connected To" &&
                prev.relationship === "Connected To"
            ) {
                prev.relationship = relationship;
                prev.title = relationship;
            }
            continue;
        }

        byPath.set(path, {
            id: `derived:${path}`,
            entity_id: `derived:${path}`,
            name,
            slug: slugFromPath(path),
            path,
            type,
            relationship,
            title: relationship,
            explanation: `${name} is linked from this page.`,
            discovery_score: /entity-link|connection/i.test(attrs) ? 0.7 : 0.4,
            strength: 1,
            image_url: null
        });
    }

    return [...byPath.values()];
}

const TYPE_GROUP_ORDER = [
    "person",
    "place",
    "organization",
    "object",
    "event",
    "work",
    "topic"
];

const TYPE_GROUP_LABELS = {
    person: "Characters",
    place: "Locations",
    organization: "Organizations",
    object: "Items",
    event: "Events",
    work: "Works",
    topic: "Topics"
};

export function groupConnectionsByType(connections) {
    const groups = new Map();
    for (const connection of connections || []) {
        const type = String(connection.type || connection.kind || "topic").toLowerCase();
        const key = TYPE_GROUP_ORDER.includes(type) ? type : "topic";
        if (!groups.has(key)) {
            groups.set(key, []);
        }
        groups.get(key).push(connection);
    }

    return TYPE_GROUP_ORDER.filter((key) => groups.get(key)?.length).map(
        (key) => ({
            id: key,
            label: TYPE_GROUP_LABELS[key] || "Topics",
            connections: groups.get(key)
        })
    );
}

/** Format hubs under an IP root: movies, books, games, tv, etc. */
const HUB_PATTERNS = [
    { id: "movies", label: "Movies", match: /^(movies|films)(\/|$)/i },
    {
        id: "tv",
        label: "TV & series",
        match: /^(tv|television|anime|series|shows)(\/|$)/i
    },
    { id: "books", label: "Books", match: /^(books|novels|literature)(\/|$)/i },
    { id: "comics", label: "Comics & manga", match: /^(comics|manga)(\/|$)/i },
    {
        id: "games",
        label: "Games",
        match: /^(games|video-games|videogames)(\/|$)/i
    },
    {
        id: "characters",
        label: "Characters",
        match: /^(characters|people|miscellaneous-characters)(\/|$)/i
    },
    {
        id: "locations",
        label: "Locations",
        match: /^(locations|places|worlds)(\/|$)/i
    }
];

export function derivePropertyHubs(pageDoc, connections) {
    const root = normalizePath(
        pageDoc?.subject?.path || pageDoc?.page?.slug || ""
    );
    if (!root || normalizePath(pageDoc?.page?.slug) !== root) {
        return [];
    }

    const franchise = pageDoc.entity?.name || "Franchise";
    const hubsById = new Map();

    const considerPath = (path, name, imageUrl) => {
        const normalized = normalizePath(path);
        if (!normalized.startsWith(`${root}/`)) {
            return;
        }
        const rest = normalized.slice(root.length + 1);
        for (const hub of HUB_PATTERNS) {
            if (!hub.match.test(rest)) {
                continue;
            }
            const hubSlug = rest.split("/")[0];
            const hubPath = `${root}/${hubSlug}`;
            const prev = hubsById.get(hub.id);
            const isExactHub = normalized === hubPath;
            if (!prev) {
                hubsById.set(hub.id, {
                    id: hub.id,
                    label: hub.label,
                    path: hubPath,
                    name: isExactHub && name ? name : `${franchise} ${hub.label}`,
                    relationship: "Property",
                    type: "work",
                    image_url: imageUrl || null,
                    slug: hubSlug
                });
            } else if (isExactHub && name) {
                prev.name = name;
                prev.path = hubPath;
                if (imageUrl) {
                    prev.image_url = imageUrl;
                }
            }
        }
    };

    for (const connection of connections || []) {
        considerPath(
            connection.path || connection.slug,
            connection.name,
            connection.image_url
        );
    }

    return [...hubsById.values()];
}
