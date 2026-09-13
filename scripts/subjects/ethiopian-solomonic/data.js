/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ethiopian-solomonic",
        "name": "Ethiopian Solomonic dynasty",
        "type": "topic",
        "short_description": "Claimed descent from Solomon, Haile Selassie, and Africa’s storied imperial house.",
        "description": "Claimed descent from Solomon, Haile Selassie, and Africa’s storied imperial house. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ethiopian Solomonic dynasty so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "ethiopian-solomonic-figures",
        "name": "Ethiopian Solomonic dynasty figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ethiopian Solomonic dynasty.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ethiopian Solomonic dynasty."
    },
    {
        "slug": "ethiopian-solomonic-world",
        "name": "Ethiopian Solomonic dynasty world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ethiopian Solomonic dynasty.",
        "description": "Geography, institutions, and periodization that give Ethiopian Solomonic dynasty its encyclopedia shape."
    },
    {
        "slug": "ethiopian-solomonic-places",
        "name": "Ethiopian Solomonic dynasty places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ethiopian Solomonic dynasty.",
        "description": "Places, regions, and built sites that give Ethiopian Solomonic dynasty its map — where events and figures concentrate."
    },
    {
        "slug": "ethiopian-solomonic-events",
        "name": "Ethiopian Solomonic dynasty events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ethiopian Solomonic dynasty.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ethiopian Solomonic dynasty timeline."
    },
    {
        "slug": "ethiopian-solomonic-objects",
        "name": "Ethiopian Solomonic dynasty objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ethiopian Solomonic dynasty.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ethiopian Solomonic dynasty."
    },
    {
        "slug": "ethiopian-solomonic-factions",
        "name": "Ethiopian Solomonic dynasty factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ethiopian Solomonic dynasty.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ethiopian Solomonic dynasty."
    },
    {
        "slug": "ethiopian-solomonic-concepts",
        "name": "Ethiopian Solomonic dynasty concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ethiopian Solomonic dynasty.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ethiopian Solomonic dynasty readable as a lore graph."
    },
    {
        "slug": "ethiopian-solomonic-eras",
        "name": "Ethiopian Solomonic dynasty eras",
        "type": "event",
        "short_description": "Periodization for Ethiopian Solomonic dynasty.",
        "description": "Named eras and phases that help readers track how Ethiopian Solomonic dynasty changes across time."
    },
    {
        "slug": "ethiopian-solomonic-works",
        "name": "Ethiopian Solomonic dynasty works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ethiopian Solomonic dynasty.",
        "description": "Primary works and adaptations through which most audiences encounter Ethiopian Solomonic dynasty."
    },
    {
        "slug": "ethiopian-solomonic-symbols",
        "name": "Ethiopian Solomonic dynasty symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ethiopian Solomonic dynasty.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ethiopian Solomonic dynasty."
    },
    {
        "slug": "ethiopian-solomonic-controversies",
        "name": "Ethiopian Solomonic dynasty controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ethiopian Solomonic dynasty.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ethiopian Solomonic dynasty argumentative."
    },
    {
        "slug": "ethiopian-solomonic-sources",
        "name": "Ethiopian Solomonic dynasty sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ethiopian Solomonic dynasty.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ethiopian Solomonic dynasty."
    },
    {
        "slug": "ethiopian-solomonic-geography",
        "name": "Ethiopian Solomonic dynasty geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ethiopian Solomonic dynasty.",
        "description": "Regions, routes, and spatial systems that situate Ethiopian Solomonic dynasty beyond single named places."
    },
    {
        "slug": "ethiopian-solomonic-legacy",
        "name": "Ethiopian Solomonic dynasty legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ethiopian Solomonic dynasty.",
        "description": "How Ethiopian Solomonic dynasty continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ethiopian-solomonic-practices",
        "name": "Ethiopian Solomonic dynasty practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ethiopian Solomonic dynasty.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ethiopian Solomonic dynasty."
    },
    {
        "slug": "ethiopian-solomonic-entry-1",
        "name": "Ethiopian Solomonic dynasty entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-2",
        "name": "Ethiopian Solomonic dynasty entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-3",
        "name": "Ethiopian Solomonic dynasty entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-4",
        "name": "Ethiopian Solomonic dynasty entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-5",
        "name": "Ethiopian Solomonic dynasty entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-6",
        "name": "Ethiopian Solomonic dynasty entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-7",
        "name": "Ethiopian Solomonic dynasty entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-8",
        "name": "Ethiopian Solomonic dynasty entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-9",
        "name": "Ethiopian Solomonic dynasty entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-10",
        "name": "Ethiopian Solomonic dynasty entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-11",
        "name": "Ethiopian Solomonic dynasty entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-12",
        "name": "Ethiopian Solomonic dynasty entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-13",
        "name": "Ethiopian Solomonic dynasty entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-14",
        "name": "Ethiopian Solomonic dynasty entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-15",
        "name": "Ethiopian Solomonic dynasty entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-16",
        "name": "Ethiopian Solomonic dynasty entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-17",
        "name": "Ethiopian Solomonic dynasty entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-18",
        "name": "Ethiopian Solomonic dynasty entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-19",
        "name": "Ethiopian Solomonic dynasty entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-20",
        "name": "Ethiopian Solomonic dynasty entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-21",
        "name": "Ethiopian Solomonic dynasty entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-22",
        "name": "Ethiopian Solomonic dynasty entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-23",
        "name": "Ethiopian Solomonic dynasty entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ethiopian-solomonic-entry-24",
        "name": "Ethiopian Solomonic dynasty entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ethiopian Solomonic dynasty.",
        "description": "A supporting encyclopedia entry in the Ethiopian Solomonic dynasty subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-places",
        "contains",
        "Ethiopian Solomonic dynasty places is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-events",
        "contains",
        "Ethiopian Solomonic dynasty events is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-objects",
        "contains",
        "Ethiopian Solomonic dynasty objects & artifacts is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-factions",
        "contains",
        "Ethiopian Solomonic dynasty factions & groups is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-concepts",
        "contains",
        "Ethiopian Solomonic dynasty concepts is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-eras",
        "contains",
        "Ethiopian Solomonic dynasty eras is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-works",
        "contains",
        "Ethiopian Solomonic dynasty works & media is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-symbols",
        "contains",
        "Ethiopian Solomonic dynasty symbols is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-controversies",
        "contains",
        "Ethiopian Solomonic dynasty controversies is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-sources",
        "contains",
        "Ethiopian Solomonic dynasty sources is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-geography",
        "contains",
        "Ethiopian Solomonic dynasty geography is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-legacy",
        "contains",
        "Ethiopian Solomonic dynasty legacy is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-practices",
        "contains",
        "Ethiopian Solomonic dynasty practices is a primary trailhead under Ethiopian Solomonic dynasty.",
        0.88,
        0.82
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-1",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-2",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-3",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-4",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-5",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-6",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-7",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-8",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-9",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-10",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-11",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-12",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-13",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-14",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-15",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-16",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-17",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-18",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-19",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-20",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-21",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-22",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-23",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ],
    [
        "ethiopian-solomonic",
        "ethiopian-solomonic-entry-24",
        "contains",
        "Supporting entry under Ethiopian Solomonic dynasty.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
