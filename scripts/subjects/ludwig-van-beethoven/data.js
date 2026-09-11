/**
 * Seed graph for Ludwig van Beethoven (Classical).
 */

const entities = [
    {
        slug: "ludwig-van-beethoven",
        name: "Ludwig van Beethoven",
        type: "topic",
        short_description: "Composer whose symphonies and late style mark the hinge from Classical to Romantic eras.",
        description: "Composer whose symphonies and late style mark the hinge from Classical to Romantic eras. This Ton-o-Lore subject maps people, works, places, and ideas tied to Ludwig van Beethoven so readers can follow long-tail connections across the classical tradition."
    },
    {
        slug: "ludwig-van-beethoven-catalog",
        name: "Ludwig van Beethoven catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Ludwig van Beethoven.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Ludwig van Beethoven in the classical tradition."
    },
    {
        slug: "ludwig-van-beethoven-era",
        name: "Ludwig van Beethoven eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Ludwig van Beethoven story.",
        description:
            "Periodization helps encyclopedia readers track how Ludwig van Beethoven changed sound, lineup, or public myth across decades of classical history."
    }
];

const relationships = [
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "ludwig-van-beethoven",
        "ludwig-van-beethoven-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
