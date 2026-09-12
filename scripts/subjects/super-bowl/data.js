/**
 * Seed graph for Super Bowl (American football).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "super-bowl",
        name: "Super Bowl",
        type: "topic",
        short_description: "The NFL championship game — Roman numerals, halftime lore, and American spectacle.",
        description: "The NFL championship game — Roman numerals, halftime lore, and American spectacle. This Ton-o-Lore subject maps people, places, events, and ideas tied to Super Bowl so readers can follow long-tail connections across american football."
    },
    {
        slug: "super-bowl-figures",
        name: "Super Bowl figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Super Bowl.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Super Bowl."
    },
    {
        slug: "super-bowl-teams",
        name: "Super Bowl teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Super Bowl.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Super Bowl."
    },
    {
        slug: "super-bowl-venues",
        name: "Super Bowl venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Super Bowl.",
        description:
            "Places where Super Bowl is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "super-bowl-events",
        name: "Super Bowl events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Super Bowl.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Super Bowl."
    },
    {
        slug: "super-bowl-rules",
        name: "Super Bowl rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Super Bowl.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Super Bowl legible as a sport."
    }
];

const relationships = [
    [
        "super-bowl",
        "super-bowl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "super-bowl",
        "super-bowl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "super-bowl-figures",
        "super-bowl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "super-bowl-events",
        "super-bowl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
