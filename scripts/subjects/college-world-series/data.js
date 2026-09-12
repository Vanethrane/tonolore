/**
 * Seed graph for College World Series (Baseball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "college-world-series",
        name: "College World Series",
        type: "topic",
        short_description: "NCAA Division I baseball's Omaha finale — programs, pitch counts, and summer lore.",
        description: "NCAA Division I baseball's Omaha finale — programs, pitch counts, and summer lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to College World Series so readers can follow long-tail connections across baseball."
    },
    {
        slug: "college-world-series-figures",
        name: "College World Series figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to College World Series.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring College World Series."
    },
    {
        slug: "college-world-series-teams",
        name: "College World Series teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to College World Series.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around College World Series."
    },
    {
        slug: "college-world-series-venues",
        name: "College World Series venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host College World Series.",
        description:
            "Places where College World Series is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "college-world-series-events",
        name: "College World Series events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in College World Series.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about College World Series."
    },
    {
        slug: "college-world-series-rules",
        name: "College World Series rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for College World Series.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make College World Series legible as a sport."
    }
];

const relationships = [
    [
        "college-world-series",
        "college-world-series-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "college-world-series",
        "college-world-series-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "college-world-series",
        "college-world-series-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "college-world-series",
        "college-world-series-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "college-world-series",
        "college-world-series-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "college-world-series-figures",
        "college-world-series-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "college-world-series-events",
        "college-world-series-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
