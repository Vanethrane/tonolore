/**
 * Seed graph for Yu-Gi-Oh! (card game).
 */

const entities = [
    {
        slug: "yu-gi-oh",
        name: "Yu-Gi-Oh!",
        type: "topic",
        short_description: "Duel Monsters and the competitive TCG — archetypes, banlists, and anime-shadowed card lore.",
        description: "Duel Monsters and the competitive TCG — archetypes, banlists, and anime-shadowed card lore. This Ton-o-Lore subject maps people, places, products, and ideas tied to Yu-Gi-Oh! so readers can follow long-tail connections across the card game hobby."
    },
    {
        slug: "yu-gi-oh-rules",
        name: "Yu-Gi-Oh! rules & formats",
        type: "topic",
        short_description: "How Yu-Gi-Oh! is played — core loops and competitive or campaign formats.",
        description:
            "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Yu-Gi-Oh!."
    },
    {
        slug: "yu-gi-oh-setting",
        name: "Yu-Gi-Oh! setting & lore",
        type: "topic",
        short_description: "Fiction, theme, and worldbuilding that flavor Yu-Gi-Oh!.",
        description:
            "The narrative frame around Yu-Gi-Oh! — factions, places, and story hooks that make the table feel like a world."
    }
];

const relationships = [
    [
        "yu-gi-oh",
        "yu-gi-oh-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "yu-gi-oh",
        "yu-gi-oh-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
