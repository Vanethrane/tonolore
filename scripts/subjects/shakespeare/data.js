/**
 * Seed graph for Shakespeare (Theater & musicals).
 */

const entities = [
    {
        slug: "shakespeare",
        name: "Shakespeare",
        type: "topic",
        short_description: "Plays, characters, and performance traditions around William Shakespeare's canon.",
        description: "Plays, characters, and performance traditions around William Shakespeare's canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Shakespeare so readers can follow long-tail connections across theater & musicals."
    },
    {
        slug: "shakespeare-figures",
        name: "Shakespeare figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Shakespeare.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Shakespeare."
    },
    {
        slug: "shakespeare-world",
        name: "Shakespeare world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Shakespeare.",
        description:
            "Geography, institutions, and periodization that give Shakespeare its encyclopedia shape."
    }
];

const relationships = [
    [
        "shakespeare",
        "shakespeare-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "shakespeare",
        "shakespeare-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
