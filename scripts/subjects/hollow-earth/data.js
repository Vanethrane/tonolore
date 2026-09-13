/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hollow-earth",
        "name": "Hollow Earth theories",
        "type": "topic",
        "short_description": "Inner suns, polar openings, and the persistent fringe cosmology of a world beneath our feet.",
        "description": "Inner suns, polar openings, and the persistent fringe cosmology of a world beneath our feet. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hollow Earth theories so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "hollow-earth-figures",
        "name": "Hollow Earth theories figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hollow Earth theories.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hollow Earth theories."
    },
    {
        "slug": "hollow-earth-world",
        "name": "Hollow Earth theories world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hollow Earth theories.",
        "description": "Geography, institutions, and periodization that give Hollow Earth theories its encyclopedia shape."
    },
    {
        "slug": "hollow-earth-places",
        "name": "Hollow Earth theories places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hollow Earth theories.",
        "description": "Places, regions, and built sites that give Hollow Earth theories its map — where events and figures concentrate."
    },
    {
        "slug": "hollow-earth-events",
        "name": "Hollow Earth theories events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hollow Earth theories.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hollow Earth theories timeline."
    },
    {
        "slug": "hollow-earth-objects",
        "name": "Hollow Earth theories objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hollow Earth theories.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hollow Earth theories."
    },
    {
        "slug": "hollow-earth-factions",
        "name": "Hollow Earth theories factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hollow Earth theories.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hollow Earth theories."
    },
    {
        "slug": "hollow-earth-concepts",
        "name": "Hollow Earth theories concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hollow Earth theories.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hollow Earth theories readable as a lore graph."
    },
    {
        "slug": "hollow-earth-eras",
        "name": "Hollow Earth theories eras",
        "type": "event",
        "short_description": "Periodization for Hollow Earth theories.",
        "description": "Named eras and phases that help readers track how Hollow Earth theories changes across time."
    },
    {
        "slug": "hollow-earth-works",
        "name": "Hollow Earth theories works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hollow Earth theories.",
        "description": "Primary works and adaptations through which most audiences encounter Hollow Earth theories."
    },
    {
        "slug": "hollow-earth-symbols",
        "name": "Hollow Earth theories symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hollow Earth theories.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hollow Earth theories."
    },
    {
        "slug": "hollow-earth-controversies",
        "name": "Hollow Earth theories controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hollow Earth theories.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hollow Earth theories argumentative."
    },
    {
        "slug": "hollow-earth-sources",
        "name": "Hollow Earth theories sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hollow Earth theories.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hollow Earth theories."
    },
    {
        "slug": "hollow-earth-geography",
        "name": "Hollow Earth theories geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hollow Earth theories.",
        "description": "Regions, routes, and spatial systems that situate Hollow Earth theories beyond single named places."
    },
    {
        "slug": "hollow-earth-legacy",
        "name": "Hollow Earth theories legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hollow Earth theories.",
        "description": "How Hollow Earth theories continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hollow-earth-practices",
        "name": "Hollow Earth theories practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hollow Earth theories.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hollow Earth theories."
    },
    {
        "slug": "hollow-earth-entry-1",
        "name": "Hollow Earth theories entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-2",
        "name": "Hollow Earth theories entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-3",
        "name": "Hollow Earth theories entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-4",
        "name": "Hollow Earth theories entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-5",
        "name": "Hollow Earth theories entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-6",
        "name": "Hollow Earth theories entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-7",
        "name": "Hollow Earth theories entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-8",
        "name": "Hollow Earth theories entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-9",
        "name": "Hollow Earth theories entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-10",
        "name": "Hollow Earth theories entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-11",
        "name": "Hollow Earth theories entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-12",
        "name": "Hollow Earth theories entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-13",
        "name": "Hollow Earth theories entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-14",
        "name": "Hollow Earth theories entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-15",
        "name": "Hollow Earth theories entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-16",
        "name": "Hollow Earth theories entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-17",
        "name": "Hollow Earth theories entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-18",
        "name": "Hollow Earth theories entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-19",
        "name": "Hollow Earth theories entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-20",
        "name": "Hollow Earth theories entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-21",
        "name": "Hollow Earth theories entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-22",
        "name": "Hollow Earth theories entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-23",
        "name": "Hollow Earth theories entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hollow-earth-entry-24",
        "name": "Hollow Earth theories entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hollow Earth theories.",
        "description": "A supporting encyclopedia entry in the Hollow Earth theories subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hollow-earth",
        "hollow-earth-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hollow-earth",
        "hollow-earth-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hollow-earth",
        "hollow-earth-places",
        "contains",
        "Hollow Earth theories places is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-events",
        "contains",
        "Hollow Earth theories events is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-objects",
        "contains",
        "Hollow Earth theories objects & artifacts is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-factions",
        "contains",
        "Hollow Earth theories factions & groups is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-concepts",
        "contains",
        "Hollow Earth theories concepts is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-eras",
        "contains",
        "Hollow Earth theories eras is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-works",
        "contains",
        "Hollow Earth theories works & media is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-symbols",
        "contains",
        "Hollow Earth theories symbols is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-controversies",
        "contains",
        "Hollow Earth theories controversies is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-sources",
        "contains",
        "Hollow Earth theories sources is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-geography",
        "contains",
        "Hollow Earth theories geography is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-legacy",
        "contains",
        "Hollow Earth theories legacy is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-practices",
        "contains",
        "Hollow Earth theories practices is a primary trailhead under Hollow Earth theories.",
        0.88,
        0.82
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-1",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-2",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-3",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-4",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-5",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-6",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-7",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-8",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-9",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-10",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-11",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-12",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-13",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-14",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-15",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-16",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-17",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-18",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-19",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-20",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-21",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-22",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-23",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ],
    [
        "hollow-earth",
        "hollow-earth-entry-24",
        "contains",
        "Supporting entry under Hollow Earth theories.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
