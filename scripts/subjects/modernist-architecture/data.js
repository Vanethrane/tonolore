/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "modernist-architecture",
        "name": "Modernist architecture",
        "type": "topic",
        "short_description": "Bauhaus to International Style — glass, steel, and the twentieth-century aesthetic reset.",
        "description": "Bauhaus to International Style — glass, steel, and the twentieth-century aesthetic reset. This Ton-o-Lore subject maps people, places, events, and ideas tied to Modernist architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "modernist-architecture-figures",
        "name": "Modernist architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Modernist architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Modernist architecture."
    },
    {
        "slug": "modernist-architecture-world",
        "name": "Modernist architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Modernist architecture.",
        "description": "Geography, institutions, and periodization that give Modernist architecture its encyclopedia shape."
    },
    {
        "slug": "modernist-architecture-places",
        "name": "Modernist architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Modernist architecture.",
        "description": "Places, regions, and built sites that give Modernist architecture its map — where events and figures concentrate."
    },
    {
        "slug": "modernist-architecture-events",
        "name": "Modernist architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Modernist architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Modernist architecture timeline."
    },
    {
        "slug": "modernist-architecture-objects",
        "name": "Modernist architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Modernist architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Modernist architecture."
    },
    {
        "slug": "modernist-architecture-factions",
        "name": "Modernist architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Modernist architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Modernist architecture."
    },
    {
        "slug": "modernist-architecture-concepts",
        "name": "Modernist architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Modernist architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Modernist architecture readable as a lore graph."
    },
    {
        "slug": "modernist-architecture-eras",
        "name": "Modernist architecture eras",
        "type": "event",
        "short_description": "Periodization for Modernist architecture.",
        "description": "Named eras and phases that help readers track how Modernist architecture changes across time."
    },
    {
        "slug": "modernist-architecture-works",
        "name": "Modernist architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Modernist architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Modernist architecture."
    },
    {
        "slug": "modernist-architecture-symbols",
        "name": "Modernist architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Modernist architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Modernist architecture."
    },
    {
        "slug": "modernist-architecture-controversies",
        "name": "Modernist architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Modernist architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Modernist architecture argumentative."
    },
    {
        "slug": "modernist-architecture-sources",
        "name": "Modernist architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Modernist architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Modernist architecture."
    },
    {
        "slug": "modernist-architecture-geography",
        "name": "Modernist architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Modernist architecture.",
        "description": "Regions, routes, and spatial systems that situate Modernist architecture beyond single named places."
    },
    {
        "slug": "modernist-architecture-legacy",
        "name": "Modernist architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Modernist architecture.",
        "description": "How Modernist architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "modernist-architecture-practices",
        "name": "Modernist architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Modernist architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Modernist architecture."
    },
    {
        "slug": "modernist-architecture-entry-1",
        "name": "Modernist architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-2",
        "name": "Modernist architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-3",
        "name": "Modernist architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-4",
        "name": "Modernist architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-5",
        "name": "Modernist architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-6",
        "name": "Modernist architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-7",
        "name": "Modernist architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-8",
        "name": "Modernist architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-9",
        "name": "Modernist architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-10",
        "name": "Modernist architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-11",
        "name": "Modernist architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-12",
        "name": "Modernist architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-13",
        "name": "Modernist architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-14",
        "name": "Modernist architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-15",
        "name": "Modernist architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-16",
        "name": "Modernist architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-17",
        "name": "Modernist architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-18",
        "name": "Modernist architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-19",
        "name": "Modernist architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-20",
        "name": "Modernist architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-21",
        "name": "Modernist architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-22",
        "name": "Modernist architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-23",
        "name": "Modernist architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "modernist-architecture-entry-24",
        "name": "Modernist architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modernist architecture.",
        "description": "A supporting encyclopedia entry in the Modernist architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "modernist-architecture",
        "modernist-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "modernist-architecture",
        "modernist-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "modernist-architecture",
        "modernist-architecture-places",
        "contains",
        "Modernist architecture places is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-events",
        "contains",
        "Modernist architecture events is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-objects",
        "contains",
        "Modernist architecture objects & artifacts is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-factions",
        "contains",
        "Modernist architecture factions & groups is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-concepts",
        "contains",
        "Modernist architecture concepts is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-eras",
        "contains",
        "Modernist architecture eras is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-works",
        "contains",
        "Modernist architecture works & media is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-symbols",
        "contains",
        "Modernist architecture symbols is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-controversies",
        "contains",
        "Modernist architecture controversies is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-sources",
        "contains",
        "Modernist architecture sources is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-geography",
        "contains",
        "Modernist architecture geography is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-legacy",
        "contains",
        "Modernist architecture legacy is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-practices",
        "contains",
        "Modernist architecture practices is a primary trailhead under Modernist architecture.",
        0.88,
        0.82
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-1",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-2",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-3",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-4",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-5",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-6",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-7",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-8",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-9",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-10",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-11",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-12",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-13",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-14",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-15",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-16",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-17",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-18",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-19",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-20",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-21",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-22",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-23",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ],
    [
        "modernist-architecture",
        "modernist-architecture-entry-24",
        "contains",
        "Supporting entry under Modernist architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
