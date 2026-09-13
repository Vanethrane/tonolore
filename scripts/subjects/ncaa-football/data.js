/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ncaa-football",
        "name": "NCAA football",
        "type": "topic",
        "short_description": "College football — conferences, rivalries, and the road to national titles.",
        "description": "College football — conferences, rivalries, and the road to national titles. This Ton-o-Lore subject maps people, places, events, and ideas tied to NCAA football so readers can follow long-tail connections across american football."
    },
    {
        "slug": "ncaa-football-figures",
        "name": "NCAA football figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to NCAA football.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NCAA football."
    },
    {
        "slug": "ncaa-football-teams",
        "name": "NCAA football teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to NCAA football.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around NCAA football."
    },
    {
        "slug": "ncaa-football-venues",
        "name": "NCAA football venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host NCAA football.",
        "description": "Places where NCAA football is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "ncaa-football-events",
        "name": "NCAA football events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in NCAA football.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about NCAA football."
    },
    {
        "slug": "ncaa-football-rules",
        "name": "NCAA football rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for NCAA football.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NCAA football legible as a sport."
    },
    {
        "slug": "ncaa-football-places",
        "name": "NCAA football places",
        "type": "place",
        "short_description": "Locations and geographies that frame NCAA football.",
        "description": "Places, regions, and built sites that give NCAA football its map — where events and figures concentrate."
    },
    {
        "slug": "ncaa-football-objects",
        "name": "NCAA football objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NCAA football.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NCAA football."
    },
    {
        "slug": "ncaa-football-factions",
        "name": "NCAA football factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NCAA football.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NCAA football."
    },
    {
        "slug": "ncaa-football-concepts",
        "name": "NCAA football concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NCAA football.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NCAA football readable as a lore graph."
    },
    {
        "slug": "ncaa-football-eras",
        "name": "NCAA football eras",
        "type": "event",
        "short_description": "Periodization for NCAA football.",
        "description": "Named eras and phases that help readers track how NCAA football changes across time."
    },
    {
        "slug": "ncaa-football-works",
        "name": "NCAA football works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NCAA football.",
        "description": "Primary works and adaptations through which most audiences encounter NCAA football."
    },
    {
        "slug": "ncaa-football-symbols",
        "name": "NCAA football symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NCAA football.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NCAA football."
    },
    {
        "slug": "ncaa-football-controversies",
        "name": "NCAA football controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NCAA football.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NCAA football argumentative."
    },
    {
        "slug": "ncaa-football-sources",
        "name": "NCAA football sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NCAA football.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NCAA football."
    },
    {
        "slug": "ncaa-football-geography",
        "name": "NCAA football geography",
        "type": "place",
        "short_description": "Broader geographic framing for NCAA football.",
        "description": "Regions, routes, and spatial systems that situate NCAA football beyond single named places."
    },
    {
        "slug": "ncaa-football-legacy",
        "name": "NCAA football legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NCAA football.",
        "description": "How NCAA football continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ncaa-football-practices",
        "name": "NCAA football practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NCAA football.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NCAA football."
    },
    {
        "slug": "ncaa-football-entry-1",
        "name": "NCAA football entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-2",
        "name": "NCAA football entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-3",
        "name": "NCAA football entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-4",
        "name": "NCAA football entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-5",
        "name": "NCAA football entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-6",
        "name": "NCAA football entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-7",
        "name": "NCAA football entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-8",
        "name": "NCAA football entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-9",
        "name": "NCAA football entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-10",
        "name": "NCAA football entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-11",
        "name": "NCAA football entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-12",
        "name": "NCAA football entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-13",
        "name": "NCAA football entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-14",
        "name": "NCAA football entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-15",
        "name": "NCAA football entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-16",
        "name": "NCAA football entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-17",
        "name": "NCAA football entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-18",
        "name": "NCAA football entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-19",
        "name": "NCAA football entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-20",
        "name": "NCAA football entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-21",
        "name": "NCAA football entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-football-entry-22",
        "name": "NCAA football entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA football.",
        "description": "A supporting encyclopedia entry in the NCAA football subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ncaa-football",
        "ncaa-football-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ncaa-football",
        "ncaa-football-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ncaa-football",
        "ncaa-football-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ncaa-football-figures",
        "ncaa-football-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ncaa-football-events",
        "ncaa-football-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "ncaa-football",
        "ncaa-football-places",
        "contains",
        "NCAA football places is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-objects",
        "contains",
        "NCAA football objects & artifacts is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-factions",
        "contains",
        "NCAA football factions & groups is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-concepts",
        "contains",
        "NCAA football concepts is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-eras",
        "contains",
        "NCAA football eras is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-works",
        "contains",
        "NCAA football works & media is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-symbols",
        "contains",
        "NCAA football symbols is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-controversies",
        "contains",
        "NCAA football controversies is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-sources",
        "contains",
        "NCAA football sources is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-geography",
        "contains",
        "NCAA football geography is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-legacy",
        "contains",
        "NCAA football legacy is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-practices",
        "contains",
        "NCAA football practices is a primary trailhead under NCAA football.",
        0.88,
        0.82
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-1",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-2",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-3",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-4",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-5",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-6",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-7",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-8",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-9",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-10",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-11",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-12",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-13",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-14",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-15",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-16",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-17",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-18",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-19",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-20",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-21",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ],
    [
        "ncaa-football",
        "ncaa-football-entry-22",
        "contains",
        "Supporting entry under NCAA football.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
