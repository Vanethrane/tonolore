/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "worlds-fairs",
        "name": "World's fairs & expositions",
        "type": "topic",
        "short_description": "Expositions, pavilions, inventions on display, cities remade for fairs, and the temporary architecture of spectacle.",
        "description": "Expositions, pavilions, inventions on display, cities remade for fairs, and the temporary architecture of spectacle. This Ton-o-Lore subject maps people, places, events, and ideas tied to World's fairs & expositions so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "worlds-fairs-figures",
        "name": "World's fairs & expositions figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to World's fairs & expositions.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World's fairs & expositions."
    },
    {
        "slug": "worlds-fairs-world",
        "name": "World's fairs & expositions world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame World's fairs & expositions.",
        "description": "Geography, institutions, and periodization that give World's fairs & expositions its encyclopedia shape."
    },
    {
        "slug": "worlds-fairs-places",
        "name": "World's fairs & expositions places",
        "type": "place",
        "short_description": "Locations and geographies that frame World's fairs & expositions.",
        "description": "Places, regions, and built sites that give World's fairs & expositions its map — where events and figures concentrate."
    },
    {
        "slug": "worlds-fairs-events",
        "name": "World's fairs & expositions events",
        "type": "event",
        "short_description": "Turning points and dated episodes in World's fairs & expositions.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the World's fairs & expositions timeline."
    },
    {
        "slug": "worlds-fairs-objects",
        "name": "World's fairs & expositions objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World's fairs & expositions.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World's fairs & expositions."
    },
    {
        "slug": "worlds-fairs-factions",
        "name": "World's fairs & expositions factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World's fairs & expositions.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World's fairs & expositions."
    },
    {
        "slug": "worlds-fairs-concepts",
        "name": "World's fairs & expositions concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World's fairs & expositions.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World's fairs & expositions readable as a lore graph."
    },
    {
        "slug": "worlds-fairs-eras",
        "name": "World's fairs & expositions eras",
        "type": "event",
        "short_description": "Periodization for World's fairs & expositions.",
        "description": "Named eras and phases that help readers track how World's fairs & expositions changes across time."
    },
    {
        "slug": "worlds-fairs-works",
        "name": "World's fairs & expositions works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World's fairs & expositions.",
        "description": "Primary works and adaptations through which most audiences encounter World's fairs & expositions."
    },
    {
        "slug": "worlds-fairs-symbols",
        "name": "World's fairs & expositions symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World's fairs & expositions.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World's fairs & expositions."
    },
    {
        "slug": "worlds-fairs-controversies",
        "name": "World's fairs & expositions controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World's fairs & expositions.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World's fairs & expositions argumentative."
    },
    {
        "slug": "worlds-fairs-sources",
        "name": "World's fairs & expositions sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World's fairs & expositions.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World's fairs & expositions."
    },
    {
        "slug": "worlds-fairs-geography",
        "name": "World's fairs & expositions geography",
        "type": "place",
        "short_description": "Broader geographic framing for World's fairs & expositions.",
        "description": "Regions, routes, and spatial systems that situate World's fairs & expositions beyond single named places."
    },
    {
        "slug": "worlds-fairs-legacy",
        "name": "World's fairs & expositions legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of World's fairs & expositions.",
        "description": "How World's fairs & expositions continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "worlds-fairs",
        "worlds-fairs-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "worlds-fairs",
        "worlds-fairs-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "worlds-fairs",
        "worlds-fairs-places",
        "contains",
        "World's fairs & expositions places is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-events",
        "contains",
        "World's fairs & expositions events is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-objects",
        "contains",
        "World's fairs & expositions objects & artifacts is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-factions",
        "contains",
        "World's fairs & expositions factions & groups is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-concepts",
        "contains",
        "World's fairs & expositions concepts is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-eras",
        "contains",
        "World's fairs & expositions eras is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-works",
        "contains",
        "World's fairs & expositions works & media is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-symbols",
        "contains",
        "World's fairs & expositions symbols is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-controversies",
        "contains",
        "World's fairs & expositions controversies is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-sources",
        "contains",
        "World's fairs & expositions sources is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-geography",
        "contains",
        "World's fairs & expositions geography is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ],
    [
        "worlds-fairs",
        "worlds-fairs-legacy",
        "contains",
        "World's fairs & expositions legacy is a primary trailhead under World's fairs & expositions.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
