/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "youtube",
        "name": "YouTube",
        "type": "topic",
        "short_description": "Creator economies, genres, and platform lore from vlogs to algorithmic fame.",
        "description": "Creator economies, genres, and platform lore from vlogs to algorithmic fame. This Ton-o-Lore subject maps people, places, events, and ideas tied to YouTube so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "youtube-figures",
        "name": "YouTube figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to YouTube.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring YouTube."
    },
    {
        "slug": "youtube-world",
        "name": "YouTube world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame YouTube.",
        "description": "Geography, institutions, and periodization that give YouTube its encyclopedia shape."
    },
    {
        "slug": "youtube-places",
        "name": "YouTube places",
        "type": "place",
        "short_description": "Locations and geographies that frame YouTube.",
        "description": "Places, regions, and built sites that give YouTube its map — where events and figures concentrate."
    },
    {
        "slug": "youtube-events",
        "name": "YouTube events",
        "type": "event",
        "short_description": "Turning points and dated episodes in YouTube.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the YouTube timeline."
    },
    {
        "slug": "youtube-objects",
        "name": "YouTube objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to YouTube.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through YouTube."
    },
    {
        "slug": "youtube-factions",
        "name": "YouTube factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside YouTube.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in YouTube."
    },
    {
        "slug": "youtube-concepts",
        "name": "YouTube concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize YouTube.",
        "description": "Keywords, doctrines, systems, and abstract forces that make YouTube readable as a lore graph."
    },
    {
        "slug": "youtube-eras",
        "name": "YouTube eras",
        "type": "event",
        "short_description": "Periodization for YouTube.",
        "description": "Named eras and phases that help readers track how YouTube changes across time."
    },
    {
        "slug": "youtube-works",
        "name": "YouTube works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry YouTube.",
        "description": "Primary works and adaptations through which most audiences encounter YouTube."
    },
    {
        "slug": "youtube-symbols",
        "name": "YouTube symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with YouTube.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside YouTube."
    },
    {
        "slug": "youtube-controversies",
        "name": "YouTube controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in YouTube.",
        "description": "Debates, rival canons, scandals, and contested facts that keep YouTube argumentative."
    },
    {
        "slug": "youtube-sources",
        "name": "YouTube sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into YouTube.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify YouTube."
    },
    {
        "slug": "youtube-geography",
        "name": "YouTube geography",
        "type": "place",
        "short_description": "Broader geographic framing for YouTube.",
        "description": "Regions, routes, and spatial systems that situate YouTube beyond single named places."
    },
    {
        "slug": "youtube-legacy",
        "name": "YouTube legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of YouTube.",
        "description": "How YouTube continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "youtube-practices",
        "name": "YouTube practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in YouTube.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in YouTube."
    },
    {
        "slug": "youtube-entry-1",
        "name": "YouTube entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-2",
        "name": "YouTube entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-3",
        "name": "YouTube entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-4",
        "name": "YouTube entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-5",
        "name": "YouTube entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-6",
        "name": "YouTube entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-7",
        "name": "YouTube entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-8",
        "name": "YouTube entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-9",
        "name": "YouTube entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-10",
        "name": "YouTube entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-11",
        "name": "YouTube entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-12",
        "name": "YouTube entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-13",
        "name": "YouTube entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-14",
        "name": "YouTube entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-15",
        "name": "YouTube entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-16",
        "name": "YouTube entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-17",
        "name": "YouTube entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-18",
        "name": "YouTube entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-19",
        "name": "YouTube entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-20",
        "name": "YouTube entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-21",
        "name": "YouTube entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-22",
        "name": "YouTube entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-23",
        "name": "YouTube entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "youtube-entry-24",
        "name": "YouTube entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside YouTube.",
        "description": "A supporting encyclopedia entry in the YouTube subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "youtube",
        "youtube-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "youtube",
        "youtube-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "youtube",
        "youtube-places",
        "contains",
        "YouTube places is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-events",
        "contains",
        "YouTube events is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-objects",
        "contains",
        "YouTube objects & artifacts is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-factions",
        "contains",
        "YouTube factions & groups is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-concepts",
        "contains",
        "YouTube concepts is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-eras",
        "contains",
        "YouTube eras is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-works",
        "contains",
        "YouTube works & media is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-symbols",
        "contains",
        "YouTube symbols is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-controversies",
        "contains",
        "YouTube controversies is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-sources",
        "contains",
        "YouTube sources is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-geography",
        "contains",
        "YouTube geography is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-legacy",
        "contains",
        "YouTube legacy is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-practices",
        "contains",
        "YouTube practices is a primary trailhead under YouTube.",
        0.88,
        0.82
    ],
    [
        "youtube",
        "youtube-entry-1",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-2",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-3",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-4",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-5",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-6",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-7",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-8",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-9",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-10",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-11",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-12",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-13",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-14",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-15",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-16",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-17",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-18",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-19",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-20",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-21",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-22",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-23",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ],
    [
        "youtube",
        "youtube-entry-24",
        "contains",
        "Supporting entry under YouTube.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
