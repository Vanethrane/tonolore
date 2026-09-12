/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tea",
        "name": "Tea",
        "type": "topic",
        "short_description": "Camellia sinensis, ceremonies, trade routes, and the drink cultures that organize daily ritual.",
        "description": "Camellia sinensis, ceremonies, trade routes, and the drink cultures that organize daily ritual. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tea so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "tea-figures",
        "name": "Tea figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tea.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tea."
    },
    {
        "slug": "tea-world",
        "name": "Tea world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tea.",
        "description": "Geography, institutions, and periodization that give Tea its encyclopedia shape."
    },
    {
        "slug": "tea-places",
        "name": "Tea places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tea.",
        "description": "Places, regions, and built sites that give Tea its map — where events and figures concentrate."
    },
    {
        "slug": "tea-events",
        "name": "Tea events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tea.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tea timeline."
    },
    {
        "slug": "tea-objects",
        "name": "Tea objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tea.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tea."
    },
    {
        "slug": "tea-factions",
        "name": "Tea factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tea.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tea."
    },
    {
        "slug": "tea-concepts",
        "name": "Tea concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tea.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tea readable as a lore graph."
    },
    {
        "slug": "tea-eras",
        "name": "Tea eras",
        "type": "event",
        "short_description": "Periodization for Tea.",
        "description": "Named eras and phases that help readers track how Tea changes across time."
    },
    {
        "slug": "tea-works",
        "name": "Tea works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tea.",
        "description": "Primary works and adaptations through which most audiences encounter Tea."
    },
    {
        "slug": "tea-symbols",
        "name": "Tea symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tea.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tea."
    },
    {
        "slug": "tea-controversies",
        "name": "Tea controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tea.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tea argumentative."
    },
    {
        "slug": "tea-sources",
        "name": "Tea sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tea.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tea."
    },
    {
        "slug": "tea-geography",
        "name": "Tea geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tea.",
        "description": "Regions, routes, and spatial systems that situate Tea beyond single named places."
    },
    {
        "slug": "tea-legacy",
        "name": "Tea legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tea.",
        "description": "How Tea continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "tea",
        "tea-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tea",
        "tea-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tea",
        "tea-places",
        "contains",
        "Tea places is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-events",
        "contains",
        "Tea events is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-objects",
        "contains",
        "Tea objects & artifacts is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-factions",
        "contains",
        "Tea factions & groups is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-concepts",
        "contains",
        "Tea concepts is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-eras",
        "contains",
        "Tea eras is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-works",
        "contains",
        "Tea works & media is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-symbols",
        "contains",
        "Tea symbols is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-controversies",
        "contains",
        "Tea controversies is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-sources",
        "contains",
        "Tea sources is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-geography",
        "contains",
        "Tea geography is a primary trailhead under Tea.",
        0.88,
        0.82
    ],
    [
        "tea",
        "tea-legacy",
        "contains",
        "Tea legacy is a primary trailhead under Tea.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
