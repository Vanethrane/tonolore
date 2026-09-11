/**
 * Seed graph for Catan (board game).
 */

const entities = [
    {
        slug: "catan",
        name: "Catan",
        type: "topic",
        short_description: "Settlers of Catan — hexes, resources, and the modern gateway board-game phenomenon.",
        description: "Settlers of Catan — hexes, resources, and the modern gateway board-game phenomenon. This Ton-o-Lore subject maps people, places, products, and ideas tied to Catan so readers can follow long-tail connections across the board game hobby."
    },
    {
        slug: "catan-rules",
        name: "Catan rules & formats",
        type: "topic",
        short_description: "How Catan is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Catan."
    },
    {
        slug: "catan-setting",
        name: "Catan setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Catan.",
        description:
            "The narrative frame around Catan — factions, places, and story hooks that make the table feel like a world."
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
    ]
];

module.exports = { entities, relationships };
