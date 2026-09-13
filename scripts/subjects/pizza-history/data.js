/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pizza-history",
        "name": "Pizza history",
        "type": "topic",
        "short_description": "Naples origins, American reinvention, and the flatbread that became global comfort food.",
        "description": "Naples origins, American reinvention, and the flatbread that became global comfort food. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pizza history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "pizza-history-figures",
        "name": "Pizza history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pizza history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pizza history."
    },
    {
        "slug": "pizza-history-world",
        "name": "Pizza history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pizza history.",
        "description": "Geography, institutions, and periodization that give Pizza history its encyclopedia shape."
    },
    {
        "slug": "pizza-history-places",
        "name": "Pizza history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pizza history.",
        "description": "Places, regions, and built sites that give Pizza history its map — where events and figures concentrate."
    },
    {
        "slug": "pizza-history-events",
        "name": "Pizza history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pizza history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pizza history timeline."
    },
    {
        "slug": "pizza-history-objects",
        "name": "Pizza history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pizza history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pizza history."
    },
    {
        "slug": "pizza-history-factions",
        "name": "Pizza history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pizza history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pizza history."
    },
    {
        "slug": "pizza-history-concepts",
        "name": "Pizza history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pizza history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pizza history readable as a lore graph."
    },
    {
        "slug": "pizza-history-eras",
        "name": "Pizza history eras",
        "type": "event",
        "short_description": "Periodization for Pizza history.",
        "description": "Named eras and phases that help readers track how Pizza history changes across time."
    },
    {
        "slug": "pizza-history-works",
        "name": "Pizza history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pizza history.",
        "description": "Primary works and adaptations through which most audiences encounter Pizza history."
    },
    {
        "slug": "pizza-history-symbols",
        "name": "Pizza history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pizza history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pizza history."
    },
    {
        "slug": "pizza-history-controversies",
        "name": "Pizza history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pizza history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pizza history argumentative."
    },
    {
        "slug": "pizza-history-sources",
        "name": "Pizza history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pizza history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pizza history."
    },
    {
        "slug": "pizza-history-geography",
        "name": "Pizza history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pizza history.",
        "description": "Regions, routes, and spatial systems that situate Pizza history beyond single named places."
    },
    {
        "slug": "pizza-history-legacy",
        "name": "Pizza history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pizza history.",
        "description": "How Pizza history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pizza-history-practices",
        "name": "Pizza history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pizza history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pizza history."
    },
    {
        "slug": "pizza-history-entry-1",
        "name": "Pizza history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-2",
        "name": "Pizza history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-3",
        "name": "Pizza history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-4",
        "name": "Pizza history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-5",
        "name": "Pizza history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-6",
        "name": "Pizza history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-7",
        "name": "Pizza history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-8",
        "name": "Pizza history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-9",
        "name": "Pizza history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-10",
        "name": "Pizza history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-11",
        "name": "Pizza history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-12",
        "name": "Pizza history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-13",
        "name": "Pizza history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-14",
        "name": "Pizza history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-15",
        "name": "Pizza history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-16",
        "name": "Pizza history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-17",
        "name": "Pizza history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-18",
        "name": "Pizza history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-19",
        "name": "Pizza history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-20",
        "name": "Pizza history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-21",
        "name": "Pizza history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-22",
        "name": "Pizza history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-23",
        "name": "Pizza history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pizza-history-entry-24",
        "name": "Pizza history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pizza history.",
        "description": "A supporting encyclopedia entry in the Pizza history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pizza-history",
        "pizza-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pizza-history",
        "pizza-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pizza-history",
        "pizza-history-places",
        "contains",
        "Pizza history places is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-events",
        "contains",
        "Pizza history events is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-objects",
        "contains",
        "Pizza history objects & artifacts is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-factions",
        "contains",
        "Pizza history factions & groups is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-concepts",
        "contains",
        "Pizza history concepts is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-eras",
        "contains",
        "Pizza history eras is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-works",
        "contains",
        "Pizza history works & media is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-symbols",
        "contains",
        "Pizza history symbols is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-controversies",
        "contains",
        "Pizza history controversies is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-sources",
        "contains",
        "Pizza history sources is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-geography",
        "contains",
        "Pizza history geography is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-legacy",
        "contains",
        "Pizza history legacy is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-practices",
        "contains",
        "Pizza history practices is a primary trailhead under Pizza history.",
        0.88,
        0.82
    ],
    [
        "pizza-history",
        "pizza-history-entry-1",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-2",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-3",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-4",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-5",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-6",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-7",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-8",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-9",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-10",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-11",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-12",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-13",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-14",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-15",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-16",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-17",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-18",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-19",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-20",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-21",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-22",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-23",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ],
    [
        "pizza-history",
        "pizza-history-entry-24",
        "contains",
        "Supporting entry under Pizza history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
