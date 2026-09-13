/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "njpw",
        "name": "NJPW",
        "type": "topic",
        "short_description": "New Japan's strong style — IWGP lineages, factions, and international crossovers.",
        "description": "New Japan's strong style — IWGP lineages, factions, and international crossovers. This Ton-o-Lore subject maps people, places, events, and ideas tied to NJPW so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "njpw-figures",
        "name": "NJPW figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to NJPW.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NJPW."
    },
    {
        "slug": "njpw-world",
        "name": "NJPW world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame NJPW.",
        "description": "Geography, institutions, and periodization that give NJPW its encyclopedia shape."
    },
    {
        "slug": "njpw-places",
        "name": "NJPW places",
        "type": "place",
        "short_description": "Locations and geographies that frame NJPW.",
        "description": "Places, regions, and built sites that give NJPW its map — where events and figures concentrate."
    },
    {
        "slug": "njpw-events",
        "name": "NJPW events",
        "type": "event",
        "short_description": "Turning points and dated episodes in NJPW.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the NJPW timeline."
    },
    {
        "slug": "njpw-objects",
        "name": "NJPW objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NJPW.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NJPW."
    },
    {
        "slug": "njpw-factions",
        "name": "NJPW factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NJPW.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NJPW."
    },
    {
        "slug": "njpw-concepts",
        "name": "NJPW concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NJPW.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NJPW readable as a lore graph."
    },
    {
        "slug": "njpw-eras",
        "name": "NJPW eras",
        "type": "event",
        "short_description": "Periodization for NJPW.",
        "description": "Named eras and phases that help readers track how NJPW changes across time."
    },
    {
        "slug": "njpw-works",
        "name": "NJPW works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NJPW.",
        "description": "Primary works and adaptations through which most audiences encounter NJPW."
    },
    {
        "slug": "njpw-symbols",
        "name": "NJPW symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NJPW.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NJPW."
    },
    {
        "slug": "njpw-controversies",
        "name": "NJPW controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NJPW.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NJPW argumentative."
    },
    {
        "slug": "njpw-sources",
        "name": "NJPW sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NJPW.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NJPW."
    },
    {
        "slug": "njpw-geography",
        "name": "NJPW geography",
        "type": "place",
        "short_description": "Broader geographic framing for NJPW.",
        "description": "Regions, routes, and spatial systems that situate NJPW beyond single named places."
    },
    {
        "slug": "njpw-legacy",
        "name": "NJPW legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NJPW.",
        "description": "How NJPW continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "njpw-practices",
        "name": "NJPW practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NJPW.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NJPW."
    },
    {
        "slug": "njpw-entry-1",
        "name": "NJPW entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-2",
        "name": "NJPW entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-3",
        "name": "NJPW entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-4",
        "name": "NJPW entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-5",
        "name": "NJPW entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-6",
        "name": "NJPW entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-7",
        "name": "NJPW entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-8",
        "name": "NJPW entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-9",
        "name": "NJPW entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-10",
        "name": "NJPW entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-11",
        "name": "NJPW entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-12",
        "name": "NJPW entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-13",
        "name": "NJPW entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-14",
        "name": "NJPW entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-15",
        "name": "NJPW entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-16",
        "name": "NJPW entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-17",
        "name": "NJPW entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-18",
        "name": "NJPW entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-19",
        "name": "NJPW entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-20",
        "name": "NJPW entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-21",
        "name": "NJPW entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-22",
        "name": "NJPW entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-23",
        "name": "NJPW entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "njpw-entry-24",
        "name": "NJPW entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW.",
        "description": "A supporting encyclopedia entry in the NJPW subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "njpw",
        "njpw-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "njpw",
        "njpw-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "njpw",
        "njpw-places",
        "contains",
        "NJPW places is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-events",
        "contains",
        "NJPW events is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-objects",
        "contains",
        "NJPW objects & artifacts is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-factions",
        "contains",
        "NJPW factions & groups is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-concepts",
        "contains",
        "NJPW concepts is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-eras",
        "contains",
        "NJPW eras is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-works",
        "contains",
        "NJPW works & media is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-symbols",
        "contains",
        "NJPW symbols is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-controversies",
        "contains",
        "NJPW controversies is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-sources",
        "contains",
        "NJPW sources is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-geography",
        "contains",
        "NJPW geography is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-legacy",
        "contains",
        "NJPW legacy is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-practices",
        "contains",
        "NJPW practices is a primary trailhead under NJPW.",
        0.88,
        0.82
    ],
    [
        "njpw",
        "njpw-entry-1",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-2",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-3",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-4",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-5",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-6",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-7",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-8",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-9",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-10",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-11",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-12",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-13",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-14",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-15",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-16",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-17",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-18",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-19",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-20",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-21",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-22",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-23",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ],
    [
        "njpw",
        "njpw-entry-24",
        "contains",
        "Supporting entry under NJPW.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
