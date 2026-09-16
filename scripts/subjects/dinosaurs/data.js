/**
 * Seed graph for Dinosaurs (Science & nature).
 */

const entities = [
    {
        slug: "dinosaurs",
        name: "Dinosaurs",
        type: "topic",
        short_description: "Clades, formations, and discoveries that keep rewriting deep-time life.",
        description: "Clades, formations, and discoveries that keep rewriting deep-time life. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dinosaurs so readers can follow long-tail connections across science & nature."
    },
    {
        slug: "dinosaurs-figures",
        name: "Dinosaurs figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Dinosaurs.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dinosaurs."
    },
    {
        slug: "dinosaurs-world",
        name: "Dinosaurs world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Dinosaurs.",
        description:
            "Geography, institutions, and periodization that give Dinosaurs its encyclopedia shape."
    }
];

const relationships = [
    [
        "dinosaurs",
        "dinosaurs-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dinosaurs",
        "dinosaurs-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
