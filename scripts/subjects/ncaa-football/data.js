/**
 * Seed graph for NCAA football (American football).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "ncaa-football",
        name: "NCAA football",
        type: "topic",
        short_description: "College football — conferences, rivalries, and the road to national titles.",
        description: "College football — conferences, rivalries, and the road to national titles. This Ton-o-Lore subject maps people, places, events, and ideas tied to NCAA football so readers can follow long-tail connections across american football."
    },
    {
        slug: "ncaa-football-figures",
        name: "NCAA football figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to NCAA football.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NCAA football."
    },
    {
        slug: "ncaa-football-teams",
        name: "NCAA football teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to NCAA football.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around NCAA football."
    },
    {
        slug: "ncaa-football-venues",
        name: "NCAA football venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host NCAA football.",
        description:
            "Places where NCAA football is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "ncaa-football-events",
        name: "NCAA football events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in NCAA football.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about NCAA football."
    },
    {
        slug: "ncaa-football-rules",
        name: "NCAA football rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for NCAA football.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NCAA football legible as a sport."
    }
];

const relationships = [
    [
        "ncaa-football",
        "ncaa-football-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ncaa-football",
        "ncaa-football-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ncaa-football-figures",
        "ncaa-football-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ncaa-football-events",
        "ncaa-football-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
