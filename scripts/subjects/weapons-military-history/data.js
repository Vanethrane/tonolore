/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "weapons-military-history",
        "name": "Weapons & military history",
        "type": "topic",
        "short_description": "Famous weapons, inventors, wars, units, battles, and the technological chains between them.",
        "description": "Famous weapons, inventors, wars, units, battles, and the technological chains between them. This Ton-o-Lore subject maps people, places, events, and ideas tied to Weapons & military history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "weapons-military-history-figures",
        "name": "Weapons & military history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Weapons & military history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Weapons & military history."
    },
    {
        "slug": "weapons-military-history-world",
        "name": "Weapons & military history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Weapons & military history.",
        "description": "Geography, institutions, and periodization that give Weapons & military history its encyclopedia shape."
    },
    {
        "slug": "weapons-military-history-places",
        "name": "Weapons & military history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Weapons & military history.",
        "description": "Places, regions, and built sites that give Weapons & military history its map — where events and figures concentrate."
    },
    {
        "slug": "weapons-military-history-events",
        "name": "Weapons & military history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Weapons & military history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Weapons & military history timeline."
    },
    {
        "slug": "weapons-military-history-objects",
        "name": "Weapons & military history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Weapons & military history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Weapons & military history."
    },
    {
        "slug": "weapons-military-history-factions",
        "name": "Weapons & military history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Weapons & military history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Weapons & military history."
    },
    {
        "slug": "weapons-military-history-concepts",
        "name": "Weapons & military history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Weapons & military history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Weapons & military history readable as a lore graph."
    },
    {
        "slug": "weapons-military-history-eras",
        "name": "Weapons & military history eras",
        "type": "event",
        "short_description": "Periodization for Weapons & military history.",
        "description": "Named eras and phases that help readers track how Weapons & military history changes across time."
    },
    {
        "slug": "weapons-military-history-works",
        "name": "Weapons & military history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Weapons & military history.",
        "description": "Primary works and adaptations through which most audiences encounter Weapons & military history."
    },
    {
        "slug": "weapons-military-history-symbols",
        "name": "Weapons & military history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Weapons & military history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Weapons & military history."
    },
    {
        "slug": "weapons-military-history-controversies",
        "name": "Weapons & military history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Weapons & military history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Weapons & military history argumentative."
    },
    {
        "slug": "weapons-military-history-sources",
        "name": "Weapons & military history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Weapons & military history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Weapons & military history."
    },
    {
        "slug": "weapons-military-history-geography",
        "name": "Weapons & military history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Weapons & military history.",
        "description": "Regions, routes, and spatial systems that situate Weapons & military history beyond single named places."
    },
    {
        "slug": "weapons-military-history-legacy",
        "name": "Weapons & military history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Weapons & military history.",
        "description": "How Weapons & military history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "weapons-military-history",
        "weapons-military-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "weapons-military-history",
        "weapons-military-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "weapons-military-history",
        "weapons-military-history-places",
        "contains",
        "Weapons & military history places is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-events",
        "contains",
        "Weapons & military history events is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-objects",
        "contains",
        "Weapons & military history objects & artifacts is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-factions",
        "contains",
        "Weapons & military history factions & groups is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-concepts",
        "contains",
        "Weapons & military history concepts is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-eras",
        "contains",
        "Weapons & military history eras is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-works",
        "contains",
        "Weapons & military history works & media is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-symbols",
        "contains",
        "Weapons & military history symbols is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-controversies",
        "contains",
        "Weapons & military history controversies is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-sources",
        "contains",
        "Weapons & military history sources is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-geography",
        "contains",
        "Weapons & military history geography is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ],
    [
        "weapons-military-history",
        "weapons-military-history-legacy",
        "contains",
        "Weapons & military history legacy is a primary trailhead under Weapons & military history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
