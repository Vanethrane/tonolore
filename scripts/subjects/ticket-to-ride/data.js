/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ticket-to-ride",
        "name": "Ticket to Ride",
        "type": "topic",
        "short_description": "Train-route claiming across map editions — tickets, locomotives, and destination lore.",
        "description": "Train-route claiming across map editions — tickets, locomotives, and destination lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Ticket to Ride so readers can follow long-tail connections across the board game hobby."
    },
    {
        "slug": "ticket-to-ride-rules",
        "name": "Ticket to Ride rules & formats",
        "type": "topic",
        "short_description": "How Ticket to Ride is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Ticket to Ride."
    },
    {
        "slug": "ticket-to-ride-setting",
        "name": "Ticket to Ride setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Ticket to Ride.",
        "description": "The narrative frame around Ticket to Ride — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "ticket-to-ride-figures",
        "name": "Ticket to Ride figures",
        "type": "topic",
        "short_description": "People and named forces central to Ticket to Ride.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Ticket to Ride."
    },
    {
        "slug": "ticket-to-ride-places",
        "name": "Ticket to Ride places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ticket to Ride.",
        "description": "Places, regions, and built sites that give Ticket to Ride its map — where events and figures concentrate."
    },
    {
        "slug": "ticket-to-ride-events",
        "name": "Ticket to Ride events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ticket to Ride.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ticket to Ride timeline."
    },
    {
        "slug": "ticket-to-ride-objects",
        "name": "Ticket to Ride objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ticket to Ride.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ticket to Ride."
    },
    {
        "slug": "ticket-to-ride-factions",
        "name": "Ticket to Ride factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ticket to Ride.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ticket to Ride."
    },
    {
        "slug": "ticket-to-ride-concepts",
        "name": "Ticket to Ride concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ticket to Ride.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ticket to Ride readable as a lore graph."
    },
    {
        "slug": "ticket-to-ride-eras",
        "name": "Ticket to Ride eras",
        "type": "event",
        "short_description": "Periodization for Ticket to Ride.",
        "description": "Named eras and phases that help readers track how Ticket to Ride changes across time."
    },
    {
        "slug": "ticket-to-ride-works",
        "name": "Ticket to Ride works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ticket to Ride.",
        "description": "Primary works and adaptations through which most audiences encounter Ticket to Ride."
    },
    {
        "slug": "ticket-to-ride-symbols",
        "name": "Ticket to Ride symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ticket to Ride.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ticket to Ride."
    },
    {
        "slug": "ticket-to-ride-controversies",
        "name": "Ticket to Ride controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ticket to Ride.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ticket to Ride argumentative."
    },
    {
        "slug": "ticket-to-ride-sources",
        "name": "Ticket to Ride sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ticket to Ride.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ticket to Ride."
    },
    {
        "slug": "ticket-to-ride-geography",
        "name": "Ticket to Ride geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ticket to Ride.",
        "description": "Regions, routes, and spatial systems that situate Ticket to Ride beyond single named places."
    }
];

const relationships = [
    [
        "ticket-to-ride",
        "ticket-to-ride-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-figures",
        "contains",
        "Ticket to Ride figures is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-places",
        "contains",
        "Ticket to Ride places is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-events",
        "contains",
        "Ticket to Ride events is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-objects",
        "contains",
        "Ticket to Ride objects & artifacts is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-factions",
        "contains",
        "Ticket to Ride factions & groups is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-concepts",
        "contains",
        "Ticket to Ride concepts is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-eras",
        "contains",
        "Ticket to Ride eras is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-works",
        "contains",
        "Ticket to Ride works & media is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-symbols",
        "contains",
        "Ticket to Ride symbols is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-controversies",
        "contains",
        "Ticket to Ride controversies is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-sources",
        "contains",
        "Ticket to Ride sources is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ],
    [
        "ticket-to-ride",
        "ticket-to-ride-geography",
        "contains",
        "Ticket to Ride geography is a primary trailhead under Ticket to Ride.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
