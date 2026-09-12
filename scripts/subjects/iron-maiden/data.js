/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "iron-maiden",
        "name": "Iron Maiden",
        "type": "topic",
        "short_description": "New Wave of British Heavy Metal flagship, with Eddie the mascot as a lasting visual myth.",
        "description": "New Wave of British Heavy Metal flagship, with Eddie the mascot as a lasting visual myth. This Ton-o-Lore subject maps people, works, places, and ideas tied to Iron Maiden so readers can follow long-tail connections across the metal tradition."
    },
    {
        "slug": "iron-maiden-catalog",
        "name": "Iron Maiden catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Iron Maiden.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Iron Maiden in the metal tradition."
    },
    {
        "slug": "iron-maiden-era",
        "name": "Iron Maiden eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Iron Maiden story.",
        "description": "Periodization helps encyclopedia readers track how Iron Maiden changed sound, lineup, or public myth across decades of metal history."
    },
    {
        "slug": "iron-maiden-figures",
        "name": "Iron Maiden figures",
        "type": "topic",
        "short_description": "People and named forces central to Iron Maiden.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Iron Maiden."
    },
    {
        "slug": "iron-maiden-places",
        "name": "Iron Maiden places",
        "type": "place",
        "short_description": "Locations and geographies that frame Iron Maiden.",
        "description": "Places, regions, and built sites that give Iron Maiden its map — where events and figures concentrate."
    },
    {
        "slug": "iron-maiden-events",
        "name": "Iron Maiden events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Iron Maiden.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Iron Maiden timeline."
    },
    {
        "slug": "iron-maiden-objects",
        "name": "Iron Maiden objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Iron Maiden.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Iron Maiden."
    },
    {
        "slug": "iron-maiden-factions",
        "name": "Iron Maiden factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Iron Maiden.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Iron Maiden."
    },
    {
        "slug": "iron-maiden-concepts",
        "name": "Iron Maiden concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Iron Maiden.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Iron Maiden readable as a lore graph."
    },
    {
        "slug": "iron-maiden-eras",
        "name": "Iron Maiden eras",
        "type": "event",
        "short_description": "Periodization for Iron Maiden.",
        "description": "Named eras and phases that help readers track how Iron Maiden changes across time."
    },
    {
        "slug": "iron-maiden-works",
        "name": "Iron Maiden works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Iron Maiden.",
        "description": "Primary works and adaptations through which most audiences encounter Iron Maiden."
    },
    {
        "slug": "iron-maiden-symbols",
        "name": "Iron Maiden symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Iron Maiden.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Iron Maiden."
    },
    {
        "slug": "iron-maiden-controversies",
        "name": "Iron Maiden controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Iron Maiden.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Iron Maiden argumentative."
    },
    {
        "slug": "iron-maiden-sources",
        "name": "Iron Maiden sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Iron Maiden.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Iron Maiden."
    },
    {
        "slug": "iron-maiden-geography",
        "name": "Iron Maiden geography",
        "type": "place",
        "short_description": "Broader geographic framing for Iron Maiden.",
        "description": "Regions, routes, and spatial systems that situate Iron Maiden beyond single named places."
    }
];

const relationships = [
    [
        "iron-maiden",
        "iron-maiden-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "iron-maiden",
        "iron-maiden-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "iron-maiden",
        "iron-maiden-figures",
        "contains",
        "Iron Maiden figures is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-places",
        "contains",
        "Iron Maiden places is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-events",
        "contains",
        "Iron Maiden events is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-objects",
        "contains",
        "Iron Maiden objects & artifacts is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-factions",
        "contains",
        "Iron Maiden factions & groups is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-concepts",
        "contains",
        "Iron Maiden concepts is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-eras",
        "contains",
        "Iron Maiden eras is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-works",
        "contains",
        "Iron Maiden works & media is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-symbols",
        "contains",
        "Iron Maiden symbols is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-controversies",
        "contains",
        "Iron Maiden controversies is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-sources",
        "contains",
        "Iron Maiden sources is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ],
    [
        "iron-maiden",
        "iron-maiden-geography",
        "contains",
        "Iron Maiden geography is a primary trailhead under Iron Maiden.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
