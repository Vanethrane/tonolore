/**
 * Seed graph for Major League Baseball (Baseball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "mlb",
        name: "Major League Baseball",
        type: "topic",
        short_description: "America's major leagues — pennants, World Series, and ballpark mythology.",
        description: "America's major leagues — pennants, World Series, and ballpark mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Major League Baseball so readers can follow long-tail connections across baseball."
    },
    {
        slug: "mlb-figures",
        name: "Major League Baseball figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Major League Baseball.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Major League Baseball."
    },
    {
        slug: "mlb-teams",
        name: "Major League Baseball teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Major League Baseball.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Major League Baseball."
    },
    {
        slug: "mlb-venues",
        name: "Major League Baseball venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Major League Baseball.",
        description:
            "Places where Major League Baseball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "mlb-events",
        name: "Major League Baseball events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Major League Baseball.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Major League Baseball."
    },
    {
        slug: "mlb-rules",
        name: "Major League Baseball rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Major League Baseball.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Major League Baseball legible as a sport."
    }
];

const relationships = [
    [
        "mlb",
        "mlb-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "mlb",
        "mlb-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "mlb",
        "mlb-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "mlb-figures",
        "mlb-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "mlb-events",
        "mlb-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
