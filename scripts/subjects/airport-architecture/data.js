/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "airport-architecture",
        "name": "Airport architecture",
        "type": "topic",
        "short_description": "Terminals, wayfinding, and the gateways designed for jet-age crowds.",
        "description": "Terminals, wayfinding, and the gateways designed for jet-age crowds. This Ton-o-Lore subject maps people, places, events, and ideas tied to Airport architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "airport-architecture-figures",
        "name": "Airport architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Airport architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Airport architecture."
    },
    {
        "slug": "airport-architecture-world",
        "name": "Airport architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Airport architecture.",
        "description": "Geography, institutions, and periodization that give Airport architecture its encyclopedia shape."
    },
    {
        "slug": "airport-architecture-places",
        "name": "Airport architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Airport architecture.",
        "description": "Places, regions, and built sites that give Airport architecture its map — where events and figures concentrate."
    },
    {
        "slug": "airport-architecture-events",
        "name": "Airport architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Airport architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Airport architecture timeline."
    },
    {
        "slug": "airport-architecture-objects",
        "name": "Airport architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Airport architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Airport architecture."
    },
    {
        "slug": "airport-architecture-factions",
        "name": "Airport architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Airport architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Airport architecture."
    },
    {
        "slug": "airport-architecture-concepts",
        "name": "Airport architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Airport architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Airport architecture readable as a lore graph."
    },
    {
        "slug": "airport-architecture-eras",
        "name": "Airport architecture eras",
        "type": "event",
        "short_description": "Periodization for Airport architecture.",
        "description": "Named eras and phases that help readers track how Airport architecture changes across time."
    },
    {
        "slug": "airport-architecture-works",
        "name": "Airport architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Airport architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Airport architecture."
    },
    {
        "slug": "airport-architecture-symbols",
        "name": "Airport architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Airport architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Airport architecture."
    },
    {
        "slug": "airport-architecture-controversies",
        "name": "Airport architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Airport architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Airport architecture argumentative."
    },
    {
        "slug": "airport-architecture-sources",
        "name": "Airport architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Airport architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Airport architecture."
    },
    {
        "slug": "airport-architecture-geography",
        "name": "Airport architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Airport architecture.",
        "description": "Regions, routes, and spatial systems that situate Airport architecture beyond single named places."
    },
    {
        "slug": "airport-architecture-legacy",
        "name": "Airport architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Airport architecture.",
        "description": "How Airport architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "airport-architecture-practices",
        "name": "Airport architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Airport architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Airport architecture."
    },
    {
        "slug": "airport-architecture-entry-1",
        "name": "Airport architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-2",
        "name": "Airport architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-3",
        "name": "Airport architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-4",
        "name": "Airport architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-5",
        "name": "Airport architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-6",
        "name": "Airport architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-7",
        "name": "Airport architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-8",
        "name": "Airport architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-9",
        "name": "Airport architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-10",
        "name": "Airport architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-11",
        "name": "Airport architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-12",
        "name": "Airport architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-13",
        "name": "Airport architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-14",
        "name": "Airport architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-15",
        "name": "Airport architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-16",
        "name": "Airport architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-17",
        "name": "Airport architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-18",
        "name": "Airport architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-19",
        "name": "Airport architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-20",
        "name": "Airport architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-21",
        "name": "Airport architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-22",
        "name": "Airport architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-23",
        "name": "Airport architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "airport-architecture-entry-24",
        "name": "Airport architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Airport architecture.",
        "description": "A supporting encyclopedia entry in the Airport architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "airport-architecture",
        "airport-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "airport-architecture",
        "airport-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "airport-architecture",
        "airport-architecture-places",
        "contains",
        "Airport architecture places is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-events",
        "contains",
        "Airport architecture events is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-objects",
        "contains",
        "Airport architecture objects & artifacts is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-factions",
        "contains",
        "Airport architecture factions & groups is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-concepts",
        "contains",
        "Airport architecture concepts is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-eras",
        "contains",
        "Airport architecture eras is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-works",
        "contains",
        "Airport architecture works & media is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-symbols",
        "contains",
        "Airport architecture symbols is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-controversies",
        "contains",
        "Airport architecture controversies is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-sources",
        "contains",
        "Airport architecture sources is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-geography",
        "contains",
        "Airport architecture geography is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-legacy",
        "contains",
        "Airport architecture legacy is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-practices",
        "contains",
        "Airport architecture practices is a primary trailhead under Airport architecture.",
        0.88,
        0.82
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-1",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-2",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-3",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-4",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-5",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-6",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-7",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-8",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-9",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-10",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-11",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-12",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-13",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-14",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-15",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-16",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-17",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-18",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-19",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-20",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-21",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-22",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-23",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ],
    [
        "airport-architecture",
        "airport-architecture-entry-24",
        "contains",
        "Supporting entry under Airport architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
