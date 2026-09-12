/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wine",
        "name": "Wine",
        "type": "topic",
        "short_description": "Terroir, appellations, and tasting cultures that organize wine as living geography.",
        "description": "Terroir, appellations, and tasting cultures that organize wine as living geography. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wine so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "wine-figures",
        "name": "Wine figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Wine.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Wine."
    },
    {
        "slug": "wine-world",
        "name": "Wine world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Wine.",
        "description": "Geography, institutions, and periodization that give Wine its encyclopedia shape."
    },
    {
        "slug": "wine-places",
        "name": "Wine places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wine.",
        "description": "Places, regions, and built sites that give Wine its map — where events and figures concentrate."
    },
    {
        "slug": "wine-events",
        "name": "Wine events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wine.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wine timeline."
    },
    {
        "slug": "wine-objects",
        "name": "Wine objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wine.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wine."
    },
    {
        "slug": "wine-factions",
        "name": "Wine factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wine.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wine."
    },
    {
        "slug": "wine-concepts",
        "name": "Wine concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wine.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wine readable as a lore graph."
    },
    {
        "slug": "wine-eras",
        "name": "Wine eras",
        "type": "event",
        "short_description": "Periodization for Wine.",
        "description": "Named eras and phases that help readers track how Wine changes across time."
    },
    {
        "slug": "wine-works",
        "name": "Wine works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wine.",
        "description": "Primary works and adaptations through which most audiences encounter Wine."
    },
    {
        "slug": "wine-symbols",
        "name": "Wine symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wine.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wine."
    },
    {
        "slug": "wine-controversies",
        "name": "Wine controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wine.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wine argumentative."
    },
    {
        "slug": "wine-sources",
        "name": "Wine sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wine.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wine."
    },
    {
        "slug": "wine-geography",
        "name": "Wine geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wine.",
        "description": "Regions, routes, and spatial systems that situate Wine beyond single named places."
    },
    {
        "slug": "wine-legacy",
        "name": "Wine legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wine.",
        "description": "How Wine continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "wine",
        "wine-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wine",
        "wine-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wine",
        "wine-places",
        "contains",
        "Wine places is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-events",
        "contains",
        "Wine events is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-objects",
        "contains",
        "Wine objects & artifacts is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-factions",
        "contains",
        "Wine factions & groups is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-concepts",
        "contains",
        "Wine concepts is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-eras",
        "contains",
        "Wine eras is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-works",
        "contains",
        "Wine works & media is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-symbols",
        "contains",
        "Wine symbols is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-controversies",
        "contains",
        "Wine controversies is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-sources",
        "contains",
        "Wine sources is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-geography",
        "contains",
        "Wine geography is a primary trailhead under Wine.",
        0.88,
        0.82
    ],
    [
        "wine",
        "wine-legacy",
        "contains",
        "Wine legacy is a primary trailhead under Wine.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
