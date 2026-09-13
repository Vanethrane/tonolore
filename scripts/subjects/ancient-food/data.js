/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ancient-food",
        "name": "Ancient food & culinary history",
        "type": "topic",
        "short_description": "Dishes, ingredients, origins, civilizations, recipes, and the trade routes that moved taste across antiquity.",
        "description": "Dishes, ingredients, origins, civilizations, recipes, and the trade routes that moved taste across antiquity. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ancient food & culinary history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "ancient-food-figures",
        "name": "Ancient food & culinary history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ancient food & culinary history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ancient food & culinary history."
    },
    {
        "slug": "ancient-food-world",
        "name": "Ancient food & culinary history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ancient food & culinary history.",
        "description": "Geography, institutions, and periodization that give Ancient food & culinary history its encyclopedia shape."
    },
    {
        "slug": "ancient-food-places",
        "name": "Ancient food & culinary history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ancient food & culinary history.",
        "description": "Places, regions, and built sites that give Ancient food & culinary history its map — where events and figures concentrate."
    },
    {
        "slug": "ancient-food-events",
        "name": "Ancient food & culinary history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ancient food & culinary history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ancient food & culinary history timeline."
    },
    {
        "slug": "ancient-food-objects",
        "name": "Ancient food & culinary history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ancient food & culinary history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ancient food & culinary history."
    },
    {
        "slug": "ancient-food-factions",
        "name": "Ancient food & culinary history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ancient food & culinary history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ancient food & culinary history."
    },
    {
        "slug": "ancient-food-concepts",
        "name": "Ancient food & culinary history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ancient food & culinary history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ancient food & culinary history readable as a lore graph."
    },
    {
        "slug": "ancient-food-eras",
        "name": "Ancient food & culinary history eras",
        "type": "event",
        "short_description": "Periodization for Ancient food & culinary history.",
        "description": "Named eras and phases that help readers track how Ancient food & culinary history changes across time."
    },
    {
        "slug": "ancient-food-works",
        "name": "Ancient food & culinary history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ancient food & culinary history.",
        "description": "Primary works and adaptations through which most audiences encounter Ancient food & culinary history."
    },
    {
        "slug": "ancient-food-symbols",
        "name": "Ancient food & culinary history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ancient food & culinary history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ancient food & culinary history."
    },
    {
        "slug": "ancient-food-controversies",
        "name": "Ancient food & culinary history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ancient food & culinary history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ancient food & culinary history argumentative."
    },
    {
        "slug": "ancient-food-sources",
        "name": "Ancient food & culinary history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ancient food & culinary history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ancient food & culinary history."
    },
    {
        "slug": "ancient-food-geography",
        "name": "Ancient food & culinary history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ancient food & culinary history.",
        "description": "Regions, routes, and spatial systems that situate Ancient food & culinary history beyond single named places."
    },
    {
        "slug": "ancient-food-legacy",
        "name": "Ancient food & culinary history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ancient food & culinary history.",
        "description": "How Ancient food & culinary history continues — revivals, adaptations, scholarship, and cultural memory."
    }
];

const relationships = [
    [
        "ancient-food",
        "ancient-food-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ancient-food",
        "ancient-food-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ancient-food",
        "ancient-food-places",
        "contains",
        "Ancient food & culinary history places is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-events",
        "contains",
        "Ancient food & culinary history events is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-objects",
        "contains",
        "Ancient food & culinary history objects & artifacts is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-factions",
        "contains",
        "Ancient food & culinary history factions & groups is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-concepts",
        "contains",
        "Ancient food & culinary history concepts is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-eras",
        "contains",
        "Ancient food & culinary history eras is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-works",
        "contains",
        "Ancient food & culinary history works & media is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-symbols",
        "contains",
        "Ancient food & culinary history symbols is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-controversies",
        "contains",
        "Ancient food & culinary history controversies is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-sources",
        "contains",
        "Ancient food & culinary history sources is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-geography",
        "contains",
        "Ancient food & culinary history geography is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ],
    [
        "ancient-food",
        "ancient-food-legacy",
        "contains",
        "Ancient food & culinary history legacy is a primary trailhead under Ancient food & culinary history.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
