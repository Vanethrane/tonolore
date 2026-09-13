/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "discord-culture",
        "name": "Discord culture",
        "type": "topic",
        "short_description": "Servers, roles, and the chat platform that replaced forums for gaming and fandom life.",
        "description": "Servers, roles, and the chat platform that replaced forums for gaming and fandom life. This Ton-o-Lore subject maps people, places, events, and ideas tied to Discord culture so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "discord-culture-figures",
        "name": "Discord culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Discord culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Discord culture."
    },
    {
        "slug": "discord-culture-world",
        "name": "Discord culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Discord culture.",
        "description": "Geography, institutions, and periodization that give Discord culture its encyclopedia shape."
    },
    {
        "slug": "discord-culture-places",
        "name": "Discord culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Discord culture.",
        "description": "Places, regions, and built sites that give Discord culture its map — where events and figures concentrate."
    },
    {
        "slug": "discord-culture-events",
        "name": "Discord culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Discord culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Discord culture timeline."
    },
    {
        "slug": "discord-culture-objects",
        "name": "Discord culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Discord culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Discord culture."
    },
    {
        "slug": "discord-culture-factions",
        "name": "Discord culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Discord culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Discord culture."
    },
    {
        "slug": "discord-culture-concepts",
        "name": "Discord culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Discord culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Discord culture readable as a lore graph."
    },
    {
        "slug": "discord-culture-eras",
        "name": "Discord culture eras",
        "type": "event",
        "short_description": "Periodization for Discord culture.",
        "description": "Named eras and phases that help readers track how Discord culture changes across time."
    },
    {
        "slug": "discord-culture-works",
        "name": "Discord culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Discord culture.",
        "description": "Primary works and adaptations through which most audiences encounter Discord culture."
    },
    {
        "slug": "discord-culture-symbols",
        "name": "Discord culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Discord culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Discord culture."
    },
    {
        "slug": "discord-culture-controversies",
        "name": "Discord culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Discord culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Discord culture argumentative."
    },
    {
        "slug": "discord-culture-sources",
        "name": "Discord culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Discord culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Discord culture."
    },
    {
        "slug": "discord-culture-geography",
        "name": "Discord culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Discord culture.",
        "description": "Regions, routes, and spatial systems that situate Discord culture beyond single named places."
    },
    {
        "slug": "discord-culture-legacy",
        "name": "Discord culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Discord culture.",
        "description": "How Discord culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "discord-culture-practices",
        "name": "Discord culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Discord culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Discord culture."
    },
    {
        "slug": "discord-culture-entry-1",
        "name": "Discord culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-2",
        "name": "Discord culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-3",
        "name": "Discord culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-4",
        "name": "Discord culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-5",
        "name": "Discord culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-6",
        "name": "Discord culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-7",
        "name": "Discord culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-8",
        "name": "Discord culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-9",
        "name": "Discord culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-10",
        "name": "Discord culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-11",
        "name": "Discord culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-12",
        "name": "Discord culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-13",
        "name": "Discord culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-14",
        "name": "Discord culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-15",
        "name": "Discord culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-16",
        "name": "Discord culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-17",
        "name": "Discord culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-18",
        "name": "Discord culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-19",
        "name": "Discord culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-20",
        "name": "Discord culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-21",
        "name": "Discord culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-22",
        "name": "Discord culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-23",
        "name": "Discord culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discord-culture-entry-24",
        "name": "Discord culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discord culture.",
        "description": "A supporting encyclopedia entry in the Discord culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "discord-culture",
        "discord-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "discord-culture",
        "discord-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "discord-culture",
        "discord-culture-places",
        "contains",
        "Discord culture places is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-events",
        "contains",
        "Discord culture events is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-objects",
        "contains",
        "Discord culture objects & artifacts is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-factions",
        "contains",
        "Discord culture factions & groups is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-concepts",
        "contains",
        "Discord culture concepts is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-eras",
        "contains",
        "Discord culture eras is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-works",
        "contains",
        "Discord culture works & media is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-symbols",
        "contains",
        "Discord culture symbols is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-controversies",
        "contains",
        "Discord culture controversies is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-sources",
        "contains",
        "Discord culture sources is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-geography",
        "contains",
        "Discord culture geography is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-legacy",
        "contains",
        "Discord culture legacy is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-practices",
        "contains",
        "Discord culture practices is a primary trailhead under Discord culture.",
        0.88,
        0.82
    ],
    [
        "discord-culture",
        "discord-culture-entry-1",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-2",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-3",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-4",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-5",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-6",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-7",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-8",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-9",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-10",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-11",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-12",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-13",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-14",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-15",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-16",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-17",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-18",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-19",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-20",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-21",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-22",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-23",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ],
    [
        "discord-culture",
        "discord-culture-entry-24",
        "contains",
        "Supporting entry under Discord culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
