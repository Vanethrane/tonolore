/**
 * Seed graph for Meme history (Internet culture).
 */

const entities = [
    {
        slug: "meme-history",
        name: "Meme history",
        type: "topic",
        short_description: "Image macros, copypasta, and viral forms tracked as vernacular folklore.",
        description: "Image macros, copypasta, and viral forms tracked as vernacular folklore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Meme history so readers can follow long-tail connections across internet culture."
    },
    {
        slug: "meme-history-figures",
        name: "Meme history figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Meme history.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Meme history."
    },
    {
        slug: "meme-history-world",
        name: "Meme history world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Meme history.",
        description:
            "Geography, institutions, and periodization that give Meme history its encyclopedia shape."
    }
];

const relationships = [
    [
        "meme-history",
        "meme-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "meme-history",
        "meme-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
