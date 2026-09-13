/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "american-gods-book",
        "name": "American Gods",
        "type": "topic",
        "short_description": "Old gods vs new, roadside America, and Gaiman’s immigrant-myth road novel.",
        "description": "Old gods vs new, roadside America, and Gaiman’s immigrant-myth road novel. This Ton-o-Lore subject maps people, places, events, and ideas tied to American Gods so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "american-gods-book-figures",
        "name": "American Gods figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to American Gods.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring American Gods."
    },
    {
        "slug": "american-gods-book-world",
        "name": "American Gods world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame American Gods.",
        "description": "Geography, institutions, and periodization that give American Gods its encyclopedia shape."
    },
    {
        "slug": "american-gods-book-places",
        "name": "American Gods places",
        "type": "place",
        "short_description": "Locations and geographies that frame American Gods.",
        "description": "Places, regions, and built sites that give American Gods its map — where events and figures concentrate."
    },
    {
        "slug": "american-gods-book-events",
        "name": "American Gods events",
        "type": "event",
        "short_description": "Turning points and dated episodes in American Gods.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the American Gods timeline."
    },
    {
        "slug": "american-gods-book-objects",
        "name": "American Gods objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to American Gods.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through American Gods."
    },
    {
        "slug": "american-gods-book-factions",
        "name": "American Gods factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside American Gods.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in American Gods."
    },
    {
        "slug": "american-gods-book-concepts",
        "name": "American Gods concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize American Gods.",
        "description": "Keywords, doctrines, systems, and abstract forces that make American Gods readable as a lore graph."
    },
    {
        "slug": "american-gods-book-eras",
        "name": "American Gods eras",
        "type": "event",
        "short_description": "Periodization for American Gods.",
        "description": "Named eras and phases that help readers track how American Gods changes across time."
    },
    {
        "slug": "american-gods-book-works",
        "name": "American Gods works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry American Gods.",
        "description": "Primary works and adaptations through which most audiences encounter American Gods."
    },
    {
        "slug": "american-gods-book-symbols",
        "name": "American Gods symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with American Gods.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside American Gods."
    },
    {
        "slug": "american-gods-book-controversies",
        "name": "American Gods controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in American Gods.",
        "description": "Debates, rival canons, scandals, and contested facts that keep American Gods argumentative."
    },
    {
        "slug": "american-gods-book-sources",
        "name": "American Gods sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into American Gods.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify American Gods."
    },
    {
        "slug": "american-gods-book-geography",
        "name": "American Gods geography",
        "type": "place",
        "short_description": "Broader geographic framing for American Gods.",
        "description": "Regions, routes, and spatial systems that situate American Gods beyond single named places."
    },
    {
        "slug": "american-gods-book-legacy",
        "name": "American Gods legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of American Gods.",
        "description": "How American Gods continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "american-gods-book-practices",
        "name": "American Gods practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in American Gods.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in American Gods."
    },
    {
        "slug": "american-gods-book-entry-1",
        "name": "American Gods entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-2",
        "name": "American Gods entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-3",
        "name": "American Gods entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-4",
        "name": "American Gods entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-5",
        "name": "American Gods entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-6",
        "name": "American Gods entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-7",
        "name": "American Gods entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-8",
        "name": "American Gods entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-9",
        "name": "American Gods entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-10",
        "name": "American Gods entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-11",
        "name": "American Gods entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-12",
        "name": "American Gods entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-13",
        "name": "American Gods entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-14",
        "name": "American Gods entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-15",
        "name": "American Gods entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-16",
        "name": "American Gods entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-17",
        "name": "American Gods entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-18",
        "name": "American Gods entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-19",
        "name": "American Gods entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-20",
        "name": "American Gods entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-21",
        "name": "American Gods entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-22",
        "name": "American Gods entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-23",
        "name": "American Gods entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-gods-book-entry-24",
        "name": "American Gods entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Gods.",
        "description": "A supporting encyclopedia entry in the American Gods subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "american-gods-book",
        "american-gods-book-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "american-gods-book",
        "american-gods-book-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "american-gods-book",
        "american-gods-book-places",
        "contains",
        "American Gods places is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-events",
        "contains",
        "American Gods events is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-objects",
        "contains",
        "American Gods objects & artifacts is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-factions",
        "contains",
        "American Gods factions & groups is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-concepts",
        "contains",
        "American Gods concepts is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-eras",
        "contains",
        "American Gods eras is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-works",
        "contains",
        "American Gods works & media is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-symbols",
        "contains",
        "American Gods symbols is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-controversies",
        "contains",
        "American Gods controversies is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-sources",
        "contains",
        "American Gods sources is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-geography",
        "contains",
        "American Gods geography is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-legacy",
        "contains",
        "American Gods legacy is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-practices",
        "contains",
        "American Gods practices is a primary trailhead under American Gods.",
        0.88,
        0.82
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-1",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-2",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-3",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-4",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-5",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-6",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-7",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-8",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-9",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-10",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-11",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-12",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-13",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-14",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-15",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-16",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-17",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-18",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-19",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-20",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-21",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-22",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-23",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ],
    [
        "american-gods-book",
        "american-gods-book-entry-24",
        "contains",
        "Supporting entry under American Gods.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
