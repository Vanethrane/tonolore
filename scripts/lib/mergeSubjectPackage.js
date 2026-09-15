/**
 * Shared helper: merge hand-authored core data with expanded.json
 * produced by scripts/expandSubject.js (Wikipedia/Wikidata + Fandom).
 */

const fs = require("fs");
const path = require("path");
const { hasBrokenWikiProse } = require("./wikiPlainText");

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

function isIncompleteDescription(value) {
    const text = String(value || "").trim();
    if (!text) {
        return true;
    }
    // Fandom scrapes sometimes keep section headers with empty bodies.
    if (
        hasBrokenWikiProse(text) ||
        /(as follows:|differences from the manga:)\s*$/i.test(text) ||
        /written by\s*,/i.test(text) ||
        /directed by\s*,/i.test(text) ||
        /also referred to as\s*,/i.test(text) ||
        /\bin\s+\./i.test(text) ||
        /\{\||\{\{|\[\[/i.test(text) ||
        /\b(may (also )?refer to|most commonly refers to|disambiguation)\b/i.test(
            text
        ) ||
        /^Wikipedia has an article on /i.test(text)
    ) {
        return true;
    }
    // Multiple empty "differences…" prompts stacked with nothing after the last.
    const prompts = text.match(
        /differences from the manga:|differing from the manga as follows:/gi
    );
    if (prompts && prompts.length >= 2) {
        const tail = text.slice(
            Math.max(
                text.lastIndexOf("differences from the manga:"),
                text.lastIndexOf("differing from the manga as follows:")
            )
        );
        if (/:\s*$/.test(tail.trim())) {
            return true;
        }
    }
    return false;
}

function pickDescription(core, enrichment) {
    const enriched = enrichment?.description;
    const hand = core?.description;
    if (enriched && !isIncompleteDescription(enriched)) {
        return enriched;
    }
    if (hand && !isIncompleteDescription(hand)) {
        return hand;
    }
    return enriched || hand || "";
}

function pickShortDescription(core, enrichment, description) {
    const enriched = enrichment?.short_description;
    const hand = core?.short_description;
    if (enriched && !isIncompleteDescription(enriched)) {
        return enriched;
    }
    if (hand && !isIncompleteDescription(hand)) {
        return hand;
    }
    if (description) {
        return description.length > 160
            ? `${description.slice(0, 157)}…`
            : description;
    }
    return enriched || hand || "";
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
        const description = pickDescription(entity, enrichment);
        const short_description = pickShortDescription(
            entity,
            enrichment,
            description
        );

        return {
            ...entity,
            ...enrichment,
            slug: entity.slug,
            name: entity.name,
            type: entity.type,
            description,
            short_description,
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
