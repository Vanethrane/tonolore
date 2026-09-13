/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "motorcycle-history",
        "name": "Motorcycle history",
        "type": "topic",
        "short_description": "Makes, racers, clubs, innovations, and the two-wheel culture that paralleled the automobile age.",
        "description": "Makes, racers, clubs, innovations, and the two-wheel culture that paralleled the automobile age. This Ton-o-Lore subject maps people, places, events, and ideas tied to Motorcycle history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "motorcycle-history-figures",
        "name": "Motorcycle history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Motorcycle history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Motorcycle history."
    },
    {
        "slug": "motorcycle-history-world",
        "name": "Motorcycle history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Motorcycle history.",
        "description": "Geography, institutions, and periodization that give Motorcycle history its encyclopedia shape."
    },
    {
        "slug": "motorcycle-history-places",
        "name": "Motorcycle history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Motorcycle history.",
        "description": "Places, regions, and built sites that give Motorcycle history its map — where events and figures concentrate."
    },
    {
        "slug": "motorcycle-history-events",
        "name": "Motorcycle history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Motorcycle history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Motorcycle history timeline."
    },
    {
        "slug": "motorcycle-history-objects",
        "name": "Motorcycle history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Motorcycle history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Motorcycle history."
    },
    {
        "slug": "motorcycle-history-factions",
        "name": "Motorcycle history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Motorcycle history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Motorcycle history."
    },
    {
        "slug": "motorcycle-history-concepts",
        "name": "Motorcycle history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Motorcycle history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Motorcycle history readable as a lore graph."
    },
    {
        "slug": "motorcycle-history-eras",
        "name": "Motorcycle history eras",
        "type": "event",
        "short_description": "Periodization for Motorcycle history.",
        "description": "Named eras and phases that help readers track how Motorcycle history changes across time."
    },
    {
        "slug": "motorcycle-history-works",
        "name": "Motorcycle history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Motorcycle history.",
        "description": "Primary works and adaptations through which most audiences encounter Motorcycle history."
    },
    {
        "slug": "motorcycle-history-symbols",
        "name": "Motorcycle history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Motorcycle history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Motorcycle history."
    },
    {
        "slug": "motorcycle-history-controversies",
        "name": "Motorcycle history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Motorcycle history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Motorcycle history argumentative."
    },
    {
        "slug": "motorcycle-history-sources",
        "name": "Motorcycle history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Motorcycle history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Motorcycle history."
    },
    {
        "slug": "motorcycle-history-geography",
        "name": "Motorcycle history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Motorcycle history.",
        "description": "Regions, routes, and spatial systems that situate Motorcycle history beyond single named places."
    },
    {
        "slug": "motorcycle-history-legacy",
        "name": "Motorcycle history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Motorcycle history.",
        "description": "How Motorcycle history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "motorcycle-history",
        "motorcycle-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "motorcycle-history",
        "motorcycle-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "motorcycle-history",
        "motorcycle-history-places",
        "contains",
        "Motorcycle history places is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-events",
        "contains",
        "Motorcycle history events is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-objects",
        "contains",
        "Motorcycle history objects & artifacts is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-factions",
        "contains",
        "Motorcycle history factions & groups is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-concepts",
        "contains",
        "Motorcycle history concepts is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-eras",
        "contains",
        "Motorcycle history eras is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-works",
        "contains",
        "Motorcycle history works & media is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-symbols",
        "contains",
        "Motorcycle history symbols is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-controversies",
        "contains",
        "Motorcycle history controversies is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-sources",
        "contains",
        "Motorcycle history sources is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-geography",
        "contains",
        "Motorcycle history geography is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ],
    [
        "motorcycle-history",
        "motorcycle-history-legacy",
        "contains",
        "Motorcycle history legacy is a primary trailhead under Motorcycle history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
