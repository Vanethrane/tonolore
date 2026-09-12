/**
 * Seed graph for Judo (Combat sports).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "judo",
        name: "Judo",
        type: "topic",
        short_description: "The Olympic martial art of throws and groundwork founded by Jigoro Kano.",
        description: "The Olympic martial art of throws and groundwork founded by Jigoro Kano. This Ton-o-Lore subject maps people, places, events, and ideas tied to Judo so readers can follow long-tail connections across combat sports."
    },
    {
        slug: "judo-figures",
        name: "Judo figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Judo.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Judo."
    },
    {
        slug: "judo-teams",
        name: "Judo teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Judo.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Judo."
    },
    {
        slug: "judo-venues",
        name: "Judo venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Judo.",
        description:
            "Places where Judo is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "judo-events",
        name: "Judo events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Judo.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Judo."
    },
    {
        slug: "judo-rules",
        name: "Judo rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Judo.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Judo legible as a sport."
    }
];

const relationships = [
    [
        "judo",
        "judo-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "judo",
        "judo-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "judo",
        "judo-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "judo",
        "judo-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "judo",
        "judo-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "judo-figures",
        "judo-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "judo-events",
        "judo-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
