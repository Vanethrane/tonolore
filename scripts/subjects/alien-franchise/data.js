/**
 * Seed graph for Alien (Horror).
 */

const entities = [
    {
        slug: "alien-franchise",
        name: "Alien",
        type: "topic",
        short_description: "Xenomorphs, Weyland-Yutani, and space-horror design that redefined the genre.",
        description: "Xenomorphs, Weyland-Yutani, and space-horror design that redefined the genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to Alien so readers can follow long-tail connections across horror."
    },
    {
        slug: "alien-franchise-figures",
        name: "Alien figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Alien.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Alien."
    },
    {
        slug: "alien-franchise-world",
        name: "Alien world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Alien.",
        description:
            "Geography, institutions, and periodization that give Alien its encyclopedia shape."
    }
];

const relationships = [
    [
        "alien-franchise",
        "alien-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "alien-franchise",
        "alien-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
