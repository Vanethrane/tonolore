/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "american-presidency",
        "name": "The American Presidency",
        "type": "topic",
        "short_description": "Presidents, administrations, elections, scandals, and the office that concentrates American political lore.",
        "description": "Presidents, administrations, elections, scandals, and the office that concentrates American political lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to The American Presidency so readers can follow long-tail connections across history."
    },
    {
        "slug": "american-presidency-figures",
        "name": "The American Presidency figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The American Presidency.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The American Presidency."
    },
    {
        "slug": "american-presidency-world",
        "name": "The American Presidency world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The American Presidency.",
        "description": "Geography, institutions, and periodization that give The American Presidency its encyclopedia shape."
    },
    {
        "slug": "american-presidency-places",
        "name": "The American Presidency places",
        "type": "place",
        "short_description": "Locations and geographies that frame The American Presidency.",
        "description": "Places, regions, and built sites that give The American Presidency its map — where events and figures concentrate."
    },
    {
        "slug": "american-presidency-events",
        "name": "The American Presidency events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The American Presidency.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The American Presidency timeline."
    },
    {
        "slug": "american-presidency-objects",
        "name": "The American Presidency objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The American Presidency.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The American Presidency."
    },
    {
        "slug": "american-presidency-factions",
        "name": "The American Presidency factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The American Presidency.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The American Presidency."
    },
    {
        "slug": "american-presidency-concepts",
        "name": "The American Presidency concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The American Presidency.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The American Presidency readable as a lore graph."
    },
    {
        "slug": "american-presidency-eras",
        "name": "The American Presidency eras",
        "type": "event",
        "short_description": "Periodization for The American Presidency.",
        "description": "Named eras and phases that help readers track how The American Presidency changes across time."
    },
    {
        "slug": "american-presidency-works",
        "name": "The American Presidency works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The American Presidency.",
        "description": "Primary works and adaptations through which most audiences encounter The American Presidency."
    },
    {
        "slug": "american-presidency-symbols",
        "name": "The American Presidency symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The American Presidency.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The American Presidency."
    },
    {
        "slug": "american-presidency-controversies",
        "name": "The American Presidency controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The American Presidency.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The American Presidency argumentative."
    },
    {
        "slug": "american-presidency-sources",
        "name": "The American Presidency sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The American Presidency.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The American Presidency."
    },
    {
        "slug": "american-presidency-geography",
        "name": "The American Presidency geography",
        "type": "place",
        "short_description": "Broader geographic framing for The American Presidency.",
        "description": "Regions, routes, and spatial systems that situate The American Presidency beyond single named places."
    },
    {
        "slug": "american-presidency-legacy",
        "name": "The American Presidency legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The American Presidency.",
        "description": "How The American Presidency continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "american-presidency",
        "american-presidency-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "american-presidency",
        "american-presidency-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "american-presidency",
        "american-presidency-places",
        "contains",
        "The American Presidency places is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-events",
        "contains",
        "The American Presidency events is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-objects",
        "contains",
        "The American Presidency objects & artifacts is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-factions",
        "contains",
        "The American Presidency factions & groups is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-concepts",
        "contains",
        "The American Presidency concepts is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-eras",
        "contains",
        "The American Presidency eras is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-works",
        "contains",
        "The American Presidency works & media is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-symbols",
        "contains",
        "The American Presidency symbols is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-controversies",
        "contains",
        "The American Presidency controversies is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-sources",
        "contains",
        "The American Presidency sources is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-geography",
        "contains",
        "The American Presidency geography is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ],
    [
        "american-presidency",
        "american-presidency-legacy",
        "contains",
        "The American Presidency legacy is a primary trailhead under The American Presidency.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
