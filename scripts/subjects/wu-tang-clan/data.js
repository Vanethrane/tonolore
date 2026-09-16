/**
 * Seed graph for Wu-Tang Clan (Hip-hop).
 */

const entities = [
    {
        slug: "wu-tang-clan",
        name: "Wu-Tang Clan",
        type: "topic",
        short_description: "A Staten Island collective whose martial-arts mythology and sprawling solo catalog remapped hip-hop lore.",
        description: "A Staten Island collective whose martial-arts mythology and sprawling solo catalog remapped hip-hop lore. This Ton-o-Lore subject maps people, works, places, and ideas tied to Wu-Tang Clan so readers can follow long-tail connections across the hip-hop tradition."
    },
    {
        slug: "wu-tang-clan-catalog",
        name: "Wu-Tang Clan catalog",
        type: "topic",
        short_description: "Core recordings and works associated with Wu-Tang Clan.",
        description:
            "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Wu-Tang Clan in the hip-hop tradition."
    },
    {
        slug: "wu-tang-clan-era",
        name: "Wu-Tang Clan eras",
        type: "event",
        short_description: "Career phases and stylistic turns in the Wu-Tang Clan story.",
        description:
            "Periodization helps encyclopedia readers track how Wu-Tang Clan changed sound, lineup, or public myth across decades of hip-hop history."
    }
];

const relationships = [
    [
        "wu-tang-clan",
        "wu-tang-clan-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "wu-tang-clan",
        "wu-tang-clan-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
