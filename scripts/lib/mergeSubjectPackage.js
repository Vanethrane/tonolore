/**
 * Shared helper: merge hand-authored core data with expanded.json
 * produced by scripts/expandSubject.js (Wikipedia/Wikidata + Fandom).
 */

const fs = require("fs");
const path = require("path");

function loadExpanded(subjectDir) {
    const file = path.join(subjectDir, "expanded.json");

    if (!fs.existsSync(file)) {
        return {
            enrichments: [],
            entities: [],
            relationships: [],
            fair_use_policy: null
        };
    }

    return JSON.parse(fs.readFileSync(file, "utf8"));
}

function mergeSubjectPackage({
    subjectDir,
    meta,
    rawEntities,
    rawRelationships,
    aliases = {},
    parents = {}
}) {
    const expanded = loadExpanded(subjectDir);
    const enrichmentBySlug = new Map(
        (expanded.enrichments || []).map((row) => [row.slug, row])
    );

    const coreEntities = rawEntities.map((entity) => {
        const enrichment = enrichmentBySlug.get(entity.slug) || {};

        return {
            ...entity,
            ...enrichment,
            slug: entity.slug,
            name: entity.name,
            type: entity.type,
            aliases: [
                ...(entity.aliases || []),
                ...(aliases[entity.slug] || [])
            ],
            parentSlug:
                entity.parentSlug || parents[entity.slug] || undefined,
            metadata: {
                ...(entity.metadata || {}),
                ...(enrichment.metadata || {})
            }
        };
    });

    const known = new Set(coreEntities.map((entity) => entity.slug));
    const discoveredEntities = [];

    for (const entity of expanded.entities || []) {
        if (known.has(entity.slug)) {
            continue;
        }

        if (!entity.name || String(entity.name).length < 2) {
            continue;
        }

        known.add(entity.slug);
        discoveredEntities.push({
            ...entity,
            parentSlug: entity.parentSlug || meta.rootSlug,
            evidence: entity.evidence || "fiction",
            metadata: {
                canon: false,
                discovered: true,
                ...(entity.metadata || {})
            }
        });
    }

    const entities = [...coreEntities, ...discoveredEntities];
    const entitySlugs = new Set(entities.map((entity) => entity.slug));
    const relationships = [
        ...rawRelationships,
        ...(expanded.relationships || [])
    ].filter(([from, to]) => entitySlugs.has(from) && entitySlugs.has(to));

    return {
        ...meta,
        entities,
        relationships
    };
}

module.exports = {
    loadExpanded,
    mergeSubjectPackage
};
