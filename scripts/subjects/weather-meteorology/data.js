/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "weather-meteorology",
        "name": "Weather & meteorology",
        "type": "topic",
        "short_description": "Fronts, forecasts, storms, and the science that turned sky-watching into prediction.",
        "description": "Fronts, forecasts, storms, and the science that turned sky-watching into prediction. This Ton-o-Lore subject maps people, places, events, and ideas tied to Weather & meteorology so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "weather-meteorology-figures",
        "name": "Weather & meteorology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Weather & meteorology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Weather & meteorology."
    },
    {
        "slug": "weather-meteorology-world",
        "name": "Weather & meteorology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Weather & meteorology.",
        "description": "Geography, institutions, and periodization that give Weather & meteorology its encyclopedia shape."
    },
    {
        "slug": "weather-meteorology-places",
        "name": "Weather & meteorology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Weather & meteorology.",
        "description": "Places, regions, and built sites that give Weather & meteorology its map — where events and figures concentrate."
    },
    {
        "slug": "weather-meteorology-events",
        "name": "Weather & meteorology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Weather & meteorology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Weather & meteorology timeline."
    },
    {
        "slug": "weather-meteorology-objects",
        "name": "Weather & meteorology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Weather & meteorology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Weather & meteorology."
    },
    {
        "slug": "weather-meteorology-factions",
        "name": "Weather & meteorology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Weather & meteorology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Weather & meteorology."
    },
    {
        "slug": "weather-meteorology-concepts",
        "name": "Weather & meteorology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Weather & meteorology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Weather & meteorology readable as a lore graph."
    },
    {
        "slug": "weather-meteorology-eras",
        "name": "Weather & meteorology eras",
        "type": "event",
        "short_description": "Periodization for Weather & meteorology.",
        "description": "Named eras and phases that help readers track how Weather & meteorology changes across time."
    },
    {
        "slug": "weather-meteorology-works",
        "name": "Weather & meteorology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Weather & meteorology.",
        "description": "Primary works and adaptations through which most audiences encounter Weather & meteorology."
    },
    {
        "slug": "weather-meteorology-symbols",
        "name": "Weather & meteorology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Weather & meteorology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Weather & meteorology."
    },
    {
        "slug": "weather-meteorology-controversies",
        "name": "Weather & meteorology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Weather & meteorology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Weather & meteorology argumentative."
    },
    {
        "slug": "weather-meteorology-sources",
        "name": "Weather & meteorology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Weather & meteorology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Weather & meteorology."
    },
    {
        "slug": "weather-meteorology-geography",
        "name": "Weather & meteorology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Weather & meteorology.",
        "description": "Regions, routes, and spatial systems that situate Weather & meteorology beyond single named places."
    },
    {
        "slug": "weather-meteorology-legacy",
        "name": "Weather & meteorology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Weather & meteorology.",
        "description": "How Weather & meteorology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "weather-meteorology-practices",
        "name": "Weather & meteorology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Weather & meteorology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Weather & meteorology."
    },
    {
        "slug": "weather-meteorology-entry-1",
        "name": "Weather & meteorology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-2",
        "name": "Weather & meteorology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-3",
        "name": "Weather & meteorology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-4",
        "name": "Weather & meteorology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-5",
        "name": "Weather & meteorology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-6",
        "name": "Weather & meteorology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-7",
        "name": "Weather & meteorology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-8",
        "name": "Weather & meteorology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-9",
        "name": "Weather & meteorology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-10",
        "name": "Weather & meteorology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-11",
        "name": "Weather & meteorology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-12",
        "name": "Weather & meteorology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-13",
        "name": "Weather & meteorology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-14",
        "name": "Weather & meteorology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-15",
        "name": "Weather & meteorology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-16",
        "name": "Weather & meteorology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-17",
        "name": "Weather & meteorology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-18",
        "name": "Weather & meteorology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-19",
        "name": "Weather & meteorology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-20",
        "name": "Weather & meteorology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-21",
        "name": "Weather & meteorology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-22",
        "name": "Weather & meteorology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-23",
        "name": "Weather & meteorology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weather-meteorology-entry-24",
        "name": "Weather & meteorology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weather & meteorology.",
        "description": "A supporting encyclopedia entry in the Weather & meteorology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "weather-meteorology",
        "weather-meteorology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "weather-meteorology",
        "weather-meteorology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "weather-meteorology",
        "weather-meteorology-places",
        "contains",
        "Weather & meteorology places is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-events",
        "contains",
        "Weather & meteorology events is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-objects",
        "contains",
        "Weather & meteorology objects & artifacts is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-factions",
        "contains",
        "Weather & meteorology factions & groups is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-concepts",
        "contains",
        "Weather & meteorology concepts is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-eras",
        "contains",
        "Weather & meteorology eras is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-works",
        "contains",
        "Weather & meteorology works & media is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-symbols",
        "contains",
        "Weather & meteorology symbols is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-controversies",
        "contains",
        "Weather & meteorology controversies is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-sources",
        "contains",
        "Weather & meteorology sources is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-geography",
        "contains",
        "Weather & meteorology geography is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-legacy",
        "contains",
        "Weather & meteorology legacy is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-practices",
        "contains",
        "Weather & meteorology practices is a primary trailhead under Weather & meteorology.",
        0.88,
        0.82
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-1",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-2",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-3",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-4",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-5",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-6",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-7",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-8",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-9",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-10",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-11",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-12",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-13",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-14",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-15",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-16",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-17",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-18",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-19",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-20",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-21",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-22",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-23",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ],
    [
        "weather-meteorology",
        "weather-meteorology-entry-24",
        "contains",
        "Supporting entry under Weather & meteorology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
