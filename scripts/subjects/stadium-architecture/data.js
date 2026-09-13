/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stadium-architecture",
        "name": "Stadium architecture",
        "type": "topic",
        "short_description": "Bowls, retractable roofs, and the civic theaters of mass sport.",
        "description": "Bowls, retractable roofs, and the civic theaters of mass sport. This Ton-o-Lore subject maps people, places, events, and ideas tied to Stadium architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "stadium-architecture-figures",
        "name": "Stadium architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Stadium architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Stadium architecture."
    },
    {
        "slug": "stadium-architecture-world",
        "name": "Stadium architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Stadium architecture.",
        "description": "Geography, institutions, and periodization that give Stadium architecture its encyclopedia shape."
    },
    {
        "slug": "stadium-architecture-places",
        "name": "Stadium architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Stadium architecture.",
        "description": "Places, regions, and built sites that give Stadium architecture its map — where events and figures concentrate."
    },
    {
        "slug": "stadium-architecture-events",
        "name": "Stadium architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Stadium architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Stadium architecture timeline."
    },
    {
        "slug": "stadium-architecture-objects",
        "name": "Stadium architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Stadium architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Stadium architecture."
    },
    {
        "slug": "stadium-architecture-factions",
        "name": "Stadium architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Stadium architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Stadium architecture."
    },
    {
        "slug": "stadium-architecture-concepts",
        "name": "Stadium architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Stadium architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Stadium architecture readable as a lore graph."
    },
    {
        "slug": "stadium-architecture-eras",
        "name": "Stadium architecture eras",
        "type": "event",
        "short_description": "Periodization for Stadium architecture.",
        "description": "Named eras and phases that help readers track how Stadium architecture changes across time."
    },
    {
        "slug": "stadium-architecture-works",
        "name": "Stadium architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Stadium architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Stadium architecture."
    },
    {
        "slug": "stadium-architecture-symbols",
        "name": "Stadium architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Stadium architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Stadium architecture."
    },
    {
        "slug": "stadium-architecture-controversies",
        "name": "Stadium architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Stadium architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Stadium architecture argumentative."
    },
    {
        "slug": "stadium-architecture-sources",
        "name": "Stadium architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Stadium architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Stadium architecture."
    },
    {
        "slug": "stadium-architecture-geography",
        "name": "Stadium architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Stadium architecture.",
        "description": "Regions, routes, and spatial systems that situate Stadium architecture beyond single named places."
    },
    {
        "slug": "stadium-architecture-legacy",
        "name": "Stadium architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Stadium architecture.",
        "description": "How Stadium architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stadium-architecture-practices",
        "name": "Stadium architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Stadium architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Stadium architecture."
    },
    {
        "slug": "stadium-architecture-entry-1",
        "name": "Stadium architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-2",
        "name": "Stadium architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-3",
        "name": "Stadium architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-4",
        "name": "Stadium architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-5",
        "name": "Stadium architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-6",
        "name": "Stadium architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-7",
        "name": "Stadium architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-8",
        "name": "Stadium architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-9",
        "name": "Stadium architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-10",
        "name": "Stadium architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-11",
        "name": "Stadium architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-12",
        "name": "Stadium architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-13",
        "name": "Stadium architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-14",
        "name": "Stadium architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-15",
        "name": "Stadium architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-16",
        "name": "Stadium architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-17",
        "name": "Stadium architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-18",
        "name": "Stadium architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-19",
        "name": "Stadium architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-20",
        "name": "Stadium architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-21",
        "name": "Stadium architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-22",
        "name": "Stadium architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-23",
        "name": "Stadium architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stadium-architecture-entry-24",
        "name": "Stadium architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stadium architecture.",
        "description": "A supporting encyclopedia entry in the Stadium architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stadium-architecture",
        "stadium-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stadium-architecture",
        "stadium-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stadium-architecture",
        "stadium-architecture-places",
        "contains",
        "Stadium architecture places is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-events",
        "contains",
        "Stadium architecture events is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-objects",
        "contains",
        "Stadium architecture objects & artifacts is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-factions",
        "contains",
        "Stadium architecture factions & groups is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-concepts",
        "contains",
        "Stadium architecture concepts is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-eras",
        "contains",
        "Stadium architecture eras is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-works",
        "contains",
        "Stadium architecture works & media is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-symbols",
        "contains",
        "Stadium architecture symbols is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-controversies",
        "contains",
        "Stadium architecture controversies is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-sources",
        "contains",
        "Stadium architecture sources is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-geography",
        "contains",
        "Stadium architecture geography is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-legacy",
        "contains",
        "Stadium architecture legacy is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-practices",
        "contains",
        "Stadium architecture practices is a primary trailhead under Stadium architecture.",
        0.88,
        0.82
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-1",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-2",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-3",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-4",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-5",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-6",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-7",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-8",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-9",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-10",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-11",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-12",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-13",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-14",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-15",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-16",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-17",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-18",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-19",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-20",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-21",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-22",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-23",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ],
    [
        "stadium-architecture",
        "stadium-architecture-entry-24",
        "contains",
        "Supporting entry under Stadium architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
