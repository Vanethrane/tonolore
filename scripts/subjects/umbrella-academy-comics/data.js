/**
 * Seed graph for The Umbrella Academy (Comics & manga).
 */

const entities = [
    {
        slug: "umbrella-academy-comics",
        name: "The Umbrella Academy",
        type: "topic",
        short_description: "Dysfunctional super-siblings, apocalypse clocks, and Way/Ba’s indie superhero opera.",
        description: "Dysfunctional super-siblings, apocalypse clocks, and Way/Ba’s indie superhero opera. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Umbrella Academy so readers can follow long-tail connections across comics & manga."
    },
    {
        slug: "umbrella-academy-comics-figures",
        name: "The Umbrella Academy figures",
        type: "topic",
        short_description: "People, characters, and named forces central to The Umbrella Academy.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Umbrella Academy."
    },
    {
        slug: "umbrella-academy-comics-world",
        name: "The Umbrella Academy world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame The Umbrella Academy.",
        description:
            "Geography, institutions, and periodization that give The Umbrella Academy its encyclopedia shape."
    }
];

const relationships = [
    [
        "umbrella-academy-comics",
        "umbrella-academy-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "umbrella-academy-comics",
        "umbrella-academy-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
