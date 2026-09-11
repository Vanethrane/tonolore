/**
 * Seed graph for Gloomhaven (board game).
 */

const entities = [
    {
        slug: "gloomhaven",
        name: "Gloomhaven",
        type: "topic",
        short_description: "Legacy dungeon campaign board game — classes, scenarios, and a sprawling tactical lore map.",
        description: "Legacy dungeon campaign board game — classes, scenarios, and a sprawling tactical lore map. This Ton-o-Lore subject maps people, places, products, and ideas tied to Gloomhaven so readers can follow long-tail connections across the board game hobby."
    },
    {
        slug: "gloomhaven-rules",
        name: "Gloomhaven rules & formats",
        type: "topic",
        short_description: "How Gloomhaven is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Gloomhaven."
    },
    {
        slug: "gloomhaven-setting",
        name: "Gloomhaven setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Gloomhaven.",
        description:
            "The narrative frame around Gloomhaven — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "gloomhaven",
        "gloomhaven-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "gloomhaven",
        "gloomhaven-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
