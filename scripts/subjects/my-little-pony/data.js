/**
 * Seed graph for My Little Pony (Toys & collectibles).
 */

const entities = [
    {
        slug: "my-little-pony",
        name: "My Little Pony",
        type: "topic",
        short_description: "Ponies, friendship magic, and generations of collectible-driven storytelling.",
        description: "Ponies, friendship magic, and generations of collectible-driven storytelling. This Ton-o-Lore subject maps people, places, events, and ideas tied to My Little Pony so readers can follow long-tail connections across toys & collectibles."
    },
    {
        slug: "my-little-pony-figures",
        name: "My Little Pony figures",
        type: "topic",
        short_description: "People, characters, and named forces central to My Little Pony.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring My Little Pony."
    },
    {
        slug: "my-little-pony-world",
        name: "My Little Pony world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame My Little Pony.",
        description:
            "Geography, institutions, and periodization that give My Little Pony its encyclopedia shape."
    }
];

const relationships = [
    [
        "my-little-pony",
        "my-little-pony-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "my-little-pony",
        "my-little-pony-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
