/**
 * Seed graph for Madonna (Pop).
 */

const entities = [
    {
        slug: "madonna",
        name: "Madonna",
        type: "topic",
        short_description: "Reinvention as method: pop authorship, image cycles, and cultural provocation across decades.",
        description: "Reinvention as method: pop authorship, image cycles, and cultural provocation across decades. This Ton-o-Lore subject maps people, works, places, and ideas tied to Madonna so readers can follow long-tail connections across the pop tradition."
    },
    {
        slug: "madonna-catalog",
        name: "Madonna catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Madonna.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Madonna in the pop tradition."
    },
    {
        slug: "madonna-era",
        name: "Madonna eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Madonna story.",
        description:
            "Periodization helps encyclopedia readers track how Madonna changed sound, lineup, or public myth across decades of pop history."
    }
];

const relationships = [
    [
        "madonna",
        "madonna-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "madonna",
        "madonna-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
