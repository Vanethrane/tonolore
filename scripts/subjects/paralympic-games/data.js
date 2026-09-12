/**
 * Seed graph for Paralympic Games (Olympics & multi-sport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "paralympic-games",
        name: "Paralympic Games",
        type: "topic",
        short_description: "Elite Para sport's flagship Games — classifications, sports, and Paralympic movement lore.",
        description: "Elite Para sport's flagship Games — classifications, sports, and Paralympic movement lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Paralympic Games so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        slug: "paralympic-games-figures",
        name: "Paralympic Games figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Paralympic Games.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Paralympic Games."
    },
    {
        slug: "paralympic-games-teams",
        name: "Paralympic Games teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Paralympic Games.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Paralympic Games."
    },
    {
        slug: "paralympic-games-venues",
        name: "Paralympic Games venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Paralympic Games.",
        description:
            "Places where Paralympic Games is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "paralympic-games-events",
        name: "Paralympic Games events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Paralympic Games.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Paralympic Games."
    },
    {
        slug: "paralympic-games-rules",
        name: "Paralympic Games rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Paralympic Games.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Paralympic Games legible as a sport."
    }
];

const relationships = [
    [
        "paralympic-games",
        "paralympic-games-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "paralympic-games",
        "paralympic-games-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "paralympic-games",
        "paralympic-games-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "paralympic-games",
        "paralympic-games-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "paralympic-games",
        "paralympic-games-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "paralympic-games-figures",
        "paralympic-games-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "paralympic-games-events",
        "paralympic-games-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
