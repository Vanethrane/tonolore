/**
 * Seed graph for 24 Hours of Le Mans (Motorsport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "24-hours-of-le-mans",
        name: "24 Hours of Le Mans",
        type: "topic",
        short_description: "The legendary endurance race on the Circuit de la Sarthe.",
        description: "The legendary endurance race on the Circuit de la Sarthe. This Ton-o-Lore subject maps people, places, events, and ideas tied to 24 Hours of Le Mans so readers can follow long-tail connections across motorsport."
    },
    {
        slug: "24-hours-of-le-mans-figures",
        name: "24 Hours of Le Mans figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to 24 Hours of Le Mans.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring 24 Hours of Le Mans."
    },
    {
        slug: "24-hours-of-le-mans-teams",
        name: "24 Hours of Le Mans teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to 24 Hours of Le Mans.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around 24 Hours of Le Mans."
    },
    {
        slug: "24-hours-of-le-mans-venues",
        name: "24 Hours of Le Mans venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host 24 Hours of Le Mans.",
        description:
            "Places where 24 Hours of Le Mans is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "24-hours-of-le-mans-events",
        name: "24 Hours of Le Mans events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in 24 Hours of Le Mans.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about 24 Hours of Le Mans."
    },
    {
        slug: "24-hours-of-le-mans-rules",
        name: "24 Hours of Le Mans rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for 24 Hours of Le Mans.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make 24 Hours of Le Mans legible as a sport."
    }
];

const relationships = [
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "24-hours-of-le-mans",
        "24-hours-of-le-mans-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "24-hours-of-le-mans-figures",
        "24-hours-of-le-mans-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "24-hours-of-le-mans-events",
        "24-hours-of-le-mans-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
