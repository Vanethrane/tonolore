/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "la-liga",
        "name": "La Liga",
        "type": "topic",
        "short_description": "Spain's Primera División — El Clásico, tiki-taka eras, and club academies.",
        "description": "Spain's Primera División — El Clásico, tiki-taka eras, and club academies. This Ton-o-Lore subject maps people, places, events, and ideas tied to La Liga so readers can follow long-tail connections across soccer."
    },
    {
        "slug": "la-liga-figures",
        "name": "La Liga figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to La Liga.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring La Liga."
    },
    {
        "slug": "la-liga-teams",
        "name": "La Liga teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to La Liga.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around La Liga."
    },
    {
        "slug": "la-liga-venues",
        "name": "La Liga venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host La Liga.",
        "description": "Places where La Liga is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "la-liga-events",
        "name": "La Liga events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in La Liga.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about La Liga."
    },
    {
        "slug": "la-liga-rules",
        "name": "La Liga rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for La Liga.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make La Liga legible as a sport."
    },
    {
        "slug": "la-liga-places",
        "name": "La Liga places",
        "type": "place",
        "short_description": "Locations and geographies that frame La Liga.",
        "description": "Places, regions, and built sites that give La Liga its map — where events and figures concentrate."
    },
    {
        "slug": "la-liga-objects",
        "name": "La Liga objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to La Liga.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through La Liga."
    },
    {
        "slug": "la-liga-factions",
        "name": "La Liga factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside La Liga.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in La Liga."
    },
    {
        "slug": "la-liga-concepts",
        "name": "La Liga concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize La Liga.",
        "description": "Keywords, doctrines, systems, and abstract forces that make La Liga readable as a lore graph."
    },
    {
        "slug": "la-liga-eras",
        "name": "La Liga eras",
        "type": "event",
        "short_description": "Periodization for La Liga.",
        "description": "Named eras and phases that help readers track how La Liga changes across time."
    },
    {
        "slug": "la-liga-works",
        "name": "La Liga works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry La Liga.",
        "description": "Primary works and adaptations through which most audiences encounter La Liga."
    },
    {
        "slug": "la-liga-symbols",
        "name": "La Liga symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with La Liga.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside La Liga."
    },
    {
        "slug": "la-liga-controversies",
        "name": "La Liga controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in La Liga.",
        "description": "Debates, rival canons, scandals, and contested facts that keep La Liga argumentative."
    },
    {
        "slug": "la-liga-sources",
        "name": "La Liga sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into La Liga.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify La Liga."
    },
    {
        "slug": "la-liga-geography",
        "name": "La Liga geography",
        "type": "place",
        "short_description": "Broader geographic framing for La Liga.",
        "description": "Regions, routes, and spatial systems that situate La Liga beyond single named places."
    },
    {
        "slug": "la-liga-legacy",
        "name": "La Liga legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of La Liga.",
        "description": "How La Liga continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "la-liga-practices",
        "name": "La Liga practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in La Liga.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in La Liga."
    },
    {
        "slug": "la-liga-entry-1",
        "name": "La Liga entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-2",
        "name": "La Liga entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-3",
        "name": "La Liga entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-4",
        "name": "La Liga entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-5",
        "name": "La Liga entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-6",
        "name": "La Liga entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-7",
        "name": "La Liga entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-8",
        "name": "La Liga entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-9",
        "name": "La Liga entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-10",
        "name": "La Liga entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-11",
        "name": "La Liga entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-12",
        "name": "La Liga entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-13",
        "name": "La Liga entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-14",
        "name": "La Liga entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-15",
        "name": "La Liga entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-16",
        "name": "La Liga entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-17",
        "name": "La Liga entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-18",
        "name": "La Liga entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-19",
        "name": "La Liga entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-20",
        "name": "La Liga entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-21",
        "name": "La Liga entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "la-liga-entry-22",
        "name": "La Liga entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside La Liga.",
        "description": "A supporting encyclopedia entry in the La Liga subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "la-liga",
        "la-liga-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "la-liga",
        "la-liga-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "la-liga",
        "la-liga-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "la-liga",
        "la-liga-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "la-liga",
        "la-liga-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "la-liga-figures",
        "la-liga-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "la-liga-events",
        "la-liga-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "la-liga",
        "la-liga-places",
        "contains",
        "La Liga places is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-objects",
        "contains",
        "La Liga objects & artifacts is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-factions",
        "contains",
        "La Liga factions & groups is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-concepts",
        "contains",
        "La Liga concepts is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-eras",
        "contains",
        "La Liga eras is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-works",
        "contains",
        "La Liga works & media is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-symbols",
        "contains",
        "La Liga symbols is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-controversies",
        "contains",
        "La Liga controversies is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-sources",
        "contains",
        "La Liga sources is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-geography",
        "contains",
        "La Liga geography is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-legacy",
        "contains",
        "La Liga legacy is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-practices",
        "contains",
        "La Liga practices is a primary trailhead under La Liga.",
        0.88,
        0.82
    ],
    [
        "la-liga",
        "la-liga-entry-1",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-2",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-3",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-4",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-5",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-6",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-7",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-8",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-9",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-10",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-11",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-12",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-13",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-14",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-15",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-16",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-17",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-18",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-19",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-20",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-21",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ],
    [
        "la-liga",
        "la-liga-entry-22",
        "contains",
        "Supporting entry under La Liga.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
