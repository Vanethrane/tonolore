/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aaa-wrestling",
        "name": "AAA",
        "type": "topic",
        "short_description": "Triplemanías, high-spot lucha, and the flashier rival to CMLL’s classical style.",
        "description": "Triplemanías, high-spot lucha, and the flashier rival to CMLL’s classical style. This Ton-o-Lore subject maps people, places, events, and ideas tied to AAA so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "aaa-wrestling-figures",
        "name": "AAA figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to AAA.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring AAA."
    },
    {
        "slug": "aaa-wrestling-world",
        "name": "AAA world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame AAA.",
        "description": "Geography, institutions, and periodization that give AAA its encyclopedia shape."
    },
    {
        "slug": "aaa-wrestling-places",
        "name": "AAA places",
        "type": "place",
        "short_description": "Locations and geographies that frame AAA.",
        "description": "Places, regions, and built sites that give AAA its map — where events and figures concentrate."
    },
    {
        "slug": "aaa-wrestling-events",
        "name": "AAA events",
        "type": "event",
        "short_description": "Turning points and dated episodes in AAA.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the AAA timeline."
    },
    {
        "slug": "aaa-wrestling-objects",
        "name": "AAA objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to AAA.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through AAA."
    },
    {
        "slug": "aaa-wrestling-factions",
        "name": "AAA factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside AAA.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in AAA."
    },
    {
        "slug": "aaa-wrestling-concepts",
        "name": "AAA concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize AAA.",
        "description": "Keywords, doctrines, systems, and abstract forces that make AAA readable as a lore graph."
    },
    {
        "slug": "aaa-wrestling-eras",
        "name": "AAA eras",
        "type": "event",
        "short_description": "Periodization for AAA.",
        "description": "Named eras and phases that help readers track how AAA changes across time."
    },
    {
        "slug": "aaa-wrestling-works",
        "name": "AAA works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry AAA.",
        "description": "Primary works and adaptations through which most audiences encounter AAA."
    },
    {
        "slug": "aaa-wrestling-symbols",
        "name": "AAA symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with AAA.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside AAA."
    },
    {
        "slug": "aaa-wrestling-controversies",
        "name": "AAA controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in AAA.",
        "description": "Debates, rival canons, scandals, and contested facts that keep AAA argumentative."
    },
    {
        "slug": "aaa-wrestling-sources",
        "name": "AAA sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into AAA.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify AAA."
    },
    {
        "slug": "aaa-wrestling-geography",
        "name": "AAA geography",
        "type": "place",
        "short_description": "Broader geographic framing for AAA.",
        "description": "Regions, routes, and spatial systems that situate AAA beyond single named places."
    },
    {
        "slug": "aaa-wrestling-legacy",
        "name": "AAA legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of AAA.",
        "description": "How AAA continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aaa-wrestling-practices",
        "name": "AAA practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in AAA.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in AAA."
    },
    {
        "slug": "aaa-wrestling-entry-1",
        "name": "AAA entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-2",
        "name": "AAA entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-3",
        "name": "AAA entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-4",
        "name": "AAA entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-5",
        "name": "AAA entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-6",
        "name": "AAA entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-7",
        "name": "AAA entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-8",
        "name": "AAA entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-9",
        "name": "AAA entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-10",
        "name": "AAA entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-11",
        "name": "AAA entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-12",
        "name": "AAA entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-13",
        "name": "AAA entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-14",
        "name": "AAA entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-15",
        "name": "AAA entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-16",
        "name": "AAA entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-17",
        "name": "AAA entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-18",
        "name": "AAA entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-19",
        "name": "AAA entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-20",
        "name": "AAA entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-21",
        "name": "AAA entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-22",
        "name": "AAA entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-23",
        "name": "AAA entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aaa-wrestling-entry-24",
        "name": "AAA entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside AAA.",
        "description": "A supporting encyclopedia entry in the AAA subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aaa-wrestling",
        "aaa-wrestling-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-places",
        "contains",
        "AAA places is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-events",
        "contains",
        "AAA events is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-objects",
        "contains",
        "AAA objects & artifacts is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-factions",
        "contains",
        "AAA factions & groups is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-concepts",
        "contains",
        "AAA concepts is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-eras",
        "contains",
        "AAA eras is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-works",
        "contains",
        "AAA works & media is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-symbols",
        "contains",
        "AAA symbols is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-controversies",
        "contains",
        "AAA controversies is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-sources",
        "contains",
        "AAA sources is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-geography",
        "contains",
        "AAA geography is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-legacy",
        "contains",
        "AAA legacy is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-practices",
        "contains",
        "AAA practices is a primary trailhead under AAA.",
        0.88,
        0.82
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-1",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-2",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-3",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-4",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-5",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-6",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-7",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-8",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-9",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-10",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-11",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-12",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-13",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-14",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-15",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-16",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-17",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-18",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-19",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-20",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-21",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-22",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-23",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ],
    [
        "aaa-wrestling",
        "aaa-wrestling-entry-24",
        "contains",
        "Supporting entry under AAA.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
