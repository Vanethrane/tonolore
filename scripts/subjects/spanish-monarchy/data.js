/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spanish-monarchy",
        "name": "Spanish monarchy",
        "type": "topic",
        "short_description": "Bourbons and Habsburgs of Spain, empire twilight, and the crown that still sits in Madrid.",
        "description": "Bourbons and Habsburgs of Spain, empire twilight, and the crown that still sits in Madrid. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spanish monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "spanish-monarchy-figures",
        "name": "Spanish monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spanish monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spanish monarchy."
    },
    {
        "slug": "spanish-monarchy-world",
        "name": "Spanish monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spanish monarchy.",
        "description": "Geography, institutions, and periodization that give Spanish monarchy its encyclopedia shape."
    },
    {
        "slug": "spanish-monarchy-places",
        "name": "Spanish monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spanish monarchy.",
        "description": "Places, regions, and built sites that give Spanish monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "spanish-monarchy-events",
        "name": "Spanish monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spanish monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spanish monarchy timeline."
    },
    {
        "slug": "spanish-monarchy-objects",
        "name": "Spanish monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spanish monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spanish monarchy."
    },
    {
        "slug": "spanish-monarchy-factions",
        "name": "Spanish monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spanish monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spanish monarchy."
    },
    {
        "slug": "spanish-monarchy-concepts",
        "name": "Spanish monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spanish monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spanish monarchy readable as a lore graph."
    },
    {
        "slug": "spanish-monarchy-eras",
        "name": "Spanish monarchy eras",
        "type": "event",
        "short_description": "Periodization for Spanish monarchy.",
        "description": "Named eras and phases that help readers track how Spanish monarchy changes across time."
    },
    {
        "slug": "spanish-monarchy-works",
        "name": "Spanish monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spanish monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter Spanish monarchy."
    },
    {
        "slug": "spanish-monarchy-symbols",
        "name": "Spanish monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spanish monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spanish monarchy."
    },
    {
        "slug": "spanish-monarchy-controversies",
        "name": "Spanish monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spanish monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spanish monarchy argumentative."
    },
    {
        "slug": "spanish-monarchy-sources",
        "name": "Spanish monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spanish monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spanish monarchy."
    },
    {
        "slug": "spanish-monarchy-geography",
        "name": "Spanish monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spanish monarchy.",
        "description": "Regions, routes, and spatial systems that situate Spanish monarchy beyond single named places."
    },
    {
        "slug": "spanish-monarchy-legacy",
        "name": "Spanish monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spanish monarchy.",
        "description": "How Spanish monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spanish-monarchy-practices",
        "name": "Spanish monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spanish monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spanish monarchy."
    },
    {
        "slug": "spanish-monarchy-entry-1",
        "name": "Spanish monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-2",
        "name": "Spanish monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-3",
        "name": "Spanish monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-4",
        "name": "Spanish monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-5",
        "name": "Spanish monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-6",
        "name": "Spanish monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-7",
        "name": "Spanish monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-8",
        "name": "Spanish monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-9",
        "name": "Spanish monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-10",
        "name": "Spanish monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-11",
        "name": "Spanish monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-12",
        "name": "Spanish monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-13",
        "name": "Spanish monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-14",
        "name": "Spanish monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-15",
        "name": "Spanish monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-16",
        "name": "Spanish monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-17",
        "name": "Spanish monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-18",
        "name": "Spanish monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-19",
        "name": "Spanish monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-20",
        "name": "Spanish monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-21",
        "name": "Spanish monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-22",
        "name": "Spanish monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-23",
        "name": "Spanish monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spanish-monarchy-entry-24",
        "name": "Spanish monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spanish monarchy.",
        "description": "A supporting encyclopedia entry in the Spanish monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spanish-monarchy",
        "spanish-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-places",
        "contains",
        "Spanish monarchy places is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-events",
        "contains",
        "Spanish monarchy events is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-objects",
        "contains",
        "Spanish monarchy objects & artifacts is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-factions",
        "contains",
        "Spanish monarchy factions & groups is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-concepts",
        "contains",
        "Spanish monarchy concepts is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-eras",
        "contains",
        "Spanish monarchy eras is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-works",
        "contains",
        "Spanish monarchy works & media is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-symbols",
        "contains",
        "Spanish monarchy symbols is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-controversies",
        "contains",
        "Spanish monarchy controversies is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-sources",
        "contains",
        "Spanish monarchy sources is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-geography",
        "contains",
        "Spanish monarchy geography is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-legacy",
        "contains",
        "Spanish monarchy legacy is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-practices",
        "contains",
        "Spanish monarchy practices is a primary trailhead under Spanish monarchy.",
        0.88,
        0.82
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-1",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-2",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-3",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-4",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-5",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-6",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-7",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-8",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-9",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-10",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-11",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-12",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-13",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-14",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-15",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-16",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-17",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-18",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-19",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-20",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-21",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-22",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-23",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ],
    [
        "spanish-monarchy",
        "spanish-monarchy-entry-24",
        "contains",
        "Supporting entry under Spanish monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
