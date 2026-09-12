/**
 * Seed graph for United Football League (American football).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "ufl",
        name: "United Football League",
        type: "topic",
        short_description: "Spring pro football in the U.S. — merged USFL/XFL lineage and developmental lore.",
        description: "Spring pro football in the U.S. — merged USFL/XFL lineage and developmental lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to United Football League so readers can follow long-tail connections across american football."
    },
    {
        slug: "ufl-figures",
        name: "United Football League figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to United Football League.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring United Football League."
    },
    {
        slug: "ufl-teams",
        name: "United Football League teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to United Football League.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around United Football League."
    },
    {
        slug: "ufl-venues",
        name: "United Football League venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host United Football League.",
        description:
            "Places where United Football League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "ufl-events",
        name: "United Football League events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in United Football League.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about United Football League."
    },
    {
        slug: "ufl-rules",
        name: "United Football League rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for United Football League.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make United Football League legible as a sport."
    }
];

const relationships = [
    [
        "ufl",
        "ufl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ufl",
        "ufl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ufl",
        "ufl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ufl",
        "ufl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ufl",
        "ufl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ufl-figures",
        "ufl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ufl-events",
        "ufl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
