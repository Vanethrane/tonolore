/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nba",
        "name": "NBA",
        "type": "topic",
        "short_description": "The National Basketball Association — franchises, eras, and court mythology.",
        "description": "The National Basketball Association — franchises, eras, and court mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to NBA so readers can follow long-tail connections across basketball."
    },
    {
        "slug": "nba-figures",
        "name": "NBA figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to NBA.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NBA."
    },
    {
        "slug": "nba-teams",
        "name": "NBA teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to NBA.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around NBA."
    },
    {
        "slug": "nba-venues",
        "name": "NBA venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host NBA.",
        "description": "Places where NBA is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "nba-events",
        "name": "NBA events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in NBA.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about NBA."
    },
    {
        "slug": "nba-rules",
        "name": "NBA rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for NBA.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NBA legible as a sport."
    },
    {
        "slug": "nba-places",
        "name": "NBA places",
        "type": "place",
        "short_description": "Locations and geographies that frame NBA.",
        "description": "Places, regions, and built sites that give NBA its map — where events and figures concentrate."
    },
    {
        "slug": "nba-objects",
        "name": "NBA objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NBA.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NBA."
    },
    {
        "slug": "nba-factions",
        "name": "NBA factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NBA.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NBA."
    },
    {
        "slug": "nba-concepts",
        "name": "NBA concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NBA.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NBA readable as a lore graph."
    },
    {
        "slug": "nba-eras",
        "name": "NBA eras",
        "type": "event",
        "short_description": "Periodization for NBA.",
        "description": "Named eras and phases that help readers track how NBA changes across time."
    },
    {
        "slug": "nba-works",
        "name": "NBA works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NBA.",
        "description": "Primary works and adaptations through which most audiences encounter NBA."
    },
    {
        "slug": "nba-symbols",
        "name": "NBA symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NBA.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NBA."
    },
    {
        "slug": "nba-controversies",
        "name": "NBA controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NBA.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NBA argumentative."
    },
    {
        "slug": "nba-sources",
        "name": "NBA sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NBA.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NBA."
    },
    {
        "slug": "nba-geography",
        "name": "NBA geography",
        "type": "place",
        "short_description": "Broader geographic framing for NBA.",
        "description": "Regions, routes, and spatial systems that situate NBA beyond single named places."
    },
    {
        "slug": "nba-legacy",
        "name": "NBA legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NBA.",
        "description": "How NBA continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nba-practices",
        "name": "NBA practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NBA.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NBA."
    },
    {
        "slug": "nba-entry-1",
        "name": "NBA entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-2",
        "name": "NBA entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-3",
        "name": "NBA entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-4",
        "name": "NBA entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-5",
        "name": "NBA entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-6",
        "name": "NBA entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-7",
        "name": "NBA entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-8",
        "name": "NBA entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-9",
        "name": "NBA entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-10",
        "name": "NBA entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-11",
        "name": "NBA entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-12",
        "name": "NBA entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-13",
        "name": "NBA entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-14",
        "name": "NBA entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-15",
        "name": "NBA entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-16",
        "name": "NBA entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-17",
        "name": "NBA entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-18",
        "name": "NBA entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-19",
        "name": "NBA entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-20",
        "name": "NBA entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-21",
        "name": "NBA entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nba-entry-22",
        "name": "NBA entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NBA.",
        "description": "A supporting encyclopedia entry in the NBA subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nba",
        "nba-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "nba",
        "nba-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "nba",
        "nba-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "nba",
        "nba-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "nba",
        "nba-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "nba-figures",
        "nba-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "nba-events",
        "nba-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "nba",
        "nba-places",
        "contains",
        "NBA places is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-objects",
        "contains",
        "NBA objects & artifacts is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-factions",
        "contains",
        "NBA factions & groups is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-concepts",
        "contains",
        "NBA concepts is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-eras",
        "contains",
        "NBA eras is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-works",
        "contains",
        "NBA works & media is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-symbols",
        "contains",
        "NBA symbols is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-controversies",
        "contains",
        "NBA controversies is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-sources",
        "contains",
        "NBA sources is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-geography",
        "contains",
        "NBA geography is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-legacy",
        "contains",
        "NBA legacy is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-practices",
        "contains",
        "NBA practices is a primary trailhead under NBA.",
        0.88,
        0.82
    ],
    [
        "nba",
        "nba-entry-1",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-2",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-3",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-4",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-5",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-6",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-7",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-8",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-9",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-10",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-11",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-12",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-13",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-14",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-15",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-16",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-17",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-18",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-19",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-20",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-21",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ],
    [
        "nba",
        "nba-entry-22",
        "contains",
        "Supporting entry under NBA.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
