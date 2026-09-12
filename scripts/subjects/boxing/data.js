/**
 * Seed graph for Boxing (Combat sports).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "boxing",
        name: "Boxing",
        type: "topic",
        short_description: "The sweet science — weight classes, belts, and championship lore across eras.",
        description: "The sweet science — weight classes, belts, and championship lore across eras. This Ton-o-Lore subject maps people, places, events, and ideas tied to Boxing so readers can follow long-tail connections across combat sports."
    },
    {
        slug: "boxing-figures",
        name: "Boxing figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Boxing.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Boxing."
    },
    {
        slug: "boxing-teams",
        name: "Boxing teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Boxing.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Boxing."
    },
    {
        slug: "boxing-venues",
        name: "Boxing venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Boxing.",
        description:
            "Places where Boxing is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "boxing-events",
        name: "Boxing events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Boxing.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Boxing."
    },
    {
        slug: "boxing-rules",
        name: "Boxing rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Boxing.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Boxing legible as a sport."
    }
];

const relationships = [
    [
        "boxing",
        "boxing-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "boxing",
        "boxing-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "boxing-figures",
        "boxing-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "boxing-events",
        "boxing-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
