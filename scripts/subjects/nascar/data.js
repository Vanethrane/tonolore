/**
 * Seed graph for NASCAR (Motorsport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "nascar",
        name: "NASCAR",
        type: "topic",
        short_description: "Stock-car racing's premier series — Daytona, playoffs, and oval-track lore.",
        description: "Stock-car racing's premier series — Daytona, playoffs, and oval-track lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to NASCAR so readers can follow long-tail connections across motorsport."
    },
    {
        slug: "nascar-figures",
        name: "NASCAR figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to NASCAR.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NASCAR."
    },
    {
        slug: "nascar-teams",
        name: "NASCAR teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to NASCAR.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around NASCAR."
    },
    {
        slug: "nascar-venues",
        name: "NASCAR venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host NASCAR.",
        description:
            "Places where NASCAR is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "nascar-events",
        name: "NASCAR events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in NASCAR.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about NASCAR."
    },
    {
        slug: "nascar-rules",
        name: "NASCAR rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for NASCAR.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NASCAR legible as a sport."
    }
];

const relationships = [
    [
        "nascar",
        "nascar-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nascar",
        "nascar-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nascar",
        "nascar-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nascar",
        "nascar-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nascar",
        "nascar-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nascar-figures",
        "nascar-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nascar-events",
        "nascar-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
