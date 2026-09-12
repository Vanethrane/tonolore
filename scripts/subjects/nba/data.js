/**
 * Seed graph for NBA (Basketball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "nba",
        name: "NBA",
        type: "topic",
        short_description: "The National Basketball Association — franchises, eras, and court mythology.",
        description: "The National Basketball Association — franchises, eras, and court mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to NBA so readers can follow long-tail connections across basketball."
    },
    {
        slug: "nba-figures",
        name: "NBA figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to NBA.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NBA."
    },
    {
        slug: "nba-teams",
        name: "NBA teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to NBA.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around NBA."
    },
    {
        slug: "nba-venues",
        name: "NBA venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host NBA.",
        description:
            "Places where NBA is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "nba-events",
        name: "NBA events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in NBA.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about NBA."
    },
    {
        slug: "nba-rules",
        name: "NBA rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for NBA.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NBA legible as a sport."
    }
];

const relationships = [
    [
        "nba",
        "nba-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nba",
        "nba-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nba",
        "nba-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nba",
        "nba-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nba",
        "nba-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nba-figures",
        "nba-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nba-events",
        "nba-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
