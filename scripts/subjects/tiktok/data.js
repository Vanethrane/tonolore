/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tiktok",
        "name": "TikTok",
        "type": "topic",
        "short_description": "Short-form trends, sounds, creators, and the algorithmic folklore of the 2020s feed.",
        "description": "Short-form trends, sounds, creators, and the algorithmic folklore of the 2020s feed. This Ton-o-Lore subject maps people, places, events, and ideas tied to TikTok so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "tiktok-figures",
        "name": "TikTok figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to TikTok.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring TikTok."
    },
    {
        "slug": "tiktok-world",
        "name": "TikTok world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame TikTok.",
        "description": "Geography, institutions, and periodization that give TikTok its encyclopedia shape."
    },
    {
        "slug": "tiktok-places",
        "name": "TikTok places",
        "type": "place",
        "short_description": "Locations and geographies that frame TikTok.",
        "description": "Places, regions, and built sites that give TikTok its map — where events and figures concentrate."
    },
    {
        "slug": "tiktok-events",
        "name": "TikTok events",
        "type": "event",
        "short_description": "Turning points and dated episodes in TikTok.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the TikTok timeline."
    },
    {
        "slug": "tiktok-objects",
        "name": "TikTok objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to TikTok.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through TikTok."
    },
    {
        "slug": "tiktok-factions",
        "name": "TikTok factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside TikTok.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in TikTok."
    },
    {
        "slug": "tiktok-concepts",
        "name": "TikTok concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize TikTok.",
        "description": "Keywords, doctrines, systems, and abstract forces that make TikTok readable as a lore graph."
    },
    {
        "slug": "tiktok-eras",
        "name": "TikTok eras",
        "type": "event",
        "short_description": "Periodization for TikTok.",
        "description": "Named eras and phases that help readers track how TikTok changes across time."
    },
    {
        "slug": "tiktok-works",
        "name": "TikTok works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry TikTok.",
        "description": "Primary works and adaptations through which most audiences encounter TikTok."
    },
    {
        "slug": "tiktok-symbols",
        "name": "TikTok symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with TikTok.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside TikTok."
    },
    {
        "slug": "tiktok-controversies",
        "name": "TikTok controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in TikTok.",
        "description": "Debates, rival canons, scandals, and contested facts that keep TikTok argumentative."
    },
    {
        "slug": "tiktok-sources",
        "name": "TikTok sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into TikTok.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify TikTok."
    },
    {
        "slug": "tiktok-geography",
        "name": "TikTok geography",
        "type": "place",
        "short_description": "Broader geographic framing for TikTok.",
        "description": "Regions, routes, and spatial systems that situate TikTok beyond single named places."
    },
    {
        "slug": "tiktok-legacy",
        "name": "TikTok legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of TikTok.",
        "description": "How TikTok continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "tiktok",
        "tiktok-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tiktok",
        "tiktok-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tiktok",
        "tiktok-places",
        "contains",
        "TikTok places is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-events",
        "contains",
        "TikTok events is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-objects",
        "contains",
        "TikTok objects & artifacts is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-factions",
        "contains",
        "TikTok factions & groups is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-concepts",
        "contains",
        "TikTok concepts is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-eras",
        "contains",
        "TikTok eras is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-works",
        "contains",
        "TikTok works & media is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-symbols",
        "contains",
        "TikTok symbols is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-controversies",
        "contains",
        "TikTok controversies is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-sources",
        "contains",
        "TikTok sources is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-geography",
        "contains",
        "TikTok geography is a primary trailhead under TikTok.",
        0.88,
        0.82
    ],
    [
        "tiktok",
        "tiktok-legacy",
        "contains",
        "TikTok legacy is a primary trailhead under TikTok.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
