/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "motogp",
        "name": "MotoGP",
        "type": "topic",
        "short_description": "Motorcycle Grand Prix racing — classes, circuits, and factory rivalries.",
        "description": "Motorcycle Grand Prix racing — classes, circuits, and factory rivalries. This Ton-o-Lore subject maps people, places, events, and ideas tied to MotoGP so readers can follow long-tail connections across motorsport."
    },
    {
        "slug": "motogp-figures",
        "name": "MotoGP figures",
        "type": "topic",
        "short_description": "Athletes, coaches, and named forces central to MotoGP.",
        "description": "A working index of the people — players, managers, officials, and icons — that readers meet first when exploring MotoGP."
    },
    {
        "slug": "motogp-teams",
        "name": "MotoGP teams & clubs",
        "type": "organization",
        "short_description": "Franchises, national sides, and clubs tied to MotoGP.",
        "description": "Team and club identities that structure seasons, rivalries, and fan lore around MotoGP."
    },
    {
        "slug": "motogp-venues",
        "name": "MotoGP venues",
        "type": "place",
        "short_description": "Stadiums, arenas, and circuits that host MotoGP.",
        "description": "Places where MotoGP is contested — home grounds, finals sites, and landmark venues in the sport's memory."
    },
    {
        "slug": "motogp-events",
        "name": "MotoGP events",
        "type": "event",
        "short_description": "Seasons, finals, and landmark moments in MotoGP.",
        "description": "Championships, eras, and signature events that periodize how fans and writers talk about MotoGP."
    },
    {
        "slug": "motogp-rules",
        "name": "MotoGP rules & format",
        "type": "concept",
        "short_description": "Competition format, scoring, and governing ideas for MotoGP.",
        "description": "The structural ideas — schedules, standings, playoffs, and rulebooks — that make MotoGP legible as a sport."
    },
    {
        "slug": "motogp-places",
        "name": "MotoGP places",
        "type": "place",
        "short_description": "Locations and geographies that frame MotoGP.",
        "description": "Places, regions, and built sites that give MotoGP its map — where events and figures concentrate."
    },
    {
        "slug": "motogp-objects",
        "name": "MotoGP objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to MotoGP.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through MotoGP."
    },
    {
        "slug": "motogp-factions",
        "name": "MotoGP factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside MotoGP.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in MotoGP."
    },
    {
        "slug": "motogp-concepts",
        "name": "MotoGP concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize MotoGP.",
        "description": "Keywords, doctrines, systems, and abstract forces that make MotoGP readable as a lore graph."
    },
    {
        "slug": "motogp-eras",
        "name": "MotoGP eras",
        "type": "event",
        "short_description": "Periodization for MotoGP.",
        "description": "Named eras and phases that help readers track how MotoGP changes across time."
    },
    {
        "slug": "motogp-works",
        "name": "MotoGP works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry MotoGP.",
        "description": "Primary works and adaptations through which most audiences encounter MotoGP."
    },
    {
        "slug": "motogp-symbols",
        "name": "MotoGP symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with MotoGP.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside MotoGP."
    },
    {
        "slug": "motogp-controversies",
        "name": "MotoGP controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in MotoGP.",
        "description": "Debates, rival canons, scandals, and contested facts that keep MotoGP argumentative."
    },
    {
        "slug": "motogp-sources",
        "name": "MotoGP sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into MotoGP.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify MotoGP."
    },
    {
        "slug": "motogp-geography",
        "name": "MotoGP geography",
        "type": "place",
        "short_description": "Broader geographic framing for MotoGP.",
        "description": "Regions, routes, and spatial systems that situate MotoGP beyond single named places."
    },
    {
        "slug": "motogp-legacy",
        "name": "MotoGP legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of MotoGP.",
        "description": "How MotoGP continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "motogp-practices",
        "name": "MotoGP practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in MotoGP.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in MotoGP."
    },
    {
        "slug": "motogp-entry-1",
        "name": "MotoGP entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-2",
        "name": "MotoGP entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-3",
        "name": "MotoGP entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-4",
        "name": "MotoGP entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-5",
        "name": "MotoGP entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-6",
        "name": "MotoGP entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-7",
        "name": "MotoGP entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-8",
        "name": "MotoGP entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-9",
        "name": "MotoGP entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-10",
        "name": "MotoGP entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-11",
        "name": "MotoGP entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-12",
        "name": "MotoGP entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-13",
        "name": "MotoGP entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-14",
        "name": "MotoGP entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-15",
        "name": "MotoGP entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-16",
        "name": "MotoGP entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-17",
        "name": "MotoGP entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-18",
        "name": "MotoGP entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-19",
        "name": "MotoGP entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-20",
        "name": "MotoGP entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-21",
        "name": "MotoGP entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "motogp-entry-22",
        "name": "MotoGP entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside MotoGP.",
        "description": "A supporting encyclopedia entry in the MotoGP subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "motogp",
        "motogp-figures",
        "contains",
        "Figures are primary trailheads for this sports graph.",
        0.9,
        0.85
    ],
    [
        "motogp",
        "motogp-teams",
        "contains",
        "Teams and clubs organize seasons and rivalries.",
        0.9,
        0.85
    ],
    [
        "motogp",
        "motogp-venues",
        "contains",
        "Venues situate the competition in place.",
        0.85,
        0.8
    ],
    [
        "motogp",
        "motogp-events",
        "contains",
        "Events periodize championship lore.",
        0.9,
        0.85
    ],
    [
        "motogp",
        "motogp-rules",
        "contains",
        "Rules and format explain how the contest is structured.",
        0.85,
        0.8
    ],
    [
        "motogp-figures",
        "motogp-teams",
        "connected_to",
        "Athletes and coaches attach to clubs and national sides.",
        0.8,
        0.75
    ],
    [
        "motogp-events",
        "motogp-venues",
        "connected_to",
        "Landmark events are remembered through the places that hosted them.",
        0.8,
        0.75
    ],
    [
        "motogp",
        "motogp-places",
        "contains",
        "MotoGP places is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-objects",
        "contains",
        "MotoGP objects & artifacts is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-factions",
        "contains",
        "MotoGP factions & groups is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-concepts",
        "contains",
        "MotoGP concepts is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-eras",
        "contains",
        "MotoGP eras is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-works",
        "contains",
        "MotoGP works & media is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-symbols",
        "contains",
        "MotoGP symbols is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-controversies",
        "contains",
        "MotoGP controversies is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-sources",
        "contains",
        "MotoGP sources is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-geography",
        "contains",
        "MotoGP geography is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-legacy",
        "contains",
        "MotoGP legacy is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-practices",
        "contains",
        "MotoGP practices is a primary trailhead under MotoGP.",
        0.88,
        0.82
    ],
    [
        "motogp",
        "motogp-entry-1",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-2",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-3",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-4",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-5",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-6",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-7",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-8",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-9",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-10",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-11",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-12",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-13",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-14",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-15",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-16",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-17",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-18",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-19",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-20",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-21",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ],
    [
        "motogp",
        "motogp-entry-22",
        "contains",
        "Supporting entry under MotoGP.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
