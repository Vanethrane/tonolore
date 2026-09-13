/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "indiana-jones",
        "name": "Indiana Jones",
        "type": "topic",
        "short_description": "Fedora archaeology, Nazis vs relics, and the pulp adventure franchise of cinema swagger.",
        "description": "Fedora archaeology, Nazis vs relics, and the pulp adventure franchise of cinema swagger. This Ton-o-Lore subject maps people, places, events, and ideas tied to Indiana Jones so readers can follow long-tail connections across movies."
    },
    {
        "slug": "indiana-jones-figures",
        "name": "Indiana Jones figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Indiana Jones.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Indiana Jones."
    },
    {
        "slug": "indiana-jones-world",
        "name": "Indiana Jones world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Indiana Jones.",
        "description": "Geography, institutions, and periodization that give Indiana Jones its encyclopedia shape."
    },
    {
        "slug": "indiana-jones-places",
        "name": "Indiana Jones places",
        "type": "place",
        "short_description": "Locations and geographies that frame Indiana Jones.",
        "description": "Places, regions, and built sites that give Indiana Jones its map — where events and figures concentrate."
    },
    {
        "slug": "indiana-jones-events",
        "name": "Indiana Jones events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Indiana Jones.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Indiana Jones timeline."
    },
    {
        "slug": "indiana-jones-objects",
        "name": "Indiana Jones objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Indiana Jones.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Indiana Jones."
    },
    {
        "slug": "indiana-jones-factions",
        "name": "Indiana Jones factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Indiana Jones.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Indiana Jones."
    },
    {
        "slug": "indiana-jones-concepts",
        "name": "Indiana Jones concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Indiana Jones.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Indiana Jones readable as a lore graph."
    },
    {
        "slug": "indiana-jones-eras",
        "name": "Indiana Jones eras",
        "type": "event",
        "short_description": "Periodization for Indiana Jones.",
        "description": "Named eras and phases that help readers track how Indiana Jones changes across time."
    },
    {
        "slug": "indiana-jones-works",
        "name": "Indiana Jones works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Indiana Jones.",
        "description": "Primary works and adaptations through which most audiences encounter Indiana Jones."
    },
    {
        "slug": "indiana-jones-symbols",
        "name": "Indiana Jones symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Indiana Jones.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Indiana Jones."
    },
    {
        "slug": "indiana-jones-controversies",
        "name": "Indiana Jones controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Indiana Jones.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Indiana Jones argumentative."
    },
    {
        "slug": "indiana-jones-sources",
        "name": "Indiana Jones sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Indiana Jones.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Indiana Jones."
    },
    {
        "slug": "indiana-jones-geography",
        "name": "Indiana Jones geography",
        "type": "place",
        "short_description": "Broader geographic framing for Indiana Jones.",
        "description": "Regions, routes, and spatial systems that situate Indiana Jones beyond single named places."
    },
    {
        "slug": "indiana-jones-legacy",
        "name": "Indiana Jones legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Indiana Jones.",
        "description": "How Indiana Jones continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "indiana-jones-practices",
        "name": "Indiana Jones practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Indiana Jones.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Indiana Jones."
    },
    {
        "slug": "indiana-jones-entry-1",
        "name": "Indiana Jones entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-2",
        "name": "Indiana Jones entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-3",
        "name": "Indiana Jones entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-4",
        "name": "Indiana Jones entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-5",
        "name": "Indiana Jones entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-6",
        "name": "Indiana Jones entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-7",
        "name": "Indiana Jones entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-8",
        "name": "Indiana Jones entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-9",
        "name": "Indiana Jones entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-10",
        "name": "Indiana Jones entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-11",
        "name": "Indiana Jones entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-12",
        "name": "Indiana Jones entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-13",
        "name": "Indiana Jones entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-14",
        "name": "Indiana Jones entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-15",
        "name": "Indiana Jones entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-16",
        "name": "Indiana Jones entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-17",
        "name": "Indiana Jones entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-18",
        "name": "Indiana Jones entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-19",
        "name": "Indiana Jones entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-20",
        "name": "Indiana Jones entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-21",
        "name": "Indiana Jones entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-22",
        "name": "Indiana Jones entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-23",
        "name": "Indiana Jones entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indiana-jones-entry-24",
        "name": "Indiana Jones entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indiana Jones.",
        "description": "A supporting encyclopedia entry in the Indiana Jones subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "indiana-jones",
        "indiana-jones-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "indiana-jones",
        "indiana-jones-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "indiana-jones",
        "indiana-jones-places",
        "contains",
        "Indiana Jones places is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-events",
        "contains",
        "Indiana Jones events is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-objects",
        "contains",
        "Indiana Jones objects & artifacts is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-factions",
        "contains",
        "Indiana Jones factions & groups is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-concepts",
        "contains",
        "Indiana Jones concepts is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-eras",
        "contains",
        "Indiana Jones eras is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-works",
        "contains",
        "Indiana Jones works & media is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-symbols",
        "contains",
        "Indiana Jones symbols is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-controversies",
        "contains",
        "Indiana Jones controversies is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-sources",
        "contains",
        "Indiana Jones sources is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-geography",
        "contains",
        "Indiana Jones geography is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-legacy",
        "contains",
        "Indiana Jones legacy is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-practices",
        "contains",
        "Indiana Jones practices is a primary trailhead under Indiana Jones.",
        0.88,
        0.82
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-1",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-2",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-3",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-4",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-5",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-6",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-7",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-8",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-9",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-10",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-11",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-12",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-13",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-14",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-15",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-16",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-17",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-18",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-19",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-20",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-21",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-22",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-23",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ],
    [
        "indiana-jones",
        "indiana-jones-entry-24",
        "contains",
        "Supporting entry under Indiana Jones.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
