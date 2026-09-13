/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "train-station-architecture",
        "name": "Train station architecture",
        "type": "topic",
        "short_description": "Great halls, clocks, and the cathedral-like portals of rail travel.",
        "description": "Great halls, clocks, and the cathedral-like portals of rail travel. This Ton-o-Lore subject maps people, places, events, and ideas tied to Train station architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "train-station-architecture-figures",
        "name": "Train station architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Train station architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Train station architecture."
    },
    {
        "slug": "train-station-architecture-world",
        "name": "Train station architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Train station architecture.",
        "description": "Geography, institutions, and periodization that give Train station architecture its encyclopedia shape."
    },
    {
        "slug": "train-station-architecture-places",
        "name": "Train station architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Train station architecture.",
        "description": "Places, regions, and built sites that give Train station architecture its map — where events and figures concentrate."
    },
    {
        "slug": "train-station-architecture-events",
        "name": "Train station architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Train station architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Train station architecture timeline."
    },
    {
        "slug": "train-station-architecture-objects",
        "name": "Train station architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Train station architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Train station architecture."
    },
    {
        "slug": "train-station-architecture-factions",
        "name": "Train station architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Train station architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Train station architecture."
    },
    {
        "slug": "train-station-architecture-concepts",
        "name": "Train station architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Train station architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Train station architecture readable as a lore graph."
    },
    {
        "slug": "train-station-architecture-eras",
        "name": "Train station architecture eras",
        "type": "event",
        "short_description": "Periodization for Train station architecture.",
        "description": "Named eras and phases that help readers track how Train station architecture changes across time."
    },
    {
        "slug": "train-station-architecture-works",
        "name": "Train station architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Train station architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Train station architecture."
    },
    {
        "slug": "train-station-architecture-symbols",
        "name": "Train station architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Train station architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Train station architecture."
    },
    {
        "slug": "train-station-architecture-controversies",
        "name": "Train station architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Train station architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Train station architecture argumentative."
    },
    {
        "slug": "train-station-architecture-sources",
        "name": "Train station architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Train station architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Train station architecture."
    },
    {
        "slug": "train-station-architecture-geography",
        "name": "Train station architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Train station architecture.",
        "description": "Regions, routes, and spatial systems that situate Train station architecture beyond single named places."
    },
    {
        "slug": "train-station-architecture-legacy",
        "name": "Train station architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Train station architecture.",
        "description": "How Train station architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "train-station-architecture-practices",
        "name": "Train station architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Train station architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Train station architecture."
    },
    {
        "slug": "train-station-architecture-entry-1",
        "name": "Train station architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-2",
        "name": "Train station architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-3",
        "name": "Train station architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-4",
        "name": "Train station architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-5",
        "name": "Train station architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-6",
        "name": "Train station architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-7",
        "name": "Train station architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-8",
        "name": "Train station architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-9",
        "name": "Train station architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-10",
        "name": "Train station architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-11",
        "name": "Train station architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-12",
        "name": "Train station architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-13",
        "name": "Train station architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-14",
        "name": "Train station architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-15",
        "name": "Train station architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-16",
        "name": "Train station architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-17",
        "name": "Train station architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-18",
        "name": "Train station architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-19",
        "name": "Train station architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-20",
        "name": "Train station architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-21",
        "name": "Train station architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-22",
        "name": "Train station architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-23",
        "name": "Train station architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "train-station-architecture-entry-24",
        "name": "Train station architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Train station architecture.",
        "description": "A supporting encyclopedia entry in the Train station architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "train-station-architecture",
        "train-station-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "train-station-architecture",
        "train-station-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "train-station-architecture",
        "train-station-architecture-places",
        "contains",
        "Train station architecture places is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-events",
        "contains",
        "Train station architecture events is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-objects",
        "contains",
        "Train station architecture objects & artifacts is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-factions",
        "contains",
        "Train station architecture factions & groups is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-concepts",
        "contains",
        "Train station architecture concepts is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-eras",
        "contains",
        "Train station architecture eras is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-works",
        "contains",
        "Train station architecture works & media is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-symbols",
        "contains",
        "Train station architecture symbols is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-controversies",
        "contains",
        "Train station architecture controversies is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-sources",
        "contains",
        "Train station architecture sources is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-geography",
        "contains",
        "Train station architecture geography is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-legacy",
        "contains",
        "Train station architecture legacy is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-practices",
        "contains",
        "Train station architecture practices is a primary trailhead under Train station architecture.",
        0.88,
        0.82
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-1",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-2",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-3",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-4",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-5",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-6",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-7",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-8",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-9",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-10",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-11",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-12",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-13",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-14",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-15",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-16",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-17",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-18",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-19",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-20",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-21",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-22",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-23",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ],
    [
        "train-station-architecture",
        "train-station-architecture-entry-24",
        "contains",
        "Supporting entry under Train station architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
