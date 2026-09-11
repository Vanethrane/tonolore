/**
 * Seed graph for Dolly Parton (Country).
 */

const entities = [
    {
        slug: "dolly-parton",
        name: "Dolly Parton",
        type: "topic",
        short_description: "Songwriter, performer, and Appalachian icon whose authorship and persona reshaped country stardom.",
        description: "Songwriter, performer, and Appalachian icon whose authorship and persona reshaped country stardom. This Ton-o-Lore subject maps people, works, places, and ideas tied to Dolly Parton so readers can follow long-tail connections across the country tradition."
    },
    {
        slug: "dolly-parton-catalog",
        name: "Dolly Parton catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Dolly Parton.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Dolly Parton in the country tradition."
    },
    {
        slug: "dolly-parton-era",
        name: "Dolly Parton eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Dolly Parton story.",
        description:
            "Periodization helps encyclopedia readers track how Dolly Parton changed sound, lineup, or public myth across decades of country history."
    }
];

const relationships = [
    [
        "dolly-parton",
        "dolly-parton-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "dolly-parton",
        "dolly-parton-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
