/**
 * Seed graph for Daft Punk (Electronic).
 */

const entities = [
    {
        slug: "daft-punk",
        name: "Daft Punk",
        type: "topic",
        short_description: "Helmeted duo whose house, disco, and robot mythos crossed club culture into mainstream lore.",
        description: "Helmeted duo whose house, disco, and robot mythos crossed club culture into mainstream lore. This Ton-o-Lore subject maps people, works, places, and ideas tied to Daft Punk so readers can follow long-tail connections across the electronic tradition."
    },
    {
        slug: "daft-punk-catalog",
        name: "Daft Punk catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Daft Punk.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Daft Punk in the electronic tradition."
    },
    {
        slug: "daft-punk-era",
        name: "Daft Punk eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Daft Punk story.",
        description:
            "Periodization helps encyclopedia readers track how Daft Punk changed sound, lineup, or public myth across decades of electronic history."
    }
];

const relationships = [
    [
        "daft-punk",
        "daft-punk-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "daft-punk",
        "daft-punk-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
