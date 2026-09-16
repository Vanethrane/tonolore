/**
 * Seed graph for Metallica (Metal).
 */

const entities = [
    {
        slug: "metallica",
        name: "Metallica",
        type: "topic",
        short_description: "Thrash-to-arena titans whose catalog and fan culture dominate modern metal lore.",
        description: "Thrash-to-arena titans whose catalog and fan culture dominate modern metal lore. This Ton-o-Lore subject maps people, works, places, and ideas tied to Metallica so readers can follow long-tail connections across the metal tradition."
    },
    {
        slug: "metallica-catalog",
        name: "Metallica catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Metallica.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Metallica in the metal tradition."
    },
    {
        slug: "metallica-era",
        name: "Metallica eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Metallica story.",
        description:
            "Periodization helps encyclopedia readers track how Metallica changed sound, lineup, or public myth across decades of metal history."
    }
];

const relationships = [
    [
        "metallica",
        "metallica-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "metallica",
        "metallica-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
