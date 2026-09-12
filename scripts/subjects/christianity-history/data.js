/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "christianity-history",
        "name": "Christianity history",
        "type": "topic",
        "short_description": "Apostles, councils, denominations, saints, and the institutional spread of Christian tradition.",
        "description": "Apostles, councils, denominations, saints, and the institutional spread of Christian tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Christianity history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "christianity-history-figures",
        "name": "Christianity history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Christianity history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Christianity history."
    },
    {
        "slug": "christianity-history-world",
        "name": "Christianity history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Christianity history.",
        "description": "Geography, institutions, and periodization that give Christianity history its encyclopedia shape."
    },
    {
        "slug": "christianity-history-places",
        "name": "Christianity history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Christianity history.",
        "description": "Places, regions, and built sites that give Christianity history its map — where events and figures concentrate."
    },
    {
        "slug": "christianity-history-events",
        "name": "Christianity history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Christianity history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Christianity history timeline."
    },
    {
        "slug": "christianity-history-objects",
        "name": "Christianity history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Christianity history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Christianity history."
    },
    {
        "slug": "christianity-history-factions",
        "name": "Christianity history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Christianity history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Christianity history."
    },
    {
        "slug": "christianity-history-concepts",
        "name": "Christianity history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Christianity history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Christianity history readable as a lore graph."
    },
    {
        "slug": "christianity-history-eras",
        "name": "Christianity history eras",
        "type": "event",
        "short_description": "Periodization for Christianity history.",
        "description": "Named eras and phases that help readers track how Christianity history changes across time."
    },
    {
        "slug": "christianity-history-works",
        "name": "Christianity history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Christianity history.",
        "description": "Primary works and adaptations through which most audiences encounter Christianity history."
    },
    {
        "slug": "christianity-history-symbols",
        "name": "Christianity history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Christianity history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Christianity history."
    },
    {
        "slug": "christianity-history-controversies",
        "name": "Christianity history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Christianity history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Christianity history argumentative."
    },
    {
        "slug": "christianity-history-sources",
        "name": "Christianity history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Christianity history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Christianity history."
    },
    {
        "slug": "christianity-history-geography",
        "name": "Christianity history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Christianity history.",
        "description": "Regions, routes, and spatial systems that situate Christianity history beyond single named places."
    },
    {
        "slug": "christianity-history-legacy",
        "name": "Christianity history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Christianity history.",
        "description": "How Christianity history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "christianity-history",
        "christianity-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "christianity-history",
        "christianity-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "christianity-history",
        "christianity-history-places",
        "contains",
        "Christianity history places is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-events",
        "contains",
        "Christianity history events is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-objects",
        "contains",
        "Christianity history objects & artifacts is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-factions",
        "contains",
        "Christianity history factions & groups is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-concepts",
        "contains",
        "Christianity history concepts is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-eras",
        "contains",
        "Christianity history eras is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-works",
        "contains",
        "Christianity history works & media is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-symbols",
        "contains",
        "Christianity history symbols is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-controversies",
        "contains",
        "Christianity history controversies is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-sources",
        "contains",
        "Christianity history sources is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-geography",
        "contains",
        "Christianity history geography is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ],
    [
        "christianity-history",
        "christianity-history-legacy",
        "contains",
        "Christianity history legacy is a primary trailhead under Christianity history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
