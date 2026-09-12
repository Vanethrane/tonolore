/**
 * Seed graph for UFC (Combat sports).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "ufc",
        name: "UFC",
        type: "topic",
        short_description: "Ultimate Fighting Championship — octagon eras, title lineages, and MMA's mainstream face.",
        description: "Ultimate Fighting Championship — octagon eras, title lineages, and MMA's mainstream face. This Ton-o-Lore subject maps people, places, events, and ideas tied to UFC so readers can follow long-tail connections across combat sports."
    },
    {
        slug: "ufc-figures",
        name: "UFC figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to UFC.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring UFC."
    },
    {
        slug: "ufc-teams",
        name: "UFC teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to UFC.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around UFC."
    },
    {
        slug: "ufc-venues",
        name: "UFC venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host UFC.",
        description:
            "Places where UFC is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "ufc-events",
        name: "UFC events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in UFC.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about UFC."
    },
    {
        slug: "ufc-rules",
        name: "UFC rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for UFC.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make UFC legible as a sport."
    }
];

const relationships = [
    [
        "ufc",
        "ufc-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ufc",
        "ufc-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ufc",
        "ufc-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ufc",
        "ufc-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ufc",
        "ufc-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ufc-figures",
        "ufc-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ufc-events",
        "ufc-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
