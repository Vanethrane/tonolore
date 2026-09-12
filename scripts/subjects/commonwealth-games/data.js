/**
 * Seed graph for Commonwealth Games (Olympics & multi-sport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "commonwealth-games",
        name: "Commonwealth Games",
        type: "topic",
        short_description: "The multi-sport Games of the Commonwealth — shared history and rotating hosts.",
        description: "The multi-sport Games of the Commonwealth — shared history and rotating hosts. This Ton-o-Lore subject maps people, places, events, and ideas tied to Commonwealth Games so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        slug: "commonwealth-games-figures",
        name: "Commonwealth Games figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Commonwealth Games.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Commonwealth Games."
    },
    {
        slug: "commonwealth-games-teams",
        name: "Commonwealth Games teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Commonwealth Games.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Commonwealth Games."
    },
    {
        slug: "commonwealth-games-venues",
        name: "Commonwealth Games venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Commonwealth Games.",
        description:
            "Places where Commonwealth Games is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "commonwealth-games-events",
        name: "Commonwealth Games events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Commonwealth Games.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Commonwealth Games."
    },
    {
        slug: "commonwealth-games-rules",
        name: "Commonwealth Games rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Commonwealth Games.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Commonwealth Games legible as a sport."
    }
];

const relationships = [
    [
        "commonwealth-games",
        "commonwealth-games-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "commonwealth-games",
        "commonwealth-games-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "commonwealth-games",
        "commonwealth-games-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "commonwealth-games",
        "commonwealth-games-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "commonwealth-games",
        "commonwealth-games-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "commonwealth-games-figures",
        "commonwealth-games-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "commonwealth-games-events",
        "commonwealth-games-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
