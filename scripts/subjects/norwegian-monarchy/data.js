/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "norwegian-monarchy",
        "name": "Norwegian monarchy",
        "type": "topic",
        "short_description": "Independent restoration, polar explorers’ patronage, and Norway’s modern royal house.",
        "description": "Independent restoration, polar explorers’ patronage, and Norway’s modern royal house. This Ton-o-Lore subject maps people, places, events, and ideas tied to Norwegian monarchy so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "norwegian-monarchy-figures",
        "name": "Norwegian monarchy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Norwegian monarchy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Norwegian monarchy."
    },
    {
        "slug": "norwegian-monarchy-world",
        "name": "Norwegian monarchy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Norwegian monarchy.",
        "description": "Geography, institutions, and periodization that give Norwegian monarchy its encyclopedia shape."
    },
    {
        "slug": "norwegian-monarchy-places",
        "name": "Norwegian monarchy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Norwegian monarchy.",
        "description": "Places, regions, and built sites that give Norwegian monarchy its map — where events and figures concentrate."
    },
    {
        "slug": "norwegian-monarchy-events",
        "name": "Norwegian monarchy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Norwegian monarchy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Norwegian monarchy timeline."
    },
    {
        "slug": "norwegian-monarchy-objects",
        "name": "Norwegian monarchy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Norwegian monarchy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Norwegian monarchy."
    },
    {
        "slug": "norwegian-monarchy-factions",
        "name": "Norwegian monarchy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Norwegian monarchy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Norwegian monarchy."
    },
    {
        "slug": "norwegian-monarchy-concepts",
        "name": "Norwegian monarchy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Norwegian monarchy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Norwegian monarchy readable as a lore graph."
    },
    {
        "slug": "norwegian-monarchy-eras",
        "name": "Norwegian monarchy eras",
        "type": "event",
        "short_description": "Periodization for Norwegian monarchy.",
        "description": "Named eras and phases that help readers track how Norwegian monarchy changes across time."
    },
    {
        "slug": "norwegian-monarchy-works",
        "name": "Norwegian monarchy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Norwegian monarchy.",
        "description": "Primary works and adaptations through which most audiences encounter Norwegian monarchy."
    },
    {
        "slug": "norwegian-monarchy-symbols",
        "name": "Norwegian monarchy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Norwegian monarchy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Norwegian monarchy."
    },
    {
        "slug": "norwegian-monarchy-controversies",
        "name": "Norwegian monarchy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Norwegian monarchy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Norwegian monarchy argumentative."
    },
    {
        "slug": "norwegian-monarchy-sources",
        "name": "Norwegian monarchy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Norwegian monarchy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Norwegian monarchy."
    },
    {
        "slug": "norwegian-monarchy-geography",
        "name": "Norwegian monarchy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Norwegian monarchy.",
        "description": "Regions, routes, and spatial systems that situate Norwegian monarchy beyond single named places."
    },
    {
        "slug": "norwegian-monarchy-legacy",
        "name": "Norwegian monarchy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Norwegian monarchy.",
        "description": "How Norwegian monarchy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "norwegian-monarchy-practices",
        "name": "Norwegian monarchy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Norwegian monarchy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Norwegian monarchy."
    },
    {
        "slug": "norwegian-monarchy-entry-1",
        "name": "Norwegian monarchy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-2",
        "name": "Norwegian monarchy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-3",
        "name": "Norwegian monarchy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-4",
        "name": "Norwegian monarchy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-5",
        "name": "Norwegian monarchy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-6",
        "name": "Norwegian monarchy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-7",
        "name": "Norwegian monarchy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-8",
        "name": "Norwegian monarchy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-9",
        "name": "Norwegian monarchy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-10",
        "name": "Norwegian monarchy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-11",
        "name": "Norwegian monarchy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-12",
        "name": "Norwegian monarchy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-13",
        "name": "Norwegian monarchy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-14",
        "name": "Norwegian monarchy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-15",
        "name": "Norwegian monarchy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-16",
        "name": "Norwegian monarchy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-17",
        "name": "Norwegian monarchy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-18",
        "name": "Norwegian monarchy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-19",
        "name": "Norwegian monarchy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-20",
        "name": "Norwegian monarchy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-21",
        "name": "Norwegian monarchy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-22",
        "name": "Norwegian monarchy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-23",
        "name": "Norwegian monarchy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "norwegian-monarchy-entry-24",
        "name": "Norwegian monarchy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Norwegian monarchy.",
        "description": "A supporting encyclopedia entry in the Norwegian monarchy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "norwegian-monarchy",
        "norwegian-monarchy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-places",
        "contains",
        "Norwegian monarchy places is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-events",
        "contains",
        "Norwegian monarchy events is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-objects",
        "contains",
        "Norwegian monarchy objects & artifacts is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-factions",
        "contains",
        "Norwegian monarchy factions & groups is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-concepts",
        "contains",
        "Norwegian monarchy concepts is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-eras",
        "contains",
        "Norwegian monarchy eras is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-works",
        "contains",
        "Norwegian monarchy works & media is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-symbols",
        "contains",
        "Norwegian monarchy symbols is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-controversies",
        "contains",
        "Norwegian monarchy controversies is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-sources",
        "contains",
        "Norwegian monarchy sources is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-geography",
        "contains",
        "Norwegian monarchy geography is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-legacy",
        "contains",
        "Norwegian monarchy legacy is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-practices",
        "contains",
        "Norwegian monarchy practices is a primary trailhead under Norwegian monarchy.",
        0.88,
        0.82
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-1",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-2",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-3",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-4",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-5",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-6",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-7",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-8",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-9",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-10",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-11",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-12",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-13",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-14",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-15",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-16",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-17",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-18",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-19",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-20",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-21",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-22",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-23",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ],
    [
        "norwegian-monarchy",
        "norwegian-monarchy-entry-24",
        "contains",
        "Supporting entry under Norwegian monarchy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
