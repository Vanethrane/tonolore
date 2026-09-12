/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "opera",
        "name": "Opera",
        "type": "topic",
        "short_description": "Composers, houses, roles, and the sung drama tradition that still defines prestige stages.",
        "description": "Composers, houses, roles, and the sung drama tradition that still defines prestige stages. This Ton-o-Lore subject maps people, places, events, and ideas tied to Opera so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "opera-figures",
        "name": "Opera figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Opera.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Opera."
    },
    {
        "slug": "opera-world",
        "name": "Opera world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Opera.",
        "description": "Geography, institutions, and periodization that give Opera its encyclopedia shape."
    },
    {
        "slug": "opera-places",
        "name": "Opera places",
        "type": "place",
        "short_description": "Locations and geographies that frame Opera.",
        "description": "Places, regions, and built sites that give Opera its map — where events and figures concentrate."
    },
    {
        "slug": "opera-events",
        "name": "Opera events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Opera.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Opera timeline."
    },
    {
        "slug": "opera-objects",
        "name": "Opera objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Opera.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Opera."
    },
    {
        "slug": "opera-factions",
        "name": "Opera factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Opera.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Opera."
    },
    {
        "slug": "opera-concepts",
        "name": "Opera concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Opera.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Opera readable as a lore graph."
    },
    {
        "slug": "opera-eras",
        "name": "Opera eras",
        "type": "event",
        "short_description": "Periodization for Opera.",
        "description": "Named eras and phases that help readers track how Opera changes across time."
    },
    {
        "slug": "opera-works",
        "name": "Opera works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Opera.",
        "description": "Primary works and adaptations through which most audiences encounter Opera."
    },
    {
        "slug": "opera-symbols",
        "name": "Opera symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Opera.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Opera."
    },
    {
        "slug": "opera-controversies",
        "name": "Opera controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Opera.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Opera argumentative."
    },
    {
        "slug": "opera-sources",
        "name": "Opera sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Opera.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Opera."
    },
    {
        "slug": "opera-geography",
        "name": "Opera geography",
        "type": "place",
        "short_description": "Broader geographic framing for Opera.",
        "description": "Regions, routes, and spatial systems that situate Opera beyond single named places."
    },
    {
        "slug": "opera-legacy",
        "name": "Opera legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Opera.",
        "description": "How Opera continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "opera",
        "opera-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "opera",
        "opera-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "opera",
        "opera-places",
        "contains",
        "Opera places is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-events",
        "contains",
        "Opera events is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-objects",
        "contains",
        "Opera objects & artifacts is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-factions",
        "contains",
        "Opera factions & groups is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-concepts",
        "contains",
        "Opera concepts is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-eras",
        "contains",
        "Opera eras is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-works",
        "contains",
        "Opera works & media is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-symbols",
        "contains",
        "Opera symbols is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-controversies",
        "contains",
        "Opera controversies is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-sources",
        "contains",
        "Opera sources is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-geography",
        "contains",
        "Opera geography is a primary trailhead under Opera.",
        0.88,
        0.82
    ],
    [
        "opera",
        "opera-legacy",
        "contains",
        "Opera legacy is a primary trailhead under Opera.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
