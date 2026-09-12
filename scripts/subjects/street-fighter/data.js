/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "street-fighter",
        "name": "Street Fighter",
        "type": "topic",
        "short_description": "World warriors, combos, and Capcom's flagship fighting-game universe.",
        "description": "World warriors, combos, and Capcom's flagship fighting-game universe. This Ton-o-Lore subject maps people, places, events, and ideas tied to Street Fighter so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "street-fighter-figures",
        "name": "Street Fighter figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Street Fighter.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Street Fighter."
    },
    {
        "slug": "street-fighter-world",
        "name": "Street Fighter world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Street Fighter.",
        "description": "Geography, institutions, and periodization that give Street Fighter its encyclopedia shape."
    },
    {
        "slug": "street-fighter-places",
        "name": "Street Fighter places",
        "type": "place",
        "short_description": "Locations and geographies that frame Street Fighter.",
        "description": "Places, regions, and built sites that give Street Fighter its map — where events and figures concentrate."
    },
    {
        "slug": "street-fighter-events",
        "name": "Street Fighter events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Street Fighter.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Street Fighter timeline."
    },
    {
        "slug": "street-fighter-objects",
        "name": "Street Fighter objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Street Fighter.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Street Fighter."
    },
    {
        "slug": "street-fighter-factions",
        "name": "Street Fighter factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Street Fighter.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Street Fighter."
    },
    {
        "slug": "street-fighter-concepts",
        "name": "Street Fighter concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Street Fighter.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Street Fighter readable as a lore graph."
    },
    {
        "slug": "street-fighter-eras",
        "name": "Street Fighter eras",
        "type": "event",
        "short_description": "Periodization for Street Fighter.",
        "description": "Named eras and phases that help readers track how Street Fighter changes across time."
    },
    {
        "slug": "street-fighter-works",
        "name": "Street Fighter works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Street Fighter.",
        "description": "Primary works and adaptations through which most audiences encounter Street Fighter."
    },
    {
        "slug": "street-fighter-symbols",
        "name": "Street Fighter symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Street Fighter.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Street Fighter."
    },
    {
        "slug": "street-fighter-controversies",
        "name": "Street Fighter controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Street Fighter.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Street Fighter argumentative."
    },
    {
        "slug": "street-fighter-sources",
        "name": "Street Fighter sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Street Fighter.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Street Fighter."
    },
    {
        "slug": "street-fighter-geography",
        "name": "Street Fighter geography",
        "type": "place",
        "short_description": "Broader geographic framing for Street Fighter.",
        "description": "Regions, routes, and spatial systems that situate Street Fighter beyond single named places."
    },
    {
        "slug": "street-fighter-legacy",
        "name": "Street Fighter legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Street Fighter.",
        "description": "How Street Fighter continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "street-fighter",
        "street-fighter-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "street-fighter",
        "street-fighter-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "street-fighter",
        "street-fighter-places",
        "contains",
        "Street Fighter places is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-events",
        "contains",
        "Street Fighter events is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-objects",
        "contains",
        "Street Fighter objects & artifacts is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-factions",
        "contains",
        "Street Fighter factions & groups is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-concepts",
        "contains",
        "Street Fighter concepts is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-eras",
        "contains",
        "Street Fighter eras is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-works",
        "contains",
        "Street Fighter works & media is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-symbols",
        "contains",
        "Street Fighter symbols is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-controversies",
        "contains",
        "Street Fighter controversies is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-sources",
        "contains",
        "Street Fighter sources is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-geography",
        "contains",
        "Street Fighter geography is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ],
    [
        "street-fighter",
        "street-fighter-legacy",
        "contains",
        "Street Fighter legacy is a primary trailhead under Street Fighter.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
