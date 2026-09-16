/**
 * Seed graph for Black Sabbath (Metal).
 */

const entities = [
    {
        slug: "black-sabbath",
        name: "Black Sabbath",
        type: "topic",
        short_description: "Birmingham originators whose doom-laden riffs and occult imagery named heavy metal.",
        description: "Birmingham originators whose doom-laden riffs and occult imagery named heavy metal. This Ton-o-Lore subject maps people, works, places, and ideas tied to Black Sabbath so readers can follow long-tail connections across the metal tradition."
    },
    {
        slug: "black-sabbath-catalog",
        name: "Black Sabbath catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Black Sabbath.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Black Sabbath in the metal tradition."
    },
    {
        slug: "black-sabbath-era",
        name: "Black Sabbath eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Black Sabbath story.",
        description:
            "Periodization helps encyclopedia readers track how Black Sabbath changed sound, lineup, or public myth across decades of metal history."
    }
];

const relationships = [
    [
        "black-sabbath",
        "black-sabbath-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "black-sabbath",
        "black-sabbath-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
