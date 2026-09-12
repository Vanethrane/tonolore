/**
 * Seed graph for Winter Olympics (Olympics & multi-sport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "winter-olympics",
        name: "Winter Olympics",
        type: "topic",
        short_description: "The Winter Olympic Games — snow and ice sports, host mountains, and cold-weather lore.",
        description: "The Winter Olympic Games — snow and ice sports, host mountains, and cold-weather lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Winter Olympics so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        slug: "winter-olympics-figures",
        name: "Winter Olympics figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Winter Olympics.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Winter Olympics."
    },
    {
        slug: "winter-olympics-teams",
        name: "Winter Olympics teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Winter Olympics.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Winter Olympics."
    },
    {
        slug: "winter-olympics-venues",
        name: "Winter Olympics venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Winter Olympics.",
        description:
            "Places where Winter Olympics is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "winter-olympics-events",
        name: "Winter Olympics events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Winter Olympics.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Winter Olympics."
    },
    {
        slug: "winter-olympics-rules",
        name: "Winter Olympics rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Winter Olympics.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Winter Olympics legible as a sport."
    }
];

const relationships = [
    [
        "winter-olympics",
        "winter-olympics-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "winter-olympics",
        "winter-olympics-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "winter-olympics",
        "winter-olympics-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "winter-olympics",
        "winter-olympics-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "winter-olympics",
        "winter-olympics-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "winter-olympics-figures",
        "winter-olympics-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "winter-olympics-events",
        "winter-olympics-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
