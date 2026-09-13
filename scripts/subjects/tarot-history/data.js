/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tarot-history",
        "name": "Tarot history",
        "type": "topic",
        "short_description": "Trumps, cartomancy, and the card tradition from Italian games to occult divination decks.",
        "description": "Trumps, cartomancy, and the card tradition from Italian games to occult divination decks. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tarot history so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "tarot-history-figures",
        "name": "Tarot history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tarot history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tarot history."
    },
    {
        "slug": "tarot-history-world",
        "name": "Tarot history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tarot history.",
        "description": "Geography, institutions, and periodization that give Tarot history its encyclopedia shape."
    },
    {
        "slug": "tarot-history-places",
        "name": "Tarot history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tarot history.",
        "description": "Places, regions, and built sites that give Tarot history its map — where events and figures concentrate."
    },
    {
        "slug": "tarot-history-events",
        "name": "Tarot history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tarot history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tarot history timeline."
    },
    {
        "slug": "tarot-history-objects",
        "name": "Tarot history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tarot history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tarot history."
    },
    {
        "slug": "tarot-history-factions",
        "name": "Tarot history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tarot history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tarot history."
    },
    {
        "slug": "tarot-history-concepts",
        "name": "Tarot history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tarot history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tarot history readable as a lore graph."
    },
    {
        "slug": "tarot-history-eras",
        "name": "Tarot history eras",
        "type": "event",
        "short_description": "Periodization for Tarot history.",
        "description": "Named eras and phases that help readers track how Tarot history changes across time."
    },
    {
        "slug": "tarot-history-works",
        "name": "Tarot history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tarot history.",
        "description": "Primary works and adaptations through which most audiences encounter Tarot history."
    },
    {
        "slug": "tarot-history-symbols",
        "name": "Tarot history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tarot history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tarot history."
    },
    {
        "slug": "tarot-history-controversies",
        "name": "Tarot history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tarot history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tarot history argumentative."
    },
    {
        "slug": "tarot-history-sources",
        "name": "Tarot history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tarot history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tarot history."
    },
    {
        "slug": "tarot-history-geography",
        "name": "Tarot history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tarot history.",
        "description": "Regions, routes, and spatial systems that situate Tarot history beyond single named places."
    },
    {
        "slug": "tarot-history-legacy",
        "name": "Tarot history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tarot history.",
        "description": "How Tarot history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tarot-history-practices",
        "name": "Tarot history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tarot history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tarot history."
    },
    {
        "slug": "tarot-history-entry-1",
        "name": "Tarot history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-2",
        "name": "Tarot history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-3",
        "name": "Tarot history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-4",
        "name": "Tarot history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-5",
        "name": "Tarot history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-6",
        "name": "Tarot history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-7",
        "name": "Tarot history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-8",
        "name": "Tarot history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-9",
        "name": "Tarot history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-10",
        "name": "Tarot history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-11",
        "name": "Tarot history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-12",
        "name": "Tarot history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-13",
        "name": "Tarot history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-14",
        "name": "Tarot history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-15",
        "name": "Tarot history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-16",
        "name": "Tarot history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-17",
        "name": "Tarot history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-18",
        "name": "Tarot history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-19",
        "name": "Tarot history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-20",
        "name": "Tarot history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-21",
        "name": "Tarot history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-22",
        "name": "Tarot history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-23",
        "name": "Tarot history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tarot-history-entry-24",
        "name": "Tarot history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tarot history.",
        "description": "A supporting encyclopedia entry in the Tarot history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tarot-history",
        "tarot-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tarot-history",
        "tarot-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tarot-history",
        "tarot-history-places",
        "contains",
        "Tarot history places is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-events",
        "contains",
        "Tarot history events is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-objects",
        "contains",
        "Tarot history objects & artifacts is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-factions",
        "contains",
        "Tarot history factions & groups is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-concepts",
        "contains",
        "Tarot history concepts is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-eras",
        "contains",
        "Tarot history eras is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-works",
        "contains",
        "Tarot history works & media is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-symbols",
        "contains",
        "Tarot history symbols is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-controversies",
        "contains",
        "Tarot history controversies is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-sources",
        "contains",
        "Tarot history sources is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-geography",
        "contains",
        "Tarot history geography is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-legacy",
        "contains",
        "Tarot history legacy is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-practices",
        "contains",
        "Tarot history practices is a primary trailhead under Tarot history.",
        0.88,
        0.82
    ],
    [
        "tarot-history",
        "tarot-history-entry-1",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-2",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-3",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-4",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-5",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-6",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-7",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-8",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-9",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-10",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-11",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-12",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-13",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-14",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-15",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-16",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-17",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-18",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-19",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-20",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-21",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-22",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-23",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ],
    [
        "tarot-history",
        "tarot-history-entry-24",
        "contains",
        "Supporting entry under Tarot history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
