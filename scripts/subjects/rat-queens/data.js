/**
 * Seed graph for Rat Queens (Comics & manga).
 */

const entities = [
    {
        slug: "rat-queens",
        name: "Rat Queens",
        type: "topic",
        short_description: "Party of adventurers, tavern chaos, and the Image fantasy that mixes dungeon grit with hangout comedy.",
        description: "Party of adventurers, tavern chaos, and the Image fantasy that mixes dungeon grit with hangout comedy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Rat Queens so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "rat-queens-figures",
        name: "Rat Queens figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Rat Queens.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Rat Queens."
    },
    {
        slug: "rat-queens-world",
        name: "Rat Queens world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Rat Queens.",
        description:
            "Geography, institutions, and periodization that give Rat Queens its encyclopedia shape."
    }
];

const relationships = [
    [
        "rat-queens",
        "rat-queens-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "rat-queens",
        "rat-queens-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
