/**
 * Seed graph for Miles Davis (Jazz).
 */

const entities = [
    {
        slug: "miles-davis",
        name: "Miles Davis",
        type: "topic",
        short_description: "Trumpeter and bandleader whose eras — cool, modal, electric — mark successive maps of modern jazz.",
        description: "Trumpeter and bandleader whose eras — cool, modal, electric — mark successive maps of modern jazz. This Ton-o-Lore subject maps people, works, places, and ideas tied to Miles Davis so readers can follow long-tail connections across the jazz tradition."
    },
    {
        slug: "miles-davis-catalog",
        name: "Miles Davis catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Miles Davis.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Miles Davis in the jazz tradition."
    },
    {
        slug: "miles-davis-era",
        name: "Miles Davis eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Miles Davis story.",
        description:
            "Periodization helps encyclopedia readers track how Miles Davis changed sound, lineup, or public myth across decades of jazz history."
    }
];

const relationships = [
    [
        "miles-davis",
        "miles-davis-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "miles-davis",
        "miles-davis-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
