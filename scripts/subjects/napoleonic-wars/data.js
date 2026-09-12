/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "napoleonic-wars",
        "name": "Napoleonic Wars",
        "type": "topic",
        "short_description": "Coalitions, battles, marshals, and the reshaping of Europe under Napoleon.",
        "description": "Coalitions, battles, marshals, and the reshaping of Europe under Napoleon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Napoleonic Wars so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "napoleonic-wars-figures",
        "name": "Napoleonic Wars figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Napoleonic Wars.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Napoleonic Wars."
    },
    {
        "slug": "napoleonic-wars-world",
        "name": "Napoleonic Wars world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Napoleonic Wars.",
        "description": "Geography, institutions, and periodization that give Napoleonic Wars its encyclopedia shape."
    },
    {
        "slug": "napoleonic-wars-places",
        "name": "Napoleonic Wars places",
        "type": "place",
        "short_description": "Locations and geographies that frame Napoleonic Wars.",
        "description": "Places, regions, and built sites that give Napoleonic Wars its map — where events and figures concentrate."
    },
    {
        "slug": "napoleonic-wars-events",
        "name": "Napoleonic Wars events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Napoleonic Wars.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Napoleonic Wars timeline."
    },
    {
        "slug": "napoleonic-wars-objects",
        "name": "Napoleonic Wars objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Napoleonic Wars.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Napoleonic Wars."
    },
    {
        "slug": "napoleonic-wars-factions",
        "name": "Napoleonic Wars factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Napoleonic Wars.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Napoleonic Wars."
    },
    {
        "slug": "napoleonic-wars-concepts",
        "name": "Napoleonic Wars concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Napoleonic Wars.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Napoleonic Wars readable as a lore graph."
    },
    {
        "slug": "napoleonic-wars-eras",
        "name": "Napoleonic Wars eras",
        "type": "event",
        "short_description": "Periodization for Napoleonic Wars.",
        "description": "Named eras and phases that help readers track how Napoleonic Wars changes across time."
    },
    {
        "slug": "napoleonic-wars-works",
        "name": "Napoleonic Wars works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Napoleonic Wars.",
        "description": "Primary works and adaptations through which most audiences encounter Napoleonic Wars."
    },
    {
        "slug": "napoleonic-wars-symbols",
        "name": "Napoleonic Wars symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Napoleonic Wars.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Napoleonic Wars."
    },
    {
        "slug": "napoleonic-wars-controversies",
        "name": "Napoleonic Wars controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Napoleonic Wars.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Napoleonic Wars argumentative."
    },
    {
        "slug": "napoleonic-wars-sources",
        "name": "Napoleonic Wars sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Napoleonic Wars.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Napoleonic Wars."
    },
    {
        "slug": "napoleonic-wars-geography",
        "name": "Napoleonic Wars geography",
        "type": "place",
        "short_description": "Broader geographic framing for Napoleonic Wars.",
        "description": "Regions, routes, and spatial systems that situate Napoleonic Wars beyond single named places."
    },
    {
        "slug": "napoleonic-wars-legacy",
        "name": "Napoleonic Wars legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Napoleonic Wars.",
        "description": "How Napoleonic Wars continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "napoleonic-wars",
        "napoleonic-wars-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-places",
        "contains",
        "Napoleonic Wars places is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-events",
        "contains",
        "Napoleonic Wars events is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-objects",
        "contains",
        "Napoleonic Wars objects & artifacts is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-factions",
        "contains",
        "Napoleonic Wars factions & groups is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-concepts",
        "contains",
        "Napoleonic Wars concepts is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-eras",
        "contains",
        "Napoleonic Wars eras is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-works",
        "contains",
        "Napoleonic Wars works & media is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-symbols",
        "contains",
        "Napoleonic Wars symbols is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-controversies",
        "contains",
        "Napoleonic Wars controversies is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-sources",
        "contains",
        "Napoleonic Wars sources is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-geography",
        "contains",
        "Napoleonic Wars geography is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ],
    [
        "napoleonic-wars",
        "napoleonic-wars-legacy",
        "contains",
        "Napoleonic Wars legacy is a primary trailhead under Napoleonic Wars.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
