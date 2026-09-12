/**
 * Seed graph for EuroLeague (Basketball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "euroleague",
        name: "EuroLeague",
        type: "topic",
        short_description: "Europe's top club basketball competition — Final Four lore and continental rivalries.",
        description: "Europe's top club basketball competition — Final Four lore and continental rivalries. This Ton-o-Lore subject maps people, places, events, and ideas tied to EuroLeague so readers can follow long-tail connections across basketball."
    },
    {
        slug: "euroleague-figures",
        name: "EuroLeague figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to EuroLeague.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring EuroLeague."
    },
    {
        slug: "euroleague-teams",
        name: "EuroLeague teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to EuroLeague.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around EuroLeague."
    },
    {
        slug: "euroleague-venues",
        name: "EuroLeague venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host EuroLeague.",
        description:
            "Places where EuroLeague is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "euroleague-events",
        name: "EuroLeague events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in EuroLeague.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about EuroLeague."
    },
    {
        slug: "euroleague-rules",
        name: "EuroLeague rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for EuroLeague.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make EuroLeague legible as a sport."
    }
];

const relationships = [
    [
        "euroleague",
        "euroleague-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "euroleague",
        "euroleague-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "euroleague",
        "euroleague-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "euroleague",
        "euroleague-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "euroleague",
        "euroleague-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "euroleague-figures",
        "euroleague-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "euroleague-events",
        "euroleague-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
