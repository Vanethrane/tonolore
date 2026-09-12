/**
 * Seed graph for WNBA (Basketball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "wnba",
        name: "WNBA",
        type: "topic",
        short_description: "The Women's National Basketball Association — stars, rivalries, and expanding league lore.",
        description: "The Women's National Basketball Association — stars, rivalries, and expanding league lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to WNBA so readers can follow long-tail connections across basketball."
    },
    {
        slug: "wnba-figures",
        name: "WNBA figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to WNBA.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring WNBA."
    },
    {
        slug: "wnba-teams",
        name: "WNBA teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to WNBA.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around WNBA."
    },
    {
        slug: "wnba-venues",
        name: "WNBA venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host WNBA.",
        description:
            "Places where WNBA is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "wnba-events",
        name: "WNBA events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in WNBA.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about WNBA."
    },
    {
        slug: "wnba-rules",
        name: "WNBA rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for WNBA.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make WNBA legible as a sport."
    }
];

const relationships = [
    [
        "wnba",
        "wnba-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "wnba",
        "wnba-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "wnba",
        "wnba-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "wnba",
        "wnba-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "wnba",
        "wnba-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "wnba-figures",
        "wnba-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "wnba-events",
        "wnba-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
