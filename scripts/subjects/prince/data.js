/**
 * Seed graph for Prince (Pop).
 */

const entities = [
    {
        slug: "prince",
        name: "Prince",
        type: "topic",
        short_description: "Minneapolis polymath whose vault, personas, and genre-fluid catalog remain a pop-mythology center.",
        description: "Minneapolis polymath whose vault, personas, and genre-fluid catalog remain a pop-mythology center. This Ton-o-Lore subject maps people, works, places, and ideas tied to Prince so readers can follow long-tail connections across the pop tradition."
    },
    {
        slug: "prince-catalog",
        name: "Prince catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Prince.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Prince in the pop tradition."
    },
    {
        slug: "prince-era",
        name: "Prince eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Prince story.",
        description:
            "Periodization helps encyclopedia readers track how Prince changed sound, lineup, or public myth across decades of pop history."
    }
];

const relationships = [
    [
        "prince",
        "prince-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "prince",
        "prince-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
