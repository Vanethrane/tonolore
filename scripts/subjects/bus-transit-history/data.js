/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bus-transit-history",
        "name": "Bus transit history",
        "type": "topic",
        "short_description": "Coach lines, municipal fleets, and the flexible road transit of modern cities.",
        "description": "Coach lines, municipal fleets, and the flexible road transit of modern cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bus transit history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "bus-transit-history-figures",
        "name": "Bus transit history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bus transit history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bus transit history."
    },
    {
        "slug": "bus-transit-history-world",
        "name": "Bus transit history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bus transit history.",
        "description": "Geography, institutions, and periodization that give Bus transit history its encyclopedia shape."
    },
    {
        "slug": "bus-transit-history-places",
        "name": "Bus transit history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bus transit history.",
        "description": "Places, regions, and built sites that give Bus transit history its map — where events and figures concentrate."
    },
    {
        "slug": "bus-transit-history-events",
        "name": "Bus transit history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bus transit history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bus transit history timeline."
    },
    {
        "slug": "bus-transit-history-objects",
        "name": "Bus transit history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bus transit history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bus transit history."
    },
    {
        "slug": "bus-transit-history-factions",
        "name": "Bus transit history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bus transit history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bus transit history."
    },
    {
        "slug": "bus-transit-history-concepts",
        "name": "Bus transit history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bus transit history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bus transit history readable as a lore graph."
    },
    {
        "slug": "bus-transit-history-eras",
        "name": "Bus transit history eras",
        "type": "event",
        "short_description": "Periodization for Bus transit history.",
        "description": "Named eras and phases that help readers track how Bus transit history changes across time."
    },
    {
        "slug": "bus-transit-history-works",
        "name": "Bus transit history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bus transit history.",
        "description": "Primary works and adaptations through which most audiences encounter Bus transit history."
    },
    {
        "slug": "bus-transit-history-symbols",
        "name": "Bus transit history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bus transit history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bus transit history."
    },
    {
        "slug": "bus-transit-history-controversies",
        "name": "Bus transit history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bus transit history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bus transit history argumentative."
    },
    {
        "slug": "bus-transit-history-sources",
        "name": "Bus transit history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bus transit history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bus transit history."
    },
    {
        "slug": "bus-transit-history-geography",
        "name": "Bus transit history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bus transit history.",
        "description": "Regions, routes, and spatial systems that situate Bus transit history beyond single named places."
    },
    {
        "slug": "bus-transit-history-legacy",
        "name": "Bus transit history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bus transit history.",
        "description": "How Bus transit history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bus-transit-history-practices",
        "name": "Bus transit history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bus transit history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bus transit history."
    },
    {
        "slug": "bus-transit-history-entry-1",
        "name": "Bus transit history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-2",
        "name": "Bus transit history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-3",
        "name": "Bus transit history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-4",
        "name": "Bus transit history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-5",
        "name": "Bus transit history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-6",
        "name": "Bus transit history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-7",
        "name": "Bus transit history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-8",
        "name": "Bus transit history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-9",
        "name": "Bus transit history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-10",
        "name": "Bus transit history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-11",
        "name": "Bus transit history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-12",
        "name": "Bus transit history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-13",
        "name": "Bus transit history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-14",
        "name": "Bus transit history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-15",
        "name": "Bus transit history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-16",
        "name": "Bus transit history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-17",
        "name": "Bus transit history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-18",
        "name": "Bus transit history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-19",
        "name": "Bus transit history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-20",
        "name": "Bus transit history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-21",
        "name": "Bus transit history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-22",
        "name": "Bus transit history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-23",
        "name": "Bus transit history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bus-transit-history-entry-24",
        "name": "Bus transit history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bus transit history.",
        "description": "A supporting encyclopedia entry in the Bus transit history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bus-transit-history",
        "bus-transit-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bus-transit-history",
        "bus-transit-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bus-transit-history",
        "bus-transit-history-places",
        "contains",
        "Bus transit history places is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-events",
        "contains",
        "Bus transit history events is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-objects",
        "contains",
        "Bus transit history objects & artifacts is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-factions",
        "contains",
        "Bus transit history factions & groups is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-concepts",
        "contains",
        "Bus transit history concepts is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-eras",
        "contains",
        "Bus transit history eras is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-works",
        "contains",
        "Bus transit history works & media is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-symbols",
        "contains",
        "Bus transit history symbols is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-controversies",
        "contains",
        "Bus transit history controversies is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-sources",
        "contains",
        "Bus transit history sources is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-geography",
        "contains",
        "Bus transit history geography is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-legacy",
        "contains",
        "Bus transit history legacy is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-practices",
        "contains",
        "Bus transit history practices is a primary trailhead under Bus transit history.",
        0.88,
        0.82
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-1",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-2",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-3",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-4",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-5",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-6",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-7",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-8",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-9",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-10",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-11",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-12",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-13",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-14",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-15",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-16",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-17",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-18",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-19",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-20",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-21",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-22",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-23",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ],
    [
        "bus-transit-history",
        "bus-transit-history-entry-24",
        "contains",
        "Supporting entry under Bus transit history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
