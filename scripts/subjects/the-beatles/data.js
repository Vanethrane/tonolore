/**
 * Seed graph for The Beatles (Rock).
 */

const entities = [
    {
        slug: "the-beatles",
        name: "The Beatles",
        type: "topic",
        short_description: "The Liverpool band whose songbook and studio experiments became a global popular-music grammar.",
        description: "The Liverpool band whose songbook and studio experiments became a global popular-music grammar. This Ton-o-Lore subject maps people, works, places, and ideas tied to The Beatles so readers can follow long-tail connections across the rock tradition."
    },
    {
        slug: "the-beatles-catalog",
        name: "The Beatles catalog",
        type: "topic",
        short_description: "Core recordings and works associated with The Beatles.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter The Beatles in the rock tradition."
    },
    {
        slug: "the-beatles-era",
        name: "The Beatles eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the The Beatles story.",
        description:
            "Periodization helps encyclopedia readers track how The Beatles changed sound, lineup, or public myth across decades of rock history."
    }
];

const relationships = [
    [
        "the-beatles",
        "the-beatles-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "the-beatles",
        "the-beatles-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
