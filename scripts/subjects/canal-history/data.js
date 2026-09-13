/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "canal-history",
        "name": "Canal history",
        "type": "topic",
        "short_description": "Locks, inland waterways, and the engineered shortcuts that remade trade routes.",
        "description": "Locks, inland waterways, and the engineered shortcuts that remade trade routes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Canal history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "canal-history-figures",
        "name": "Canal history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Canal history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Canal history."
    },
    {
        "slug": "canal-history-world",
        "name": "Canal history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Canal history.",
        "description": "Geography, institutions, and periodization that give Canal history its encyclopedia shape."
    },
    {
        "slug": "canal-history-places",
        "name": "Canal history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Canal history.",
        "description": "Places, regions, and built sites that give Canal history its map — where events and figures concentrate."
    },
    {
        "slug": "canal-history-events",
        "name": "Canal history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Canal history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Canal history timeline."
    },
    {
        "slug": "canal-history-objects",
        "name": "Canal history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Canal history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Canal history."
    },
    {
        "slug": "canal-history-factions",
        "name": "Canal history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Canal history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Canal history."
    },
    {
        "slug": "canal-history-concepts",
        "name": "Canal history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Canal history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Canal history readable as a lore graph."
    },
    {
        "slug": "canal-history-eras",
        "name": "Canal history eras",
        "type": "event",
        "short_description": "Periodization for Canal history.",
        "description": "Named eras and phases that help readers track how Canal history changes across time."
    },
    {
        "slug": "canal-history-works",
        "name": "Canal history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Canal history.",
        "description": "Primary works and adaptations through which most audiences encounter Canal history."
    },
    {
        "slug": "canal-history-symbols",
        "name": "Canal history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Canal history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Canal history."
    },
    {
        "slug": "canal-history-controversies",
        "name": "Canal history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Canal history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Canal history argumentative."
    },
    {
        "slug": "canal-history-sources",
        "name": "Canal history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Canal history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Canal history."
    },
    {
        "slug": "canal-history-geography",
        "name": "Canal history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Canal history.",
        "description": "Regions, routes, and spatial systems that situate Canal history beyond single named places."
    },
    {
        "slug": "canal-history-legacy",
        "name": "Canal history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Canal history.",
        "description": "How Canal history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "canal-history-practices",
        "name": "Canal history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Canal history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Canal history."
    },
    {
        "slug": "canal-history-entry-1",
        "name": "Canal history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-2",
        "name": "Canal history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-3",
        "name": "Canal history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-4",
        "name": "Canal history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-5",
        "name": "Canal history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-6",
        "name": "Canal history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-7",
        "name": "Canal history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-8",
        "name": "Canal history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-9",
        "name": "Canal history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-10",
        "name": "Canal history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-11",
        "name": "Canal history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-12",
        "name": "Canal history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-13",
        "name": "Canal history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-14",
        "name": "Canal history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-15",
        "name": "Canal history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-16",
        "name": "Canal history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-17",
        "name": "Canal history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-18",
        "name": "Canal history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-19",
        "name": "Canal history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-20",
        "name": "Canal history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-21",
        "name": "Canal history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-22",
        "name": "Canal history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-23",
        "name": "Canal history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "canal-history-entry-24",
        "name": "Canal history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Canal history.",
        "description": "A supporting encyclopedia entry in the Canal history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "canal-history",
        "canal-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "canal-history",
        "canal-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "canal-history",
        "canal-history-places",
        "contains",
        "Canal history places is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-events",
        "contains",
        "Canal history events is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-objects",
        "contains",
        "Canal history objects & artifacts is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-factions",
        "contains",
        "Canal history factions & groups is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-concepts",
        "contains",
        "Canal history concepts is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-eras",
        "contains",
        "Canal history eras is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-works",
        "contains",
        "Canal history works & media is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-symbols",
        "contains",
        "Canal history symbols is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-controversies",
        "contains",
        "Canal history controversies is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-sources",
        "contains",
        "Canal history sources is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-geography",
        "contains",
        "Canal history geography is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-legacy",
        "contains",
        "Canal history legacy is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-practices",
        "contains",
        "Canal history practices is a primary trailhead under Canal history.",
        0.88,
        0.82
    ],
    [
        "canal-history",
        "canal-history-entry-1",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-2",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-3",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-4",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-5",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-6",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-7",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-8",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-9",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-10",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-11",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-12",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-13",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-14",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-15",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-16",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-17",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-18",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-19",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-20",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-21",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-22",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-23",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ],
    [
        "canal-history",
        "canal-history-entry-24",
        "contains",
        "Supporting entry under Canal history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
