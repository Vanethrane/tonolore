/**
 * Seed graph for Led Zeppelin (Rock).
 */

const entities = [
    {
        slug: "led-zeppelin",
        name: "Led Zeppelin",
        type: "topic",
        short_description: "Hard-rock architects whose riffs, folklore borrowings, and album lore still structure the genre.",
        description: "Hard-rock architects whose riffs, folklore borrowings, and album lore still structure the genre. This Ton-o-Lore subject maps people, works, places, and ideas tied to Led Zeppelin so readers can follow long-tail connections across the rock tradition."
    },
    {
        slug: "led-zeppelin-catalog",
        name: "Led Zeppelin catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Led Zeppelin.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Led Zeppelin in the rock tradition."
    },
    {
        slug: "led-zeppelin-era",
        name: "Led Zeppelin eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Led Zeppelin story.",
        description:
            "Periodization helps encyclopedia readers track how Led Zeppelin changed sound, lineup, or public myth across decades of rock history."
    }
];

const relationships = [
    [
        "led-zeppelin",
        "led-zeppelin-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "led-zeppelin",
        "led-zeppelin-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
