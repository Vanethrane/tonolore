/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "adventure-time",
        "name": "Adventure Time",
        "type": "topic",
        "short_description": "Ooo's post-apocalyptic candy kingdoms and emotional lore across a sprawling series.",
        "description": "Ooo's post-apocalyptic candy kingdoms and emotional lore across a sprawling series. This Ton-o-Lore subject maps people, places, events, and ideas tied to Adventure Time so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "adventure-time-figures",
        "name": "Adventure Time figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Adventure Time.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Adventure Time."
    },
    {
        "slug": "adventure-time-world",
        "name": "Adventure Time world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Adventure Time.",
        "description": "Geography, institutions, and periodization that give Adventure Time its encyclopedia shape."
    },
    {
        "slug": "adventure-time-places",
        "name": "Adventure Time places",
        "type": "place",
        "short_description": "Locations and geographies that frame Adventure Time.",
        "description": "Places, regions, and built sites that give Adventure Time its map — where events and figures concentrate."
    },
    {
        "slug": "adventure-time-events",
        "name": "Adventure Time events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Adventure Time.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Adventure Time timeline."
    },
    {
        "slug": "adventure-time-objects",
        "name": "Adventure Time objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Adventure Time.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Adventure Time."
    },
    {
        "slug": "adventure-time-factions",
        "name": "Adventure Time factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Adventure Time.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Adventure Time."
    },
    {
        "slug": "adventure-time-concepts",
        "name": "Adventure Time concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Adventure Time.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Adventure Time readable as a lore graph."
    },
    {
        "slug": "adventure-time-eras",
        "name": "Adventure Time eras",
        "type": "event",
        "short_description": "Periodization for Adventure Time.",
        "description": "Named eras and phases that help readers track how Adventure Time changes across time."
    },
    {
        "slug": "adventure-time-works",
        "name": "Adventure Time works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Adventure Time.",
        "description": "Primary works and adaptations through which most audiences encounter Adventure Time."
    },
    {
        "slug": "adventure-time-symbols",
        "name": "Adventure Time symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Adventure Time.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Adventure Time."
    },
    {
        "slug": "adventure-time-controversies",
        "name": "Adventure Time controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Adventure Time.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Adventure Time argumentative."
    },
    {
        "slug": "adventure-time-sources",
        "name": "Adventure Time sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Adventure Time.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Adventure Time."
    },
    {
        "slug": "adventure-time-geography",
        "name": "Adventure Time geography",
        "type": "place",
        "short_description": "Broader geographic framing for Adventure Time.",
        "description": "Regions, routes, and spatial systems that situate Adventure Time beyond single named places."
    },
    {
        "slug": "adventure-time-legacy",
        "name": "Adventure Time legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Adventure Time.",
        "description": "How Adventure Time continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "adventure-time",
        "adventure-time-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "adventure-time",
        "adventure-time-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "adventure-time",
        "adventure-time-places",
        "contains",
        "Adventure Time places is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-events",
        "contains",
        "Adventure Time events is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-objects",
        "contains",
        "Adventure Time objects & artifacts is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-factions",
        "contains",
        "Adventure Time factions & groups is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-concepts",
        "contains",
        "Adventure Time concepts is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-eras",
        "contains",
        "Adventure Time eras is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-works",
        "contains",
        "Adventure Time works & media is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-symbols",
        "contains",
        "Adventure Time symbols is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-controversies",
        "contains",
        "Adventure Time controversies is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-sources",
        "contains",
        "Adventure Time sources is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-geography",
        "contains",
        "Adventure Time geography is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ],
    [
        "adventure-time",
        "adventure-time-legacy",
        "contains",
        "Adventure Time legacy is a primary trailhead under Adventure Time.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
