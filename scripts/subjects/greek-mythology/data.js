/**
 * Seed graph for Greek mythology (Mythology).
 */

const entities = [
    {
        slug: "greek-mythology",
        name: "Greek mythology",
        type: "topic",
        short_description: "Olympians, heroes, and underworld geography that seeded Western fantasy language.",
        description: "Olympians, heroes, and underworld geography that seeded Western fantasy language. This Ton-o-Lore subject maps people, places, events, and ideas tied to Greek mythology so readers can follow long-tail connections across mythology."
    },
    {
        slug: "greek-mythology-figures",
        name: "Greek mythology figures",
        type: "topic",
        short_description: "People, characters, and named forces central to Greek mythology.",
        description:
            "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Greek mythology."
    },
    {
        slug: "greek-mythology-world",
        name: "Greek mythology world & context",
        type: "topic",
        short_description: "Places, eras, and structures that frame Greek mythology.",
        description:
            "Geography, institutions, and periodization that give Greek mythology its encyclopedia shape."
    }
];

const relationships = [
    [
        "greek-mythology",
        "greek-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "greek-mythology",
        "greek-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ]
];

module.exports = { entities, relationships };
