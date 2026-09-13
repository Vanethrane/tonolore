/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lucha-underground",
        "name": "Lucha Underground",
        "type": "topic",
        "short_description": "Temple mythology, cinematic lucha, and the cult TV promotion with supernatural booking.",
        "description": "Temple mythology, cinematic lucha, and the cult TV promotion with supernatural booking. This Ton-o-Lore subject maps people, places, events, and ideas tied to Lucha Underground so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "lucha-underground-figures",
        "name": "Lucha Underground figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Lucha Underground.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Lucha Underground."
    },
    {
        "slug": "lucha-underground-world",
        "name": "Lucha Underground world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Lucha Underground.",
        "description": "Geography, institutions, and periodization that give Lucha Underground its encyclopedia shape."
    },
    {
        "slug": "lucha-underground-places",
        "name": "Lucha Underground places",
        "type": "place",
        "short_description": "Locations and geographies that frame Lucha Underground.",
        "description": "Places, regions, and built sites that give Lucha Underground its map — where events and figures concentrate."
    },
    {
        "slug": "lucha-underground-events",
        "name": "Lucha Underground events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Lucha Underground.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Lucha Underground timeline."
    },
    {
        "slug": "lucha-underground-objects",
        "name": "Lucha Underground objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Lucha Underground.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Lucha Underground."
    },
    {
        "slug": "lucha-underground-factions",
        "name": "Lucha Underground factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Lucha Underground.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Lucha Underground."
    },
    {
        "slug": "lucha-underground-concepts",
        "name": "Lucha Underground concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Lucha Underground.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Lucha Underground readable as a lore graph."
    },
    {
        "slug": "lucha-underground-eras",
        "name": "Lucha Underground eras",
        "type": "event",
        "short_description": "Periodization for Lucha Underground.",
        "description": "Named eras and phases that help readers track how Lucha Underground changes across time."
    },
    {
        "slug": "lucha-underground-works",
        "name": "Lucha Underground works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Lucha Underground.",
        "description": "Primary works and adaptations through which most audiences encounter Lucha Underground."
    },
    {
        "slug": "lucha-underground-symbols",
        "name": "Lucha Underground symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Lucha Underground.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Lucha Underground."
    },
    {
        "slug": "lucha-underground-controversies",
        "name": "Lucha Underground controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Lucha Underground.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Lucha Underground argumentative."
    },
    {
        "slug": "lucha-underground-sources",
        "name": "Lucha Underground sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Lucha Underground.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Lucha Underground."
    },
    {
        "slug": "lucha-underground-geography",
        "name": "Lucha Underground geography",
        "type": "place",
        "short_description": "Broader geographic framing for Lucha Underground.",
        "description": "Regions, routes, and spatial systems that situate Lucha Underground beyond single named places."
    },
    {
        "slug": "lucha-underground-legacy",
        "name": "Lucha Underground legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Lucha Underground.",
        "description": "How Lucha Underground continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "lucha-underground-practices",
        "name": "Lucha Underground practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Lucha Underground.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Lucha Underground."
    },
    {
        "slug": "lucha-underground-entry-1",
        "name": "Lucha Underground entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-2",
        "name": "Lucha Underground entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-3",
        "name": "Lucha Underground entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-4",
        "name": "Lucha Underground entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-5",
        "name": "Lucha Underground entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-6",
        "name": "Lucha Underground entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-7",
        "name": "Lucha Underground entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-8",
        "name": "Lucha Underground entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-9",
        "name": "Lucha Underground entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-10",
        "name": "Lucha Underground entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-11",
        "name": "Lucha Underground entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-12",
        "name": "Lucha Underground entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-13",
        "name": "Lucha Underground entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-14",
        "name": "Lucha Underground entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-15",
        "name": "Lucha Underground entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-16",
        "name": "Lucha Underground entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-17",
        "name": "Lucha Underground entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-18",
        "name": "Lucha Underground entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-19",
        "name": "Lucha Underground entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-20",
        "name": "Lucha Underground entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-21",
        "name": "Lucha Underground entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-22",
        "name": "Lucha Underground entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-23",
        "name": "Lucha Underground entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lucha-underground-entry-24",
        "name": "Lucha Underground entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lucha Underground.",
        "description": "A supporting encyclopedia entry in the Lucha Underground subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "lucha-underground",
        "lucha-underground-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lucha-underground",
        "lucha-underground-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lucha-underground",
        "lucha-underground-places",
        "contains",
        "Lucha Underground places is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-events",
        "contains",
        "Lucha Underground events is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-objects",
        "contains",
        "Lucha Underground objects & artifacts is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-factions",
        "contains",
        "Lucha Underground factions & groups is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-concepts",
        "contains",
        "Lucha Underground concepts is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-eras",
        "contains",
        "Lucha Underground eras is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-works",
        "contains",
        "Lucha Underground works & media is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-symbols",
        "contains",
        "Lucha Underground symbols is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-controversies",
        "contains",
        "Lucha Underground controversies is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-sources",
        "contains",
        "Lucha Underground sources is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-geography",
        "contains",
        "Lucha Underground geography is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-legacy",
        "contains",
        "Lucha Underground legacy is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-practices",
        "contains",
        "Lucha Underground practices is a primary trailhead under Lucha Underground.",
        0.88,
        0.82
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-1",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-2",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-3",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-4",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-5",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-6",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-7",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-8",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-9",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-10",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-11",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-12",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-13",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-14",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-15",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-16",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-17",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-18",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-19",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-20",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-21",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-22",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-23",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ],
    [
        "lucha-underground",
        "lucha-underground-entry-24",
        "contains",
        "Supporting entry under Lucha Underground.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
