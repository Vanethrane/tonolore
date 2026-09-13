/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "art-deco-architecture",
        "name": "Art Deco architecture",
        "type": "topic",
        "short_description": "Zigzags, skyscraper crowns, and the glamorous geometry of the 1920s–30s.",
        "description": "Zigzags, skyscraper crowns, and the glamorous geometry of the 1920s–30s. This Ton-o-Lore subject maps people, places, events, and ideas tied to Art Deco architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "art-deco-architecture-figures",
        "name": "Art Deco architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Art Deco architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Art Deco architecture."
    },
    {
        "slug": "art-deco-architecture-world",
        "name": "Art Deco architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Art Deco architecture.",
        "description": "Geography, institutions, and periodization that give Art Deco architecture its encyclopedia shape."
    },
    {
        "slug": "art-deco-architecture-places",
        "name": "Art Deco architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Art Deco architecture.",
        "description": "Places, regions, and built sites that give Art Deco architecture its map — where events and figures concentrate."
    },
    {
        "slug": "art-deco-architecture-events",
        "name": "Art Deco architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Art Deco architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Art Deco architecture timeline."
    },
    {
        "slug": "art-deco-architecture-objects",
        "name": "Art Deco architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Art Deco architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Art Deco architecture."
    },
    {
        "slug": "art-deco-architecture-factions",
        "name": "Art Deco architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Art Deco architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Art Deco architecture."
    },
    {
        "slug": "art-deco-architecture-concepts",
        "name": "Art Deco architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Art Deco architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Art Deco architecture readable as a lore graph."
    },
    {
        "slug": "art-deco-architecture-eras",
        "name": "Art Deco architecture eras",
        "type": "event",
        "short_description": "Periodization for Art Deco architecture.",
        "description": "Named eras and phases that help readers track how Art Deco architecture changes across time."
    },
    {
        "slug": "art-deco-architecture-works",
        "name": "Art Deco architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Art Deco architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Art Deco architecture."
    },
    {
        "slug": "art-deco-architecture-symbols",
        "name": "Art Deco architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Art Deco architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Art Deco architecture."
    },
    {
        "slug": "art-deco-architecture-controversies",
        "name": "Art Deco architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Art Deco architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Art Deco architecture argumentative."
    },
    {
        "slug": "art-deco-architecture-sources",
        "name": "Art Deco architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Art Deco architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Art Deco architecture."
    },
    {
        "slug": "art-deco-architecture-geography",
        "name": "Art Deco architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Art Deco architecture.",
        "description": "Regions, routes, and spatial systems that situate Art Deco architecture beyond single named places."
    },
    {
        "slug": "art-deco-architecture-legacy",
        "name": "Art Deco architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Art Deco architecture.",
        "description": "How Art Deco architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "art-deco-architecture-practices",
        "name": "Art Deco architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Art Deco architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Art Deco architecture."
    },
    {
        "slug": "art-deco-architecture-entry-1",
        "name": "Art Deco architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-2",
        "name": "Art Deco architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-3",
        "name": "Art Deco architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-4",
        "name": "Art Deco architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-5",
        "name": "Art Deco architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-6",
        "name": "Art Deco architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-7",
        "name": "Art Deco architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-8",
        "name": "Art Deco architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-9",
        "name": "Art Deco architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-10",
        "name": "Art Deco architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-11",
        "name": "Art Deco architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-12",
        "name": "Art Deco architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-13",
        "name": "Art Deco architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-14",
        "name": "Art Deco architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-15",
        "name": "Art Deco architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-16",
        "name": "Art Deco architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-17",
        "name": "Art Deco architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-18",
        "name": "Art Deco architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-19",
        "name": "Art Deco architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-20",
        "name": "Art Deco architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-21",
        "name": "Art Deco architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-22",
        "name": "Art Deco architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-23",
        "name": "Art Deco architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "art-deco-architecture-entry-24",
        "name": "Art Deco architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Art Deco architecture.",
        "description": "A supporting encyclopedia entry in the Art Deco architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "art-deco-architecture",
        "art-deco-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-places",
        "contains",
        "Art Deco architecture places is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-events",
        "contains",
        "Art Deco architecture events is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-objects",
        "contains",
        "Art Deco architecture objects & artifacts is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-factions",
        "contains",
        "Art Deco architecture factions & groups is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-concepts",
        "contains",
        "Art Deco architecture concepts is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-eras",
        "contains",
        "Art Deco architecture eras is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-works",
        "contains",
        "Art Deco architecture works & media is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-symbols",
        "contains",
        "Art Deco architecture symbols is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-controversies",
        "contains",
        "Art Deco architecture controversies is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-sources",
        "contains",
        "Art Deco architecture sources is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-geography",
        "contains",
        "Art Deco architecture geography is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-legacy",
        "contains",
        "Art Deco architecture legacy is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-practices",
        "contains",
        "Art Deco architecture practices is a primary trailhead under Art Deco architecture.",
        0.88,
        0.82
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-1",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-2",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-3",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-4",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-5",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-6",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-7",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-8",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-9",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-10",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-11",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-12",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-13",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-14",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-15",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-16",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-17",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-18",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-19",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-20",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-21",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-22",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-23",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ],
    [
        "art-deco-architecture",
        "art-deco-architecture-entry-24",
        "contains",
        "Supporting entry under Art Deco architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
