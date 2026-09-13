/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "foundation-series",
        "name": "Foundation",
        "type": "topic",
        "short_description": "Psychohistory, empires, and Asimov's long-arc future history across books and screen.",
        "description": "Psychohistory, empires, and Asimov's long-arc future history across books and screen. This Ton-o-Lore subject maps people, places, events, and ideas tied to Foundation so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "foundation-series-figures",
        "name": "Foundation figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Foundation.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Foundation."
    },
    {
        "slug": "foundation-series-world",
        "name": "Foundation world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Foundation.",
        "description": "Geography, institutions, and periodization that give Foundation its encyclopedia shape."
    },
    {
        "slug": "foundation-series-places",
        "name": "Foundation places",
        "type": "place",
        "short_description": "Locations and geographies that frame Foundation.",
        "description": "Places, regions, and built sites that give Foundation its map — where events and figures concentrate."
    },
    {
        "slug": "foundation-series-events",
        "name": "Foundation events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Foundation.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Foundation timeline."
    },
    {
        "slug": "foundation-series-objects",
        "name": "Foundation objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Foundation.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Foundation."
    },
    {
        "slug": "foundation-series-factions",
        "name": "Foundation factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Foundation.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Foundation."
    },
    {
        "slug": "foundation-series-concepts",
        "name": "Foundation concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Foundation.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Foundation readable as a lore graph."
    },
    {
        "slug": "foundation-series-eras",
        "name": "Foundation eras",
        "type": "event",
        "short_description": "Periodization for Foundation.",
        "description": "Named eras and phases that help readers track how Foundation changes across time."
    },
    {
        "slug": "foundation-series-works",
        "name": "Foundation works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Foundation.",
        "description": "Primary works and adaptations through which most audiences encounter Foundation."
    },
    {
        "slug": "foundation-series-symbols",
        "name": "Foundation symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Foundation.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Foundation."
    },
    {
        "slug": "foundation-series-controversies",
        "name": "Foundation controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Foundation.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Foundation argumentative."
    },
    {
        "slug": "foundation-series-sources",
        "name": "Foundation sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Foundation.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Foundation."
    },
    {
        "slug": "foundation-series-geography",
        "name": "Foundation geography",
        "type": "place",
        "short_description": "Broader geographic framing for Foundation.",
        "description": "Regions, routes, and spatial systems that situate Foundation beyond single named places."
    },
    {
        "slug": "foundation-series-legacy",
        "name": "Foundation legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Foundation.",
        "description": "How Foundation continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "foundation-series-practices",
        "name": "Foundation practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Foundation.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Foundation."
    },
    {
        "slug": "foundation-series-entry-1",
        "name": "Foundation entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-2",
        "name": "Foundation entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-3",
        "name": "Foundation entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-4",
        "name": "Foundation entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-5",
        "name": "Foundation entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-6",
        "name": "Foundation entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-7",
        "name": "Foundation entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-8",
        "name": "Foundation entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-9",
        "name": "Foundation entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-10",
        "name": "Foundation entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-11",
        "name": "Foundation entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-12",
        "name": "Foundation entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-13",
        "name": "Foundation entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-14",
        "name": "Foundation entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-15",
        "name": "Foundation entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-16",
        "name": "Foundation entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-17",
        "name": "Foundation entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-18",
        "name": "Foundation entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-19",
        "name": "Foundation entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-20",
        "name": "Foundation entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-21",
        "name": "Foundation entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-22",
        "name": "Foundation entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-23",
        "name": "Foundation entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-series-entry-24",
        "name": "Foundation entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation.",
        "description": "A supporting encyclopedia entry in the Foundation subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "foundation-series",
        "foundation-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "foundation-series",
        "foundation-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "foundation-series",
        "foundation-series-places",
        "contains",
        "Foundation places is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-events",
        "contains",
        "Foundation events is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-objects",
        "contains",
        "Foundation objects & artifacts is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-factions",
        "contains",
        "Foundation factions & groups is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-concepts",
        "contains",
        "Foundation concepts is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-eras",
        "contains",
        "Foundation eras is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-works",
        "contains",
        "Foundation works & media is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-symbols",
        "contains",
        "Foundation symbols is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-controversies",
        "contains",
        "Foundation controversies is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-sources",
        "contains",
        "Foundation sources is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-geography",
        "contains",
        "Foundation geography is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-legacy",
        "contains",
        "Foundation legacy is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-practices",
        "contains",
        "Foundation practices is a primary trailhead under Foundation.",
        0.88,
        0.82
    ],
    [
        "foundation-series",
        "foundation-series-entry-1",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-2",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-3",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-4",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-5",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-6",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-7",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-8",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-9",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-10",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-11",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-12",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-13",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-14",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-15",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-16",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-17",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-18",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-19",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-20",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-21",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-22",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-23",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ],
    [
        "foundation-series",
        "foundation-series-entry-24",
        "contains",
        "Supporting entry under Foundation.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
