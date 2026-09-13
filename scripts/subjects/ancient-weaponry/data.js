/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ancient-weaponry",
        "name": "Ancient weapons",
        "type": "topic",
        "short_description": "Individual weapons, cultures, battles, metallurgy, finds, and the makers who forged pre-modern arms.",
        "description": "Individual weapons, cultures, battles, metallurgy, finds, and the makers who forged pre-modern arms. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ancient weapons so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "ancient-weaponry-figures",
        "name": "Ancient weapons figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ancient weapons.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-world",
        "name": "Ancient weapons world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ancient weapons.",
        "description": "Geography, institutions, and periodization that give Ancient weapons its encyclopedia shape."
    },
    {
        "slug": "ancient-weaponry-places",
        "name": "Ancient weapons places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ancient weapons.",
        "description": "Places, regions, and built sites that give Ancient weapons its map — where events and figures concentrate."
    },
    {
        "slug": "ancient-weaponry-events",
        "name": "Ancient weapons events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ancient weapons.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ancient weapons timeline."
    },
    {
        "slug": "ancient-weaponry-objects",
        "name": "Ancient weapons objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ancient weapons.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-factions",
        "name": "Ancient weapons factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ancient weapons.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-concepts",
        "name": "Ancient weapons concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ancient weapons.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ancient weapons readable as a lore graph."
    },
    {
        "slug": "ancient-weaponry-eras",
        "name": "Ancient weapons eras",
        "type": "event",
        "short_description": "Periodization for Ancient weapons.",
        "description": "Named eras and phases that help readers track how Ancient weapons changes across time."
    },
    {
        "slug": "ancient-weaponry-works",
        "name": "Ancient weapons works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ancient weapons.",
        "description": "Primary works and adaptations through which most audiences encounter Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-symbols",
        "name": "Ancient weapons symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ancient weapons.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-controversies",
        "name": "Ancient weapons controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ancient weapons.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ancient weapons argumentative."
    },
    {
        "slug": "ancient-weaponry-sources",
        "name": "Ancient weapons sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ancient weapons.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ancient weapons."
    },
    {
        "slug": "ancient-weaponry-geography",
        "name": "Ancient weapons geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ancient weapons.",
        "description": "Regions, routes, and spatial systems that situate Ancient weapons beyond single named places."
    },
    {
        "slug": "ancient-weaponry-legacy",
        "name": "Ancient weapons legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ancient weapons.",
        "description": "How Ancient weapons continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "ancient-weaponry",
        "ancient-weaponry-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-places",
        "contains",
        "Ancient weapons places is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-events",
        "contains",
        "Ancient weapons events is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-objects",
        "contains",
        "Ancient weapons objects & artifacts is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-factions",
        "contains",
        "Ancient weapons factions & groups is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-concepts",
        "contains",
        "Ancient weapons concepts is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-eras",
        "contains",
        "Ancient weapons eras is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-works",
        "contains",
        "Ancient weapons works & media is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-symbols",
        "contains",
        "Ancient weapons symbols is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-controversies",
        "contains",
        "Ancient weapons controversies is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-sources",
        "contains",
        "Ancient weapons sources is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-geography",
        "contains",
        "Ancient weapons geography is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ],
    [
        "ancient-weaponry",
        "ancient-weaponry-legacy",
        "contains",
        "Ancient weapons legacy is a primary trailhead under Ancient weapons.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
