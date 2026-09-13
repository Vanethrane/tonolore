/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bridges-engineering",
        "name": "Bridges & civil engineering",
        "type": "topic",
        "short_description": "Spans, engineers, failures, rebuilds, and the crossings that reorganized cities and trade.",
        "description": "Spans, engineers, failures, rebuilds, and the crossings that reorganized cities and trade. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bridges & civil engineering so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "bridges-engineering-figures",
        "name": "Bridges & civil engineering figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bridges & civil engineering.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bridges & civil engineering."
    },
    {
        "slug": "bridges-engineering-world",
        "name": "Bridges & civil engineering world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bridges & civil engineering.",
        "description": "Geography, institutions, and periodization that give Bridges & civil engineering its encyclopedia shape."
    },
    {
        "slug": "bridges-engineering-places",
        "name": "Bridges & civil engineering places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bridges & civil engineering.",
        "description": "Places, regions, and built sites that give Bridges & civil engineering its map — where events and figures concentrate."
    },
    {
        "slug": "bridges-engineering-events",
        "name": "Bridges & civil engineering events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bridges & civil engineering.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bridges & civil engineering timeline."
    },
    {
        "slug": "bridges-engineering-objects",
        "name": "Bridges & civil engineering objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bridges & civil engineering.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bridges & civil engineering."
    },
    {
        "slug": "bridges-engineering-factions",
        "name": "Bridges & civil engineering factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bridges & civil engineering.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bridges & civil engineering."
    },
    {
        "slug": "bridges-engineering-concepts",
        "name": "Bridges & civil engineering concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bridges & civil engineering.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bridges & civil engineering readable as a lore graph."
    },
    {
        "slug": "bridges-engineering-eras",
        "name": "Bridges & civil engineering eras",
        "type": "event",
        "short_description": "Periodization for Bridges & civil engineering.",
        "description": "Named eras and phases that help readers track how Bridges & civil engineering changes across time."
    },
    {
        "slug": "bridges-engineering-works",
        "name": "Bridges & civil engineering works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bridges & civil engineering.",
        "description": "Primary works and adaptations through which most audiences encounter Bridges & civil engineering."
    },
    {
        "slug": "bridges-engineering-symbols",
        "name": "Bridges & civil engineering symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bridges & civil engineering.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bridges & civil engineering."
    },
    {
        "slug": "bridges-engineering-controversies",
        "name": "Bridges & civil engineering controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bridges & civil engineering.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bridges & civil engineering argumentative."
    },
    {
        "slug": "bridges-engineering-sources",
        "name": "Bridges & civil engineering sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bridges & civil engineering.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bridges & civil engineering."
    },
    {
        "slug": "bridges-engineering-geography",
        "name": "Bridges & civil engineering geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bridges & civil engineering.",
        "description": "Regions, routes, and spatial systems that situate Bridges & civil engineering beyond single named places."
    },
    {
        "slug": "bridges-engineering-legacy",
        "name": "Bridges & civil engineering legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bridges & civil engineering.",
        "description": "How Bridges & civil engineering continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "bridges-engineering",
        "bridges-engineering-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bridges-engineering",
        "bridges-engineering-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bridges-engineering",
        "bridges-engineering-places",
        "contains",
        "Bridges & civil engineering places is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-events",
        "contains",
        "Bridges & civil engineering events is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-objects",
        "contains",
        "Bridges & civil engineering objects & artifacts is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-factions",
        "contains",
        "Bridges & civil engineering factions & groups is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-concepts",
        "contains",
        "Bridges & civil engineering concepts is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-eras",
        "contains",
        "Bridges & civil engineering eras is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-works",
        "contains",
        "Bridges & civil engineering works & media is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-symbols",
        "contains",
        "Bridges & civil engineering symbols is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-controversies",
        "contains",
        "Bridges & civil engineering controversies is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-sources",
        "contains",
        "Bridges & civil engineering sources is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-geography",
        "contains",
        "Bridges & civil engineering geography is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ],
    [
        "bridges-engineering",
        "bridges-engineering-legacy",
        "contains",
        "Bridges & civil engineering legacy is a primary trailhead under Bridges & civil engineering.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
