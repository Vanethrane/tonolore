/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "restaurants-history",
        "name": "Restaurant history",
        "type": "topic",
        "short_description": "Public dining rooms, menus, and the rise of eating out as modern culture.",
        "description": "Public dining rooms, menus, and the rise of eating out as modern culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Restaurant history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "restaurants-history-figures",
        "name": "Restaurant history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Restaurant history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Restaurant history."
    },
    {
        "slug": "restaurants-history-world",
        "name": "Restaurant history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Restaurant history.",
        "description": "Geography, institutions, and periodization that give Restaurant history its encyclopedia shape."
    },
    {
        "slug": "restaurants-history-places",
        "name": "Restaurant history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Restaurant history.",
        "description": "Places, regions, and built sites that give Restaurant history its map — where events and figures concentrate."
    },
    {
        "slug": "restaurants-history-events",
        "name": "Restaurant history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Restaurant history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Restaurant history timeline."
    },
    {
        "slug": "restaurants-history-objects",
        "name": "Restaurant history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Restaurant history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Restaurant history."
    },
    {
        "slug": "restaurants-history-factions",
        "name": "Restaurant history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Restaurant history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Restaurant history."
    },
    {
        "slug": "restaurants-history-concepts",
        "name": "Restaurant history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Restaurant history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Restaurant history readable as a lore graph."
    },
    {
        "slug": "restaurants-history-eras",
        "name": "Restaurant history eras",
        "type": "event",
        "short_description": "Periodization for Restaurant history.",
        "description": "Named eras and phases that help readers track how Restaurant history changes across time."
    },
    {
        "slug": "restaurants-history-works",
        "name": "Restaurant history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Restaurant history.",
        "description": "Primary works and adaptations through which most audiences encounter Restaurant history."
    },
    {
        "slug": "restaurants-history-symbols",
        "name": "Restaurant history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Restaurant history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Restaurant history."
    },
    {
        "slug": "restaurants-history-controversies",
        "name": "Restaurant history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Restaurant history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Restaurant history argumentative."
    },
    {
        "slug": "restaurants-history-sources",
        "name": "Restaurant history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Restaurant history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Restaurant history."
    },
    {
        "slug": "restaurants-history-geography",
        "name": "Restaurant history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Restaurant history.",
        "description": "Regions, routes, and spatial systems that situate Restaurant history beyond single named places."
    },
    {
        "slug": "restaurants-history-legacy",
        "name": "Restaurant history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Restaurant history.",
        "description": "How Restaurant history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "restaurants-history-practices",
        "name": "Restaurant history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Restaurant history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Restaurant history."
    },
    {
        "slug": "restaurants-history-entry-1",
        "name": "Restaurant history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-2",
        "name": "Restaurant history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-3",
        "name": "Restaurant history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-4",
        "name": "Restaurant history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-5",
        "name": "Restaurant history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-6",
        "name": "Restaurant history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-7",
        "name": "Restaurant history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-8",
        "name": "Restaurant history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-9",
        "name": "Restaurant history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-10",
        "name": "Restaurant history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-11",
        "name": "Restaurant history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-12",
        "name": "Restaurant history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-13",
        "name": "Restaurant history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-14",
        "name": "Restaurant history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-15",
        "name": "Restaurant history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-16",
        "name": "Restaurant history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-17",
        "name": "Restaurant history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-18",
        "name": "Restaurant history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-19",
        "name": "Restaurant history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-20",
        "name": "Restaurant history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-21",
        "name": "Restaurant history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-22",
        "name": "Restaurant history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-23",
        "name": "Restaurant history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "restaurants-history-entry-24",
        "name": "Restaurant history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Restaurant history.",
        "description": "A supporting encyclopedia entry in the Restaurant history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "restaurants-history",
        "restaurants-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "restaurants-history",
        "restaurants-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "restaurants-history",
        "restaurants-history-places",
        "contains",
        "Restaurant history places is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-events",
        "contains",
        "Restaurant history events is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-objects",
        "contains",
        "Restaurant history objects & artifacts is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-factions",
        "contains",
        "Restaurant history factions & groups is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-concepts",
        "contains",
        "Restaurant history concepts is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-eras",
        "contains",
        "Restaurant history eras is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-works",
        "contains",
        "Restaurant history works & media is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-symbols",
        "contains",
        "Restaurant history symbols is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-controversies",
        "contains",
        "Restaurant history controversies is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-sources",
        "contains",
        "Restaurant history sources is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-geography",
        "contains",
        "Restaurant history geography is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-legacy",
        "contains",
        "Restaurant history legacy is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-practices",
        "contains",
        "Restaurant history practices is a primary trailhead under Restaurant history.",
        0.88,
        0.82
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-1",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-2",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-3",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-4",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-5",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-6",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-7",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-8",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-9",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-10",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-11",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-12",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-13",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-14",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-15",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-16",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-17",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-18",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-19",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-20",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-21",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-22",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-23",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ],
    [
        "restaurants-history",
        "restaurants-history-entry-24",
        "contains",
        "Supporting entry under Restaurant history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
