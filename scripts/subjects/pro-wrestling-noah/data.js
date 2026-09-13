/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pro-wrestling-noah",
        "name": "Pro Wrestling Noah",
        "type": "topic",
        "short_description": "GHC titles, Misawa legacy, and the All Japan splinter that defined 2000s puroresu.",
        "description": "GHC titles, Misawa legacy, and the All Japan splinter that defined 2000s puroresu. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pro Wrestling Noah so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "pro-wrestling-noah-figures",
        "name": "Pro Wrestling Noah figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pro Wrestling Noah.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pro Wrestling Noah."
    },
    {
        "slug": "pro-wrestling-noah-world",
        "name": "Pro Wrestling Noah world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pro Wrestling Noah.",
        "description": "Geography, institutions, and periodization that give Pro Wrestling Noah its encyclopedia shape."
    },
    {
        "slug": "pro-wrestling-noah-places",
        "name": "Pro Wrestling Noah places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pro Wrestling Noah.",
        "description": "Places, regions, and built sites that give Pro Wrestling Noah its map — where events and figures concentrate."
    },
    {
        "slug": "pro-wrestling-noah-events",
        "name": "Pro Wrestling Noah events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pro Wrestling Noah.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pro Wrestling Noah timeline."
    },
    {
        "slug": "pro-wrestling-noah-objects",
        "name": "Pro Wrestling Noah objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pro Wrestling Noah.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pro Wrestling Noah."
    },
    {
        "slug": "pro-wrestling-noah-factions",
        "name": "Pro Wrestling Noah factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pro Wrestling Noah.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pro Wrestling Noah."
    },
    {
        "slug": "pro-wrestling-noah-concepts",
        "name": "Pro Wrestling Noah concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pro Wrestling Noah.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pro Wrestling Noah readable as a lore graph."
    },
    {
        "slug": "pro-wrestling-noah-eras",
        "name": "Pro Wrestling Noah eras",
        "type": "event",
        "short_description": "Periodization for Pro Wrestling Noah.",
        "description": "Named eras and phases that help readers track how Pro Wrestling Noah changes across time."
    },
    {
        "slug": "pro-wrestling-noah-works",
        "name": "Pro Wrestling Noah works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pro Wrestling Noah.",
        "description": "Primary works and adaptations through which most audiences encounter Pro Wrestling Noah."
    },
    {
        "slug": "pro-wrestling-noah-symbols",
        "name": "Pro Wrestling Noah symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pro Wrestling Noah.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pro Wrestling Noah."
    },
    {
        "slug": "pro-wrestling-noah-controversies",
        "name": "Pro Wrestling Noah controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pro Wrestling Noah.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pro Wrestling Noah argumentative."
    },
    {
        "slug": "pro-wrestling-noah-sources",
        "name": "Pro Wrestling Noah sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pro Wrestling Noah.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pro Wrestling Noah."
    },
    {
        "slug": "pro-wrestling-noah-geography",
        "name": "Pro Wrestling Noah geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pro Wrestling Noah.",
        "description": "Regions, routes, and spatial systems that situate Pro Wrestling Noah beyond single named places."
    },
    {
        "slug": "pro-wrestling-noah-legacy",
        "name": "Pro Wrestling Noah legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pro Wrestling Noah.",
        "description": "How Pro Wrestling Noah continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pro-wrestling-noah-practices",
        "name": "Pro Wrestling Noah practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pro Wrestling Noah.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pro Wrestling Noah."
    },
    {
        "slug": "pro-wrestling-noah-entry-1",
        "name": "Pro Wrestling Noah entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-2",
        "name": "Pro Wrestling Noah entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-3",
        "name": "Pro Wrestling Noah entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-4",
        "name": "Pro Wrestling Noah entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-5",
        "name": "Pro Wrestling Noah entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-6",
        "name": "Pro Wrestling Noah entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-7",
        "name": "Pro Wrestling Noah entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-8",
        "name": "Pro Wrestling Noah entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-9",
        "name": "Pro Wrestling Noah entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-10",
        "name": "Pro Wrestling Noah entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-11",
        "name": "Pro Wrestling Noah entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-12",
        "name": "Pro Wrestling Noah entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-13",
        "name": "Pro Wrestling Noah entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-14",
        "name": "Pro Wrestling Noah entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-15",
        "name": "Pro Wrestling Noah entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-16",
        "name": "Pro Wrestling Noah entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-17",
        "name": "Pro Wrestling Noah entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-18",
        "name": "Pro Wrestling Noah entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-19",
        "name": "Pro Wrestling Noah entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-20",
        "name": "Pro Wrestling Noah entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-21",
        "name": "Pro Wrestling Noah entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-22",
        "name": "Pro Wrestling Noah entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-23",
        "name": "Pro Wrestling Noah entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pro-wrestling-noah-entry-24",
        "name": "Pro Wrestling Noah entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pro Wrestling Noah.",
        "description": "A supporting encyclopedia entry in the Pro Wrestling Noah subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-places",
        "contains",
        "Pro Wrestling Noah places is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-events",
        "contains",
        "Pro Wrestling Noah events is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-objects",
        "contains",
        "Pro Wrestling Noah objects & artifacts is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-factions",
        "contains",
        "Pro Wrestling Noah factions & groups is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-concepts",
        "contains",
        "Pro Wrestling Noah concepts is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-eras",
        "contains",
        "Pro Wrestling Noah eras is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-works",
        "contains",
        "Pro Wrestling Noah works & media is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-symbols",
        "contains",
        "Pro Wrestling Noah symbols is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-controversies",
        "contains",
        "Pro Wrestling Noah controversies is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-sources",
        "contains",
        "Pro Wrestling Noah sources is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-geography",
        "contains",
        "Pro Wrestling Noah geography is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-legacy",
        "contains",
        "Pro Wrestling Noah legacy is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-practices",
        "contains",
        "Pro Wrestling Noah practices is a primary trailhead under Pro Wrestling Noah.",
        0.88,
        0.82
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-1",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-2",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-3",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-4",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-5",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-6",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-7",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-8",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-9",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-10",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-11",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-12",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-13",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-14",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-15",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-16",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-17",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-18",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-19",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-20",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-21",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-22",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-23",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ],
    [
        "pro-wrestling-noah",
        "pro-wrestling-noah-entry-24",
        "contains",
        "Supporting entry under Pro Wrestling Noah.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
