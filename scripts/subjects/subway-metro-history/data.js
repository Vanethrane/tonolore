/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "subway-metro-history",
        "name": "Subway & metro history",
        "type": "topic",
        "short_description": "Underground networks, tunnel engineering, and the rapid transit that densified metros.",
        "description": "Underground networks, tunnel engineering, and the rapid transit that densified metros. This Ton-o-Lore subject maps people, places, events, and ideas tied to Subway & metro history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "subway-metro-history-figures",
        "name": "Subway & metro history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Subway & metro history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Subway & metro history."
    },
    {
        "slug": "subway-metro-history-world",
        "name": "Subway & metro history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Subway & metro history.",
        "description": "Geography, institutions, and periodization that give Subway & metro history its encyclopedia shape."
    },
    {
        "slug": "subway-metro-history-places",
        "name": "Subway & metro history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Subway & metro history.",
        "description": "Places, regions, and built sites that give Subway & metro history its map — where events and figures concentrate."
    },
    {
        "slug": "subway-metro-history-events",
        "name": "Subway & metro history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Subway & metro history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Subway & metro history timeline."
    },
    {
        "slug": "subway-metro-history-objects",
        "name": "Subway & metro history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Subway & metro history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Subway & metro history."
    },
    {
        "slug": "subway-metro-history-factions",
        "name": "Subway & metro history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Subway & metro history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Subway & metro history."
    },
    {
        "slug": "subway-metro-history-concepts",
        "name": "Subway & metro history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Subway & metro history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Subway & metro history readable as a lore graph."
    },
    {
        "slug": "subway-metro-history-eras",
        "name": "Subway & metro history eras",
        "type": "event",
        "short_description": "Periodization for Subway & metro history.",
        "description": "Named eras and phases that help readers track how Subway & metro history changes across time."
    },
    {
        "slug": "subway-metro-history-works",
        "name": "Subway & metro history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Subway & metro history.",
        "description": "Primary works and adaptations through which most audiences encounter Subway & metro history."
    },
    {
        "slug": "subway-metro-history-symbols",
        "name": "Subway & metro history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Subway & metro history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Subway & metro history."
    },
    {
        "slug": "subway-metro-history-controversies",
        "name": "Subway & metro history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Subway & metro history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Subway & metro history argumentative."
    },
    {
        "slug": "subway-metro-history-sources",
        "name": "Subway & metro history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Subway & metro history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Subway & metro history."
    },
    {
        "slug": "subway-metro-history-geography",
        "name": "Subway & metro history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Subway & metro history.",
        "description": "Regions, routes, and spatial systems that situate Subway & metro history beyond single named places."
    },
    {
        "slug": "subway-metro-history-legacy",
        "name": "Subway & metro history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Subway & metro history.",
        "description": "How Subway & metro history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "subway-metro-history-practices",
        "name": "Subway & metro history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Subway & metro history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Subway & metro history."
    },
    {
        "slug": "subway-metro-history-entry-1",
        "name": "Subway & metro history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-2",
        "name": "Subway & metro history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-3",
        "name": "Subway & metro history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-4",
        "name": "Subway & metro history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-5",
        "name": "Subway & metro history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-6",
        "name": "Subway & metro history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-7",
        "name": "Subway & metro history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-8",
        "name": "Subway & metro history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-9",
        "name": "Subway & metro history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-10",
        "name": "Subway & metro history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-11",
        "name": "Subway & metro history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-12",
        "name": "Subway & metro history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-13",
        "name": "Subway & metro history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-14",
        "name": "Subway & metro history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-15",
        "name": "Subway & metro history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-16",
        "name": "Subway & metro history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-17",
        "name": "Subway & metro history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-18",
        "name": "Subway & metro history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-19",
        "name": "Subway & metro history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-20",
        "name": "Subway & metro history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-21",
        "name": "Subway & metro history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-22",
        "name": "Subway & metro history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-23",
        "name": "Subway & metro history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "subway-metro-history-entry-24",
        "name": "Subway & metro history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Subway & metro history.",
        "description": "A supporting encyclopedia entry in the Subway & metro history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "subway-metro-history",
        "subway-metro-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "subway-metro-history",
        "subway-metro-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "subway-metro-history",
        "subway-metro-history-places",
        "contains",
        "Subway & metro history places is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-events",
        "contains",
        "Subway & metro history events is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-objects",
        "contains",
        "Subway & metro history objects & artifacts is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-factions",
        "contains",
        "Subway & metro history factions & groups is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-concepts",
        "contains",
        "Subway & metro history concepts is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-eras",
        "contains",
        "Subway & metro history eras is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-works",
        "contains",
        "Subway & metro history works & media is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-symbols",
        "contains",
        "Subway & metro history symbols is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-controversies",
        "contains",
        "Subway & metro history controversies is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-sources",
        "contains",
        "Subway & metro history sources is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-geography",
        "contains",
        "Subway & metro history geography is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-legacy",
        "contains",
        "Subway & metro history legacy is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-practices",
        "contains",
        "Subway & metro history practices is a primary trailhead under Subway & metro history.",
        0.88,
        0.82
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-1",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-2",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-3",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-4",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-5",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-6",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-7",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-8",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-9",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-10",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-11",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-12",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-13",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-14",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-15",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-16",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-17",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-18",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-19",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-20",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-21",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-22",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-23",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ],
    [
        "subway-metro-history",
        "subway-metro-history-entry-24",
        "contains",
        "Supporting entry under Subway & metro history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
