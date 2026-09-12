/**
 * Seed graph for Formula 1 (Motorsport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "formula-1",
        name: "Formula 1",
        type: "topic",
        short_description: "Grand Prix racing — constructors, circuits, and technical eras at the limit.",
        description: "Grand Prix racing — constructors, circuits, and technical eras at the limit. This Ton-o-Lore subject maps people, places, events, and ideas tied to Formula 1 so readers can follow long-tail connections across motorsport."
    },
    {
        slug: "formula-1-figures",
        name: "Formula 1 figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Formula 1.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Formula 1."
    },
    {
        slug: "formula-1-teams",
        name: "Formula 1 teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Formula 1.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Formula 1."
    },
    {
        slug: "formula-1-venues",
        name: "Formula 1 venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Formula 1.",
        description:
            "Places where Formula 1 is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "formula-1-events",
        name: "Formula 1 events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Formula 1.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Formula 1."
    },
    {
        slug: "formula-1-rules",
        name: "Formula 1 rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Formula 1.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Formula 1 legible as a sport."
    }
];

const relationships = [
    [
        "formula-1",
        "formula-1-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "formula-1",
        "formula-1-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "formula-1",
        "formula-1-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "formula-1",
        "formula-1-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "formula-1",
        "formula-1-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "formula-1-figures",
        "formula-1-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "formula-1-events",
        "formula-1-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
