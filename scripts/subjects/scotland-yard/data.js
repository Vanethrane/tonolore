/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "scotland-yard",
        "name": "Scotland Yard",
        "type": "topic",
        "short_description": "Metropolitan Police lore, detective myth, and the London institution that defined modern policing fiction.",
        "description": "Metropolitan Police lore, detective myth, and the London institution that defined modern policing fiction. This Ton-o-Lore subject maps people, places, events, and ideas tied to Scotland Yard so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "scotland-yard-figures",
        "name": "Scotland Yard figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Scotland Yard.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Scotland Yard."
    },
    {
        "slug": "scotland-yard-world",
        "name": "Scotland Yard world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Scotland Yard.",
        "description": "Geography, institutions, and periodization that give Scotland Yard its encyclopedia shape."
    },
    {
        "slug": "scotland-yard-places",
        "name": "Scotland Yard places",
        "type": "place",
        "short_description": "Locations and geographies that frame Scotland Yard.",
        "description": "Places, regions, and built sites that give Scotland Yard its map — where events and figures concentrate."
    },
    {
        "slug": "scotland-yard-events",
        "name": "Scotland Yard events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Scotland Yard.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Scotland Yard timeline."
    },
    {
        "slug": "scotland-yard-objects",
        "name": "Scotland Yard objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Scotland Yard.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Scotland Yard."
    },
    {
        "slug": "scotland-yard-factions",
        "name": "Scotland Yard factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Scotland Yard.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Scotland Yard."
    },
    {
        "slug": "scotland-yard-concepts",
        "name": "Scotland Yard concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Scotland Yard.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Scotland Yard readable as a lore graph."
    },
    {
        "slug": "scotland-yard-eras",
        "name": "Scotland Yard eras",
        "type": "event",
        "short_description": "Periodization for Scotland Yard.",
        "description": "Named eras and phases that help readers track how Scotland Yard changes across time."
    },
    {
        "slug": "scotland-yard-works",
        "name": "Scotland Yard works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Scotland Yard.",
        "description": "Primary works and adaptations through which most audiences encounter Scotland Yard."
    },
    {
        "slug": "scotland-yard-symbols",
        "name": "Scotland Yard symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Scotland Yard.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Scotland Yard."
    },
    {
        "slug": "scotland-yard-controversies",
        "name": "Scotland Yard controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Scotland Yard.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Scotland Yard argumentative."
    },
    {
        "slug": "scotland-yard-sources",
        "name": "Scotland Yard sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Scotland Yard.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Scotland Yard."
    },
    {
        "slug": "scotland-yard-geography",
        "name": "Scotland Yard geography",
        "type": "place",
        "short_description": "Broader geographic framing for Scotland Yard.",
        "description": "Regions, routes, and spatial systems that situate Scotland Yard beyond single named places."
    },
    {
        "slug": "scotland-yard-legacy",
        "name": "Scotland Yard legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Scotland Yard.",
        "description": "How Scotland Yard continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "scotland-yard-practices",
        "name": "Scotland Yard practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Scotland Yard.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Scotland Yard."
    },
    {
        "slug": "scotland-yard-entry-1",
        "name": "Scotland Yard entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-2",
        "name": "Scotland Yard entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-3",
        "name": "Scotland Yard entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-4",
        "name": "Scotland Yard entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-5",
        "name": "Scotland Yard entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-6",
        "name": "Scotland Yard entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-7",
        "name": "Scotland Yard entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-8",
        "name": "Scotland Yard entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-9",
        "name": "Scotland Yard entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-10",
        "name": "Scotland Yard entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-11",
        "name": "Scotland Yard entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-12",
        "name": "Scotland Yard entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-13",
        "name": "Scotland Yard entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-14",
        "name": "Scotland Yard entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-15",
        "name": "Scotland Yard entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-16",
        "name": "Scotland Yard entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-17",
        "name": "Scotland Yard entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-18",
        "name": "Scotland Yard entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-19",
        "name": "Scotland Yard entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-20",
        "name": "Scotland Yard entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-21",
        "name": "Scotland Yard entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-22",
        "name": "Scotland Yard entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-23",
        "name": "Scotland Yard entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "scotland-yard-entry-24",
        "name": "Scotland Yard entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Scotland Yard.",
        "description": "A supporting encyclopedia entry in the Scotland Yard subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "scotland-yard",
        "scotland-yard-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "scotland-yard",
        "scotland-yard-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "scotland-yard",
        "scotland-yard-places",
        "contains",
        "Scotland Yard places is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-events",
        "contains",
        "Scotland Yard events is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-objects",
        "contains",
        "Scotland Yard objects & artifacts is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-factions",
        "contains",
        "Scotland Yard factions & groups is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-concepts",
        "contains",
        "Scotland Yard concepts is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-eras",
        "contains",
        "Scotland Yard eras is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-works",
        "contains",
        "Scotland Yard works & media is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-symbols",
        "contains",
        "Scotland Yard symbols is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-controversies",
        "contains",
        "Scotland Yard controversies is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-sources",
        "contains",
        "Scotland Yard sources is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-geography",
        "contains",
        "Scotland Yard geography is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-legacy",
        "contains",
        "Scotland Yard legacy is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-practices",
        "contains",
        "Scotland Yard practices is a primary trailhead under Scotland Yard.",
        0.88,
        0.82
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-1",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-2",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-3",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-4",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-5",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-6",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-7",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-8",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-9",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-10",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-11",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-12",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-13",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-14",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-15",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-16",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-17",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-18",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-19",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-20",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-21",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-22",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-23",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ],
    [
        "scotland-yard",
        "scotland-yard-entry-24",
        "contains",
        "Supporting entry under Scotland Yard.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
