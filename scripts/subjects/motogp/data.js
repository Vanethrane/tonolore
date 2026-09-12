/**
 * Seed graph for MotoGP (Motorsport).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "motogp",
        name: "MotoGP",
        type: "topic",
        short_description: "Motorcycle Grand Prix racing — classes, circuits, and factory rivalries.",
        description: "Motorcycle Grand Prix racing — classes, circuits, and factory rivalries. This Ton-o-Lore subject maps people, places, events, and ideas tied to MotoGP so readers can follow long-tail connections across motorsport."
    },
    {
        slug: "motogp-figures",
        name: "MotoGP figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to MotoGP.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring MotoGP."
    },
    {
        slug: "motogp-teams",
        name: "MotoGP teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to MotoGP.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around MotoGP."
    },
    {
        slug: "motogp-venues",
        name: "MotoGP venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host MotoGP.",
        description:
            "Places where MotoGP is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "motogp-events",
        name: "MotoGP events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in MotoGP.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about MotoGP."
    },
    {
        slug: "motogp-rules",
        name: "MotoGP rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for MotoGP.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make MotoGP legible as a sport."
    }
];

const relationships = [
    [
        "motogp",
        "motogp-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "motogp",
        "motogp-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "motogp",
        "motogp-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "motogp",
        "motogp-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "motogp",
        "motogp-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "motogp-figures",
        "motogp-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "motogp-events",
        "motogp-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
