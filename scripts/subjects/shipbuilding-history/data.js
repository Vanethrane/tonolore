/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "shipbuilding-history",
        "name": "Shipbuilding history",
        "type": "topic",
        "short_description": "Yards, timber-to-steel transitions, and the industrial craft of making vessels.",
        "description": "Yards, timber-to-steel transitions, and the industrial craft of making vessels. This Ton-o-Lore subject maps people, places, events, and ideas tied to Shipbuilding history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "shipbuilding-history-figures",
        "name": "Shipbuilding history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Shipbuilding history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Shipbuilding history."
    },
    {
        "slug": "shipbuilding-history-world",
        "name": "Shipbuilding history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Shipbuilding history.",
        "description": "Geography, institutions, and periodization that give Shipbuilding history its encyclopedia shape."
    },
    {
        "slug": "shipbuilding-history-places",
        "name": "Shipbuilding history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Shipbuilding history.",
        "description": "Places, regions, and built sites that give Shipbuilding history its map — where events and figures concentrate."
    },
    {
        "slug": "shipbuilding-history-events",
        "name": "Shipbuilding history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Shipbuilding history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Shipbuilding history timeline."
    },
    {
        "slug": "shipbuilding-history-objects",
        "name": "Shipbuilding history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Shipbuilding history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Shipbuilding history."
    },
    {
        "slug": "shipbuilding-history-factions",
        "name": "Shipbuilding history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Shipbuilding history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Shipbuilding history."
    },
    {
        "slug": "shipbuilding-history-concepts",
        "name": "Shipbuilding history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Shipbuilding history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Shipbuilding history readable as a lore graph."
    },
    {
        "slug": "shipbuilding-history-eras",
        "name": "Shipbuilding history eras",
        "type": "event",
        "short_description": "Periodization for Shipbuilding history.",
        "description": "Named eras and phases that help readers track how Shipbuilding history changes across time."
    },
    {
        "slug": "shipbuilding-history-works",
        "name": "Shipbuilding history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Shipbuilding history.",
        "description": "Primary works and adaptations through which most audiences encounter Shipbuilding history."
    },
    {
        "slug": "shipbuilding-history-symbols",
        "name": "Shipbuilding history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Shipbuilding history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Shipbuilding history."
    },
    {
        "slug": "shipbuilding-history-controversies",
        "name": "Shipbuilding history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Shipbuilding history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Shipbuilding history argumentative."
    },
    {
        "slug": "shipbuilding-history-sources",
        "name": "Shipbuilding history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Shipbuilding history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Shipbuilding history."
    },
    {
        "slug": "shipbuilding-history-geography",
        "name": "Shipbuilding history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Shipbuilding history.",
        "description": "Regions, routes, and spatial systems that situate Shipbuilding history beyond single named places."
    },
    {
        "slug": "shipbuilding-history-legacy",
        "name": "Shipbuilding history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Shipbuilding history.",
        "description": "How Shipbuilding history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "shipbuilding-history-practices",
        "name": "Shipbuilding history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Shipbuilding history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Shipbuilding history."
    },
    {
        "slug": "shipbuilding-history-entry-1",
        "name": "Shipbuilding history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-2",
        "name": "Shipbuilding history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-3",
        "name": "Shipbuilding history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-4",
        "name": "Shipbuilding history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-5",
        "name": "Shipbuilding history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-6",
        "name": "Shipbuilding history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-7",
        "name": "Shipbuilding history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-8",
        "name": "Shipbuilding history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-9",
        "name": "Shipbuilding history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-10",
        "name": "Shipbuilding history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-11",
        "name": "Shipbuilding history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-12",
        "name": "Shipbuilding history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-13",
        "name": "Shipbuilding history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-14",
        "name": "Shipbuilding history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-15",
        "name": "Shipbuilding history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-16",
        "name": "Shipbuilding history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-17",
        "name": "Shipbuilding history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-18",
        "name": "Shipbuilding history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-19",
        "name": "Shipbuilding history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-20",
        "name": "Shipbuilding history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-21",
        "name": "Shipbuilding history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-22",
        "name": "Shipbuilding history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-23",
        "name": "Shipbuilding history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shipbuilding-history-entry-24",
        "name": "Shipbuilding history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shipbuilding history.",
        "description": "A supporting encyclopedia entry in the Shipbuilding history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "shipbuilding-history",
        "shipbuilding-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-places",
        "contains",
        "Shipbuilding history places is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-events",
        "contains",
        "Shipbuilding history events is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-objects",
        "contains",
        "Shipbuilding history objects & artifacts is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-factions",
        "contains",
        "Shipbuilding history factions & groups is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-concepts",
        "contains",
        "Shipbuilding history concepts is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-eras",
        "contains",
        "Shipbuilding history eras is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-works",
        "contains",
        "Shipbuilding history works & media is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-symbols",
        "contains",
        "Shipbuilding history symbols is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-controversies",
        "contains",
        "Shipbuilding history controversies is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-sources",
        "contains",
        "Shipbuilding history sources is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-geography",
        "contains",
        "Shipbuilding history geography is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-legacy",
        "contains",
        "Shipbuilding history legacy is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-practices",
        "contains",
        "Shipbuilding history practices is a primary trailhead under Shipbuilding history.",
        0.88,
        0.82
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-1",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-2",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-3",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-4",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-5",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-6",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-7",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-8",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-9",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-10",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-11",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-12",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-13",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-14",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-15",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-16",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-17",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-18",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-19",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-20",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-21",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-22",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-23",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ],
    [
        "shipbuilding-history",
        "shipbuilding-history-entry-24",
        "contains",
        "Supporting entry under Shipbuilding history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
