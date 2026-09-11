/**
 * Seed graph for Pandemic (board game).
 */

const entities = [
    {
        slug: "pandemic",
        name: "Pandemic",
        type: "topic",
        short_description: "Co-op disease control on a world map — roles, outbreaks, and scenario expansions.",
        description: "Co-op disease control on a world map — roles, outbreaks, and scenario expansions. This Ton-o-Lore subject maps people, places, products, and ideas tied to Pandemic so readers can follow long-tail connections across the board game hobby."
    },
    {
        slug: "pandemic-rules",
        name: "Pandemic rules & formats",
        type: "topic",
        short_description: "How Pandemic is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Pandemic."
    },
    {
        slug: "pandemic-setting",
        name: "Pandemic setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Pandemic.",
        description:
            "The narrative frame around Pandemic — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "pandemic",
        "pandemic-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "pandemic",
        "pandemic-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
