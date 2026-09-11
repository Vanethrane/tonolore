/**
 * Seed graph for G.I. Joe (Toys & collectibles).
 */

const entities = [
    {
        slug: "gi-joe",
        name: "G.I. Joe",
        type: "topic",
        short_description: "A Real American Hero — factions, file cards, and toy-to-cartoon lore.",
        description: "A Real American Hero — factions, file cards, and toy-to-cartoon lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to G.I. Joe so readers can follow long-tail connections across toys & collectibles."
    },
    {
        slug: "gi-joe-figures",
        name: "G.I. Joe figures",
        type: "topic",
        short_description: "People, characters, and named forces central to G.I. Joe.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring G.I. Joe."
    },
    {
        slug: "gi-joe-world",
        name: "G.I. Joe world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame G.I. Joe.",
        description:
            "Geography, institutions, and periodization that give G.I. Joe its encyclopedia shape."
    }
];

const relationships = [
    [
        "gi-joe",
        "gi-joe-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gi-joe",
        "gi-joe-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
