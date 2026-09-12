/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "japanese-imperial-house",
        "name": "Japanese imperial house",
        "type": "topic",
        "short_description": "Emperors, eras, Shinto court ritual, and the world's longest continuous monarchy tradition.",
        "description": "Emperors, eras, Shinto court ritual, and the world's longest continuous monarchy tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Japanese imperial house so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "japanese-imperial-house-figures",
        "name": "Japanese imperial house figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Japanese imperial house.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Japanese imperial house."
    },
    {
        "slug": "japanese-imperial-house-world",
        "name": "Japanese imperial house world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Japanese imperial house.",
        "description": "Geography, institutions, and periodization that give Japanese imperial house its encyclopedia shape."
    },
    {
        "slug": "japanese-imperial-house-places",
        "name": "Japanese imperial house places",
        "type": "place",
        "short_description": "Locations and geographies that frame Japanese imperial house.",
        "description": "Places, regions, and built sites that give Japanese imperial house its map — where events and figures concentrate."
    },
    {
        "slug": "japanese-imperial-house-events",
        "name": "Japanese imperial house events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Japanese imperial house.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Japanese imperial house timeline."
    },
    {
        "slug": "japanese-imperial-house-objects",
        "name": "Japanese imperial house objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Japanese imperial house.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Japanese imperial house."
    },
    {
        "slug": "japanese-imperial-house-factions",
        "name": "Japanese imperial house factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Japanese imperial house.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Japanese imperial house."
    },
    {
        "slug": "japanese-imperial-house-concepts",
        "name": "Japanese imperial house concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Japanese imperial house.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Japanese imperial house readable as a lore graph."
    },
    {
        "slug": "japanese-imperial-house-eras",
        "name": "Japanese imperial house eras",
        "type": "event",
        "short_description": "Periodization for Japanese imperial house.",
        "description": "Named eras and phases that help readers track how Japanese imperial house changes across time."
    },
    {
        "slug": "japanese-imperial-house-works",
        "name": "Japanese imperial house works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Japanese imperial house.",
        "description": "Primary works and adaptations through which most audiences encounter Japanese imperial house."
    },
    {
        "slug": "japanese-imperial-house-symbols",
        "name": "Japanese imperial house symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Japanese imperial house.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Japanese imperial house."
    },
    {
        "slug": "japanese-imperial-house-controversies",
        "name": "Japanese imperial house controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Japanese imperial house.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Japanese imperial house argumentative."
    },
    {
        "slug": "japanese-imperial-house-sources",
        "name": "Japanese imperial house sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Japanese imperial house.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Japanese imperial house."
    },
    {
        "slug": "japanese-imperial-house-geography",
        "name": "Japanese imperial house geography",
        "type": "place",
        "short_description": "Broader geographic framing for Japanese imperial house.",
        "description": "Regions, routes, and spatial systems that situate Japanese imperial house beyond single named places."
    },
    {
        "slug": "japanese-imperial-house-legacy",
        "name": "Japanese imperial house legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Japanese imperial house.",
        "description": "How Japanese imperial house continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "japanese-imperial-house",
        "japanese-imperial-house-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-places",
        "contains",
        "Japanese imperial house places is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-events",
        "contains",
        "Japanese imperial house events is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-objects",
        "contains",
        "Japanese imperial house objects & artifacts is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-factions",
        "contains",
        "Japanese imperial house factions & groups is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-concepts",
        "contains",
        "Japanese imperial house concepts is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-eras",
        "contains",
        "Japanese imperial house eras is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-works",
        "contains",
        "Japanese imperial house works & media is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-symbols",
        "contains",
        "Japanese imperial house symbols is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-controversies",
        "contains",
        "Japanese imperial house controversies is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-sources",
        "contains",
        "Japanese imperial house sources is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-geography",
        "contains",
        "Japanese imperial house geography is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ],
    [
        "japanese-imperial-house",
        "japanese-imperial-house-legacy",
        "contains",
        "Japanese imperial house legacy is a primary trailhead under Japanese imperial house.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
