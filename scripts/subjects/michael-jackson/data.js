/**
 * Seed graph for Michael Jackson (Pop).
 */

const entities = [
    {
        slug: "michael-jackson",
        name: "Michael Jackson",
        type: "topic",
        short_description: "The King of Pop — video era spectacle, dance vocabulary, and a catalog that still defines mainstream pop.",
        description: "The King of Pop — video era spectacle, dance vocabulary, and a catalog that still defines mainstream pop. This Ton-o-Lore subject maps people, works, places, and ideas tied to Michael Jackson so readers can follow long-tail connections across the pop tradition."
    },
    {
        slug: "michael-jackson-catalog",
        name: "Michael Jackson catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Michael Jackson.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Michael Jackson in the pop tradition."
    },
    {
        slug: "michael-jackson-era",
        name: "Michael Jackson eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Michael Jackson story.",
        description:
            "Periodization helps encyclopedia readers track how Michael Jackson changed sound, lineup, or public myth across decades of pop history."
    }
];

const relationships = [
    [
        "michael-jackson",
        "michael-jackson-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "michael-jackson",
        "michael-jackson-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
