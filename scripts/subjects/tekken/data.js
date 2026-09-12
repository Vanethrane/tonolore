/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tekken",
        "name": "Tekken",
        "type": "topic",
        "short_description": "The King of Iron Fist Tournament — Mishima drama and 3D fighter mythology.",
        "description": "The King of Iron Fist Tournament — Mishima drama and 3D fighter mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tekken so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "tekken-figures",
        "name": "Tekken figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tekken.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tekken."
    },
    {
        "slug": "tekken-world",
        "name": "Tekken world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tekken.",
        "description": "Geography, institutions, and periodization that give Tekken its encyclopedia shape."
    },
    {
        "slug": "tekken-places",
        "name": "Tekken places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tekken.",
        "description": "Places, regions, and built sites that give Tekken its map — where events and figures concentrate."
    },
    {
        "slug": "tekken-events",
        "name": "Tekken events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tekken.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tekken timeline."
    },
    {
        "slug": "tekken-objects",
        "name": "Tekken objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tekken.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tekken."
    },
    {
        "slug": "tekken-factions",
        "name": "Tekken factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tekken.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tekken."
    },
    {
        "slug": "tekken-concepts",
        "name": "Tekken concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tekken.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tekken readable as a lore graph."
    },
    {
        "slug": "tekken-eras",
        "name": "Tekken eras",
        "type": "event",
        "short_description": "Periodization for Tekken.",
        "description": "Named eras and phases that help readers track how Tekken changes across time."
    },
    {
        "slug": "tekken-works",
        "name": "Tekken works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tekken.",
        "description": "Primary works and adaptations through which most audiences encounter Tekken."
    },
    {
        "slug": "tekken-symbols",
        "name": "Tekken symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tekken.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tekken."
    },
    {
        "slug": "tekken-controversies",
        "name": "Tekken controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tekken.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tekken argumentative."
    },
    {
        "slug": "tekken-sources",
        "name": "Tekken sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tekken.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tekken."
    },
    {
        "slug": "tekken-geography",
        "name": "Tekken geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tekken.",
        "description": "Regions, routes, and spatial systems that situate Tekken beyond single named places."
    },
    {
        "slug": "tekken-legacy",
        "name": "Tekken legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tekken.",
        "description": "How Tekken continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "tekken",
        "tekken-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tekken",
        "tekken-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tekken",
        "tekken-places",
        "contains",
        "Tekken places is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-events",
        "contains",
        "Tekken events is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-objects",
        "contains",
        "Tekken objects & artifacts is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-factions",
        "contains",
        "Tekken factions & groups is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-concepts",
        "contains",
        "Tekken concepts is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-eras",
        "contains",
        "Tekken eras is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-works",
        "contains",
        "Tekken works & media is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-symbols",
        "contains",
        "Tekken symbols is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-controversies",
        "contains",
        "Tekken controversies is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-sources",
        "contains",
        "Tekken sources is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-geography",
        "contains",
        "Tekken geography is a primary trailhead under Tekken.",
        0.88,
        0.82
    ],
    [
        "tekken",
        "tekken-legacy",
        "contains",
        "Tekken legacy is a primary trailhead under Tekken.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
