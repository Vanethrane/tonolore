/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "historical-clothing",
        "name": "Historical clothing",
        "type": "topic",
        "short_description": "Garments, cultures, periods, classes, materials, and the symbolism stitched into dress across eras.",
        "description": "Garments, cultures, periods, classes, materials, and the symbolism stitched into dress across eras. This Ton-o-Lore subject maps people, places, events, and ideas tied to Historical clothing so readers can follow long-tail connections across history."
    },
    {
        "slug": "historical-clothing-figures",
        "name": "Historical clothing figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Historical clothing.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Historical clothing."
    },
    {
        "slug": "historical-clothing-world",
        "name": "Historical clothing world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Historical clothing.",
        "description": "Geography, institutions, and periodization that give Historical clothing its encyclopedia shape."
    },
    {
        "slug": "historical-clothing-places",
        "name": "Historical clothing places",
        "type": "place",
        "short_description": "Locations and geographies that frame Historical clothing.",
        "description": "Places, regions, and built sites that give Historical clothing its map — where events and figures concentrate."
    },
    {
        "slug": "historical-clothing-events",
        "name": "Historical clothing events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Historical clothing.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Historical clothing timeline."
    },
    {
        "slug": "historical-clothing-objects",
        "name": "Historical clothing objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Historical clothing.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Historical clothing."
    },
    {
        "slug": "historical-clothing-factions",
        "name": "Historical clothing factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Historical clothing.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Historical clothing."
    },
    {
        "slug": "historical-clothing-concepts",
        "name": "Historical clothing concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Historical clothing.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Historical clothing readable as a lore graph."
    },
    {
        "slug": "historical-clothing-eras",
        "name": "Historical clothing eras",
        "type": "event",
        "short_description": "Periodization for Historical clothing.",
        "description": "Named eras and phases that help readers track how Historical clothing changes across time."
    },
    {
        "slug": "historical-clothing-works",
        "name": "Historical clothing works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Historical clothing.",
        "description": "Primary works and adaptations through which most audiences encounter Historical clothing."
    },
    {
        "slug": "historical-clothing-symbols",
        "name": "Historical clothing symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Historical clothing.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Historical clothing."
    },
    {
        "slug": "historical-clothing-controversies",
        "name": "Historical clothing controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Historical clothing.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Historical clothing argumentative."
    },
    {
        "slug": "historical-clothing-sources",
        "name": "Historical clothing sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Historical clothing.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Historical clothing."
    },
    {
        "slug": "historical-clothing-geography",
        "name": "Historical clothing geography",
        "type": "place",
        "short_description": "Broader geographic framing for Historical clothing.",
        "description": "Regions, routes, and spatial systems that situate Historical clothing beyond single named places."
    },
    {
        "slug": "historical-clothing-legacy",
        "name": "Historical clothing legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Historical clothing.",
        "description": "How Historical clothing continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "historical-clothing",
        "historical-clothing-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "historical-clothing",
        "historical-clothing-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "historical-clothing",
        "historical-clothing-places",
        "contains",
        "Historical clothing places is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-events",
        "contains",
        "Historical clothing events is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-objects",
        "contains",
        "Historical clothing objects & artifacts is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-factions",
        "contains",
        "Historical clothing factions & groups is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-concepts",
        "contains",
        "Historical clothing concepts is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-eras",
        "contains",
        "Historical clothing eras is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-works",
        "contains",
        "Historical clothing works & media is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-symbols",
        "contains",
        "Historical clothing symbols is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-controversies",
        "contains",
        "Historical clothing controversies is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-sources",
        "contains",
        "Historical clothing sources is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-geography",
        "contains",
        "Historical clothing geography is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ],
    [
        "historical-clothing",
        "historical-clothing-legacy",
        "contains",
        "Historical clothing legacy is a primary trailhead under Historical clothing.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
