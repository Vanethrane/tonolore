/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "early-web-geocities",
        "name": "GeoCities & early web",
        "type": "topic",
        "short_description": "Homepages, visitor counters, and the hand-built web before social platforms centralized culture.",
        "description": "Homepages, visitor counters, and the hand-built web before social platforms centralized culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to GeoCities & early web so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "early-web-geocities-figures",
        "name": "GeoCities & early web figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to GeoCities & early web.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring GeoCities & early web."
    },
    {
        "slug": "early-web-geocities-world",
        "name": "GeoCities & early web world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame GeoCities & early web.",
        "description": "Geography, institutions, and periodization that give GeoCities & early web its encyclopedia shape."
    },
    {
        "slug": "early-web-geocities-places",
        "name": "GeoCities & early web places",
        "type": "place",
        "short_description": "Locations and geographies that frame GeoCities & early web.",
        "description": "Places, regions, and built sites that give GeoCities & early web its map — where events and figures concentrate."
    },
    {
        "slug": "early-web-geocities-events",
        "name": "GeoCities & early web events",
        "type": "event",
        "short_description": "Turning points and dated episodes in GeoCities & early web.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the GeoCities & early web timeline."
    },
    {
        "slug": "early-web-geocities-objects",
        "name": "GeoCities & early web objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to GeoCities & early web.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through GeoCities & early web."
    },
    {
        "slug": "early-web-geocities-factions",
        "name": "GeoCities & early web factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside GeoCities & early web.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in GeoCities & early web."
    },
    {
        "slug": "early-web-geocities-concepts",
        "name": "GeoCities & early web concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize GeoCities & early web.",
        "description": "Keywords, doctrines, systems, and abstract forces that make GeoCities & early web readable as a lore graph."
    },
    {
        "slug": "early-web-geocities-eras",
        "name": "GeoCities & early web eras",
        "type": "event",
        "short_description": "Periodization for GeoCities & early web.",
        "description": "Named eras and phases that help readers track how GeoCities & early web changes across time."
    },
    {
        "slug": "early-web-geocities-works",
        "name": "GeoCities & early web works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry GeoCities & early web.",
        "description": "Primary works and adaptations through which most audiences encounter GeoCities & early web."
    },
    {
        "slug": "early-web-geocities-symbols",
        "name": "GeoCities & early web symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with GeoCities & early web.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside GeoCities & early web."
    },
    {
        "slug": "early-web-geocities-controversies",
        "name": "GeoCities & early web controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in GeoCities & early web.",
        "description": "Debates, rival canons, scandals, and contested facts that keep GeoCities & early web argumentative."
    },
    {
        "slug": "early-web-geocities-sources",
        "name": "GeoCities & early web sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into GeoCities & early web.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify GeoCities & early web."
    },
    {
        "slug": "early-web-geocities-geography",
        "name": "GeoCities & early web geography",
        "type": "place",
        "short_description": "Broader geographic framing for GeoCities & early web.",
        "description": "Regions, routes, and spatial systems that situate GeoCities & early web beyond single named places."
    },
    {
        "slug": "early-web-geocities-legacy",
        "name": "GeoCities & early web legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of GeoCities & early web.",
        "description": "How GeoCities & early web continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "early-web-geocities-practices",
        "name": "GeoCities & early web practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in GeoCities & early web.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in GeoCities & early web."
    },
    {
        "slug": "early-web-geocities-entry-1",
        "name": "GeoCities & early web entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-2",
        "name": "GeoCities & early web entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-3",
        "name": "GeoCities & early web entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-4",
        "name": "GeoCities & early web entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-5",
        "name": "GeoCities & early web entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-6",
        "name": "GeoCities & early web entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-7",
        "name": "GeoCities & early web entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-8",
        "name": "GeoCities & early web entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-9",
        "name": "GeoCities & early web entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-10",
        "name": "GeoCities & early web entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-11",
        "name": "GeoCities & early web entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-12",
        "name": "GeoCities & early web entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-13",
        "name": "GeoCities & early web entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-14",
        "name": "GeoCities & early web entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-15",
        "name": "GeoCities & early web entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-16",
        "name": "GeoCities & early web entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-17",
        "name": "GeoCities & early web entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-18",
        "name": "GeoCities & early web entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-19",
        "name": "GeoCities & early web entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-20",
        "name": "GeoCities & early web entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-21",
        "name": "GeoCities & early web entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-22",
        "name": "GeoCities & early web entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-23",
        "name": "GeoCities & early web entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "early-web-geocities-entry-24",
        "name": "GeoCities & early web entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside GeoCities & early web.",
        "description": "A supporting encyclopedia entry in the GeoCities & early web subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "early-web-geocities",
        "early-web-geocities-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "early-web-geocities",
        "early-web-geocities-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "early-web-geocities",
        "early-web-geocities-places",
        "contains",
        "GeoCities & early web places is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-events",
        "contains",
        "GeoCities & early web events is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-objects",
        "contains",
        "GeoCities & early web objects & artifacts is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-factions",
        "contains",
        "GeoCities & early web factions & groups is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-concepts",
        "contains",
        "GeoCities & early web concepts is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-eras",
        "contains",
        "GeoCities & early web eras is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-works",
        "contains",
        "GeoCities & early web works & media is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-symbols",
        "contains",
        "GeoCities & early web symbols is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-controversies",
        "contains",
        "GeoCities & early web controversies is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-sources",
        "contains",
        "GeoCities & early web sources is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-geography",
        "contains",
        "GeoCities & early web geography is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-legacy",
        "contains",
        "GeoCities & early web legacy is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-practices",
        "contains",
        "GeoCities & early web practices is a primary trailhead under GeoCities & early web.",
        0.88,
        0.82
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-1",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-2",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-3",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-4",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-5",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-6",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-7",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-8",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-9",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-10",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-11",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-12",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-13",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-14",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-15",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-16",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-17",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-18",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-19",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-20",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-21",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-22",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-23",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ],
    [
        "early-web-geocities",
        "early-web-geocities-entry-24",
        "contains",
        "Supporting entry under GeoCities & early web.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
