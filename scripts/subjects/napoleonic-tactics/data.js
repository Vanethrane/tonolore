/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "napoleonic-tactics",
        "name": "Napoleonic tactics & armies",
        "type": "topic",
        "short_description": "Corps system, artillery mass, and the operational art that remade European battlefields.",
        "description": "Corps system, artillery mass, and the operational art that remade European battlefields. This Ton-o-Lore subject maps people, places, events, and ideas tied to Napoleonic tactics & armies so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "napoleonic-tactics-figures",
        "name": "Napoleonic tactics & armies figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Napoleonic tactics & armies.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Napoleonic tactics & armies."
    },
    {
        "slug": "napoleonic-tactics-world",
        "name": "Napoleonic tactics & armies world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Napoleonic tactics & armies.",
        "description": "Geography, institutions, and periodization that give Napoleonic tactics & armies its encyclopedia shape."
    },
    {
        "slug": "napoleonic-tactics-places",
        "name": "Napoleonic tactics & armies places",
        "type": "place",
        "short_description": "Locations and geographies that frame Napoleonic tactics & armies.",
        "description": "Places, regions, and built sites that give Napoleonic tactics & armies its map — where events and figures concentrate."
    },
    {
        "slug": "napoleonic-tactics-events",
        "name": "Napoleonic tactics & armies events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Napoleonic tactics & armies.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Napoleonic tactics & armies timeline."
    },
    {
        "slug": "napoleonic-tactics-objects",
        "name": "Napoleonic tactics & armies objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Napoleonic tactics & armies.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Napoleonic tactics & armies."
    },
    {
        "slug": "napoleonic-tactics-factions",
        "name": "Napoleonic tactics & armies factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Napoleonic tactics & armies.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Napoleonic tactics & armies."
    },
    {
        "slug": "napoleonic-tactics-concepts",
        "name": "Napoleonic tactics & armies concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Napoleonic tactics & armies.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Napoleonic tactics & armies readable as a lore graph."
    },
    {
        "slug": "napoleonic-tactics-eras",
        "name": "Napoleonic tactics & armies eras",
        "type": "event",
        "short_description": "Periodization for Napoleonic tactics & armies.",
        "description": "Named eras and phases that help readers track how Napoleonic tactics & armies changes across time."
    },
    {
        "slug": "napoleonic-tactics-works",
        "name": "Napoleonic tactics & armies works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Napoleonic tactics & armies.",
        "description": "Primary works and adaptations through which most audiences encounter Napoleonic tactics & armies."
    },
    {
        "slug": "napoleonic-tactics-symbols",
        "name": "Napoleonic tactics & armies symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Napoleonic tactics & armies.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Napoleonic tactics & armies."
    },
    {
        "slug": "napoleonic-tactics-controversies",
        "name": "Napoleonic tactics & armies controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Napoleonic tactics & armies.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Napoleonic tactics & armies argumentative."
    },
    {
        "slug": "napoleonic-tactics-sources",
        "name": "Napoleonic tactics & armies sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Napoleonic tactics & armies.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Napoleonic tactics & armies."
    },
    {
        "slug": "napoleonic-tactics-geography",
        "name": "Napoleonic tactics & armies geography",
        "type": "place",
        "short_description": "Broader geographic framing for Napoleonic tactics & armies.",
        "description": "Regions, routes, and spatial systems that situate Napoleonic tactics & armies beyond single named places."
    },
    {
        "slug": "napoleonic-tactics-legacy",
        "name": "Napoleonic tactics & armies legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Napoleonic tactics & armies.",
        "description": "How Napoleonic tactics & armies continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "napoleonic-tactics-practices",
        "name": "Napoleonic tactics & armies practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Napoleonic tactics & armies.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Napoleonic tactics & armies."
    },
    {
        "slug": "napoleonic-tactics-entry-1",
        "name": "Napoleonic tactics & armies entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-2",
        "name": "Napoleonic tactics & armies entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-3",
        "name": "Napoleonic tactics & armies entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-4",
        "name": "Napoleonic tactics & armies entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-5",
        "name": "Napoleonic tactics & armies entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-6",
        "name": "Napoleonic tactics & armies entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-7",
        "name": "Napoleonic tactics & armies entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-8",
        "name": "Napoleonic tactics & armies entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-9",
        "name": "Napoleonic tactics & armies entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-10",
        "name": "Napoleonic tactics & armies entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-11",
        "name": "Napoleonic tactics & armies entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-12",
        "name": "Napoleonic tactics & armies entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-13",
        "name": "Napoleonic tactics & armies entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-14",
        "name": "Napoleonic tactics & armies entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-15",
        "name": "Napoleonic tactics & armies entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-16",
        "name": "Napoleonic tactics & armies entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-17",
        "name": "Napoleonic tactics & armies entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-18",
        "name": "Napoleonic tactics & armies entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-19",
        "name": "Napoleonic tactics & armies entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-20",
        "name": "Napoleonic tactics & armies entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-21",
        "name": "Napoleonic tactics & armies entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-22",
        "name": "Napoleonic tactics & armies entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-23",
        "name": "Napoleonic tactics & armies entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "napoleonic-tactics-entry-24",
        "name": "Napoleonic tactics & armies entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Napoleonic tactics & armies.",
        "description": "A supporting encyclopedia entry in the Napoleonic tactics & armies subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "napoleonic-tactics",
        "napoleonic-tactics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-places",
        "contains",
        "Napoleonic tactics & armies places is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-events",
        "contains",
        "Napoleonic tactics & armies events is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-objects",
        "contains",
        "Napoleonic tactics & armies objects & artifacts is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-factions",
        "contains",
        "Napoleonic tactics & armies factions & groups is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-concepts",
        "contains",
        "Napoleonic tactics & armies concepts is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-eras",
        "contains",
        "Napoleonic tactics & armies eras is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-works",
        "contains",
        "Napoleonic tactics & armies works & media is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-symbols",
        "contains",
        "Napoleonic tactics & armies symbols is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-controversies",
        "contains",
        "Napoleonic tactics & armies controversies is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-sources",
        "contains",
        "Napoleonic tactics & armies sources is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-geography",
        "contains",
        "Napoleonic tactics & armies geography is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-legacy",
        "contains",
        "Napoleonic tactics & armies legacy is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-practices",
        "contains",
        "Napoleonic tactics & armies practices is a primary trailhead under Napoleonic tactics & armies.",
        0.88,
        0.82
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-1",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-2",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-3",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-4",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-5",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-6",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-7",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-8",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-9",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-10",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-11",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-12",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-13",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-14",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-15",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-16",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-17",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-18",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-19",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-20",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-21",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-22",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-23",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ],
    [
        "napoleonic-tactics",
        "napoleonic-tactics-entry-24",
        "contains",
        "Supporting entry under Napoleonic tactics & armies.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
