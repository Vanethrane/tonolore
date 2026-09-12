/**
 * Seed graph for FIBA Basketball World Cup (Basketball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "fiba-basketball-world-cup",
        name: "FIBA Basketball World Cup",
        type: "topic",
        short_description: "The global national-team basketball championship run by FIBA.",
        description: "The global national-team basketball championship run by FIBA. This Ton-o-Lore subject maps people, places, events, and ideas tied to FIBA Basketball World Cup so readers can follow long-tail connections across basketball."
    },
    {
        slug: "fiba-basketball-world-cup-figures",
        name: "FIBA Basketball World Cup figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to FIBA Basketball World Cup.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring FIBA Basketball World Cup."
    },
    {
        slug: "fiba-basketball-world-cup-teams",
        name: "FIBA Basketball World Cup teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to FIBA Basketball World Cup.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around FIBA Basketball World Cup."
    },
    {
        slug: "fiba-basketball-world-cup-venues",
        name: "FIBA Basketball World Cup venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host FIBA Basketball World Cup.",
        description:
            "Places where FIBA Basketball World Cup is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "fiba-basketball-world-cup-events",
        name: "FIBA Basketball World Cup events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in FIBA Basketball World Cup.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about FIBA Basketball World Cup."
    },
    {
        slug: "fiba-basketball-world-cup-rules",
        name: "FIBA Basketball World Cup rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for FIBA Basketball World Cup.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make FIBA Basketball World Cup legible as a sport."
    }
];

const relationships = [
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "fiba-basketball-world-cup",
        "fiba-basketball-world-cup-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "fiba-basketball-world-cup-figures",
        "fiba-basketball-world-cup-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "fiba-basketball-world-cup-events",
        "fiba-basketball-world-cup-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
