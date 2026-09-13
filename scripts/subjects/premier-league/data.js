/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "premier-league",
        "name": "Premier League",
        "type": "topic",
        "short_description": "England's top flight — title races, relegation battles, and global broadcast lore.",
        "description": "England's top flight — title races, relegation battles, and global broadcast lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Premier League so readers can follow long-tail connections across soccer."
    },
    {
        "slug": "premier-league-figures",
        "name": "Premier League figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Premier League.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Premier League."
    },
    {
        "slug": "premier-league-teams",
        "name": "Premier League teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Premier League.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Premier League."
    },
    {
        "slug": "premier-league-venues",
        "name": "Premier League venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Premier League.",
        "description": "Places where Premier League is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "premier-league-events",
        "name": "Premier League events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Premier League.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Premier League."
    },
    {
        "slug": "premier-league-rules",
        "name": "Premier League rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Premier League.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Premier League legible as a sport."
    },
    {
        "slug": "premier-league-places",
        "name": "Premier League places",
        "type": "place",
        "short_description": "Locations and geographies that frame Premier League.",
        "description": "Places, regions, and built sites that give Premier League its map — where events and figures concentrate."
    },
    {
        "slug": "premier-league-objects",
        "name": "Premier League objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Premier League.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Premier League."
    },
    {
        "slug": "premier-league-factions",
        "name": "Premier League factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Premier League.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Premier League."
    },
    {
        "slug": "premier-league-concepts",
        "name": "Premier League concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Premier League.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Premier League readable as a lore graph."
    },
    {
        "slug": "premier-league-eras",
        "name": "Premier League eras",
        "type": "event",
        "short_description": "Periodization for Premier League.",
        "description": "Named eras and phases that help readers track how Premier League changes across time."
    },
    {
        "slug": "premier-league-works",
        "name": "Premier League works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Premier League.",
        "description": "Primary works and adaptations through which most audiences encounter Premier League."
    },
    {
        "slug": "premier-league-symbols",
        "name": "Premier League symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Premier League.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Premier League."
    },
    {
        "slug": "premier-league-controversies",
        "name": "Premier League controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Premier League.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Premier League argumentative."
    },
    {
        "slug": "premier-league-sources",
        "name": "Premier League sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Premier League.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Premier League."
    },
    {
        "slug": "premier-league-geography",
        "name": "Premier League geography",
        "type": "place",
        "short_description": "Broader geographic framing for Premier League.",
        "description": "Regions, routes, and spatial systems that situate Premier League beyond single named places."
    },
    {
        "slug": "premier-league-legacy",
        "name": "Premier League legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Premier League.",
        "description": "How Premier League continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "premier-league-practices",
        "name": "Premier League practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Premier League.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Premier League."
    },
    {
        "slug": "premier-league-entry-1",
        "name": "Premier League entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-2",
        "name": "Premier League entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-3",
        "name": "Premier League entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-4",
        "name": "Premier League entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-5",
        "name": "Premier League entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-6",
        "name": "Premier League entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-7",
        "name": "Premier League entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-8",
        "name": "Premier League entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-9",
        "name": "Premier League entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-10",
        "name": "Premier League entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-11",
        "name": "Premier League entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-12",
        "name": "Premier League entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-13",
        "name": "Premier League entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-14",
        "name": "Premier League entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-15",
        "name": "Premier League entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-16",
        "name": "Premier League entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-17",
        "name": "Premier League entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-18",
        "name": "Premier League entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-19",
        "name": "Premier League entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-20",
        "name": "Premier League entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-21",
        "name": "Premier League entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "premier-league-entry-22",
        "name": "Premier League entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Premier League.",
        "description": "A supporting encyclopedia entry in the Premier League subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "premier-league",
        "premier-league-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "premier-league",
        "premier-league-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "premier-league",
        "premier-league-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "premier-league",
        "premier-league-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "premier-league",
        "premier-league-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "premier-league-figures",
        "premier-league-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "premier-league-events",
        "premier-league-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "premier-league",
        "premier-league-places",
        "contains",
        "Premier League places is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-objects",
        "contains",
        "Premier League objects & artifacts is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-factions",
        "contains",
        "Premier League factions & groups is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-concepts",
        "contains",
        "Premier League concepts is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-eras",
        "contains",
        "Premier League eras is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-works",
        "contains",
        "Premier League works & media is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-symbols",
        "contains",
        "Premier League symbols is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-controversies",
        "contains",
        "Premier League controversies is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-sources",
        "contains",
        "Premier League sources is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-geography",
        "contains",
        "Premier League geography is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-legacy",
        "contains",
        "Premier League legacy is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-practices",
        "contains",
        "Premier League practices is a primary trailhead under Premier League.",
        0.88,
        0.82
    ],
    [
        "premier-league",
        "premier-league-entry-1",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-2",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-3",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-4",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-5",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-6",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-7",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-8",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-9",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-10",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-11",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-12",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-13",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-14",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-15",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-16",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-17",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-18",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-19",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-20",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-21",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ],
    [
        "premier-league",
        "premier-league-entry-22",
        "contains",
        "Supporting entry under Premier League.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
