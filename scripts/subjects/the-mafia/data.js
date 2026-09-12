/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-mafia",
        "name": "The Mafia",
        "type": "topic",
        "short_description": "Families, bosses, murders, betrayals, cities, rackets, informants, and trials.",
        "description": "Families, bosses, murders, betrayals, cities, rackets, informants, and trials. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Mafia so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "the-mafia-figures",
        "name": "The Mafia figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Mafia.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Mafia."
    },
    {
        "slug": "the-mafia-world",
        "name": "The Mafia world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Mafia.",
        "description": "Geography, institutions, and periodization that give The Mafia its encyclopedia shape."
    },
    {
        "slug": "the-mafia-places",
        "name": "The Mafia places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Mafia.",
        "description": "Places, regions, and built sites that give The Mafia its map — where events and figures concentrate."
    },
    {
        "slug": "the-mafia-events",
        "name": "The Mafia events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Mafia.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Mafia timeline."
    },
    {
        "slug": "the-mafia-objects",
        "name": "The Mafia objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Mafia.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Mafia."
    },
    {
        "slug": "the-mafia-factions",
        "name": "The Mafia factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Mafia.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Mafia."
    },
    {
        "slug": "the-mafia-concepts",
        "name": "The Mafia concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Mafia.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Mafia readable as a lore graph."
    },
    {
        "slug": "the-mafia-eras",
        "name": "The Mafia eras",
        "type": "event",
        "short_description": "Periodization for The Mafia.",
        "description": "Named eras and phases that help readers track how The Mafia changes across time."
    },
    {
        "slug": "the-mafia-works",
        "name": "The Mafia works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Mafia.",
        "description": "Primary works and adaptations through which most audiences encounter The Mafia."
    },
    {
        "slug": "the-mafia-symbols",
        "name": "The Mafia symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Mafia.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Mafia."
    },
    {
        "slug": "the-mafia-controversies",
        "name": "The Mafia controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Mafia.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Mafia argumentative."
    },
    {
        "slug": "the-mafia-sources",
        "name": "The Mafia sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Mafia.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Mafia."
    },
    {
        "slug": "the-mafia-geography",
        "name": "The Mafia geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Mafia.",
        "description": "Regions, routes, and spatial systems that situate The Mafia beyond single named places."
    },
    {
        "slug": "the-mafia-legacy",
        "name": "The Mafia legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Mafia.",
        "description": "How The Mafia continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "the-mafia",
        "the-mafia-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-mafia",
        "the-mafia-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-mafia",
        "the-mafia-places",
        "contains",
        "The Mafia places is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-events",
        "contains",
        "The Mafia events is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-objects",
        "contains",
        "The Mafia objects & artifacts is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-factions",
        "contains",
        "The Mafia factions & groups is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-concepts",
        "contains",
        "The Mafia concepts is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-eras",
        "contains",
        "The Mafia eras is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-works",
        "contains",
        "The Mafia works & media is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-symbols",
        "contains",
        "The Mafia symbols is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-controversies",
        "contains",
        "The Mafia controversies is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-sources",
        "contains",
        "The Mafia sources is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-geography",
        "contains",
        "The Mafia geography is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ],
    [
        "the-mafia",
        "the-mafia-legacy",
        "contains",
        "The Mafia legacy is a primary trailhead under The Mafia.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
