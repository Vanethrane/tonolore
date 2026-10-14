/**
 * Build static page JSON from subject packages (no Postgres required).
 *
 *   node scripts/maintenance/generatePagesFromPackages.js
 *   node scripts/maintenance/generatePagesFromPackages.js marvel aew
 *
 * Writes docs/data/pages/<path>.json and refreshes docs/data/subjects.json
 * plus docs/data/seed-catalog.json counts.
 */

const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..", "..");
const {
    SUBJECT_IDS,
    loadSubject,
    listSubjectMeta
} = require("../subjects/registry");
const { inferEntityKind, entityTypeLabel } = require("../lib/entityTypeLabel");
const {
    bestDescription,
    buildMetaTitle,
    buildMetaDescription,
    scoreUniqueness
} = require("../generate/pages/pageSeoContent");

const SITE = "https://www.tonolore.com";
const pagesDir = path.join(root, "docs", "data", "pages");
const filter = process.argv.slice(2).filter((arg) => !arg.startsWith("-"));

function stableId(seed) {
    const hex = crypto.createHash("sha1").update(String(seed)).digest("hex");
    return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function resolveParents(entities, rootSlug) {
    const bySlug = new Map(entities.map((entity) => [entity.slug, entity]));
    return entities.map((entity) => {
        if (entity.slug === rootSlug) {
            return { ...entity, parentSlug: null };
        }
        if (entity.parentSlug && bySlug.has(entity.parentSlug)) {
            return entity;
        }
        return { ...entity, parentSlug: bySlug.has(rootSlug) ? rootSlug : null };
    });
}

function buildPaths(entities, rootSlug) {
    const bySlug = new Map(entities.map((entity) => [entity.slug, entity]));
    const cache = new Map();

    function getPath(slug, visiting = new Set()) {
        if (cache.has(slug)) {
            return cache.get(slug);
        }
        const entity = bySlug.get(slug);
        if (!entity) {
            return `/${slug}`;
        }
        if (visiting.has(slug)) {
            return `/${rootSlug}/${slug}`;
        }
        visiting.add(slug);
        if (!entity.parentSlug || entity.slug === rootSlug) {
            cache.set(slug, `/${entity.slug}`);
            return cache.get(slug);
        }
        const parentPath = getPath(entity.parentSlug, visiting);
        const next = `${parentPath}/${entity.slug}`;
        cache.set(slug, next);
        return next;
    }

    for (const entity of entities) {
        getPath(entity.slug);
    }
    return cache;
}

function connectionsFor(entity, entities, relationships, paths) {
    const bySlug = new Map(entities.map((row) => [row.slug, row]));
    const rows = [];

    for (const rel of relationships) {
        const [from, to, relationship, title, strength = 0.9, discovery = 0.85] =
            rel;
        let otherSlug = null;
        let direction = "outgoing";
        if (from === entity.slug) {
            otherSlug = to;
            direction = "outgoing";
        } else if (to === entity.slug) {
            otherSlug = from;
            direction = "incoming";
        } else {
            continue;
        }
        const other = bySlug.get(otherSlug);
        if (!other) {
            continue;
        }
        const kind = inferEntityKind(other);
        rows.push({
            id: stableId(`${entity.slug}:${relationship}:${other.slug}`),
            relationship,
            title: title || "",
            explanation: title || "",
            strength: Number(strength).toFixed(4),
            discovery_score: Number(discovery).toFixed(4),
            direction,
            from_entity_id: stableId(`${other.metadata?.universe || "x"}:${from}`),
            to_entity_id: stableId(`${other.metadata?.universe || "x"}:${to}`),
            entity_id: stableId(
                `${other.metadata?.universe || entity.metadata?.universe}:${other.slug}`
            ),
            slug: other.slug,
            name: other.name,
            type: other.type,
            short_description: other.short_description || "",
            evidence: other.evidence || "documented",
            image_url: other.image_url || null,
            path: paths.get(other.slug) || `/${other.slug}`,
            kind,
            type_label: entityTypeLabel({ ...other, kind })
        });
    }

    rows.sort(
        (a, b) =>
            Number(b.discovery_score) +
            Number(b.strength) -
            (Number(a.discovery_score) + Number(a.strength))
    );
    return rows.slice(0, 60);
}

function overviewHtml(entity, connections) {
    const lead =
        entity.description ||
        entity.short_description ||
        `${entity.name} in this subject graph.`;
    const first = lead.split(/\n+/)[0].slice(0, 420);
    const links = connections.slice(0, 6);
    const linkLine = links.length
        ? `<p>Key threads lead to ${links
              .map(
                  (row, index) => {
                      const a = `<a href="${row.path}" class="entity-link">${escapeHtml(row.name)}</a>`;
                      if (index === 0) return a;
                      if (index === links.length - 1) return ` and ${a}`;
                      return `, ${a}`;
                  }
              )
              .join("")}.</p>`
        : "";
    return `<section class="overview">
    <h2>What is ${escapeHtml(entity.name)}?</h2>
    <p>${escapeHtml(first)}</p>
    ${linkLine}
</section>`;
}

function contentHtml(entity, connections) {
    const intro = `<section class="intro"><p class="lead">${escapeHtml(
        entity.short_description || entity.name
    )}</p></section>`;
    const items = connections
        .slice(0, 16)
        .map(
            (row) => `<li><strong>${escapeHtml(row.type_label)}:</strong>
        <a href="${row.path}" class="entity-link">${escapeHtml(row.name)}</a>
        — ${escapeHtml(row.title || row.short_description || "")}</li>`
        )
        .join("");
    const narrative = connections.length
        ? `<section class="connection-narrative"><h2>How ${escapeHtml(
              entity.name
          )} connects</h2><ul>${items}</ul></section>`
        : "";
    return `${intro}\n${narrative}`;
}

function writePage(subject, entity, connections, pagePath, meta) {
    const kind = inferEntityKind(entity);
    const universe = subject.id;
    const overview = overviewHtml(entity, connections);
    const content = `${contentHtml(entity, connections)}\n${overview}`;
    const wordCount = content.replace(/<[^>]+>/g, " ").trim().split(/\s+/).length;
    const file = path.join(pagesDir, `${pagePath.replace(/^\/+/, "")}.json`);

    const payload = {
        page: {
            id: stableId(`page:${universe}:${entity.slug}`),
            theme: subject.theme || universe,
            slug: pagePath,
            canonical_url: `${SITE}${pagePath}`,
            title: entity.name,
            meta_title: buildMetaTitle(
                { ...entity, metadata: { universe } },
                meta
            ),
            meta_description: buildMetaDescription(
                { ...entity, metadata: { universe } },
                connections,
                meta
            ),
            content,
            overview,
            word_count: wordCount,
            uniqueness_score: String(
                scoreUniqueness({
                    wordCount,
                    connectionCount: connections.length,
                    description: bestDescription(entity)
                })
            )
        },
        entity: {
            id: stableId(`${universe}:${entity.slug}`),
            name: entity.name,
            slug: entity.slug,
            type: entity.type,
            kind,
            type_label: entityTypeLabel({ ...entity, kind }),
            short_description: entity.short_description || "",
            description: entity.description || "",
            evidence: entity.evidence || "documented",
            universe,
            aliases: entity.aliases || [],
            wikipedia_url: entity.wikipedia_url || null,
            image_url: entity.image_url || null,
            image_source: entity.image_source || null,
            image_credit: entity.image_credit || null,
            image_license: entity.image_license || null,
            image_usage: entity.image_usage || null,
            image_alt: entity.image_alt || null
        },
        connections,
        rabbit_holes: [],
        copyright: subject.copyright || null,
        subject: {
            id: subject.id,
            name: subject.name,
            theme: subject.theme || subject.id,
            path: `/${subject.rootSlug || subject.id}`,
            logo: meta.logo || subject.logo || null,
            categories: meta.categories || subject.categories || []
        }
    };

    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, JSON.stringify(payload));
}

function generateSubject(id) {
    const subject = loadSubject(id);
    const meta = listSubjectMeta().find((row) => row.id === id) || {
        id,
        name: subject.name
    };
    let entities = (subject.entities || []).map((entity) => ({
        ...entity,
        metadata: {
            universe: id,
            theme: subject.theme || id,
            ...(entity.metadata || {})
        }
    }));
    entities = resolveParents(entities, subject.rootSlug);
    const relationships = subject.relationships || [];
    const paths = buildPaths(entities, subject.rootSlug);

    let written = 0;
    for (const entity of entities) {
        if (!entity.slug || !entity.name) {
            continue;
        }
        const pagePath = paths.get(entity.slug);
        if (!pagePath || !pagePath.startsWith("/")) {
            continue;
        }
        const connections = connectionsFor(
            entity,
            entities,
            relationships,
            paths
        );
        writePage(subject, entity, connections, pagePath, meta);
        written += 1;
    }
    return { id, written, total: entities.length };
}

function refreshCatalog(counts) {
    const subjects = listSubjectMeta().map((meta) => ({
        id: meta.id,
        name: meta.name,
        slug: meta.id,
        theme: meta.theme || meta.id,
        entity_count: counts.get(meta.id) || 0,
        path: `/${meta.rootSlug || meta.id}`,
        logo: meta.logo || null,
        categories: meta.categories || [],
        musicGenre: meta.musicGenre || null
    }));

    const categories = [];
    const seen = new Set();
    for (const subject of subjects) {
        for (const categoryId of subject.categories || []) {
            if (seen.has(categoryId)) {
                continue;
            }
            seen.add(categoryId);
            categories.push({ id: categoryId });
        }
    }

    const dataDir = path.join(root, "docs", "data");
    fs.mkdirSync(dataDir, { recursive: true });
    fs.writeFileSync(
        path.join(dataDir, "subjects.json"),
        JSON.stringify({ subjects, categories })
    );
    fs.writeFileSync(
        path.join(dataDir, "seed-catalog.json"),
        JSON.stringify({ subjects, categories })
    );
}

function main() {
    const ids = filter.length ? filter : SUBJECT_IDS;
    const counts = new Map();
    let ok = 0;
    let failed = 0;

    for (const id of ids) {
        try {
            const result = generateSubject(id);
            counts.set(id, result.written);
            ok += 1;
            console.log(`✓ ${id}: ${result.written} pages`);
        } catch (error) {
            failed += 1;
            console.error(`✗ ${id}: ${error.message}`);
        }
    }

    refreshCatalog(counts);
    console.log(`\nDone. ${ok} subjects written, ${failed} failed.`);
}

main();
