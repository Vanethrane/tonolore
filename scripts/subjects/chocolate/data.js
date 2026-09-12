/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chocolate",
        "name": "Chocolate",
        "type": "topic",
        "short_description": "Cacao origins, confectionery houses, and the sweet commodity that links Mesoamerica to global dessert lore.",
        "description": "Cacao origins, confectionery houses, and the sweet commodity that links Mesoamerica to global dessert lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chocolate so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "chocolate-figures",
        "name": "Chocolate figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chocolate.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chocolate."
    },
    {
        "slug": "chocolate-world",
        "name": "Chocolate world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chocolate.",
        "description": "Geography, institutions, and periodization that give Chocolate its encyclopedia shape."
    },
    {
        "slug": "chocolate-places",
        "name": "Chocolate places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chocolate.",
        "description": "Places, regions, and built sites that give Chocolate its map — where events and figures concentrate."
    },
    {
        "slug": "chocolate-events",
        "name": "Chocolate events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chocolate.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chocolate timeline."
    },
    {
        "slug": "chocolate-objects",
        "name": "Chocolate objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chocolate.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chocolate."
    },
    {
        "slug": "chocolate-factions",
        "name": "Chocolate factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chocolate.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chocolate."
    },
    {
        "slug": "chocolate-concepts",
        "name": "Chocolate concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chocolate.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chocolate readable as a lore graph."
    },
    {
        "slug": "chocolate-eras",
        "name": "Chocolate eras",
        "type": "event",
        "short_description": "Periodization for Chocolate.",
        "description": "Named eras and phases that help readers track how Chocolate changes across time."
    },
    {
        "slug": "chocolate-works",
        "name": "Chocolate works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chocolate.",
        "description": "Primary works and adaptations through which most audiences encounter Chocolate."
    },
    {
        "slug": "chocolate-symbols",
        "name": "Chocolate symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chocolate.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chocolate."
    },
    {
        "slug": "chocolate-controversies",
        "name": "Chocolate controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chocolate.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chocolate argumentative."
    },
    {
        "slug": "chocolate-sources",
        "name": "Chocolate sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chocolate.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chocolate."
    },
    {
        "slug": "chocolate-geography",
        "name": "Chocolate geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chocolate.",
        "description": "Regions, routes, and spatial systems that situate Chocolate beyond single named places."
    },
    {
        "slug": "chocolate-legacy",
        "name": "Chocolate legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chocolate.",
        "description": "How Chocolate continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "chocolate",
        "chocolate-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chocolate",
        "chocolate-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chocolate",
        "chocolate-places",
        "contains",
        "Chocolate places is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-events",
        "contains",
        "Chocolate events is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-objects",
        "contains",
        "Chocolate objects & artifacts is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-factions",
        "contains",
        "Chocolate factions & groups is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-concepts",
        "contains",
        "Chocolate concepts is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-eras",
        "contains",
        "Chocolate eras is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-works",
        "contains",
        "Chocolate works & media is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-symbols",
        "contains",
        "Chocolate symbols is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-controversies",
        "contains",
        "Chocolate controversies is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-sources",
        "contains",
        "Chocolate sources is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-geography",
        "contains",
        "Chocolate geography is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ],
    [
        "chocolate",
        "chocolate-legacy",
        "contains",
        "Chocolate legacy is a primary trailhead under Chocolate.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
