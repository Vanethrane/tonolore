/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "la-llorona",
        "name": "La Llorona",
        "type": "topic",
        "short_description": "Weeping woman, riverside warning, and the pan-Latin American ghost mother legend.",
        "description": "Weeping woman, riverside warning, and the pan-Latin American ghost mother legend. This Ton-o-Lore subject maps people, places, events, and ideas tied to La Llorona so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "la-llorona-figures",
        "name": "La Llorona figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to La Llorona.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring La Llorona."
    },
    {
        "slug": "la-llorona-world",
        "name": "La Llorona world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame La Llorona.",
        "description": "Geography, institutions, and periodization that give La Llorona its encyclopedia shape."
    },
    {
        "slug": "la-llorona-places",
        "name": "La Llorona places",
        "type": "place",
        "short_description": "Locations and geographies that frame La Llorona.",
        "description": "Places, regions, and built sites that give La Llorona its map — where events and figures concentrate."
    },
    {
        "slug": "la-llorona-events",
        "name": "La Llorona events",
        "type": "event",
        "short_description": "Turning points and dated episodes in La Llorona.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the La Llorona timeline."
    },
    {
        "slug": "la-llorona-objects",
        "name": "La Llorona objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to La Llorona.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through La Llorona."
    },
    {
        "slug": "la-llorona-factions",
        "name": "La Llorona factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside La Llorona.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in La Llorona."
    },
    {
        "slug": "la-llorona-concepts",
        "name": "La Llorona concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize La Llorona.",
        "description": "Keywords, doctrines, systems, and abstract forces that make La Llorona readable as a lore graph."
    },
    {
        "slug": "la-llorona-eras",
        "name": "La Llorona eras",
        "type": "event",
        "short_description": "Periodization for La Llorona.",
        "description": "Named eras and phases that help readers track how La Llorona changes across time."
    },
    {
        "slug": "la-llorona-works",
        "name": "La Llorona works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry La Llorona.",
        "description": "Primary works and adaptations through which most audiences encounter La Llorona."
    },
    {
        "slug": "la-llorona-symbols",
        "name": "La Llorona symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with La Llorona.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside La Llorona."
    },
    {
        "slug": "la-llorona-controversies",
        "name": "La Llorona controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in La Llorona.",
        "description": "Debates, rival canons, scandals, and contested facts that keep La Llorona argumentative."
    },
    {
        "slug": "la-llorona-sources",
        "name": "La Llorona sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into La Llorona.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify La Llorona."
    },
    {
        "slug": "la-llorona-geography",
        "name": "La Llorona geography",
        "type": "place",
        "short_description": "Broader geographic framing for La Llorona.",
        "description": "Regions, routes, and spatial systems that situate La Llorona beyond single named places."
    },
    {
        "slug": "la-llorona-legacy",
        "name": "La Llorona legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of La Llorona.",
        "description": "How La Llorona continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "la-llorona-practices",
        "name": "La Llorona practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in La Llorona.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in La Llorona."
    },
    {
        "slug": "la-llorona-entry-1",
        "name": "La Llorona entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-2",
        "name": "La Llorona entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-3",
        "name": "La Llorona entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-4",
        "name": "La Llorona entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-5",
        "name": "La Llorona entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-6",
        "name": "La Llorona entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-7",
        "name": "La Llorona entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-8",
        "name": "La Llorona entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-9",
        "name": "La Llorona entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-10",
        "name": "La Llorona entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-11",
        "name": "La Llorona entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-12",
        "name": "La Llorona entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-13",
        "name": "La Llorona entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-14",
        "name": "La Llorona entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-15",
        "name": "La Llorona entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-16",
        "name": "La Llorona entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-17",
        "name": "La Llorona entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-18",
        "name": "La Llorona entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-19",
        "name": "La Llorona entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-20",
        "name": "La Llorona entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-21",
        "name": "La Llorona entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-22",
        "name": "La Llorona entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-23",
        "name": "La Llorona entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-llorona-entry-24",
        "name": "La Llorona entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Llorona.",
        "description": "A supporting encyclopedia entry in the La Llorona subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "la-llorona",
        "la-llorona-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "la-llorona",
        "la-llorona-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "la-llorona",
        "la-llorona-places",
        "contains",
        "La Llorona places is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-events",
        "contains",
        "La Llorona events is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-objects",
        "contains",
        "La Llorona objects & artifacts is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-factions",
        "contains",
        "La Llorona factions & groups is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-concepts",
        "contains",
        "La Llorona concepts is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-eras",
        "contains",
        "La Llorona eras is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-works",
        "contains",
        "La Llorona works & media is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-symbols",
        "contains",
        "La Llorona symbols is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-controversies",
        "contains",
        "La Llorona controversies is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-sources",
        "contains",
        "La Llorona sources is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-geography",
        "contains",
        "La Llorona geography is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-legacy",
        "contains",
        "La Llorona legacy is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-practices",
        "contains",
        "La Llorona practices is a primary trailhead under La Llorona.",
        0.88,
        0.82
    ],
    [
        "la-llorona",
        "la-llorona-entry-1",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-2",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-3",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-4",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-5",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-6",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-7",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-8",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-9",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-10",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-11",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-12",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-13",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-14",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-15",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-16",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-17",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-18",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-19",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-20",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-21",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-22",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-23",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ],
    [
        "la-llorona",
        "la-llorona-entry-24",
        "contains",
        "Supporting entry under La Llorona.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
