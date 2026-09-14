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
        .trim()
        .replace(/\s+/g, " ");
}

const SEARCH_STOPWORDS = new Set(["the", "of", "a", "an", "and", "or", "to", "in", "for"]);

function tokensOf(value) {
    return normalize(value).split(" ").filter(Boolean);
}

/** Drop filler words for matching when enough content tokens remain. */
function significantTokens(tokens) {
    const filtered = tokens.filter((token) => !SEARCH_STOPWORDS.has(token));
    return filtered.length ? filtered : tokens;
}

function shardIdForToken(token) {
    const ch = String(token || "").charAt(0);
    if (ch >= "a" && ch <= "z") {
        return ch;
    }
    if (ch >= "0" && ch <= "9") {
        return "0";
    }
    return "_";
}

/** Expand compact shard rows + legacy verbose rows into a common shape. */
function expandEntity(row) {
    if (!row) {
        return null;
    }
    if (row.name) {
        return {
            id: row.id,
            name: row.name,
            type: row.type,
            slug: row.slug,
            path: row.path,
            short_description: row.short_description || "",
            aliases: row.aliases || []
        };
    }
    return {
        id: row.id,
        name: row.n,
        type: row.t || "topic",
        slug: row.s,
        path: row.p,
        short_description: "",
        aliases: row.a || []
    };
}

function fieldHasToken(field, token) {
    if (!field || !token) {
        return false;
    }
    const words = field.split(" ").filter(Boolean);
    // Whole-word or word-prefix only — never mid-word ("rand" ≠ "grand").
    return words.some((word) => word === token || word.startsWith(token));
}

function scoreEntity(entity, needle, tokens) {
    const name = normalize(entity.name);
    const aliases = (entity.aliases || []).map(normalize);
    const slug = normalize(entity.slug).replace(/\s+/g, "-");
    const leafSlug = slug.replace(/-/g, " ");
    // Name + aliases + leaf slug only — do NOT score on full path or every
    // franchise child of "/wheel-of-time/…" matches "wheel of time".
    const primary = [name, ...aliases, leafSlug];
    const required = significantTokens(tokens);

    let score = 0;

    if (
        name === needle ||
        aliases.some((alias) => alias === needle) ||
        name === `the ${needle}`
    ) {
        score = 100;
    } else if (name.startsWith(`${needle} `) || name.startsWith(`the ${needle} `)) {
        score = 92;
    } else if (name.includes(` ${needle} `) || name.endsWith(` ${needle}`)) {
        score = 74;
    } else if (name.startsWith(needle)) {
        // Prefix of a longer name (Randi for "rand") — weaker than exact word/alias
        score = 62;
    } else if (aliases.some((alias) => alias === needle || alias.startsWith(`${needle} `))) {
        score = 88;
    } else if (aliases.some((alias) => fieldHasToken(alias, needle) || alias.includes(` ${needle} `))) {
        score = 70;
    }

    // Exact first-word / alias word boost (Rand → Rand al'Thor via alias "Rand")
    const firstWord = name.split(" ")[0] || "";
    if (required[0] && (firstWord === required[0] || aliases.includes(required[0]))) {
        score = Math.max(score, 86);
    }

    if (required.length > 1) {
        const allMatch = required.every((token) =>
            primary.some((field) => fieldHasToken(field, token))
        );
        if (!allMatch) {
            return 0;
        }
        if (score === 0) {
            score = 55;
        }
        // Prefer names that keep token order (Rand … al …)
        if (
            required.every((token, index, arr) => {
                if (index === 0) {
                    return true;
                }
                const prev = name.indexOf(arr[index - 1]);
                const cur = name.indexOf(token);
                return prev >= 0 && cur > prev;
            })
        ) {
            score += 18;
        }
    } else if (score === 0) {
        const token = required[0];
        if (!token) {
            return 0;
        }
        if (primary.some((field) => fieldHasToken(field, token))) {
            score = firstWord === token || aliases.includes(token) ? 82 : 48;
        } else {
            return 0;
        }
    }

    // Subject boost
    if (entity.type === "subject" && score > 0) {
        score += 10;
    }

    // Shorter exact-ish names rank higher
    if (score > 0) {
        score += Math.max(0, 12 - Math.min(12, name.length / 4));
    }

    return score;
}

let searchMetaPromise = null;
const shardCache = new Map();

async function loadSearchMeta() {
    if (!searchMetaPromise) {
        searchMetaPromise = readJson("/data/search-index.json")
            .then((meta) => meta)
            .catch((error) => {
                searchMetaPromise = null;
                throw error;
            });
    }
    return searchMetaPromise;
}

async function loadShard(shardId) {
    if (shardCache.has(shardId)) {
        return shardCache.get(shardId);
    }
    const promise = readJson(`/data/search/shards/${shardId}.json`)
        .then((payload) => (payload.entities || []).map(expandEntity).filter(Boolean))
        .catch(() => []);
    shardCache.set(shardId, promise);
    return promise;
}

async function loadLegacyOrFullIndex(meta) {
    // Old monolithic index (v1) embeds entities directly.
    if (Array.isArray(meta.entities) && meta.entities.length && !meta.sharded) {
        return meta.entities.map(expandEntity).filter(Boolean);
    }
    // Optional compact full fallback
    try {
        const full = await readJson("/data/search-index-full.json");
        return (full.entities || []).map(expandEntity).filter(Boolean);
    } catch {
        return [];
    }
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

    const needle = normalize(q);
    const tokens = tokensOf(q);
    if (!tokens.length) {
        return [];
    }

    const meta = await loadSearchMeta();
    const pool = [];

    // Always include subjects from meta (small)
    for (const subject of meta.subjects || []) {
        pool.push(expandEntity(subject));
    }

    if (meta.sharded && Array.isArray(meta.shards) && meta.shards.length) {
        const needed = new Set(tokens.map(shardIdForToken));
        // Also load shard for contiguous phrase first char
        needed.add(shardIdForToken(tokens[0]));
        const loaded = await Promise.all([...needed].map((id) => loadShard(id)));
        for (const list of loaded) {
            pool.push(...list);
        }
    } else {
        pool.push(...(await loadLegacyOrFullIndex(meta)));
    }

    // De-dupe by id/path
    const seen = new Set();
    const unique = [];
    for (const entity of pool) {
        const key = entity.id || entity.path || entity.slug;
        if (!key || seen.has(key)) {
            continue;
        }
        seen.add(key);
        unique.push(entity);
    }

    const scored = [];
    for (const entity of unique) {
        const score = scoreEntity(entity, needle, tokens);
        if (score > 0) {
            scored.push({ score, entity });
        }
    }

    scored.sort(
        (a, b) =>
            b.score - a.score ||
            a.entity.name.length - b.entity.name.length ||
            a.entity.name.localeCompare(b.entity.name)
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
