/**
 * Seed graph for Kraftwerk (Electronic).
 */

const entities = [
    {
        slug: "kraftwerk",
        name: "Kraftwerk",
        type: "topic",
        short_description: "Düsseldorf pioneers who framed the man-machine ideal for generations of electronic music.",
        description: "Düsseldorf pioneers who framed the man-machine ideal for generations of electronic music. This Ton-o-Lore subject maps people, works, places, and ideas tied to Kraftwerk so readers can follow long-tail connections across the electronic tradition."
    },
    {
        slug: "kraftwerk-catalog",
        name: "Kraftwerk catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Kraftwerk.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Kraftwerk in the electronic tradition."
    },
    {
        slug: "kraftwerk-era",
        name: "Kraftwerk eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Kraftwerk story.",
        description:
            "Periodization helps encyclopedia readers track how Kraftwerk changed sound, lineup, or public myth across decades of electronic history."
    }
];

const relationships = [
    [
        "kraftwerk",
        "kraftwerk-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "kraftwerk",
        "kraftwerk-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
