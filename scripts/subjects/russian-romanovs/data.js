/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "russian-romanovs",
        "name": "Russian Romanovs",
        "type": "topic",
        "short_description": "Tsars, courts, Rasputin lore, revolution, and the dynasty that ended in 1918.",
        "description": "Tsars, courts, Rasputin lore, revolution, and the dynasty that ended in 1918. This Ton-o-Lore subject maps people, places, events, and ideas tied to Russian Romanovs so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "russian-romanovs-figures",
        "name": "Russian Romanovs figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Russian Romanovs.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Russian Romanovs."
    },
    {
        "slug": "russian-romanovs-world",
        "name": "Russian Romanovs world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Russian Romanovs.",
        "description": "Geography, institutions, and periodization that give Russian Romanovs its encyclopedia shape."
    },
    {
        "slug": "russian-romanovs-places",
        "name": "Russian Romanovs places",
        "type": "place",
        "short_description": "Locations and geographies that frame Russian Romanovs.",
        "description": "Places, regions, and built sites that give Russian Romanovs its map — where events and figures concentrate."
    },
    {
        "slug": "russian-romanovs-events",
        "name": "Russian Romanovs events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Russian Romanovs.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Russian Romanovs timeline."
    },
    {
        "slug": "russian-romanovs-objects",
        "name": "Russian Romanovs objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Russian Romanovs.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Russian Romanovs."
    },
    {
        "slug": "russian-romanovs-factions",
        "name": "Russian Romanovs factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Russian Romanovs.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Russian Romanovs."
    },
    {
        "slug": "russian-romanovs-concepts",
        "name": "Russian Romanovs concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Russian Romanovs.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Russian Romanovs readable as a lore graph."
    },
    {
        "slug": "russian-romanovs-eras",
        "name": "Russian Romanovs eras",
        "type": "event",
        "short_description": "Periodization for Russian Romanovs.",
        "description": "Named eras and phases that help readers track how Russian Romanovs changes across time."
    },
    {
        "slug": "russian-romanovs-works",
        "name": "Russian Romanovs works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Russian Romanovs.",
        "description": "Primary works and adaptations through which most audiences encounter Russian Romanovs."
    },
    {
        "slug": "russian-romanovs-symbols",
        "name": "Russian Romanovs symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Russian Romanovs.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Russian Romanovs."
    },
    {
        "slug": "russian-romanovs-controversies",
        "name": "Russian Romanovs controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Russian Romanovs.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Russian Romanovs argumentative."
    },
    {
        "slug": "russian-romanovs-sources",
        "name": "Russian Romanovs sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Russian Romanovs.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Russian Romanovs."
    },
    {
        "slug": "russian-romanovs-geography",
        "name": "Russian Romanovs geography",
        "type": "place",
        "short_description": "Broader geographic framing for Russian Romanovs.",
        "description": "Regions, routes, and spatial systems that situate Russian Romanovs beyond single named places."
    },
    {
        "slug": "russian-romanovs-legacy",
        "name": "Russian Romanovs legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Russian Romanovs.",
        "description": "How Russian Romanovs continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "russian-romanovs",
        "russian-romanovs-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "russian-romanovs",
        "russian-romanovs-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "russian-romanovs",
        "russian-romanovs-places",
        "contains",
        "Russian Romanovs places is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-events",
        "contains",
        "Russian Romanovs events is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-objects",
        "contains",
        "Russian Romanovs objects & artifacts is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-factions",
        "contains",
        "Russian Romanovs factions & groups is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-concepts",
        "contains",
        "Russian Romanovs concepts is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-eras",
        "contains",
        "Russian Romanovs eras is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-works",
        "contains",
        "Russian Romanovs works & media is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-symbols",
        "contains",
        "Russian Romanovs symbols is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-controversies",
        "contains",
        "Russian Romanovs controversies is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-sources",
        "contains",
        "Russian Romanovs sources is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-geography",
        "contains",
        "Russian Romanovs geography is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ],
    [
        "russian-romanovs",
        "russian-romanovs-legacy",
        "contains",
        "Russian Romanovs legacy is a primary trailhead under Russian Romanovs.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
