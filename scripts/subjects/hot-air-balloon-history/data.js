/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hot-air-balloon-history",
        "name": "Hot air balloon history",
        "type": "topic",
        "short_description": "Montgolfiers, sport ballooning, and the first human flights.",
        "description": "Montgolfiers, sport ballooning, and the first human flights. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hot air balloon history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "hot-air-balloon-history-figures",
        "name": "Hot air balloon history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hot air balloon history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hot air balloon history."
    },
    {
        "slug": "hot-air-balloon-history-world",
        "name": "Hot air balloon history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hot air balloon history.",
        "description": "Geography, institutions, and periodization that give Hot air balloon history its encyclopedia shape."
    },
    {
        "slug": "hot-air-balloon-history-places",
        "name": "Hot air balloon history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hot air balloon history.",
        "description": "Places, regions, and built sites that give Hot air balloon history its map — where events and figures concentrate."
    },
    {
        "slug": "hot-air-balloon-history-events",
        "name": "Hot air balloon history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hot air balloon history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hot air balloon history timeline."
    },
    {
        "slug": "hot-air-balloon-history-objects",
        "name": "Hot air balloon history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hot air balloon history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hot air balloon history."
    },
    {
        "slug": "hot-air-balloon-history-factions",
        "name": "Hot air balloon history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hot air balloon history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hot air balloon history."
    },
    {
        "slug": "hot-air-balloon-history-concepts",
        "name": "Hot air balloon history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hot air balloon history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hot air balloon history readable as a lore graph."
    },
    {
        "slug": "hot-air-balloon-history-eras",
        "name": "Hot air balloon history eras",
        "type": "event",
        "short_description": "Periodization for Hot air balloon history.",
        "description": "Named eras and phases that help readers track how Hot air balloon history changes across time."
    },
    {
        "slug": "hot-air-balloon-history-works",
        "name": "Hot air balloon history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hot air balloon history.",
        "description": "Primary works and adaptations through which most audiences encounter Hot air balloon history."
    },
    {
        "slug": "hot-air-balloon-history-symbols",
        "name": "Hot air balloon history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hot air balloon history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hot air balloon history."
    },
    {
        "slug": "hot-air-balloon-history-controversies",
        "name": "Hot air balloon history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hot air balloon history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hot air balloon history argumentative."
    },
    {
        "slug": "hot-air-balloon-history-sources",
        "name": "Hot air balloon history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hot air balloon history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hot air balloon history."
    },
    {
        "slug": "hot-air-balloon-history-geography",
        "name": "Hot air balloon history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hot air balloon history.",
        "description": "Regions, routes, and spatial systems that situate Hot air balloon history beyond single named places."
    },
    {
        "slug": "hot-air-balloon-history-legacy",
        "name": "Hot air balloon history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hot air balloon history.",
        "description": "How Hot air balloon history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hot-air-balloon-history-practices",
        "name": "Hot air balloon history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hot air balloon history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hot air balloon history."
    },
    {
        "slug": "hot-air-balloon-history-entry-1",
        "name": "Hot air balloon history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-2",
        "name": "Hot air balloon history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-3",
        "name": "Hot air balloon history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-4",
        "name": "Hot air balloon history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-5",
        "name": "Hot air balloon history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-6",
        "name": "Hot air balloon history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-7",
        "name": "Hot air balloon history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-8",
        "name": "Hot air balloon history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-9",
        "name": "Hot air balloon history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-10",
        "name": "Hot air balloon history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-11",
        "name": "Hot air balloon history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-12",
        "name": "Hot air balloon history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-13",
        "name": "Hot air balloon history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-14",
        "name": "Hot air balloon history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-15",
        "name": "Hot air balloon history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-16",
        "name": "Hot air balloon history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-17",
        "name": "Hot air balloon history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-18",
        "name": "Hot air balloon history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-19",
        "name": "Hot air balloon history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-20",
        "name": "Hot air balloon history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-21",
        "name": "Hot air balloon history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-22",
        "name": "Hot air balloon history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-23",
        "name": "Hot air balloon history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hot-air-balloon-history-entry-24",
        "name": "Hot air balloon history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hot air balloon history.",
        "description": "A supporting encyclopedia entry in the Hot air balloon history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-places",
        "contains",
        "Hot air balloon history places is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-events",
        "contains",
        "Hot air balloon history events is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-objects",
        "contains",
        "Hot air balloon history objects & artifacts is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-factions",
        "contains",
        "Hot air balloon history factions & groups is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-concepts",
        "contains",
        "Hot air balloon history concepts is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-eras",
        "contains",
        "Hot air balloon history eras is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-works",
        "contains",
        "Hot air balloon history works & media is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-symbols",
        "contains",
        "Hot air balloon history symbols is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-controversies",
        "contains",
        "Hot air balloon history controversies is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-sources",
        "contains",
        "Hot air balloon history sources is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-geography",
        "contains",
        "Hot air balloon history geography is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-legacy",
        "contains",
        "Hot air balloon history legacy is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-practices",
        "contains",
        "Hot air balloon history practices is a primary trailhead under Hot air balloon history.",
        0.88,
        0.82
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-1",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-2",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-3",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-4",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-5",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-6",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-7",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-8",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-9",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-10",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-11",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-12",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-13",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-14",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-15",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-16",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-17",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-18",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-19",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-20",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-21",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-22",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-23",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ],
    [
        "hot-air-balloon-history",
        "hot-air-balloon-history-entry-24",
        "contains",
        "Supporting entry under Hot air balloon history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
