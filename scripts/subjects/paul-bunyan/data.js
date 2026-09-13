/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "paul-bunyan",
        "name": "Paul Bunyan",
        "type": "topic",
        "short_description": "Giant lumberjack, Babe the Blue Ox, and American tall-tale industrial folklore.",
        "description": "Giant lumberjack, Babe the Blue Ox, and American tall-tale industrial folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Paul Bunyan so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "paul-bunyan-figures",
        "name": "Paul Bunyan figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Paul Bunyan.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Paul Bunyan."
    },
    {
        "slug": "paul-bunyan-world",
        "name": "Paul Bunyan world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Paul Bunyan.",
        "description": "Geography, institutions, and periodization that give Paul Bunyan its encyclopedia shape."
    },
    {
        "slug": "paul-bunyan-places",
        "name": "Paul Bunyan places",
        "type": "place",
        "short_description": "Locations and geographies that frame Paul Bunyan.",
        "description": "Places, regions, and built sites that give Paul Bunyan its map — where events and figures concentrate."
    },
    {
        "slug": "paul-bunyan-events",
        "name": "Paul Bunyan events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Paul Bunyan.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Paul Bunyan timeline."
    },
    {
        "slug": "paul-bunyan-objects",
        "name": "Paul Bunyan objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Paul Bunyan.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Paul Bunyan."
    },
    {
        "slug": "paul-bunyan-factions",
        "name": "Paul Bunyan factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Paul Bunyan.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Paul Bunyan."
    },
    {
        "slug": "paul-bunyan-concepts",
        "name": "Paul Bunyan concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Paul Bunyan.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Paul Bunyan readable as a lore graph."
    },
    {
        "slug": "paul-bunyan-eras",
        "name": "Paul Bunyan eras",
        "type": "event",
        "short_description": "Periodization for Paul Bunyan.",
        "description": "Named eras and phases that help readers track how Paul Bunyan changes across time."
    },
    {
        "slug": "paul-bunyan-works",
        "name": "Paul Bunyan works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Paul Bunyan.",
        "description": "Primary works and adaptations through which most audiences encounter Paul Bunyan."
    },
    {
        "slug": "paul-bunyan-symbols",
        "name": "Paul Bunyan symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Paul Bunyan.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Paul Bunyan."
    },
    {
        "slug": "paul-bunyan-controversies",
        "name": "Paul Bunyan controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Paul Bunyan.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Paul Bunyan argumentative."
    },
    {
        "slug": "paul-bunyan-sources",
        "name": "Paul Bunyan sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Paul Bunyan.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Paul Bunyan."
    },
    {
        "slug": "paul-bunyan-geography",
        "name": "Paul Bunyan geography",
        "type": "place",
        "short_description": "Broader geographic framing for Paul Bunyan.",
        "description": "Regions, routes, and spatial systems that situate Paul Bunyan beyond single named places."
    },
    {
        "slug": "paul-bunyan-legacy",
        "name": "Paul Bunyan legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Paul Bunyan.",
        "description": "How Paul Bunyan continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "paul-bunyan-practices",
        "name": "Paul Bunyan practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Paul Bunyan.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Paul Bunyan."
    },
    {
        "slug": "paul-bunyan-entry-1",
        "name": "Paul Bunyan entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-2",
        "name": "Paul Bunyan entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-3",
        "name": "Paul Bunyan entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-4",
        "name": "Paul Bunyan entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-5",
        "name": "Paul Bunyan entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-6",
        "name": "Paul Bunyan entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-7",
        "name": "Paul Bunyan entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-8",
        "name": "Paul Bunyan entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-9",
        "name": "Paul Bunyan entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-10",
        "name": "Paul Bunyan entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-11",
        "name": "Paul Bunyan entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-12",
        "name": "Paul Bunyan entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-13",
        "name": "Paul Bunyan entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-14",
        "name": "Paul Bunyan entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-15",
        "name": "Paul Bunyan entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-16",
        "name": "Paul Bunyan entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-17",
        "name": "Paul Bunyan entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-18",
        "name": "Paul Bunyan entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-19",
        "name": "Paul Bunyan entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-20",
        "name": "Paul Bunyan entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-21",
        "name": "Paul Bunyan entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-22",
        "name": "Paul Bunyan entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-23",
        "name": "Paul Bunyan entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paul-bunyan-entry-24",
        "name": "Paul Bunyan entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paul Bunyan.",
        "description": "A supporting encyclopedia entry in the Paul Bunyan subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "paul-bunyan",
        "paul-bunyan-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "paul-bunyan",
        "paul-bunyan-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "paul-bunyan",
        "paul-bunyan-places",
        "contains",
        "Paul Bunyan places is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-events",
        "contains",
        "Paul Bunyan events is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-objects",
        "contains",
        "Paul Bunyan objects & artifacts is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-factions",
        "contains",
        "Paul Bunyan factions & groups is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-concepts",
        "contains",
        "Paul Bunyan concepts is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-eras",
        "contains",
        "Paul Bunyan eras is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-works",
        "contains",
        "Paul Bunyan works & media is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-symbols",
        "contains",
        "Paul Bunyan symbols is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-controversies",
        "contains",
        "Paul Bunyan controversies is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-sources",
        "contains",
        "Paul Bunyan sources is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-geography",
        "contains",
        "Paul Bunyan geography is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-legacy",
        "contains",
        "Paul Bunyan legacy is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-practices",
        "contains",
        "Paul Bunyan practices is a primary trailhead under Paul Bunyan.",
        0.88,
        0.82
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-1",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-2",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-3",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-4",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-5",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-6",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-7",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-8",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-9",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-10",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-11",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-12",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-13",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-14",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-15",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-16",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-17",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-18",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-19",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-20",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-21",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-22",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-23",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ],
    [
        "paul-bunyan",
        "paul-bunyan-entry-24",
        "contains",
        "Supporting entry under Paul Bunyan.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
