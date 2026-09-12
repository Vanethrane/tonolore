/**
 * Seed graph for UEFA Champions League (Soccer).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "uefa-champions-league",
        name: "UEFA Champions League",
        type: "topic",
        short_description: "Europe's elite club competition — anthems, nights in Lisbon and Istanbul, and continental crowns.",
        description: "Europe's elite club competition — anthems, nights in Lisbon and Istanbul, and continental crowns. This Ton-o-Lore subject maps people, places, events, and ideas tied to UEFA Champions League so readers can follow long-tail connections across soccer."
    },
    {
        slug: "uefa-champions-league-figures",
        name: "UEFA Champions League figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to UEFA Champions League.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring UEFA Champions League."
    },
    {
        slug: "uefa-champions-league-teams",
        name: "UEFA Champions League teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to UEFA Champions League.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around UEFA Champions League."
    },
    {
        slug: "uefa-champions-league-venues",
        name: "UEFA Champions League venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host UEFA Champions League.",
        description:
            "Places where UEFA Champions League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "uefa-champions-league-events",
        name: "UEFA Champions League events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in UEFA Champions League.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about UEFA Champions League."
    },
    {
        slug: "uefa-champions-league-rules",
        name: "UEFA Champions League rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for UEFA Champions League.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make UEFA Champions League legible as a sport."
    }
];

const relationships = [
    [
        "uefa-champions-league",
        "uefa-champions-league-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "uefa-champions-league",
        "uefa-champions-league-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "uefa-champions-league-figures",
        "uefa-champions-league-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "uefa-champions-league-events",
        "uefa-champions-league-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
