/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "commonwealth-games",
        "name": "Commonwealth Games",
        "type": "topic",
        "short_description": "The multi-sport Games of the Commonwealth — shared history and rotating hosts.",
        "description": "The multi-sport Games of the Commonwealth — shared history and rotating hosts. This Ton-o-Lore subject maps people, places, events, and ideas tied to Commonwealth Games so readers can follow long-tail connections across olympics & multi-sport."
    },
    {
        "slug": "commonwealth-games-figures",
        "name": "Commonwealth Games figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Commonwealth Games.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-teams",
        "name": "Commonwealth Games teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Commonwealth Games.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-venues",
        "name": "Commonwealth Games venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Commonwealth Games.",
        "description": "Places where Commonwealth Games is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "commonwealth-games-events",
        "name": "Commonwealth Games events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Commonwealth Games.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-rules",
        "name": "Commonwealth Games rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Commonwealth Games.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Commonwealth Games legible as a sport."
    },
    {
        "slug": "commonwealth-games-places",
        "name": "Commonwealth Games places",
        "type": "place",
        "short_description": "Locations and geographies that frame Commonwealth Games.",
        "description": "Places, regions, and built sites that give Commonwealth Games its map — where events and figures concentrate."
    },
    {
        "slug": "commonwealth-games-objects",
        "name": "Commonwealth Games objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Commonwealth Games.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-factions",
        "name": "Commonwealth Games factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Commonwealth Games.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-concepts",
        "name": "Commonwealth Games concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Commonwealth Games.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Commonwealth Games readable as a lore graph."
    },
    {
        "slug": "commonwealth-games-eras",
        "name": "Commonwealth Games eras",
        "type": "event",
        "short_description": "Periodization for Commonwealth Games.",
        "description": "Named eras and phases that help readers track how Commonwealth Games changes across time."
    },
    {
        "slug": "commonwealth-games-works",
        "name": "Commonwealth Games works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Commonwealth Games.",
        "description": "Primary works and adaptations through which most audiences encounter Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-symbols",
        "name": "Commonwealth Games symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Commonwealth Games.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-controversies",
        "name": "Commonwealth Games controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Commonwealth Games.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Commonwealth Games argumentative."
    },
    {
        "slug": "commonwealth-games-sources",
        "name": "Commonwealth Games sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Commonwealth Games.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-geography",
        "name": "Commonwealth Games geography",
        "type": "place",
        "short_description": "Broader geographic framing for Commonwealth Games.",
        "description": "Regions, routes, and spatial systems that situate Commonwealth Games beyond single named places."
    },
    {
        "slug": "commonwealth-games-legacy",
        "name": "Commonwealth Games legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Commonwealth Games.",
        "description": "How Commonwealth Games continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "commonwealth-games-practices",
        "name": "Commonwealth Games practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Commonwealth Games.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Commonwealth Games."
    },
    {
        "slug": "commonwealth-games-entry-1",
        "name": "Commonwealth Games entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-2",
        "name": "Commonwealth Games entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-3",
        "name": "Commonwealth Games entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-4",
        "name": "Commonwealth Games entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-5",
        "name": "Commonwealth Games entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-6",
        "name": "Commonwealth Games entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-7",
        "name": "Commonwealth Games entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-8",
        "name": "Commonwealth Games entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-9",
        "name": "Commonwealth Games entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-10",
        "name": "Commonwealth Games entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-11",
        "name": "Commonwealth Games entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-12",
        "name": "Commonwealth Games entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-13",
        "name": "Commonwealth Games entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-14",
        "name": "Commonwealth Games entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-15",
        "name": "Commonwealth Games entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-16",
        "name": "Commonwealth Games entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-17",
        "name": "Commonwealth Games entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-18",
        "name": "Commonwealth Games entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-19",
        "name": "Commonwealth Games entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-20",
        "name": "Commonwealth Games entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-21",
        "name": "Commonwealth Games entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commonwealth-games-entry-22",
        "name": "Commonwealth Games entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commonwealth Games.",
        "description": "A supporting encyclopedia entry in the Commonwealth Games subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "commonwealth-games",
        "commonwealth-games-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "commonwealth-games",
        "commonwealth-games-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "commonwealth-games",
        "commonwealth-games-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "commonwealth-games",
        "commonwealth-games-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "commonwealth-games",
        "commonwealth-games-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "commonwealth-games-figures",
        "commonwealth-games-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "commonwealth-games-events",
        "commonwealth-games-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "commonwealth-games",
        "commonwealth-games-places",
        "contains",
        "Commonwealth Games places is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-objects",
        "contains",
        "Commonwealth Games objects & artifacts is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-factions",
        "contains",
        "Commonwealth Games factions & groups is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-concepts",
        "contains",
        "Commonwealth Games concepts is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-eras",
        "contains",
        "Commonwealth Games eras is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-works",
        "contains",
        "Commonwealth Games works & media is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-symbols",
        "contains",
        "Commonwealth Games symbols is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-controversies",
        "contains",
        "Commonwealth Games controversies is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-sources",
        "contains",
        "Commonwealth Games sources is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-geography",
        "contains",
        "Commonwealth Games geography is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-legacy",
        "contains",
        "Commonwealth Games legacy is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-practices",
        "contains",
        "Commonwealth Games practices is a primary trailhead under Commonwealth Games.",
        0.88,
        0.82
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-1",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-2",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-3",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-4",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-5",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-6",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-7",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-8",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-9",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-10",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-11",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-12",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-13",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-14",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-15",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-16",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-17",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-18",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-19",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-20",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-21",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ],
    [
        "commonwealth-games",
        "commonwealth-games-entry-22",
        "contains",
        "Supporting entry under Commonwealth Games.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
