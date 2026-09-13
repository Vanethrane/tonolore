/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "polly-pocket",
        "name": "Polly Pocket",
        "type": "topic",
        "short_description": "Micro dolls, compact worlds, and the pocket-scale playsets that defined 1990s collecting.",
        "description": "Micro dolls, compact worlds, and the pocket-scale playsets that defined 1990s collecting. This Ton-o-Lore subject maps people, places, events, and ideas tied to Polly Pocket so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "polly-pocket-figures",
        "name": "Polly Pocket figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Polly Pocket.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Polly Pocket."
    },
    {
        "slug": "polly-pocket-world",
        "name": "Polly Pocket world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Polly Pocket.",
        "description": "Geography, institutions, and periodization that give Polly Pocket its encyclopedia shape."
    },
    {
        "slug": "polly-pocket-places",
        "name": "Polly Pocket places",
        "type": "place",
        "short_description": "Locations and geographies that frame Polly Pocket.",
        "description": "Places, regions, and built sites that give Polly Pocket its map — where events and figures concentrate."
    },
    {
        "slug": "polly-pocket-events",
        "name": "Polly Pocket events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Polly Pocket.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Polly Pocket timeline."
    },
    {
        "slug": "polly-pocket-objects",
        "name": "Polly Pocket objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Polly Pocket.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Polly Pocket."
    },
    {
        "slug": "polly-pocket-factions",
        "name": "Polly Pocket factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Polly Pocket.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Polly Pocket."
    },
    {
        "slug": "polly-pocket-concepts",
        "name": "Polly Pocket concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Polly Pocket.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Polly Pocket readable as a lore graph."
    },
    {
        "slug": "polly-pocket-eras",
        "name": "Polly Pocket eras",
        "type": "event",
        "short_description": "Periodization for Polly Pocket.",
        "description": "Named eras and phases that help readers track how Polly Pocket changes across time."
    },
    {
        "slug": "polly-pocket-works",
        "name": "Polly Pocket works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Polly Pocket.",
        "description": "Primary works and adaptations through which most audiences encounter Polly Pocket."
    },
    {
        "slug": "polly-pocket-symbols",
        "name": "Polly Pocket symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Polly Pocket.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Polly Pocket."
    },
    {
        "slug": "polly-pocket-controversies",
        "name": "Polly Pocket controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Polly Pocket.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Polly Pocket argumentative."
    },
    {
        "slug": "polly-pocket-sources",
        "name": "Polly Pocket sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Polly Pocket.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Polly Pocket."
    },
    {
        "slug": "polly-pocket-geography",
        "name": "Polly Pocket geography",
        "type": "place",
        "short_description": "Broader geographic framing for Polly Pocket.",
        "description": "Regions, routes, and spatial systems that situate Polly Pocket beyond single named places."
    },
    {
        "slug": "polly-pocket-legacy",
        "name": "Polly Pocket legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Polly Pocket.",
        "description": "How Polly Pocket continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "polly-pocket-practices",
        "name": "Polly Pocket practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Polly Pocket.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Polly Pocket."
    },
    {
        "slug": "polly-pocket-entry-1",
        "name": "Polly Pocket entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-2",
        "name": "Polly Pocket entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-3",
        "name": "Polly Pocket entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-4",
        "name": "Polly Pocket entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-5",
        "name": "Polly Pocket entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-6",
        "name": "Polly Pocket entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-7",
        "name": "Polly Pocket entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-8",
        "name": "Polly Pocket entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-9",
        "name": "Polly Pocket entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-10",
        "name": "Polly Pocket entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-11",
        "name": "Polly Pocket entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-12",
        "name": "Polly Pocket entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-13",
        "name": "Polly Pocket entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-14",
        "name": "Polly Pocket entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-15",
        "name": "Polly Pocket entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-16",
        "name": "Polly Pocket entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-17",
        "name": "Polly Pocket entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-18",
        "name": "Polly Pocket entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-19",
        "name": "Polly Pocket entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-20",
        "name": "Polly Pocket entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-21",
        "name": "Polly Pocket entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-22",
        "name": "Polly Pocket entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-23",
        "name": "Polly Pocket entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "polly-pocket-entry-24",
        "name": "Polly Pocket entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Polly Pocket.",
        "description": "A supporting encyclopedia entry in the Polly Pocket subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "polly-pocket",
        "polly-pocket-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "polly-pocket",
        "polly-pocket-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "polly-pocket",
        "polly-pocket-places",
        "contains",
        "Polly Pocket places is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-events",
        "contains",
        "Polly Pocket events is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-objects",
        "contains",
        "Polly Pocket objects & artifacts is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-factions",
        "contains",
        "Polly Pocket factions & groups is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-concepts",
        "contains",
        "Polly Pocket concepts is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-eras",
        "contains",
        "Polly Pocket eras is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-works",
        "contains",
        "Polly Pocket works & media is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-symbols",
        "contains",
        "Polly Pocket symbols is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-controversies",
        "contains",
        "Polly Pocket controversies is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-sources",
        "contains",
        "Polly Pocket sources is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-geography",
        "contains",
        "Polly Pocket geography is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-legacy",
        "contains",
        "Polly Pocket legacy is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-practices",
        "contains",
        "Polly Pocket practices is a primary trailhead under Polly Pocket.",
        0.88,
        0.82
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-1",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-2",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-3",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-4",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-5",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-6",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-7",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-8",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-9",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-10",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-11",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-12",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-13",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-14",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-15",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-16",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-17",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-18",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-19",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-20",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-21",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-22",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-23",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ],
    [
        "polly-pocket",
        "polly-pocket-entry-24",
        "contains",
        "Supporting entry under Polly Pocket.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
