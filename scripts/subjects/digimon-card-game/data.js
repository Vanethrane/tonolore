/**
 * Seed graph for Digimon Card Game (card game).
 */

const entities = [
    {
        slug: "digimon-card-game",
        name: "Digimon Card Game",
        type: "topic",
        short_description: "Digimon's Bandai TCG — digivolution lines, colors, and Digital World mythology on cards.",
        description: "Digimon's Bandai TCG — digivolution lines, colors, and Digital World mythology on cards. This Ton-o-Lore subject maps people, places, products, and ideas tied to Digimon Card Game so readers can follow long-tail connections across the card game hobby."
    },
    {
        slug: "digimon-card-game-rules",
        name: "Digimon Card Game rules & formats",
        type: "topic",
        short_description: "How Digimon Card Game is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Digimon Card Game."
    },
    {
        slug: "digimon-card-game-setting",
        name: "Digimon Card Game setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Digimon Card Game.",
        description:
            "The narrative frame around Digimon Card Game — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "digimon-card-game",
        "digimon-card-game-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "digimon-card-game",
        "digimon-card-game-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
