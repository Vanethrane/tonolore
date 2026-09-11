/**
 * Data access for Ton-o-Lore.
 * Prefer live API when configured; on GitHub Pages (no API host) load
 * static /data snapshots so browse/search/pages work without Express.
 */

const API =
    import.meta.env.VITE_API_URL ||
    (import.meta.env.PROD ? "" : "http://localhost:3001/api");

const PREFER_STATIC = !API;

function pageDataUrl(slug) {
    const clean = String(slug || "")
        .replace(/^\/+|\/+$/g, "")
        .split("/")
        .filter(Boolean)
        .join("/");
    return `/data/pages/${clean}.json`;
}

async function readJson(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
    }
    const text = await response.text();
    try {
        return JSON.parse(text);
    } catch {
        throw new Error("Not JSON");
    }
}

async function tryApi(path) {
    if (!API) {
        return null;
    }
    try {
        return await readJson(`${API}${path}`);
    } catch {
        return null;
    }
}

export async function fetchSubjectsCatalog() {
    if (!PREFER_STATIC) {
        const fromApi = await tryApi("/pages/subjects");
        if (fromApi?.subjects) {
            return fromApi;
        }
    }
    return readJson("/data/subjects.json");
}

export async function fetchPageBySlug(slug) {
    const clean = String(slug || "").replace(/^\/+|\/+$/g, "");
    if (!PREFER_STATIC) {
        const fromApi = await tryApi(`/pages/${clean}`);
        if (fromApi?.page) {
            return fromApi;
        }
    }
    return readJson(pageDataUrl(clean));
}

function normalize(value) {
    return String(value || "")
        .toLowerCase()
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]+/g, " ")
        .trim();
}

let searchIndexPromise = null;

async function loadSearchIndex() {
    if (!searchIndexPromise) {
        searchIndexPromise = readJson("/data/search-index.json").catch(
            (error) => {
                searchIndexPromise = null;
                throw error;
            }
        );
    }
    return searchIndexPromise;
}

export async function searchEntities(term, limit = 8) {
    const q = term.trim();
    if (q.length < 2) {
        return [];
    }

    if (!PREFER_STATIC) {
        const fromApi = await tryApi(
            `/entities?search=${encodeURIComponent(q)}&limit=${limit}`
        );
        if (fromApi?.entities) {
            return fromApi.entities;
        }
    }

    const index = await loadSearchIndex();
    const needle = normalize(q);
    const scored = [];

    for (const entity of index.entities || []) {
        const name = normalize(entity.name);
        const aliases = (entity.aliases || []).map(normalize);
        let score = 0;

        if (name === needle) {
            score = 100;
        } else if (name.startsWith(needle)) {
            score = 80;
        } else if (name.includes(needle)) {
            score = 60;
        } else if (aliases.some((alias) => alias === needle)) {
            score = 90;
        } else if (aliases.some((alias) => alias.includes(needle))) {
            score = 50;
        } else if (
            normalize(entity.slug).includes(needle.replace(/\s+/g, "-"))
        ) {
            score = 40;
        }

        if (score > 0) {
            scored.push({ score, entity });
        }
    }

    scored.sort(
        (a, b) =>
            b.score - a.score || a.entity.name.length - b.entity.name.length
    );

    return scored.slice(0, limit).map(({ entity }) => ({
        id: entity.id,
        name: entity.name,
        type: entity.type,
        slug: entity.slug,
        path: entity.path,
        short_description: entity.short_description,
        aliases: entity.aliases
    }));
}

export { API };
