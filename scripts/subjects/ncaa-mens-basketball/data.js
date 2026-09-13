/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ncaa-mens-basketball",
        "name": "NCAA men's basketball",
        "type": "topic",
        "short_description": "March Madness and college basketball — programs, brackets, and campus dynasties.",
        "description": "March Madness and college basketball — programs, brackets, and campus dynasties. This Ton-o-Lore subject maps people, places, events, and ideas tied to NCAA men's basketball so readers can follow long-tail connections across basketball."
    },
    {
        "slug": "ncaa-mens-basketball-figures",
        "name": "NCAA men's basketball figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to NCAA men's basketball.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-teams",
        "name": "NCAA men's basketball teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to NCAA men's basketball.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-venues",
        "name": "NCAA men's basketball venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host NCAA men's basketball.",
        "description": "Places where NCAA men's basketball is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "ncaa-mens-basketball-events",
        "name": "NCAA men's basketball events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in NCAA men's basketball.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-rules",
        "name": "NCAA men's basketball rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for NCAA men's basketball.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make NCAA men's basketball legible as a sport."
    },
    {
        "slug": "ncaa-mens-basketball-places",
        "name": "NCAA men's basketball places",
        "type": "place",
        "short_description": "Locations and geographies that frame NCAA men's basketball.",
        "description": "Places, regions, and built sites that give NCAA men's basketball its map — where events and figures concentrate."
    },
    {
        "slug": "ncaa-mens-basketball-objects",
        "name": "NCAA men's basketball objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NCAA men's basketball.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-factions",
        "name": "NCAA men's basketball factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NCAA men's basketball.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-concepts",
        "name": "NCAA men's basketball concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NCAA men's basketball.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NCAA men's basketball readable as a lore graph."
    },
    {
        "slug": "ncaa-mens-basketball-eras",
        "name": "NCAA men's basketball eras",
        "type": "event",
        "short_description": "Periodization for NCAA men's basketball.",
        "description": "Named eras and phases that help readers track how NCAA men's basketball changes across time."
    },
    {
        "slug": "ncaa-mens-basketball-works",
        "name": "NCAA men's basketball works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NCAA men's basketball.",
        "description": "Primary works and adaptations through which most audiences encounter NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-symbols",
        "name": "NCAA men's basketball symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NCAA men's basketball.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-controversies",
        "name": "NCAA men's basketball controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NCAA men's basketball.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NCAA men's basketball argumentative."
    },
    {
        "slug": "ncaa-mens-basketball-sources",
        "name": "NCAA men's basketball sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NCAA men's basketball.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-geography",
        "name": "NCAA men's basketball geography",
        "type": "place",
        "short_description": "Broader geographic framing for NCAA men's basketball.",
        "description": "Regions, routes, and spatial systems that situate NCAA men's basketball beyond single named places."
    },
    {
        "slug": "ncaa-mens-basketball-legacy",
        "name": "NCAA men's basketball legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NCAA men's basketball.",
        "description": "How NCAA men's basketball continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ncaa-mens-basketball-practices",
        "name": "NCAA men's basketball practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NCAA men's basketball.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NCAA men's basketball."
    },
    {
        "slug": "ncaa-mens-basketball-entry-1",
        "name": "NCAA men's basketball entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-2",
        "name": "NCAA men's basketball entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-3",
        "name": "NCAA men's basketball entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-4",
        "name": "NCAA men's basketball entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-5",
        "name": "NCAA men's basketball entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-6",
        "name": "NCAA men's basketball entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-7",
        "name": "NCAA men's basketball entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-8",
        "name": "NCAA men's basketball entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-9",
        "name": "NCAA men's basketball entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-10",
        "name": "NCAA men's basketball entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-11",
        "name": "NCAA men's basketball entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-12",
        "name": "NCAA men's basketball entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-13",
        "name": "NCAA men's basketball entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-14",
        "name": "NCAA men's basketball entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-15",
        "name": "NCAA men's basketball entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-16",
        "name": "NCAA men's basketball entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-17",
        "name": "NCAA men's basketball entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-18",
        "name": "NCAA men's basketball entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-19",
        "name": "NCAA men's basketball entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-20",
        "name": "NCAA men's basketball entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-21",
        "name": "NCAA men's basketball entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ncaa-mens-basketball-entry-22",
        "name": "NCAA men's basketball entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NCAA men's basketball.",
        "description": "A supporting encyclopedia entry in the NCAA men's basketball subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "ncaa-mens-basketball-figures",
        "ncaa-mens-basketball-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "ncaa-mens-basketball-events",
        "ncaa-mens-basketball-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-places",
        "contains",
        "NCAA men's basketball places is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-objects",
        "contains",
        "NCAA men's basketball objects & artifacts is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-factions",
        "contains",
        "NCAA men's basketball factions & groups is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-concepts",
        "contains",
        "NCAA men's basketball concepts is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-eras",
        "contains",
        "NCAA men's basketball eras is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-works",
        "contains",
        "NCAA men's basketball works & media is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-symbols",
        "contains",
        "NCAA men's basketball symbols is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-controversies",
        "contains",
        "NCAA men's basketball controversies is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-sources",
        "contains",
        "NCAA men's basketball sources is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-geography",
        "contains",
        "NCAA men's basketball geography is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-legacy",
        "contains",
        "NCAA men's basketball legacy is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-practices",
        "contains",
        "NCAA men's basketball practices is a primary trailhead under NCAA men's basketball.",
        0.88,
        0.82
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-1",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-2",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-3",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-4",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-5",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-6",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-7",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-8",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-9",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-10",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-11",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-12",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-13",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-14",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-15",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-16",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-17",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-18",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-19",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-20",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-21",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ],
    [
        "ncaa-mens-basketball",
        "ncaa-mens-basketball-entry-22",
        "contains",
        "Supporting entry under NCAA men's basketball.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
