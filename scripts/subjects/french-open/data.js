/**
 * Seed graph for French Open (Tennis).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "french-open",
        name: "French Open",
        type: "topic",
        short_description: "Roland-Garros — clay-court grind and Paris Slam tradition.",
        description: "Roland-Garros — clay-court grind and Paris Slam tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to French Open so readers can follow long-tail connections across tennis."
    },
    {
        slug: "french-open-figures",
        name: "French Open figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to French Open.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring French Open."
    },
    {
        slug: "french-open-teams",
        name: "French Open teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to French Open.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around French Open."
    },
    {
        slug: "french-open-venues",
        name: "French Open venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host French Open.",
        description:
            "Places where French Open is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "french-open-events",
        name: "French Open events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in French Open.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about French Open."
    },
    {
        slug: "french-open-rules",
        name: "French Open rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for French Open.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make French Open legible as a sport."
    }
];

const relationships = [
    [
        "french-open",
        "french-open-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "french-open",
        "french-open-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "french-open",
        "french-open-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "french-open",
        "french-open-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "french-open",
        "french-open-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "french-open-figures",
        "french-open-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "french-open-events",
        "french-open-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
