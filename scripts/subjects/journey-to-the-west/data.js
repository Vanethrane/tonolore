/**
 * Seed graph for Journey to the West (Folklore & legend).
 */

const entities = [
    {
        slug: "journey-to-the-west",
        name: "Journey to the West",
        type: "topic",
        short_description: "Sun Wukong's pilgrimage epic — demons, disciples, and East Asian adventure canon.",
        description: "Sun Wukong's pilgrimage epic — demons, disciples, and East Asian adventure canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Journey to the West so readers can follow long-tail connections across folklore & legend."
    },
    {
        slug: "journey-to-the-west-figures",
        name: "Journey to the West figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Journey to the West.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Journey to the West."
    },
    {
        slug: "journey-to-the-west-world",
        name: "Journey to the West world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Journey to the West.",
        description:
            "Geography, institutions, and periodization that give Journey to the West its encyclopedia shape."
    }
];

const relationships = [
    [
        "journey-to-the-west",
        "journey-to-the-west-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "journey-to-the-west",
        "journey-to-the-west-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
