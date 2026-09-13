/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nightmare-on-elm-street",
        "name": "A Nightmare on Elm Street",
        "type": "topic",
        "short_description": "Freddy Krueger, dream-kills, and the suburban nightmare franchise that redefined 1980s horror.",
        "description": "Freddy Krueger, dream-kills, and the suburban nightmare franchise that redefined 1980s horror. This Ton-o-Lore subject maps people, places, events, and ideas tied to A Nightmare on Elm Street so readers can follow long-tail connections across horror."
    },
    {
        "slug": "nightmare-on-elm-street-figures",
        "name": "A Nightmare on Elm Street figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to A Nightmare on Elm Street.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring A Nightmare on Elm Street."
    },
    {
        "slug": "nightmare-on-elm-street-world",
        "name": "A Nightmare on Elm Street world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame A Nightmare on Elm Street.",
        "description": "Geography, institutions, and periodization that give A Nightmare on Elm Street its encyclopedia shape."
    },
    {
        "slug": "nightmare-on-elm-street-places",
        "name": "A Nightmare on Elm Street places",
        "type": "place",
        "short_description": "Locations and geographies that frame A Nightmare on Elm Street.",
        "description": "Places, regions, and built sites that give A Nightmare on Elm Street its map — where events and figures concentrate."
    },
    {
        "slug": "nightmare-on-elm-street-events",
        "name": "A Nightmare on Elm Street events",
        "type": "event",
        "short_description": "Turning points and dated episodes in A Nightmare on Elm Street.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the A Nightmare on Elm Street timeline."
    },
    {
        "slug": "nightmare-on-elm-street-objects",
        "name": "A Nightmare on Elm Street objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to A Nightmare on Elm Street.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through A Nightmare on Elm Street."
    },
    {
        "slug": "nightmare-on-elm-street-factions",
        "name": "A Nightmare on Elm Street factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside A Nightmare on Elm Street.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in A Nightmare on Elm Street."
    },
    {
        "slug": "nightmare-on-elm-street-concepts",
        "name": "A Nightmare on Elm Street concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize A Nightmare on Elm Street.",
        "description": "Keywords, doctrines, systems, and abstract forces that make A Nightmare on Elm Street readable as a lore graph."
    },
    {
        "slug": "nightmare-on-elm-street-eras",
        "name": "A Nightmare on Elm Street eras",
        "type": "event",
        "short_description": "Periodization for A Nightmare on Elm Street.",
        "description": "Named eras and phases that help readers track how A Nightmare on Elm Street changes across time."
    },
    {
        "slug": "nightmare-on-elm-street-works",
        "name": "A Nightmare on Elm Street works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry A Nightmare on Elm Street.",
        "description": "Primary works and adaptations through which most audiences encounter A Nightmare on Elm Street."
    },
    {
        "slug": "nightmare-on-elm-street-symbols",
        "name": "A Nightmare on Elm Street symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with A Nightmare on Elm Street.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside A Nightmare on Elm Street."
    },
    {
        "slug": "nightmare-on-elm-street-controversies",
        "name": "A Nightmare on Elm Street controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in A Nightmare on Elm Street.",
        "description": "Debates, rival canons, scandals, and contested facts that keep A Nightmare on Elm Street argumentative."
    },
    {
        "slug": "nightmare-on-elm-street-sources",
        "name": "A Nightmare on Elm Street sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into A Nightmare on Elm Street.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify A Nightmare on Elm Street."
    },
    {
        "slug": "nightmare-on-elm-street-geography",
        "name": "A Nightmare on Elm Street geography",
        "type": "place",
        "short_description": "Broader geographic framing for A Nightmare on Elm Street.",
        "description": "Regions, routes, and spatial systems that situate A Nightmare on Elm Street beyond single named places."
    },
    {
        "slug": "nightmare-on-elm-street-legacy",
        "name": "A Nightmare on Elm Street legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of A Nightmare on Elm Street.",
        "description": "How A Nightmare on Elm Street continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nightmare-on-elm-street-practices",
        "name": "A Nightmare on Elm Street practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in A Nightmare on Elm Street.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in A Nightmare on Elm Street."
    },
    {
        "slug": "nightmare-on-elm-street-entry-1",
        "name": "A Nightmare on Elm Street entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-2",
        "name": "A Nightmare on Elm Street entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-3",
        "name": "A Nightmare on Elm Street entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-4",
        "name": "A Nightmare on Elm Street entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-5",
        "name": "A Nightmare on Elm Street entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-6",
        "name": "A Nightmare on Elm Street entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-7",
        "name": "A Nightmare on Elm Street entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-8",
        "name": "A Nightmare on Elm Street entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-9",
        "name": "A Nightmare on Elm Street entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-10",
        "name": "A Nightmare on Elm Street entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-11",
        "name": "A Nightmare on Elm Street entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-12",
        "name": "A Nightmare on Elm Street entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-13",
        "name": "A Nightmare on Elm Street entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-14",
        "name": "A Nightmare on Elm Street entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-15",
        "name": "A Nightmare on Elm Street entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-16",
        "name": "A Nightmare on Elm Street entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-17",
        "name": "A Nightmare on Elm Street entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-18",
        "name": "A Nightmare on Elm Street entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-19",
        "name": "A Nightmare on Elm Street entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-20",
        "name": "A Nightmare on Elm Street entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-21",
        "name": "A Nightmare on Elm Street entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-22",
        "name": "A Nightmare on Elm Street entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-23",
        "name": "A Nightmare on Elm Street entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nightmare-on-elm-street-entry-24",
        "name": "A Nightmare on Elm Street entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside A Nightmare on Elm Street.",
        "description": "A supporting encyclopedia entry in the A Nightmare on Elm Street subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-places",
        "contains",
        "A Nightmare on Elm Street places is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-events",
        "contains",
        "A Nightmare on Elm Street events is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-objects",
        "contains",
        "A Nightmare on Elm Street objects & artifacts is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-factions",
        "contains",
        "A Nightmare on Elm Street factions & groups is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-concepts",
        "contains",
        "A Nightmare on Elm Street concepts is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-eras",
        "contains",
        "A Nightmare on Elm Street eras is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-works",
        "contains",
        "A Nightmare on Elm Street works & media is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-symbols",
        "contains",
        "A Nightmare on Elm Street symbols is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-controversies",
        "contains",
        "A Nightmare on Elm Street controversies is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-sources",
        "contains",
        "A Nightmare on Elm Street sources is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-geography",
        "contains",
        "A Nightmare on Elm Street geography is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-legacy",
        "contains",
        "A Nightmare on Elm Street legacy is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-practices",
        "contains",
        "A Nightmare on Elm Street practices is a primary trailhead under A Nightmare on Elm Street.",
        0.88,
        0.82
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-1",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-2",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-3",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-4",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-5",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-6",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-7",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-8",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-9",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-10",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-11",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-12",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-13",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-14",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-15",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-16",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-17",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-18",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-19",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-20",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-21",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-22",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-23",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ],
    [
        "nightmare-on-elm-street",
        "nightmare-on-elm-street-entry-24",
        "contains",
        "Supporting entry under A Nightmare on Elm Street.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
