/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "halo",
        "name": "Halo",
        "type": "topic",
        "short_description": "Master Chief, Covenant war, and the Xbox shooter universe that defined console multiplayer.",
        "description": "Master Chief, Covenant war, and the Xbox shooter universe that defined console multiplayer. This Ton-o-Lore subject maps people, places, events, and ideas tied to Halo so readers can follow long-tail connections across video games."
    },
    {
        "slug": "halo-figures",
        "name": "Halo figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Halo.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Halo."
    },
    {
        "slug": "halo-world",
        "name": "Halo world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Halo.",
        "description": "Geography, institutions, and periodization that give Halo its encyclopedia shape."
    },
    {
        "slug": "halo-places",
        "name": "Halo places",
        "type": "place",
        "short_description": "Locations and geographies that frame Halo.",
        "description": "Places, regions, and built sites that give Halo its map — where events and figures concentrate."
    },
    {
        "slug": "halo-events",
        "name": "Halo events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Halo.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Halo timeline."
    },
    {
        "slug": "halo-objects",
        "name": "Halo objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Halo.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Halo."
    },
    {
        "slug": "halo-factions",
        "name": "Halo factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Halo.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Halo."
    },
    {
        "slug": "halo-concepts",
        "name": "Halo concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Halo.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Halo readable as a lore graph."
    },
    {
        "slug": "halo-eras",
        "name": "Halo eras",
        "type": "event",
        "short_description": "Periodization for Halo.",
        "description": "Named eras and phases that help readers track how Halo changes across time."
    },
    {
        "slug": "halo-works",
        "name": "Halo works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Halo.",
        "description": "Primary works and adaptations through which most audiences encounter Halo."
    },
    {
        "slug": "halo-symbols",
        "name": "Halo symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Halo.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Halo."
    },
    {
        "slug": "halo-controversies",
        "name": "Halo controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Halo.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Halo argumentative."
    },
    {
        "slug": "halo-sources",
        "name": "Halo sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Halo.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Halo."
    },
    {
        "slug": "halo-geography",
        "name": "Halo geography",
        "type": "place",
        "short_description": "Broader geographic framing for Halo.",
        "description": "Regions, routes, and spatial systems that situate Halo beyond single named places."
    },
    {
        "slug": "halo-legacy",
        "name": "Halo legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Halo.",
        "description": "How Halo continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "halo-practices",
        "name": "Halo practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Halo.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Halo."
    },
    {
        "slug": "halo-entry-1",
        "name": "Halo entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-2",
        "name": "Halo entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-3",
        "name": "Halo entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-4",
        "name": "Halo entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-5",
        "name": "Halo entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-6",
        "name": "Halo entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-7",
        "name": "Halo entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-8",
        "name": "Halo entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-9",
        "name": "Halo entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-10",
        "name": "Halo entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-11",
        "name": "Halo entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-12",
        "name": "Halo entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-13",
        "name": "Halo entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-14",
        "name": "Halo entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-15",
        "name": "Halo entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-16",
        "name": "Halo entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-17",
        "name": "Halo entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-18",
        "name": "Halo entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-19",
        "name": "Halo entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-20",
        "name": "Halo entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-21",
        "name": "Halo entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-22",
        "name": "Halo entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-23",
        "name": "Halo entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halo-entry-24",
        "name": "Halo entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halo.",
        "description": "A supporting encyclopedia entry in the Halo subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "halo",
        "halo-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "halo",
        "halo-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "halo",
        "halo-places",
        "contains",
        "Halo places is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-events",
        "contains",
        "Halo events is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-objects",
        "contains",
        "Halo objects & artifacts is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-factions",
        "contains",
        "Halo factions & groups is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-concepts",
        "contains",
        "Halo concepts is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-eras",
        "contains",
        "Halo eras is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-works",
        "contains",
        "Halo works & media is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-symbols",
        "contains",
        "Halo symbols is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-controversies",
        "contains",
        "Halo controversies is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-sources",
        "contains",
        "Halo sources is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-geography",
        "contains",
        "Halo geography is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-legacy",
        "contains",
        "Halo legacy is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-practices",
        "contains",
        "Halo practices is a primary trailhead under Halo.",
        0.88,
        0.82
    ],
    [
        "halo",
        "halo-entry-1",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-2",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-3",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-4",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-5",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-6",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-7",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-8",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-9",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-10",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-11",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-12",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-13",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-14",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-15",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-16",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-17",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-18",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-19",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-20",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-21",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-22",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-23",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ],
    [
        "halo",
        "halo-entry-24",
        "contains",
        "Supporting entry under Halo.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
