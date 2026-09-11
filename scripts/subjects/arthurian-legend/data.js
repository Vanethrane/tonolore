/**
 * Seed graph for Arthurian legend (Folklore & legend).
 */

const entities = [
    {
        slug: "arthurian-legend",
        name: "Arthurian legend",
        type: "topic",
        short_description: "Camelot, the Round Table, and Grail quests across medieval and modern retellings.",
        description: "Camelot, the Round Table, and Grail quests across medieval and modern retellings. This Ton-o-Lore subject maps people, places, events, and ideas tied to Arthurian legend so readers can follow long-tail connections across folklore & legend."
    },
    {
        slug: "arthurian-legend-figures",
        name: "Arthurian legend figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Arthurian legend.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Arthurian legend."
    },
    {
        slug: "arthurian-legend-world",
        name: "Arthurian legend world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Arthurian legend.",
        description:
            "Geography, institutions, and periodization that give Arthurian legend its encyclopedia shape."
    }
];

const relationships = [
    [
        "arthurian-legend",
        "arthurian-legend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "arthurian-legend",
        "arthurian-legend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
