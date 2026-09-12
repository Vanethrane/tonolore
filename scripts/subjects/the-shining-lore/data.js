/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-shining-lore",
        "name": "The Shining",
        "type": "topic",
        "short_description": "Overlook Hotel, Torrance family, and adaptation variants of King's haunted isolation myth.",
        "description": "Overlook Hotel, Torrance family, and adaptation variants of King's haunted isolation myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Shining so readers can follow long-tail connections across horror."
    },
    {
        "slug": "the-shining-lore-figures",
        "name": "The Shining figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Shining.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Shining."
    },
    {
        "slug": "the-shining-lore-world",
        "name": "The Shining world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Shining.",
        "description": "Geography, institutions, and periodization that give The Shining its encyclopedia shape."
    },
    {
        "slug": "the-shining-lore-places",
        "name": "The Shining places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Shining.",
        "description": "Places, regions, and built sites that give The Shining its map — where events and figures concentrate."
    },
    {
        "slug": "the-shining-lore-events",
        "name": "The Shining events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Shining.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Shining timeline."
    },
    {
        "slug": "the-shining-lore-objects",
        "name": "The Shining objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Shining.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Shining."
    },
    {
        "slug": "the-shining-lore-factions",
        "name": "The Shining factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Shining.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Shining."
    },
    {
        "slug": "the-shining-lore-concepts",
        "name": "The Shining concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Shining.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Shining readable as a lore graph."
    },
    {
        "slug": "the-shining-lore-eras",
        "name": "The Shining eras",
        "type": "event",
        "short_description": "Periodization for The Shining.",
        "description": "Named eras and phases that help readers track how The Shining changes across time."
    },
    {
        "slug": "the-shining-lore-works",
        "name": "The Shining works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Shining.",
        "description": "Primary works and adaptations through which most audiences encounter The Shining."
    },
    {
        "slug": "the-shining-lore-symbols",
        "name": "The Shining symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Shining.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Shining."
    },
    {
        "slug": "the-shining-lore-controversies",
        "name": "The Shining controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Shining.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Shining argumentative."
    },
    {
        "slug": "the-shining-lore-sources",
        "name": "The Shining sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Shining.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Shining."
    },
    {
        "slug": "the-shining-lore-geography",
        "name": "The Shining geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Shining.",
        "description": "Regions, routes, and spatial systems that situate The Shining beyond single named places."
    },
    {
        "slug": "the-shining-lore-legacy",
        "name": "The Shining legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Shining.",
        "description": "How The Shining continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "the-shining-lore",
        "the-shining-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-shining-lore",
        "the-shining-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-shining-lore",
        "the-shining-lore-places",
        "contains",
        "The Shining places is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-events",
        "contains",
        "The Shining events is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-objects",
        "contains",
        "The Shining objects & artifacts is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-factions",
        "contains",
        "The Shining factions & groups is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-concepts",
        "contains",
        "The Shining concepts is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-eras",
        "contains",
        "The Shining eras is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-works",
        "contains",
        "The Shining works & media is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-symbols",
        "contains",
        "The Shining symbols is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-controversies",
        "contains",
        "The Shining controversies is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-sources",
        "contains",
        "The Shining sources is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-geography",
        "contains",
        "The Shining geography is a primary trailhead under The Shining.",
        0.88,
        0.82
    ],
    [
        "the-shining-lore",
        "the-shining-lore-legacy",
        "contains",
        "The Shining legacy is a primary trailhead under The Shining.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
