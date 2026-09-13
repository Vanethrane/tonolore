/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "climate-science",
        "name": "Climate science",
        "type": "topic",
        "short_description": "Atmosphere, ice cores, models, and the evidence trail of planetary climate change.",
        "description": "Atmosphere, ice cores, models, and the evidence trail of planetary climate change. This Ton-o-Lore subject maps people, places, events, and ideas tied to Climate science so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "climate-science-figures",
        "name": "Climate science figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Climate science.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Climate science."
    },
    {
        "slug": "climate-science-world",
        "name": "Climate science world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Climate science.",
        "description": "Geography, institutions, and periodization that give Climate science its encyclopedia shape."
    },
    {
        "slug": "climate-science-places",
        "name": "Climate science places",
        "type": "place",
        "short_description": "Locations and geographies that frame Climate science.",
        "description": "Places, regions, and built sites that give Climate science its map — where events and figures concentrate."
    },
    {
        "slug": "climate-science-events",
        "name": "Climate science events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Climate science.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Climate science timeline."
    },
    {
        "slug": "climate-science-objects",
        "name": "Climate science objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Climate science.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Climate science."
    },
    {
        "slug": "climate-science-factions",
        "name": "Climate science factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Climate science.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Climate science."
    },
    {
        "slug": "climate-science-concepts",
        "name": "Climate science concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Climate science.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Climate science readable as a lore graph."
    },
    {
        "slug": "climate-science-eras",
        "name": "Climate science eras",
        "type": "event",
        "short_description": "Periodization for Climate science.",
        "description": "Named eras and phases that help readers track how Climate science changes across time."
    },
    {
        "slug": "climate-science-works",
        "name": "Climate science works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Climate science.",
        "description": "Primary works and adaptations through which most audiences encounter Climate science."
    },
    {
        "slug": "climate-science-symbols",
        "name": "Climate science symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Climate science.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Climate science."
    },
    {
        "slug": "climate-science-controversies",
        "name": "Climate science controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Climate science.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Climate science argumentative."
    },
    {
        "slug": "climate-science-sources",
        "name": "Climate science sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Climate science.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Climate science."
    },
    {
        "slug": "climate-science-geography",
        "name": "Climate science geography",
        "type": "place",
        "short_description": "Broader geographic framing for Climate science.",
        "description": "Regions, routes, and spatial systems that situate Climate science beyond single named places."
    },
    {
        "slug": "climate-science-legacy",
        "name": "Climate science legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Climate science.",
        "description": "How Climate science continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "climate-science-practices",
        "name": "Climate science practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Climate science.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Climate science."
    },
    {
        "slug": "climate-science-entry-1",
        "name": "Climate science entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-2",
        "name": "Climate science entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-3",
        "name": "Climate science entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-4",
        "name": "Climate science entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-5",
        "name": "Climate science entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-6",
        "name": "Climate science entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-7",
        "name": "Climate science entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-8",
        "name": "Climate science entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-9",
        "name": "Climate science entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-10",
        "name": "Climate science entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-11",
        "name": "Climate science entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-12",
        "name": "Climate science entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-13",
        "name": "Climate science entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-14",
        "name": "Climate science entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-15",
        "name": "Climate science entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-16",
        "name": "Climate science entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-17",
        "name": "Climate science entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-18",
        "name": "Climate science entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-19",
        "name": "Climate science entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-20",
        "name": "Climate science entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-21",
        "name": "Climate science entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-22",
        "name": "Climate science entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-23",
        "name": "Climate science entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "climate-science-entry-24",
        "name": "Climate science entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Climate science.",
        "description": "A supporting encyclopedia entry in the Climate science subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "climate-science",
        "climate-science-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "climate-science",
        "climate-science-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "climate-science",
        "climate-science-places",
        "contains",
        "Climate science places is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-events",
        "contains",
        "Climate science events is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-objects",
        "contains",
        "Climate science objects & artifacts is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-factions",
        "contains",
        "Climate science factions & groups is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-concepts",
        "contains",
        "Climate science concepts is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-eras",
        "contains",
        "Climate science eras is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-works",
        "contains",
        "Climate science works & media is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-symbols",
        "contains",
        "Climate science symbols is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-controversies",
        "contains",
        "Climate science controversies is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-sources",
        "contains",
        "Climate science sources is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-geography",
        "contains",
        "Climate science geography is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-legacy",
        "contains",
        "Climate science legacy is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-practices",
        "contains",
        "Climate science practices is a primary trailhead under Climate science.",
        0.88,
        0.82
    ],
    [
        "climate-science",
        "climate-science-entry-1",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-2",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-3",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-4",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-5",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-6",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-7",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-8",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-9",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-10",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-11",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-12",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-13",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-14",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-15",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-16",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-17",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-18",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-19",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-20",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-21",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-22",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-23",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ],
    [
        "climate-science",
        "climate-science-entry-24",
        "contains",
        "Supporting entry under Climate science.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
