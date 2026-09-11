/**
 * Seed graph for Serial (Podcasts & audio).
 */

const entities = [
    {
        slug: "serial-podcast",
        name: "Serial",
        type: "topic",
        short_description: "The investigative podcast that remapped true-crime audio storytelling.",
        description: "The investigative podcast that remapped true-crime audio storytelling. This Ton-o-Lore subject maps people, places, events, and ideas tied to Serial so readers can follow long-tail connections across podcasts & audio."
    },
    {
        slug: "serial-podcast-figures",
        name: "Serial figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Serial.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Serial."
    },
    {
        slug: "serial-podcast-world",
        name: "Serial world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Serial.",
        description:
            "Geography, institutions, and periodization that give Serial its encyclopedia shape."
    }
];

const relationships = [
    [
        "serial-podcast",
        "serial-podcast-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "serial-podcast",
        "serial-podcast-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
