/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "castles-architecture",
        "name": "Castle architecture",
        "type": "topic",
        "short_description": "Keeps, curtain walls, and the fortified homes of medieval power.",
        "description": "Keeps, curtain walls, and the fortified homes of medieval power. This Ton-o-Lore subject maps people, places, events, and ideas tied to Castle architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "castles-architecture-figures",
        "name": "Castle architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Castle architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Castle architecture."
    },
    {
        "slug": "castles-architecture-world",
        "name": "Castle architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Castle architecture.",
        "description": "Geography, institutions, and periodization that give Castle architecture its encyclopedia shape."
    },
    {
        "slug": "castles-architecture-places",
        "name": "Castle architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Castle architecture.",
        "description": "Places, regions, and built sites that give Castle architecture its map — where events and figures concentrate."
    },
    {
        "slug": "castles-architecture-events",
        "name": "Castle architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Castle architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Castle architecture timeline."
    },
    {
        "slug": "castles-architecture-objects",
        "name": "Castle architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Castle architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Castle architecture."
    },
    {
        "slug": "castles-architecture-factions",
        "name": "Castle architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Castle architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Castle architecture."
    },
    {
        "slug": "castles-architecture-concepts",
        "name": "Castle architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Castle architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Castle architecture readable as a lore graph."
    },
    {
        "slug": "castles-architecture-eras",
        "name": "Castle architecture eras",
        "type": "event",
        "short_description": "Periodization for Castle architecture.",
        "description": "Named eras and phases that help readers track how Castle architecture changes across time."
    },
    {
        "slug": "castles-architecture-works",
        "name": "Castle architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Castle architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Castle architecture."
    },
    {
        "slug": "castles-architecture-symbols",
        "name": "Castle architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Castle architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Castle architecture."
    },
    {
        "slug": "castles-architecture-controversies",
        "name": "Castle architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Castle architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Castle architecture argumentative."
    },
    {
        "slug": "castles-architecture-sources",
        "name": "Castle architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Castle architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Castle architecture."
    },
    {
        "slug": "castles-architecture-geography",
        "name": "Castle architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Castle architecture.",
        "description": "Regions, routes, and spatial systems that situate Castle architecture beyond single named places."
    },
    {
        "slug": "castles-architecture-legacy",
        "name": "Castle architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Castle architecture.",
        "description": "How Castle architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "castles-architecture-practices",
        "name": "Castle architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Castle architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Castle architecture."
    },
    {
        "slug": "castles-architecture-entry-1",
        "name": "Castle architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-2",
        "name": "Castle architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-3",
        "name": "Castle architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-4",
        "name": "Castle architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-5",
        "name": "Castle architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-6",
        "name": "Castle architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-7",
        "name": "Castle architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-8",
        "name": "Castle architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-9",
        "name": "Castle architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-10",
        "name": "Castle architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-11",
        "name": "Castle architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-12",
        "name": "Castle architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-13",
        "name": "Castle architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-14",
        "name": "Castle architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-15",
        "name": "Castle architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-16",
        "name": "Castle architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-17",
        "name": "Castle architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-18",
        "name": "Castle architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-19",
        "name": "Castle architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-20",
        "name": "Castle architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-21",
        "name": "Castle architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-22",
        "name": "Castle architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-23",
        "name": "Castle architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "castles-architecture-entry-24",
        "name": "Castle architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Castle architecture.",
        "description": "A supporting encyclopedia entry in the Castle architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "castles-architecture",
        "castles-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "castles-architecture",
        "castles-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "castles-architecture",
        "castles-architecture-places",
        "contains",
        "Castle architecture places is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-events",
        "contains",
        "Castle architecture events is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-objects",
        "contains",
        "Castle architecture objects & artifacts is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-factions",
        "contains",
        "Castle architecture factions & groups is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-concepts",
        "contains",
        "Castle architecture concepts is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-eras",
        "contains",
        "Castle architecture eras is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-works",
        "contains",
        "Castle architecture works & media is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-symbols",
        "contains",
        "Castle architecture symbols is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-controversies",
        "contains",
        "Castle architecture controversies is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-sources",
        "contains",
        "Castle architecture sources is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-geography",
        "contains",
        "Castle architecture geography is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-legacy",
        "contains",
        "Castle architecture legacy is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-practices",
        "contains",
        "Castle architecture practices is a primary trailhead under Castle architecture.",
        0.88,
        0.82
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-1",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-2",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-3",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-4",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-5",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-6",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-7",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-8",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-9",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-10",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-11",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-12",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-13",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-14",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-15",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-16",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-17",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-18",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-19",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-20",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-21",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-22",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-23",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ],
    [
        "castles-architecture",
        "castles-architecture-entry-24",
        "contains",
        "Supporting entry under Castle architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
