/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cmll-wrestling",
        "name": "CMLL",
        "type": "topic",
        "short_description": "Mexico City arenas, rudos and técnicos, and the oldest active lucha libre promotion.",
        "description": "Mexico City arenas, rudos and técnicos, and the oldest active lucha libre promotion. This Ton-o-Lore subject maps people, places, events, and ideas tied to CMLL so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "cmll-wrestling-figures",
        "name": "CMLL figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to CMLL.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring CMLL."
    },
    {
        "slug": "cmll-wrestling-world",
        "name": "CMLL world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame CMLL.",
        "description": "Geography, institutions, and periodization that give CMLL its encyclopedia shape."
    },
    {
        "slug": "cmll-wrestling-places",
        "name": "CMLL places",
        "type": "place",
        "short_description": "Locations and geographies that frame CMLL.",
        "description": "Places, regions, and built sites that give CMLL its map — where events and figures concentrate."
    },
    {
        "slug": "cmll-wrestling-events",
        "name": "CMLL events",
        "type": "event",
        "short_description": "Turning points and dated episodes in CMLL.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the CMLL timeline."
    },
    {
        "slug": "cmll-wrestling-objects",
        "name": "CMLL objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to CMLL.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through CMLL."
    },
    {
        "slug": "cmll-wrestling-factions",
        "name": "CMLL factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside CMLL.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in CMLL."
    },
    {
        "slug": "cmll-wrestling-concepts",
        "name": "CMLL concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize CMLL.",
        "description": "Keywords, doctrines, systems, and abstract forces that make CMLL readable as a lore graph."
    },
    {
        "slug": "cmll-wrestling-eras",
        "name": "CMLL eras",
        "type": "event",
        "short_description": "Periodization for CMLL.",
        "description": "Named eras and phases that help readers track how CMLL changes across time."
    },
    {
        "slug": "cmll-wrestling-works",
        "name": "CMLL works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry CMLL.",
        "description": "Primary works and adaptations through which most audiences encounter CMLL."
    },
    {
        "slug": "cmll-wrestling-symbols",
        "name": "CMLL symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with CMLL.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside CMLL."
    },
    {
        "slug": "cmll-wrestling-controversies",
        "name": "CMLL controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in CMLL.",
        "description": "Debates, rival canons, scandals, and contested facts that keep CMLL argumentative."
    },
    {
        "slug": "cmll-wrestling-sources",
        "name": "CMLL sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into CMLL.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify CMLL."
    },
    {
        "slug": "cmll-wrestling-geography",
        "name": "CMLL geography",
        "type": "place",
        "short_description": "Broader geographic framing for CMLL.",
        "description": "Regions, routes, and spatial systems that situate CMLL beyond single named places."
    },
    {
        "slug": "cmll-wrestling-legacy",
        "name": "CMLL legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of CMLL.",
        "description": "How CMLL continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cmll-wrestling-practices",
        "name": "CMLL practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in CMLL.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in CMLL."
    },
    {
        "slug": "cmll-wrestling-entry-1",
        "name": "CMLL entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-2",
        "name": "CMLL entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-3",
        "name": "CMLL entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-4",
        "name": "CMLL entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-5",
        "name": "CMLL entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-6",
        "name": "CMLL entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-7",
        "name": "CMLL entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-8",
        "name": "CMLL entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-9",
        "name": "CMLL entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-10",
        "name": "CMLL entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-11",
        "name": "CMLL entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-12",
        "name": "CMLL entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-13",
        "name": "CMLL entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-14",
        "name": "CMLL entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-15",
        "name": "CMLL entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-16",
        "name": "CMLL entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-17",
        "name": "CMLL entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-18",
        "name": "CMLL entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-19",
        "name": "CMLL entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-20",
        "name": "CMLL entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-21",
        "name": "CMLL entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-22",
        "name": "CMLL entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-23",
        "name": "CMLL entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cmll-wrestling-entry-24",
        "name": "CMLL entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside CMLL.",
        "description": "A supporting encyclopedia entry in the CMLL subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cmll-wrestling",
        "cmll-wrestling-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-places",
        "contains",
        "CMLL places is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-events",
        "contains",
        "CMLL events is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-objects",
        "contains",
        "CMLL objects & artifacts is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-factions",
        "contains",
        "CMLL factions & groups is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-concepts",
        "contains",
        "CMLL concepts is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-eras",
        "contains",
        "CMLL eras is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-works",
        "contains",
        "CMLL works & media is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-symbols",
        "contains",
        "CMLL symbols is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-controversies",
        "contains",
        "CMLL controversies is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-sources",
        "contains",
        "CMLL sources is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-geography",
        "contains",
        "CMLL geography is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-legacy",
        "contains",
        "CMLL legacy is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-practices",
        "contains",
        "CMLL practices is a primary trailhead under CMLL.",
        0.88,
        0.82
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-1",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-2",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-3",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-4",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-5",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-6",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-7",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-8",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-9",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-10",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-11",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-12",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-13",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-14",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-15",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-16",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-17",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-18",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-19",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-20",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-21",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-22",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-23",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ],
    [
        "cmll-wrestling",
        "cmll-wrestling-entry-24",
        "contains",
        "Supporting entry under CMLL.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
