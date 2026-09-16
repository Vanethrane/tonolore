/**
 * Seed graph for LEGO (Toys & collectibles).
 */

const entities = [
    {
        slug: "lego",
        name: "LEGO",
        type: "topic",
        short_description: "Brick systems, themes, and licensed worlds built from modular plastic canon.",
        description: "Brick systems, themes, and licensed worlds built from modular plastic canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to LEGO so readers can follow long-tail connections across toys & collectibles."
    },
    {
        slug: "lego-figures",
        name: "LEGO figures",
        type: "topic",
        short_description: "People, characters, and named forces central to LEGO.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring LEGO."
    },
    {
        slug: "lego-world",
        name: "LEGO world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame LEGO.",
        description:
            "Geography, institutions, and periodization that give LEGO its encyclopedia shape."
    }
];

const relationships = [
    [
        "lego",
        "lego-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lego",
        "lego-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
