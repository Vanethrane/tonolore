/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "neuroscience-brain",
        "name": "Neuroscience",
        "type": "topic",
        "short_description": "Neurons, networks, and the brain science rewriting mind and behavior.",
        "description": "Neurons, networks, and the brain science rewriting mind and behavior. This Ton-o-Lore subject maps people, places, events, and ideas tied to Neuroscience so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "neuroscience-brain-figures",
        "name": "Neuroscience figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Neuroscience.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Neuroscience."
    },
    {
        "slug": "neuroscience-brain-world",
        "name": "Neuroscience world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Neuroscience.",
        "description": "Geography, institutions, and periodization that give Neuroscience its encyclopedia shape."
    },
    {
        "slug": "neuroscience-brain-places",
        "name": "Neuroscience places",
        "type": "place",
        "short_description": "Locations and geographies that frame Neuroscience.",
        "description": "Places, regions, and built sites that give Neuroscience its map — where events and figures concentrate."
    },
    {
        "slug": "neuroscience-brain-events",
        "name": "Neuroscience events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Neuroscience.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Neuroscience timeline."
    },
    {
        "slug": "neuroscience-brain-objects",
        "name": "Neuroscience objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Neuroscience.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Neuroscience."
    },
    {
        "slug": "neuroscience-brain-factions",
        "name": "Neuroscience factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Neuroscience.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Neuroscience."
    },
    {
        "slug": "neuroscience-brain-concepts",
        "name": "Neuroscience concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Neuroscience.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Neuroscience readable as a lore graph."
    },
    {
        "slug": "neuroscience-brain-eras",
        "name": "Neuroscience eras",
        "type": "event",
        "short_description": "Periodization for Neuroscience.",
        "description": "Named eras and phases that help readers track how Neuroscience changes across time."
    },
    {
        "slug": "neuroscience-brain-works",
        "name": "Neuroscience works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Neuroscience.",
        "description": "Primary works and adaptations through which most audiences encounter Neuroscience."
    },
    {
        "slug": "neuroscience-brain-symbols",
        "name": "Neuroscience symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Neuroscience.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Neuroscience."
    },
    {
        "slug": "neuroscience-brain-controversies",
        "name": "Neuroscience controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Neuroscience.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Neuroscience argumentative."
    },
    {
        "slug": "neuroscience-brain-sources",
        "name": "Neuroscience sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Neuroscience.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Neuroscience."
    },
    {
        "slug": "neuroscience-brain-geography",
        "name": "Neuroscience geography",
        "type": "place",
        "short_description": "Broader geographic framing for Neuroscience.",
        "description": "Regions, routes, and spatial systems that situate Neuroscience beyond single named places."
    },
    {
        "slug": "neuroscience-brain-legacy",
        "name": "Neuroscience legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Neuroscience.",
        "description": "How Neuroscience continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "neuroscience-brain-practices",
        "name": "Neuroscience practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Neuroscience.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Neuroscience."
    },
    {
        "slug": "neuroscience-brain-entry-1",
        "name": "Neuroscience entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-2",
        "name": "Neuroscience entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-3",
        "name": "Neuroscience entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-4",
        "name": "Neuroscience entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-5",
        "name": "Neuroscience entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-6",
        "name": "Neuroscience entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-7",
        "name": "Neuroscience entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-8",
        "name": "Neuroscience entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-9",
        "name": "Neuroscience entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-10",
        "name": "Neuroscience entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-11",
        "name": "Neuroscience entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-12",
        "name": "Neuroscience entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-13",
        "name": "Neuroscience entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-14",
        "name": "Neuroscience entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-15",
        "name": "Neuroscience entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-16",
        "name": "Neuroscience entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-17",
        "name": "Neuroscience entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-18",
        "name": "Neuroscience entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-19",
        "name": "Neuroscience entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-20",
        "name": "Neuroscience entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-21",
        "name": "Neuroscience entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-22",
        "name": "Neuroscience entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-23",
        "name": "Neuroscience entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "neuroscience-brain-entry-24",
        "name": "Neuroscience entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Neuroscience.",
        "description": "A supporting encyclopedia entry in the Neuroscience subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "neuroscience-brain",
        "neuroscience-brain-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-places",
        "contains",
        "Neuroscience places is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-events",
        "contains",
        "Neuroscience events is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-objects",
        "contains",
        "Neuroscience objects & artifacts is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-factions",
        "contains",
        "Neuroscience factions & groups is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-concepts",
        "contains",
        "Neuroscience concepts is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-eras",
        "contains",
        "Neuroscience eras is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-works",
        "contains",
        "Neuroscience works & media is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-symbols",
        "contains",
        "Neuroscience symbols is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-controversies",
        "contains",
        "Neuroscience controversies is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-sources",
        "contains",
        "Neuroscience sources is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-geography",
        "contains",
        "Neuroscience geography is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-legacy",
        "contains",
        "Neuroscience legacy is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-practices",
        "contains",
        "Neuroscience practices is a primary trailhead under Neuroscience.",
        0.88,
        0.82
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-1",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-2",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-3",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-4",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-5",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-6",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-7",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-8",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-9",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-10",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-11",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-12",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-13",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-14",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-15",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-16",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-17",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-18",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-19",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-20",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-21",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-22",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-23",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ],
    [
        "neuroscience-brain",
        "neuroscience-brain-entry-24",
        "contains",
        "Supporting entry under Neuroscience.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
