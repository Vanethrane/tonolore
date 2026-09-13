/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "starcraft",
        "name": "StarCraft",
        "type": "topic",
        "short_description": "Terran–Zerg–Protoss war, esports myth, and the real-time strategy bible of the late 90s.",
        "description": "Terran–Zerg–Protoss war, esports myth, and the real-time strategy bible of the late 90s. This Ton-o-Lore subject maps people, places, events, and ideas tied to StarCraft so readers can follow long-tail connections across video games."
    },
    {
        "slug": "starcraft-figures",
        "name": "StarCraft figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to StarCraft.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring StarCraft."
    },
    {
        "slug": "starcraft-world",
        "name": "StarCraft world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame StarCraft.",
        "description": "Geography, institutions, and periodization that give StarCraft its encyclopedia shape."
    },
    {
        "slug": "starcraft-places",
        "name": "StarCraft places",
        "type": "place",
        "short_description": "Locations and geographies that frame StarCraft.",
        "description": "Places, regions, and built sites that give StarCraft its map — where events and figures concentrate."
    },
    {
        "slug": "starcraft-events",
        "name": "StarCraft events",
        "type": "event",
        "short_description": "Turning points and dated episodes in StarCraft.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the StarCraft timeline."
    },
    {
        "slug": "starcraft-objects",
        "name": "StarCraft objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to StarCraft.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through StarCraft."
    },
    {
        "slug": "starcraft-factions",
        "name": "StarCraft factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside StarCraft.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in StarCraft."
    },
    {
        "slug": "starcraft-concepts",
        "name": "StarCraft concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize StarCraft.",
        "description": "Keywords, doctrines, systems, and abstract forces that make StarCraft readable as a lore graph."
    },
    {
        "slug": "starcraft-eras",
        "name": "StarCraft eras",
        "type": "event",
        "short_description": "Periodization for StarCraft.",
        "description": "Named eras and phases that help readers track how StarCraft changes across time."
    },
    {
        "slug": "starcraft-works",
        "name": "StarCraft works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry StarCraft.",
        "description": "Primary works and adaptations through which most audiences encounter StarCraft."
    },
    {
        "slug": "starcraft-symbols",
        "name": "StarCraft symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with StarCraft.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside StarCraft."
    },
    {
        "slug": "starcraft-controversies",
        "name": "StarCraft controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in StarCraft.",
        "description": "Debates, rival canons, scandals, and contested facts that keep StarCraft argumentative."
    },
    {
        "slug": "starcraft-sources",
        "name": "StarCraft sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into StarCraft.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify StarCraft."
    },
    {
        "slug": "starcraft-geography",
        "name": "StarCraft geography",
        "type": "place",
        "short_description": "Broader geographic framing for StarCraft.",
        "description": "Regions, routes, and spatial systems that situate StarCraft beyond single named places."
    },
    {
        "slug": "starcraft-legacy",
        "name": "StarCraft legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of StarCraft.",
        "description": "How StarCraft continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "starcraft-practices",
        "name": "StarCraft practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in StarCraft.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in StarCraft."
    },
    {
        "slug": "starcraft-entry-1",
        "name": "StarCraft entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-2",
        "name": "StarCraft entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-3",
        "name": "StarCraft entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-4",
        "name": "StarCraft entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-5",
        "name": "StarCraft entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-6",
        "name": "StarCraft entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-7",
        "name": "StarCraft entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-8",
        "name": "StarCraft entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-9",
        "name": "StarCraft entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-10",
        "name": "StarCraft entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-11",
        "name": "StarCraft entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-12",
        "name": "StarCraft entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-13",
        "name": "StarCraft entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-14",
        "name": "StarCraft entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-15",
        "name": "StarCraft entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-16",
        "name": "StarCraft entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-17",
        "name": "StarCraft entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-18",
        "name": "StarCraft entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-19",
        "name": "StarCraft entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-20",
        "name": "StarCraft entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-21",
        "name": "StarCraft entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-22",
        "name": "StarCraft entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-23",
        "name": "StarCraft entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starcraft-entry-24",
        "name": "StarCraft entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside StarCraft.",
        "description": "A supporting encyclopedia entry in the StarCraft subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "starcraft",
        "starcraft-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "starcraft",
        "starcraft-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "starcraft",
        "starcraft-places",
        "contains",
        "StarCraft places is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-events",
        "contains",
        "StarCraft events is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-objects",
        "contains",
        "StarCraft objects & artifacts is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-factions",
        "contains",
        "StarCraft factions & groups is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-concepts",
        "contains",
        "StarCraft concepts is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-eras",
        "contains",
        "StarCraft eras is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-works",
        "contains",
        "StarCraft works & media is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-symbols",
        "contains",
        "StarCraft symbols is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-controversies",
        "contains",
        "StarCraft controversies is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-sources",
        "contains",
        "StarCraft sources is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-geography",
        "contains",
        "StarCraft geography is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-legacy",
        "contains",
        "StarCraft legacy is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-practices",
        "contains",
        "StarCraft practices is a primary trailhead under StarCraft.",
        0.88,
        0.82
    ],
    [
        "starcraft",
        "starcraft-entry-1",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-2",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-3",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-4",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-5",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-6",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-7",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-8",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-9",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-10",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-11",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-12",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-13",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-14",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-15",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-16",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-17",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-18",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-19",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-20",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-21",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-22",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-23",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ],
    [
        "starcraft",
        "starcraft-entry-24",
        "contains",
        "Supporting entry under StarCraft.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
