/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "crystal-skulls",
        "name": "Crystal skulls",
        "type": "topic",
        "short_description": "Carved quartz heads, museum controversies, and the Mesoamerican-artifact myth industry.",
        "description": "Carved quartz heads, museum controversies, and the Mesoamerican-artifact myth industry. This Ton-o-Lore subject maps people, places, events, and ideas tied to Crystal skulls so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "crystal-skulls-figures",
        "name": "Crystal skulls figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Crystal skulls.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Crystal skulls."
    },
    {
        "slug": "crystal-skulls-world",
        "name": "Crystal skulls world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Crystal skulls.",
        "description": "Geography, institutions, and periodization that give Crystal skulls its encyclopedia shape."
    },
    {
        "slug": "crystal-skulls-places",
        "name": "Crystal skulls places",
        "type": "place",
        "short_description": "Locations and geographies that frame Crystal skulls.",
        "description": "Places, regions, and built sites that give Crystal skulls its map — where events and figures concentrate."
    },
    {
        "slug": "crystal-skulls-events",
        "name": "Crystal skulls events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Crystal skulls.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Crystal skulls timeline."
    },
    {
        "slug": "crystal-skulls-objects",
        "name": "Crystal skulls objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Crystal skulls.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Crystal skulls."
    },
    {
        "slug": "crystal-skulls-factions",
        "name": "Crystal skulls factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Crystal skulls.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Crystal skulls."
    },
    {
        "slug": "crystal-skulls-concepts",
        "name": "Crystal skulls concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Crystal skulls.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Crystal skulls readable as a lore graph."
    },
    {
        "slug": "crystal-skulls-eras",
        "name": "Crystal skulls eras",
        "type": "event",
        "short_description": "Periodization for Crystal skulls.",
        "description": "Named eras and phases that help readers track how Crystal skulls changes across time."
    },
    {
        "slug": "crystal-skulls-works",
        "name": "Crystal skulls works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Crystal skulls.",
        "description": "Primary works and adaptations through which most audiences encounter Crystal skulls."
    },
    {
        "slug": "crystal-skulls-symbols",
        "name": "Crystal skulls symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Crystal skulls.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Crystal skulls."
    },
    {
        "slug": "crystal-skulls-controversies",
        "name": "Crystal skulls controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Crystal skulls.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Crystal skulls argumentative."
    },
    {
        "slug": "crystal-skulls-sources",
        "name": "Crystal skulls sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Crystal skulls.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Crystal skulls."
    },
    {
        "slug": "crystal-skulls-geography",
        "name": "Crystal skulls geography",
        "type": "place",
        "short_description": "Broader geographic framing for Crystal skulls.",
        "description": "Regions, routes, and spatial systems that situate Crystal skulls beyond single named places."
    },
    {
        "slug": "crystal-skulls-legacy",
        "name": "Crystal skulls legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Crystal skulls.",
        "description": "How Crystal skulls continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "crystal-skulls-practices",
        "name": "Crystal skulls practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Crystal skulls.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Crystal skulls."
    },
    {
        "slug": "crystal-skulls-entry-1",
        "name": "Crystal skulls entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-2",
        "name": "Crystal skulls entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-3",
        "name": "Crystal skulls entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-4",
        "name": "Crystal skulls entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-5",
        "name": "Crystal skulls entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-6",
        "name": "Crystal skulls entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-7",
        "name": "Crystal skulls entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-8",
        "name": "Crystal skulls entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-9",
        "name": "Crystal skulls entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-10",
        "name": "Crystal skulls entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-11",
        "name": "Crystal skulls entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-12",
        "name": "Crystal skulls entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-13",
        "name": "Crystal skulls entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-14",
        "name": "Crystal skulls entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-15",
        "name": "Crystal skulls entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-16",
        "name": "Crystal skulls entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-17",
        "name": "Crystal skulls entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-18",
        "name": "Crystal skulls entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-19",
        "name": "Crystal skulls entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-20",
        "name": "Crystal skulls entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-21",
        "name": "Crystal skulls entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-22",
        "name": "Crystal skulls entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-23",
        "name": "Crystal skulls entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "crystal-skulls-entry-24",
        "name": "Crystal skulls entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Crystal skulls.",
        "description": "A supporting encyclopedia entry in the Crystal skulls subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "crystal-skulls",
        "crystal-skulls-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "crystal-skulls",
        "crystal-skulls-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "crystal-skulls",
        "crystal-skulls-places",
        "contains",
        "Crystal skulls places is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-events",
        "contains",
        "Crystal skulls events is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-objects",
        "contains",
        "Crystal skulls objects & artifacts is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-factions",
        "contains",
        "Crystal skulls factions & groups is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-concepts",
        "contains",
        "Crystal skulls concepts is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-eras",
        "contains",
        "Crystal skulls eras is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-works",
        "contains",
        "Crystal skulls works & media is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-symbols",
        "contains",
        "Crystal skulls symbols is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-controversies",
        "contains",
        "Crystal skulls controversies is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-sources",
        "contains",
        "Crystal skulls sources is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-geography",
        "contains",
        "Crystal skulls geography is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-legacy",
        "contains",
        "Crystal skulls legacy is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-practices",
        "contains",
        "Crystal skulls practices is a primary trailhead under Crystal skulls.",
        0.88,
        0.82
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-1",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-2",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-3",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-4",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-5",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-6",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-7",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-8",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-9",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-10",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-11",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-12",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-13",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-14",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-15",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-16",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-17",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-18",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-19",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-20",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-21",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-22",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-23",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ],
    [
        "crystal-skulls",
        "crystal-skulls-entry-24",
        "contains",
        "Supporting entry under Crystal skulls.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
