/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "conspiracy-theories",
        "name": "Conspiracy theories",
        "type": "topic",
        "short_description": "JFK, moon-landing claims, secret societies, alleged programs, and the connection graphs believers map.",
        "description": "JFK, moon-landing claims, secret societies, alleged programs, and the connection graphs believers map. This Ton-o-Lore subject maps people, places, events, and ideas tied to Conspiracy theories so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "conspiracy-theories-figures",
        "name": "Conspiracy theories figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Conspiracy theories.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Conspiracy theories."
    },
    {
        "slug": "conspiracy-theories-world",
        "name": "Conspiracy theories world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Conspiracy theories.",
        "description": "Geography, institutions, and periodization that give Conspiracy theories its encyclopedia shape."
    },
    {
        "slug": "conspiracy-theories-places",
        "name": "Conspiracy theories places",
        "type": "place",
        "short_description": "Locations and geographies that frame Conspiracy theories.",
        "description": "Places, regions, and built sites that give Conspiracy theories its map — where events and figures concentrate."
    },
    {
        "slug": "conspiracy-theories-events",
        "name": "Conspiracy theories events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Conspiracy theories.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Conspiracy theories timeline."
    },
    {
        "slug": "conspiracy-theories-objects",
        "name": "Conspiracy theories objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Conspiracy theories.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Conspiracy theories."
    },
    {
        "slug": "conspiracy-theories-factions",
        "name": "Conspiracy theories factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Conspiracy theories.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Conspiracy theories."
    },
    {
        "slug": "conspiracy-theories-concepts",
        "name": "Conspiracy theories concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Conspiracy theories.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Conspiracy theories readable as a lore graph."
    },
    {
        "slug": "conspiracy-theories-eras",
        "name": "Conspiracy theories eras",
        "type": "event",
        "short_description": "Periodization for Conspiracy theories.",
        "description": "Named eras and phases that help readers track how Conspiracy theories changes across time."
    },
    {
        "slug": "conspiracy-theories-works",
        "name": "Conspiracy theories works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Conspiracy theories.",
        "description": "Primary works and adaptations through which most audiences encounter Conspiracy theories."
    },
    {
        "slug": "conspiracy-theories-symbols",
        "name": "Conspiracy theories symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Conspiracy theories.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Conspiracy theories."
    },
    {
        "slug": "conspiracy-theories-controversies",
        "name": "Conspiracy theories controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Conspiracy theories.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Conspiracy theories argumentative."
    },
    {
        "slug": "conspiracy-theories-sources",
        "name": "Conspiracy theories sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Conspiracy theories.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Conspiracy theories."
    },
    {
        "slug": "conspiracy-theories-geography",
        "name": "Conspiracy theories geography",
        "type": "place",
        "short_description": "Broader geographic framing for Conspiracy theories.",
        "description": "Regions, routes, and spatial systems that situate Conspiracy theories beyond single named places."
    },
    {
        "slug": "conspiracy-theories-legacy",
        "name": "Conspiracy theories legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Conspiracy theories.",
        "description": "How Conspiracy theories continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "conspiracy-theories",
        "conspiracy-theories-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-places",
        "contains",
        "Conspiracy theories places is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-events",
        "contains",
        "Conspiracy theories events is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-objects",
        "contains",
        "Conspiracy theories objects & artifacts is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-factions",
        "contains",
        "Conspiracy theories factions & groups is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-concepts",
        "contains",
        "Conspiracy theories concepts is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-eras",
        "contains",
        "Conspiracy theories eras is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-works",
        "contains",
        "Conspiracy theories works & media is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-symbols",
        "contains",
        "Conspiracy theories symbols is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-controversies",
        "contains",
        "Conspiracy theories controversies is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-sources",
        "contains",
        "Conspiracy theories sources is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-geography",
        "contains",
        "Conspiracy theories geography is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ],
    [
        "conspiracy-theories",
        "conspiracy-theories-legacy",
        "contains",
        "Conspiracy theories legacy is a primary trailhead under Conspiracy theories.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
