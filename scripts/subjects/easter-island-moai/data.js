/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "easter-island-moai",
        "name": "Easter Island moai",
        "type": "topic",
        "short_description": "Stone giants, ahu platforms, and the Rapa Nui statue tradition wrapped in collapse myths.",
        "description": "Stone giants, ahu platforms, and the Rapa Nui statue tradition wrapped in collapse myths. This Ton-o-Lore subject maps people, places, events, and ideas tied to Easter Island moai so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "easter-island-moai-figures",
        "name": "Easter Island moai figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Easter Island moai.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Easter Island moai."
    },
    {
        "slug": "easter-island-moai-world",
        "name": "Easter Island moai world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Easter Island moai.",
        "description": "Geography, institutions, and periodization that give Easter Island moai its encyclopedia shape."
    },
    {
        "slug": "easter-island-moai-places",
        "name": "Easter Island moai places",
        "type": "place",
        "short_description": "Locations and geographies that frame Easter Island moai.",
        "description": "Places, regions, and built sites that give Easter Island moai its map — where events and figures concentrate."
    },
    {
        "slug": "easter-island-moai-events",
        "name": "Easter Island moai events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Easter Island moai.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Easter Island moai timeline."
    },
    {
        "slug": "easter-island-moai-objects",
        "name": "Easter Island moai objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Easter Island moai.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Easter Island moai."
    },
    {
        "slug": "easter-island-moai-factions",
        "name": "Easter Island moai factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Easter Island moai.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Easter Island moai."
    },
    {
        "slug": "easter-island-moai-concepts",
        "name": "Easter Island moai concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Easter Island moai.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Easter Island moai readable as a lore graph."
    },
    {
        "slug": "easter-island-moai-eras",
        "name": "Easter Island moai eras",
        "type": "event",
        "short_description": "Periodization for Easter Island moai.",
        "description": "Named eras and phases that help readers track how Easter Island moai changes across time."
    },
    {
        "slug": "easter-island-moai-works",
        "name": "Easter Island moai works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Easter Island moai.",
        "description": "Primary works and adaptations through which most audiences encounter Easter Island moai."
    },
    {
        "slug": "easter-island-moai-symbols",
        "name": "Easter Island moai symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Easter Island moai.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Easter Island moai."
    },
    {
        "slug": "easter-island-moai-controversies",
        "name": "Easter Island moai controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Easter Island moai.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Easter Island moai argumentative."
    },
    {
        "slug": "easter-island-moai-sources",
        "name": "Easter Island moai sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Easter Island moai.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Easter Island moai."
    },
    {
        "slug": "easter-island-moai-geography",
        "name": "Easter Island moai geography",
        "type": "place",
        "short_description": "Broader geographic framing for Easter Island moai.",
        "description": "Regions, routes, and spatial systems that situate Easter Island moai beyond single named places."
    },
    {
        "slug": "easter-island-moai-legacy",
        "name": "Easter Island moai legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Easter Island moai.",
        "description": "How Easter Island moai continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "easter-island-moai-practices",
        "name": "Easter Island moai practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Easter Island moai.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Easter Island moai."
    },
    {
        "slug": "easter-island-moai-entry-1",
        "name": "Easter Island moai entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-2",
        "name": "Easter Island moai entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-3",
        "name": "Easter Island moai entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-4",
        "name": "Easter Island moai entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-5",
        "name": "Easter Island moai entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-6",
        "name": "Easter Island moai entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-7",
        "name": "Easter Island moai entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-8",
        "name": "Easter Island moai entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-9",
        "name": "Easter Island moai entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-10",
        "name": "Easter Island moai entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-11",
        "name": "Easter Island moai entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-12",
        "name": "Easter Island moai entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-13",
        "name": "Easter Island moai entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-14",
        "name": "Easter Island moai entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-15",
        "name": "Easter Island moai entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-16",
        "name": "Easter Island moai entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-17",
        "name": "Easter Island moai entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-18",
        "name": "Easter Island moai entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-19",
        "name": "Easter Island moai entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-20",
        "name": "Easter Island moai entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-21",
        "name": "Easter Island moai entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-22",
        "name": "Easter Island moai entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-23",
        "name": "Easter Island moai entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "easter-island-moai-entry-24",
        "name": "Easter Island moai entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Easter Island moai.",
        "description": "A supporting encyclopedia entry in the Easter Island moai subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "easter-island-moai",
        "easter-island-moai-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "easter-island-moai",
        "easter-island-moai-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "easter-island-moai",
        "easter-island-moai-places",
        "contains",
        "Easter Island moai places is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-events",
        "contains",
        "Easter Island moai events is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-objects",
        "contains",
        "Easter Island moai objects & artifacts is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-factions",
        "contains",
        "Easter Island moai factions & groups is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-concepts",
        "contains",
        "Easter Island moai concepts is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-eras",
        "contains",
        "Easter Island moai eras is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-works",
        "contains",
        "Easter Island moai works & media is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-symbols",
        "contains",
        "Easter Island moai symbols is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-controversies",
        "contains",
        "Easter Island moai controversies is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-sources",
        "contains",
        "Easter Island moai sources is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-geography",
        "contains",
        "Easter Island moai geography is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-legacy",
        "contains",
        "Easter Island moai legacy is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-practices",
        "contains",
        "Easter Island moai practices is a primary trailhead under Easter Island moai.",
        0.88,
        0.82
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-1",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-2",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-3",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-4",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-5",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-6",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-7",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-8",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-9",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-10",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-11",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-12",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-13",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-14",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-15",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-16",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-17",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-18",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-19",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-20",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-21",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-22",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-23",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ],
    [
        "easter-island-moai",
        "easter-island-moai-entry-24",
        "contains",
        "Supporting entry under Easter Island moai.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
