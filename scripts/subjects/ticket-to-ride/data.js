/**
 * Seed graph for Ticket to Ride (board game).
 */

const entities = [
    {
        slug: "ticket-to-ride",
        name: "Ticket to Ride",
        type: "topic",
        short_description: "Train-route claiming across map editions — tickets, locomotives, and destination lore.",
        description: "Train-route claiming across map editions — tickets, locomotives, and destination lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Ticket to Ride so readers can follow long-tail connections across the board game hobby."
    },
    {
        slug: "ticket-to-ride-rules",
        name: "Ticket to Ride rules & formats",
        type: "topic",
        short_description: "How Ticket to Ride is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Ticket to Ride."
    },
    {
        slug: "ticket-to-ride-setting",
        name: "Ticket to Ride setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Ticket to Ride.",
        description:
            "The narrative frame around Ticket to Ride — factions, places, and story hooks that make the table feel like a world."
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
    ]
];

module.exports = { entities, relationships };
