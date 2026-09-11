/**
 * Seed graph for Aphex Twin (Electronic).
 */

const entities = [
    {
        slug: "aphex-twin",
        name: "Aphex Twin",
        type: "topic",
        short_description: "Alias-rich IDM and acid work that made Richard D. James a lore figure of experimental electronica.",
        description: "Alias-rich IDM and acid work that made Richard D. James a lore figure of experimental electronica. This Ton-o-Lore subject maps people, works, places, and ideas tied to Aphex Twin so readers can follow long-tail connections across the electronic tradition."
    },
    {
        slug: "aphex-twin-catalog",
        name: "Aphex Twin catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Aphex Twin.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Aphex Twin in the electronic tradition."
    },
    {
        slug: "aphex-twin-era",
        name: "Aphex Twin eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Aphex Twin story.",
        description:
            "Periodization helps encyclopedia readers track how Aphex Twin changed sound, lineup, or public myth across decades of electronic history."
    }
];

const relationships = [
    [
        "aphex-twin",
        "aphex-twin-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "aphex-twin",
        "aphex-twin-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
