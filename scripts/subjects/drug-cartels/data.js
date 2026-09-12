/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "drug-cartels",
        "name": "Drug cartels",
        "type": "topic",
        "short_description": "Organizations, routes, kingpins, and the transnational crime networks mapped in modern history.",
        "description": "Organizations, routes, kingpins, and the transnational crime networks mapped in modern history. This Ton-o-Lore subject maps people, places, events, and ideas tied to Drug cartels so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "drug-cartels-figures",
        "name": "Drug cartels figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Drug cartels.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Drug cartels."
    },
    {
        "slug": "drug-cartels-world",
        "name": "Drug cartels world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Drug cartels.",
        "description": "Geography, institutions, and periodization that give Drug cartels its encyclopedia shape."
    },
    {
        "slug": "drug-cartels-places",
        "name": "Drug cartels places",
        "type": "place",
        "short_description": "Locations and geographies that frame Drug cartels.",
        "description": "Places, regions, and built sites that give Drug cartels its map — where events and figures concentrate."
    },
    {
        "slug": "drug-cartels-events",
        "name": "Drug cartels events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Drug cartels.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Drug cartels timeline."
    },
    {
        "slug": "drug-cartels-objects",
        "name": "Drug cartels objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Drug cartels.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Drug cartels."
    },
    {
        "slug": "drug-cartels-factions",
        "name": "Drug cartels factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Drug cartels.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Drug cartels."
    },
    {
        "slug": "drug-cartels-concepts",
        "name": "Drug cartels concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Drug cartels.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Drug cartels readable as a lore graph."
    },
    {
        "slug": "drug-cartels-eras",
        "name": "Drug cartels eras",
        "type": "event",
        "short_description": "Periodization for Drug cartels.",
        "description": "Named eras and phases that help readers track how Drug cartels changes across time."
    },
    {
        "slug": "drug-cartels-works",
        "name": "Drug cartels works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Drug cartels.",
        "description": "Primary works and adaptations through which most audiences encounter Drug cartels."
    },
    {
        "slug": "drug-cartels-symbols",
        "name": "Drug cartels symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Drug cartels.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Drug cartels."
    },
    {
        "slug": "drug-cartels-controversies",
        "name": "Drug cartels controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Drug cartels.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Drug cartels argumentative."
    },
    {
        "slug": "drug-cartels-sources",
        "name": "Drug cartels sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Drug cartels.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Drug cartels."
    },
    {
        "slug": "drug-cartels-geography",
        "name": "Drug cartels geography",
        "type": "place",
        "short_description": "Broader geographic framing for Drug cartels.",
        "description": "Regions, routes, and spatial systems that situate Drug cartels beyond single named places."
    },
    {
        "slug": "drug-cartels-legacy",
        "name": "Drug cartels legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Drug cartels.",
        "description": "How Drug cartels continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "drug-cartels",
        "drug-cartels-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "drug-cartels",
        "drug-cartels-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "drug-cartels",
        "drug-cartels-places",
        "contains",
        "Drug cartels places is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-events",
        "contains",
        "Drug cartels events is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-objects",
        "contains",
        "Drug cartels objects & artifacts is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-factions",
        "contains",
        "Drug cartels factions & groups is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-concepts",
        "contains",
        "Drug cartels concepts is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-eras",
        "contains",
        "Drug cartels eras is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-works",
        "contains",
        "Drug cartels works & media is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-symbols",
        "contains",
        "Drug cartels symbols is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-controversies",
        "contains",
        "Drug cartels controversies is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-sources",
        "contains",
        "Drug cartels sources is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-geography",
        "contains",
        "Drug cartels geography is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ],
    [
        "drug-cartels",
        "drug-cartels-legacy",
        "contains",
        "Drug cartels legacy is a primary trailhead under Drug cartels.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
