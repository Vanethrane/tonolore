/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hawaiian-monarchy",
        "name": "Hawaiian monarchy",
        "type": "topic",
        "short_description": "Kamehameha unification to Liliʻuokalani, and the kingdom overthrown in 1893.",
        "description": "Kamehameha unification to Liliʻuokalani, and the kingdom overthrown in 1893. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hawaiian monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "hawaiian-monarchy-figures",
        "name": "Hawaiian monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hawaiian monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hawaiian monarchy."
    },
    {
        "slug": "hawaiian-monarchy-world",
        "name": "Hawaiian monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hawaiian monarchy.",
        "description": "Geography, institutions, and periodization that give Hawaiian monarchy its encyclopedia shape."
    },
    {
        "slug": "hawaiian-monarchy-places",
        "name": "Hawaiian monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hawaiian monarchy.",
        "description": "Places, regions, and built sites that give Hawaiian monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "hawaiian-monarchy-events",
        "name": "Hawaiian monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hawaiian monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hawaiian monarchy timeline."
    },
    {
        "slug": "hawaiian-monarchy-objects",
        "name": "Hawaiian monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hawaiian monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hawaiian monarchy."
    },
    {
        "slug": "hawaiian-monarchy-factions",
        "name": "Hawaiian monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hawaiian monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hawaiian monarchy."
    },
    {
        "slug": "hawaiian-monarchy-concepts",
        "name": "Hawaiian monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hawaiian monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hawaiian monarchy readable as a lore graph."
    },
    {
        "slug": "hawaiian-monarchy-eras",
        "name": "Hawaiian monarchy eras",
        "type": "event",
        "short_description": "Periodization for Hawaiian monarchy.",
        "description": "Named eras and phases that help readers track how Hawaiian monarchy changes across time."
    },
    {
        "slug": "hawaiian-monarchy-works",
        "name": "Hawaiian monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hawaiian monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter Hawaiian monarchy."
    },
    {
        "slug": "hawaiian-monarchy-symbols",
        "name": "Hawaiian monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hawaiian monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hawaiian monarchy."
    },
    {
        "slug": "hawaiian-monarchy-controversies",
        "name": "Hawaiian monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hawaiian monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hawaiian monarchy argumentative."
    },
    {
        "slug": "hawaiian-monarchy-sources",
        "name": "Hawaiian monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hawaiian monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hawaiian monarchy."
    },
    {
        "slug": "hawaiian-monarchy-geography",
        "name": "Hawaiian monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hawaiian monarchy.",
        "description": "Regions, routes, and spatial systems that situate Hawaiian monarchy beyond single named places."
    },
    {
        "slug": "hawaiian-monarchy-legacy",
        "name": "Hawaiian monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hawaiian monarchy.",
        "description": "How Hawaiian monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hawaiian-monarchy-practices",
        "name": "Hawaiian monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hawaiian monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hawaiian monarchy."
    },
    {
        "slug": "hawaiian-monarchy-entry-1",
        "name": "Hawaiian monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-2",
        "name": "Hawaiian monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-3",
        "name": "Hawaiian monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-4",
        "name": "Hawaiian monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-5",
        "name": "Hawaiian monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-6",
        "name": "Hawaiian monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-7",
        "name": "Hawaiian monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-8",
        "name": "Hawaiian monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-9",
        "name": "Hawaiian monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-10",
        "name": "Hawaiian monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-11",
        "name": "Hawaiian monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-12",
        "name": "Hawaiian monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-13",
        "name": "Hawaiian monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-14",
        "name": "Hawaiian monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-15",
        "name": "Hawaiian monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-16",
        "name": "Hawaiian monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-17",
        "name": "Hawaiian monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-18",
        "name": "Hawaiian monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-19",
        "name": "Hawaiian monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-20",
        "name": "Hawaiian monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-21",
        "name": "Hawaiian monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-22",
        "name": "Hawaiian monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-23",
        "name": "Hawaiian monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hawaiian-monarchy-entry-24",
        "name": "Hawaiian monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hawaiian monarchy.",
        "description": "A supporting encyclopedia entry in the Hawaiian monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-places",
        "contains",
        "Hawaiian monarchy places is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-events",
        "contains",
        "Hawaiian monarchy events is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-objects",
        "contains",
        "Hawaiian monarchy objects & artifacts is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-factions",
        "contains",
        "Hawaiian monarchy factions & groups is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-concepts",
        "contains",
        "Hawaiian monarchy concepts is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-eras",
        "contains",
        "Hawaiian monarchy eras is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-works",
        "contains",
        "Hawaiian monarchy works & media is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-symbols",
        "contains",
        "Hawaiian monarchy symbols is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-controversies",
        "contains",
        "Hawaiian monarchy controversies is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-sources",
        "contains",
        "Hawaiian monarchy sources is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-geography",
        "contains",
        "Hawaiian monarchy geography is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-legacy",
        "contains",
        "Hawaiian monarchy legacy is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-practices",
        "contains",
        "Hawaiian monarchy practices is a primary trailhead under Hawaiian monarchy.",
        0.88,
        0.82
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-1",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-2",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-3",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-4",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-5",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-6",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-7",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-8",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-9",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-10",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-11",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-12",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-13",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-14",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-15",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-16",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-17",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-18",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-19",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-20",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-21",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-22",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-23",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ],
    [
        "hawaiian-monarchy",
        "hawaiian-monarchy-entry-24",
        "contains",
        "Supporting entry under Hawaiian monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
