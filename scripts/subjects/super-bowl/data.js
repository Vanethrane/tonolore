/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "super-bowl",
        "name": "Super Bowl",
        "type": "topic",
        "short_description": "The NFL championship game — Roman numerals, halftime lore, and American spectacle.",
        "description": "The NFL championship game — Roman numerals, halftime lore, and American spectacle. This Ton-o-Lore subject maps people, places, events, and ideas tied to Super Bowl so readers can follow long-tail connections across american football."
    },
    {
        "slug": "super-bowl-figures",
        "name": "Super Bowl figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Super Bowl.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Super Bowl."
    },
    {
        "slug": "super-bowl-teams",
        "name": "Super Bowl teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Super Bowl.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Super Bowl."
    },
    {
        "slug": "super-bowl-venues",
        "name": "Super Bowl venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Super Bowl.",
        "description": "Places where Super Bowl is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "super-bowl-events",
        "name": "Super Bowl events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Super Bowl.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Super Bowl."
    },
    {
        "slug": "super-bowl-rules",
        "name": "Super Bowl rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Super Bowl.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Super Bowl legible as a sport."
    },
    {
        "slug": "super-bowl-places",
        "name": "Super Bowl places",
        "type": "place",
        "short_description": "Locations and geographies that frame Super Bowl.",
        "description": "Places, regions, and built sites that give Super Bowl its map — where events and figures concentrate."
    },
    {
        "slug": "super-bowl-objects",
        "name": "Super Bowl objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Super Bowl.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Super Bowl."
    },
    {
        "slug": "super-bowl-factions",
        "name": "Super Bowl factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Super Bowl.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Super Bowl."
    },
    {
        "slug": "super-bowl-concepts",
        "name": "Super Bowl concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Super Bowl.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Super Bowl readable as a lore graph."
    },
    {
        "slug": "super-bowl-eras",
        "name": "Super Bowl eras",
        "type": "event",
        "short_description": "Periodization for Super Bowl.",
        "description": "Named eras and phases that help readers track how Super Bowl changes across time."
    },
    {
        "slug": "super-bowl-works",
        "name": "Super Bowl works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Super Bowl.",
        "description": "Primary works and adaptations through which most audiences encounter Super Bowl."
    },
    {
        "slug": "super-bowl-symbols",
        "name": "Super Bowl symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Super Bowl.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Super Bowl."
    },
    {
        "slug": "super-bowl-controversies",
        "name": "Super Bowl controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Super Bowl.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Super Bowl argumentative."
    },
    {
        "slug": "super-bowl-sources",
        "name": "Super Bowl sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Super Bowl.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Super Bowl."
    },
    {
        "slug": "super-bowl-geography",
        "name": "Super Bowl geography",
        "type": "place",
        "short_description": "Broader geographic framing for Super Bowl.",
        "description": "Regions, routes, and spatial systems that situate Super Bowl beyond single named places."
    },
    {
        "slug": "super-bowl-legacy",
        "name": "Super Bowl legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Super Bowl.",
        "description": "How Super Bowl continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "super-bowl-practices",
        "name": "Super Bowl practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Super Bowl.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Super Bowl."
    },
    {
        "slug": "super-bowl-entry-1",
        "name": "Super Bowl entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-2",
        "name": "Super Bowl entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-3",
        "name": "Super Bowl entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-4",
        "name": "Super Bowl entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-5",
        "name": "Super Bowl entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-6",
        "name": "Super Bowl entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-7",
        "name": "Super Bowl entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-8",
        "name": "Super Bowl entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-9",
        "name": "Super Bowl entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-10",
        "name": "Super Bowl entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-11",
        "name": "Super Bowl entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-12",
        "name": "Super Bowl entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-13",
        "name": "Super Bowl entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-14",
        "name": "Super Bowl entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-15",
        "name": "Super Bowl entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-16",
        "name": "Super Bowl entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-17",
        "name": "Super Bowl entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-18",
        "name": "Super Bowl entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-19",
        "name": "Super Bowl entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-20",
        "name": "Super Bowl entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-21",
        "name": "Super Bowl entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "super-bowl-entry-22",
        "name": "Super Bowl entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Super Bowl.",
        "description": "A supporting encyclopedia entry in the Super Bowl subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "super-bowl",
        "super-bowl-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "super-bowl",
        "super-bowl-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "super-bowl",
        "super-bowl-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "super-bowl-figures",
        "super-bowl-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "super-bowl-events",
        "super-bowl-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "super-bowl",
        "super-bowl-places",
        "contains",
        "Super Bowl places is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-objects",
        "contains",
        "Super Bowl objects & artifacts is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-factions",
        "contains",
        "Super Bowl factions & groups is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-concepts",
        "contains",
        "Super Bowl concepts is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-eras",
        "contains",
        "Super Bowl eras is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-works",
        "contains",
        "Super Bowl works & media is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-symbols",
        "contains",
        "Super Bowl symbols is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-controversies",
        "contains",
        "Super Bowl controversies is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-sources",
        "contains",
        "Super Bowl sources is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-geography",
        "contains",
        "Super Bowl geography is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-legacy",
        "contains",
        "Super Bowl legacy is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-practices",
        "contains",
        "Super Bowl practices is a primary trailhead under Super Bowl.",
        0.88,
        0.82
    ],
    [
        "super-bowl",
        "super-bowl-entry-1",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-2",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-3",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-4",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-5",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-6",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-7",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-8",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-9",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-10",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-11",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-12",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-13",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-14",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-15",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-16",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-17",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-18",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-19",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-20",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-21",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ],
    [
        "super-bowl",
        "super-bowl-entry-22",
        "contains",
        "Supporting entry under Super Bowl.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
