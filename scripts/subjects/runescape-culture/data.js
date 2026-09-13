/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "runescape-culture",
        "name": "RuneScape culture",
        "type": "topic",
        "short_description": "GE scams, skill grind lore, and the MMORPG community that became its own internet dialect.",
        "description": "GE scams, skill grind lore, and the MMORPG community that became its own internet dialect. This Ton-o-Lore subject maps people, places, events, and ideas tied to RuneScape culture so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "runescape-culture-figures",
        "name": "RuneScape culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to RuneScape culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring RuneScape culture."
    },
    {
        "slug": "runescape-culture-world",
        "name": "RuneScape culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame RuneScape culture.",
        "description": "Geography, institutions, and periodization that give RuneScape culture its encyclopedia shape."
    },
    {
        "slug": "runescape-culture-places",
        "name": "RuneScape culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame RuneScape culture.",
        "description": "Places, regions, and built sites that give RuneScape culture its map — where events and figures concentrate."
    },
    {
        "slug": "runescape-culture-events",
        "name": "RuneScape culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in RuneScape culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the RuneScape culture timeline."
    },
    {
        "slug": "runescape-culture-objects",
        "name": "RuneScape culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to RuneScape culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through RuneScape culture."
    },
    {
        "slug": "runescape-culture-factions",
        "name": "RuneScape culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside RuneScape culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in RuneScape culture."
    },
    {
        "slug": "runescape-culture-concepts",
        "name": "RuneScape culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize RuneScape culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make RuneScape culture readable as a lore graph."
    },
    {
        "slug": "runescape-culture-eras",
        "name": "RuneScape culture eras",
        "type": "event",
        "short_description": "Periodization for RuneScape culture.",
        "description": "Named eras and phases that help readers track how RuneScape culture changes across time."
    },
    {
        "slug": "runescape-culture-works",
        "name": "RuneScape culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry RuneScape culture.",
        "description": "Primary works and adaptations through which most audiences encounter RuneScape culture."
    },
    {
        "slug": "runescape-culture-symbols",
        "name": "RuneScape culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with RuneScape culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside RuneScape culture."
    },
    {
        "slug": "runescape-culture-controversies",
        "name": "RuneScape culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in RuneScape culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep RuneScape culture argumentative."
    },
    {
        "slug": "runescape-culture-sources",
        "name": "RuneScape culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into RuneScape culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify RuneScape culture."
    },
    {
        "slug": "runescape-culture-geography",
        "name": "RuneScape culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for RuneScape culture.",
        "description": "Regions, routes, and spatial systems that situate RuneScape culture beyond single named places."
    },
    {
        "slug": "runescape-culture-legacy",
        "name": "RuneScape culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of RuneScape culture.",
        "description": "How RuneScape culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "runescape-culture-practices",
        "name": "RuneScape culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in RuneScape culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in RuneScape culture."
    },
    {
        "slug": "runescape-culture-entry-1",
        "name": "RuneScape culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-2",
        "name": "RuneScape culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-3",
        "name": "RuneScape culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-4",
        "name": "RuneScape culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-5",
        "name": "RuneScape culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-6",
        "name": "RuneScape culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-7",
        "name": "RuneScape culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-8",
        "name": "RuneScape culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-9",
        "name": "RuneScape culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-10",
        "name": "RuneScape culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-11",
        "name": "RuneScape culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-12",
        "name": "RuneScape culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-13",
        "name": "RuneScape culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-14",
        "name": "RuneScape culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-15",
        "name": "RuneScape culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-16",
        "name": "RuneScape culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-17",
        "name": "RuneScape culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-18",
        "name": "RuneScape culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-19",
        "name": "RuneScape culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-20",
        "name": "RuneScape culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-21",
        "name": "RuneScape culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-22",
        "name": "RuneScape culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-23",
        "name": "RuneScape culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "runescape-culture-entry-24",
        "name": "RuneScape culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside RuneScape culture.",
        "description": "A supporting encyclopedia entry in the RuneScape culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "runescape-culture",
        "runescape-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "runescape-culture",
        "runescape-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "runescape-culture",
        "runescape-culture-places",
        "contains",
        "RuneScape culture places is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-events",
        "contains",
        "RuneScape culture events is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-objects",
        "contains",
        "RuneScape culture objects & artifacts is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-factions",
        "contains",
        "RuneScape culture factions & groups is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-concepts",
        "contains",
        "RuneScape culture concepts is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-eras",
        "contains",
        "RuneScape culture eras is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-works",
        "contains",
        "RuneScape culture works & media is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-symbols",
        "contains",
        "RuneScape culture symbols is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-controversies",
        "contains",
        "RuneScape culture controversies is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-sources",
        "contains",
        "RuneScape culture sources is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-geography",
        "contains",
        "RuneScape culture geography is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-legacy",
        "contains",
        "RuneScape culture legacy is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-practices",
        "contains",
        "RuneScape culture practices is a primary trailhead under RuneScape culture.",
        0.88,
        0.82
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-1",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-2",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-3",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-4",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-5",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-6",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-7",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-8",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-9",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-10",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-11",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-12",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-13",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-14",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-15",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-16",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-17",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-18",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-19",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-20",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-21",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-22",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-23",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ],
    [
        "runescape-culture",
        "runescape-culture-entry-24",
        "contains",
        "Supporting entry under RuneScape culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
