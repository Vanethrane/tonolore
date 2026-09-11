/**
 * Seed graph for Norse mythology (Mythology).
 */

const entities = [
    {
        slug: "norse-mythology",
        name: "Norse mythology",
        type: "topic",
        short_description: "Aesir, giants, and Ragnarök cycles mapped from the Eddas into modern pop myth.",
        description: "Aesir, giants, and Ragnarök cycles mapped from the Eddas into modern pop myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Norse mythology so readers can follow long-tail connections across mythology."
    },
    {
        slug: "norse-mythology-figures",
        name: "Norse mythology figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Norse mythology.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Norse mythology."
    },
    {
        slug: "norse-mythology-world",
        name: "Norse mythology world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Norse mythology.",
        description:
            "Geography, institutions, and periodization that give Norse mythology its encyclopedia shape."
    }
];

const relationships = [
    [
        "norse-mythology",
        "norse-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "norse-mythology",
        "norse-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
