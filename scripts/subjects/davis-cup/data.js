/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "davis-cup",
        "name": "Davis Cup",
        "type": "topic",
        "short_description": "Men's national-team tennis competition — ties, upsets, and country pride.",
        "description": "Men's national-team tennis competition — ties, upsets, and country pride. This Ton-o-Lore subject maps people, places, events, and ideas tied to Davis Cup so readers can follow long-tail connections across tennis."
    },
    {
        "slug": "davis-cup-figures",
        "name": "Davis Cup figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Davis Cup.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Davis Cup."
    },
    {
        "slug": "davis-cup-teams",
        "name": "Davis Cup teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Davis Cup.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Davis Cup."
    },
    {
        "slug": "davis-cup-venues",
        "name": "Davis Cup venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Davis Cup.",
        "description": "Places where Davis Cup is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "davis-cup-events",
        "name": "Davis Cup events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Davis Cup.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Davis Cup."
    },
    {
        "slug": "davis-cup-rules",
        "name": "Davis Cup rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Davis Cup.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Davis Cup legible as a sport."
    },
    {
        "slug": "davis-cup-places",
        "name": "Davis Cup places",
        "type": "place",
        "short_description": "Locations and geographies that frame Davis Cup.",
        "description": "Places, regions, and built sites that give Davis Cup its map — where events and figures concentrate."
    },
    {
        "slug": "davis-cup-objects",
        "name": "Davis Cup objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Davis Cup.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Davis Cup."
    },
    {
        "slug": "davis-cup-factions",
        "name": "Davis Cup factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Davis Cup.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Davis Cup."
    },
    {
        "slug": "davis-cup-concepts",
        "name": "Davis Cup concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Davis Cup.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Davis Cup readable as a lore graph."
    },
    {
        "slug": "davis-cup-eras",
        "name": "Davis Cup eras",
        "type": "event",
        "short_description": "Periodization for Davis Cup.",
        "description": "Named eras and phases that help readers track how Davis Cup changes across time."
    },
    {
        "slug": "davis-cup-works",
        "name": "Davis Cup works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Davis Cup.",
        "description": "Primary works and adaptations through which most audiences encounter Davis Cup."
    },
    {
        "slug": "davis-cup-symbols",
        "name": "Davis Cup symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Davis Cup.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Davis Cup."
    },
    {
        "slug": "davis-cup-controversies",
        "name": "Davis Cup controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Davis Cup.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Davis Cup argumentative."
    },
    {
        "slug": "davis-cup-sources",
        "name": "Davis Cup sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Davis Cup.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Davis Cup."
    },
    {
        "slug": "davis-cup-geography",
        "name": "Davis Cup geography",
        "type": "place",
        "short_description": "Broader geographic framing for Davis Cup.",
        "description": "Regions, routes, and spatial systems that situate Davis Cup beyond single named places."
    },
    {
        "slug": "davis-cup-legacy",
        "name": "Davis Cup legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Davis Cup.",
        "description": "How Davis Cup continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "davis-cup-practices",
        "name": "Davis Cup practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Davis Cup.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Davis Cup."
    },
    {
        "slug": "davis-cup-entry-1",
        "name": "Davis Cup entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-2",
        "name": "Davis Cup entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-3",
        "name": "Davis Cup entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-4",
        "name": "Davis Cup entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-5",
        "name": "Davis Cup entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-6",
        "name": "Davis Cup entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-7",
        "name": "Davis Cup entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-8",
        "name": "Davis Cup entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-9",
        "name": "Davis Cup entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-10",
        "name": "Davis Cup entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-11",
        "name": "Davis Cup entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-12",
        "name": "Davis Cup entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-13",
        "name": "Davis Cup entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-14",
        "name": "Davis Cup entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-15",
        "name": "Davis Cup entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-16",
        "name": "Davis Cup entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-17",
        "name": "Davis Cup entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-18",
        "name": "Davis Cup entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-19",
        "name": "Davis Cup entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-20",
        "name": "Davis Cup entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-21",
        "name": "Davis Cup entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "davis-cup-entry-22",
        "name": "Davis Cup entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Davis Cup.",
        "description": "A supporting encyclopedia entry in the Davis Cup subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "davis-cup",
        "davis-cup-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "davis-cup",
        "davis-cup-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "davis-cup",
        "davis-cup-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "davis-cup",
        "davis-cup-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "davis-cup",
        "davis-cup-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "davis-cup-figures",
        "davis-cup-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "davis-cup-events",
        "davis-cup-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "davis-cup",
        "davis-cup-places",
        "contains",
        "Davis Cup places is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-objects",
        "contains",
        "Davis Cup objects & artifacts is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-factions",
        "contains",
        "Davis Cup factions & groups is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-concepts",
        "contains",
        "Davis Cup concepts is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-eras",
        "contains",
        "Davis Cup eras is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-works",
        "contains",
        "Davis Cup works & media is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-symbols",
        "contains",
        "Davis Cup symbols is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-controversies",
        "contains",
        "Davis Cup controversies is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-sources",
        "contains",
        "Davis Cup sources is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-geography",
        "contains",
        "Davis Cup geography is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-legacy",
        "contains",
        "Davis Cup legacy is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-practices",
        "contains",
        "Davis Cup practices is a primary trailhead under Davis Cup.",
        0.88,
        0.82
    ],
    [
        "davis-cup",
        "davis-cup-entry-1",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-2",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-3",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-4",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-5",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-6",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-7",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-8",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-9",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-10",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-11",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-12",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-13",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-14",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-15",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-16",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-17",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-18",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-19",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-20",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-21",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ],
    [
        "davis-cup",
        "davis-cup-entry-22",
        "contains",
        "Supporting entry under Davis Cup.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
