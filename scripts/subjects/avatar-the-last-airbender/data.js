/**
 * Seed graph for Avatar: The Last Airbender (Western animation).
 */

const entities = [
    {
        slug: "avatar-the-last-airbender",
        name: "Avatar: The Last Airbender",
        type: "topic",
        short_description: "Bending nations, Avatars, and a coming-of-age war story that became a modern classic.",
        description: "Bending nations, Avatars, and a coming-of-age war story that became a modern classic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Avatar: The Last Airbender so readers can follow long-tail connections across western animation."
    },
    {
        slug: "avatar-the-last-airbender-figures",
        name: "Avatar: The Last Airbender figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Avatar: The Last Airbender.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Avatar: The Last Airbender."
    },
    {
        slug: "avatar-the-last-airbender-world",
        name: "Avatar: The Last Airbender world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Avatar: The Last Airbender.",
        description:
            "Geography, institutions, and periodization that give Avatar: The Last Airbender its encyclopedia shape."
    }
];

const relationships = [
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "avatar-the-last-airbender",
        "avatar-the-last-airbender-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
