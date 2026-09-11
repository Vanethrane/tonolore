/**
 * Seed graph for WWE (Pro wrestling).
 */

const entities = [
    {
        slug: "wwe",
        name: "WWE",
        type: "topic",
        short_description: "Sports entertainment's global promotion — titles, brands, and decades of character lore.",
        description: "Sports entertainment's global promotion — titles, brands, and decades of character lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to WWE so readers can follow long-tail connections across pro wrestling."
    },
    {
        slug: "wwe-figures",
        name: "WWE figures",
        type: "topic",
        short_description: "People, characters, and named forces central to WWE.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring WWE."
    },
    {
        slug: "wwe-world",
        name: "WWE world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame WWE.",
        description:
            "Geography, institutions, and periodization that give WWE its encyclopedia shape."
    }
];

const relationships = [
    [
        "wwe",
        "wwe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wwe",
        "wwe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
