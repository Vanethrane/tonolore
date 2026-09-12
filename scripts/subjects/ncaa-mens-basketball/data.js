/**
 * Seed graph for NCAA men's basketball (Basketball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "ncaa-mens-basketball",
        name: "NCAA men's basketball",
        type: "topic",
        short_description: "March Madness and college basketball — programs, brackets, and campus dynasties.",
        description: "March Madness and college basketball — programs, brackets, and campus dynasties. This Ton-o-Lore subject maps people, places, events, and ideas tied to NCAA men's basketball so readers can follow long-tail connections across basketball."
    },
    {
        slug: "ncaa-mens-basketball-figures",
        name: "NCAA men's basketball figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to NCAA men's basketball.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NCAA men's basketball."
    },
    {
        slug: "ncaa-mens-basketball-teams",
        name: "NCAA men's basketball teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to NCAA men's basketball.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around NCAA men's basketball."
    },
    {
        slug: "ncaa-mens-basketball-venues",
        name: "NCAA men's basketball venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host NCAA men's basketball.",
        description:
            "Places where NCAA men's basketball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "ncaa-mens-basketball-events",
        name: "NCAA men's basketball events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in NCAA men's basketball.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about NCAA men's basketball."
    },
    {
        slug: "ncaa-mens-basketball-rules",
        name: "NCAA men's basketball rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for NCAA men's basketball.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NCAA men's basketball legible as a sport."
    }
];

const relationships = [
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ncaa-mens-basketball-figures",
        "ncaa-mens-basketball-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ncaa-mens-basketball-events",
        "ncaa-mens-basketball-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
