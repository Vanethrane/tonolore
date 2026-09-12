/**
 * Seed graph (auto-padded to ≥15 entities for crawl depth).
 */

const entities = [
    {
        "slug": "australian-open",
        "name": "Australian Open",
        "type": "topic",
        "short_description": "The season-opening Slam in Melbourne — heat, arenas, and summer tennis.",
        "description": "The season-opening Slam in Melbourne — heat, arenas, and summer tennis. This Ton-o-Lore subject maps people, places, events, and ideas tied to Australian Open so readers can follow long-tail connections across tennis."
    },
    {
        "slug": "australian-open-figures",
        "name": "Australian Open figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Australian Open.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Australian Open."
    },
    {
        "slug": "australian-open-teams",
        "name": "Australian Open teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Australian Open.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Australian Open."
    },
    {
        "slug": "australian-open-venues",
        "name": "Australian Open venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Australian Open.",
        "description": "Places where Australian Open is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "australian-open-events",
        "name": "Australian Open events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Australian Open.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Australian Open."
    },
    {
        "slug": "australian-open-rules",
        "name": "Australian Open rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Australian Open.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Australian Open legible as a sport."
    },
    {
        "slug": "australian-open-places",
        "name": "Australian Open places",
        "type": "place",
        "short_description": "Locations and geographies that frame Australian Open.",
        "description": "Places, regions, and built sites that give Australian Open its map — where events and figures concentrate."
    },
    {
        "slug": "australian-open-objects",
        "name": "Australian Open objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Australian Open.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Australian Open."
    },
    {
        "slug": "australian-open-factions",
        "name": "Australian Open factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Australian Open.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Australian Open."
    },
    {
        "slug": "australian-open-concepts",
        "name": "Australian Open concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Australian Open.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Australian Open readable as a lore graph."
    },
    {
        "slug": "australian-open-eras",
        "name": "Australian Open eras",
        "type": "event",
        "short_description": "Periodization for Australian Open.",
        "description": "Named eras and phases that help readers track how Australian Open changes across time."
    },
    {
        "slug": "australian-open-works",
        "name": "Australian Open works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Australian Open.",
        "description": "Primary works and adaptations through which most audiences encounter Australian Open."
    },
    {
        "slug": "australian-open-symbols",
        "name": "Australian Open symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Australian Open.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Australian Open."
    },
    {
        "slug": "australian-open-controversies",
        "name": "Australian Open controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Australian Open.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Australian Open argumentative."
    },
    {
        "slug": "australian-open-sources",
        "name": "Australian Open sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Australian Open.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Australian Open."
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
    ],
    [
        "australian-open",
        "australian-open-places",
        "contains",
        "Australian Open places is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-objects",
        "contains",
        "Australian Open objects & artifacts is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-factions",
        "contains",
        "Australian Open factions & groups is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-concepts",
        "contains",
        "Australian Open concepts is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-eras",
        "contains",
        "Australian Open eras is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-works",
        "contains",
        "Australian Open works & media is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-symbols",
        "contains",
        "Australian Open symbols is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-controversies",
        "contains",
        "Australian Open controversies is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ],
    [
        "australian-open",
        "australian-open-sources",
        "contains",
        "Australian Open sources is a primary trailhead under Australian Open.",
        0.88,
        0.82
    ]
];

module.exports = { entities, relationships };
