/**
 * Seed graph for Nippon Professional Baseball (Baseball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "nippon-professional-baseball",
        name: "Nippon Professional Baseball",
        type: "topic",
        short_description: "Japan's top baseball leagues — Central and Pacific, Japan Series, and samurai baseball lore.",
        description: "Japan's top baseball leagues — Central and Pacific, Japan Series, and samurai baseball lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Nippon Professional Baseball so readers can follow long-tail connections across baseball."
    },
    {
        slug: "nippon-professional-baseball-figures",
        name: "Nippon Professional Baseball figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Nippon Professional Baseball.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Nippon Professional Baseball."
    },
    {
        slug: "nippon-professional-baseball-teams",
        name: "Nippon Professional Baseball teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Nippon Professional Baseball.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Nippon Professional Baseball."
    },
    {
        slug: "nippon-professional-baseball-venues",
        name: "Nippon Professional Baseball venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Nippon Professional Baseball.",
        description:
            "Places where Nippon Professional Baseball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "nippon-professional-baseball-events",
        name: "Nippon Professional Baseball events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Nippon Professional Baseball.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Nippon Professional Baseball."
    },
    {
        slug: "nippon-professional-baseball-rules",
        name: "Nippon Professional Baseball rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Nippon Professional Baseball.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Nippon Professional Baseball legible as a sport."
    }
];

const relationships = [
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nippon-professional-baseball",
        "nippon-professional-baseball-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nippon-professional-baseball-figures",
        "nippon-professional-baseball-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nippon-professional-baseball-events",
        "nippon-professional-baseball-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
