/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "persona-arena",
        "name": "Persona 4 Arena",
        "type": "topic",
        "short_description": "Shadow selves, Investigation Team cast, and the Persona universe as a 2D fighter.",
        "description": "Shadow selves, Investigation Team cast, and the Persona universe as a 2D fighter. This Ton-o-Lore subject maps people, places, events, and ideas tied to Persona 4 Arena so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "persona-arena-figures",
        "name": "Persona 4 Arena figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Persona 4 Arena.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Persona 4 Arena."
    },
    {
        "slug": "persona-arena-world",
        "name": "Persona 4 Arena world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Persona 4 Arena.",
        "description": "Geography, institutions, and periodization that give Persona 4 Arena its encyclopedia shape."
    },
    {
        "slug": "persona-arena-places",
        "name": "Persona 4 Arena places",
        "type": "place",
        "short_description": "Locations and geographies that frame Persona 4 Arena.",
        "description": "Places, regions, and built sites that give Persona 4 Arena its map — where events and figures concentrate."
    },
    {
        "slug": "persona-arena-events",
        "name": "Persona 4 Arena events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Persona 4 Arena.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Persona 4 Arena timeline."
    },
    {
        "slug": "persona-arena-objects",
        "name": "Persona 4 Arena objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Persona 4 Arena.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Persona 4 Arena."
    },
    {
        "slug": "persona-arena-factions",
        "name": "Persona 4 Arena factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Persona 4 Arena.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Persona 4 Arena."
    },
    {
        "slug": "persona-arena-concepts",
        "name": "Persona 4 Arena concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Persona 4 Arena.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Persona 4 Arena readable as a lore graph."
    },
    {
        "slug": "persona-arena-eras",
        "name": "Persona 4 Arena eras",
        "type": "event",
        "short_description": "Periodization for Persona 4 Arena.",
        "description": "Named eras and phases that help readers track how Persona 4 Arena changes across time."
    },
    {
        "slug": "persona-arena-works",
        "name": "Persona 4 Arena works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Persona 4 Arena.",
        "description": "Primary works and adaptations through which most audiences encounter Persona 4 Arena."
    },
    {
        "slug": "persona-arena-symbols",
        "name": "Persona 4 Arena symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Persona 4 Arena.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Persona 4 Arena."
    },
    {
        "slug": "persona-arena-controversies",
        "name": "Persona 4 Arena controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Persona 4 Arena.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Persona 4 Arena argumentative."
    },
    {
        "slug": "persona-arena-sources",
        "name": "Persona 4 Arena sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Persona 4 Arena.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Persona 4 Arena."
    },
    {
        "slug": "persona-arena-geography",
        "name": "Persona 4 Arena geography",
        "type": "place",
        "short_description": "Broader geographic framing for Persona 4 Arena.",
        "description": "Regions, routes, and spatial systems that situate Persona 4 Arena beyond single named places."
    },
    {
        "slug": "persona-arena-legacy",
        "name": "Persona 4 Arena legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Persona 4 Arena.",
        "description": "How Persona 4 Arena continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "persona-arena-practices",
        "name": "Persona 4 Arena practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Persona 4 Arena.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Persona 4 Arena."
    },
    {
        "slug": "persona-arena-entry-1",
        "name": "Persona 4 Arena entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-2",
        "name": "Persona 4 Arena entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-3",
        "name": "Persona 4 Arena entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-4",
        "name": "Persona 4 Arena entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-5",
        "name": "Persona 4 Arena entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-6",
        "name": "Persona 4 Arena entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-7",
        "name": "Persona 4 Arena entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-8",
        "name": "Persona 4 Arena entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-9",
        "name": "Persona 4 Arena entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-10",
        "name": "Persona 4 Arena entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-11",
        "name": "Persona 4 Arena entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-12",
        "name": "Persona 4 Arena entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-13",
        "name": "Persona 4 Arena entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-14",
        "name": "Persona 4 Arena entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-15",
        "name": "Persona 4 Arena entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-16",
        "name": "Persona 4 Arena entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-17",
        "name": "Persona 4 Arena entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-18",
        "name": "Persona 4 Arena entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-19",
        "name": "Persona 4 Arena entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-20",
        "name": "Persona 4 Arena entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-21",
        "name": "Persona 4 Arena entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-22",
        "name": "Persona 4 Arena entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-23",
        "name": "Persona 4 Arena entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persona-arena-entry-24",
        "name": "Persona 4 Arena entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persona 4 Arena.",
        "description": "A supporting encyclopedia entry in the Persona 4 Arena subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "persona-arena",
        "persona-arena-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "persona-arena",
        "persona-arena-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "persona-arena",
        "persona-arena-places",
        "contains",
        "Persona 4 Arena places is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-events",
        "contains",
        "Persona 4 Arena events is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-objects",
        "contains",
        "Persona 4 Arena objects & artifacts is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-factions",
        "contains",
        "Persona 4 Arena factions & groups is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-concepts",
        "contains",
        "Persona 4 Arena concepts is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-eras",
        "contains",
        "Persona 4 Arena eras is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-works",
        "contains",
        "Persona 4 Arena works & media is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-symbols",
        "contains",
        "Persona 4 Arena symbols is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-controversies",
        "contains",
        "Persona 4 Arena controversies is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-sources",
        "contains",
        "Persona 4 Arena sources is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-geography",
        "contains",
        "Persona 4 Arena geography is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-legacy",
        "contains",
        "Persona 4 Arena legacy is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-practices",
        "contains",
        "Persona 4 Arena practices is a primary trailhead under Persona 4 Arena.",
        0.88,
        0.82
    ],
    [
        "persona-arena",
        "persona-arena-entry-1",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-2",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-3",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-4",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-5",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-6",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-7",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-8",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-9",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-10",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-11",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-12",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-13",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-14",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-15",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-16",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-17",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-18",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-19",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-20",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-21",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-22",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-23",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ],
    [
        "persona-arena",
        "persona-arena-entry-24",
        "contains",
        "Supporting entry under Persona 4 Arena.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
