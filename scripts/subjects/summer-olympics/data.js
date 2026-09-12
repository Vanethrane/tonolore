/**
 * Seed graph for Summer Olympics (Olympics & multi-sport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "summer-olympics",
        name: "Summer Olympics",
        type: "topic",
        short_description: "The Summer Olympic Games — host cities, sports programs, and ceremonial tradition.",
        description: "The Summer Olympic Games — host cities, sports programs, and ceremonial tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Summer Olympics so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        slug: "summer-olympics-figures",
        name: "Summer Olympics figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Summer Olympics.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Summer Olympics."
    },
    {
        slug: "summer-olympics-teams",
        name: "Summer Olympics teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Summer Olympics.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Summer Olympics."
    },
    {
        slug: "summer-olympics-venues",
        name: "Summer Olympics venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Summer Olympics.",
        description:
            "Places where Summer Olympics is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "summer-olympics-events",
        name: "Summer Olympics events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Summer Olympics.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Summer Olympics."
    },
    {
        slug: "summer-olympics-rules",
        name: "Summer Olympics rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Summer Olympics.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Summer Olympics legible as a sport."
    }
];

const relationships = [
    [
        "summer-olympics",
        "summer-olympics-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "summer-olympics",
        "summer-olympics-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "summer-olympics",
        "summer-olympics-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "summer-olympics",
        "summer-olympics-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "summer-olympics",
        "summer-olympics-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "summer-olympics-figures",
        "summer-olympics-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "summer-olympics-events",
        "summer-olympics-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
