/**
 * Seed graph for Wolfgang Amadeus Mozart (Classical).
 */

const entities = [
    {
        slug: "wolfgang-amadeus-mozart",
        name: "Wolfgang Amadeus Mozart",
        type: "topic",
        short_description: "Prodigy-composer of opera, symphony, and chamber works that define the Classical repertoire.",
        description: "Prodigy-composer of opera, symphony, and chamber works that define the Classical repertoire. This Ton-o-Lore subject maps people, works, places, and ideas tied to Wolfgang Amadeus Mozart so readers can follow long-tail connections across the classical tradition."
    },
    {
        slug: "wolfgang-amadeus-mozart-catalog",
        name: "Wolfgang Amadeus Mozart catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Wolfgang Amadeus Mozart.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Wolfgang Amadeus Mozart in the classical tradition."
    },
    {
        slug: "wolfgang-amadeus-mozart-era",
        name: "Wolfgang Amadeus Mozart eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Wolfgang Amadeus Mozart story.",
        description:
            "Periodization helps encyclopedia readers track how Wolfgang Amadeus Mozart changed sound, lineup, or public myth across decades of classical history."
    }
];

const relationships = [
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
