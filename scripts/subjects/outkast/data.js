/**
 * Seed graph for OutKast (Hip-hop).
 */

const entities = [
    {
        slug: "outkast",
        name: "OutKast",
        type: "topic",
        short_description: "Atlanta duo whose Southern futurism and dual personas expanded what hip-hop albums could be.",
        description: "Atlanta duo whose Southern futurism and dual personas expanded what hip-hop albums could be. This Ton-o-Lore subject maps people, works, places, and ideas tied to OutKast so readers can follow long-tail connections across the hip-hop tradition."
    },
    {
        slug: "outkast-catalog",
        name: "OutKast catalog",
        type: "topic",
        short_description: "Core recordings and works associated with OutKast.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter OutKast in the hip-hop tradition."
    },
    {
        slug: "outkast-era",
        name: "OutKast eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the OutKast story.",
        description:
            "Periodization helps encyclopedia readers track how OutKast changed sound, lineup, or public myth across decades of hip-hop history."
    }
];

const relationships = [
    [
        "outkast",
        "outkast-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "outkast",
        "outkast-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
