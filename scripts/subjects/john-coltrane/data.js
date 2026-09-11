/**
 * Seed graph for John Coltrane (Jazz).
 */

const entities = [
    {
        slug: "john-coltrane",
        name: "John Coltrane",
        type: "topic",
        short_description: "Saxophonist whose sheets of sound and spiritual late work remain a center of jazz study.",
        description: "Saxophonist whose sheets of sound and spiritual late work remain a center of jazz study. This Ton-o-Lore subject maps people, works, places, and ideas tied to John Coltrane so readers can follow long-tail connections across the jazz tradition."
    },
    {
        slug: "john-coltrane-catalog",
        name: "John Coltrane catalog",
        type: "topic",
        short_description: "Core recordings and works associated with John Coltrane.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter John Coltrane in the jazz tradition."
    },
    {
        slug: "john-coltrane-era",
        name: "John Coltrane eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the John Coltrane story.",
        description:
            "Periodization helps encyclopedia readers track how John Coltrane changed sound, lineup, or public myth across decades of jazz history."
    }
];

const relationships = [
    [
        "john-coltrane",
        "john-coltrane-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "john-coltrane",
        "john-coltrane-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
