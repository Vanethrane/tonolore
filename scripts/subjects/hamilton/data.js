/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hamilton",
        "name": "Hamilton",
        "type": "topic",
        "short_description": "The hip-hop history musical that remixed Founding-era biography for the stage.",
        "description": "The hip-hop history musical that remixed Founding-era biography for the stage. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hamilton so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "hamilton-figures",
        "name": "Hamilton figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hamilton.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hamilton."
    },
    {
        "slug": "hamilton-world",
        "name": "Hamilton world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hamilton.",
        "description": "Geography, institutions, and periodization that give Hamilton its encyclopedia shape."
    },
    {
        "slug": "hamilton-places",
        "name": "Hamilton places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hamilton.",
        "description": "Places, regions, and built sites that give Hamilton its map — where events and figures concentrate."
    },
    {
        "slug": "hamilton-events",
        "name": "Hamilton events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hamilton.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hamilton timeline."
    },
    {
        "slug": "hamilton-objects",
        "name": "Hamilton objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hamilton.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hamilton."
    },
    {
        "slug": "hamilton-factions",
        "name": "Hamilton factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hamilton.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hamilton."
    },
    {
        "slug": "hamilton-concepts",
        "name": "Hamilton concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hamilton.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hamilton readable as a lore graph."
    },
    {
        "slug": "hamilton-eras",
        "name": "Hamilton eras",
        "type": "event",
        "short_description": "Periodization for Hamilton.",
        "description": "Named eras and phases that help readers track how Hamilton changes across time."
    },
    {
        "slug": "hamilton-works",
        "name": "Hamilton works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hamilton.",
        "description": "Primary works and adaptations through which most audiences encounter Hamilton."
    },
    {
        "slug": "hamilton-symbols",
        "name": "Hamilton symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hamilton.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hamilton."
    },
    {
        "slug": "hamilton-controversies",
        "name": "Hamilton controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hamilton.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hamilton argumentative."
    },
    {
        "slug": "hamilton-sources",
        "name": "Hamilton sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hamilton.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hamilton."
    },
    {
        "slug": "hamilton-geography",
        "name": "Hamilton geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hamilton.",
        "description": "Regions, routes, and spatial systems that situate Hamilton beyond single named places."
    },
    {
        "slug": "hamilton-legacy",
        "name": "Hamilton legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hamilton.",
        "description": "How Hamilton continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "hamilton",
        "hamilton-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hamilton",
        "hamilton-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hamilton",
        "hamilton-places",
        "contains",
        "Hamilton places is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-events",
        "contains",
        "Hamilton events is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-objects",
        "contains",
        "Hamilton objects & artifacts is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-factions",
        "contains",
        "Hamilton factions & groups is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-concepts",
        "contains",
        "Hamilton concepts is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-eras",
        "contains",
        "Hamilton eras is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-works",
        "contains",
        "Hamilton works & media is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-symbols",
        "contains",
        "Hamilton symbols is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-controversies",
        "contains",
        "Hamilton controversies is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-sources",
        "contains",
        "Hamilton sources is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-geography",
        "contains",
        "Hamilton geography is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ],
    [
        "hamilton",
        "hamilton-legacy",
        "contains",
        "Hamilton legacy is a primary trailhead under Hamilton.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
