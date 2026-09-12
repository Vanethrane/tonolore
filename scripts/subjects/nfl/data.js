/**
 * Seed graph for NFL (American football).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "nfl",
        name: "NFL",
        type: "topic",
        short_description: "The National Football League — franchises, Super Bowls, and Sunday mythology.",
        description: "The National Football League — franchises, Super Bowls, and Sunday mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to NFL so readers can follow long-tail connections across american football."
    },
    {
        slug: "nfl-figures",
        name: "NFL figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to NFL.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NFL."
    },
    {
        slug: "nfl-teams",
        name: "NFL teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to NFL.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around NFL."
    },
    {
        slug: "nfl-venues",
        name: "NFL venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host NFL.",
        description:
            "Places where NFL is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "nfl-events",
        name: "NFL events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in NFL.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about NFL."
    },
    {
        slug: "nfl-rules",
        name: "NFL rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for NFL.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NFL legible as a sport."
    }
];

const relationships = [
    [
        "nfl",
        "nfl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nfl",
        "nfl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nfl",
        "nfl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nfl",
        "nfl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nfl",
        "nfl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nfl-figures",
        "nfl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nfl-events",
        "nfl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
