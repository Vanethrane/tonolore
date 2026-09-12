/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "public-enemy",
        "name": "Public Enemy",
        "type": "topic",
        "short_description": "Bomb-squad production and political storytelling that made hip-hop a public square.",
        "description": "Bomb-squad production and political storytelling that made hip-hop a public square. This Ton-o-Lore subject maps people, works, places, and ideas tied to Public Enemy so readers can follow long-tail connections across the hip-hop tradition."
    },
    {
        "slug": "public-enemy-catalog",
        "name": "Public Enemy catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Public Enemy.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Public Enemy in the hip-hop tradition."
    },
    {
        "slug": "public-enemy-era",
        "name": "Public Enemy eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Public Enemy story.",
        "description": "Periodization helps encyclopedia readers track how Public Enemy changed sound, lineup, or public myth across decades of hip-hop history."
    },
    {
        "slug": "public-enemy-figures",
        "name": "Public Enemy figures",
        "type": "topic",
        "short_description": "People and named forces central to Public Enemy.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Public Enemy."
    },
    {
        "slug": "public-enemy-places",
        "name": "Public Enemy places",
        "type": "place",
        "short_description": "Locations and geographies that frame Public Enemy.",
        "description": "Places, regions, and built sites that give Public Enemy its map — where events and figures concentrate."
    },
    {
        "slug": "public-enemy-events",
        "name": "Public Enemy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Public Enemy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Public Enemy timeline."
    },
    {
        "slug": "public-enemy-objects",
        "name": "Public Enemy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Public Enemy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Public Enemy."
    },
    {
        "slug": "public-enemy-factions",
        "name": "Public Enemy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Public Enemy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Public Enemy."
    },
    {
        "slug": "public-enemy-concepts",
        "name": "Public Enemy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Public Enemy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Public Enemy readable as a lore graph."
    },
    {
        "slug": "public-enemy-eras",
        "name": "Public Enemy eras",
        "type": "event",
        "short_description": "Periodization for Public Enemy.",
        "description": "Named eras and phases that help readers track how Public Enemy changes across time."
    },
    {
        "slug": "public-enemy-works",
        "name": "Public Enemy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Public Enemy.",
        "description": "Primary works and adaptations through which most audiences encounter Public Enemy."
    },
    {
        "slug": "public-enemy-symbols",
        "name": "Public Enemy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Public Enemy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Public Enemy."
    },
    {
        "slug": "public-enemy-controversies",
        "name": "Public Enemy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Public Enemy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Public Enemy argumentative."
    },
    {
        "slug": "public-enemy-sources",
        "name": "Public Enemy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Public Enemy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Public Enemy."
    },
    {
        "slug": "public-enemy-geography",
        "name": "Public Enemy geography",
        "type": "place",
        "short_description": "Broader geographic framing for Public Enemy.",
        "description": "Regions, routes, and spatial systems that situate Public Enemy beyond single named places."
    }
];

const relationships = [
    [
        "public-enemy",
        "public-enemy-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "public-enemy",
        "public-enemy-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "public-enemy",
        "public-enemy-figures",
        "contains",
        "Public Enemy figures is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-places",
        "contains",
        "Public Enemy places is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-events",
        "contains",
        "Public Enemy events is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-objects",
        "contains",
        "Public Enemy objects & artifacts is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-factions",
        "contains",
        "Public Enemy factions & groups is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-concepts",
        "contains",
        "Public Enemy concepts is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-eras",
        "contains",
        "Public Enemy eras is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-works",
        "contains",
        "Public Enemy works & media is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-symbols",
        "contains",
        "Public Enemy symbols is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-controversies",
        "contains",
        "Public Enemy controversies is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-sources",
        "contains",
        "Public Enemy sources is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ],
    [
        "public-enemy",
        "public-enemy-geography",
        "contains",
        "Public Enemy geography is a primary trailhead under Public Enemy.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
