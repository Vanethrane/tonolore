/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wwe",
        "name": "WWE",
        "type": "topic",
        "short_description": "Sports entertainment's global promotion — titles, brands, and decades of character lore.",
        "description": "Sports entertainment's global promotion — titles, brands, and decades of character lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to WWE so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "wwe-figures",
        "name": "WWE figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to WWE.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring WWE."
    },
    {
        "slug": "wwe-world",
        "name": "WWE world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame WWE.",
        "description": "Geography, institutions, and periodization that give WWE its encyclopedia shape."
    },
    {
        "slug": "wwe-places",
        "name": "WWE places",
        "type": "place",
        "short_description": "Locations and geographies that frame WWE.",
        "description": "Places, regions, and built sites that give WWE its map — where events and figures concentrate."
    },
    {
        "slug": "wwe-events",
        "name": "WWE events",
        "type": "event",
        "short_description": "Turning points and dated episodes in WWE.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the WWE timeline."
    },
    {
        "slug": "wwe-objects",
        "name": "WWE objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to WWE.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through WWE."
    },
    {
        "slug": "wwe-factions",
        "name": "WWE factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside WWE.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in WWE."
    },
    {
        "slug": "wwe-concepts",
        "name": "WWE concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize WWE.",
        "description": "Keywords, doctrines, systems, and abstract forces that make WWE readable as a lore graph."
    },
    {
        "slug": "wwe-eras",
        "name": "WWE eras",
        "type": "event",
        "short_description": "Periodization for WWE.",
        "description": "Named eras and phases that help readers track how WWE changes across time."
    },
    {
        "slug": "wwe-works",
        "name": "WWE works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry WWE.",
        "description": "Primary works and adaptations through which most audiences encounter WWE."
    },
    {
        "slug": "wwe-symbols",
        "name": "WWE symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with WWE.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside WWE."
    },
    {
        "slug": "wwe-controversies",
        "name": "WWE controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in WWE.",
        "description": "Debates, rival canons, scandals, and contested facts that keep WWE argumentative."
    },
    {
        "slug": "wwe-sources",
        "name": "WWE sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into WWE.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify WWE."
    },
    {
        "slug": "wwe-geography",
        "name": "WWE geography",
        "type": "place",
        "short_description": "Broader geographic framing for WWE.",
        "description": "Regions, routes, and spatial systems that situate WWE beyond single named places."
    },
    {
        "slug": "wwe-legacy",
        "name": "WWE legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of WWE.",
        "description": "How WWE continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "wwe",
        "wwe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wwe",
        "wwe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wwe",
        "wwe-places",
        "contains",
        "WWE places is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-events",
        "contains",
        "WWE events is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-objects",
        "contains",
        "WWE objects & artifacts is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-factions",
        "contains",
        "WWE factions & groups is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-concepts",
        "contains",
        "WWE concepts is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-eras",
        "contains",
        "WWE eras is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-works",
        "contains",
        "WWE works & media is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-symbols",
        "contains",
        "WWE symbols is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-controversies",
        "contains",
        "WWE controversies is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-sources",
        "contains",
        "WWE sources is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-geography",
        "contains",
        "WWE geography is a primary trailhead under WWE.",
        0.88,
        0.82
    ],
    [
        "wwe",
        "wwe-legacy",
        "contains",
        "WWE legacy is a primary trailhead under WWE.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
