/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "medieval-europe",
        "name": "Medieval Europe",
        "type": "topic",
        "short_description": "Kings, dynasties, castles, knights, faiths, plagues, and succession struggles across the Middle Ages.",
        "description": "Kings, dynasties, castles, knights, faiths, plagues, and succession struggles across the Middle Ages. This Ton-o-Lore subject maps people, places, events, and ideas tied to Medieval Europe so readers can follow long-tail connections across history."
    },
    {
        "slug": "medieval-europe-figures",
        "name": "Medieval Europe figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Medieval Europe.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Medieval Europe."
    },
    {
        "slug": "medieval-europe-world",
        "name": "Medieval Europe world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Medieval Europe.",
        "description": "Geography, institutions, and periodization that give Medieval Europe its encyclopedia shape."
    },
    {
        "slug": "medieval-europe-places",
        "name": "Medieval Europe places",
        "type": "place",
        "short_description": "Locations and geographies that frame Medieval Europe.",
        "description": "Places, regions, and built sites that give Medieval Europe its map — where events and figures concentrate."
    },
    {
        "slug": "medieval-europe-events",
        "name": "Medieval Europe events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Medieval Europe.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Medieval Europe timeline."
    },
    {
        "slug": "medieval-europe-objects",
        "name": "Medieval Europe objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Medieval Europe.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Medieval Europe."
    },
    {
        "slug": "medieval-europe-factions",
        "name": "Medieval Europe factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Medieval Europe.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Medieval Europe."
    },
    {
        "slug": "medieval-europe-concepts",
        "name": "Medieval Europe concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Medieval Europe.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Medieval Europe readable as a lore graph."
    },
    {
        "slug": "medieval-europe-eras",
        "name": "Medieval Europe eras",
        "type": "event",
        "short_description": "Periodization for Medieval Europe.",
        "description": "Named eras and phases that help readers track how Medieval Europe changes across time."
    },
    {
        "slug": "medieval-europe-works",
        "name": "Medieval Europe works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Medieval Europe.",
        "description": "Primary works and adaptations through which most audiences encounter Medieval Europe."
    },
    {
        "slug": "medieval-europe-symbols",
        "name": "Medieval Europe symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Medieval Europe.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Medieval Europe."
    },
    {
        "slug": "medieval-europe-controversies",
        "name": "Medieval Europe controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Medieval Europe.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Medieval Europe argumentative."
    },
    {
        "slug": "medieval-europe-sources",
        "name": "Medieval Europe sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Medieval Europe.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Medieval Europe."
    },
    {
        "slug": "medieval-europe-geography",
        "name": "Medieval Europe geography",
        "type": "place",
        "short_description": "Broader geographic framing for Medieval Europe.",
        "description": "Regions, routes, and spatial systems that situate Medieval Europe beyond single named places."
    },
    {
        "slug": "medieval-europe-legacy",
        "name": "Medieval Europe legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Medieval Europe.",
        "description": "How Medieval Europe continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "medieval-europe",
        "medieval-europe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "medieval-europe",
        "medieval-europe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "medieval-europe",
        "medieval-europe-places",
        "contains",
        "Medieval Europe places is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-events",
        "contains",
        "Medieval Europe events is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-objects",
        "contains",
        "Medieval Europe objects & artifacts is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-factions",
        "contains",
        "Medieval Europe factions & groups is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-concepts",
        "contains",
        "Medieval Europe concepts is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-eras",
        "contains",
        "Medieval Europe eras is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-works",
        "contains",
        "Medieval Europe works & media is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-symbols",
        "contains",
        "Medieval Europe symbols is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-controversies",
        "contains",
        "Medieval Europe controversies is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-sources",
        "contains",
        "Medieval Europe sources is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-geography",
        "contains",
        "Medieval Europe geography is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ],
    [
        "medieval-europe",
        "medieval-europe-legacy",
        "contains",
        "Medieval Europe legacy is a primary trailhead under Medieval Europe.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
