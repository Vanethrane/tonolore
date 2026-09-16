/**
 * Seed graph for Critical Role (Podcasts & audio).
 */

const entities = [
    {
        slug: "critical-role",
        name: "Critical Role",
        type: "topic",
        short_description: "Actual-play campaigns that became a multimedia fantasy franchise.",
        description: "Actual-play campaigns that became a multimedia fantasy franchise. This Ton-o-Lore subject maps people, places, events, and ideas tied to Critical Role so readers can follow long-tail connections across podcasts & audio."
    },
    {
        slug: "critical-role-figures",
        name: "Critical Role figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Critical Role.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Critical Role."
    },
    {
        slug: "critical-role-world",
        name: "Critical Role world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Critical Role.",
        description:
            "Geography, institutions, and periodization that give Critical Role its encyclopedia shape."
    }
];

const relationships = [
    [
        "critical-role",
        "critical-role-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "critical-role",
        "critical-role-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
