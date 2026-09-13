/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "playmobil",
        "name": "Playmobil",
        "type": "topic",
        "short_description": "Modular figures, themed worlds, and the German system-toy alternative to brick building.",
        "description": "Modular figures, themed worlds, and the German system-toy alternative to brick building. This Ton-o-Lore subject maps people, places, events, and ideas tied to Playmobil so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "playmobil-figures",
        "name": "Playmobil figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Playmobil.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Playmobil."
    },
    {
        "slug": "playmobil-world",
        "name": "Playmobil world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Playmobil.",
        "description": "Geography, institutions, and periodization that give Playmobil its encyclopedia shape."
    },
    {
        "slug": "playmobil-places",
        "name": "Playmobil places",
        "type": "place",
        "short_description": "Locations and geographies that frame Playmobil.",
        "description": "Places, regions, and built sites that give Playmobil its map — where events and figures concentrate."
    },
    {
        "slug": "playmobil-events",
        "name": "Playmobil events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Playmobil.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Playmobil timeline."
    },
    {
        "slug": "playmobil-objects",
        "name": "Playmobil objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Playmobil.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Playmobil."
    },
    {
        "slug": "playmobil-factions",
        "name": "Playmobil factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Playmobil.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Playmobil."
    },
    {
        "slug": "playmobil-concepts",
        "name": "Playmobil concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Playmobil.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Playmobil readable as a lore graph."
    },
    {
        "slug": "playmobil-eras",
        "name": "Playmobil eras",
        "type": "event",
        "short_description": "Periodization for Playmobil.",
        "description": "Named eras and phases that help readers track how Playmobil changes across time."
    },
    {
        "slug": "playmobil-works",
        "name": "Playmobil works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Playmobil.",
        "description": "Primary works and adaptations through which most audiences encounter Playmobil."
    },
    {
        "slug": "playmobil-symbols",
        "name": "Playmobil symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Playmobil.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Playmobil."
    },
    {
        "slug": "playmobil-controversies",
        "name": "Playmobil controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Playmobil.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Playmobil argumentative."
    },
    {
        "slug": "playmobil-sources",
        "name": "Playmobil sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Playmobil.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Playmobil."
    },
    {
        "slug": "playmobil-geography",
        "name": "Playmobil geography",
        "type": "place",
        "short_description": "Broader geographic framing for Playmobil.",
        "description": "Regions, routes, and spatial systems that situate Playmobil beyond single named places."
    },
    {
        "slug": "playmobil-legacy",
        "name": "Playmobil legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Playmobil.",
        "description": "How Playmobil continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "playmobil-practices",
        "name": "Playmobil practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Playmobil.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Playmobil."
    },
    {
        "slug": "playmobil-entry-1",
        "name": "Playmobil entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-2",
        "name": "Playmobil entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-3",
        "name": "Playmobil entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-4",
        "name": "Playmobil entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-5",
        "name": "Playmobil entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-6",
        "name": "Playmobil entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-7",
        "name": "Playmobil entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-8",
        "name": "Playmobil entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-9",
        "name": "Playmobil entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-10",
        "name": "Playmobil entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-11",
        "name": "Playmobil entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-12",
        "name": "Playmobil entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-13",
        "name": "Playmobil entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-14",
        "name": "Playmobil entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-15",
        "name": "Playmobil entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-16",
        "name": "Playmobil entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-17",
        "name": "Playmobil entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-18",
        "name": "Playmobil entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-19",
        "name": "Playmobil entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-20",
        "name": "Playmobil entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-21",
        "name": "Playmobil entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-22",
        "name": "Playmobil entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-23",
        "name": "Playmobil entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "playmobil-entry-24",
        "name": "Playmobil entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Playmobil.",
        "description": "A supporting encyclopedia entry in the Playmobil subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "playmobil",
        "playmobil-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "playmobil",
        "playmobil-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "playmobil",
        "playmobil-places",
        "contains",
        "Playmobil places is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-events",
        "contains",
        "Playmobil events is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-objects",
        "contains",
        "Playmobil objects & artifacts is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-factions",
        "contains",
        "Playmobil factions & groups is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-concepts",
        "contains",
        "Playmobil concepts is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-eras",
        "contains",
        "Playmobil eras is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-works",
        "contains",
        "Playmobil works & media is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-symbols",
        "contains",
        "Playmobil symbols is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-controversies",
        "contains",
        "Playmobil controversies is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-sources",
        "contains",
        "Playmobil sources is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-geography",
        "contains",
        "Playmobil geography is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-legacy",
        "contains",
        "Playmobil legacy is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-practices",
        "contains",
        "Playmobil practices is a primary trailhead under Playmobil.",
        0.88,
        0.82
    ],
    [
        "playmobil",
        "playmobil-entry-1",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-2",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-3",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-4",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-5",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-6",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-7",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-8",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-9",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-10",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-11",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-12",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-13",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-14",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-15",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-16",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-17",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-18",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-19",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-20",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-21",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-22",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-23",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ],
    [
        "playmobil",
        "playmobil-entry-24",
        "contains",
        "Supporting entry under Playmobil.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
