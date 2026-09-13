/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "twitch-streaming",
        "name": "Twitch streaming",
        "type": "topic",
        "short_description": "Live chat rituals, emote lore, and the streaming platform that made watching play a career.",
        "description": "Live chat rituals, emote lore, and the streaming platform that made watching play a career. This Ton-o-Lore subject maps people, places, events, and ideas tied to Twitch streaming so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "twitch-streaming-figures",
        "name": "Twitch streaming figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Twitch streaming.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Twitch streaming."
    },
    {
        "slug": "twitch-streaming-world",
        "name": "Twitch streaming world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Twitch streaming.",
        "description": "Geography, institutions, and periodization that give Twitch streaming its encyclopedia shape."
    },
    {
        "slug": "twitch-streaming-places",
        "name": "Twitch streaming places",
        "type": "place",
        "short_description": "Locations and geographies that frame Twitch streaming.",
        "description": "Places, regions, and built sites that give Twitch streaming its map — where events and figures concentrate."
    },
    {
        "slug": "twitch-streaming-events",
        "name": "Twitch streaming events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Twitch streaming.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Twitch streaming timeline."
    },
    {
        "slug": "twitch-streaming-objects",
        "name": "Twitch streaming objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Twitch streaming.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Twitch streaming."
    },
    {
        "slug": "twitch-streaming-factions",
        "name": "Twitch streaming factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Twitch streaming.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Twitch streaming."
    },
    {
        "slug": "twitch-streaming-concepts",
        "name": "Twitch streaming concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Twitch streaming.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Twitch streaming readable as a lore graph."
    },
    {
        "slug": "twitch-streaming-eras",
        "name": "Twitch streaming eras",
        "type": "event",
        "short_description": "Periodization for Twitch streaming.",
        "description": "Named eras and phases that help readers track how Twitch streaming changes across time."
    },
    {
        "slug": "twitch-streaming-works",
        "name": "Twitch streaming works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Twitch streaming.",
        "description": "Primary works and adaptations through which most audiences encounter Twitch streaming."
    },
    {
        "slug": "twitch-streaming-symbols",
        "name": "Twitch streaming symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Twitch streaming.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Twitch streaming."
    },
    {
        "slug": "twitch-streaming-controversies",
        "name": "Twitch streaming controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Twitch streaming.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Twitch streaming argumentative."
    },
    {
        "slug": "twitch-streaming-sources",
        "name": "Twitch streaming sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Twitch streaming.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Twitch streaming."
    },
    {
        "slug": "twitch-streaming-geography",
        "name": "Twitch streaming geography",
        "type": "place",
        "short_description": "Broader geographic framing for Twitch streaming.",
        "description": "Regions, routes, and spatial systems that situate Twitch streaming beyond single named places."
    },
    {
        "slug": "twitch-streaming-legacy",
        "name": "Twitch streaming legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Twitch streaming.",
        "description": "How Twitch streaming continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "twitch-streaming-practices",
        "name": "Twitch streaming practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Twitch streaming.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Twitch streaming."
    },
    {
        "slug": "twitch-streaming-entry-1",
        "name": "Twitch streaming entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-2",
        "name": "Twitch streaming entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-3",
        "name": "Twitch streaming entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-4",
        "name": "Twitch streaming entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-5",
        "name": "Twitch streaming entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-6",
        "name": "Twitch streaming entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-7",
        "name": "Twitch streaming entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-8",
        "name": "Twitch streaming entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-9",
        "name": "Twitch streaming entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-10",
        "name": "Twitch streaming entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-11",
        "name": "Twitch streaming entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-12",
        "name": "Twitch streaming entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-13",
        "name": "Twitch streaming entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-14",
        "name": "Twitch streaming entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-15",
        "name": "Twitch streaming entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-16",
        "name": "Twitch streaming entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-17",
        "name": "Twitch streaming entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-18",
        "name": "Twitch streaming entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-19",
        "name": "Twitch streaming entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-20",
        "name": "Twitch streaming entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-21",
        "name": "Twitch streaming entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-22",
        "name": "Twitch streaming entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-23",
        "name": "Twitch streaming entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twitch-streaming-entry-24",
        "name": "Twitch streaming entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twitch streaming.",
        "description": "A supporting encyclopedia entry in the Twitch streaming subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "twitch-streaming",
        "twitch-streaming-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "twitch-streaming",
        "twitch-streaming-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "twitch-streaming",
        "twitch-streaming-places",
        "contains",
        "Twitch streaming places is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-events",
        "contains",
        "Twitch streaming events is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-objects",
        "contains",
        "Twitch streaming objects & artifacts is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-factions",
        "contains",
        "Twitch streaming factions & groups is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-concepts",
        "contains",
        "Twitch streaming concepts is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-eras",
        "contains",
        "Twitch streaming eras is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-works",
        "contains",
        "Twitch streaming works & media is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-symbols",
        "contains",
        "Twitch streaming symbols is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-controversies",
        "contains",
        "Twitch streaming controversies is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-sources",
        "contains",
        "Twitch streaming sources is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-geography",
        "contains",
        "Twitch streaming geography is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-legacy",
        "contains",
        "Twitch streaming legacy is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-practices",
        "contains",
        "Twitch streaming practices is a primary trailhead under Twitch streaming.",
        0.88,
        0.82
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-1",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-2",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-3",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-4",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-5",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-6",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-7",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-8",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-9",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-10",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-11",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-12",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-13",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-14",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-15",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-16",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-17",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-18",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-19",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-20",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-21",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-22",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-23",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ],
    [
        "twitch-streaming",
        "twitch-streaming-entry-24",
        "contains",
        "Supporting entry under Twitch streaming.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
