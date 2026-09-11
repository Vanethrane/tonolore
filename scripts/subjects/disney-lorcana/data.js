/**
 * Seed graph for Disney Lorcana (card game).
 */

const entities = [
    {
        slug: "disney-lorcana",
        name: "Disney Lorcana",
        type: "topic",
        short_description: "Illumineers, inks, and Disney storybook lore remixed as a collectible card game.",
        description: "Illumineers, inks, and Disney storybook lore remixed as a collectible card game. This Ton-o-Lore subject maps people, places, products, and ideas tied to Disney Lorcana so readers can follow long-tail connections across the card game hobby."
    },
    {
        slug: "disney-lorcana-rules",
        name: "Disney Lorcana rules & formats",
        type: "topic",
        short_description: "How Disney Lorcana is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Disney Lorcana."
    },
    {
        slug: "disney-lorcana-setting",
        name: "Disney Lorcana setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Disney Lorcana.",
        description:
            "The narrative frame around Disney Lorcana — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "disney-lorcana",
        "disney-lorcana-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "disney-lorcana",
        "disney-lorcana-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
