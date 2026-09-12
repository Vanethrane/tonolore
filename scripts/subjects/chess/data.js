/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chess",
        "name": "Chess",
        "type": "topic",
        "short_description": "The classic abstract board game — openings, endgames, and centuries of competitive lore.",
        "description": "The classic abstract board game — openings, endgames, and centuries of competitive lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Chess so readers can follow long-tail connections across the board game hobby."
    },
    {
        "slug": "chess-rules",
        "name": "Chess rules & formats",
        "type": "topic",
        "short_description": "How Chess is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Chess."
    },
    {
        "slug": "chess-setting",
        "name": "Chess setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Chess.",
        "description": "The narrative frame around Chess — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "chess-figures",
        "name": "Chess figures",
        "type": "topic",
        "short_description": "People and named forces central to Chess.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Chess."
    },
    {
        "slug": "chess-places",
        "name": "Chess places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chess.",
        "description": "Places, regions, and built sites that give Chess its map — where events and figures concentrate."
    },
    {
        "slug": "chess-events",
        "name": "Chess events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chess.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chess timeline."
    },
    {
        "slug": "chess-objects",
        "name": "Chess objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chess.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chess."
    },
    {
        "slug": "chess-factions",
        "name": "Chess factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chess.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chess."
    },
    {
        "slug": "chess-concepts",
        "name": "Chess concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chess.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chess readable as a lore graph."
    },
    {
        "slug": "chess-eras",
        "name": "Chess eras",
        "type": "event",
        "short_description": "Periodization for Chess.",
        "description": "Named eras and phases that help readers track how Chess changes across time."
    },
    {
        "slug": "chess-works",
        "name": "Chess works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chess.",
        "description": "Primary works and adaptations through which most audiences encounter Chess."
    },
    {
        "slug": "chess-symbols",
        "name": "Chess symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chess.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chess."
    },
    {
        "slug": "chess-controversies",
        "name": "Chess controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chess.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chess argumentative."
    },
    {
        "slug": "chess-sources",
        "name": "Chess sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chess.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chess."
    },
    {
        "slug": "chess-geography",
        "name": "Chess geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chess.",
        "description": "Regions, routes, and spatial systems that situate Chess beyond single named places."
    }
];

const relationships = [
    [
        "chess",
        "chess-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "chess",
        "chess-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "chess",
        "chess-figures",
        "contains",
        "Chess figures is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-places",
        "contains",
        "Chess places is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-events",
        "contains",
        "Chess events is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-objects",
        "contains",
        "Chess objects & artifacts is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-factions",
        "contains",
        "Chess factions & groups is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-concepts",
        "contains",
        "Chess concepts is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-eras",
        "contains",
        "Chess eras is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-works",
        "contains",
        "Chess works & media is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-symbols",
        "contains",
        "Chess symbols is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-controversies",
        "contains",
        "Chess controversies is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-sources",
        "contains",
        "Chess sources is a primary trailhead under Chess.",
        0.88,
        0.82
    ],
    [
        "chess",
        "chess-geography",
        "contains",
        "Chess geography is a primary trailhead under Chess.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
