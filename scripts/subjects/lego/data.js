/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lego",
        "name": "LEGO",
        "type": "topic",
        "short_description": "Brick systems, themes, and licensed worlds built from modular plastic canon.",
        "description": "Brick systems, themes, and licensed worlds built from modular plastic canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to LEGO so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "lego-figures",
        "name": "LEGO figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to LEGO.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring LEGO."
    },
    {
        "slug": "lego-world",
        "name": "LEGO world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame LEGO.",
        "description": "Geography, institutions, and periodization that give LEGO its encyclopedia shape."
    },
    {
        "slug": "lego-places",
        "name": "LEGO places",
        "type": "place",
        "short_description": "Locations and geographies that frame LEGO.",
        "description": "Places, regions, and built sites that give LEGO its map — where events and figures concentrate."
    },
    {
        "slug": "lego-events",
        "name": "LEGO events",
        "type": "event",
        "short_description": "Turning points and dated episodes in LEGO.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the LEGO timeline."
    },
    {
        "slug": "lego-objects",
        "name": "LEGO objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to LEGO.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through LEGO."
    },
    {
        "slug": "lego-factions",
        "name": "LEGO factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside LEGO.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in LEGO."
    },
    {
        "slug": "lego-concepts",
        "name": "LEGO concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize LEGO.",
        "description": "Keywords, doctrines, systems, and abstract forces that make LEGO readable as a lore graph."
    },
    {
        "slug": "lego-eras",
        "name": "LEGO eras",
        "type": "event",
        "short_description": "Periodization for LEGO.",
        "description": "Named eras and phases that help readers track how LEGO changes across time."
    },
    {
        "slug": "lego-works",
        "name": "LEGO works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry LEGO.",
        "description": "Primary works and adaptations through which most audiences encounter LEGO."
    },
    {
        "slug": "lego-symbols",
        "name": "LEGO symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with LEGO.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside LEGO."
    },
    {
        "slug": "lego-controversies",
        "name": "LEGO controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in LEGO.",
        "description": "Debates, rival canons, scandals, and contested facts that keep LEGO argumentative."
    },
    {
        "slug": "lego-sources",
        "name": "LEGO sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into LEGO.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify LEGO."
    },
    {
        "slug": "lego-geography",
        "name": "LEGO geography",
        "type": "place",
        "short_description": "Broader geographic framing for LEGO.",
        "description": "Regions, routes, and spatial systems that situate LEGO beyond single named places."
    },
    {
        "slug": "lego-legacy",
        "name": "LEGO legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of LEGO.",
        "description": "How LEGO continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "lego-practices",
        "name": "LEGO practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in LEGO.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in LEGO."
    },
    {
        "slug": "lego-entry-1",
        "name": "LEGO entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-2",
        "name": "LEGO entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-3",
        "name": "LEGO entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-4",
        "name": "LEGO entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-5",
        "name": "LEGO entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-6",
        "name": "LEGO entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-7",
        "name": "LEGO entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-8",
        "name": "LEGO entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-9",
        "name": "LEGO entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-10",
        "name": "LEGO entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-11",
        "name": "LEGO entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-12",
        "name": "LEGO entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-13",
        "name": "LEGO entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-14",
        "name": "LEGO entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-15",
        "name": "LEGO entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-16",
        "name": "LEGO entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-17",
        "name": "LEGO entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-18",
        "name": "LEGO entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-19",
        "name": "LEGO entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-20",
        "name": "LEGO entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-21",
        "name": "LEGO entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-22",
        "name": "LEGO entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-23",
        "name": "LEGO entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lego-entry-24",
        "name": "LEGO entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside LEGO.",
        "description": "A supporting encyclopedia entry in the LEGO subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "lego",
        "lego-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lego",
        "lego-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lego",
        "lego-places",
        "contains",
        "LEGO places is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-events",
        "contains",
        "LEGO events is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-objects",
        "contains",
        "LEGO objects & artifacts is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-factions",
        "contains",
        "LEGO factions & groups is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-concepts",
        "contains",
        "LEGO concepts is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-eras",
        "contains",
        "LEGO eras is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-works",
        "contains",
        "LEGO works & media is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-symbols",
        "contains",
        "LEGO symbols is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-controversies",
        "contains",
        "LEGO controversies is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-sources",
        "contains",
        "LEGO sources is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-geography",
        "contains",
        "LEGO geography is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-legacy",
        "contains",
        "LEGO legacy is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-practices",
        "contains",
        "LEGO practices is a primary trailhead under LEGO.",
        0.88,
        0.82
    ],
    [
        "lego",
        "lego-entry-1",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-2",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-3",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-4",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-5",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-6",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-7",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-8",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-9",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-10",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-11",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-12",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-13",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-14",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-15",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-16",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-17",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-18",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-19",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-20",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-21",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-22",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-23",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ],
    [
        "lego",
        "lego-entry-24",
        "contains",
        "Supporting entry under LEGO.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
