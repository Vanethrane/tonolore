/**
 * Seed graph for Public Enemy (Hip-hop).
 */

const entities = [
    {
        slug: "public-enemy",
        name: "Public Enemy",
        type: "topic",
        short_description: "Bomb-squad production and political storytelling that made hip-hop a public square.",
        description: "Bomb-squad production and political storytelling that made hip-hop a public square. This Ton-o-Lore subject maps people, works, places, and ideas tied to Public Enemy so readers can follow long-tail connections across the hip-hop tradition."
    },
    {
        slug: "public-enemy-catalog",
        name: "Public Enemy catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Public Enemy.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Public Enemy in the hip-hop tradition."
    },
    {
        slug: "public-enemy-era",
        name: "Public Enemy eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Public Enemy story.",
        description:
            "Periodization helps encyclopedia readers track how Public Enemy changed sound, lineup, or public myth across decades of hip-hop history."
    }
];

const relationships = [
    [
        "public-enemy",
        "public-enemy-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "public-enemy",
        "public-enemy-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
