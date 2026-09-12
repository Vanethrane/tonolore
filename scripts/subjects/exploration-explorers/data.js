/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "exploration-explorers",
        "name": "Exploration & explorers",
        "type": "topic",
        "short_description": "Voyages, maps, first contacts, rival claims, and the explorers who stretched known geography.",
        "description": "Voyages, maps, first contacts, rival claims, and the explorers who stretched known geography. This Ton-o-Lore subject maps people, places, events, and ideas tied to Exploration & explorers so readers can follow long-tail connections across history."
    },
    {
        "slug": "exploration-explorers-figures",
        "name": "Exploration & explorers figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Exploration & explorers.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Exploration & explorers."
    },
    {
        "slug": "exploration-explorers-world",
        "name": "Exploration & explorers world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Exploration & explorers.",
        "description": "Geography, institutions, and periodization that give Exploration & explorers its encyclopedia shape."
    },
    {
        "slug": "exploration-explorers-places",
        "name": "Exploration & explorers places",
        "type": "place",
        "short_description": "Locations and geographies that frame Exploration & explorers.",
        "description": "Places, regions, and built sites that give Exploration & explorers its map — where events and figures concentrate."
    },
    {
        "slug": "exploration-explorers-events",
        "name": "Exploration & explorers events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Exploration & explorers.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Exploration & explorers timeline."
    },
    {
        "slug": "exploration-explorers-objects",
        "name": "Exploration & explorers objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Exploration & explorers.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Exploration & explorers."
    },
    {
        "slug": "exploration-explorers-factions",
        "name": "Exploration & explorers factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Exploration & explorers.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Exploration & explorers."
    },
    {
        "slug": "exploration-explorers-concepts",
        "name": "Exploration & explorers concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Exploration & explorers.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Exploration & explorers readable as a lore graph."
    },
    {
        "slug": "exploration-explorers-eras",
        "name": "Exploration & explorers eras",
        "type": "event",
        "short_description": "Periodization for Exploration & explorers.",
        "description": "Named eras and phases that help readers track how Exploration & explorers changes across time."
    },
    {
        "slug": "exploration-explorers-works",
        "name": "Exploration & explorers works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Exploration & explorers.",
        "description": "Primary works and adaptations through which most audiences encounter Exploration & explorers."
    },
    {
        "slug": "exploration-explorers-symbols",
        "name": "Exploration & explorers symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Exploration & explorers.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Exploration & explorers."
    },
    {
        "slug": "exploration-explorers-controversies",
        "name": "Exploration & explorers controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Exploration & explorers.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Exploration & explorers argumentative."
    },
    {
        "slug": "exploration-explorers-sources",
        "name": "Exploration & explorers sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Exploration & explorers.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Exploration & explorers."
    },
    {
        "slug": "exploration-explorers-geography",
        "name": "Exploration & explorers geography",
        "type": "place",
        "short_description": "Broader geographic framing for Exploration & explorers.",
        "description": "Regions, routes, and spatial systems that situate Exploration & explorers beyond single named places."
    },
    {
        "slug": "exploration-explorers-legacy",
        "name": "Exploration & explorers legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Exploration & explorers.",
        "description": "How Exploration & explorers continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "exploration-explorers",
        "exploration-explorers-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "exploration-explorers",
        "exploration-explorers-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "exploration-explorers",
        "exploration-explorers-places",
        "contains",
        "Exploration & explorers places is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-events",
        "contains",
        "Exploration & explorers events is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-objects",
        "contains",
        "Exploration & explorers objects & artifacts is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-factions",
        "contains",
        "Exploration & explorers factions & groups is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-concepts",
        "contains",
        "Exploration & explorers concepts is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-eras",
        "contains",
        "Exploration & explorers eras is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-works",
        "contains",
        "Exploration & explorers works & media is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-symbols",
        "contains",
        "Exploration & explorers symbols is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-controversies",
        "contains",
        "Exploration & explorers controversies is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-sources",
        "contains",
        "Exploration & explorers sources is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-geography",
        "contains",
        "Exploration & explorers geography is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ],
    [
        "exploration-explorers",
        "exploration-explorers-legacy",
        "contains",
        "Exploration & explorers legacy is a primary trailhead under Exploration & explorers.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
