/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "street-food-history",
        "name": "Street food history",
        "type": "topic",
        "short_description": "Hawkers, night markets, and the portable cuisine of cities.",
        "description": "Hawkers, night markets, and the portable cuisine of cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to Street food history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "street-food-history-figures",
        "name": "Street food history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Street food history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Street food history."
    },
    {
        "slug": "street-food-history-world",
        "name": "Street food history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Street food history.",
        "description": "Geography, institutions, and periodization that give Street food history its encyclopedia shape."
    },
    {
        "slug": "street-food-history-places",
        "name": "Street food history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Street food history.",
        "description": "Places, regions, and built sites that give Street food history its map — where events and figures concentrate."
    },
    {
        "slug": "street-food-history-events",
        "name": "Street food history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Street food history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Street food history timeline."
    },
    {
        "slug": "street-food-history-objects",
        "name": "Street food history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Street food history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Street food history."
    },
    {
        "slug": "street-food-history-factions",
        "name": "Street food history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Street food history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Street food history."
    },
    {
        "slug": "street-food-history-concepts",
        "name": "Street food history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Street food history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Street food history readable as a lore graph."
    },
    {
        "slug": "street-food-history-eras",
        "name": "Street food history eras",
        "type": "event",
        "short_description": "Periodization for Street food history.",
        "description": "Named eras and phases that help readers track how Street food history changes across time."
    },
    {
        "slug": "street-food-history-works",
        "name": "Street food history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Street food history.",
        "description": "Primary works and adaptations through which most audiences encounter Street food history."
    },
    {
        "slug": "street-food-history-symbols",
        "name": "Street food history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Street food history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Street food history."
    },
    {
        "slug": "street-food-history-controversies",
        "name": "Street food history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Street food history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Street food history argumentative."
    },
    {
        "slug": "street-food-history-sources",
        "name": "Street food history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Street food history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Street food history."
    },
    {
        "slug": "street-food-history-geography",
        "name": "Street food history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Street food history.",
        "description": "Regions, routes, and spatial systems that situate Street food history beyond single named places."
    },
    {
        "slug": "street-food-history-legacy",
        "name": "Street food history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Street food history.",
        "description": "How Street food history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "street-food-history-practices",
        "name": "Street food history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Street food history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Street food history."
    },
    {
        "slug": "street-food-history-entry-1",
        "name": "Street food history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-2",
        "name": "Street food history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-3",
        "name": "Street food history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-4",
        "name": "Street food history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-5",
        "name": "Street food history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-6",
        "name": "Street food history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-7",
        "name": "Street food history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-8",
        "name": "Street food history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-9",
        "name": "Street food history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-10",
        "name": "Street food history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-11",
        "name": "Street food history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-12",
        "name": "Street food history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-13",
        "name": "Street food history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-14",
        "name": "Street food history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-15",
        "name": "Street food history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-16",
        "name": "Street food history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-17",
        "name": "Street food history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-18",
        "name": "Street food history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-19",
        "name": "Street food history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-20",
        "name": "Street food history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-21",
        "name": "Street food history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-22",
        "name": "Street food history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-23",
        "name": "Street food history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "street-food-history-entry-24",
        "name": "Street food history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Street food history.",
        "description": "A supporting encyclopedia entry in the Street food history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "street-food-history",
        "street-food-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "street-food-history",
        "street-food-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "street-food-history",
        "street-food-history-places",
        "contains",
        "Street food history places is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-events",
        "contains",
        "Street food history events is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-objects",
        "contains",
        "Street food history objects & artifacts is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-factions",
        "contains",
        "Street food history factions & groups is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-concepts",
        "contains",
        "Street food history concepts is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-eras",
        "contains",
        "Street food history eras is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-works",
        "contains",
        "Street food history works & media is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-symbols",
        "contains",
        "Street food history symbols is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-controversies",
        "contains",
        "Street food history controversies is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-sources",
        "contains",
        "Street food history sources is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-geography",
        "contains",
        "Street food history geography is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-legacy",
        "contains",
        "Street food history legacy is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-practices",
        "contains",
        "Street food history practices is a primary trailhead under Street food history.",
        0.88,
        0.82
    ],
    [
        "street-food-history",
        "street-food-history-entry-1",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-2",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-3",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-4",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-5",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-6",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-7",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-8",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-9",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-10",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-11",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-12",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-13",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-14",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-15",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-16",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-17",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-18",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-19",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-20",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-21",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-22",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-23",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ],
    [
        "street-food-history",
        "street-food-history-entry-24",
        "contains",
        "Supporting entry under Street food history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
