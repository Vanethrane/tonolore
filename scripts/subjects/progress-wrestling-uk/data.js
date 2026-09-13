/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "progress-wrestling-uk",
        "name": "PROGRESS Wrestling",
        "type": "topic",
        "short_description": "London indie supercards, chapter numbering, and the UK scene’s breakout promotion.",
        "description": "London indie supercards, chapter numbering, and the UK scene’s breakout promotion. This Ton-o-Lore subject maps people, places, events, and ideas tied to PROGRESS Wrestling so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "progress-wrestling-uk-figures",
        "name": "PROGRESS Wrestling figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to PROGRESS Wrestling.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring PROGRESS Wrestling."
    },
    {
        "slug": "progress-wrestling-uk-world",
        "name": "PROGRESS Wrestling world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame PROGRESS Wrestling.",
        "description": "Geography, institutions, and periodization that give PROGRESS Wrestling its encyclopedia shape."
    },
    {
        "slug": "progress-wrestling-uk-places",
        "name": "PROGRESS Wrestling places",
        "type": "place",
        "short_description": "Locations and geographies that frame PROGRESS Wrestling.",
        "description": "Places, regions, and built sites that give PROGRESS Wrestling its map — where events and figures concentrate."
    },
    {
        "slug": "progress-wrestling-uk-events",
        "name": "PROGRESS Wrestling events",
        "type": "event",
        "short_description": "Turning points and dated episodes in PROGRESS Wrestling.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the PROGRESS Wrestling timeline."
    },
    {
        "slug": "progress-wrestling-uk-objects",
        "name": "PROGRESS Wrestling objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to PROGRESS Wrestling.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through PROGRESS Wrestling."
    },
    {
        "slug": "progress-wrestling-uk-factions",
        "name": "PROGRESS Wrestling factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside PROGRESS Wrestling.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in PROGRESS Wrestling."
    },
    {
        "slug": "progress-wrestling-uk-concepts",
        "name": "PROGRESS Wrestling concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize PROGRESS Wrestling.",
        "description": "Keywords, doctrines, systems, and abstract forces that make PROGRESS Wrestling readable as a lore graph."
    },
    {
        "slug": "progress-wrestling-uk-eras",
        "name": "PROGRESS Wrestling eras",
        "type": "event",
        "short_description": "Periodization for PROGRESS Wrestling.",
        "description": "Named eras and phases that help readers track how PROGRESS Wrestling changes across time."
    },
    {
        "slug": "progress-wrestling-uk-works",
        "name": "PROGRESS Wrestling works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry PROGRESS Wrestling.",
        "description": "Primary works and adaptations through which most audiences encounter PROGRESS Wrestling."
    },
    {
        "slug": "progress-wrestling-uk-symbols",
        "name": "PROGRESS Wrestling symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with PROGRESS Wrestling.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside PROGRESS Wrestling."
    },
    {
        "slug": "progress-wrestling-uk-controversies",
        "name": "PROGRESS Wrestling controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in PROGRESS Wrestling.",
        "description": "Debates, rival canons, scandals, and contested facts that keep PROGRESS Wrestling argumentative."
    },
    {
        "slug": "progress-wrestling-uk-sources",
        "name": "PROGRESS Wrestling sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into PROGRESS Wrestling.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify PROGRESS Wrestling."
    },
    {
        "slug": "progress-wrestling-uk-geography",
        "name": "PROGRESS Wrestling geography",
        "type": "place",
        "short_description": "Broader geographic framing for PROGRESS Wrestling.",
        "description": "Regions, routes, and spatial systems that situate PROGRESS Wrestling beyond single named places."
    },
    {
        "slug": "progress-wrestling-uk-legacy",
        "name": "PROGRESS Wrestling legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of PROGRESS Wrestling.",
        "description": "How PROGRESS Wrestling continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "progress-wrestling-uk-practices",
        "name": "PROGRESS Wrestling practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in PROGRESS Wrestling.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in PROGRESS Wrestling."
    },
    {
        "slug": "progress-wrestling-uk-entry-1",
        "name": "PROGRESS Wrestling entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-2",
        "name": "PROGRESS Wrestling entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-3",
        "name": "PROGRESS Wrestling entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-4",
        "name": "PROGRESS Wrestling entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-5",
        "name": "PROGRESS Wrestling entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-6",
        "name": "PROGRESS Wrestling entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-7",
        "name": "PROGRESS Wrestling entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-8",
        "name": "PROGRESS Wrestling entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-9",
        "name": "PROGRESS Wrestling entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-10",
        "name": "PROGRESS Wrestling entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-11",
        "name": "PROGRESS Wrestling entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-12",
        "name": "PROGRESS Wrestling entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-13",
        "name": "PROGRESS Wrestling entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-14",
        "name": "PROGRESS Wrestling entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-15",
        "name": "PROGRESS Wrestling entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-16",
        "name": "PROGRESS Wrestling entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-17",
        "name": "PROGRESS Wrestling entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-18",
        "name": "PROGRESS Wrestling entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-19",
        "name": "PROGRESS Wrestling entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-20",
        "name": "PROGRESS Wrestling entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-21",
        "name": "PROGRESS Wrestling entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-22",
        "name": "PROGRESS Wrestling entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-23",
        "name": "PROGRESS Wrestling entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "progress-wrestling-uk-entry-24",
        "name": "PROGRESS Wrestling entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside PROGRESS Wrestling.",
        "description": "A supporting encyclopedia entry in the PROGRESS Wrestling subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-places",
        "contains",
        "PROGRESS Wrestling places is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-events",
        "contains",
        "PROGRESS Wrestling events is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-objects",
        "contains",
        "PROGRESS Wrestling objects & artifacts is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-factions",
        "contains",
        "PROGRESS Wrestling factions & groups is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-concepts",
        "contains",
        "PROGRESS Wrestling concepts is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-eras",
        "contains",
        "PROGRESS Wrestling eras is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-works",
        "contains",
        "PROGRESS Wrestling works & media is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-symbols",
        "contains",
        "PROGRESS Wrestling symbols is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-controversies",
        "contains",
        "PROGRESS Wrestling controversies is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-sources",
        "contains",
        "PROGRESS Wrestling sources is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-geography",
        "contains",
        "PROGRESS Wrestling geography is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-legacy",
        "contains",
        "PROGRESS Wrestling legacy is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-practices",
        "contains",
        "PROGRESS Wrestling practices is a primary trailhead under PROGRESS Wrestling.",
        0.88,
        0.82
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-1",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-2",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-3",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-4",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-5",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-6",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-7",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-8",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-9",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-10",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-11",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-12",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-13",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-14",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-15",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-16",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-17",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-18",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-19",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-20",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-21",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-22",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-23",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ],
    [
        "progress-wrestling-uk",
        "progress-wrestling-uk-entry-24",
        "contains",
        "Supporting entry under PROGRESS Wrestling.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
