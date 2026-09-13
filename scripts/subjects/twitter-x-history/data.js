/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "twitter-x-history",
        "name": "Twitter / X history",
        "type": "topic",
        "short_description": "Hashtags, ratios, and the public square that remade news and celebrity discourse.",
        "description": "Hashtags, ratios, and the public square that remade news and celebrity discourse. This Ton-o-Lore subject maps people, places, events, and ideas tied to Twitter / X history so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "twitter-x-history-figures",
        "name": "Twitter / X history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Twitter / X history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Twitter / X history."
    },
    {
        "slug": "twitter-x-history-world",
        "name": "Twitter / X history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Twitter / X history.",
        "description": "Geography, institutions, and periodization that give Twitter / X history its encyclopedia shape."
    },
    {
        "slug": "twitter-x-history-places",
        "name": "Twitter / X history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Twitter / X history.",
        "description": "Places, regions, and built sites that give Twitter / X history its map — where events and figures concentrate."
    },
    {
        "slug": "twitter-x-history-events",
        "name": "Twitter / X history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Twitter / X history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Twitter / X history timeline."
    },
    {
        "slug": "twitter-x-history-objects",
        "name": "Twitter / X history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Twitter / X history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Twitter / X history."
    },
    {
        "slug": "twitter-x-history-factions",
        "name": "Twitter / X history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Twitter / X history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Twitter / X history."
    },
    {
        "slug": "twitter-x-history-concepts",
        "name": "Twitter / X history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Twitter / X history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Twitter / X history readable as a lore graph."
    },
    {
        "slug": "twitter-x-history-eras",
        "name": "Twitter / X history eras",
        "type": "event",
        "short_description": "Periodization for Twitter / X history.",
        "description": "Named eras and phases that help readers track how Twitter / X history changes across time."
    },
    {
        "slug": "twitter-x-history-works",
        "name": "Twitter / X history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Twitter / X history.",
        "description": "Primary works and adaptations through which most audiences encounter Twitter / X history."
    },
    {
        "slug": "twitter-x-history-symbols",
        "name": "Twitter / X history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Twitter / X history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Twitter / X history."
    },
    {
        "slug": "twitter-x-history-controversies",
        "name": "Twitter / X history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Twitter / X history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Twitter / X history argumentative."
    },
    {
        "slug": "twitter-x-history-sources",
        "name": "Twitter / X history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Twitter / X history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Twitter / X history."
    },
    {
        "slug": "twitter-x-history-geography",
        "name": "Twitter / X history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Twitter / X history.",
        "description": "Regions, routes, and spatial systems that situate Twitter / X history beyond single named places."
    },
    {
        "slug": "twitter-x-history-legacy",
        "name": "Twitter / X history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Twitter / X history.",
        "description": "How Twitter / X history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "twitter-x-history-practices",
        "name": "Twitter / X history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Twitter / X history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Twitter / X history."
    },
    {
        "slug": "twitter-x-history-entry-1",
        "name": "Twitter / X history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-2",
        "name": "Twitter / X history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-3",
        "name": "Twitter / X history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-4",
        "name": "Twitter / X history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-5",
        "name": "Twitter / X history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-6",
        "name": "Twitter / X history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-7",
        "name": "Twitter / X history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-8",
        "name": "Twitter / X history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-9",
        "name": "Twitter / X history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-10",
        "name": "Twitter / X history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-11",
        "name": "Twitter / X history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-12",
        "name": "Twitter / X history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-13",
        "name": "Twitter / X history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-14",
        "name": "Twitter / X history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-15",
        "name": "Twitter / X history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-16",
        "name": "Twitter / X history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-17",
        "name": "Twitter / X history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-18",
        "name": "Twitter / X history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-19",
        "name": "Twitter / X history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-20",
        "name": "Twitter / X history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-21",
        "name": "Twitter / X history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-22",
        "name": "Twitter / X history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-23",
        "name": "Twitter / X history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitter-x-history-entry-24",
        "name": "Twitter / X history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitter / X history.",
        "description": "A supporting encyclopedia entry in the Twitter / X history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "twitter-x-history",
        "twitter-x-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "twitter-x-history",
        "twitter-x-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "twitter-x-history",
        "twitter-x-history-places",
        "contains",
        "Twitter / X history places is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-events",
        "contains",
        "Twitter / X history events is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-objects",
        "contains",
        "Twitter / X history objects & artifacts is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-factions",
        "contains",
        "Twitter / X history factions & groups is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-concepts",
        "contains",
        "Twitter / X history concepts is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-eras",
        "contains",
        "Twitter / X history eras is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-works",
        "contains",
        "Twitter / X history works & media is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-symbols",
        "contains",
        "Twitter / X history symbols is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-controversies",
        "contains",
        "Twitter / X history controversies is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-sources",
        "contains",
        "Twitter / X history sources is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-geography",
        "contains",
        "Twitter / X history geography is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-legacy",
        "contains",
        "Twitter / X history legacy is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-practices",
        "contains",
        "Twitter / X history practices is a primary trailhead under Twitter / X history.",
        0.88,
        0.82
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-1",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-2",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-3",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-4",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-5",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-6",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-7",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-8",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-9",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-10",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-11",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-12",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-13",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-14",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-15",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-16",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-17",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-18",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-19",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-20",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-21",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-22",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-23",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ],
    [
        "twitter-x-history",
        "twitter-x-history-entry-24",
        "contains",
        "Supporting entry under Twitter / X history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
