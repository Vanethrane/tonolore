/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dyatlov-pass",
        "name": "Dyatlov Pass incident",
        "type": "topic",
        "short_description": "1959 Ural deaths, tent cut from inside, and the mountaineering mystery that resists tidy answers.",
        "description": "1959 Ural deaths, tent cut from inside, and the mountaineering mystery that resists tidy answers. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dyatlov Pass incident so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "dyatlov-pass-figures",
        "name": "Dyatlov Pass incident figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dyatlov Pass incident.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dyatlov Pass incident."
    },
    {
        "slug": "dyatlov-pass-world",
        "name": "Dyatlov Pass incident world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dyatlov Pass incident.",
        "description": "Geography, institutions, and periodization that give Dyatlov Pass incident its encyclopedia shape."
    },
    {
        "slug": "dyatlov-pass-places",
        "name": "Dyatlov Pass incident places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dyatlov Pass incident.",
        "description": "Places, regions, and built sites that give Dyatlov Pass incident its map — where events and figures concentrate."
    },
    {
        "slug": "dyatlov-pass-events",
        "name": "Dyatlov Pass incident events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dyatlov Pass incident.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dyatlov Pass incident timeline."
    },
    {
        "slug": "dyatlov-pass-objects",
        "name": "Dyatlov Pass incident objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dyatlov Pass incident.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dyatlov Pass incident."
    },
    {
        "slug": "dyatlov-pass-factions",
        "name": "Dyatlov Pass incident factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dyatlov Pass incident.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dyatlov Pass incident."
    },
    {
        "slug": "dyatlov-pass-concepts",
        "name": "Dyatlov Pass incident concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dyatlov Pass incident.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dyatlov Pass incident readable as a lore graph."
    },
    {
        "slug": "dyatlov-pass-eras",
        "name": "Dyatlov Pass incident eras",
        "type": "event",
        "short_description": "Periodization for Dyatlov Pass incident.",
        "description": "Named eras and phases that help readers track how Dyatlov Pass incident changes across time."
    },
    {
        "slug": "dyatlov-pass-works",
        "name": "Dyatlov Pass incident works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dyatlov Pass incident.",
        "description": "Primary works and adaptations through which most audiences encounter Dyatlov Pass incident."
    },
    {
        "slug": "dyatlov-pass-symbols",
        "name": "Dyatlov Pass incident symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dyatlov Pass incident.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dyatlov Pass incident."
    },
    {
        "slug": "dyatlov-pass-controversies",
        "name": "Dyatlov Pass incident controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dyatlov Pass incident.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dyatlov Pass incident argumentative."
    },
    {
        "slug": "dyatlov-pass-sources",
        "name": "Dyatlov Pass incident sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dyatlov Pass incident.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dyatlov Pass incident."
    },
    {
        "slug": "dyatlov-pass-geography",
        "name": "Dyatlov Pass incident geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dyatlov Pass incident.",
        "description": "Regions, routes, and spatial systems that situate Dyatlov Pass incident beyond single named places."
    },
    {
        "slug": "dyatlov-pass-legacy",
        "name": "Dyatlov Pass incident legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dyatlov Pass incident.",
        "description": "How Dyatlov Pass incident continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dyatlov-pass-practices",
        "name": "Dyatlov Pass incident practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dyatlov Pass incident.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dyatlov Pass incident."
    },
    {
        "slug": "dyatlov-pass-entry-1",
        "name": "Dyatlov Pass incident entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-2",
        "name": "Dyatlov Pass incident entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-3",
        "name": "Dyatlov Pass incident entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-4",
        "name": "Dyatlov Pass incident entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-5",
        "name": "Dyatlov Pass incident entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-6",
        "name": "Dyatlov Pass incident entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-7",
        "name": "Dyatlov Pass incident entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-8",
        "name": "Dyatlov Pass incident entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-9",
        "name": "Dyatlov Pass incident entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-10",
        "name": "Dyatlov Pass incident entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-11",
        "name": "Dyatlov Pass incident entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-12",
        "name": "Dyatlov Pass incident entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-13",
        "name": "Dyatlov Pass incident entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-14",
        "name": "Dyatlov Pass incident entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-15",
        "name": "Dyatlov Pass incident entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-16",
        "name": "Dyatlov Pass incident entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-17",
        "name": "Dyatlov Pass incident entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-18",
        "name": "Dyatlov Pass incident entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-19",
        "name": "Dyatlov Pass incident entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-20",
        "name": "Dyatlov Pass incident entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-21",
        "name": "Dyatlov Pass incident entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-22",
        "name": "Dyatlov Pass incident entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-23",
        "name": "Dyatlov Pass incident entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dyatlov-pass-entry-24",
        "name": "Dyatlov Pass incident entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dyatlov Pass incident.",
        "description": "A supporting encyclopedia entry in the Dyatlov Pass incident subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dyatlov-pass",
        "dyatlov-pass-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-places",
        "contains",
        "Dyatlov Pass incident places is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-events",
        "contains",
        "Dyatlov Pass incident events is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-objects",
        "contains",
        "Dyatlov Pass incident objects & artifacts is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-factions",
        "contains",
        "Dyatlov Pass incident factions & groups is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-concepts",
        "contains",
        "Dyatlov Pass incident concepts is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-eras",
        "contains",
        "Dyatlov Pass incident eras is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-works",
        "contains",
        "Dyatlov Pass incident works & media is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-symbols",
        "contains",
        "Dyatlov Pass incident symbols is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-controversies",
        "contains",
        "Dyatlov Pass incident controversies is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-sources",
        "contains",
        "Dyatlov Pass incident sources is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-geography",
        "contains",
        "Dyatlov Pass incident geography is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-legacy",
        "contains",
        "Dyatlov Pass incident legacy is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-practices",
        "contains",
        "Dyatlov Pass incident practices is a primary trailhead under Dyatlov Pass incident.",
        0.88,
        0.82
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-1",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-2",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-3",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-4",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-5",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-6",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-7",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-8",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-9",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-10",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-11",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-12",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-13",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-14",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-15",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-16",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-17",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-18",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-19",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-20",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-21",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-22",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-23",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ],
    [
        "dyatlov-pass",
        "dyatlov-pass-entry-24",
        "contains",
        "Supporting entry under Dyatlov Pass incident.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
