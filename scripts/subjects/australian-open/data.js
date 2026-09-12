/**
 * Seed graph for Australian Open (Tennis).
 * At least five long-tail trailheads under the subject root.
 */

const entities = [
    {
        slug: "australian-open",
        name: "Australian Open",
        type: "topic",
        short_description: "The season-opening Slam in Melbourne — heat, arenas, and summer tennis.",
        description: "The season-opening Slam in Melbourne — heat, arenas, and summer tennis. This Ton-o-Lore subject maps people, places, events, and ideas tied to Australian Open so readers can follow long-tail connections across tennis."
    },
    {
        slug: "australian-open-figures",
        name: "Australian Open figures",
        type: "topic",
        short_description: "Athletes, coaches, and named forces central to Australian Open.",
        description:
            "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Australian Open."
    },
    {
        slug: "australian-open-teams",
        name: "Australian Open teams & clubs",
        type: "organization",
        short_description: "Franchises, national sides, and clubs tied to Australian Open.",
        description:
            "Team and club identities that structure seasons, rivalries, and fan lore around Australian Open."
    },
    {
        slug: "australian-open-venues",
        name: "Australian Open venues",
        type: "place",
        short_description: "Stadiums, arenas, and circuits that host Australian Open.",
        description:
            "Places where Australian Open is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        slug: "australian-open-events",
        name: "Australian Open events",
        type: "event",
        short_description: "Seasons, finals, and landmark moments in Australian Open.",
        description:
            "Championships, eras, and signature events that periodize how fans and writers talk about Australian Open."
    },
    {
        slug: "australian-open-rules",
        name: "Australian Open rules & format",
        type: "concept",
        short_description: "Competition format, scoring, and governing ideas for Australian Open.",
        description:
            "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Australian Open legible as a sport."
    }
];

const relationships = [
    [
        "australian-open",
        "australian-open-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "australian-open",
        "australian-open-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "australian-open",
        "australian-open-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "australian-open",
        "australian-open-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "australian-open",
        "australian-open-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "australian-open-figures",
        "australian-open-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "australian-open-events",
        "australian-open-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ]
];

module.exports = { entities, relationships };
