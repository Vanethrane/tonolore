/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-titanic",
        "name": "The Titanic",
        "type": "topic",
        "short_description": "Ship, passengers, crew, sinking, inquiry, wreck discovery, and the cultural afterlife of the disaster.",
        "description": "Ship, passengers, crew, sinking, inquiry, wreck discovery, and the cultural afterlife of the disaster. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Titanic so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "the-titanic-figures",
        "name": "The Titanic figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Titanic.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Titanic."
    },
    {
        "slug": "the-titanic-world",
        "name": "The Titanic world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Titanic.",
        "description": "Geography, institutions, and periodization that give The Titanic its encyclopedia shape."
    },
    {
        "slug": "the-titanic-places",
        "name": "The Titanic places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Titanic.",
        "description": "Places, regions, and built sites that give The Titanic its map — where events and figures concentrate."
    },
    {
        "slug": "the-titanic-events",
        "name": "The Titanic events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Titanic.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Titanic timeline."
    },
    {
        "slug": "the-titanic-objects",
        "name": "The Titanic objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Titanic.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Titanic."
    },
    {
        "slug": "the-titanic-factions",
        "name": "The Titanic factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Titanic.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Titanic."
    },
    {
        "slug": "the-titanic-concepts",
        "name": "The Titanic concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Titanic.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Titanic readable as a lore graph."
    },
    {
        "slug": "the-titanic-eras",
        "name": "The Titanic eras",
        "type": "event",
        "short_description": "Periodization for The Titanic.",
        "description": "Named eras and phases that help readers track how The Titanic changes across time."
    },
    {
        "slug": "the-titanic-works",
        "name": "The Titanic works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Titanic.",
        "description": "Primary works and adaptations through which most audiences encounter The Titanic."
    },
    {
        "slug": "the-titanic-symbols",
        "name": "The Titanic symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Titanic.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Titanic."
    },
    {
        "slug": "the-titanic-controversies",
        "name": "The Titanic controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Titanic.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Titanic argumentative."
    },
    {
        "slug": "the-titanic-sources",
        "name": "The Titanic sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Titanic.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Titanic."
    },
    {
        "slug": "the-titanic-geography",
        "name": "The Titanic geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Titanic.",
        "description": "Regions, routes, and spatial systems that situate The Titanic beyond single named places."
    },
    {
        "slug": "the-titanic-legacy",
        "name": "The Titanic legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Titanic.",
        "description": "How The Titanic continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-titanic-practices",
        "name": "The Titanic practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Titanic.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Titanic."
    },
    {
        "slug": "the-titanic-entry-1",
        "name": "The Titanic entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-2",
        "name": "The Titanic entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-3",
        "name": "The Titanic entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-4",
        "name": "The Titanic entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-5",
        "name": "The Titanic entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-6",
        "name": "The Titanic entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-7",
        "name": "The Titanic entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-8",
        "name": "The Titanic entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-9",
        "name": "The Titanic entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-10",
        "name": "The Titanic entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-11",
        "name": "The Titanic entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-12",
        "name": "The Titanic entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-13",
        "name": "The Titanic entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-14",
        "name": "The Titanic entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-15",
        "name": "The Titanic entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-16",
        "name": "The Titanic entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-17",
        "name": "The Titanic entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-18",
        "name": "The Titanic entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-19",
        "name": "The Titanic entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-20",
        "name": "The Titanic entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-21",
        "name": "The Titanic entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-22",
        "name": "The Titanic entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-23",
        "name": "The Titanic entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-titanic-entry-24",
        "name": "The Titanic entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Titanic.",
        "description": "A supporting encyclopedia entry in the The Titanic subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-titanic",
        "the-titanic-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-titanic",
        "the-titanic-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-titanic",
        "the-titanic-places",
        "contains",
        "The Titanic places is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-events",
        "contains",
        "The Titanic events is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-objects",
        "contains",
        "The Titanic objects & artifacts is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-factions",
        "contains",
        "The Titanic factions & groups is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-concepts",
        "contains",
        "The Titanic concepts is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-eras",
        "contains",
        "The Titanic eras is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-works",
        "contains",
        "The Titanic works & media is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-symbols",
        "contains",
        "The Titanic symbols is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-controversies",
        "contains",
        "The Titanic controversies is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-sources",
        "contains",
        "The Titanic sources is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-geography",
        "contains",
        "The Titanic geography is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-legacy",
        "contains",
        "The Titanic legacy is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-practices",
        "contains",
        "The Titanic practices is a primary trailhead under The Titanic.",
        0.88,
        0.82
    ],
    [
        "the-titanic",
        "the-titanic-entry-1",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-2",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-3",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-4",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-5",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-6",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-7",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-8",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-9",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-10",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-11",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-12",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-13",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-14",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-15",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-16",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-17",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-18",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-19",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-20",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-21",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-22",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-23",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ],
    [
        "the-titanic",
        "the-titanic-entry-24",
        "contains",
        "Supporting entry under The Titanic.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
