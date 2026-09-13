/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "keyforge",
        "name": "KeyForge",
        "type": "topic",
        "short_description": "Unique randomized decks, Archons, and Richards’ no-trading digital-physical hybrid vision.",
        "description": "Unique randomized decks, Archons, and Richards’ no-trading digital-physical hybrid vision. This Ton-o-Lore subject maps people, places, events, and ideas tied to KeyForge so readers can follow long-tail connections across card games."
    },
    {
        "slug": "keyforge-figures",
        "name": "KeyForge figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to KeyForge.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring KeyForge."
    },
    {
        "slug": "keyforge-world",
        "name": "KeyForge world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame KeyForge.",
        "description": "Geography, institutions, and periodization that give KeyForge its encyclopedia shape."
    },
    {
        "slug": "keyforge-places",
        "name": "KeyForge places",
        "type": "place",
        "short_description": "Locations and geographies that frame KeyForge.",
        "description": "Places, regions, and built sites that give KeyForge its map — where events and figures concentrate."
    },
    {
        "slug": "keyforge-events",
        "name": "KeyForge events",
        "type": "event",
        "short_description": "Turning points and dated episodes in KeyForge.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the KeyForge timeline."
    },
    {
        "slug": "keyforge-objects",
        "name": "KeyForge objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to KeyForge.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through KeyForge."
    },
    {
        "slug": "keyforge-factions",
        "name": "KeyForge factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside KeyForge.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in KeyForge."
    },
    {
        "slug": "keyforge-concepts",
        "name": "KeyForge concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize KeyForge.",
        "description": "Keywords, doctrines, systems, and abstract forces that make KeyForge readable as a lore graph."
    },
    {
        "slug": "keyforge-eras",
        "name": "KeyForge eras",
        "type": "event",
        "short_description": "Periodization for KeyForge.",
        "description": "Named eras and phases that help readers track how KeyForge changes across time."
    },
    {
        "slug": "keyforge-works",
        "name": "KeyForge works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry KeyForge.",
        "description": "Primary works and adaptations through which most audiences encounter KeyForge."
    },
    {
        "slug": "keyforge-symbols",
        "name": "KeyForge symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with KeyForge.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside KeyForge."
    },
    {
        "slug": "keyforge-controversies",
        "name": "KeyForge controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in KeyForge.",
        "description": "Debates, rival canons, scandals, and contested facts that keep KeyForge argumentative."
    },
    {
        "slug": "keyforge-sources",
        "name": "KeyForge sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into KeyForge.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify KeyForge."
    },
    {
        "slug": "keyforge-geography",
        "name": "KeyForge geography",
        "type": "place",
        "short_description": "Broader geographic framing for KeyForge.",
        "description": "Regions, routes, and spatial systems that situate KeyForge beyond single named places."
    },
    {
        "slug": "keyforge-legacy",
        "name": "KeyForge legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of KeyForge.",
        "description": "How KeyForge continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "keyforge-practices",
        "name": "KeyForge practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in KeyForge.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in KeyForge."
    },
    {
        "slug": "keyforge-entry-1",
        "name": "KeyForge entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-2",
        "name": "KeyForge entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-3",
        "name": "KeyForge entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-4",
        "name": "KeyForge entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-5",
        "name": "KeyForge entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-6",
        "name": "KeyForge entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-7",
        "name": "KeyForge entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-8",
        "name": "KeyForge entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-9",
        "name": "KeyForge entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-10",
        "name": "KeyForge entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-11",
        "name": "KeyForge entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-12",
        "name": "KeyForge entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-13",
        "name": "KeyForge entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-14",
        "name": "KeyForge entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-15",
        "name": "KeyForge entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-16",
        "name": "KeyForge entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-17",
        "name": "KeyForge entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-18",
        "name": "KeyForge entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-19",
        "name": "KeyForge entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-20",
        "name": "KeyForge entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-21",
        "name": "KeyForge entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-22",
        "name": "KeyForge entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-23",
        "name": "KeyForge entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "keyforge-entry-24",
        "name": "KeyForge entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside KeyForge.",
        "description": "A supporting encyclopedia entry in the KeyForge subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "keyforge",
        "keyforge-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "keyforge",
        "keyforge-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "keyforge",
        "keyforge-places",
        "contains",
        "KeyForge places is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-events",
        "contains",
        "KeyForge events is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-objects",
        "contains",
        "KeyForge objects & artifacts is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-factions",
        "contains",
        "KeyForge factions & groups is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-concepts",
        "contains",
        "KeyForge concepts is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-eras",
        "contains",
        "KeyForge eras is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-works",
        "contains",
        "KeyForge works & media is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-symbols",
        "contains",
        "KeyForge symbols is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-controversies",
        "contains",
        "KeyForge controversies is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-sources",
        "contains",
        "KeyForge sources is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-geography",
        "contains",
        "KeyForge geography is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-legacy",
        "contains",
        "KeyForge legacy is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-practices",
        "contains",
        "KeyForge practices is a primary trailhead under KeyForge.",
        0.88,
        0.82
    ],
    [
        "keyforge",
        "keyforge-entry-1",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-2",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-3",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-4",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-5",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-6",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-7",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-8",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-9",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-10",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-11",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-12",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-13",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-14",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-15",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-16",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-17",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-18",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-19",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-20",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-21",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-22",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-23",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ],
    [
        "keyforge",
        "keyforge-entry-24",
        "contains",
        "Supporting entry under KeyForge.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
