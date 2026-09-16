/**
 * Seed graph for Johann Sebastian Bach (Classical).
 */

const entities = [
    {
        slug: "johann-sebastian-bach",
        name: "Johann Sebastian Bach",
        type: "topic",
        short_description: "Baroque master of counterpoint whose sacred and keyboard works remain a foundation of Western music.",
        description: "Baroque master of counterpoint whose sacred and keyboard works remain a foundation of Western music. This Ton-o-Lore subject maps people, works, places, and ideas tied to Johann Sebastian Bach so readers can follow long-tail connections across the classical tradition."
    },
    {
        slug: "johann-sebastian-bach-catalog",
        name: "Johann Sebastian Bach catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Johann Sebastian Bach.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Johann Sebastian Bach in the classical tradition."
    },
    {
        slug: "johann-sebastian-bach-era",
        name: "Johann Sebastian Bach eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Johann Sebastian Bach story.",
        description:
            "Periodization helps encyclopedia readers track how Johann Sebastian Bach changed sound, lineup, or public myth across decades of classical history."
    }
];

const relationships = [
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "johann-sebastian-bach",
        "johann-sebastian-bach-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
