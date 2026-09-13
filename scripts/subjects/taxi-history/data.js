/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "taxi-history",
        "name": "Taxi history",
        "type": "topic",
        "short_description": "Hackneys, medallions, and the hired ride culture of cities.",
        "description": "Hackneys, medallions, and the hired ride culture of cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to Taxi history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "taxi-history-figures",
        "name": "Taxi history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Taxi history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Taxi history."
    },
    {
        "slug": "taxi-history-world",
        "name": "Taxi history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Taxi history.",
        "description": "Geography, institutions, and periodization that give Taxi history its encyclopedia shape."
    },
    {
        "slug": "taxi-history-places",
        "name": "Taxi history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Taxi history.",
        "description": "Places, regions, and built sites that give Taxi history its map — where events and figures concentrate."
    },
    {
        "slug": "taxi-history-events",
        "name": "Taxi history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Taxi history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Taxi history timeline."
    },
    {
        "slug": "taxi-history-objects",
        "name": "Taxi history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Taxi history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Taxi history."
    },
    {
        "slug": "taxi-history-factions",
        "name": "Taxi history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Taxi history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Taxi history."
    },
    {
        "slug": "taxi-history-concepts",
        "name": "Taxi history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Taxi history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Taxi history readable as a lore graph."
    },
    {
        "slug": "taxi-history-eras",
        "name": "Taxi history eras",
        "type": "event",
        "short_description": "Periodization for Taxi history.",
        "description": "Named eras and phases that help readers track how Taxi history changes across time."
    },
    {
        "slug": "taxi-history-works",
        "name": "Taxi history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Taxi history.",
        "description": "Primary works and adaptations through which most audiences encounter Taxi history."
    },
    {
        "slug": "taxi-history-symbols",
        "name": "Taxi history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Taxi history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Taxi history."
    },
    {
        "slug": "taxi-history-controversies",
        "name": "Taxi history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Taxi history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Taxi history argumentative."
    },
    {
        "slug": "taxi-history-sources",
        "name": "Taxi history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Taxi history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Taxi history."
    },
    {
        "slug": "taxi-history-geography",
        "name": "Taxi history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Taxi history.",
        "description": "Regions, routes, and spatial systems that situate Taxi history beyond single named places."
    },
    {
        "slug": "taxi-history-legacy",
        "name": "Taxi history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Taxi history.",
        "description": "How Taxi history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "taxi-history-practices",
        "name": "Taxi history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Taxi history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Taxi history."
    },
    {
        "slug": "taxi-history-entry-1",
        "name": "Taxi history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-2",
        "name": "Taxi history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-3",
        "name": "Taxi history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-4",
        "name": "Taxi history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-5",
        "name": "Taxi history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-6",
        "name": "Taxi history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-7",
        "name": "Taxi history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-8",
        "name": "Taxi history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-9",
        "name": "Taxi history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-10",
        "name": "Taxi history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-11",
        "name": "Taxi history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-12",
        "name": "Taxi history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-13",
        "name": "Taxi history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-14",
        "name": "Taxi history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-15",
        "name": "Taxi history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-16",
        "name": "Taxi history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-17",
        "name": "Taxi history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-18",
        "name": "Taxi history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-19",
        "name": "Taxi history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-20",
        "name": "Taxi history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-21",
        "name": "Taxi history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-22",
        "name": "Taxi history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-23",
        "name": "Taxi history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "taxi-history-entry-24",
        "name": "Taxi history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Taxi history.",
        "description": "A supporting encyclopedia entry in the Taxi history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "taxi-history",
        "taxi-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "taxi-history",
        "taxi-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "taxi-history",
        "taxi-history-places",
        "contains",
        "Taxi history places is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-events",
        "contains",
        "Taxi history events is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-objects",
        "contains",
        "Taxi history objects & artifacts is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-factions",
        "contains",
        "Taxi history factions & groups is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-concepts",
        "contains",
        "Taxi history concepts is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-eras",
        "contains",
        "Taxi history eras is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-works",
        "contains",
        "Taxi history works & media is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-symbols",
        "contains",
        "Taxi history symbols is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-controversies",
        "contains",
        "Taxi history controversies is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-sources",
        "contains",
        "Taxi history sources is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-geography",
        "contains",
        "Taxi history geography is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-legacy",
        "contains",
        "Taxi history legacy is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-practices",
        "contains",
        "Taxi history practices is a primary trailhead under Taxi history.",
        0.88,
        0.82
    ],
    [
        "taxi-history",
        "taxi-history-entry-1",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-2",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-3",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-4",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-5",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-6",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-7",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-8",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-9",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-10",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-11",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-12",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-13",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-14",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-15",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-16",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-17",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-18",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-19",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-20",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-21",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-22",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-23",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ],
    [
        "taxi-history",
        "taxi-history-entry-24",
        "contains",
        "Supporting entry under Taxi history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
