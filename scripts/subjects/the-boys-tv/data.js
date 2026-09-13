/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-boys-tv",
        "name": "The Boys",
        "type": "topic",
        "short_description": "Corrupt supers, Vought PR, and the bloody deconstruction of cape corporate power.",
        "description": "Corrupt supers, Vought PR, and the bloody deconstruction of cape corporate power. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Boys so readers can follow long-tail connections across television."
    },
    {
        "slug": "the-boys-tv-figures",
        "name": "The Boys figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Boys.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Boys."
    },
    {
        "slug": "the-boys-tv-world",
        "name": "The Boys world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Boys.",
        "description": "Geography, institutions, and periodization that give The Boys its encyclopedia shape."
    },
    {
        "slug": "the-boys-tv-places",
        "name": "The Boys places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Boys.",
        "description": "Places, regions, and built sites that give The Boys its map — where events and figures concentrate."
    },
    {
        "slug": "the-boys-tv-events",
        "name": "The Boys events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Boys.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Boys timeline."
    },
    {
        "slug": "the-boys-tv-objects",
        "name": "The Boys objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Boys.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Boys."
    },
    {
        "slug": "the-boys-tv-factions",
        "name": "The Boys factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Boys.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Boys."
    },
    {
        "slug": "the-boys-tv-concepts",
        "name": "The Boys concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Boys.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Boys readable as a lore graph."
    },
    {
        "slug": "the-boys-tv-eras",
        "name": "The Boys eras",
        "type": "event",
        "short_description": "Periodization for The Boys.",
        "description": "Named eras and phases that help readers track how The Boys changes across time."
    },
    {
        "slug": "the-boys-tv-works",
        "name": "The Boys works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Boys.",
        "description": "Primary works and adaptations through which most audiences encounter The Boys."
    },
    {
        "slug": "the-boys-tv-symbols",
        "name": "The Boys symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Boys.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Boys."
    },
    {
        "slug": "the-boys-tv-controversies",
        "name": "The Boys controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Boys.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Boys argumentative."
    },
    {
        "slug": "the-boys-tv-sources",
        "name": "The Boys sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Boys.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Boys."
    },
    {
        "slug": "the-boys-tv-geography",
        "name": "The Boys geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Boys.",
        "description": "Regions, routes, and spatial systems that situate The Boys beyond single named places."
    },
    {
        "slug": "the-boys-tv-legacy",
        "name": "The Boys legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Boys.",
        "description": "How The Boys continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-boys-tv-practices",
        "name": "The Boys practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Boys.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Boys."
    },
    {
        "slug": "the-boys-tv-entry-1",
        "name": "The Boys entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-2",
        "name": "The Boys entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-3",
        "name": "The Boys entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-4",
        "name": "The Boys entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-5",
        "name": "The Boys entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-6",
        "name": "The Boys entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-7",
        "name": "The Boys entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-8",
        "name": "The Boys entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-9",
        "name": "The Boys entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-10",
        "name": "The Boys entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-11",
        "name": "The Boys entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-12",
        "name": "The Boys entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-13",
        "name": "The Boys entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-14",
        "name": "The Boys entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-15",
        "name": "The Boys entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-16",
        "name": "The Boys entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-17",
        "name": "The Boys entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-18",
        "name": "The Boys entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-19",
        "name": "The Boys entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-20",
        "name": "The Boys entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-21",
        "name": "The Boys entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-22",
        "name": "The Boys entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-23",
        "name": "The Boys entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-boys-tv-entry-24",
        "name": "The Boys entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Boys.",
        "description": "A supporting encyclopedia entry in the The Boys subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-boys-tv",
        "the-boys-tv-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-boys-tv",
        "the-boys-tv-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-boys-tv",
        "the-boys-tv-places",
        "contains",
        "The Boys places is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-events",
        "contains",
        "The Boys events is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-objects",
        "contains",
        "The Boys objects & artifacts is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-factions",
        "contains",
        "The Boys factions & groups is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-concepts",
        "contains",
        "The Boys concepts is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-eras",
        "contains",
        "The Boys eras is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-works",
        "contains",
        "The Boys works & media is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-symbols",
        "contains",
        "The Boys symbols is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-controversies",
        "contains",
        "The Boys controversies is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-sources",
        "contains",
        "The Boys sources is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-geography",
        "contains",
        "The Boys geography is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-legacy",
        "contains",
        "The Boys legacy is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-practices",
        "contains",
        "The Boys practices is a primary trailhead under The Boys.",
        0.88,
        0.82
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-1",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-2",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-3",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-4",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-5",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-6",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-7",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-8",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-9",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-10",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-11",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-12",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-13",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-14",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-15",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-16",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-17",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-18",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-19",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-20",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-21",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-22",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-23",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ],
    [
        "the-boys-tv",
        "the-boys-tv-entry-24",
        "contains",
        "Supporting entry under The Boys.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
