/**
 * Seed graph for Canadian Football League (American football).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "cfl",
        name: "Canadian Football League",
        type: "topic",
        short_description: "Canada's pro gridiron league — three-downs football, Grey Cup, and northern rivalries.",
        description: "Canada's pro gridiron league — three-downs football, Grey Cup, and northern rivalries. This Ton-o-Lore subject maps people, places, events, and ideas tied to Canadian Football League so readers can follow long-tail connections across american football."
    },
    {
        slug: "cfl-figures",
        name: "Canadian Football League figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Canadian Football League.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Canadian Football League."
    },
    {
        slug: "cfl-teams",
        name: "Canadian Football League teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Canadian Football League.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Canadian Football League."
    },
    {
        slug: "cfl-venues",
        name: "Canadian Football League venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Canadian Football League.",
        description:
            "Places where Canadian Football League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "cfl-events",
        name: "Canadian Football League events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Canadian Football League.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Canadian Football League."
    },
    {
        slug: "cfl-rules",
        name: "Canadian Football League rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Canadian Football League.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Canadian Football League legible as a sport."
    }
];

const relationships = [
    [
        "cfl",
        "cfl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "cfl",
        "cfl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "cfl",
        "cfl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "cfl",
        "cfl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "cfl",
        "cfl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "cfl-figures",
        "cfl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "cfl-events",
        "cfl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
