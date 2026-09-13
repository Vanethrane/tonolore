/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "arkham-horror-files",
        "name": "Arkham Horror Files",
        "type": "topic",
        "short_description": "Board and card mythos games sharing Lovecraftian Arkham continuity.",
        "description": "Board and card mythos games sharing Lovecraftian Arkham continuity. This Ton-o-Lore subject maps people, places, events, and ideas tied to Arkham Horror Files so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "arkham-horror-files-figures",
        "name": "Arkham Horror Files figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Arkham Horror Files.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Arkham Horror Files."
    },
    {
        "slug": "arkham-horror-files-world",
        "name": "Arkham Horror Files world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Arkham Horror Files.",
        "description": "Geography, institutions, and periodization that give Arkham Horror Files its encyclopedia shape."
    },
    {
        "slug": "arkham-horror-files-places",
        "name": "Arkham Horror Files places",
        "type": "place",
        "short_description": "Locations and geographies that frame Arkham Horror Files.",
        "description": "Places, regions, and built sites that give Arkham Horror Files its map — where events and figures concentrate."
    },
    {
        "slug": "arkham-horror-files-events",
        "name": "Arkham Horror Files events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Arkham Horror Files.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Arkham Horror Files timeline."
    },
    {
        "slug": "arkham-horror-files-objects",
        "name": "Arkham Horror Files objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Arkham Horror Files.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Arkham Horror Files."
    },
    {
        "slug": "arkham-horror-files-factions",
        "name": "Arkham Horror Files factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Arkham Horror Files.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Arkham Horror Files."
    },
    {
        "slug": "arkham-horror-files-concepts",
        "name": "Arkham Horror Files concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Arkham Horror Files.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Arkham Horror Files readable as a lore graph."
    },
    {
        "slug": "arkham-horror-files-eras",
        "name": "Arkham Horror Files eras",
        "type": "event",
        "short_description": "Periodization for Arkham Horror Files.",
        "description": "Named eras and phases that help readers track how Arkham Horror Files changes across time."
    },
    {
        "slug": "arkham-horror-files-works",
        "name": "Arkham Horror Files works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Arkham Horror Files.",
        "description": "Primary works and adaptations through which most audiences encounter Arkham Horror Files."
    },
    {
        "slug": "arkham-horror-files-symbols",
        "name": "Arkham Horror Files symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Arkham Horror Files.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Arkham Horror Files."
    },
    {
        "slug": "arkham-horror-files-controversies",
        "name": "Arkham Horror Files controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Arkham Horror Files.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Arkham Horror Files argumentative."
    },
    {
        "slug": "arkham-horror-files-sources",
        "name": "Arkham Horror Files sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Arkham Horror Files.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Arkham Horror Files."
    },
    {
        "slug": "arkham-horror-files-geography",
        "name": "Arkham Horror Files geography",
        "type": "place",
        "short_description": "Broader geographic framing for Arkham Horror Files.",
        "description": "Regions, routes, and spatial systems that situate Arkham Horror Files beyond single named places."
    },
    {
        "slug": "arkham-horror-files-legacy",
        "name": "Arkham Horror Files legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Arkham Horror Files.",
        "description": "How Arkham Horror Files continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "arkham-horror-files-practices",
        "name": "Arkham Horror Files practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Arkham Horror Files.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Arkham Horror Files."
    },
    {
        "slug": "arkham-horror-files-entry-1",
        "name": "Arkham Horror Files entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-2",
        "name": "Arkham Horror Files entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-3",
        "name": "Arkham Horror Files entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-4",
        "name": "Arkham Horror Files entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-5",
        "name": "Arkham Horror Files entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-6",
        "name": "Arkham Horror Files entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-7",
        "name": "Arkham Horror Files entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-8",
        "name": "Arkham Horror Files entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-9",
        "name": "Arkham Horror Files entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-10",
        "name": "Arkham Horror Files entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-11",
        "name": "Arkham Horror Files entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-12",
        "name": "Arkham Horror Files entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-13",
        "name": "Arkham Horror Files entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-14",
        "name": "Arkham Horror Files entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-15",
        "name": "Arkham Horror Files entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-16",
        "name": "Arkham Horror Files entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-17",
        "name": "Arkham Horror Files entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-18",
        "name": "Arkham Horror Files entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-19",
        "name": "Arkham Horror Files entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-20",
        "name": "Arkham Horror Files entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-21",
        "name": "Arkham Horror Files entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-22",
        "name": "Arkham Horror Files entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-23",
        "name": "Arkham Horror Files entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-files-entry-24",
        "name": "Arkham Horror Files entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror Files.",
        "description": "A supporting encyclopedia entry in the Arkham Horror Files subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "arkham-horror-files",
        "arkham-horror-files-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-places",
        "contains",
        "Arkham Horror Files places is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-events",
        "contains",
        "Arkham Horror Files events is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-objects",
        "contains",
        "Arkham Horror Files objects & artifacts is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-factions",
        "contains",
        "Arkham Horror Files factions & groups is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-concepts",
        "contains",
        "Arkham Horror Files concepts is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-eras",
        "contains",
        "Arkham Horror Files eras is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-works",
        "contains",
        "Arkham Horror Files works & media is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-symbols",
        "contains",
        "Arkham Horror Files symbols is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-controversies",
        "contains",
        "Arkham Horror Files controversies is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-sources",
        "contains",
        "Arkham Horror Files sources is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-geography",
        "contains",
        "Arkham Horror Files geography is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-legacy",
        "contains",
        "Arkham Horror Files legacy is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-practices",
        "contains",
        "Arkham Horror Files practices is a primary trailhead under Arkham Horror Files.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-1",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-2",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-3",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-4",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-5",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-6",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-7",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-8",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-9",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-10",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-11",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-12",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-13",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-14",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-15",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-16",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-17",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-18",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-19",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-20",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-21",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-22",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-23",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-files",
        "arkham-horror-files-entry-24",
        "contains",
        "Supporting entry under Arkham Horror Files.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
