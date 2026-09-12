/**
 * Seed graph for Wimbledon (Tennis).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "wimbledon",
        name: "Wimbledon",
        type: "topic",
        short_description: "The Championships at the All England Club — grass, strawberries, and Slam lore.",
        description: "The Championships at the All England Club — grass, strawberries, and Slam lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Wimbledon so readers can follow long-tail connections across tennis."
    },
    {
        slug: "wimbledon-figures",
        name: "Wimbledon figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Wimbledon.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Wimbledon."
    },
    {
        slug: "wimbledon-teams",
        name: "Wimbledon teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Wimbledon.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Wimbledon."
    },
    {
        slug: "wimbledon-venues",
        name: "Wimbledon venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Wimbledon.",
        description:
            "Places where Wimbledon is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "wimbledon-events",
        name: "Wimbledon events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Wimbledon.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Wimbledon."
    },
    {
        slug: "wimbledon-rules",
        name: "Wimbledon rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Wimbledon.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Wimbledon legible as a sport."
    }
];

const relationships = [
    [
        "wimbledon",
        "wimbledon-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "wimbledon",
        "wimbledon-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "wimbledon",
        "wimbledon-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "wimbledon",
        "wimbledon-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "wimbledon",
        "wimbledon-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "wimbledon-figures",
        "wimbledon-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "wimbledon-events",
        "wimbledon-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
