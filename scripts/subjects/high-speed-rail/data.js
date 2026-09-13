/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "high-speed-rail",
        "name": "High-speed rail",
        "type": "topic",
        "short_description": "Shinkansen to TGV, and the passenger trains that rival short-haul flights.",
        "description": "Shinkansen to TGV, and the passenger trains that rival short-haul flights. This Ton-o-Lore subject maps people, places, events, and ideas tied to High-speed rail so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "high-speed-rail-figures",
        "name": "High-speed rail figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to High-speed rail.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring High-speed rail."
    },
    {
        "slug": "high-speed-rail-world",
        "name": "High-speed rail world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame High-speed rail.",
        "description": "Geography, institutions, and periodization that give High-speed rail its encyclopedia shape."
    },
    {
        "slug": "high-speed-rail-places",
        "name": "High-speed rail places",
        "type": "place",
        "short_description": "Locations and geographies that frame High-speed rail.",
        "description": "Places, regions, and built sites that give High-speed rail its map — where events and figures concentrate."
    },
    {
        "slug": "high-speed-rail-events",
        "name": "High-speed rail events",
        "type": "event",
        "short_description": "Turning points and dated episodes in High-speed rail.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the High-speed rail timeline."
    },
    {
        "slug": "high-speed-rail-objects",
        "name": "High-speed rail objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to High-speed rail.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through High-speed rail."
    },
    {
        "slug": "high-speed-rail-factions",
        "name": "High-speed rail factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside High-speed rail.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in High-speed rail."
    },
    {
        "slug": "high-speed-rail-concepts",
        "name": "High-speed rail concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize High-speed rail.",
        "description": "Keywords, doctrines, systems, and abstract forces that make High-speed rail readable as a lore graph."
    },
    {
        "slug": "high-speed-rail-eras",
        "name": "High-speed rail eras",
        "type": "event",
        "short_description": "Periodization for High-speed rail.",
        "description": "Named eras and phases that help readers track how High-speed rail changes across time."
    },
    {
        "slug": "high-speed-rail-works",
        "name": "High-speed rail works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry High-speed rail.",
        "description": "Primary works and adaptations through which most audiences encounter High-speed rail."
    },
    {
        "slug": "high-speed-rail-symbols",
        "name": "High-speed rail symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with High-speed rail.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside High-speed rail."
    },
    {
        "slug": "high-speed-rail-controversies",
        "name": "High-speed rail controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in High-speed rail.",
        "description": "Debates, rival canons, scandals, and contested facts that keep High-speed rail argumentative."
    },
    {
        "slug": "high-speed-rail-sources",
        "name": "High-speed rail sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into High-speed rail.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify High-speed rail."
    },
    {
        "slug": "high-speed-rail-geography",
        "name": "High-speed rail geography",
        "type": "place",
        "short_description": "Broader geographic framing for High-speed rail.",
        "description": "Regions, routes, and spatial systems that situate High-speed rail beyond single named places."
    },
    {
        "slug": "high-speed-rail-legacy",
        "name": "High-speed rail legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of High-speed rail.",
        "description": "How High-speed rail continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "high-speed-rail-practices",
        "name": "High-speed rail practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in High-speed rail.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in High-speed rail."
    },
    {
        "slug": "high-speed-rail-entry-1",
        "name": "High-speed rail entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-2",
        "name": "High-speed rail entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-3",
        "name": "High-speed rail entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-4",
        "name": "High-speed rail entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-5",
        "name": "High-speed rail entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-6",
        "name": "High-speed rail entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-7",
        "name": "High-speed rail entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-8",
        "name": "High-speed rail entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-9",
        "name": "High-speed rail entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-10",
        "name": "High-speed rail entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-11",
        "name": "High-speed rail entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-12",
        "name": "High-speed rail entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-13",
        "name": "High-speed rail entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-14",
        "name": "High-speed rail entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-15",
        "name": "High-speed rail entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-16",
        "name": "High-speed rail entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-17",
        "name": "High-speed rail entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-18",
        "name": "High-speed rail entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-19",
        "name": "High-speed rail entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-20",
        "name": "High-speed rail entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-21",
        "name": "High-speed rail entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-22",
        "name": "High-speed rail entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-23",
        "name": "High-speed rail entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "high-speed-rail-entry-24",
        "name": "High-speed rail entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside High-speed rail.",
        "description": "A supporting encyclopedia entry in the High-speed rail subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "high-speed-rail",
        "high-speed-rail-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "high-speed-rail",
        "high-speed-rail-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "high-speed-rail",
        "high-speed-rail-places",
        "contains",
        "High-speed rail places is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-events",
        "contains",
        "High-speed rail events is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-objects",
        "contains",
        "High-speed rail objects & artifacts is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-factions",
        "contains",
        "High-speed rail factions & groups is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-concepts",
        "contains",
        "High-speed rail concepts is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-eras",
        "contains",
        "High-speed rail eras is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-works",
        "contains",
        "High-speed rail works & media is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-symbols",
        "contains",
        "High-speed rail symbols is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-controversies",
        "contains",
        "High-speed rail controversies is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-sources",
        "contains",
        "High-speed rail sources is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-geography",
        "contains",
        "High-speed rail geography is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-legacy",
        "contains",
        "High-speed rail legacy is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-practices",
        "contains",
        "High-speed rail practices is a primary trailhead under High-speed rail.",
        0.88,
        0.82
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-1",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-2",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-3",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-4",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-5",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-6",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-7",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-8",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-9",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-10",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-11",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-12",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-13",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-14",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-15",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-16",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-17",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-18",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-19",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-20",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-21",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-22",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-23",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ],
    [
        "high-speed-rail",
        "high-speed-rail-entry-24",
        "contains",
        "Supporting entry under High-speed rail.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
