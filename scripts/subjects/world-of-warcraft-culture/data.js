/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-of-warcraft-culture",
        "name": "WoW internet culture",
        "type": "topic",
        "short_description": "Raid memes, private servers, and the MMO that spilled endlessly into forums and YouTube.",
        "description": "Raid memes, private servers, and the MMO that spilled endlessly into forums and YouTube. This Ton-o-Lore subject maps people, places, events, and ideas tied to WoW internet culture so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-figures",
        "name": "WoW internet culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to WoW internet culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring WoW internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-world",
        "name": "WoW internet culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame WoW internet culture.",
        "description": "Geography, institutions, and periodization that give WoW internet culture its encyclopedia shape."
    },
    {
        "slug": "world-of-warcraft-culture-places",
        "name": "WoW internet culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame WoW internet culture.",
        "description": "Places, regions, and built sites that give WoW internet culture its map — where events and figures concentrate."
    },
    {
        "slug": "world-of-warcraft-culture-events",
        "name": "WoW internet culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in WoW internet culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the WoW internet culture timeline."
    },
    {
        "slug": "world-of-warcraft-culture-objects",
        "name": "WoW internet culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to WoW internet culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through WoW internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-factions",
        "name": "WoW internet culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside WoW internet culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in WoW internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-concepts",
        "name": "WoW internet culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize WoW internet culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make WoW internet culture readable as a lore graph."
    },
    {
        "slug": "world-of-warcraft-culture-eras",
        "name": "WoW internet culture eras",
        "type": "event",
        "short_description": "Periodization for WoW internet culture.",
        "description": "Named eras and phases that help readers track how WoW internet culture changes across time."
    },
    {
        "slug": "world-of-warcraft-culture-works",
        "name": "WoW internet culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry WoW internet culture.",
        "description": "Primary works and adaptations through which most audiences encounter WoW internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-symbols",
        "name": "WoW internet culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with WoW internet culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside WoW internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-controversies",
        "name": "WoW internet culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in WoW internet culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep WoW internet culture argumentative."
    },
    {
        "slug": "world-of-warcraft-culture-sources",
        "name": "WoW internet culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into WoW internet culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify WoW internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-geography",
        "name": "WoW internet culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for WoW internet culture.",
        "description": "Regions, routes, and spatial systems that situate WoW internet culture beyond single named places."
    },
    {
        "slug": "world-of-warcraft-culture-legacy",
        "name": "WoW internet culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of WoW internet culture.",
        "description": "How WoW internet culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "world-of-warcraft-culture-practices",
        "name": "WoW internet culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in WoW internet culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in WoW internet culture."
    },
    {
        "slug": "world-of-warcraft-culture-entry-1",
        "name": "WoW internet culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-2",
        "name": "WoW internet culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-3",
        "name": "WoW internet culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-4",
        "name": "WoW internet culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-5",
        "name": "WoW internet culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-6",
        "name": "WoW internet culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-7",
        "name": "WoW internet culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-8",
        "name": "WoW internet culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-9",
        "name": "WoW internet culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-10",
        "name": "WoW internet culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-11",
        "name": "WoW internet culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-12",
        "name": "WoW internet culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-13",
        "name": "WoW internet culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-14",
        "name": "WoW internet culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-15",
        "name": "WoW internet culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-16",
        "name": "WoW internet culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-17",
        "name": "WoW internet culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-18",
        "name": "WoW internet culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-19",
        "name": "WoW internet culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-20",
        "name": "WoW internet culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-21",
        "name": "WoW internet culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-22",
        "name": "WoW internet culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-23",
        "name": "WoW internet culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-of-warcraft-culture-entry-24",
        "name": "WoW internet culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside WoW internet culture.",
        "description": "A supporting encyclopedia entry in the WoW internet culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-places",
        "contains",
        "WoW internet culture places is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-events",
        "contains",
        "WoW internet culture events is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-objects",
        "contains",
        "WoW internet culture objects & artifacts is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-factions",
        "contains",
        "WoW internet culture factions & groups is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-concepts",
        "contains",
        "WoW internet culture concepts is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-eras",
        "contains",
        "WoW internet culture eras is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-works",
        "contains",
        "WoW internet culture works & media is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-symbols",
        "contains",
        "WoW internet culture symbols is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-controversies",
        "contains",
        "WoW internet culture controversies is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-sources",
        "contains",
        "WoW internet culture sources is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-geography",
        "contains",
        "WoW internet culture geography is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-legacy",
        "contains",
        "WoW internet culture legacy is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-practices",
        "contains",
        "WoW internet culture practices is a primary trailhead under WoW internet culture.",
        0.88,
        0.82
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-1",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-2",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-3",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-4",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-5",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-6",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-7",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-8",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-9",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-10",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-11",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-12",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-13",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-14",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-15",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-16",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-17",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-18",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-19",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-20",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-21",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-22",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-23",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ],
    [
        "world-of-warcraft-culture",
        "world-of-warcraft-culture-entry-24",
        "contains",
        "Supporting entry under WoW internet culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
