/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-matrix",
        "name": "The Matrix",
        "type": "topic",
        "short_description": "Simulation philosophy, Zion, Agents, and the late-90s cyber-myth that remade action SF.",
        "description": "Simulation philosophy, Zion, Agents, and the late-90s cyber-myth that remade action SF. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Matrix so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "the-matrix-figures",
        "name": "The Matrix figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Matrix.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Matrix."
    },
    {
        "slug": "the-matrix-world",
        "name": "The Matrix world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Matrix.",
        "description": "Geography, institutions, and periodization that give The Matrix its encyclopedia shape."
    },
    {
        "slug": "the-matrix-places",
        "name": "The Matrix places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Matrix.",
        "description": "Places, regions, and built sites that give The Matrix its map — where events and figures concentrate."
    },
    {
        "slug": "the-matrix-events",
        "name": "The Matrix events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Matrix.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Matrix timeline."
    },
    {
        "slug": "the-matrix-objects",
        "name": "The Matrix objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Matrix.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Matrix."
    },
    {
        "slug": "the-matrix-factions",
        "name": "The Matrix factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Matrix.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Matrix."
    },
    {
        "slug": "the-matrix-concepts",
        "name": "The Matrix concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Matrix.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Matrix readable as a lore graph."
    },
    {
        "slug": "the-matrix-eras",
        "name": "The Matrix eras",
        "type": "event",
        "short_description": "Periodization for The Matrix.",
        "description": "Named eras and phases that help readers track how The Matrix changes across time."
    },
    {
        "slug": "the-matrix-works",
        "name": "The Matrix works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Matrix.",
        "description": "Primary works and adaptations through which most audiences encounter The Matrix."
    },
    {
        "slug": "the-matrix-symbols",
        "name": "The Matrix symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Matrix.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Matrix."
    },
    {
        "slug": "the-matrix-controversies",
        "name": "The Matrix controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Matrix.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Matrix argumentative."
    },
    {
        "slug": "the-matrix-sources",
        "name": "The Matrix sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Matrix.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Matrix."
    },
    {
        "slug": "the-matrix-geography",
        "name": "The Matrix geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Matrix.",
        "description": "Regions, routes, and spatial systems that situate The Matrix beyond single named places."
    },
    {
        "slug": "the-matrix-legacy",
        "name": "The Matrix legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Matrix.",
        "description": "How The Matrix continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "the-matrix",
        "the-matrix-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-matrix",
        "the-matrix-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-matrix",
        "the-matrix-places",
        "contains",
        "The Matrix places is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-events",
        "contains",
        "The Matrix events is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-objects",
        "contains",
        "The Matrix objects & artifacts is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-factions",
        "contains",
        "The Matrix factions & groups is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-concepts",
        "contains",
        "The Matrix concepts is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-eras",
        "contains",
        "The Matrix eras is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-works",
        "contains",
        "The Matrix works & media is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-symbols",
        "contains",
        "The Matrix symbols is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-controversies",
        "contains",
        "The Matrix controversies is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-sources",
        "contains",
        "The Matrix sources is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-geography",
        "contains",
        "The Matrix geography is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ],
    [
        "the-matrix",
        "the-matrix-legacy",
        "contains",
        "The Matrix legacy is a primary trailhead under The Matrix.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
