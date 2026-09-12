/**
 * Seed graph for Davis Cup (Tennis).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "davis-cup",
        name: "Davis Cup",
        type: "topic",
        short_description: "Men's national-team tennis competition — ties, upsets, and country pride.",
        description: "Men's national-team tennis competition — ties, upsets, and country pride. This Ton-o-Lore subject maps people, places, events, and ideas tied to Davis Cup so readers can follow long-tail connections across tennis."
    },
    {
        slug: "davis-cup-figures",
        name: "Davis Cup figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Davis Cup.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Davis Cup."
    },
    {
        slug: "davis-cup-teams",
        name: "Davis Cup teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Davis Cup.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Davis Cup."
    },
    {
        slug: "davis-cup-venues",
        name: "Davis Cup venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Davis Cup.",
        description:
            "Places where Davis Cup is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "davis-cup-events",
        name: "Davis Cup events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Davis Cup.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Davis Cup."
    },
    {
        slug: "davis-cup-rules",
        name: "Davis Cup rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Davis Cup.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Davis Cup legible as a sport."
    }
];

const relationships = [
    [
        "davis-cup",
        "davis-cup-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "davis-cup",
        "davis-cup-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "davis-cup",
        "davis-cup-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "davis-cup",
        "davis-cup-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "davis-cup",
        "davis-cup-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "davis-cup-figures",
        "davis-cup-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "davis-cup-events",
        "davis-cup-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
