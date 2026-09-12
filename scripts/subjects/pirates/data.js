/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pirates",
        "name": "Pirates",
        "type": "topic",
        "short_description": "Famous pirates, ships, battles, treasure, ports, executions, and maritime legends.",
        "description": "Famous pirates, ships, battles, treasure, ports, executions, and maritime legends. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pirates so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "pirates-figures",
        "name": "Pirates figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pirates.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pirates."
    },
    {
        "slug": "pirates-world",
        "name": "Pirates world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pirates.",
        "description": "Geography, institutions, and periodization that give Pirates its encyclopedia shape."
    },
    {
        "slug": "pirates-places",
        "name": "Pirates places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pirates.",
        "description": "Places, regions, and built sites that give Pirates its map — where events and figures concentrate."
    },
    {
        "slug": "pirates-events",
        "name": "Pirates events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pirates.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pirates timeline."
    },
    {
        "slug": "pirates-objects",
        "name": "Pirates objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pirates.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pirates."
    },
    {
        "slug": "pirates-factions",
        "name": "Pirates factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pirates.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pirates."
    },
    {
        "slug": "pirates-concepts",
        "name": "Pirates concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pirates.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pirates readable as a lore graph."
    },
    {
        "slug": "pirates-eras",
        "name": "Pirates eras",
        "type": "event",
        "short_description": "Periodization for Pirates.",
        "description": "Named eras and phases that help readers track how Pirates changes across time."
    },
    {
        "slug": "pirates-works",
        "name": "Pirates works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pirates.",
        "description": "Primary works and adaptations through which most audiences encounter Pirates."
    },
    {
        "slug": "pirates-symbols",
        "name": "Pirates symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pirates.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pirates."
    },
    {
        "slug": "pirates-controversies",
        "name": "Pirates controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pirates.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pirates argumentative."
    },
    {
        "slug": "pirates-sources",
        "name": "Pirates sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pirates.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pirates."
    },
    {
        "slug": "pirates-geography",
        "name": "Pirates geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pirates.",
        "description": "Regions, routes, and spatial systems that situate Pirates beyond single named places."
    },
    {
        "slug": "pirates-legacy",
        "name": "Pirates legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pirates.",
        "description": "How Pirates continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "pirates",
        "pirates-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pirates",
        "pirates-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pirates",
        "pirates-places",
        "contains",
        "Pirates places is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-events",
        "contains",
        "Pirates events is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-objects",
        "contains",
        "Pirates objects & artifacts is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-factions",
        "contains",
        "Pirates factions & groups is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-concepts",
        "contains",
        "Pirates concepts is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-eras",
        "contains",
        "Pirates eras is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-works",
        "contains",
        "Pirates works & media is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-symbols",
        "contains",
        "Pirates symbols is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-controversies",
        "contains",
        "Pirates controversies is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-sources",
        "contains",
        "Pirates sources is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-geography",
        "contains",
        "Pirates geography is a primary trailhead under Pirates.",
        0.88,
        0.82
    ],
    [
        "pirates",
        "pirates-legacy",
        "contains",
        "Pirates legacy is a primary trailhead under Pirates.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
