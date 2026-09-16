/**
 * Seed graph for Johnny Cash (Country).
 */

const entities = [
    {
        slug: "johnny-cash",
        name: "Johnny Cash",
        type: "topic",
        short_description: "The Man in Black — prison shows, outlaw myth, and a catalog that bridges country and American folk.",
        description: "The Man in Black — prison shows, outlaw myth, and a catalog that bridges country and American folk. This Ton-o-Lore subject maps people, works, places, and ideas tied to Johnny Cash so readers can follow long-tail connections across the country tradition."
    },
    {
        slug: "johnny-cash-catalog",
        name: "Johnny Cash catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Johnny Cash.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Johnny Cash in the country tradition."
    },
    {
        slug: "johnny-cash-era",
        name: "Johnny Cash eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Johnny Cash story.",
        description:
            "Periodization helps encyclopedia readers track how Johnny Cash changed sound, lineup, or public myth across decades of country history."
    }
];

const relationships = [
    [
        "johnny-cash",
        "johnny-cash-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "johnny-cash",
        "johnny-cash-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
