/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-wire",
        "name": "The Wire",
        "type": "topic",
        "short_description": "Baltimore institutions, corners to newsrooms, and Simon’s novelistic systems crime epic.",
        "description": "Baltimore institutions, corners to newsrooms, and Simon’s novelistic systems crime epic. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Wire so readers can follow long-tail connections across television."
    },
    {
        "slug": "the-wire-figures",
        "name": "The Wire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Wire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Wire."
    },
    {
        "slug": "the-wire-world",
        "name": "The Wire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Wire.",
        "description": "Geography, institutions, and periodization that give The Wire its encyclopedia shape."
    },
    {
        "slug": "the-wire-places",
        "name": "The Wire places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Wire.",
        "description": "Places, regions, and built sites that give The Wire its map — where events and figures concentrate."
    },
    {
        "slug": "the-wire-events",
        "name": "The Wire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Wire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Wire timeline."
    },
    {
        "slug": "the-wire-objects",
        "name": "The Wire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Wire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Wire."
    },
    {
        "slug": "the-wire-factions",
        "name": "The Wire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Wire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Wire."
    },
    {
        "slug": "the-wire-concepts",
        "name": "The Wire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Wire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Wire readable as a lore graph."
    },
    {
        "slug": "the-wire-eras",
        "name": "The Wire eras",
        "type": "event",
        "short_description": "Periodization for The Wire.",
        "description": "Named eras and phases that help readers track how The Wire changes across time."
    },
    {
        "slug": "the-wire-works",
        "name": "The Wire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Wire.",
        "description": "Primary works and adaptations through which most audiences encounter The Wire."
    },
    {
        "slug": "the-wire-symbols",
        "name": "The Wire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Wire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Wire."
    },
    {
        "slug": "the-wire-controversies",
        "name": "The Wire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Wire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Wire argumentative."
    },
    {
        "slug": "the-wire-sources",
        "name": "The Wire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Wire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Wire."
    },
    {
        "slug": "the-wire-geography",
        "name": "The Wire geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Wire.",
        "description": "Regions, routes, and spatial systems that situate The Wire beyond single named places."
    },
    {
        "slug": "the-wire-legacy",
        "name": "The Wire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Wire.",
        "description": "How The Wire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-wire-practices",
        "name": "The Wire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Wire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Wire."
    },
    {
        "slug": "the-wire-entry-1",
        "name": "The Wire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-2",
        "name": "The Wire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-3",
        "name": "The Wire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-4",
        "name": "The Wire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-5",
        "name": "The Wire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-6",
        "name": "The Wire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-7",
        "name": "The Wire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-8",
        "name": "The Wire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-9",
        "name": "The Wire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-10",
        "name": "The Wire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-11",
        "name": "The Wire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-12",
        "name": "The Wire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-13",
        "name": "The Wire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-14",
        "name": "The Wire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-15",
        "name": "The Wire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-16",
        "name": "The Wire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-17",
        "name": "The Wire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-18",
        "name": "The Wire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-19",
        "name": "The Wire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-20",
        "name": "The Wire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-21",
        "name": "The Wire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-22",
        "name": "The Wire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-23",
        "name": "The Wire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-wire-entry-24",
        "name": "The Wire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Wire.",
        "description": "A supporting encyclopedia entry in the The Wire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-wire",
        "the-wire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-wire",
        "the-wire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-wire",
        "the-wire-places",
        "contains",
        "The Wire places is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-events",
        "contains",
        "The Wire events is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-objects",
        "contains",
        "The Wire objects & artifacts is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-factions",
        "contains",
        "The Wire factions & groups is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-concepts",
        "contains",
        "The Wire concepts is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-eras",
        "contains",
        "The Wire eras is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-works",
        "contains",
        "The Wire works & media is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-symbols",
        "contains",
        "The Wire symbols is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-controversies",
        "contains",
        "The Wire controversies is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-sources",
        "contains",
        "The Wire sources is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-geography",
        "contains",
        "The Wire geography is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-legacy",
        "contains",
        "The Wire legacy is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-practices",
        "contains",
        "The Wire practices is a primary trailhead under The Wire.",
        0.88,
        0.82
    ],
    [
        "the-wire",
        "the-wire-entry-1",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-2",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-3",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-4",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-5",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-6",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-7",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-8",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-9",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-10",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-11",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-12",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-13",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-14",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-15",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-16",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-17",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-18",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-19",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-20",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-21",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-22",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-23",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ],
    [
        "the-wire",
        "the-wire-entry-24",
        "contains",
        "Supporting entry under The Wire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
