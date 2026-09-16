/**
 * Seed graph for Peanuts (Comics & manga).
 */

const entities = [
    {
        slug: "peanuts-comics",
        name: "Peanuts",
        type: "topic",
        short_description: "Charlie Brown, Snoopy, and the melancholy comedy that defined mid-century newspaper comics.",
        description: "Charlie Brown, Snoopy, and the melancholy comedy that defined mid-century newspaper comics. This Ton-o-Lore subject maps people, places, events, and ideas tied to Peanuts so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "peanuts-comics-figures",
        name: "Peanuts figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Peanuts.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Peanuts."
    },
    {
        slug: "peanuts-comics-world",
        name: "Peanuts world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Peanuts.",
        description:
            "Geography, institutions, and periodization that give Peanuts its encyclopedia shape."
    }
];

const relationships = [
    [
        "peanuts-comics",
        "peanuts-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "peanuts-comics",
        "peanuts-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
