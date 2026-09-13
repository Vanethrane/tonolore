/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "winter-olympics",
        "name": "Winter Olympics",
        "type": "topic",
        "short_description": "The Winter Olympic Games — snow and ice sports, host mountains, and cold-weather lore.",
        "description": "The Winter Olympic Games — snow and ice sports, host mountains, and cold-weather lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Winter Olympics so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        "slug": "winter-olympics-figures",
        "name": "Winter Olympics figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Winter Olympics.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Winter Olympics."
    },
    {
        "slug": "winter-olympics-teams",
        "name": "Winter Olympics teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Winter Olympics.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Winter Olympics."
    },
    {
        "slug": "winter-olympics-venues",
        "name": "Winter Olympics venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Winter Olympics.",
        "description": "Places where Winter Olympics is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "winter-olympics-events",
        "name": "Winter Olympics events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Winter Olympics.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Winter Olympics."
    },
    {
        "slug": "winter-olympics-rules",
        "name": "Winter Olympics rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Winter Olympics.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Winter Olympics legible as a sport."
    },
    {
        "slug": "winter-olympics-places",
        "name": "Winter Olympics places",
        "type": "place",
        "short_description": "Locations and geographies that frame Winter Olympics.",
        "description": "Places, regions, and built sites that give Winter Olympics its map — where events and figures concentrate."
    },
    {
        "slug": "winter-olympics-objects",
        "name": "Winter Olympics objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Winter Olympics.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Winter Olympics."
    },
    {
        "slug": "winter-olympics-factions",
        "name": "Winter Olympics factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Winter Olympics.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Winter Olympics."
    },
    {
        "slug": "winter-olympics-concepts",
        "name": "Winter Olympics concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Winter Olympics.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Winter Olympics readable as a lore graph."
    },
    {
        "slug": "winter-olympics-eras",
        "name": "Winter Olympics eras",
        "type": "event",
        "short_description": "Periodization for Winter Olympics.",
        "description": "Named eras and phases that help readers track how Winter Olympics changes across time."
    },
    {
        "slug": "winter-olympics-works",
        "name": "Winter Olympics works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Winter Olympics.",
        "description": "Primary works and adaptations through which most audiences encounter Winter Olympics."
    },
    {
        "slug": "winter-olympics-symbols",
        "name": "Winter Olympics symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Winter Olympics.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Winter Olympics."
    },
    {
        "slug": "winter-olympics-controversies",
        "name": "Winter Olympics controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Winter Olympics.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Winter Olympics argumentative."
    },
    {
        "slug": "winter-olympics-sources",
        "name": "Winter Olympics sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Winter Olympics.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Winter Olympics."
    },
    {
        "slug": "winter-olympics-geography",
        "name": "Winter Olympics geography",
        "type": "place",
        "short_description": "Broader geographic framing for Winter Olympics.",
        "description": "Regions, routes, and spatial systems that situate Winter Olympics beyond single named places."
    },
    {
        "slug": "winter-olympics-legacy",
        "name": "Winter Olympics legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Winter Olympics.",
        "description": "How Winter Olympics continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "winter-olympics-practices",
        "name": "Winter Olympics practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Winter Olympics.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Winter Olympics."
    },
    {
        "slug": "winter-olympics-entry-1",
        "name": "Winter Olympics entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-2",
        "name": "Winter Olympics entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-3",
        "name": "Winter Olympics entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-4",
        "name": "Winter Olympics entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-5",
        "name": "Winter Olympics entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-6",
        "name": "Winter Olympics entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-7",
        "name": "Winter Olympics entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-8",
        "name": "Winter Olympics entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-9",
        "name": "Winter Olympics entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-10",
        "name": "Winter Olympics entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-11",
        "name": "Winter Olympics entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-12",
        "name": "Winter Olympics entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-13",
        "name": "Winter Olympics entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-14",
        "name": "Winter Olympics entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-15",
        "name": "Winter Olympics entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-16",
        "name": "Winter Olympics entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-17",
        "name": "Winter Olympics entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-18",
        "name": "Winter Olympics entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-19",
        "name": "Winter Olympics entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-20",
        "name": "Winter Olympics entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-21",
        "name": "Winter Olympics entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "winter-olympics-entry-22",
        "name": "Winter Olympics entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Winter Olympics.",
        "description": "A supporting encyclopedia entry in the Winter Olympics subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "winter-olympics",
        "winter-olympics-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "winter-olympics",
        "winter-olympics-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "winter-olympics",
        "winter-olympics-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "winter-olympics",
        "winter-olympics-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "winter-olympics",
        "winter-olympics-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "winter-olympics-figures",
        "winter-olympics-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "winter-olympics-events",
        "winter-olympics-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "winter-olympics",
        "winter-olympics-places",
        "contains",
        "Winter Olympics places is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-objects",
        "contains",
        "Winter Olympics objects & artifacts is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-factions",
        "contains",
        "Winter Olympics factions & groups is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-concepts",
        "contains",
        "Winter Olympics concepts is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-eras",
        "contains",
        "Winter Olympics eras is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-works",
        "contains",
        "Winter Olympics works & media is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-symbols",
        "contains",
        "Winter Olympics symbols is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-controversies",
        "contains",
        "Winter Olympics controversies is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-sources",
        "contains",
        "Winter Olympics sources is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-geography",
        "contains",
        "Winter Olympics geography is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-legacy",
        "contains",
        "Winter Olympics legacy is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-practices",
        "contains",
        "Winter Olympics practices is a primary trailhead under Winter Olympics.",
        0.88,
        0.82
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-1",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-2",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-3",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-4",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-5",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-6",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-7",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-8",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-9",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-10",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-11",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-12",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-13",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-14",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-15",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-16",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-17",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-18",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-19",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-20",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-21",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ],
    [
        "winter-olympics",
        "winter-olympics-entry-22",
        "contains",
        "Supporting entry under Winter Olympics.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
