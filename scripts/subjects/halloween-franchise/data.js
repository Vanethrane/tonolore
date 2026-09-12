/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "halloween-franchise",
        "name": "Halloween",
        "type": "topic",
        "short_description": "Michael Myers and Haddonfield — the slasher calendar's most durable myth.",
        "description": "Michael Myers and Haddonfield — the slasher calendar's most durable myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Halloween so readers can follow long-tail connections across horror."
    },
    {
        "slug": "halloween-franchise-figures",
        "name": "Halloween figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Halloween.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Halloween."
    },
    {
        "slug": "halloween-franchise-world",
        "name": "Halloween world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Halloween.",
        "description": "Geography, institutions, and periodization that give Halloween its encyclopedia shape."
    },
    {
        "slug": "halloween-franchise-places",
        "name": "Halloween places",
        "type": "place",
        "short_description": "Locations and geographies that frame Halloween.",
        "description": "Places, regions, and built sites that give Halloween its map — where events and figures concentrate."
    },
    {
        "slug": "halloween-franchise-events",
        "name": "Halloween events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Halloween.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Halloween timeline."
    },
    {
        "slug": "halloween-franchise-objects",
        "name": "Halloween objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Halloween.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Halloween."
    },
    {
        "slug": "halloween-franchise-factions",
        "name": "Halloween factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Halloween.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Halloween."
    },
    {
        "slug": "halloween-franchise-concepts",
        "name": "Halloween concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Halloween.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Halloween readable as a lore graph."
    },
    {
        "slug": "halloween-franchise-eras",
        "name": "Halloween eras",
        "type": "event",
        "short_description": "Periodization for Halloween.",
        "description": "Named eras and phases that help readers track how Halloween changes across time."
    },
    {
        "slug": "halloween-franchise-works",
        "name": "Halloween works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Halloween.",
        "description": "Primary works and adaptations through which most audiences encounter Halloween."
    },
    {
        "slug": "halloween-franchise-symbols",
        "name": "Halloween symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Halloween.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Halloween."
    },
    {
        "slug": "halloween-franchise-controversies",
        "name": "Halloween controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Halloween.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Halloween argumentative."
    },
    {
        "slug": "halloween-franchise-sources",
        "name": "Halloween sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Halloween.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Halloween."
    },
    {
        "slug": "halloween-franchise-geography",
        "name": "Halloween geography",
        "type": "place",
        "short_description": "Broader geographic framing for Halloween.",
        "description": "Regions, routes, and spatial systems that situate Halloween beyond single named places."
    },
    {
        "slug": "halloween-franchise-legacy",
        "name": "Halloween legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Halloween.",
        "description": "How Halloween continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "halloween-franchise",
        "halloween-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "halloween-franchise",
        "halloween-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "halloween-franchise",
        "halloween-franchise-places",
        "contains",
        "Halloween places is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-events",
        "contains",
        "Halloween events is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-objects",
        "contains",
        "Halloween objects & artifacts is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-factions",
        "contains",
        "Halloween factions & groups is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-concepts",
        "contains",
        "Halloween concepts is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-eras",
        "contains",
        "Halloween eras is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-works",
        "contains",
        "Halloween works & media is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-symbols",
        "contains",
        "Halloween symbols is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-controversies",
        "contains",
        "Halloween controversies is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-sources",
        "contains",
        "Halloween sources is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-geography",
        "contains",
        "Halloween geography is a primary trailhead under Halloween.",
        0.88,
        0.82
    ],
    [
        "halloween-franchise",
        "halloween-franchise-legacy",
        "contains",
        "Halloween legacy is a primary trailhead under Halloween.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
