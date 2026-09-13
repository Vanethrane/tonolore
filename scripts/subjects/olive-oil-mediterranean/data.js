/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "olive-oil-mediterranean",
        "name": "Olive oil & Mediterranean diet",
        "type": "topic",
        "short_description": "Groves, presses, and the fat that structured Mediterranean food culture.",
        "description": "Groves, presses, and the fat that structured Mediterranean food culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Olive oil & Mediterranean diet so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "olive-oil-mediterranean-figures",
        "name": "Olive oil & Mediterranean diet figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Olive oil & Mediterranean diet.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Olive oil & Mediterranean diet."
    },
    {
        "slug": "olive-oil-mediterranean-world",
        "name": "Olive oil & Mediterranean diet world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Olive oil & Mediterranean diet.",
        "description": "Geography, institutions, and periodization that give Olive oil & Mediterranean diet its encyclopedia shape."
    },
    {
        "slug": "olive-oil-mediterranean-places",
        "name": "Olive oil & Mediterranean diet places",
        "type": "place",
        "short_description": "Locations and geographies that frame Olive oil & Mediterranean diet.",
        "description": "Places, regions, and built sites that give Olive oil & Mediterranean diet its map — where events and figures concentrate."
    },
    {
        "slug": "olive-oil-mediterranean-events",
        "name": "Olive oil & Mediterranean diet events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Olive oil & Mediterranean diet.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Olive oil & Mediterranean diet timeline."
    },
    {
        "slug": "olive-oil-mediterranean-objects",
        "name": "Olive oil & Mediterranean diet objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Olive oil & Mediterranean diet.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Olive oil & Mediterranean diet."
    },
    {
        "slug": "olive-oil-mediterranean-factions",
        "name": "Olive oil & Mediterranean diet factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Olive oil & Mediterranean diet.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Olive oil & Mediterranean diet."
    },
    {
        "slug": "olive-oil-mediterranean-concepts",
        "name": "Olive oil & Mediterranean diet concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Olive oil & Mediterranean diet.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Olive oil & Mediterranean diet readable as a lore graph."
    },
    {
        "slug": "olive-oil-mediterranean-eras",
        "name": "Olive oil & Mediterranean diet eras",
        "type": "event",
        "short_description": "Periodization for Olive oil & Mediterranean diet.",
        "description": "Named eras and phases that help readers track how Olive oil & Mediterranean diet changes across time."
    },
    {
        "slug": "olive-oil-mediterranean-works",
        "name": "Olive oil & Mediterranean diet works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Olive oil & Mediterranean diet.",
        "description": "Primary works and adaptations through which most audiences encounter Olive oil & Mediterranean diet."
    },
    {
        "slug": "olive-oil-mediterranean-symbols",
        "name": "Olive oil & Mediterranean diet symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Olive oil & Mediterranean diet.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Olive oil & Mediterranean diet."
    },
    {
        "slug": "olive-oil-mediterranean-controversies",
        "name": "Olive oil & Mediterranean diet controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Olive oil & Mediterranean diet.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Olive oil & Mediterranean diet argumentative."
    },
    {
        "slug": "olive-oil-mediterranean-sources",
        "name": "Olive oil & Mediterranean diet sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Olive oil & Mediterranean diet.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Olive oil & Mediterranean diet."
    },
    {
        "slug": "olive-oil-mediterranean-geography",
        "name": "Olive oil & Mediterranean diet geography",
        "type": "place",
        "short_description": "Broader geographic framing for Olive oil & Mediterranean diet.",
        "description": "Regions, routes, and spatial systems that situate Olive oil & Mediterranean diet beyond single named places."
    },
    {
        "slug": "olive-oil-mediterranean-legacy",
        "name": "Olive oil & Mediterranean diet legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Olive oil & Mediterranean diet.",
        "description": "How Olive oil & Mediterranean diet continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "olive-oil-mediterranean-practices",
        "name": "Olive oil & Mediterranean diet practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Olive oil & Mediterranean diet.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Olive oil & Mediterranean diet."
    },
    {
        "slug": "olive-oil-mediterranean-entry-1",
        "name": "Olive oil & Mediterranean diet entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-2",
        "name": "Olive oil & Mediterranean diet entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-3",
        "name": "Olive oil & Mediterranean diet entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-4",
        "name": "Olive oil & Mediterranean diet entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-5",
        "name": "Olive oil & Mediterranean diet entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-6",
        "name": "Olive oil & Mediterranean diet entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-7",
        "name": "Olive oil & Mediterranean diet entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-8",
        "name": "Olive oil & Mediterranean diet entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-9",
        "name": "Olive oil & Mediterranean diet entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-10",
        "name": "Olive oil & Mediterranean diet entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-11",
        "name": "Olive oil & Mediterranean diet entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-12",
        "name": "Olive oil & Mediterranean diet entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-13",
        "name": "Olive oil & Mediterranean diet entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-14",
        "name": "Olive oil & Mediterranean diet entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-15",
        "name": "Olive oil & Mediterranean diet entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-16",
        "name": "Olive oil & Mediterranean diet entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-17",
        "name": "Olive oil & Mediterranean diet entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-18",
        "name": "Olive oil & Mediterranean diet entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-19",
        "name": "Olive oil & Mediterranean diet entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-20",
        "name": "Olive oil & Mediterranean diet entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-21",
        "name": "Olive oil & Mediterranean diet entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-22",
        "name": "Olive oil & Mediterranean diet entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-23",
        "name": "Olive oil & Mediterranean diet entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "olive-oil-mediterranean-entry-24",
        "name": "Olive oil & Mediterranean diet entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Olive oil & Mediterranean diet.",
        "description": "A supporting encyclopedia entry in the Olive oil & Mediterranean diet subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-places",
        "contains",
        "Olive oil & Mediterranean diet places is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-events",
        "contains",
        "Olive oil & Mediterranean diet events is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-objects",
        "contains",
        "Olive oil & Mediterranean diet objects & artifacts is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-factions",
        "contains",
        "Olive oil & Mediterranean diet factions & groups is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-concepts",
        "contains",
        "Olive oil & Mediterranean diet concepts is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-eras",
        "contains",
        "Olive oil & Mediterranean diet eras is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-works",
        "contains",
        "Olive oil & Mediterranean diet works & media is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-symbols",
        "contains",
        "Olive oil & Mediterranean diet symbols is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-controversies",
        "contains",
        "Olive oil & Mediterranean diet controversies is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-sources",
        "contains",
        "Olive oil & Mediterranean diet sources is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-geography",
        "contains",
        "Olive oil & Mediterranean diet geography is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-legacy",
        "contains",
        "Olive oil & Mediterranean diet legacy is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-practices",
        "contains",
        "Olive oil & Mediterranean diet practices is a primary trailhead under Olive oil & Mediterranean diet.",
        0.88,
        0.82
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-1",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-2",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-3",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-4",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-5",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-6",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-7",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-8",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-9",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-10",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-11",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-12",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-13",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-14",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-15",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-16",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-17",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-18",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-19",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-20",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-21",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-22",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-23",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ],
    [
        "olive-oil-mediterranean",
        "olive-oil-mediterranean-entry-24",
        "contains",
        "Supporting entry under Olive oil & Mediterranean diet.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
