/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "prince",
        "name": "Prince",
        "type": "topic",
        "short_description": "Minneapolis polymath whose vault, personas, and genre-fluid catalog remain a pop-mythology center.",
        "description": "Minneapolis polymath whose vault, personas, and genre-fluid catalog remain a pop-mythology center. This Ton-o-Lore subject maps people, works, places, and ideas tied to Prince so readers can follow long-tail connections across the pop tradition."
    },
    {
        "slug": "prince-catalog",
        "name": "Prince catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Prince.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Prince in the pop tradition."
    },
    {
        "slug": "prince-era",
        "name": "Prince eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Prince story.",
        "description": "Periodization helps encyclopedia readers track how Prince changed sound, lineup, or public myth across decades of pop history."
    },
    {
        "slug": "prince-figures",
        "name": "Prince figures",
        "type": "topic",
        "short_description": "People and named forces central to Prince.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Prince."
    },
    {
        "slug": "prince-places",
        "name": "Prince places",
        "type": "place",
        "short_description": "Locations and geographies that frame Prince.",
        "description": "Places, regions, and built sites that give Prince its map — where events and figures concentrate."
    },
    {
        "slug": "prince-events",
        "name": "Prince events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Prince.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Prince timeline."
    },
    {
        "slug": "prince-objects",
        "name": "Prince objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Prince.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Prince."
    },
    {
        "slug": "prince-factions",
        "name": "Prince factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Prince.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Prince."
    },
    {
        "slug": "prince-concepts",
        "name": "Prince concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Prince.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Prince readable as a lore graph."
    },
    {
        "slug": "prince-eras",
        "name": "Prince eras",
        "type": "event",
        "short_description": "Periodization for Prince.",
        "description": "Named eras and phases that help readers track how Prince changes across time."
    },
    {
        "slug": "prince-works",
        "name": "Prince works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Prince.",
        "description": "Primary works and adaptations through which most audiences encounter Prince."
    },
    {
        "slug": "prince-symbols",
        "name": "Prince symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Prince.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Prince."
    },
    {
        "slug": "prince-controversies",
        "name": "Prince controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Prince.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Prince argumentative."
    },
    {
        "slug": "prince-sources",
        "name": "Prince sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Prince.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Prince."
    },
    {
        "slug": "prince-geography",
        "name": "Prince geography",
        "type": "place",
        "short_description": "Broader geographic framing for Prince.",
        "description": "Regions, routes, and spatial systems that situate Prince beyond single named places."
    }
];

const relationships = [
    [
        "prince",
        "prince-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "prince",
        "prince-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "prince",
        "prince-figures",
        "contains",
        "Prince figures is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-places",
        "contains",
        "Prince places is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-events",
        "contains",
        "Prince events is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-objects",
        "contains",
        "Prince objects & artifacts is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-factions",
        "contains",
        "Prince factions & groups is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-concepts",
        "contains",
        "Prince concepts is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-eras",
        "contains",
        "Prince eras is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-works",
        "contains",
        "Prince works & media is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-symbols",
        "contains",
        "Prince symbols is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-controversies",
        "contains",
        "Prince controversies is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-sources",
        "contains",
        "Prince sources is a primary trailhead under Prince.",
        0.88,
        0.82
    ],
    [
        "prince",
        "prince-geography",
        "contains",
        "Prince geography is a primary trailhead under Prince.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
