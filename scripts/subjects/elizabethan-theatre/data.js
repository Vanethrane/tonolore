/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "elizabethan-theatre",
        "name": "Elizabethan theatre",
        "type": "topic",
        "short_description": "Playhouses, groundlings, and the commercial London stage that surrounded Shakespeare.",
        "description": "Playhouses, groundlings, and the commercial London stage that surrounded Shakespeare. This Ton-o-Lore subject maps people, places, events, and ideas tied to Elizabethan theatre so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "elizabethan-theatre-figures",
        "name": "Elizabethan theatre figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Elizabethan theatre.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Elizabethan theatre."
    },
    {
        "slug": "elizabethan-theatre-world",
        "name": "Elizabethan theatre world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Elizabethan theatre.",
        "description": "Geography, institutions, and periodization that give Elizabethan theatre its encyclopedia shape."
    },
    {
        "slug": "elizabethan-theatre-places",
        "name": "Elizabethan theatre places",
        "type": "place",
        "short_description": "Locations and geographies that frame Elizabethan theatre.",
        "description": "Places, regions, and built sites that give Elizabethan theatre its map — where events and figures concentrate."
    },
    {
        "slug": "elizabethan-theatre-events",
        "name": "Elizabethan theatre events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Elizabethan theatre.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Elizabethan theatre timeline."
    },
    {
        "slug": "elizabethan-theatre-objects",
        "name": "Elizabethan theatre objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Elizabethan theatre.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Elizabethan theatre."
    },
    {
        "slug": "elizabethan-theatre-factions",
        "name": "Elizabethan theatre factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Elizabethan theatre.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Elizabethan theatre."
    },
    {
        "slug": "elizabethan-theatre-concepts",
        "name": "Elizabethan theatre concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Elizabethan theatre.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Elizabethan theatre readable as a lore graph."
    },
    {
        "slug": "elizabethan-theatre-eras",
        "name": "Elizabethan theatre eras",
        "type": "event",
        "short_description": "Periodization for Elizabethan theatre.",
        "description": "Named eras and phases that help readers track how Elizabethan theatre changes across time."
    },
    {
        "slug": "elizabethan-theatre-works",
        "name": "Elizabethan theatre works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Elizabethan theatre.",
        "description": "Primary works and adaptations through which most audiences encounter Elizabethan theatre."
    },
    {
        "slug": "elizabethan-theatre-symbols",
        "name": "Elizabethan theatre symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Elizabethan theatre.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Elizabethan theatre."
    },
    {
        "slug": "elizabethan-theatre-controversies",
        "name": "Elizabethan theatre controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Elizabethan theatre.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Elizabethan theatre argumentative."
    },
    {
        "slug": "elizabethan-theatre-sources",
        "name": "Elizabethan theatre sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Elizabethan theatre.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Elizabethan theatre."
    },
    {
        "slug": "elizabethan-theatre-geography",
        "name": "Elizabethan theatre geography",
        "type": "place",
        "short_description": "Broader geographic framing for Elizabethan theatre.",
        "description": "Regions, routes, and spatial systems that situate Elizabethan theatre beyond single named places."
    },
    {
        "slug": "elizabethan-theatre-legacy",
        "name": "Elizabethan theatre legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Elizabethan theatre.",
        "description": "How Elizabethan theatre continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "elizabethan-theatre-practices",
        "name": "Elizabethan theatre practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Elizabethan theatre.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Elizabethan theatre."
    },
    {
        "slug": "elizabethan-theatre-entry-1",
        "name": "Elizabethan theatre entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-2",
        "name": "Elizabethan theatre entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-3",
        "name": "Elizabethan theatre entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-4",
        "name": "Elizabethan theatre entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-5",
        "name": "Elizabethan theatre entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-6",
        "name": "Elizabethan theatre entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-7",
        "name": "Elizabethan theatre entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-8",
        "name": "Elizabethan theatre entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-9",
        "name": "Elizabethan theatre entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-10",
        "name": "Elizabethan theatre entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-11",
        "name": "Elizabethan theatre entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-12",
        "name": "Elizabethan theatre entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-13",
        "name": "Elizabethan theatre entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-14",
        "name": "Elizabethan theatre entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-15",
        "name": "Elizabethan theatre entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-16",
        "name": "Elizabethan theatre entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-17",
        "name": "Elizabethan theatre entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-18",
        "name": "Elizabethan theatre entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-19",
        "name": "Elizabethan theatre entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-20",
        "name": "Elizabethan theatre entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-21",
        "name": "Elizabethan theatre entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-22",
        "name": "Elizabethan theatre entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-23",
        "name": "Elizabethan theatre entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "elizabethan-theatre-entry-24",
        "name": "Elizabethan theatre entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Elizabethan theatre.",
        "description": "A supporting encyclopedia entry in the Elizabethan theatre subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "elizabethan-theatre",
        "elizabethan-theatre-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-places",
        "contains",
        "Elizabethan theatre places is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-events",
        "contains",
        "Elizabethan theatre events is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-objects",
        "contains",
        "Elizabethan theatre objects & artifacts is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-factions",
        "contains",
        "Elizabethan theatre factions & groups is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-concepts",
        "contains",
        "Elizabethan theatre concepts is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-eras",
        "contains",
        "Elizabethan theatre eras is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-works",
        "contains",
        "Elizabethan theatre works & media is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-symbols",
        "contains",
        "Elizabethan theatre symbols is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-controversies",
        "contains",
        "Elizabethan theatre controversies is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-sources",
        "contains",
        "Elizabethan theatre sources is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-geography",
        "contains",
        "Elizabethan theatre geography is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-legacy",
        "contains",
        "Elizabethan theatre legacy is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-practices",
        "contains",
        "Elizabethan theatre practices is a primary trailhead under Elizabethan theatre.",
        0.88,
        0.82
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-1",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-2",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-3",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-4",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-5",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-6",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-7",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-8",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-9",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-10",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-11",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-12",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-13",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-14",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-15",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-16",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-17",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-18",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-19",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-20",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-21",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-22",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-23",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ],
    [
        "elizabethan-theatre",
        "elizabethan-theatre-entry-24",
        "contains",
        "Supporting entry under Elizabethan theatre.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
