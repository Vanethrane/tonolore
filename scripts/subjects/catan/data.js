/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "catan",
        "name": "Catan",
        "type": "topic",
        "short_description": "Settlers of Catan — hexes, resources, and the modern gateway board-game phenomenon.",
        "description": "Settlers of Catan — hexes, resources, and the modern gateway board-game phenomenon. This Ton-o-Lore subject maps people, places, products, and ideas tied to Catan so readers can follow long-tail connections across the board game hobby."
    },
    {
        "slug": "catan-rules",
        "name": "Catan rules & formats",
        "type": "topic",
        "short_description": "How Catan is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Catan."
    },
    {
        "slug": "catan-setting",
        "name": "Catan setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Catan.",
        "description": "The narrative frame around Catan — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "catan-figures",
        "name": "Catan figures",
        "type": "topic",
        "short_description": "People and named forces central to Catan.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Catan."
    },
    {
        "slug": "catan-places",
        "name": "Catan places",
        "type": "place",
        "short_description": "Locations and geographies that frame Catan.",
        "description": "Places, regions, and built sites that give Catan its map — where events and figures concentrate."
    },
    {
        "slug": "catan-events",
        "name": "Catan events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Catan.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Catan timeline."
    },
    {
        "slug": "catan-objects",
        "name": "Catan objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Catan.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Catan."
    },
    {
        "slug": "catan-factions",
        "name": "Catan factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Catan.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Catan."
    },
    {
        "slug": "catan-concepts",
        "name": "Catan concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Catan.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Catan readable as a lore graph."
    },
    {
        "slug": "catan-eras",
        "name": "Catan eras",
        "type": "event",
        "short_description": "Periodization for Catan.",
        "description": "Named eras and phases that help readers track how Catan changes across time."
    },
    {
        "slug": "catan-works",
        "name": "Catan works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Catan.",
        "description": "Primary works and adaptations through which most audiences encounter Catan."
    },
    {
        "slug": "catan-symbols",
        "name": "Catan symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Catan.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Catan."
    },
    {
        "slug": "catan-controversies",
        "name": "Catan controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Catan.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Catan argumentative."
    },
    {
        "slug": "catan-sources",
        "name": "Catan sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Catan.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Catan."
    },
    {
        "slug": "catan-geography",
        "name": "Catan geography",
        "type": "place",
        "short_description": "Broader geographic framing for Catan.",
        "description": "Regions, routes, and spatial systems that situate Catan beyond single named places."
    }
];

const relationships = [
    [
        "catan",
        "catan-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "catan",
        "catan-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "catan",
        "catan-figures",
        "contains",
        "Catan figures is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-places",
        "contains",
        "Catan places is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-events",
        "contains",
        "Catan events is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-objects",
        "contains",
        "Catan objects & artifacts is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-factions",
        "contains",
        "Catan factions & groups is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-concepts",
        "contains",
        "Catan concepts is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-eras",
        "contains",
        "Catan eras is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-works",
        "contains",
        "Catan works & media is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-symbols",
        "contains",
        "Catan symbols is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-controversies",
        "contains",
        "Catan controversies is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-sources",
        "contains",
        "Catan sources is a primary trailhead under Catan.",
        0.88,
        0.82
    ],
    [
        "catan",
        "catan-geography",
        "contains",
        "Catan geography is a primary trailhead under Catan.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
