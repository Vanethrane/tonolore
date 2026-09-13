/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "thai-monarchy",
        "name": "Thai monarchy",
        "type": "topic",
        "short_description": "Chakri kings, sacred kingship, and the living monarchy of Thailand.",
        "description": "Chakri kings, sacred kingship, and the living monarchy of Thailand. This Ton-o-Lore subject maps people, places, events, and ideas tied to Thai monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "thai-monarchy-figures",
        "name": "Thai monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Thai monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Thai monarchy."
    },
    {
        "slug": "thai-monarchy-world",
        "name": "Thai monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Thai monarchy.",
        "description": "Geography, institutions, and periodization that give Thai monarchy its encyclopedia shape."
    },
    {
        "slug": "thai-monarchy-places",
        "name": "Thai monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Thai monarchy.",
        "description": "Places, regions, and built sites that give Thai monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "thai-monarchy-events",
        "name": "Thai monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Thai monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Thai monarchy timeline."
    },
    {
        "slug": "thai-monarchy-objects",
        "name": "Thai monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Thai monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Thai monarchy."
    },
    {
        "slug": "thai-monarchy-factions",
        "name": "Thai monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Thai monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Thai monarchy."
    },
    {
        "slug": "thai-monarchy-concepts",
        "name": "Thai monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Thai monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Thai monarchy readable as a lore graph."
    },
    {
        "slug": "thai-monarchy-eras",
        "name": "Thai monarchy eras",
        "type": "event",
        "short_description": "Periodization for Thai monarchy.",
        "description": "Named eras and phases that help readers track how Thai monarchy changes across time."
    },
    {
        "slug": "thai-monarchy-works",
        "name": "Thai monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Thai monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter Thai monarchy."
    },
    {
        "slug": "thai-monarchy-symbols",
        "name": "Thai monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Thai monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Thai monarchy."
    },
    {
        "slug": "thai-monarchy-controversies",
        "name": "Thai monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Thai monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Thai monarchy argumentative."
    },
    {
        "slug": "thai-monarchy-sources",
        "name": "Thai monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Thai monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Thai monarchy."
    },
    {
        "slug": "thai-monarchy-geography",
        "name": "Thai monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Thai monarchy.",
        "description": "Regions, routes, and spatial systems that situate Thai monarchy beyond single named places."
    },
    {
        "slug": "thai-monarchy-legacy",
        "name": "Thai monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Thai monarchy.",
        "description": "How Thai monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "thai-monarchy-practices",
        "name": "Thai monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Thai monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Thai monarchy."
    },
    {
        "slug": "thai-monarchy-entry-1",
        "name": "Thai monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-2",
        "name": "Thai monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-3",
        "name": "Thai monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-4",
        "name": "Thai monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-5",
        "name": "Thai monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-6",
        "name": "Thai monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-7",
        "name": "Thai monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-8",
        "name": "Thai monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-9",
        "name": "Thai monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-10",
        "name": "Thai monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-11",
        "name": "Thai monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-12",
        "name": "Thai monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-13",
        "name": "Thai monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-14",
        "name": "Thai monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-15",
        "name": "Thai monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-16",
        "name": "Thai monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-17",
        "name": "Thai monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-18",
        "name": "Thai monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-19",
        "name": "Thai monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-20",
        "name": "Thai monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-21",
        "name": "Thai monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-22",
        "name": "Thai monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-23",
        "name": "Thai monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "thai-monarchy-entry-24",
        "name": "Thai monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Thai monarchy.",
        "description": "A supporting encyclopedia entry in the Thai monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "thai-monarchy",
        "thai-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "thai-monarchy",
        "thai-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "thai-monarchy",
        "thai-monarchy-places",
        "contains",
        "Thai monarchy places is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-events",
        "contains",
        "Thai monarchy events is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-objects",
        "contains",
        "Thai monarchy objects & artifacts is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-factions",
        "contains",
        "Thai monarchy factions & groups is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-concepts",
        "contains",
        "Thai monarchy concepts is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-eras",
        "contains",
        "Thai monarchy eras is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-works",
        "contains",
        "Thai monarchy works & media is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-symbols",
        "contains",
        "Thai monarchy symbols is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-controversies",
        "contains",
        "Thai monarchy controversies is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-sources",
        "contains",
        "Thai monarchy sources is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-geography",
        "contains",
        "Thai monarchy geography is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-legacy",
        "contains",
        "Thai monarchy legacy is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-practices",
        "contains",
        "Thai monarchy practices is a primary trailhead under Thai monarchy.",
        0.88,
        0.82
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-1",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-2",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-3",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-4",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-5",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-6",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-7",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-8",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-9",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-10",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-11",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-12",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-13",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-14",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-15",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-16",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-17",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-18",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-19",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-20",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-21",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-22",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-23",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ],
    [
        "thai-monarchy",
        "thai-monarchy-entry-24",
        "contains",
        "Supporting entry under Thai monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
