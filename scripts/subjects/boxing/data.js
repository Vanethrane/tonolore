/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "boxing",
        "name": "Boxing",
        "type": "topic",
        "short_description": "The sweet science — weight classes, belts, and championship lore across eras.",
        "description": "The sweet science — weight classes, belts, and championship lore across eras. This Ton-o-Lore subject maps people, places, events, and ideas tied to Boxing so readers can follow long-tail connections across combat sports."
    },
    {
        "slug": "boxing-figures",
        "name": "Boxing figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to Boxing.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring Boxing."
    },
    {
        "slug": "boxing-teams",
        "name": "Boxing teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to Boxing.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around Boxing."
    },
    {
        "slug": "boxing-venues",
        "name": "Boxing venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host Boxing.",
        "description": "Places where Boxing is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "boxing-events",
        "name": "Boxing events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in Boxing.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about Boxing."
    },
    {
        "slug": "boxing-rules",
        "name": "Boxing rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for Boxing.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make Boxing legible as a sport."
    },
    {
        "slug": "boxing-places",
        "name": "Boxing places",
        "type": "place",
        "short_description": "Locations and geographies that frame Boxing.",
        "description": "Places, regions, and built sites that give Boxing its map — where events and figures concentrate."
    },
    {
        "slug": "boxing-objects",
        "name": "Boxing objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Boxing.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Boxing."
    },
    {
        "slug": "boxing-factions",
        "name": "Boxing factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Boxing.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Boxing."
    },
    {
        "slug": "boxing-concepts",
        "name": "Boxing concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Boxing.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Boxing readable as a lore graph."
    },
    {
        "slug": "boxing-eras",
        "name": "Boxing eras",
        "type": "event",
        "short_description": "Periodization for Boxing.",
        "description": "Named eras and phases that help readers track how Boxing changes across time."
    },
    {
        "slug": "boxing-works",
        "name": "Boxing works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Boxing.",
        "description": "Primary works and adaptations through which most audiences encounter Boxing."
    },
    {
        "slug": "boxing-symbols",
        "name": "Boxing symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Boxing.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Boxing."
    },
    {
        "slug": "boxing-controversies",
        "name": "Boxing controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Boxing.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Boxing argumentative."
    },
    {
        "slug": "boxing-sources",
        "name": "Boxing sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Boxing.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Boxing."
    },
    {
        "slug": "boxing-geography",
        "name": "Boxing geography",
        "type": "place",
        "short_description": "Broader geographic framing for Boxing.",
        "description": "Regions, routes, and spatial systems that situate Boxing beyond single named places."
    },
    {
        "slug": "boxing-legacy",
        "name": "Boxing legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Boxing.",
        "description": "How Boxing continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "boxing-practices",
        "name": "Boxing practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Boxing.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Boxing."
    },
    {
        "slug": "boxing-entry-1",
        "name": "Boxing entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-2",
        "name": "Boxing entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-3",
        "name": "Boxing entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-4",
        "name": "Boxing entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-5",
        "name": "Boxing entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-6",
        "name": "Boxing entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-7",
        "name": "Boxing entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-8",
        "name": "Boxing entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-9",
        "name": "Boxing entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-10",
        "name": "Boxing entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-11",
        "name": "Boxing entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-12",
        "name": "Boxing entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-13",
        "name": "Boxing entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-14",
        "name": "Boxing entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-15",
        "name": "Boxing entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-16",
        "name": "Boxing entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-17",
        "name": "Boxing entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-18",
        "name": "Boxing entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-19",
        "name": "Boxing entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-20",
        "name": "Boxing entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-21",
        "name": "Boxing entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "boxing-entry-22",
        "name": "Boxing entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Boxing.",
        "description": "A supporting encyclopedia entry in the Boxing subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "boxing",
        "boxing-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "boxing",
        "boxing-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "boxing",
        "boxing-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "boxing-figures",
        "boxing-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "boxing-events",
        "boxing-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "boxing",
        "boxing-places",
        "contains",
        "Boxing places is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-objects",
        "contains",
        "Boxing objects & artifacts is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-factions",
        "contains",
        "Boxing factions & groups is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-concepts",
        "contains",
        "Boxing concepts is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-eras",
        "contains",
        "Boxing eras is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-works",
        "contains",
        "Boxing works & media is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-symbols",
        "contains",
        "Boxing symbols is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-controversies",
        "contains",
        "Boxing controversies is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-sources",
        "contains",
        "Boxing sources is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-geography",
        "contains",
        "Boxing geography is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-legacy",
        "contains",
        "Boxing legacy is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-practices",
        "contains",
        "Boxing practices is a primary trailhead under Boxing.",
        0.88,
        0.82
    ],
    [
        "boxing",
        "boxing-entry-1",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-2",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-3",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-4",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-5",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-6",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-7",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-8",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-9",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-10",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-11",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-12",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-13",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-14",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-15",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-16",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-17",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-18",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-19",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-20",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-21",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ],
    [
        "boxing",
        "boxing-entry-22",
        "contains",
        "Supporting entry under Boxing.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
