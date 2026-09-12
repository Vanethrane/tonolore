/**
 * Seed graph for La Liga (Soccer).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "la-liga",
        name: "La Liga",
        type: "topic",
        short_description: "Spain's Primera División — El Clásico, tiki-taka eras, and club academies.",
        description: "Spain's Primera División — El Clásico, tiki-taka eras, and club academies. This Ton-o-Lore subject maps people, places, events, and ideas tied to La Liga so readers can follow long-tail connections across soccer."
    },
    {
        slug: "la-liga-figures",
        name: "La Liga figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to La Liga.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring La Liga."
    },
    {
        slug: "la-liga-teams",
        name: "La Liga teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to La Liga.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around La Liga."
    },
    {
        slug: "la-liga-venues",
        name: "La Liga venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host La Liga.",
        description:
            "Places where La Liga is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "la-liga-events",
        name: "La Liga events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in La Liga.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about La Liga."
    },
    {
        slug: "la-liga-rules",
        name: "La Liga rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for La Liga.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make La Liga legible as a sport."
    }
];

const relationships = [
    [
        "la-liga",
        "la-liga-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "la-liga",
        "la-liga-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "la-liga",
        "la-liga-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "la-liga",
        "la-liga-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "la-liga",
        "la-liga-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "la-liga-figures",
        "la-liga-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "la-liga-events",
        "la-liga-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
