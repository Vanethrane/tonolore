/**
 * Seed graph for Pink Floyd (Rock).
 */

const entities = [
    {
        slug: "pink-floyd",
        name: "Pink Floyd",
        type: "topic",
        short_description: "Progressive and psychedelic rock built around concept albums, sound design, and lasting stage mythology.",
        description: "Progressive and psychedelic rock built around concept albums, sound design, and lasting stage mythology. This Ton-o-Lore subject maps people, works, places, and ideas tied to Pink Floyd so readers can follow long-tail connections across the rock tradition."
    },
    {
        slug: "pink-floyd-catalog",
        name: "Pink Floyd catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Pink Floyd.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Pink Floyd in the rock tradition."
    },
    {
        slug: "pink-floyd-era",
        name: "Pink Floyd eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Pink Floyd story.",
        description:
            "Periodization helps encyclopedia readers track how Pink Floyd changed sound, lineup, or public myth across decades of rock history."
    }
];

const relationships = [
    [
        "pink-floyd",
        "pink-floyd-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "pink-floyd",
        "pink-floyd-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
