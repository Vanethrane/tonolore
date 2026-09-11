/**
 * Seed graph for Egyptian mythology (Mythology).
 */

const entities = [
    {
        slug: "egyptian-mythology",
        name: "Egyptian mythology",
        type: "topic",
        short_description: "Netjeru, afterlife courts, and Nile cosmology that keep returning in fiction and ritual study.",
        description: "Netjeru, afterlife courts, and Nile cosmology that keep returning in fiction and ritual study. This Ton-o-Lore subject maps people, places, events, and ideas tied to Egyptian mythology so readers can follow long-tail connections across mythology."
    },
    {
        slug: "egyptian-mythology-figures",
        name: "Egyptian mythology figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Egyptian mythology.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Egyptian mythology."
    },
    {
        slug: "egyptian-mythology-world",
        name: "Egyptian mythology world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Egyptian mythology.",
        description:
            "Geography, institutions, and periodization that give Egyptian mythology its encyclopedia shape."
    }
];

const relationships = [
    [
        "egyptian-mythology",
        "egyptian-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "egyptian-mythology",
        "egyptian-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
