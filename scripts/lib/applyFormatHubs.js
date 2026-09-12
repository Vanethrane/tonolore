/**
 * Inject format/medium hubs into a subject package:
 * hub entities, nested works, contains edges, categoryPaths meta.
 *
 * Hub entity slugs are globally unique (`{root}-{medium}`) while
 * metadata.urlSlug keeps pretty paths (`/{root}/movies/...`).
 */

const {
    getFormatHubConfig,
    categoryPathsForSubject,
    formatHubSummaries
} = require("../subjects/formatHubs");

function normalizeWork(entry) {
    if (typeof entry === "string") {
        return { slug: entry };
    }
    return entry;
}

function hubEntitySlug(root, mediumSlug) {
    if (!mediumSlug) {
        return null;
    }
    if (mediumSlug.endsWith("-hub")) {
        return mediumSlug.startsWith(`${root}-`)
            ? mediumSlug
            : `${root}-${mediumSlug}`;
    }
    return `${root}-${mediumSlug}-hub`;
}

const GENERIC_HUB_SLUGS = new Set([
    "movies",
    "television",
    "video-games",
    "anime",
    "manga",
    "comics",
    "books",
    "card-games",
    "tabletop",
    "live-action"
]);

function relKey(row) {
    return `${row[0]}|${row[1]}|${row[2]}`;
}

function dedupeRelationships(rows) {
    const seen = new Set();
    const out = [];

    for (const row of rows) {
        if (!Array.isArray(row) || row.length < 3) {
            continue;
        }
        const key = relKey(row);
        if (seen.has(key)) {
            continue;
        }
        seen.add(key);
        out.push(row);
    }

    return out;
}

function applyFormatHubs(subject) {
    if (!subject?.id) {
        return subject;
    }

    if (subject.__formatHubsApplied) {
        return subject;
    }

    const config = getFormatHubConfig(subject.id);
    const root = subject.rootSlug || subject.id;

    if (!config?.hubs?.length) {
        subject.categoryPaths =
            subject.categoryPaths ||
            categoryPathsForSubject(subject.id, root);
        subject.formatHubs =
            subject.formatHubs || formatHubSummaries(subject.id, root);
        subject.__formatHubsApplied = true;
        return subject;
    }

    const entities = [...(subject.entities || [])];
    const bySlug = new Map(entities.map((entity) => [entity.slug, entity]));
    const relationships = [...(subject.relationships || [])];
    const hubSummaries = [];

    for (const hub of config.hubs) {
        const entitySlug = hubEntitySlug(root, hub.slug);
        let hubEntity = bySlug.get(entitySlug);

        if (!hubEntity) {
            hubEntity = {
                slug: entitySlug,
                name: hub.name,
                type: "topic",
                evidence: "fiction",
                short_description: hub.short_description,
                description: hub.description,
                aliases: hub.aliases || [],
                parentSlug: root,
                metadata: {
                    kind: "format-hub",
                    category: hub.category,
                    isFormatHub: true,
                    urlSlug: hub.slug,
                    mediumSlug: hub.slug
                }
            };
            entities.push(hubEntity);
            bySlug.set(entitySlug, hubEntity);
        } else {
            hubEntity.parentSlug = root;
            hubEntity.metadata = {
                ...(hubEntity.metadata || {}),
                kind: "format-hub",
                category: hub.category,
                isFormatHub: true,
                urlSlug: hub.slug,
                mediumSlug: hub.slug
            };
            if (!hubEntity.short_description && hub.short_description) {
                hubEntity.short_description = hub.short_description;
            }
            if (!hubEntity.description && hub.description) {
                hubEntity.description = hub.description;
            }
        }

        hubSummaries.push({
            slug: entitySlug,
            urlSlug: hub.slug,
            name: hub.name,
            category: hub.category
        });

        relationships.push([
            root,
            entitySlug,
            "contains",
            `${hub.name} is a medium branch of ${subject.name || root}.`,
            0.99,
            0.96
        ]);

        for (const raw of hub.works || []) {
            const work = normalizeWork(raw);
            if (!work?.slug) {
                continue;
            }

            let workEntity = bySlug.get(work.slug);

            if (!workEntity && work.name) {
                workEntity = {
                    slug: work.slug,
                    name: work.name,
                    type: work.type || "work",
                    evidence: work.evidence || "fiction",
                    short_description: work.short_description || "",
                    description:
                        work.description || work.short_description || "",
                    aliases: work.aliases || [],
                    parentSlug: entitySlug,
                    metadata: {
                        kind: work.kind || "work",
                        formatHub: entitySlug
                    }
                };
                entities.push(workEntity);
                bySlug.set(work.slug, workEntity);
            } else if (workEntity) {
                const parent = workEntity.parentSlug;
                const staleGenericHub =
                    parent && GENERIC_HUB_SLUGS.has(parent);
                if (
                    !parent ||
                    parent === root ||
                    parent === entitySlug ||
                    parent === hub.slug ||
                    staleGenericHub
                ) {
                    workEntity.parentSlug = entitySlug;
                }
                workEntity.metadata = {
                    ...(workEntity.metadata || {}),
                    formatHub: entitySlug
                };
            }

            if (bySlug.has(work.slug) && work.slug !== entitySlug) {
                const label = bySlug.get(work.slug).name || work.slug;
                relationships.push([
                    entitySlug,
                    work.slug,
                    "contains",
                    `${label} belongs under ${hub.name}.`,
                    0.99,
                    0.95
                ]);
            }
        }
    }

    subject.entities = entities;
    subject.relationships = dedupeRelationships(relationships);
    subject.categoryPaths = categoryPathsForSubject(subject.id, root);
    subject.formatHubs = hubSummaries;
    subject.__formatHubsApplied = true;

    return subject;
}

module.exports = {
    applyFormatHubs,
    categoryPathsForSubject,
    formatHubSummaries,
    hubEntitySlug
};
