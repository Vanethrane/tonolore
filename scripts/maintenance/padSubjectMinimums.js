/**
 * Ensure every registered subject has ≥15 seed entities (→ ≥15 pages)
 * and at least 5 hub entries under the root.
 *
 *   node scripts/maintenance/padSubjectMinimums.js
 *   node scripts/maintenance/padSubjectMinimums.js --dry-run
 */

const fs = require("fs");
const path = require("path");
const { SUBJECT_IDS, loadSubject } = require("../subjects/registry");

const ROOT = path.join(__dirname, "..", "..");
const SUBJECTS_DIR = path.join(ROOT, "scripts", "subjects");
const MIN_ENTITIES = 40;
const dryRun = process.argv.includes("--dry-run");

const HUB_SPECS = [
    {
        key: "figures",
        type: "topic",
        title: (name) => `${name} figures`,
        short: (name) => `People and named forces central to ${name}.`,
        long: (name) =>
            `A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring ${name}.`
    },
    {
        key: "places",
        type: "place",
        title: (name) => `${name} places`,
        short: (name) => `Locations and geographies that frame ${name}.`,
        long: (name) =>
            `Places, regions, and built sites that give ${name} its map — where events and figures concentrate.`
    },
    {
        key: "events",
        type: "event",
        title: (name) => `${name} events`,
        short: (name) => `Turning points and dated episodes in ${name}.`,
        long: (name) =>
            `Battles, ceremonies, disasters, debuts, and other timed events that structure the ${name} timeline.`
    },
    {
        key: "objects",
        type: "object",
        title: (name) => `${name} objects & artifacts`,
        short: (name) => `Objects, tools, and artifacts tied to ${name}.`,
        long: (name) =>
            `Named objects, relics, instruments, and material culture that readers follow through ${name}.`
    },
    {
        key: "factions",
        type: "organization",
        title: (name) => `${name} factions & groups`,
        short: (name) => `Organizations and collectives inside ${name}.`,
        long: (name) =>
            `Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in ${name}.`
    },
    {
        key: "concepts",
        type: "concept",
        title: (name) => `${name} concepts`,
        short: (name) => `Ideas and doctrines that organize ${name}.`,
        long: (name) =>
            `Keywords, doctrines, systems, and abstract forces that make ${name} readable as a lore graph.`
    },
    {
        key: "eras",
        type: "event",
        title: (name) => `${name} eras`,
        short: (name) => `Periodization for ${name}.`,
        long: (name) =>
            `Named eras and phases that help readers track how ${name} changes across time.`
    },
    {
        key: "works",
        type: "work",
        title: (name) => `${name} works & media`,
        short: (name) => `Texts, shows, and media that carry ${name}.`,
        long: (name) =>
            `Primary works and adaptations through which most audiences encounter ${name}.`
    },
    {
        key: "symbols",
        type: "concept",
        title: (name) => `${name} symbols`,
        short: (name) => `Icons and motifs associated with ${name}.`,
        long: (name) =>
            `Emblems, motifs, and recurring symbols that mark identity inside ${name}.`
    },
    {
        key: "controversies",
        type: "topic",
        title: (name) => `${name} controversies`,
        short: (name) => `Disputes and contested claims in ${name}.`,
        long: (name) =>
            `Debates, rival canons, scandals, and contested facts that keep ${name} argumentative.`
    },
    {
        key: "sources",
        type: "topic",
        title: (name) => `${name} sources`,
        short: (name) => `Primary and secondary trails into ${name}.`,
        long: (name) =>
            `Documents, archives, oral traditions, and reference spines readers use to verify ${name}.`
    },
    {
        key: "geography",
        type: "place",
        title: (name) => `${name} geography`,
        short: (name) => `Broader geographic framing for ${name}.`,
        long: (name) =>
            `Regions, routes, and spatial systems that situate ${name} beyond single named places.`
    },
    {
        key: "legacy",
        type: "topic",
        title: (name) => `${name} legacy`,
        short: (name) => `Afterlives and influence of ${name}.`,
        long: (name) =>
            `How ${name} continues — revivals, adaptations, scholarship, and cultural memory.`
    },
    {
        key: "practices",
        type: "concept",
        title: (name) => `${name} practices`,
        short: (name) => `Rituals, methods, and repeated behaviors in ${name}.`,
        long: (name) =>
            `Customs, techniques, rituals, and operational habits that define participation in ${name}.`
    }
];

function loadDataModule(subjectId) {
    const dataPath = path.join(SUBJECTS_DIR, subjectId, "data.js");
    if (!fs.existsSync(dataPath)) {
        return null;
    }
    // eslint-disable-next-line import/no-dynamic-require, global-require
    delete require.cache[require.resolve(dataPath)];
    return { dataPath, data: require(dataPath) };
}

function serializeData(entities, relationships) {
    return `/**
 * Seed graph (auto-padded to ≥${MIN_ENTITIES} entities for crawl depth).
 */

const entities = ${JSON.stringify(entities, null, 4)};

const relationships = ${JSON.stringify(relationships, null, 4)};

module.exports = { entities, relationships };
`;
}

function ensureRoot(entities, subject) {
    const rootSlug = subject.rootSlug || subject.id;
    const existing = entities.find((entity) => entity.slug === rootSlug);
    if (existing) {
        return existing;
    }
    const root = {
        slug: rootSlug,
        name: subject.name,
        type: "topic",
        short_description: `${subject.name} lore map on Ton-o-Lore.`,
        description: `${subject.name} is mapped on Ton-o-Lore as a subject graph of people, places, events, and ideas for long-tail discovery.`
    };
    entities.unshift(root);
    return root;
}

function padSubject(subjectId) {
    const packed = loadDataModule(subjectId);
    if (!packed) {
        return { id: subjectId, status: "skip-no-data" };
    }

    const subject = loadSubject(subjectId);
    const rootSlug = subject.rootSlug || subjectId;
    const entities = [...(packed.data.entities || [])];
    const relationships = [...(packed.data.relationships || [])];
    const before = entities.length;

    if (before >= MIN_ENTITIES) {
        return { id: subjectId, status: "ok", before, after: before };
    }

    ensureRoot(entities, subject);
    const have = new Set(entities.map((entity) => entity.slug));
    const relKeys = new Set(
        relationships.map((row) => `${row[0]}|${row[1]}|${row[2]}`)
    );

    for (const hub of HUB_SPECS) {
        if (entities.length >= MIN_ENTITIES) {
            break;
        }
        const slug = `${rootSlug}-${hub.key}`;
        if (have.has(slug)) {
            continue;
        }
        entities.push({
            slug,
            name: hub.title(subject.name),
            type: hub.type,
            short_description: hub.short(subject.name),
            description: hub.long(subject.name)
        });
        have.add(slug);
        const key = `${rootSlug}|${slug}|contains`;
        if (!relKeys.has(key)) {
            relationships.push([
                rootSlug,
                slug,
                "contains",
                `${hub.title(subject.name)} is a primary trailhead under ${subject.name}.`,
                0.88,
                0.82
            ]);
            relKeys.add(key);
        }
    }

    let n = 1;
    while (entities.length < MIN_ENTITIES) {
        const slug = `${rootSlug}-entry-${n}`;
        n += 1;
        if (have.has(slug)) {
            continue;
        }
        entities.push({
            slug,
            name: `${subject.name} entry ${n - 1}`,
            type: "topic",
            short_description: `Additional mapped entry inside ${subject.name}.`,
            description: `A supporting encyclopedia entry in the ${subject.name} subject graph, kept so the topic maintains crawlable depth.`
        });
        have.add(slug);
        relationships.push([
            rootSlug,
            slug,
            "contains",
            `Supporting entry under ${subject.name}.`,
            0.75,
            0.7
        ]);
    }

    if (!dryRun) {
        fs.writeFileSync(
            packed.dataPath,
            serializeData(entities, relationships)
        );
    }

    return {
        id: subjectId,
        status: "padded",
        before,
        after: entities.length
    };
}

function main() {
    const results = SUBJECT_IDS.map(padSubject);
    const padded = results.filter((row) => row.status === "padded");
    const ok = results.filter((row) => row.status === "ok");
    console.log(
        `${dryRun ? "[dry-run] " : ""}padded ${padded.length}; already ≥${MIN_ENTITIES}: ${ok.length}; skipped ${results.length - padded.length - ok.length}`
    );
    if (padded.length) {
        console.log(
            "examples:",
            padded
                .slice(0, 12)
                .map((row) => `${row.id} ${row.before}→${row.after}`)
                .join(", ")
        );
    }
}

main();
