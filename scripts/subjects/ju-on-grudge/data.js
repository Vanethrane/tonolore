/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ju-on-grudge",
        "name": "Ju-On / The Grudge",
        "type": "topic",
        "short_description": "Curse houses, Kayako, and the contagion haunt that defined early-2000s J-horror.",
        "description": "Curse houses, Kayako, and the contagion haunt that defined early-2000s J-horror. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ju-On / The Grudge so readers can follow long-tail connections across horror."
    },
    {
        "slug": "ju-on-grudge-figures",
        "name": "Ju-On / The Grudge figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ju-On / The Grudge.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ju-On / The Grudge."
    },
    {
        "slug": "ju-on-grudge-world",
        "name": "Ju-On / The Grudge world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ju-On / The Grudge.",
        "description": "Geography, institutions, and periodization that give Ju-On / The Grudge its encyclopedia shape."
    },
    {
        "slug": "ju-on-grudge-places",
        "name": "Ju-On / The Grudge places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ju-On / The Grudge.",
        "description": "Places, regions, and built sites that give Ju-On / The Grudge its map — where events and figures concentrate."
    },
    {
        "slug": "ju-on-grudge-events",
        "name": "Ju-On / The Grudge events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ju-On / The Grudge.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ju-On / The Grudge timeline."
    },
    {
        "slug": "ju-on-grudge-objects",
        "name": "Ju-On / The Grudge objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ju-On / The Grudge.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ju-On / The Grudge."
    },
    {
        "slug": "ju-on-grudge-factions",
        "name": "Ju-On / The Grudge factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ju-On / The Grudge.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ju-On / The Grudge."
    },
    {
        "slug": "ju-on-grudge-concepts",
        "name": "Ju-On / The Grudge concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ju-On / The Grudge.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ju-On / The Grudge readable as a lore graph."
    },
    {
        "slug": "ju-on-grudge-eras",
        "name": "Ju-On / The Grudge eras",
        "type": "event",
        "short_description": "Periodization for Ju-On / The Grudge.",
        "description": "Named eras and phases that help readers track how Ju-On / The Grudge changes across time."
    },
    {
        "slug": "ju-on-grudge-works",
        "name": "Ju-On / The Grudge works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ju-On / The Grudge.",
        "description": "Primary works and adaptations through which most audiences encounter Ju-On / The Grudge."
    },
    {
        "slug": "ju-on-grudge-symbols",
        "name": "Ju-On / The Grudge symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ju-On / The Grudge.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ju-On / The Grudge."
    },
    {
        "slug": "ju-on-grudge-controversies",
        "name": "Ju-On / The Grudge controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ju-On / The Grudge.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ju-On / The Grudge argumentative."
    },
    {
        "slug": "ju-on-grudge-sources",
        "name": "Ju-On / The Grudge sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ju-On / The Grudge.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ju-On / The Grudge."
    },
    {
        "slug": "ju-on-grudge-geography",
        "name": "Ju-On / The Grudge geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ju-On / The Grudge.",
        "description": "Regions, routes, and spatial systems that situate Ju-On / The Grudge beyond single named places."
    },
    {
        "slug": "ju-on-grudge-legacy",
        "name": "Ju-On / The Grudge legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ju-On / The Grudge.",
        "description": "How Ju-On / The Grudge continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ju-on-grudge-practices",
        "name": "Ju-On / The Grudge practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ju-On / The Grudge.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ju-On / The Grudge."
    },
    {
        "slug": "ju-on-grudge-entry-1",
        "name": "Ju-On / The Grudge entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-2",
        "name": "Ju-On / The Grudge entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-3",
        "name": "Ju-On / The Grudge entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-4",
        "name": "Ju-On / The Grudge entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-5",
        "name": "Ju-On / The Grudge entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-6",
        "name": "Ju-On / The Grudge entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-7",
        "name": "Ju-On / The Grudge entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-8",
        "name": "Ju-On / The Grudge entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-9",
        "name": "Ju-On / The Grudge entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-10",
        "name": "Ju-On / The Grudge entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-11",
        "name": "Ju-On / The Grudge entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-12",
        "name": "Ju-On / The Grudge entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-13",
        "name": "Ju-On / The Grudge entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-14",
        "name": "Ju-On / The Grudge entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-15",
        "name": "Ju-On / The Grudge entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-16",
        "name": "Ju-On / The Grudge entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-17",
        "name": "Ju-On / The Grudge entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-18",
        "name": "Ju-On / The Grudge entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-19",
        "name": "Ju-On / The Grudge entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-20",
        "name": "Ju-On / The Grudge entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-21",
        "name": "Ju-On / The Grudge entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-22",
        "name": "Ju-On / The Grudge entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-23",
        "name": "Ju-On / The Grudge entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ju-on-grudge-entry-24",
        "name": "Ju-On / The Grudge entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ju-On / The Grudge.",
        "description": "A supporting encyclopedia entry in the Ju-On / The Grudge subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ju-on-grudge",
        "ju-on-grudge-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-places",
        "contains",
        "Ju-On / The Grudge places is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-events",
        "contains",
        "Ju-On / The Grudge events is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-objects",
        "contains",
        "Ju-On / The Grudge objects & artifacts is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-factions",
        "contains",
        "Ju-On / The Grudge factions & groups is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-concepts",
        "contains",
        "Ju-On / The Grudge concepts is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-eras",
        "contains",
        "Ju-On / The Grudge eras is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-works",
        "contains",
        "Ju-On / The Grudge works & media is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-symbols",
        "contains",
        "Ju-On / The Grudge symbols is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-controversies",
        "contains",
        "Ju-On / The Grudge controversies is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-sources",
        "contains",
        "Ju-On / The Grudge sources is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-geography",
        "contains",
        "Ju-On / The Grudge geography is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-legacy",
        "contains",
        "Ju-On / The Grudge legacy is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-practices",
        "contains",
        "Ju-On / The Grudge practices is a primary trailhead under Ju-On / The Grudge.",
        0.88,
        0.82
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-1",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-2",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-3",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-4",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-5",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-6",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-7",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-8",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-9",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-10",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-11",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-12",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-13",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-14",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-15",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-16",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-17",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-18",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-19",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-20",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-21",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-22",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-23",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ],
    [
        "ju-on-grudge",
        "ju-on-grudge-entry-24",
        "contains",
        "Supporting entry under Ju-On / The Grudge.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
