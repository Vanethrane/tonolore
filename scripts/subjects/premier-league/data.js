/**
 * Seed graph for Premier League (Soccer).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "premier-league",
        name: "Premier League",
        type: "topic",
        short_description: "England's top flight — title races, relegation battles, and global broadcast lore.",
        description: "England's top flight — title races, relegation battles, and global broadcast lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Premier League so readers can follow long-tail connections across soccer."
    },
    {
        slug: "premier-league-figures",
        name: "Premier League figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Premier League.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Premier League."
    },
    {
        slug: "premier-league-teams",
        name: "Premier League teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Premier League.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Premier League."
    },
    {
        slug: "premier-league-venues",
        name: "Premier League venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Premier League.",
        description:
            "Places where Premier League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "premier-league-events",
        name: "Premier League events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Premier League.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Premier League."
    },
    {
        slug: "premier-league-rules",
        name: "Premier League rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Premier League.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Premier League legible as a sport."
    }
];

const relationships = [
    [
        "premier-league",
        "premier-league-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "premier-league",
        "premier-league-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "premier-league",
        "premier-league-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "premier-league",
        "premier-league-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "premier-league",
        "premier-league-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "premier-league-figures",
        "premier-league-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "premier-league-events",
        "premier-league-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
