/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "french-open",
        "name": "French Open",
        "type": "topic",
        "short_description": "Roland-Garros — clay-court grind and Paris Slam tradition.",
        "description": "Roland-Garros — clay-court grind and Paris Slam tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to French Open so readers can follow long-tail connections across tennis."
    },
    {
        "slug": "french-open-figures",
        "name": "French Open figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to French Open.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring French Open."
    },
    {
        "slug": "french-open-teams",
        "name": "French Open teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to French Open.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around French Open."
    },
    {
        "slug": "french-open-venues",
        "name": "French Open venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host French Open.",
        "description": "Places where French Open is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "french-open-events",
        "name": "French Open events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in French Open.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about French Open."
    },
    {
        "slug": "french-open-rules",
        "name": "French Open rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for French Open.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make French Open legible as a sport."
    },
    {
        "slug": "french-open-places",
        "name": "French Open places",
        "type": "place",
        "short_description": "Locations and geographies that frame French Open.",
        "description": "Places, regions, and built sites that give French Open its map — where events and figures concentrate."
    },
    {
        "slug": "french-open-objects",
        "name": "French Open objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to French Open.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through French Open."
    },
    {
        "slug": "french-open-factions",
        "name": "French Open factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside French Open.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in French Open."
    },
    {
        "slug": "french-open-concepts",
        "name": "French Open concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize French Open.",
        "description": "Keywords, doctrines, systems, and abstract forces that make French Open readable as a lore graph."
    },
    {
        "slug": "french-open-eras",
        "name": "French Open eras",
        "type": "event",
        "short_description": "Periodization for French Open.",
        "description": "Named eras and phases that help readers track how French Open changes across time."
    },
    {
        "slug": "french-open-works",
        "name": "French Open works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry French Open.",
        "description": "Primary works and adaptations through which most audiences encounter French Open."
    },
    {
        "slug": "french-open-symbols",
        "name": "French Open symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with French Open.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside French Open."
    },
    {
        "slug": "french-open-controversies",
        "name": "French Open controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in French Open.",
        "description": "Debates, rival canons, scandals, and contested facts that keep French Open argumentative."
    },
    {
        "slug": "french-open-sources",
        "name": "French Open sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into French Open.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify French Open."
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
    ],
    [
        "french-open",
        "french-open-places",
        "contains",
        "French Open places is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-objects",
        "contains",
        "French Open objects & artifacts is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-factions",
        "contains",
        "French Open factions & groups is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-concepts",
        "contains",
        "French Open concepts is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-eras",
        "contains",
        "French Open eras is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-works",
        "contains",
        "French Open works & media is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-symbols",
        "contains",
        "French Open symbols is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-controversies",
        "contains",
        "French Open controversies is a primary trailhead under French Open.",
        0.88,
        0.82
    ],
    [
        "french-open",
        "french-open-sources",
        "contains",
        "French Open sources is a primary trailhead under French Open.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
