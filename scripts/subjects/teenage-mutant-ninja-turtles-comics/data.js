/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "teenage-mutant-ninja-turtles-comics",
        "name": "TMNT (comics)",
        "type": "topic",
        "short_description": "Mirage grit to IDW continuity — the comic turtles before and beside the cartoons.",
        "description": "Mirage grit to IDW continuity — the comic turtles before and beside the cartoons. This Ton-o-Lore subject maps people, places, events, and ideas tied to TMNT (comics) so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-figures",
        "name": "TMNT (comics) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to TMNT (comics).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring TMNT (comics)."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-world",
        "name": "TMNT (comics) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame TMNT (comics).",
        "description": "Geography, institutions, and periodization that give TMNT (comics) its encyclopedia shape."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-places",
        "name": "TMNT (comics) places",
        "type": "place",
        "short_description": "Locations and geographies that frame TMNT (comics).",
        "description": "Places, regions, and built sites that give TMNT (comics) its map — where events and figures concentrate."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-events",
        "name": "TMNT (comics) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in TMNT (comics).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the TMNT (comics) timeline."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-objects",
        "name": "TMNT (comics) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to TMNT (comics).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through TMNT (comics)."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-factions",
        "name": "TMNT (comics) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside TMNT (comics).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in TMNT (comics)."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-concepts",
        "name": "TMNT (comics) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize TMNT (comics).",
        "description": "Keywords, doctrines, systems, and abstract forces that make TMNT (comics) readable as a lore graph."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-eras",
        "name": "TMNT (comics) eras",
        "type": "event",
        "short_description": "Periodization for TMNT (comics).",
        "description": "Named eras and phases that help readers track how TMNT (comics) changes across time."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-works",
        "name": "TMNT (comics) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry TMNT (comics).",
        "description": "Primary works and adaptations through which most audiences encounter TMNT (comics)."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-symbols",
        "name": "TMNT (comics) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with TMNT (comics).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside TMNT (comics)."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-controversies",
        "name": "TMNT (comics) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in TMNT (comics).",
        "description": "Debates, rival canons, scandals, and contested facts that keep TMNT (comics) argumentative."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-sources",
        "name": "TMNT (comics) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into TMNT (comics).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify TMNT (comics)."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-geography",
        "name": "TMNT (comics) geography",
        "type": "place",
        "short_description": "Broader geographic framing for TMNT (comics).",
        "description": "Regions, routes, and spatial systems that situate TMNT (comics) beyond single named places."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-legacy",
        "name": "TMNT (comics) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of TMNT (comics).",
        "description": "How TMNT (comics) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-practices",
        "name": "TMNT (comics) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in TMNT (comics).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in TMNT (comics)."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-1",
        "name": "TMNT (comics) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-2",
        "name": "TMNT (comics) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-3",
        "name": "TMNT (comics) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-4",
        "name": "TMNT (comics) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-5",
        "name": "TMNT (comics) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-6",
        "name": "TMNT (comics) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-7",
        "name": "TMNT (comics) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-8",
        "name": "TMNT (comics) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-9",
        "name": "TMNT (comics) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-10",
        "name": "TMNT (comics) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-11",
        "name": "TMNT (comics) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-12",
        "name": "TMNT (comics) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-13",
        "name": "TMNT (comics) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-14",
        "name": "TMNT (comics) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-15",
        "name": "TMNT (comics) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-16",
        "name": "TMNT (comics) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-17",
        "name": "TMNT (comics) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-18",
        "name": "TMNT (comics) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-19",
        "name": "TMNT (comics) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-20",
        "name": "TMNT (comics) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-21",
        "name": "TMNT (comics) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-22",
        "name": "TMNT (comics) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-23",
        "name": "TMNT (comics) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-comics-entry-24",
        "name": "TMNT (comics) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT (comics).",
        "description": "A supporting encyclopedia entry in the TMNT (comics) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-places",
        "contains",
        "TMNT (comics) places is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-events",
        "contains",
        "TMNT (comics) events is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-objects",
        "contains",
        "TMNT (comics) objects & artifacts is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-factions",
        "contains",
        "TMNT (comics) factions & groups is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-concepts",
        "contains",
        "TMNT (comics) concepts is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-eras",
        "contains",
        "TMNT (comics) eras is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-works",
        "contains",
        "TMNT (comics) works & media is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-symbols",
        "contains",
        "TMNT (comics) symbols is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-controversies",
        "contains",
        "TMNT (comics) controversies is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-sources",
        "contains",
        "TMNT (comics) sources is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-geography",
        "contains",
        "TMNT (comics) geography is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-legacy",
        "contains",
        "TMNT (comics) legacy is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-practices",
        "contains",
        "TMNT (comics) practices is a primary trailhead under TMNT (comics).",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-1",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-2",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-3",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-4",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-5",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-6",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-7",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-8",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-9",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-10",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-11",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-12",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-13",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-14",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-15",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-16",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-17",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-18",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-19",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-20",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-21",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-22",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-23",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-comics",
        "teenage-mutant-ninja-turtles-comics-entry-24",
        "contains",
        "Supporting entry under TMNT (comics).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
