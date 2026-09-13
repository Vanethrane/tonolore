/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "catholic-church-history",
        "name": "Catholic Church history",
        "type": "topic",
        "short_description": "Papacy, councils, and the institutional story of Latin Christianity.",
        "description": "Papacy, councils, and the institutional story of Latin Christianity. This Ton-o-Lore subject maps people, places, events, and ideas tied to Catholic Church history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "catholic-church-history-figures",
        "name": "Catholic Church history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Catholic Church history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Catholic Church history."
    },
    {
        "slug": "catholic-church-history-world",
        "name": "Catholic Church history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Catholic Church history.",
        "description": "Geography, institutions, and periodization that give Catholic Church history its encyclopedia shape."
    },
    {
        "slug": "catholic-church-history-places",
        "name": "Catholic Church history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Catholic Church history.",
        "description": "Places, regions, and built sites that give Catholic Church history its map — where events and figures concentrate."
    },
    {
        "slug": "catholic-church-history-events",
        "name": "Catholic Church history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Catholic Church history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Catholic Church history timeline."
    },
    {
        "slug": "catholic-church-history-objects",
        "name": "Catholic Church history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Catholic Church history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Catholic Church history."
    },
    {
        "slug": "catholic-church-history-factions",
        "name": "Catholic Church history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Catholic Church history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Catholic Church history."
    },
    {
        "slug": "catholic-church-history-concepts",
        "name": "Catholic Church history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Catholic Church history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Catholic Church history readable as a lore graph."
    },
    {
        "slug": "catholic-church-history-eras",
        "name": "Catholic Church history eras",
        "type": "event",
        "short_description": "Periodization for Catholic Church history.",
        "description": "Named eras and phases that help readers track how Catholic Church history changes across time."
    },
    {
        "slug": "catholic-church-history-works",
        "name": "Catholic Church history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Catholic Church history.",
        "description": "Primary works and adaptations through which most audiences encounter Catholic Church history."
    },
    {
        "slug": "catholic-church-history-symbols",
        "name": "Catholic Church history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Catholic Church history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Catholic Church history."
    },
    {
        "slug": "catholic-church-history-controversies",
        "name": "Catholic Church history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Catholic Church history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Catholic Church history argumentative."
    },
    {
        "slug": "catholic-church-history-sources",
        "name": "Catholic Church history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Catholic Church history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Catholic Church history."
    },
    {
        "slug": "catholic-church-history-geography",
        "name": "Catholic Church history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Catholic Church history.",
        "description": "Regions, routes, and spatial systems that situate Catholic Church history beyond single named places."
    },
    {
        "slug": "catholic-church-history-legacy",
        "name": "Catholic Church history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Catholic Church history.",
        "description": "How Catholic Church history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "catholic-church-history-practices",
        "name": "Catholic Church history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Catholic Church history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Catholic Church history."
    },
    {
        "slug": "catholic-church-history-entry-1",
        "name": "Catholic Church history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-2",
        "name": "Catholic Church history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-3",
        "name": "Catholic Church history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-4",
        "name": "Catholic Church history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-5",
        "name": "Catholic Church history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-6",
        "name": "Catholic Church history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-7",
        "name": "Catholic Church history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-8",
        "name": "Catholic Church history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-9",
        "name": "Catholic Church history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-10",
        "name": "Catholic Church history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-11",
        "name": "Catholic Church history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-12",
        "name": "Catholic Church history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-13",
        "name": "Catholic Church history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-14",
        "name": "Catholic Church history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-15",
        "name": "Catholic Church history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-16",
        "name": "Catholic Church history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-17",
        "name": "Catholic Church history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-18",
        "name": "Catholic Church history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-19",
        "name": "Catholic Church history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-20",
        "name": "Catholic Church history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-21",
        "name": "Catholic Church history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-22",
        "name": "Catholic Church history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-23",
        "name": "Catholic Church history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "catholic-church-history-entry-24",
        "name": "Catholic Church history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Catholic Church history.",
        "description": "A supporting encyclopedia entry in the Catholic Church history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "catholic-church-history",
        "catholic-church-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "catholic-church-history",
        "catholic-church-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "catholic-church-history",
        "catholic-church-history-places",
        "contains",
        "Catholic Church history places is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-events",
        "contains",
        "Catholic Church history events is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-objects",
        "contains",
        "Catholic Church history objects & artifacts is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-factions",
        "contains",
        "Catholic Church history factions & groups is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-concepts",
        "contains",
        "Catholic Church history concepts is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-eras",
        "contains",
        "Catholic Church history eras is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-works",
        "contains",
        "Catholic Church history works & media is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-symbols",
        "contains",
        "Catholic Church history symbols is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-controversies",
        "contains",
        "Catholic Church history controversies is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-sources",
        "contains",
        "Catholic Church history sources is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-geography",
        "contains",
        "Catholic Church history geography is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-legacy",
        "contains",
        "Catholic Church history legacy is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-practices",
        "contains",
        "Catholic Church history practices is a primary trailhead under Catholic Church history.",
        0.88,
        0.82
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-1",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-2",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-3",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-4",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-5",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-6",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-7",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-8",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-9",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-10",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-11",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-12",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-13",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-14",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-15",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-16",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-17",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-18",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-19",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-20",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-21",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-22",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-23",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ],
    [
        "catholic-church-history",
        "catholic-church-history-entry-24",
        "contains",
        "Supporting entry under Catholic Church history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
