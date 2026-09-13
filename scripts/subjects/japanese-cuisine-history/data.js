/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "japanese-cuisine-history",
        "name": "Japanese cuisine history",
        "type": "topic",
        "short_description": "Kaiseki, regional washoku, and the seasonal craft beyond sushi alone.",
        "description": "Kaiseki, regional washoku, and the seasonal craft beyond sushi alone. This Ton-o-Lore subject maps people, places, events, and ideas tied to Japanese cuisine history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "japanese-cuisine-history-figures",
        "name": "Japanese cuisine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Japanese cuisine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Japanese cuisine history."
    },
    {
        "slug": "japanese-cuisine-history-world",
        "name": "Japanese cuisine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Japanese cuisine history.",
        "description": "Geography, institutions, and periodization that give Japanese cuisine history its encyclopedia shape."
    },
    {
        "slug": "japanese-cuisine-history-places",
        "name": "Japanese cuisine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Japanese cuisine history.",
        "description": "Places, regions, and built sites that give Japanese cuisine history its map — where events and figures concentrate."
    },
    {
        "slug": "japanese-cuisine-history-events",
        "name": "Japanese cuisine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Japanese cuisine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Japanese cuisine history timeline."
    },
    {
        "slug": "japanese-cuisine-history-objects",
        "name": "Japanese cuisine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Japanese cuisine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Japanese cuisine history."
    },
    {
        "slug": "japanese-cuisine-history-factions",
        "name": "Japanese cuisine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Japanese cuisine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Japanese cuisine history."
    },
    {
        "slug": "japanese-cuisine-history-concepts",
        "name": "Japanese cuisine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Japanese cuisine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Japanese cuisine history readable as a lore graph."
    },
    {
        "slug": "japanese-cuisine-history-eras",
        "name": "Japanese cuisine history eras",
        "type": "event",
        "short_description": "Periodization for Japanese cuisine history.",
        "description": "Named eras and phases that help readers track how Japanese cuisine history changes across time."
    },
    {
        "slug": "japanese-cuisine-history-works",
        "name": "Japanese cuisine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Japanese cuisine history.",
        "description": "Primary works and adaptations through which most audiences encounter Japanese cuisine history."
    },
    {
        "slug": "japanese-cuisine-history-symbols",
        "name": "Japanese cuisine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Japanese cuisine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Japanese cuisine history."
    },
    {
        "slug": "japanese-cuisine-history-controversies",
        "name": "Japanese cuisine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Japanese cuisine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Japanese cuisine history argumentative."
    },
    {
        "slug": "japanese-cuisine-history-sources",
        "name": "Japanese cuisine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Japanese cuisine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Japanese cuisine history."
    },
    {
        "slug": "japanese-cuisine-history-geography",
        "name": "Japanese cuisine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Japanese cuisine history.",
        "description": "Regions, routes, and spatial systems that situate Japanese cuisine history beyond single named places."
    },
    {
        "slug": "japanese-cuisine-history-legacy",
        "name": "Japanese cuisine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Japanese cuisine history.",
        "description": "How Japanese cuisine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "japanese-cuisine-history-practices",
        "name": "Japanese cuisine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Japanese cuisine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Japanese cuisine history."
    },
    {
        "slug": "japanese-cuisine-history-entry-1",
        "name": "Japanese cuisine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-2",
        "name": "Japanese cuisine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-3",
        "name": "Japanese cuisine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-4",
        "name": "Japanese cuisine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-5",
        "name": "Japanese cuisine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-6",
        "name": "Japanese cuisine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-7",
        "name": "Japanese cuisine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-8",
        "name": "Japanese cuisine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-9",
        "name": "Japanese cuisine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-10",
        "name": "Japanese cuisine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-11",
        "name": "Japanese cuisine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-12",
        "name": "Japanese cuisine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-13",
        "name": "Japanese cuisine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-14",
        "name": "Japanese cuisine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-15",
        "name": "Japanese cuisine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-16",
        "name": "Japanese cuisine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-17",
        "name": "Japanese cuisine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-18",
        "name": "Japanese cuisine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-19",
        "name": "Japanese cuisine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-20",
        "name": "Japanese cuisine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-21",
        "name": "Japanese cuisine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-22",
        "name": "Japanese cuisine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-23",
        "name": "Japanese cuisine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-cuisine-history-entry-24",
        "name": "Japanese cuisine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese cuisine history.",
        "description": "A supporting encyclopedia entry in the Japanese cuisine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-places",
        "contains",
        "Japanese cuisine history places is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-events",
        "contains",
        "Japanese cuisine history events is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-objects",
        "contains",
        "Japanese cuisine history objects & artifacts is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-factions",
        "contains",
        "Japanese cuisine history factions & groups is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-concepts",
        "contains",
        "Japanese cuisine history concepts is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-eras",
        "contains",
        "Japanese cuisine history eras is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-works",
        "contains",
        "Japanese cuisine history works & media is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-symbols",
        "contains",
        "Japanese cuisine history symbols is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-controversies",
        "contains",
        "Japanese cuisine history controversies is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-sources",
        "contains",
        "Japanese cuisine history sources is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-geography",
        "contains",
        "Japanese cuisine history geography is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-legacy",
        "contains",
        "Japanese cuisine history legacy is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-practices",
        "contains",
        "Japanese cuisine history practices is a primary trailhead under Japanese cuisine history.",
        0.88,
        0.82
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-1",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-2",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-3",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-4",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-5",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-6",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-7",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-8",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-9",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-10",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-11",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-12",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-13",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-14",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-15",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-16",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-17",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-18",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-19",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-20",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-21",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-22",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-23",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ],
    [
        "japanese-cuisine-history",
        "japanese-cuisine-history-entry-24",
        "contains",
        "Supporting entry under Japanese cuisine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
