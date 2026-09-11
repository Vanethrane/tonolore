/**
 * Seed graph for Wingspan (board game).
 */

const entities = [
    {
        slug: "wingspan",
        name: "Wingspan",
        type: "topic",
        short_description: "Engine-building bird sanctuary — habitats, food chains, and naturalist card lore.",
        description: "Engine-building bird sanctuary — habitats, food chains, and naturalist card lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Wingspan so readers can follow long-tail connections across the board game hobby."
    },
    {
        slug: "wingspan-rules",
        name: "Wingspan rules & formats",
        type: "topic",
        short_description: "How Wingspan is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Wingspan."
    },
    {
        slug: "wingspan-setting",
        name: "Wingspan setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Wingspan.",
        description:
            "The narrative frame around Wingspan — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "wingspan",
        "wingspan-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "wingspan",
        "wingspan-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
