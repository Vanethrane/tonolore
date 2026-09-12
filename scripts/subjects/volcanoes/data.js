/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "volcanoes",
        "name": "Volcanoes",
        "type": "topic",
        "short_description": "Eruptions, volcano types, famous peaks, and the geology that remakes landscapes overnight.",
        "description": "Eruptions, volcano types, famous peaks, and the geology that remakes landscapes overnight. This Ton-o-Lore subject maps people, places, events, and ideas tied to Volcanoes so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "volcanoes-figures",
        "name": "Volcanoes figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Volcanoes.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Volcanoes."
    },
    {
        "slug": "volcanoes-world",
        "name": "Volcanoes world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Volcanoes.",
        "description": "Geography, institutions, and periodization that give Volcanoes its encyclopedia shape."
    },
    {
        "slug": "volcanoes-places",
        "name": "Volcanoes places",
        "type": "place",
        "short_description": "Locations and geographies that frame Volcanoes.",
        "description": "Places, regions, and built sites that give Volcanoes its map — where events and figures concentrate."
    },
    {
        "slug": "volcanoes-events",
        "name": "Volcanoes events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Volcanoes.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Volcanoes timeline."
    },
    {
        "slug": "volcanoes-objects",
        "name": "Volcanoes objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Volcanoes.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Volcanoes."
    },
    {
        "slug": "volcanoes-factions",
        "name": "Volcanoes factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Volcanoes.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Volcanoes."
    },
    {
        "slug": "volcanoes-concepts",
        "name": "Volcanoes concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Volcanoes.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Volcanoes readable as a lore graph."
    },
    {
        "slug": "volcanoes-eras",
        "name": "Volcanoes eras",
        "type": "event",
        "short_description": "Periodization for Volcanoes.",
        "description": "Named eras and phases that help readers track how Volcanoes changes across time."
    },
    {
        "slug": "volcanoes-works",
        "name": "Volcanoes works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Volcanoes.",
        "description": "Primary works and adaptations through which most audiences encounter Volcanoes."
    },
    {
        "slug": "volcanoes-symbols",
        "name": "Volcanoes symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Volcanoes.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Volcanoes."
    },
    {
        "slug": "volcanoes-controversies",
        "name": "Volcanoes controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Volcanoes.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Volcanoes argumentative."
    },
    {
        "slug": "volcanoes-sources",
        "name": "Volcanoes sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Volcanoes.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Volcanoes."
    },
    {
        "slug": "volcanoes-geography",
        "name": "Volcanoes geography",
        "type": "place",
        "short_description": "Broader geographic framing for Volcanoes.",
        "description": "Regions, routes, and spatial systems that situate Volcanoes beyond single named places."
    },
    {
        "slug": "volcanoes-legacy",
        "name": "Volcanoes legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Volcanoes.",
        "description": "How Volcanoes continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "volcanoes",
        "volcanoes-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "volcanoes",
        "volcanoes-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "volcanoes",
        "volcanoes-places",
        "contains",
        "Volcanoes places is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-events",
        "contains",
        "Volcanoes events is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-objects",
        "contains",
        "Volcanoes objects & artifacts is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-factions",
        "contains",
        "Volcanoes factions & groups is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-concepts",
        "contains",
        "Volcanoes concepts is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-eras",
        "contains",
        "Volcanoes eras is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-works",
        "contains",
        "Volcanoes works & media is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-symbols",
        "contains",
        "Volcanoes symbols is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-controversies",
        "contains",
        "Volcanoes controversies is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-sources",
        "contains",
        "Volcanoes sources is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-geography",
        "contains",
        "Volcanoes geography is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ],
    [
        "volcanoes",
        "volcanoes-legacy",
        "contains",
        "Volcanoes legacy is a primary trailhead under Volcanoes.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
