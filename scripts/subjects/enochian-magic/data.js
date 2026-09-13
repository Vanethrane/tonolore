/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "enochian-magic",
        "name": "Enochian magic",
        "type": "topic",
        "short_description": "Dee and Kelley’s angelic language, tables, and the Elizabethan system still used in ceremonial magic.",
        "description": "Dee and Kelley’s angelic language, tables, and the Elizabethan system still used in ceremonial magic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Enochian magic so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "enochian-magic-figures",
        "name": "Enochian magic figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Enochian magic.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Enochian magic."
    },
    {
        "slug": "enochian-magic-world",
        "name": "Enochian magic world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Enochian magic.",
        "description": "Geography, institutions, and periodization that give Enochian magic its encyclopedia shape."
    },
    {
        "slug": "enochian-magic-places",
        "name": "Enochian magic places",
        "type": "place",
        "short_description": "Locations and geographies that frame Enochian magic.",
        "description": "Places, regions, and built sites that give Enochian magic its map — where events and figures concentrate."
    },
    {
        "slug": "enochian-magic-events",
        "name": "Enochian magic events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Enochian magic.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Enochian magic timeline."
    },
    {
        "slug": "enochian-magic-objects",
        "name": "Enochian magic objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Enochian magic.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Enochian magic."
    },
    {
        "slug": "enochian-magic-factions",
        "name": "Enochian magic factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Enochian magic.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Enochian magic."
    },
    {
        "slug": "enochian-magic-concepts",
        "name": "Enochian magic concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Enochian magic.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Enochian magic readable as a lore graph."
    },
    {
        "slug": "enochian-magic-eras",
        "name": "Enochian magic eras",
        "type": "event",
        "short_description": "Periodization for Enochian magic.",
        "description": "Named eras and phases that help readers track how Enochian magic changes across time."
    },
    {
        "slug": "enochian-magic-works",
        "name": "Enochian magic works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Enochian magic.",
        "description": "Primary works and adaptations through which most audiences encounter Enochian magic."
    },
    {
        "slug": "enochian-magic-symbols",
        "name": "Enochian magic symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Enochian magic.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Enochian magic."
    },
    {
        "slug": "enochian-magic-controversies",
        "name": "Enochian magic controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Enochian magic.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Enochian magic argumentative."
    },
    {
        "slug": "enochian-magic-sources",
        "name": "Enochian magic sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Enochian magic.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Enochian magic."
    },
    {
        "slug": "enochian-magic-geography",
        "name": "Enochian magic geography",
        "type": "place",
        "short_description": "Broader geographic framing for Enochian magic.",
        "description": "Regions, routes, and spatial systems that situate Enochian magic beyond single named places."
    },
    {
        "slug": "enochian-magic-legacy",
        "name": "Enochian magic legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Enochian magic.",
        "description": "How Enochian magic continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "enochian-magic-practices",
        "name": "Enochian magic practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Enochian magic.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Enochian magic."
    },
    {
        "slug": "enochian-magic-entry-1",
        "name": "Enochian magic entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-2",
        "name": "Enochian magic entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-3",
        "name": "Enochian magic entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-4",
        "name": "Enochian magic entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-5",
        "name": "Enochian magic entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-6",
        "name": "Enochian magic entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-7",
        "name": "Enochian magic entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-8",
        "name": "Enochian magic entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-9",
        "name": "Enochian magic entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-10",
        "name": "Enochian magic entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-11",
        "name": "Enochian magic entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-12",
        "name": "Enochian magic entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-13",
        "name": "Enochian magic entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-14",
        "name": "Enochian magic entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-15",
        "name": "Enochian magic entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-16",
        "name": "Enochian magic entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-17",
        "name": "Enochian magic entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-18",
        "name": "Enochian magic entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-19",
        "name": "Enochian magic entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-20",
        "name": "Enochian magic entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-21",
        "name": "Enochian magic entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-22",
        "name": "Enochian magic entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-23",
        "name": "Enochian magic entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "enochian-magic-entry-24",
        "name": "Enochian magic entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Enochian magic.",
        "description": "A supporting encyclopedia entry in the Enochian magic subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "enochian-magic",
        "enochian-magic-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "enochian-magic",
        "enochian-magic-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "enochian-magic",
        "enochian-magic-places",
        "contains",
        "Enochian magic places is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-events",
        "contains",
        "Enochian magic events is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-objects",
        "contains",
        "Enochian magic objects & artifacts is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-factions",
        "contains",
        "Enochian magic factions & groups is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-concepts",
        "contains",
        "Enochian magic concepts is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-eras",
        "contains",
        "Enochian magic eras is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-works",
        "contains",
        "Enochian magic works & media is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-symbols",
        "contains",
        "Enochian magic symbols is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-controversies",
        "contains",
        "Enochian magic controversies is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-sources",
        "contains",
        "Enochian magic sources is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-geography",
        "contains",
        "Enochian magic geography is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-legacy",
        "contains",
        "Enochian magic legacy is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-practices",
        "contains",
        "Enochian magic practices is a primary trailhead under Enochian magic.",
        0.88,
        0.82
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-1",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-2",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-3",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-4",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-5",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-6",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-7",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-8",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-9",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-10",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-11",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-12",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-13",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-14",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-15",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-16",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-17",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-18",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-19",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-20",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-21",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-22",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-23",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ],
    [
        "enochian-magic",
        "enochian-magic-entry-24",
        "contains",
        "Supporting entry under Enochian magic.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
