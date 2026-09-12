/**
 * Seed graph for FIFA World Cup (Soccer).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "fifa-world-cup",
        name: "FIFA World Cup",
        type: "topic",
        short_description: "The quadrennial football tournament that remaps national sporting identity.",
        description: "The quadrennial football tournament that remaps national sporting identity. This Ton-o-Lore subject maps people, places, events, and ideas tied to FIFA World Cup so readers can follow long-tail connections across soccer."
    },
    {
        slug: "fifa-world-cup-figures",
        name: "FIFA World Cup figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to FIFA World Cup.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring FIFA World Cup."
    },
    {
        slug: "fifa-world-cup-teams",
        name: "FIFA World Cup teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to FIFA World Cup.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around FIFA World Cup."
    },
    {
        slug: "fifa-world-cup-venues",
        name: "FIFA World Cup venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host FIFA World Cup.",
        description:
            "Places where FIFA World Cup is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "fifa-world-cup-events",
        name: "FIFA World Cup events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in FIFA World Cup.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about FIFA World Cup."
    },
    {
        slug: "fifa-world-cup-rules",
        name: "FIFA World Cup rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for FIFA World Cup.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make FIFA World Cup legible as a sport."
    }
];

const relationships = [
    [
        "fifa-world-cup",
        "fifa-world-cup-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "fifa-world-cup",
        "fifa-world-cup-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "fifa-world-cup-figures",
        "fifa-world-cup-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "fifa-world-cup-events",
        "fifa-world-cup-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
