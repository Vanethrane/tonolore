/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ferry-history",
        "name": "Ferry history",
        "type": "topic",
        "short_description": "Crossings, commuter boats, and the short-sea links that stitch coasts together.",
        "description": "Crossings, commuter boats, and the short-sea links that stitch coasts together. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ferry history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "ferry-history-figures",
        "name": "Ferry history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ferry history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ferry history."
    },
    {
        "slug": "ferry-history-world",
        "name": "Ferry history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ferry history.",
        "description": "Geography, institutions, and periodization that give Ferry history its encyclopedia shape."
    },
    {
        "slug": "ferry-history-places",
        "name": "Ferry history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ferry history.",
        "description": "Places, regions, and built sites that give Ferry history its map — where events and figures concentrate."
    },
    {
        "slug": "ferry-history-events",
        "name": "Ferry history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ferry history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ferry history timeline."
    },
    {
        "slug": "ferry-history-objects",
        "name": "Ferry history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ferry history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ferry history."
    },
    {
        "slug": "ferry-history-factions",
        "name": "Ferry history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ferry history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ferry history."
    },
    {
        "slug": "ferry-history-concepts",
        "name": "Ferry history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ferry history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ferry history readable as a lore graph."
    },
    {
        "slug": "ferry-history-eras",
        "name": "Ferry history eras",
        "type": "event",
        "short_description": "Periodization for Ferry history.",
        "description": "Named eras and phases that help readers track how Ferry history changes across time."
    },
    {
        "slug": "ferry-history-works",
        "name": "Ferry history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ferry history.",
        "description": "Primary works and adaptations through which most audiences encounter Ferry history."
    },
    {
        "slug": "ferry-history-symbols",
        "name": "Ferry history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ferry history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ferry history."
    },
    {
        "slug": "ferry-history-controversies",
        "name": "Ferry history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ferry history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ferry history argumentative."
    },
    {
        "slug": "ferry-history-sources",
        "name": "Ferry history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ferry history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ferry history."
    },
    {
        "slug": "ferry-history-geography",
        "name": "Ferry history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ferry history.",
        "description": "Regions, routes, and spatial systems that situate Ferry history beyond single named places."
    },
    {
        "slug": "ferry-history-legacy",
        "name": "Ferry history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ferry history.",
        "description": "How Ferry history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ferry-history-practices",
        "name": "Ferry history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ferry history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ferry history."
    },
    {
        "slug": "ferry-history-entry-1",
        "name": "Ferry history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-2",
        "name": "Ferry history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-3",
        "name": "Ferry history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-4",
        "name": "Ferry history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-5",
        "name": "Ferry history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-6",
        "name": "Ferry history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-7",
        "name": "Ferry history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-8",
        "name": "Ferry history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-9",
        "name": "Ferry history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-10",
        "name": "Ferry history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-11",
        "name": "Ferry history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-12",
        "name": "Ferry history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-13",
        "name": "Ferry history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-14",
        "name": "Ferry history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-15",
        "name": "Ferry history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-16",
        "name": "Ferry history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-17",
        "name": "Ferry history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-18",
        "name": "Ferry history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-19",
        "name": "Ferry history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-20",
        "name": "Ferry history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-21",
        "name": "Ferry history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-22",
        "name": "Ferry history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-23",
        "name": "Ferry history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ferry-history-entry-24",
        "name": "Ferry history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ferry history.",
        "description": "A supporting encyclopedia entry in the Ferry history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ferry-history",
        "ferry-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ferry-history",
        "ferry-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ferry-history",
        "ferry-history-places",
        "contains",
        "Ferry history places is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-events",
        "contains",
        "Ferry history events is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-objects",
        "contains",
        "Ferry history objects & artifacts is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-factions",
        "contains",
        "Ferry history factions & groups is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-concepts",
        "contains",
        "Ferry history concepts is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-eras",
        "contains",
        "Ferry history eras is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-works",
        "contains",
        "Ferry history works & media is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-symbols",
        "contains",
        "Ferry history symbols is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-controversies",
        "contains",
        "Ferry history controversies is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-sources",
        "contains",
        "Ferry history sources is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-geography",
        "contains",
        "Ferry history geography is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-legacy",
        "contains",
        "Ferry history legacy is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-practices",
        "contains",
        "Ferry history practices is a primary trailhead under Ferry history.",
        0.88,
        0.82
    ],
    [
        "ferry-history",
        "ferry-history-entry-1",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-2",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-3",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-4",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-5",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-6",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-7",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-8",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-9",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-10",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-11",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-12",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-13",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-14",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-15",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-16",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-17",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-18",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-19",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-20",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-21",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-22",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-23",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ],
    [
        "ferry-history",
        "ferry-history-entry-24",
        "contains",
        "Supporting entry under Ferry history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
