/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "all-japan-pro-wrestling",
        "name": "All Japan Pro Wrestling",
        "type": "topic",
        "short_description": "King’s Road style, Triple Crown, and the heavyweight tradition of Japanese men’s wrestling.",
        "description": "King’s Road style, Triple Crown, and the heavyweight tradition of Japanese men’s wrestling. This Ton-o-Lore subject maps people, places, events, and ideas tied to All Japan Pro Wrestling so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-figures",
        "name": "All Japan Pro Wrestling figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to All Japan Pro Wrestling.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring All Japan Pro Wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-world",
        "name": "All Japan Pro Wrestling world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame All Japan Pro Wrestling.",
        "description": "Geography, institutions, and periodization that give All Japan Pro Wrestling its encyclopedia shape."
    },
    {
        "slug": "all-japan-pro-wrestling-places",
        "name": "All Japan Pro Wrestling places",
        "type": "place",
        "short_description": "Locations and geographies that frame All Japan Pro Wrestling.",
        "description": "Places, regions, and built sites that give All Japan Pro Wrestling its map — where events and figures concentrate."
    },
    {
        "slug": "all-japan-pro-wrestling-events",
        "name": "All Japan Pro Wrestling events",
        "type": "event",
        "short_description": "Turning points and dated episodes in All Japan Pro Wrestling.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the All Japan Pro Wrestling timeline."
    },
    {
        "slug": "all-japan-pro-wrestling-objects",
        "name": "All Japan Pro Wrestling objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to All Japan Pro Wrestling.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through All Japan Pro Wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-factions",
        "name": "All Japan Pro Wrestling factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside All Japan Pro Wrestling.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in All Japan Pro Wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-concepts",
        "name": "All Japan Pro Wrestling concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize All Japan Pro Wrestling.",
        "description": "Keywords, doctrines, systems, and abstract forces that make All Japan Pro Wrestling readable as a lore graph."
    },
    {
        "slug": "all-japan-pro-wrestling-eras",
        "name": "All Japan Pro Wrestling eras",
        "type": "event",
        "short_description": "Periodization for All Japan Pro Wrestling.",
        "description": "Named eras and phases that help readers track how All Japan Pro Wrestling changes across time."
    },
    {
        "slug": "all-japan-pro-wrestling-works",
        "name": "All Japan Pro Wrestling works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry All Japan Pro Wrestling.",
        "description": "Primary works and adaptations through which most audiences encounter All Japan Pro Wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-symbols",
        "name": "All Japan Pro Wrestling symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with All Japan Pro Wrestling.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside All Japan Pro Wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-controversies",
        "name": "All Japan Pro Wrestling controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in All Japan Pro Wrestling.",
        "description": "Debates, rival canons, scandals, and contested facts that keep All Japan Pro Wrestling argumentative."
    },
    {
        "slug": "all-japan-pro-wrestling-sources",
        "name": "All Japan Pro Wrestling sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into All Japan Pro Wrestling.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify All Japan Pro Wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-geography",
        "name": "All Japan Pro Wrestling geography",
        "type": "place",
        "short_description": "Broader geographic framing for All Japan Pro Wrestling.",
        "description": "Regions, routes, and spatial systems that situate All Japan Pro Wrestling beyond single named places."
    },
    {
        "slug": "all-japan-pro-wrestling-legacy",
        "name": "All Japan Pro Wrestling legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of All Japan Pro Wrestling.",
        "description": "How All Japan Pro Wrestling continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "all-japan-pro-wrestling-practices",
        "name": "All Japan Pro Wrestling practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in All Japan Pro Wrestling.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in All Japan Pro Wrestling."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-1",
        "name": "All Japan Pro Wrestling entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-2",
        "name": "All Japan Pro Wrestling entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-3",
        "name": "All Japan Pro Wrestling entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-4",
        "name": "All Japan Pro Wrestling entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-5",
        "name": "All Japan Pro Wrestling entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-6",
        "name": "All Japan Pro Wrestling entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-7",
        "name": "All Japan Pro Wrestling entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-8",
        "name": "All Japan Pro Wrestling entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-9",
        "name": "All Japan Pro Wrestling entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-10",
        "name": "All Japan Pro Wrestling entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-11",
        "name": "All Japan Pro Wrestling entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-12",
        "name": "All Japan Pro Wrestling entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-13",
        "name": "All Japan Pro Wrestling entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-14",
        "name": "All Japan Pro Wrestling entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-15",
        "name": "All Japan Pro Wrestling entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-16",
        "name": "All Japan Pro Wrestling entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-17",
        "name": "All Japan Pro Wrestling entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-18",
        "name": "All Japan Pro Wrestling entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-19",
        "name": "All Japan Pro Wrestling entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-20",
        "name": "All Japan Pro Wrestling entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-21",
        "name": "All Japan Pro Wrestling entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-22",
        "name": "All Japan Pro Wrestling entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-23",
        "name": "All Japan Pro Wrestling entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "all-japan-pro-wrestling-entry-24",
        "name": "All Japan Pro Wrestling entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside All Japan Pro Wrestling.",
        "description": "A supporting encyclopedia entry in the All Japan Pro Wrestling subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-places",
        "contains",
        "All Japan Pro Wrestling places is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-events",
        "contains",
        "All Japan Pro Wrestling events is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-objects",
        "contains",
        "All Japan Pro Wrestling objects & artifacts is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-factions",
        "contains",
        "All Japan Pro Wrestling factions & groups is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-concepts",
        "contains",
        "All Japan Pro Wrestling concepts is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-eras",
        "contains",
        "All Japan Pro Wrestling eras is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-works",
        "contains",
        "All Japan Pro Wrestling works & media is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-symbols",
        "contains",
        "All Japan Pro Wrestling symbols is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-controversies",
        "contains",
        "All Japan Pro Wrestling controversies is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-sources",
        "contains",
        "All Japan Pro Wrestling sources is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-geography",
        "contains",
        "All Japan Pro Wrestling geography is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-legacy",
        "contains",
        "All Japan Pro Wrestling legacy is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-practices",
        "contains",
        "All Japan Pro Wrestling practices is a primary trailhead under All Japan Pro Wrestling.",
        0.88,
        0.82
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-1",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-2",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-3",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-4",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-5",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-6",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-7",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-8",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-9",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-10",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-11",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-12",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-13",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-14",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-15",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-16",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-17",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-18",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-19",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-20",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-21",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-22",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-23",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ],
    [
        "all-japan-pro-wrestling",
        "all-japan-pro-wrestling-entry-24",
        "contains",
        "Supporting entry under All Japan Pro Wrestling.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
