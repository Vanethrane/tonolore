/**
 * Seed graph for Hank Williams (Country).
 */

const entities = [
    {
        slug: "hank-williams",
        name: "Hank Williams",
        type: "topic",
        short_description: "Honky-tonk architect whose brief career set the emotional grammar of modern country song.",
        description: "Honky-tonk architect whose brief career set the emotional grammar of modern country song. This Ton-o-Lore subject maps people, works, places, and ideas tied to Hank Williams so readers can follow long-tail connections across the country tradition."
    },
    {
        slug: "hank-williams-catalog",
        name: "Hank Williams catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Hank Williams.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Hank Williams in the country tradition."
    },
    {
        slug: "hank-williams-era",
        name: "Hank Williams eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Hank Williams story.",
        description:
            "Periodization helps encyclopedia readers track how Hank Williams changed sound, lineup, or public myth across decades of country history."
    }
];

const relationships = [
    [
        "hank-williams",
        "hank-williams-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "hank-williams",
        "hank-williams-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
