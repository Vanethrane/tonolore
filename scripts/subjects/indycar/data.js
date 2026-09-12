/**
 * Seed graph for IndyCar (Motorsport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "indycar",
        name: "IndyCar",
        type: "topic",
        short_description: "American open-wheel racing — Indianapolis 500 and the championship trail.",
        description: "American open-wheel racing — Indianapolis 500 and the championship trail. This Ton-o-Lore subject maps people, places, events, and ideas tied to IndyCar so readers can follow long-tail connections across motorsport."
    },
    {
        slug: "indycar-figures",
        name: "IndyCar figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to IndyCar.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring IndyCar."
    },
    {
        slug: "indycar-teams",
        name: "IndyCar teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to IndyCar.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around IndyCar."
    },
    {
        slug: "indycar-venues",
        name: "IndyCar venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host IndyCar.",
        description:
            "Places where IndyCar is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "indycar-events",
        name: "IndyCar events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in IndyCar.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about IndyCar."
    },
    {
        slug: "indycar-rules",
        name: "IndyCar rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for IndyCar.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make IndyCar legible as a sport."
    }
];

const relationships = [
    [
        "indycar",
        "indycar-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "indycar",
        "indycar-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "indycar",
        "indycar-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "indycar",
        "indycar-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "indycar",
        "indycar-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "indycar-figures",
        "indycar-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "indycar-events",
        "indycar-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
