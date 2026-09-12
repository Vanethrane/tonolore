/**
 * Seed graph for Kickboxing (Combat sports).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "kickboxing",
        name: "Kickboxing",
        type: "topic",
        short_description: "Stand-up striking sports — rulesets from full contact to K-1 style lore.",
        description: "Stand-up striking sports — rulesets from full contact to K-1 style lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Kickboxing so readers can follow long-tail connections across combat sports."
    },
    {
        slug: "kickboxing-figures",
        name: "Kickboxing figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Kickboxing.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Kickboxing."
    },
    {
        slug: "kickboxing-teams",
        name: "Kickboxing teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Kickboxing.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Kickboxing."
    },
    {
        slug: "kickboxing-venues",
        name: "Kickboxing venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Kickboxing.",
        description:
            "Places where Kickboxing is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "kickboxing-events",
        name: "Kickboxing events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Kickboxing.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Kickboxing."
    },
    {
        slug: "kickboxing-rules",
        name: "Kickboxing rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Kickboxing.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Kickboxing legible as a sport."
    }
];

const relationships = [
    [
        "kickboxing",
        "kickboxing-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "kickboxing",
        "kickboxing-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "kickboxing",
        "kickboxing-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "kickboxing",
        "kickboxing-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "kickboxing",
        "kickboxing-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "kickboxing-figures",
        "kickboxing-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "kickboxing-events",
        "kickboxing-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
