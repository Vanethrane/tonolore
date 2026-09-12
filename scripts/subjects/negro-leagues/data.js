/**
 * Seed graph for Negro Leagues (Baseball).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "negro-leagues",
        name: "Negro Leagues",
        type: "topic",
        short_description: "Black baseball before and beside integration — teams, barnstorming, and Hall of Fame recognition.",
        description: "Black baseball before and beside integration — teams, barnstorming, and Hall of Fame recognition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Negro Leagues so readers can follow long-tail connections across baseball."
    },
    {
        slug: "negro-leagues-figures",
        name: "Negro Leagues figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Negro Leagues.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Negro Leagues."
    },
    {
        slug: "negro-leagues-teams",
        name: "Negro Leagues teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Negro Leagues.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Negro Leagues."
    },
    {
        slug: "negro-leagues-venues",
        name: "Negro Leagues venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Negro Leagues.",
        description:
            "Places where Negro Leagues is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "negro-leagues-events",
        name: "Negro Leagues events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Negro Leagues.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Negro Leagues."
    },
    {
        slug: "negro-leagues-rules",
        name: "Negro Leagues rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Negro Leagues.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Negro Leagues legible as a sport."
    }
];

const relationships = [
    [
        "negro-leagues",
        "negro-leagues-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "negro-leagues",
        "negro-leagues-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "negro-leagues",
        "negro-leagues-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "negro-leagues",
        "negro-leagues-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "negro-leagues",
        "negro-leagues-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "negro-leagues-figures",
        "negro-leagues-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "negro-leagues-events",
        "negro-leagues-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
