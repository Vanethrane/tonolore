/**
 * Seed graph for Asian Games (Olympics & multi-sport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "asian-games",
        name: "Asian Games",
        type: "topic",
        short_description: "Asia's continental multi-sport Games under the Olympic Council of Asia.",
        description: "Asia's continental multi-sport Games under the Olympic Council of Asia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Asian Games so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        slug: "asian-games-figures",
        name: "Asian Games figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Asian Games.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Asian Games."
    },
    {
        slug: "asian-games-teams",
        name: "Asian Games teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Asian Games.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Asian Games."
    },
    {
        slug: "asian-games-venues",
        name: "Asian Games venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Asian Games.",
        description:
            "Places where Asian Games is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "asian-games-events",
        name: "Asian Games events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Asian Games.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Asian Games."
    },
    {
        slug: "asian-games-rules",
        name: "Asian Games rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Asian Games.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Asian Games legible as a sport."
    }
];

const relationships = [
    [
        "asian-games",
        "asian-games-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "asian-games",
        "asian-games-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "asian-games",
        "asian-games-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "asian-games",
        "asian-games-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "asian-games",
        "asian-games-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "asian-games-figures",
        "asian-games-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "asian-games-events",
        "asian-games-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
