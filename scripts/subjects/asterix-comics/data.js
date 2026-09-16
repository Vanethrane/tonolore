/**
 * Seed graph for Asterix (Comics & manga).
 */

const entities = [
    {
        slug: "asterix-comics",
        name: "Asterix",
        type: "topic",
        short_description: "Gallic village humor, Roman satire, and the Franco-Belgian album tradition of Asterix and Obelix.",
        description: "Gallic village humor, Roman satire, and the Franco-Belgian album tradition of Asterix and Obelix. This Ton-o-Lore subject maps people, places, events, and ideas tied to Asterix so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "asterix-comics-figures",
        name: "Asterix figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Asterix.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Asterix."
    },
    {
        slug: "asterix-comics-world",
        name: "Asterix world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Asterix.",
        description:
            "Geography, institutions, and periodization that give Asterix its encyclopedia shape."
    }
];

const relationships = [
    [
        "asterix-comics",
        "asterix-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "asterix-comics",
        "asterix-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
