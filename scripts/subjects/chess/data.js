/**
 * Seed graph for Chess (board game).
 */

const entities = [
    {
        slug: "chess",
        name: "Chess",
        type: "topic",
        short_description: "The classic abstract board game — openings, endgames, and centuries of competitive lore.",
        description: "The classic abstract board game — openings, endgames, and centuries of competitive lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Chess so readers can follow long-tail connections across the board game hobby."
    },
    {
        slug: "chess-rules",
        name: "Chess rules & formats",
        type: "topic",
        short_description: "How Chess is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Chess."
    },
    {
        slug: "chess-setting",
        name: "Chess setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Chess.",
        description:
            "The narrative frame around Chess — factions, places, and story hooks that make the table feel like a world."
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
    ]
];

module.exports = { entities, relationships };
