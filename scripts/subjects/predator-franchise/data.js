/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "predator-franchise",
        "name": "Predator",
        "type": "topic",
        "short_description": "Hunter aliens, trophy lore, and the jungle-to-crossover continuum of Yautja myth.",
        "description": "Hunter aliens, trophy lore, and the jungle-to-crossover continuum of Yautja myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Predator so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "predator-franchise-figures",
        "name": "Predator figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Predator.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Predator."
    },
    {
        "slug": "predator-franchise-world",
        "name": "Predator world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Predator.",
        "description": "Geography, institutions, and periodization that give Predator its encyclopedia shape."
    },
    {
        "slug": "predator-franchise-places",
        "name": "Predator places",
        "type": "place",
        "short_description": "Locations and geographies that frame Predator.",
        "description": "Places, regions, and built sites that give Predator its map — where events and figures concentrate."
    },
    {
        "slug": "predator-franchise-events",
        "name": "Predator events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Predator.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Predator timeline."
    },
    {
        "slug": "predator-franchise-objects",
        "name": "Predator objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Predator.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Predator."
    },
    {
        "slug": "predator-franchise-factions",
        "name": "Predator factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Predator.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Predator."
    },
    {
        "slug": "predator-franchise-concepts",
        "name": "Predator concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Predator.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Predator readable as a lore graph."
    },
    {
        "slug": "predator-franchise-eras",
        "name": "Predator eras",
        "type": "event",
        "short_description": "Periodization for Predator.",
        "description": "Named eras and phases that help readers track how Predator changes across time."
    },
    {
        "slug": "predator-franchise-works",
        "name": "Predator works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Predator.",
        "description": "Primary works and adaptations through which most audiences encounter Predator."
    },
    {
        "slug": "predator-franchise-symbols",
        "name": "Predator symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Predator.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Predator."
    },
    {
        "slug": "predator-franchise-controversies",
        "name": "Predator controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Predator.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Predator argumentative."
    },
    {
        "slug": "predator-franchise-sources",
        "name": "Predator sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Predator.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Predator."
    },
    {
        "slug": "predator-franchise-geography",
        "name": "Predator geography",
        "type": "place",
        "short_description": "Broader geographic framing for Predator.",
        "description": "Regions, routes, and spatial systems that situate Predator beyond single named places."
    },
    {
        "slug": "predator-franchise-legacy",
        "name": "Predator legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Predator.",
        "description": "How Predator continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "predator-franchise-practices",
        "name": "Predator practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Predator.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Predator."
    },
    {
        "slug": "predator-franchise-entry-1",
        "name": "Predator entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-2",
        "name": "Predator entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-3",
        "name": "Predator entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-4",
        "name": "Predator entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-5",
        "name": "Predator entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-6",
        "name": "Predator entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-7",
        "name": "Predator entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-8",
        "name": "Predator entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-9",
        "name": "Predator entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-10",
        "name": "Predator entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-11",
        "name": "Predator entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-12",
        "name": "Predator entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-13",
        "name": "Predator entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-14",
        "name": "Predator entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-15",
        "name": "Predator entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-16",
        "name": "Predator entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-17",
        "name": "Predator entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-18",
        "name": "Predator entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-19",
        "name": "Predator entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-20",
        "name": "Predator entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-21",
        "name": "Predator entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-22",
        "name": "Predator entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-23",
        "name": "Predator entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "predator-franchise-entry-24",
        "name": "Predator entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Predator.",
        "description": "A supporting encyclopedia entry in the Predator subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "predator-franchise",
        "predator-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "predator-franchise",
        "predator-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "predator-franchise",
        "predator-franchise-places",
        "contains",
        "Predator places is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-events",
        "contains",
        "Predator events is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-objects",
        "contains",
        "Predator objects & artifacts is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-factions",
        "contains",
        "Predator factions & groups is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-concepts",
        "contains",
        "Predator concepts is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-eras",
        "contains",
        "Predator eras is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-works",
        "contains",
        "Predator works & media is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-symbols",
        "contains",
        "Predator symbols is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-controversies",
        "contains",
        "Predator controversies is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-sources",
        "contains",
        "Predator sources is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-geography",
        "contains",
        "Predator geography is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-legacy",
        "contains",
        "Predator legacy is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-practices",
        "contains",
        "Predator practices is a primary trailhead under Predator.",
        0.88,
        0.82
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-1",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-2",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-3",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-4",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-5",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-6",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-7",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-8",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-9",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-10",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-11",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-12",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-13",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-14",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-15",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-16",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-17",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-18",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-19",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-20",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-21",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-22",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-23",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ],
    [
        "predator-franchise",
        "predator-franchise-entry-24",
        "contains",
        "Supporting entry under Predator.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
