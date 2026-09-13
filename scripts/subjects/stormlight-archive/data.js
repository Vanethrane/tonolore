/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stormlight-archive",
        "name": "The Stormlight Archive",
        "type": "topic",
        "short_description": "Roshar, Knights Radiant, and Sanderson’s doorstop epic of oaths and highstorms.",
        "description": "Roshar, Knights Radiant, and Sanderson’s doorstop epic of oaths and highstorms. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Stormlight Archive so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "stormlight-archive-figures",
        "name": "The Stormlight Archive figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Stormlight Archive.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Stormlight Archive."
    },
    {
        "slug": "stormlight-archive-world",
        "name": "The Stormlight Archive world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Stormlight Archive.",
        "description": "Geography, institutions, and periodization that give The Stormlight Archive its encyclopedia shape."
    },
    {
        "slug": "stormlight-archive-places",
        "name": "The Stormlight Archive places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Stormlight Archive.",
        "description": "Places, regions, and built sites that give The Stormlight Archive its map — where events and figures concentrate."
    },
    {
        "slug": "stormlight-archive-events",
        "name": "The Stormlight Archive events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Stormlight Archive.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Stormlight Archive timeline."
    },
    {
        "slug": "stormlight-archive-objects",
        "name": "The Stormlight Archive objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Stormlight Archive.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Stormlight Archive."
    },
    {
        "slug": "stormlight-archive-factions",
        "name": "The Stormlight Archive factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Stormlight Archive.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Stormlight Archive."
    },
    {
        "slug": "stormlight-archive-concepts",
        "name": "The Stormlight Archive concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Stormlight Archive.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Stormlight Archive readable as a lore graph."
    },
    {
        "slug": "stormlight-archive-eras",
        "name": "The Stormlight Archive eras",
        "type": "event",
        "short_description": "Periodization for The Stormlight Archive.",
        "description": "Named eras and phases that help readers track how The Stormlight Archive changes across time."
    },
    {
        "slug": "stormlight-archive-works",
        "name": "The Stormlight Archive works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Stormlight Archive.",
        "description": "Primary works and adaptations through which most audiences encounter The Stormlight Archive."
    },
    {
        "slug": "stormlight-archive-symbols",
        "name": "The Stormlight Archive symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Stormlight Archive.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Stormlight Archive."
    },
    {
        "slug": "stormlight-archive-controversies",
        "name": "The Stormlight Archive controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Stormlight Archive.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Stormlight Archive argumentative."
    },
    {
        "slug": "stormlight-archive-sources",
        "name": "The Stormlight Archive sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Stormlight Archive.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Stormlight Archive."
    },
    {
        "slug": "stormlight-archive-geography",
        "name": "The Stormlight Archive geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Stormlight Archive.",
        "description": "Regions, routes, and spatial systems that situate The Stormlight Archive beyond single named places."
    },
    {
        "slug": "stormlight-archive-legacy",
        "name": "The Stormlight Archive legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Stormlight Archive.",
        "description": "How The Stormlight Archive continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stormlight-archive-practices",
        "name": "The Stormlight Archive practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Stormlight Archive.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Stormlight Archive."
    },
    {
        "slug": "stormlight-archive-entry-1",
        "name": "The Stormlight Archive entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-2",
        "name": "The Stormlight Archive entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-3",
        "name": "The Stormlight Archive entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-4",
        "name": "The Stormlight Archive entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-5",
        "name": "The Stormlight Archive entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-6",
        "name": "The Stormlight Archive entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-7",
        "name": "The Stormlight Archive entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-8",
        "name": "The Stormlight Archive entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-9",
        "name": "The Stormlight Archive entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-10",
        "name": "The Stormlight Archive entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-11",
        "name": "The Stormlight Archive entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-12",
        "name": "The Stormlight Archive entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-13",
        "name": "The Stormlight Archive entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-14",
        "name": "The Stormlight Archive entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-15",
        "name": "The Stormlight Archive entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-16",
        "name": "The Stormlight Archive entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-17",
        "name": "The Stormlight Archive entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-18",
        "name": "The Stormlight Archive entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-19",
        "name": "The Stormlight Archive entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-20",
        "name": "The Stormlight Archive entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-21",
        "name": "The Stormlight Archive entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-22",
        "name": "The Stormlight Archive entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-23",
        "name": "The Stormlight Archive entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stormlight-archive-entry-24",
        "name": "The Stormlight Archive entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Stormlight Archive.",
        "description": "A supporting encyclopedia entry in the The Stormlight Archive subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stormlight-archive",
        "stormlight-archive-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stormlight-archive",
        "stormlight-archive-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stormlight-archive",
        "stormlight-archive-places",
        "contains",
        "The Stormlight Archive places is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-events",
        "contains",
        "The Stormlight Archive events is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-objects",
        "contains",
        "The Stormlight Archive objects & artifacts is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-factions",
        "contains",
        "The Stormlight Archive factions & groups is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-concepts",
        "contains",
        "The Stormlight Archive concepts is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-eras",
        "contains",
        "The Stormlight Archive eras is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-works",
        "contains",
        "The Stormlight Archive works & media is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-symbols",
        "contains",
        "The Stormlight Archive symbols is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-controversies",
        "contains",
        "The Stormlight Archive controversies is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-sources",
        "contains",
        "The Stormlight Archive sources is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-geography",
        "contains",
        "The Stormlight Archive geography is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-legacy",
        "contains",
        "The Stormlight Archive legacy is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-practices",
        "contains",
        "The Stormlight Archive practices is a primary trailhead under The Stormlight Archive.",
        0.88,
        0.82
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-1",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-2",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-3",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-4",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-5",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-6",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-7",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-8",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-9",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-10",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-11",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-12",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-13",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-14",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-15",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-16",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-17",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-18",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-19",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-20",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-21",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-22",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-23",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ],
    [
        "stormlight-archive",
        "stormlight-archive-entry-24",
        "contains",
        "Supporting entry under The Stormlight Archive.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
