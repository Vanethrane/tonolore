/**
 * Seed graph for Flesh and Blood (card game).
 */

const entities = [
    {
        slug: "flesh-and-blood",
        name: "Flesh and Blood",
        type: "topic",
        short_description: "Hero-class constructed play — Rathe, weapons, and living-card-game style storytelling.",
        description: "Hero-class constructed play — Rathe, weapons, and living-card-game style storytelling. This Ton-o-Lore subject maps people, places, products, and ideas tied to Flesh and Blood so readers can follow long-tail connections across the card game hobby."
    },
    {
        slug: "flesh-and-blood-rules",
        name: "Flesh and Blood rules & formats",
        type: "topic",
        short_description: "How Flesh and Blood is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Flesh and Blood."
    },
    {
        slug: "flesh-and-blood-setting",
        name: "Flesh and Blood setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Flesh and Blood.",
        description:
            "The narrative frame around Flesh and Blood — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "flesh-and-blood",
        "flesh-and-blood-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "flesh-and-blood",
        "flesh-and-blood-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
