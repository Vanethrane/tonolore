/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "skyscrapers",
        "name": "Skyscrapers",
        "type": "topic",
        "short_description": "Towers, architects, cities, height races, engineering feats, and the skyline lore of vertical cities.",
        "description": "Towers, architects, cities, height races, engineering feats, and the skyline lore of vertical cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to Skyscrapers so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "skyscrapers-figures",
        "name": "Skyscrapers figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Skyscrapers.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Skyscrapers."
    },
    {
        "slug": "skyscrapers-world",
        "name": "Skyscrapers world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Skyscrapers.",
        "description": "Geography, institutions, and periodization that give Skyscrapers its encyclopedia shape."
    },
    {
        "slug": "skyscrapers-places",
        "name": "Skyscrapers places",
        "type": "place",
        "short_description": "Locations and geographies that frame Skyscrapers.",
        "description": "Places, regions, and built sites that give Skyscrapers its map — where events and figures concentrate."
    },
    {
        "slug": "skyscrapers-events",
        "name": "Skyscrapers events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Skyscrapers.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Skyscrapers timeline."
    },
    {
        "slug": "skyscrapers-objects",
        "name": "Skyscrapers objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Skyscrapers.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Skyscrapers."
    },
    {
        "slug": "skyscrapers-factions",
        "name": "Skyscrapers factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Skyscrapers.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Skyscrapers."
    },
    {
        "slug": "skyscrapers-concepts",
        "name": "Skyscrapers concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Skyscrapers.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Skyscrapers readable as a lore graph."
    },
    {
        "slug": "skyscrapers-eras",
        "name": "Skyscrapers eras",
        "type": "event",
        "short_description": "Periodization for Skyscrapers.",
        "description": "Named eras and phases that help readers track how Skyscrapers changes across time."
    },
    {
        "slug": "skyscrapers-works",
        "name": "Skyscrapers works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Skyscrapers.",
        "description": "Primary works and adaptations through which most audiences encounter Skyscrapers."
    },
    {
        "slug": "skyscrapers-symbols",
        "name": "Skyscrapers symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Skyscrapers.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Skyscrapers."
    },
    {
        "slug": "skyscrapers-controversies",
        "name": "Skyscrapers controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Skyscrapers.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Skyscrapers argumentative."
    },
    {
        "slug": "skyscrapers-sources",
        "name": "Skyscrapers sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Skyscrapers.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Skyscrapers."
    },
    {
        "slug": "skyscrapers-geography",
        "name": "Skyscrapers geography",
        "type": "place",
        "short_description": "Broader geographic framing for Skyscrapers.",
        "description": "Regions, routes, and spatial systems that situate Skyscrapers beyond single named places."
    },
    {
        "slug": "skyscrapers-legacy",
        "name": "Skyscrapers legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Skyscrapers.",
        "description": "How Skyscrapers continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "skyscrapers",
        "skyscrapers-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "skyscrapers",
        "skyscrapers-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "skyscrapers",
        "skyscrapers-places",
        "contains",
        "Skyscrapers places is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-events",
        "contains",
        "Skyscrapers events is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-objects",
        "contains",
        "Skyscrapers objects & artifacts is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-factions",
        "contains",
        "Skyscrapers factions & groups is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-concepts",
        "contains",
        "Skyscrapers concepts is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-eras",
        "contains",
        "Skyscrapers eras is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-works",
        "contains",
        "Skyscrapers works & media is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-symbols",
        "contains",
        "Skyscrapers symbols is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-controversies",
        "contains",
        "Skyscrapers controversies is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-sources",
        "contains",
        "Skyscrapers sources is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-geography",
        "contains",
        "Skyscrapers geography is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ],
    [
        "skyscrapers",
        "skyscrapers-legacy",
        "contains",
        "Skyscrapers legacy is a primary trailhead under Skyscrapers.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
