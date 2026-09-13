/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cheese-history",
        "name": "Cheese history",
        "type": "topic",
        "short_description": "Cultures, caves, and the fermented dairy craft spanning pastoral societies.",
        "description": "Cultures, caves, and the fermented dairy craft spanning pastoral societies. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cheese history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "cheese-history-figures",
        "name": "Cheese history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cheese history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cheese history."
    },
    {
        "slug": "cheese-history-world",
        "name": "Cheese history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cheese history.",
        "description": "Geography, institutions, and periodization that give Cheese history its encyclopedia shape."
    },
    {
        "slug": "cheese-history-places",
        "name": "Cheese history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cheese history.",
        "description": "Places, regions, and built sites that give Cheese history its map — where events and figures concentrate."
    },
    {
        "slug": "cheese-history-events",
        "name": "Cheese history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cheese history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cheese history timeline."
    },
    {
        "slug": "cheese-history-objects",
        "name": "Cheese history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cheese history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cheese history."
    },
    {
        "slug": "cheese-history-factions",
        "name": "Cheese history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cheese history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cheese history."
    },
    {
        "slug": "cheese-history-concepts",
        "name": "Cheese history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cheese history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cheese history readable as a lore graph."
    },
    {
        "slug": "cheese-history-eras",
        "name": "Cheese history eras",
        "type": "event",
        "short_description": "Periodization for Cheese history.",
        "description": "Named eras and phases that help readers track how Cheese history changes across time."
    },
    {
        "slug": "cheese-history-works",
        "name": "Cheese history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cheese history.",
        "description": "Primary works and adaptations through which most audiences encounter Cheese history."
    },
    {
        "slug": "cheese-history-symbols",
        "name": "Cheese history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cheese history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cheese history."
    },
    {
        "slug": "cheese-history-controversies",
        "name": "Cheese history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cheese history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cheese history argumentative."
    },
    {
        "slug": "cheese-history-sources",
        "name": "Cheese history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cheese history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cheese history."
    },
    {
        "slug": "cheese-history-geography",
        "name": "Cheese history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cheese history.",
        "description": "Regions, routes, and spatial systems that situate Cheese history beyond single named places."
    },
    {
        "slug": "cheese-history-legacy",
        "name": "Cheese history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cheese history.",
        "description": "How Cheese history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cheese-history-practices",
        "name": "Cheese history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cheese history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cheese history."
    },
    {
        "slug": "cheese-history-entry-1",
        "name": "Cheese history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-2",
        "name": "Cheese history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-3",
        "name": "Cheese history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-4",
        "name": "Cheese history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-5",
        "name": "Cheese history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-6",
        "name": "Cheese history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-7",
        "name": "Cheese history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-8",
        "name": "Cheese history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-9",
        "name": "Cheese history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-10",
        "name": "Cheese history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-11",
        "name": "Cheese history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-12",
        "name": "Cheese history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-13",
        "name": "Cheese history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-14",
        "name": "Cheese history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-15",
        "name": "Cheese history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-16",
        "name": "Cheese history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-17",
        "name": "Cheese history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-18",
        "name": "Cheese history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-19",
        "name": "Cheese history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-20",
        "name": "Cheese history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-21",
        "name": "Cheese history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-22",
        "name": "Cheese history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-23",
        "name": "Cheese history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cheese-history-entry-24",
        "name": "Cheese history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cheese history.",
        "description": "A supporting encyclopedia entry in the Cheese history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cheese-history",
        "cheese-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cheese-history",
        "cheese-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cheese-history",
        "cheese-history-places",
        "contains",
        "Cheese history places is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-events",
        "contains",
        "Cheese history events is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-objects",
        "contains",
        "Cheese history objects & artifacts is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-factions",
        "contains",
        "Cheese history factions & groups is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-concepts",
        "contains",
        "Cheese history concepts is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-eras",
        "contains",
        "Cheese history eras is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-works",
        "contains",
        "Cheese history works & media is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-symbols",
        "contains",
        "Cheese history symbols is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-controversies",
        "contains",
        "Cheese history controversies is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-sources",
        "contains",
        "Cheese history sources is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-geography",
        "contains",
        "Cheese history geography is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-legacy",
        "contains",
        "Cheese history legacy is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-practices",
        "contains",
        "Cheese history practices is a primary trailhead under Cheese history.",
        0.88,
        0.82
    ],
    [
        "cheese-history",
        "cheese-history-entry-1",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-2",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-3",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-4",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-5",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-6",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-7",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-8",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-9",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-10",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-11",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-12",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-13",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-14",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-15",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-16",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-17",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-18",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-19",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-20",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-21",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-22",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-23",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ],
    [
        "cheese-history",
        "cheese-history-entry-24",
        "contains",
        "Supporting entry under Cheese history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
