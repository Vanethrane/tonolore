/**
 * Seed graph for Duke Ellington (Jazz).
 */

const entities = [
    {
        slug: "duke-ellington",
        name: "Duke Ellington",
        type: "topic",
        short_description: "Composer-bandleader who treated the orchestra as a lifelong instrument of American music.",
        description: "Composer-bandleader who treated the orchestra as a lifelong instrument of American music. This Ton-o-Lore subject maps people, works, places, and ideas tied to Duke Ellington so readers can follow long-tail connections across the jazz tradition."
    },
    {
        slug: "duke-ellington-catalog",
        name: "Duke Ellington catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Duke Ellington.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Duke Ellington in the jazz tradition."
    },
    {
        slug: "duke-ellington-era",
        name: "Duke Ellington eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Duke Ellington story.",
        description:
            "Periodization helps encyclopedia readers track how Duke Ellington changed sound, lineup, or public myth across decades of jazz history."
    }
];

const relationships = [
    [
        "duke-ellington",
        "duke-ellington-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "duke-ellington",
        "duke-ellington-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
