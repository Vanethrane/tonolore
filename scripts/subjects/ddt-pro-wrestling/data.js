/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ddt-pro-wrestling",
        "name": "DDT Pro-Wrestling",
        "type": "topic",
        "short_description": "Comedy-meets-athleticism, Ironman Heavymetalweight chaos, and Japanese entertainment puroresu.",
        "description": "Comedy-meets-athleticism, Ironman Heavymetalweight chaos, and Japanese entertainment puroresu. This Ton-o-Lore subject maps people, places, events, and ideas tied to DDT Pro-Wrestling so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-figures",
        "name": "DDT Pro-Wrestling figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to DDT Pro-Wrestling.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring DDT Pro-Wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-world",
        "name": "DDT Pro-Wrestling world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame DDT Pro-Wrestling.",
        "description": "Geography, institutions, and periodization that give DDT Pro-Wrestling its encyclopedia shape."
    },
    {
        "slug": "ddt-pro-wrestling-places",
        "name": "DDT Pro-Wrestling places",
        "type": "place",
        "short_description": "Locations and geographies that frame DDT Pro-Wrestling.",
        "description": "Places, regions, and built sites that give DDT Pro-Wrestling its map — where events and figures concentrate."
    },
    {
        "slug": "ddt-pro-wrestling-events",
        "name": "DDT Pro-Wrestling events",
        "type": "event",
        "short_description": "Turning points and dated episodes in DDT Pro-Wrestling.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the DDT Pro-Wrestling timeline."
    },
    {
        "slug": "ddt-pro-wrestling-objects",
        "name": "DDT Pro-Wrestling objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to DDT Pro-Wrestling.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through DDT Pro-Wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-factions",
        "name": "DDT Pro-Wrestling factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside DDT Pro-Wrestling.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in DDT Pro-Wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-concepts",
        "name": "DDT Pro-Wrestling concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize DDT Pro-Wrestling.",
        "description": "Keywords, doctrines, systems, and abstract forces that make DDT Pro-Wrestling readable as a lore graph."
    },
    {
        "slug": "ddt-pro-wrestling-eras",
        "name": "DDT Pro-Wrestling eras",
        "type": "event",
        "short_description": "Periodization for DDT Pro-Wrestling.",
        "description": "Named eras and phases that help readers track how DDT Pro-Wrestling changes across time."
    },
    {
        "slug": "ddt-pro-wrestling-works",
        "name": "DDT Pro-Wrestling works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry DDT Pro-Wrestling.",
        "description": "Primary works and adaptations through which most audiences encounter DDT Pro-Wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-symbols",
        "name": "DDT Pro-Wrestling symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with DDT Pro-Wrestling.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside DDT Pro-Wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-controversies",
        "name": "DDT Pro-Wrestling controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in DDT Pro-Wrestling.",
        "description": "Debates, rival canons, scandals, and contested facts that keep DDT Pro-Wrestling argumentative."
    },
    {
        "slug": "ddt-pro-wrestling-sources",
        "name": "DDT Pro-Wrestling sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into DDT Pro-Wrestling.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify DDT Pro-Wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-geography",
        "name": "DDT Pro-Wrestling geography",
        "type": "place",
        "short_description": "Broader geographic framing for DDT Pro-Wrestling.",
        "description": "Regions, routes, and spatial systems that situate DDT Pro-Wrestling beyond single named places."
    },
    {
        "slug": "ddt-pro-wrestling-legacy",
        "name": "DDT Pro-Wrestling legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of DDT Pro-Wrestling.",
        "description": "How DDT Pro-Wrestling continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ddt-pro-wrestling-practices",
        "name": "DDT Pro-Wrestling practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in DDT Pro-Wrestling.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in DDT Pro-Wrestling."
    },
    {
        "slug": "ddt-pro-wrestling-entry-1",
        "name": "DDT Pro-Wrestling entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-2",
        "name": "DDT Pro-Wrestling entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-3",
        "name": "DDT Pro-Wrestling entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-4",
        "name": "DDT Pro-Wrestling entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-5",
        "name": "DDT Pro-Wrestling entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-6",
        "name": "DDT Pro-Wrestling entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-7",
        "name": "DDT Pro-Wrestling entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-8",
        "name": "DDT Pro-Wrestling entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-9",
        "name": "DDT Pro-Wrestling entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-10",
        "name": "DDT Pro-Wrestling entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-11",
        "name": "DDT Pro-Wrestling entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-12",
        "name": "DDT Pro-Wrestling entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-13",
        "name": "DDT Pro-Wrestling entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-14",
        "name": "DDT Pro-Wrestling entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-15",
        "name": "DDT Pro-Wrestling entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-16",
        "name": "DDT Pro-Wrestling entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-17",
        "name": "DDT Pro-Wrestling entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-18",
        "name": "DDT Pro-Wrestling entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-19",
        "name": "DDT Pro-Wrestling entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-20",
        "name": "DDT Pro-Wrestling entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-21",
        "name": "DDT Pro-Wrestling entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-22",
        "name": "DDT Pro-Wrestling entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-23",
        "name": "DDT Pro-Wrestling entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ddt-pro-wrestling-entry-24",
        "name": "DDT Pro-Wrestling entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside DDT Pro-Wrestling.",
        "description": "A supporting encyclopedia entry in the DDT Pro-Wrestling subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-places",
        "contains",
        "DDT Pro-Wrestling places is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-events",
        "contains",
        "DDT Pro-Wrestling events is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-objects",
        "contains",
        "DDT Pro-Wrestling objects & artifacts is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-factions",
        "contains",
        "DDT Pro-Wrestling factions & groups is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-concepts",
        "contains",
        "DDT Pro-Wrestling concepts is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-eras",
        "contains",
        "DDT Pro-Wrestling eras is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-works",
        "contains",
        "DDT Pro-Wrestling works & media is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-symbols",
        "contains",
        "DDT Pro-Wrestling symbols is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-controversies",
        "contains",
        "DDT Pro-Wrestling controversies is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-sources",
        "contains",
        "DDT Pro-Wrestling sources is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-geography",
        "contains",
        "DDT Pro-Wrestling geography is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-legacy",
        "contains",
        "DDT Pro-Wrestling legacy is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-practices",
        "contains",
        "DDT Pro-Wrestling practices is a primary trailhead under DDT Pro-Wrestling.",
        0.88,
        0.82
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-1",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-2",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-3",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-4",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-5",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-6",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-7",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-8",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-9",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-10",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-11",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-12",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-13",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-14",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-15",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-16",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-17",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-18",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-19",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-20",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-21",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-22",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-23",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ],
    [
        "ddt-pro-wrestling",
        "ddt-pro-wrestling-entry-24",
        "contains",
        "Supporting entry under DDT Pro-Wrestling.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
