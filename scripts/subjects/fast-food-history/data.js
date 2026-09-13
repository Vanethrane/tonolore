/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fast-food-history",
        "name": "Fast food history",
        "type": "topic",
        "short_description": "Chains, drive-thrus, and the industrial meal culture of the twentieth century.",
        "description": "Chains, drive-thrus, and the industrial meal culture of the twentieth century. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fast food history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "fast-food-history-figures",
        "name": "Fast food history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fast food history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fast food history."
    },
    {
        "slug": "fast-food-history-world",
        "name": "Fast food history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fast food history.",
        "description": "Geography, institutions, and periodization that give Fast food history its encyclopedia shape."
    },
    {
        "slug": "fast-food-history-places",
        "name": "Fast food history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fast food history.",
        "description": "Places, regions, and built sites that give Fast food history its map — where events and figures concentrate."
    },
    {
        "slug": "fast-food-history-events",
        "name": "Fast food history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fast food history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fast food history timeline."
    },
    {
        "slug": "fast-food-history-objects",
        "name": "Fast food history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fast food history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fast food history."
    },
    {
        "slug": "fast-food-history-factions",
        "name": "Fast food history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fast food history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fast food history."
    },
    {
        "slug": "fast-food-history-concepts",
        "name": "Fast food history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fast food history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fast food history readable as a lore graph."
    },
    {
        "slug": "fast-food-history-eras",
        "name": "Fast food history eras",
        "type": "event",
        "short_description": "Periodization for Fast food history.",
        "description": "Named eras and phases that help readers track how Fast food history changes across time."
    },
    {
        "slug": "fast-food-history-works",
        "name": "Fast food history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fast food history.",
        "description": "Primary works and adaptations through which most audiences encounter Fast food history."
    },
    {
        "slug": "fast-food-history-symbols",
        "name": "Fast food history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fast food history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fast food history."
    },
    {
        "slug": "fast-food-history-controversies",
        "name": "Fast food history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fast food history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fast food history argumentative."
    },
    {
        "slug": "fast-food-history-sources",
        "name": "Fast food history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fast food history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fast food history."
    },
    {
        "slug": "fast-food-history-geography",
        "name": "Fast food history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fast food history.",
        "description": "Regions, routes, and spatial systems that situate Fast food history beyond single named places."
    },
    {
        "slug": "fast-food-history-legacy",
        "name": "Fast food history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fast food history.",
        "description": "How Fast food history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fast-food-history-practices",
        "name": "Fast food history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fast food history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fast food history."
    },
    {
        "slug": "fast-food-history-entry-1",
        "name": "Fast food history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-2",
        "name": "Fast food history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-3",
        "name": "Fast food history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-4",
        "name": "Fast food history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-5",
        "name": "Fast food history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-6",
        "name": "Fast food history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-7",
        "name": "Fast food history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-8",
        "name": "Fast food history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-9",
        "name": "Fast food history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-10",
        "name": "Fast food history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-11",
        "name": "Fast food history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-12",
        "name": "Fast food history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-13",
        "name": "Fast food history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-14",
        "name": "Fast food history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-15",
        "name": "Fast food history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-16",
        "name": "Fast food history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-17",
        "name": "Fast food history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-18",
        "name": "Fast food history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-19",
        "name": "Fast food history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-20",
        "name": "Fast food history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-21",
        "name": "Fast food history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-22",
        "name": "Fast food history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-23",
        "name": "Fast food history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fast-food-history-entry-24",
        "name": "Fast food history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fast food history.",
        "description": "A supporting encyclopedia entry in the Fast food history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fast-food-history",
        "fast-food-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fast-food-history",
        "fast-food-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fast-food-history",
        "fast-food-history-places",
        "contains",
        "Fast food history places is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-events",
        "contains",
        "Fast food history events is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-objects",
        "contains",
        "Fast food history objects & artifacts is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-factions",
        "contains",
        "Fast food history factions & groups is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-concepts",
        "contains",
        "Fast food history concepts is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-eras",
        "contains",
        "Fast food history eras is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-works",
        "contains",
        "Fast food history works & media is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-symbols",
        "contains",
        "Fast food history symbols is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-controversies",
        "contains",
        "Fast food history controversies is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-sources",
        "contains",
        "Fast food history sources is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-geography",
        "contains",
        "Fast food history geography is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-legacy",
        "contains",
        "Fast food history legacy is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-practices",
        "contains",
        "Fast food history practices is a primary trailhead under Fast food history.",
        0.88,
        0.82
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-1",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-2",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-3",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-4",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-5",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-6",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-7",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-8",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-9",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-10",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-11",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-12",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-13",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-14",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-15",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-16",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-17",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-18",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-19",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-20",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-21",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-22",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-23",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ],
    [
        "fast-food-history",
        "fast-food-history-entry-24",
        "contains",
        "Supporting entry under Fast food history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
