/**
 * Seed graph for Iron Maiden (Metal).
 */

const entities = [
    {
        slug: "iron-maiden",
        name: "Iron Maiden",
        type: "topic",
        short_description: "New Wave of British Heavy Metal flagship, with Eddie the mascot as a lasting visual myth.",
        description: "New Wave of British Heavy Metal flagship, with Eddie the mascot as a lasting visual myth. This Ton-o-Lore subject maps people, works, places, and ideas tied to Iron Maiden so readers can follow long-tail connections across the metal tradition."
    },
    {
        slug: "iron-maiden-catalog",
        name: "Iron Maiden catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Iron Maiden.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Iron Maiden in the metal tradition."
    },
    {
        slug: "iron-maiden-era",
        name: "Iron Maiden eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Iron Maiden story.",
        description:
            "Periodization helps encyclopedia readers track how Iron Maiden changed sound, lineup, or public myth across decades of metal history."
    }
];

const relationships = [
    [
        "iron-maiden",
        "iron-maiden-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "iron-maiden",
        "iron-maiden-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
