/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bread-history",
        "name": "Bread history",
        "type": "topic",
        "short_description": "Grain, ovens, and the staple that structured civilizations and daily ritual.",
        "description": "Grain, ovens, and the staple that structured civilizations and daily ritual. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bread history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "bread-history-figures",
        "name": "Bread history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bread history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bread history."
    },
    {
        "slug": "bread-history-world",
        "name": "Bread history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bread history.",
        "description": "Geography, institutions, and periodization that give Bread history its encyclopedia shape."
    },
    {
        "slug": "bread-history-places",
        "name": "Bread history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bread history.",
        "description": "Places, regions, and built sites that give Bread history its map — where events and figures concentrate."
    },
    {
        "slug": "bread-history-events",
        "name": "Bread history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bread history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bread history timeline."
    },
    {
        "slug": "bread-history-objects",
        "name": "Bread history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bread history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bread history."
    },
    {
        "slug": "bread-history-factions",
        "name": "Bread history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bread history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bread history."
    },
    {
        "slug": "bread-history-concepts",
        "name": "Bread history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bread history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bread history readable as a lore graph."
    },
    {
        "slug": "bread-history-eras",
        "name": "Bread history eras",
        "type": "event",
        "short_description": "Periodization for Bread history.",
        "description": "Named eras and phases that help readers track how Bread history changes across time."
    },
    {
        "slug": "bread-history-works",
        "name": "Bread history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bread history.",
        "description": "Primary works and adaptations through which most audiences encounter Bread history."
    },
    {
        "slug": "bread-history-symbols",
        "name": "Bread history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bread history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bread history."
    },
    {
        "slug": "bread-history-controversies",
        "name": "Bread history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bread history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bread history argumentative."
    },
    {
        "slug": "bread-history-sources",
        "name": "Bread history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bread history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bread history."
    },
    {
        "slug": "bread-history-geography",
        "name": "Bread history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bread history.",
        "description": "Regions, routes, and spatial systems that situate Bread history beyond single named places."
    },
    {
        "slug": "bread-history-legacy",
        "name": "Bread history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bread history.",
        "description": "How Bread history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bread-history-practices",
        "name": "Bread history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bread history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bread history."
    },
    {
        "slug": "bread-history-entry-1",
        "name": "Bread history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-2",
        "name": "Bread history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-3",
        "name": "Bread history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-4",
        "name": "Bread history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-5",
        "name": "Bread history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-6",
        "name": "Bread history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-7",
        "name": "Bread history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-8",
        "name": "Bread history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-9",
        "name": "Bread history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-10",
        "name": "Bread history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-11",
        "name": "Bread history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-12",
        "name": "Bread history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-13",
        "name": "Bread history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-14",
        "name": "Bread history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-15",
        "name": "Bread history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-16",
        "name": "Bread history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-17",
        "name": "Bread history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-18",
        "name": "Bread history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-19",
        "name": "Bread history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-20",
        "name": "Bread history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-21",
        "name": "Bread history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-22",
        "name": "Bread history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-23",
        "name": "Bread history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bread-history-entry-24",
        "name": "Bread history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bread history.",
        "description": "A supporting encyclopedia entry in the Bread history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bread-history",
        "bread-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bread-history",
        "bread-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bread-history",
        "bread-history-places",
        "contains",
        "Bread history places is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-events",
        "contains",
        "Bread history events is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-objects",
        "contains",
        "Bread history objects & artifacts is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-factions",
        "contains",
        "Bread history factions & groups is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-concepts",
        "contains",
        "Bread history concepts is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-eras",
        "contains",
        "Bread history eras is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-works",
        "contains",
        "Bread history works & media is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-symbols",
        "contains",
        "Bread history symbols is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-controversies",
        "contains",
        "Bread history controversies is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-sources",
        "contains",
        "Bread history sources is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-geography",
        "contains",
        "Bread history geography is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-legacy",
        "contains",
        "Bread history legacy is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-practices",
        "contains",
        "Bread history practices is a primary trailhead under Bread history.",
        0.88,
        0.82
    ],
    [
        "bread-history",
        "bread-history-entry-1",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-2",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-3",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-4",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-5",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-6",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-7",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-8",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-9",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-10",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-11",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-12",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-13",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-14",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-15",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-16",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-17",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-18",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-19",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-20",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-21",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-22",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-23",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ],
    [
        "bread-history",
        "bread-history-entry-24",
        "contains",
        "Supporting entry under Bread history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
