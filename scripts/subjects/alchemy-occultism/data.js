/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "alchemy-occultism",
        "name": "Alchemy & occultism",
        "type": "topic",
        "short_description": "Practitioners, texts, symbols, laboratories, and the hermetic lineages that blur science and magic.",
        "description": "Practitioners, texts, symbols, laboratories, and the hermetic lineages that blur science and magic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Alchemy & occultism so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "alchemy-occultism-figures",
        "name": "Alchemy & occultism figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Alchemy & occultism.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Alchemy & occultism."
    },
    {
        "slug": "alchemy-occultism-world",
        "name": "Alchemy & occultism world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Alchemy & occultism.",
        "description": "Geography, institutions, and periodization that give Alchemy & occultism its encyclopedia shape."
    },
    {
        "slug": "alchemy-occultism-places",
        "name": "Alchemy & occultism places",
        "type": "place",
        "short_description": "Locations and geographies that frame Alchemy & occultism.",
        "description": "Places, regions, and built sites that give Alchemy & occultism its map — where events and figures concentrate."
    },
    {
        "slug": "alchemy-occultism-events",
        "name": "Alchemy & occultism events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Alchemy & occultism.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Alchemy & occultism timeline."
    },
    {
        "slug": "alchemy-occultism-objects",
        "name": "Alchemy & occultism objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Alchemy & occultism.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Alchemy & occultism."
    },
    {
        "slug": "alchemy-occultism-factions",
        "name": "Alchemy & occultism factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Alchemy & occultism.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Alchemy & occultism."
    },
    {
        "slug": "alchemy-occultism-concepts",
        "name": "Alchemy & occultism concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Alchemy & occultism.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Alchemy & occultism readable as a lore graph."
    },
    {
        "slug": "alchemy-occultism-eras",
        "name": "Alchemy & occultism eras",
        "type": "event",
        "short_description": "Periodization for Alchemy & occultism.",
        "description": "Named eras and phases that help readers track how Alchemy & occultism changes across time."
    },
    {
        "slug": "alchemy-occultism-works",
        "name": "Alchemy & occultism works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Alchemy & occultism.",
        "description": "Primary works and adaptations through which most audiences encounter Alchemy & occultism."
    },
    {
        "slug": "alchemy-occultism-symbols",
        "name": "Alchemy & occultism symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Alchemy & occultism.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Alchemy & occultism."
    },
    {
        "slug": "alchemy-occultism-controversies",
        "name": "Alchemy & occultism controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Alchemy & occultism.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Alchemy & occultism argumentative."
    },
    {
        "slug": "alchemy-occultism-sources",
        "name": "Alchemy & occultism sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Alchemy & occultism.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Alchemy & occultism."
    },
    {
        "slug": "alchemy-occultism-geography",
        "name": "Alchemy & occultism geography",
        "type": "place",
        "short_description": "Broader geographic framing for Alchemy & occultism.",
        "description": "Regions, routes, and spatial systems that situate Alchemy & occultism beyond single named places."
    },
    {
        "slug": "alchemy-occultism-legacy",
        "name": "Alchemy & occultism legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Alchemy & occultism.",
        "description": "How Alchemy & occultism continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "alchemy-occultism",
        "alchemy-occultism-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-places",
        "contains",
        "Alchemy & occultism places is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-events",
        "contains",
        "Alchemy & occultism events is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-objects",
        "contains",
        "Alchemy & occultism objects & artifacts is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-factions",
        "contains",
        "Alchemy & occultism factions & groups is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-concepts",
        "contains",
        "Alchemy & occultism concepts is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-eras",
        "contains",
        "Alchemy & occultism eras is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-works",
        "contains",
        "Alchemy & occultism works & media is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-symbols",
        "contains",
        "Alchemy & occultism symbols is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-controversies",
        "contains",
        "Alchemy & occultism controversies is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-sources",
        "contains",
        "Alchemy & occultism sources is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-geography",
        "contains",
        "Alchemy & occultism geography is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ],
    [
        "alchemy-occultism",
        "alchemy-occultism-legacy",
        "contains",
        "Alchemy & occultism legacy is a primary trailhead under Alchemy & occultism.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
