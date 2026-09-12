/**
 * Seed graph for Olympic wrestling (Combat sports).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "olympic-wrestling",
        name: "Olympic wrestling",
        type: "topic",
        short_description: "Freestyle and Greco-Roman wrestling on the Olympic and world stage.",
        description: "Freestyle and Greco-Roman wrestling on the Olympic and world stage. This Ton-o-Lore subject maps people, places, events, and ideas tied to Olympic wrestling so readers can follow long-tail connections across combat sports."
    },
    {
        slug: "olympic-wrestling-figures",
        name: "Olympic wrestling figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Olympic wrestling.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Olympic wrestling."
    },
    {
        slug: "olympic-wrestling-teams",
        name: "Olympic wrestling teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Olympic wrestling.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Olympic wrestling."
    },
    {
        slug: "olympic-wrestling-venues",
        name: "Olympic wrestling venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Olympic wrestling.",
        description:
            "Places where Olympic wrestling is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "olympic-wrestling-events",
        name: "Olympic wrestling events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Olympic wrestling.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Olympic wrestling."
    },
    {
        slug: "olympic-wrestling-rules",
        name: "Olympic wrestling rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Olympic wrestling.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Olympic wrestling legible as a sport."
    }
];

const relationships = [
    [
        "olympic-wrestling",
        "olympic-wrestling-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "olympic-wrestling",
        "olympic-wrestling-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "olympic-wrestling-figures",
        "olympic-wrestling-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "olympic-wrestling-events",
        "olympic-wrestling-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
