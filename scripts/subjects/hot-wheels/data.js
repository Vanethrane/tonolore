/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hot-wheels",
        "name": "Hot Wheels",
        "type": "topic",
        "short_description": "Die-cast cars, tracks, collector castings, and the racing fantasy attached to miniature metal.",
        "description": "Die-cast cars, tracks, collector castings, and the racing fantasy attached to miniature metal. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hot Wheels so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "hot-wheels-figures",
        "name": "Hot Wheels figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hot Wheels.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hot Wheels."
    },
    {
        "slug": "hot-wheels-world",
        "name": "Hot Wheels world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hot Wheels.",
        "description": "Geography, institutions, and periodization that give Hot Wheels its encyclopedia shape."
    },
    {
        "slug": "hot-wheels-places",
        "name": "Hot Wheels places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hot Wheels.",
        "description": "Places, regions, and built sites that give Hot Wheels its map — where events and figures concentrate."
    },
    {
        "slug": "hot-wheels-events",
        "name": "Hot Wheels events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hot Wheels.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hot Wheels timeline."
    },
    {
        "slug": "hot-wheels-objects",
        "name": "Hot Wheels objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hot Wheels.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hot Wheels."
    },
    {
        "slug": "hot-wheels-factions",
        "name": "Hot Wheels factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hot Wheels.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hot Wheels."
    },
    {
        "slug": "hot-wheels-concepts",
        "name": "Hot Wheels concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hot Wheels.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hot Wheels readable as a lore graph."
    },
    {
        "slug": "hot-wheels-eras",
        "name": "Hot Wheels eras",
        "type": "event",
        "short_description": "Periodization for Hot Wheels.",
        "description": "Named eras and phases that help readers track how Hot Wheels changes across time."
    },
    {
        "slug": "hot-wheels-works",
        "name": "Hot Wheels works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hot Wheels.",
        "description": "Primary works and adaptations through which most audiences encounter Hot Wheels."
    },
    {
        "slug": "hot-wheels-symbols",
        "name": "Hot Wheels symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hot Wheels.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hot Wheels."
    },
    {
        "slug": "hot-wheels-controversies",
        "name": "Hot Wheels controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hot Wheels.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hot Wheels argumentative."
    },
    {
        "slug": "hot-wheels-sources",
        "name": "Hot Wheels sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hot Wheels.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hot Wheels."
    },
    {
        "slug": "hot-wheels-geography",
        "name": "Hot Wheels geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hot Wheels.",
        "description": "Regions, routes, and spatial systems that situate Hot Wheels beyond single named places."
    },
    {
        "slug": "hot-wheels-legacy",
        "name": "Hot Wheels legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hot Wheels.",
        "description": "How Hot Wheels continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "hot-wheels",
        "hot-wheels-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hot-wheels",
        "hot-wheels-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hot-wheels",
        "hot-wheels-places",
        "contains",
        "Hot Wheels places is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-events",
        "contains",
        "Hot Wheels events is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-objects",
        "contains",
        "Hot Wheels objects & artifacts is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-factions",
        "contains",
        "Hot Wheels factions & groups is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-concepts",
        "contains",
        "Hot Wheels concepts is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-eras",
        "contains",
        "Hot Wheels eras is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-works",
        "contains",
        "Hot Wheels works & media is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-symbols",
        "contains",
        "Hot Wheels symbols is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-controversies",
        "contains",
        "Hot Wheels controversies is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-sources",
        "contains",
        "Hot Wheels sources is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-geography",
        "contains",
        "Hot Wheels geography is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ],
    [
        "hot-wheels",
        "hot-wheels-legacy",
        "contains",
        "Hot Wheels legacy is a primary trailhead under Hot Wheels.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
