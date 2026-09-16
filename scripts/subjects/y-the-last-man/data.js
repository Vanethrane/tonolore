/**
 * Seed graph for Y: The Last Man (Comics & manga).
 */

const entities = [
    {
        slug: "y-the-last-man",
        name: "Y: The Last Man",
        type: "topic",
        short_description: "Last man alive premise, Yorick Brown, and Vaughan’s gender-apocalypse Vertigo saga.",
        description: "Last man alive premise, Yorick Brown, and Vaughan’s gender-apocalypse Vertigo saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to Y: The Last Man so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "y-the-last-man-figures",
        name: "Y: The Last Man figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Y: The Last Man.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Y: The Last Man."
    },
    {
        slug: "y-the-last-man-world",
        name: "Y: The Last Man world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Y: The Last Man.",
        description:
            "Geography, institutions, and periodization that give Y: The Last Man its encyclopedia shape."
    }
];

const relationships = [
    [
        "y-the-last-man",
        "y-the-last-man-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "y-the-last-man",
        "y-the-last-man-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
