/**
 * Seed graph for Major League Soccer (Soccer).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "mls",
        name: "Major League Soccer",
        type: "topic",
        short_description: "North America's top soccer league — expansion clubs, Designated Players, and cup runs.",
        description: "North America's top soccer league — expansion clubs, Designated Players, and cup runs. This Ton-o-Lore subject maps people, places, events, and ideas tied to Major League Soccer so readers can follow long-tail connections across soccer."
    },
    {
        slug: "mls-figures",
        name: "Major League Soccer figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Major League Soccer.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Major League Soccer."
    },
    {
        slug: "mls-teams",
        name: "Major League Soccer teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Major League Soccer.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Major League Soccer."
    },
    {
        slug: "mls-venues",
        name: "Major League Soccer venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Major League Soccer.",
        description:
            "Places where Major League Soccer is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "mls-events",
        name: "Major League Soccer events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Major League Soccer.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Major League Soccer."
    },
    {
        slug: "mls-rules",
        name: "Major League Soccer rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Major League Soccer.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Major League Soccer legible as a sport."
    }
];

const relationships = [
    [
        "mls",
        "mls-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "mls",
        "mls-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "mls",
        "mls-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "mls-figures",
        "mls-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "mls-events",
        "mls-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
