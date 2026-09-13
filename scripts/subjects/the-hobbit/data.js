/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-hobbit",
        "name": "The Hobbit",
        "type": "topic",
        "short_description": "Unexpected party, dragon gold, and the children’s prologue to Middle-earth’s greater war.",
        "description": "Unexpected party, dragon gold, and the children’s prologue to Middle-earth’s greater war. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Hobbit so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "the-hobbit-figures",
        "name": "The Hobbit figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Hobbit.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Hobbit."
    },
    {
        "slug": "the-hobbit-world",
        "name": "The Hobbit world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Hobbit.",
        "description": "Geography, institutions, and periodization that give The Hobbit its encyclopedia shape."
    },
    {
        "slug": "the-hobbit-places",
        "name": "The Hobbit places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Hobbit.",
        "description": "Places, regions, and built sites that give The Hobbit its map — where events and figures concentrate."
    },
    {
        "slug": "the-hobbit-events",
        "name": "The Hobbit events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Hobbit.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Hobbit timeline."
    },
    {
        "slug": "the-hobbit-objects",
        "name": "The Hobbit objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Hobbit.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Hobbit."
    },
    {
        "slug": "the-hobbit-factions",
        "name": "The Hobbit factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Hobbit.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Hobbit."
    },
    {
        "slug": "the-hobbit-concepts",
        "name": "The Hobbit concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Hobbit.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Hobbit readable as a lore graph."
    },
    {
        "slug": "the-hobbit-eras",
        "name": "The Hobbit eras",
        "type": "event",
        "short_description": "Periodization for The Hobbit.",
        "description": "Named eras and phases that help readers track how The Hobbit changes across time."
    },
    {
        "slug": "the-hobbit-works",
        "name": "The Hobbit works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Hobbit.",
        "description": "Primary works and adaptations through which most audiences encounter The Hobbit."
    },
    {
        "slug": "the-hobbit-symbols",
        "name": "The Hobbit symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Hobbit.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Hobbit."
    },
    {
        "slug": "the-hobbit-controversies",
        "name": "The Hobbit controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Hobbit.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Hobbit argumentative."
    },
    {
        "slug": "the-hobbit-sources",
        "name": "The Hobbit sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Hobbit.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Hobbit."
    },
    {
        "slug": "the-hobbit-geography",
        "name": "The Hobbit geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Hobbit.",
        "description": "Regions, routes, and spatial systems that situate The Hobbit beyond single named places."
    },
    {
        "slug": "the-hobbit-legacy",
        "name": "The Hobbit legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Hobbit.",
        "description": "How The Hobbit continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-hobbit-practices",
        "name": "The Hobbit practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Hobbit.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Hobbit."
    },
    {
        "slug": "the-hobbit-entry-1",
        "name": "The Hobbit entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-2",
        "name": "The Hobbit entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-3",
        "name": "The Hobbit entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-4",
        "name": "The Hobbit entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-5",
        "name": "The Hobbit entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-6",
        "name": "The Hobbit entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-7",
        "name": "The Hobbit entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-8",
        "name": "The Hobbit entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-9",
        "name": "The Hobbit entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-10",
        "name": "The Hobbit entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-11",
        "name": "The Hobbit entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-12",
        "name": "The Hobbit entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-13",
        "name": "The Hobbit entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-14",
        "name": "The Hobbit entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-15",
        "name": "The Hobbit entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-16",
        "name": "The Hobbit entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-17",
        "name": "The Hobbit entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-18",
        "name": "The Hobbit entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-19",
        "name": "The Hobbit entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-20",
        "name": "The Hobbit entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-21",
        "name": "The Hobbit entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-22",
        "name": "The Hobbit entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-23",
        "name": "The Hobbit entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-hobbit-entry-24",
        "name": "The Hobbit entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hobbit.",
        "description": "A supporting encyclopedia entry in the The Hobbit subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-hobbit",
        "the-hobbit-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-hobbit",
        "the-hobbit-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-hobbit",
        "the-hobbit-places",
        "contains",
        "The Hobbit places is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-events",
        "contains",
        "The Hobbit events is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-objects",
        "contains",
        "The Hobbit objects & artifacts is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-factions",
        "contains",
        "The Hobbit factions & groups is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-concepts",
        "contains",
        "The Hobbit concepts is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-eras",
        "contains",
        "The Hobbit eras is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-works",
        "contains",
        "The Hobbit works & media is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-symbols",
        "contains",
        "The Hobbit symbols is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-controversies",
        "contains",
        "The Hobbit controversies is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-sources",
        "contains",
        "The Hobbit sources is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-geography",
        "contains",
        "The Hobbit geography is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-legacy",
        "contains",
        "The Hobbit legacy is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-practices",
        "contains",
        "The Hobbit practices is a primary trailhead under The Hobbit.",
        0.88,
        0.82
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-1",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-2",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-3",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-4",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-5",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-6",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-7",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-8",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-9",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-10",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-11",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-12",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-13",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-14",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-15",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-16",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-17",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-18",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-19",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-20",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-21",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-22",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-23",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ],
    [
        "the-hobbit",
        "the-hobbit-entry-24",
        "contains",
        "Supporting entry under The Hobbit.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
