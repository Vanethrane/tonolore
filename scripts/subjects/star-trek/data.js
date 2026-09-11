/**
 * Seed graph for Star Trek (Science fiction).
 */

const entities = [
    {
        slug: "star-trek",
        name: "Star Trek",
        type: "topic",
        short_description: "Federation ideals, ships, and series that defined optimistic space opera on screen.",
        description: "Federation ideals, ships, and series that defined optimistic space opera on screen. This Ton-o-Lore subject maps people, places, events, and ideas tied to Star Trek so readers can follow long-tail connections across science fiction."
    },
    {
        slug: "star-trek-figures",
        name: "Star Trek figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Star Trek.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Star Trek."
    },
    {
        slug: "star-trek-world",
        name: "Star Trek world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Star Trek.",
        description:
            "Geography, institutions, and periodization that give Star Trek its encyclopedia shape."
    }
];

const relationships = [
    [
        "star-trek",
        "star-trek-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "star-trek",
        "star-trek-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
