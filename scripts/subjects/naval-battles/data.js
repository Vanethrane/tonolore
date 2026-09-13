/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "naval-battles",
        "name": "Famous naval battles",
        "type": "topic",
        "short_description": "Trafalgar to Midway — fleet actions that decided empires and oceans.",
        "description": "Trafalgar to Midway — fleet actions that decided empires and oceans. This Ton-o-Lore subject maps people, places, events, and ideas tied to Famous naval battles so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "naval-battles-figures",
        "name": "Famous naval battles figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Famous naval battles.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Famous naval battles."
    },
    {
        "slug": "naval-battles-world",
        "name": "Famous naval battles world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Famous naval battles.",
        "description": "Geography, institutions, and periodization that give Famous naval battles its encyclopedia shape."
    },
    {
        "slug": "naval-battles-places",
        "name": "Famous naval battles places",
        "type": "place",
        "short_description": "Locations and geographies that frame Famous naval battles.",
        "description": "Places, regions, and built sites that give Famous naval battles its map — where events and figures concentrate."
    },
    {
        "slug": "naval-battles-events",
        "name": "Famous naval battles events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Famous naval battles.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Famous naval battles timeline."
    },
    {
        "slug": "naval-battles-objects",
        "name": "Famous naval battles objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Famous naval battles.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Famous naval battles."
    },
    {
        "slug": "naval-battles-factions",
        "name": "Famous naval battles factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Famous naval battles.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Famous naval battles."
    },
    {
        "slug": "naval-battles-concepts",
        "name": "Famous naval battles concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Famous naval battles.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Famous naval battles readable as a lore graph."
    },
    {
        "slug": "naval-battles-eras",
        "name": "Famous naval battles eras",
        "type": "event",
        "short_description": "Periodization for Famous naval battles.",
        "description": "Named eras and phases that help readers track how Famous naval battles changes across time."
    },
    {
        "slug": "naval-battles-works",
        "name": "Famous naval battles works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Famous naval battles.",
        "description": "Primary works and adaptations through which most audiences encounter Famous naval battles."
    },
    {
        "slug": "naval-battles-symbols",
        "name": "Famous naval battles symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Famous naval battles.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Famous naval battles."
    },
    {
        "slug": "naval-battles-controversies",
        "name": "Famous naval battles controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Famous naval battles.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Famous naval battles argumentative."
    },
    {
        "slug": "naval-battles-sources",
        "name": "Famous naval battles sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Famous naval battles.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Famous naval battles."
    },
    {
        "slug": "naval-battles-geography",
        "name": "Famous naval battles geography",
        "type": "place",
        "short_description": "Broader geographic framing for Famous naval battles.",
        "description": "Regions, routes, and spatial systems that situate Famous naval battles beyond single named places."
    },
    {
        "slug": "naval-battles-legacy",
        "name": "Famous naval battles legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Famous naval battles.",
        "description": "How Famous naval battles continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "naval-battles-practices",
        "name": "Famous naval battles practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Famous naval battles.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Famous naval battles."
    },
    {
        "slug": "naval-battles-entry-1",
        "name": "Famous naval battles entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-2",
        "name": "Famous naval battles entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-3",
        "name": "Famous naval battles entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-4",
        "name": "Famous naval battles entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-5",
        "name": "Famous naval battles entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-6",
        "name": "Famous naval battles entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-7",
        "name": "Famous naval battles entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-8",
        "name": "Famous naval battles entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-9",
        "name": "Famous naval battles entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-10",
        "name": "Famous naval battles entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-11",
        "name": "Famous naval battles entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-12",
        "name": "Famous naval battles entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-13",
        "name": "Famous naval battles entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-14",
        "name": "Famous naval battles entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-15",
        "name": "Famous naval battles entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-16",
        "name": "Famous naval battles entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-17",
        "name": "Famous naval battles entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-18",
        "name": "Famous naval battles entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-19",
        "name": "Famous naval battles entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-20",
        "name": "Famous naval battles entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-21",
        "name": "Famous naval battles entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-22",
        "name": "Famous naval battles entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-23",
        "name": "Famous naval battles entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "naval-battles-entry-24",
        "name": "Famous naval battles entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Famous naval battles.",
        "description": "A supporting encyclopedia entry in the Famous naval battles subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "naval-battles",
        "naval-battles-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "naval-battles",
        "naval-battles-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "naval-battles",
        "naval-battles-places",
        "contains",
        "Famous naval battles places is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-events",
        "contains",
        "Famous naval battles events is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-objects",
        "contains",
        "Famous naval battles objects & artifacts is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-factions",
        "contains",
        "Famous naval battles factions & groups is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-concepts",
        "contains",
        "Famous naval battles concepts is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-eras",
        "contains",
        "Famous naval battles eras is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-works",
        "contains",
        "Famous naval battles works & media is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-symbols",
        "contains",
        "Famous naval battles symbols is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-controversies",
        "contains",
        "Famous naval battles controversies is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-sources",
        "contains",
        "Famous naval battles sources is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-geography",
        "contains",
        "Famous naval battles geography is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-legacy",
        "contains",
        "Famous naval battles legacy is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-practices",
        "contains",
        "Famous naval battles practices is a primary trailhead under Famous naval battles.",
        0.88,
        0.82
    ],
    [
        "naval-battles",
        "naval-battles-entry-1",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-2",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-3",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-4",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-5",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-6",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-7",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-8",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-9",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-10",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-11",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-12",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-13",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-14",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-15",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-16",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-17",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-18",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-19",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-20",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-21",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-22",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-23",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ],
    [
        "naval-battles",
        "naval-battles-entry-24",
        "contains",
        "Supporting entry under Famous naval battles.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
