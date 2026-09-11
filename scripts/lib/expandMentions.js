/**
 * Expand a subject graph by scanning entity text for mentions of other
 * known entities. Only creates edges among entities already in the seed —
 * never invents new entities, never duplicates existing links.
 *
 * Mentions become `connected_to` only when no relationship already exists
 * in either direction between the pair.
 */

function escapeRegex(value) {
    return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function pairKey(a, b) {
    return a < b ? `${a}::${b}` : `${b}::${a}`;
}

function buildNameIndex(entities) {
    const entries = [];

    for (const entity of entities) {
        const names = new Set([
            entity.name,
            ...(entity.aliases || [])
        ]);

        for (const name of names) {
            const trimmed = String(name || "").trim();

            // Skip tiny tokens ("D.", "All") that create false positives.
            if (trimmed.length < 4) {
                continue;
            }

            entries.push({
                slug: entity.slug,
                name: trimmed
            });
        }
    }

    // Longest names first so "Straw Hat Pirates" wins over "Straw Hat".
    return entries.sort((a, b) => b.name.length - a.name.length);
}

/**
 * @param {Array<object>} entities
 * @param {Array<[string,string,string,string,number?,number?]>} relationships
 * @returns {{ relationships: typeof relationships, added: number, skippedPairs: number }}
 */
function expandMentions(entities, relationships = [], options = {}) {
    const bySlug = new Map(entities.map((entity) => [entity.slug, entity]));
    const nameIndex = buildNameIndex(entities);
    const linked = new Set();
    const onlyFrom = options.onlyFromSlugs
        ? new Set(options.onlyFromSlugs)
        : null;

    for (const rel of relationships) {
        const [from, to] = rel;
        if (from && to) {
            linked.add(pairKey(from, to));
        }
    }

    const expanded = relationships.slice();
    let added = 0;
    let skippedPairs = 0;
    const sources = onlyFrom
        ? entities.filter((entity) => onlyFrom.has(entity.slug))
        : entities;

    for (const entity of sources) {
        const haystack = [
            entity.short_description || "",
            entity.description || "",
            ...(entity.mentions || [])
        ].join("\n");

        if (!haystack.trim() || haystack.length < 40) {
            continue;
        }

        const found = new Set();

        for (const { slug, name } of nameIndex) {
            if (slug === entity.slug || found.has(slug)) {
                continue;
            }

            if (!bySlug.has(slug)) {
                continue;
            }

            const pattern = new RegExp(
                `(^|[^A-Za-z0-9])${escapeRegex(name)}(?=[^A-Za-z0-9]|$)`,
                "i"
            );

            if (!pattern.test(haystack)) {
                continue;
            }

            found.add(slug);

            const key = pairKey(entity.slug, slug);

            if (linked.has(key)) {
                skippedPairs += 1;
                continue;
            }

            linked.add(key);

            const other = bySlug.get(slug);

            expanded.push([
                entity.slug,
                slug,
                "connected_to",
                `${entity.name} is connected to ${other.name} through shared lore.`,
                0.72,
                0.78
            ]);

            added += 1;
        }
    }

    return {
        relationships: expanded,
        added,
        skippedPairs
    };
}

/**
 * Deduplicate entities by slug. Later definitions win (richer overrides).
 */
function dedupeEntities(entities) {
    const bySlug = new Map();

    for (const entity of entities) {
        bySlug.set(entity.slug, entity);
    }

    return [...bySlug.values()];
}

/**
 * Deduplicate relationships by (from, to, type). First wins so explicit
 * typed edges are preferred over later mention-derived connected_to.
 */
function dedupeRelationships(relationships) {
    const seen = new Set();
    const unique = [];

    for (const rel of relationships) {
        const [from, to, type] = rel;
        const key = `${from}|${to}|${type}`;

        if (seen.has(key)) {
            continue;
        }

        seen.add(key);
        unique.push(rel);
    }

    return unique;
}

module.exports = {
    expandMentions,
    dedupeEntities,
    dedupeRelationships,
    pairKey
};
