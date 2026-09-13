/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "star-wars-saga",
        "name": "Star Wars saga (films)",
        "type": "topic",
        "short_description": "Skywalker saga chapters, Force myth, and the space-opera films that define modern franchise cinema.",
        "description": "Skywalker saga chapters, Force myth, and the space-opera films that define modern franchise cinema. This Ton-o-Lore subject maps people, places, events, and ideas tied to Star Wars saga (films) so readers can follow long-tail connections across movies."
    },
    {
        "slug": "star-wars-saga-figures",
        "name": "Star Wars saga (films) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Star Wars saga (films).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Star Wars saga (films)."
    },
    {
        "slug": "star-wars-saga-world",
        "name": "Star Wars saga (films) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Star Wars saga (films).",
        "description": "Geography, institutions, and periodization that give Star Wars saga (films) its encyclopedia shape."
    },
    {
        "slug": "star-wars-saga-places",
        "name": "Star Wars saga (films) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Star Wars saga (films).",
        "description": "Places, regions, and built sites that give Star Wars saga (films) its map — where events and figures concentrate."
    },
    {
        "slug": "star-wars-saga-events",
        "name": "Star Wars saga (films) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Star Wars saga (films).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Star Wars saga (films) timeline."
    },
    {
        "slug": "star-wars-saga-objects",
        "name": "Star Wars saga (films) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Star Wars saga (films).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Star Wars saga (films)."
    },
    {
        "slug": "star-wars-saga-factions",
        "name": "Star Wars saga (films) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Star Wars saga (films).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Star Wars saga (films)."
    },
    {
        "slug": "star-wars-saga-concepts",
        "name": "Star Wars saga (films) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Star Wars saga (films).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Star Wars saga (films) readable as a lore graph."
    },
    {
        "slug": "star-wars-saga-eras",
        "name": "Star Wars saga (films) eras",
        "type": "event",
        "short_description": "Periodization for Star Wars saga (films).",
        "description": "Named eras and phases that help readers track how Star Wars saga (films) changes across time."
    },
    {
        "slug": "star-wars-saga-works",
        "name": "Star Wars saga (films) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Star Wars saga (films).",
        "description": "Primary works and adaptations through which most audiences encounter Star Wars saga (films)."
    },
    {
        "slug": "star-wars-saga-symbols",
        "name": "Star Wars saga (films) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Star Wars saga (films).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Star Wars saga (films)."
    },
    {
        "slug": "star-wars-saga-controversies",
        "name": "Star Wars saga (films) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Star Wars saga (films).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Star Wars saga (films) argumentative."
    },
    {
        "slug": "star-wars-saga-sources",
        "name": "Star Wars saga (films) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Star Wars saga (films).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Star Wars saga (films)."
    },
    {
        "slug": "star-wars-saga-geography",
        "name": "Star Wars saga (films) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Star Wars saga (films).",
        "description": "Regions, routes, and spatial systems that situate Star Wars saga (films) beyond single named places."
    },
    {
        "slug": "star-wars-saga-legacy",
        "name": "Star Wars saga (films) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Star Wars saga (films).",
        "description": "How Star Wars saga (films) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "star-wars-saga-practices",
        "name": "Star Wars saga (films) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Star Wars saga (films).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Star Wars saga (films)."
    },
    {
        "slug": "star-wars-saga-entry-1",
        "name": "Star Wars saga (films) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-2",
        "name": "Star Wars saga (films) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-3",
        "name": "Star Wars saga (films) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-4",
        "name": "Star Wars saga (films) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-5",
        "name": "Star Wars saga (films) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-6",
        "name": "Star Wars saga (films) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-7",
        "name": "Star Wars saga (films) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-8",
        "name": "Star Wars saga (films) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-9",
        "name": "Star Wars saga (films) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-10",
        "name": "Star Wars saga (films) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-11",
        "name": "Star Wars saga (films) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-12",
        "name": "Star Wars saga (films) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-13",
        "name": "Star Wars saga (films) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-14",
        "name": "Star Wars saga (films) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-15",
        "name": "Star Wars saga (films) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-16",
        "name": "Star Wars saga (films) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-17",
        "name": "Star Wars saga (films) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-18",
        "name": "Star Wars saga (films) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-19",
        "name": "Star Wars saga (films) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-20",
        "name": "Star Wars saga (films) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-21",
        "name": "Star Wars saga (films) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-22",
        "name": "Star Wars saga (films) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-23",
        "name": "Star Wars saga (films) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-saga-entry-24",
        "name": "Star Wars saga (films) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars saga (films).",
        "description": "A supporting encyclopedia entry in the Star Wars saga (films) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "star-wars-saga",
        "star-wars-saga-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "star-wars-saga",
        "star-wars-saga-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "star-wars-saga",
        "star-wars-saga-places",
        "contains",
        "Star Wars saga (films) places is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-events",
        "contains",
        "Star Wars saga (films) events is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-objects",
        "contains",
        "Star Wars saga (films) objects & artifacts is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-factions",
        "contains",
        "Star Wars saga (films) factions & groups is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-concepts",
        "contains",
        "Star Wars saga (films) concepts is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-eras",
        "contains",
        "Star Wars saga (films) eras is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-works",
        "contains",
        "Star Wars saga (films) works & media is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-symbols",
        "contains",
        "Star Wars saga (films) symbols is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-controversies",
        "contains",
        "Star Wars saga (films) controversies is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-sources",
        "contains",
        "Star Wars saga (films) sources is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-geography",
        "contains",
        "Star Wars saga (films) geography is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-legacy",
        "contains",
        "Star Wars saga (films) legacy is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-practices",
        "contains",
        "Star Wars saga (films) practices is a primary trailhead under Star Wars saga (films).",
        0.88,
        0.82
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-1",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-2",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-3",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-4",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-5",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-6",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-7",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-8",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-9",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-10",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-11",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-12",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-13",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-14",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-15",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-16",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-17",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-18",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-19",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-20",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-21",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-22",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-23",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ],
    [
        "star-wars-saga",
        "star-wars-saga-entry-24",
        "contains",
        "Supporting entry under Star Wars saga (films).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
