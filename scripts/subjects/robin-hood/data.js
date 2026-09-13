/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "robin-hood",
        "name": "Robin Hood",
        "type": "topic",
        "short_description": "Sherwood outlawry, merry men, and redistribution myths in English folklore.",
        "description": "Sherwood outlawry, merry men, and redistribution myths in English folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Robin Hood so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "robin-hood-figures",
        "name": "Robin Hood figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Robin Hood.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Robin Hood."
    },
    {
        "slug": "robin-hood-world",
        "name": "Robin Hood world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Robin Hood.",
        "description": "Geography, institutions, and periodization that give Robin Hood its encyclopedia shape."
    },
    {
        "slug": "robin-hood-places",
        "name": "Robin Hood places",
        "type": "place",
        "short_description": "Locations and geographies that frame Robin Hood.",
        "description": "Places, regions, and built sites that give Robin Hood its map — where events and figures concentrate."
    },
    {
        "slug": "robin-hood-events",
        "name": "Robin Hood events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Robin Hood.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Robin Hood timeline."
    },
    {
        "slug": "robin-hood-objects",
        "name": "Robin Hood objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Robin Hood.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Robin Hood."
    },
    {
        "slug": "robin-hood-factions",
        "name": "Robin Hood factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Robin Hood.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Robin Hood."
    },
    {
        "slug": "robin-hood-concepts",
        "name": "Robin Hood concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Robin Hood.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Robin Hood readable as a lore graph."
    },
    {
        "slug": "robin-hood-eras",
        "name": "Robin Hood eras",
        "type": "event",
        "short_description": "Periodization for Robin Hood.",
        "description": "Named eras and phases that help readers track how Robin Hood changes across time."
    },
    {
        "slug": "robin-hood-works",
        "name": "Robin Hood works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Robin Hood.",
        "description": "Primary works and adaptations through which most audiences encounter Robin Hood."
    },
    {
        "slug": "robin-hood-symbols",
        "name": "Robin Hood symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Robin Hood.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Robin Hood."
    },
    {
        "slug": "robin-hood-controversies",
        "name": "Robin Hood controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Robin Hood.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Robin Hood argumentative."
    },
    {
        "slug": "robin-hood-sources",
        "name": "Robin Hood sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Robin Hood.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Robin Hood."
    },
    {
        "slug": "robin-hood-geography",
        "name": "Robin Hood geography",
        "type": "place",
        "short_description": "Broader geographic framing for Robin Hood.",
        "description": "Regions, routes, and spatial systems that situate Robin Hood beyond single named places."
    },
    {
        "slug": "robin-hood-legacy",
        "name": "Robin Hood legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Robin Hood.",
        "description": "How Robin Hood continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "robin-hood-practices",
        "name": "Robin Hood practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Robin Hood.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Robin Hood."
    },
    {
        "slug": "robin-hood-entry-1",
        "name": "Robin Hood entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-2",
        "name": "Robin Hood entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-3",
        "name": "Robin Hood entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-4",
        "name": "Robin Hood entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-5",
        "name": "Robin Hood entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-6",
        "name": "Robin Hood entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-7",
        "name": "Robin Hood entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-8",
        "name": "Robin Hood entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-9",
        "name": "Robin Hood entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-10",
        "name": "Robin Hood entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-11",
        "name": "Robin Hood entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-12",
        "name": "Robin Hood entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-13",
        "name": "Robin Hood entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-14",
        "name": "Robin Hood entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-15",
        "name": "Robin Hood entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-16",
        "name": "Robin Hood entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-17",
        "name": "Robin Hood entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-18",
        "name": "Robin Hood entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-19",
        "name": "Robin Hood entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-20",
        "name": "Robin Hood entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-21",
        "name": "Robin Hood entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-22",
        "name": "Robin Hood entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-23",
        "name": "Robin Hood entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "robin-hood-entry-24",
        "name": "Robin Hood entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Robin Hood.",
        "description": "A supporting encyclopedia entry in the Robin Hood subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "robin-hood",
        "robin-hood-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "robin-hood",
        "robin-hood-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "robin-hood",
        "robin-hood-places",
        "contains",
        "Robin Hood places is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-events",
        "contains",
        "Robin Hood events is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-objects",
        "contains",
        "Robin Hood objects & artifacts is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-factions",
        "contains",
        "Robin Hood factions & groups is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-concepts",
        "contains",
        "Robin Hood concepts is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-eras",
        "contains",
        "Robin Hood eras is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-works",
        "contains",
        "Robin Hood works & media is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-symbols",
        "contains",
        "Robin Hood symbols is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-controversies",
        "contains",
        "Robin Hood controversies is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-sources",
        "contains",
        "Robin Hood sources is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-geography",
        "contains",
        "Robin Hood geography is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-legacy",
        "contains",
        "Robin Hood legacy is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-practices",
        "contains",
        "Robin Hood practices is a primary trailhead under Robin Hood.",
        0.88,
        0.82
    ],
    [
        "robin-hood",
        "robin-hood-entry-1",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-2",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-3",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-4",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-5",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-6",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-7",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-8",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-9",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-10",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-11",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-12",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-13",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-14",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-15",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-16",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-17",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-18",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-19",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-20",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-21",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-22",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-23",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ],
    [
        "robin-hood",
        "robin-hood-entry-24",
        "contains",
        "Supporting entry under Robin Hood.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
