/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-war-ii",
        "name": "World War II",
        "type": "topic",
        "short_description": "Theatres, alliances, and technologies of the mid-20th-century global war.",
        "description": "Theatres, alliances, and technologies of the mid-20th-century global war. This Ton-o-Lore subject maps people, places, events, and ideas tied to World War II so readers can follow long-tail connections across history."
    },
    {
        "slug": "world-war-ii-figures",
        "name": "World War II figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to World War II.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World War II."
    },
    {
        "slug": "world-war-ii-world",
        "name": "World War II world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame World War II.",
        "description": "Geography, institutions, and periodization that give World War II its encyclopedia shape."
    },
    {
        "slug": "world-war-ii-places",
        "name": "World War II places",
        "type": "place",
        "short_description": "Locations and geographies that frame World War II.",
        "description": "Places, regions, and built sites that give World War II its map — where events and figures concentrate."
    },
    {
        "slug": "world-war-ii-events",
        "name": "World War II events",
        "type": "event",
        "short_description": "Turning points and dated episodes in World War II.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the World War II timeline."
    },
    {
        "slug": "world-war-ii-objects",
        "name": "World War II objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World War II.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World War II."
    },
    {
        "slug": "world-war-ii-factions",
        "name": "World War II factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World War II.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World War II."
    },
    {
        "slug": "world-war-ii-concepts",
        "name": "World War II concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World War II.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World War II readable as a lore graph."
    },
    {
        "slug": "world-war-ii-eras",
        "name": "World War II eras",
        "type": "event",
        "short_description": "Periodization for World War II.",
        "description": "Named eras and phases that help readers track how World War II changes across time."
    },
    {
        "slug": "world-war-ii-works",
        "name": "World War II works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World War II.",
        "description": "Primary works and adaptations through which most audiences encounter World War II."
    },
    {
        "slug": "world-war-ii-symbols",
        "name": "World War II symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World War II.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World War II."
    },
    {
        "slug": "world-war-ii-controversies",
        "name": "World War II controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World War II.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World War II argumentative."
    },
    {
        "slug": "world-war-ii-sources",
        "name": "World War II sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World War II.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World War II."
    },
    {
        "slug": "world-war-ii-geography",
        "name": "World War II geography",
        "type": "place",
        "short_description": "Broader geographic framing for World War II.",
        "description": "Regions, routes, and spatial systems that situate World War II beyond single named places."
    },
    {
        "slug": "world-war-ii-legacy",
        "name": "World War II legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of World War II.",
        "description": "How World War II continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "world-war-ii",
        "world-war-ii-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "world-war-ii",
        "world-war-ii-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "world-war-ii",
        "world-war-ii-places",
        "contains",
        "World War II places is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-events",
        "contains",
        "World War II events is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-objects",
        "contains",
        "World War II objects & artifacts is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-factions",
        "contains",
        "World War II factions & groups is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-concepts",
        "contains",
        "World War II concepts is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-eras",
        "contains",
        "World War II eras is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-works",
        "contains",
        "World War II works & media is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-symbols",
        "contains",
        "World War II symbols is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-controversies",
        "contains",
        "World War II controversies is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-sources",
        "contains",
        "World War II sources is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-geography",
        "contains",
        "World War II geography is a primary trailhead under World War II.",
        0.88,
        0.82
    ],
    [
        "world-war-ii",
        "world-war-ii-legacy",
        "contains",
        "World War II legacy is a primary trailhead under World War II.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
