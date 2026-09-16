/**
 * Seed graph for The Adventures of Tintin (Comics & manga).
 */

const entities = [
    {
        slug: "tintin-comics",
        name: "The Adventures of Tintin",
        type: "topic",
        short_description: "Clear-line reporting adventures, Herge’s cast, and the classic bande dessinée of Tintin and Snowy.",
        description: "Clear-line reporting adventures, Herge’s cast, and the classic bande dessinée of Tintin and Snowy. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Adventures of Tintin so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "tintin-comics-figures",
        name: "The Adventures of Tintin figures",
        type: "topic",
        short_description: "People, characters, and named forces central to The Adventures of Tintin.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Adventures of Tintin."
    },
    {
        slug: "tintin-comics-world",
        name: "The Adventures of Tintin world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame The Adventures of Tintin.",
        description:
            "Geography, institutions, and periodization that give The Adventures of Tintin its encyclopedia shape."
    }
];

const relationships = [
    [
        "tintin-comics",
        "tintin-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tintin-comics",
        "tintin-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
