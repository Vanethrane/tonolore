/**
 * Seed graph for World Baseball Classic (Baseball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "world-baseball-classic",
        name: "World Baseball Classic",
        type: "topic",
        short_description: "The premier national-team baseball tournament on the modern calendar.",
        description: "The premier national-team baseball tournament on the modern calendar. This Ton-o-Lore subject maps people, places, events, and ideas tied to World Baseball Classic so readers can follow long-tail connections across baseball."
    },
    {
        slug: "world-baseball-classic-figures",
        name: "World Baseball Classic figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to World Baseball Classic.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring World Baseball Classic."
    },
    {
        slug: "world-baseball-classic-teams",
        name: "World Baseball Classic teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to World Baseball Classic.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around World Baseball Classic."
    },
    {
        slug: "world-baseball-classic-venues",
        name: "World Baseball Classic venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host World Baseball Classic.",
        description:
            "Places where World Baseball Classic is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "world-baseball-classic-events",
        name: "World Baseball Classic events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in World Baseball Classic.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about World Baseball Classic."
    },
    {
        slug: "world-baseball-classic-rules",
        name: "World Baseball Classic rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for World Baseball Classic.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make World Baseball Classic legible as a sport."
    }
];

const relationships = [
    [
        "world-baseball-classic",
        "world-baseball-classic-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "world-baseball-classic",
        "world-baseball-classic-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "world-baseball-classic-figures",
        "world-baseball-classic-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "world-baseball-classic-events",
        "world-baseball-classic-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
