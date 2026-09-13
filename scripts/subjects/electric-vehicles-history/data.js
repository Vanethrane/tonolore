/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "electric-vehicles-history",
        "name": "Electric vehicles history",
        "type": "topic",
        "short_description": "Early EVs, Tesla era, and the return of battery cars to the mainstream.",
        "description": "Early EVs, Tesla era, and the return of battery cars to the mainstream. This Ton-o-Lore subject maps people, places, events, and ideas tied to Electric vehicles history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "electric-vehicles-history-figures",
        "name": "Electric vehicles history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Electric vehicles history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Electric vehicles history."
    },
    {
        "slug": "electric-vehicles-history-world",
        "name": "Electric vehicles history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Electric vehicles history.",
        "description": "Geography, institutions, and periodization that give Electric vehicles history its encyclopedia shape."
    },
    {
        "slug": "electric-vehicles-history-places",
        "name": "Electric vehicles history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Electric vehicles history.",
        "description": "Places, regions, and built sites that give Electric vehicles history its map — where events and figures concentrate."
    },
    {
        "slug": "electric-vehicles-history-events",
        "name": "Electric vehicles history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Electric vehicles history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Electric vehicles history timeline."
    },
    {
        "slug": "electric-vehicles-history-objects",
        "name": "Electric vehicles history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Electric vehicles history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Electric vehicles history."
    },
    {
        "slug": "electric-vehicles-history-factions",
        "name": "Electric vehicles history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Electric vehicles history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Electric vehicles history."
    },
    {
        "slug": "electric-vehicles-history-concepts",
        "name": "Electric vehicles history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Electric vehicles history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Electric vehicles history readable as a lore graph."
    },
    {
        "slug": "electric-vehicles-history-eras",
        "name": "Electric vehicles history eras",
        "type": "event",
        "short_description": "Periodization for Electric vehicles history.",
        "description": "Named eras and phases that help readers track how Electric vehicles history changes across time."
    },
    {
        "slug": "electric-vehicles-history-works",
        "name": "Electric vehicles history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Electric vehicles history.",
        "description": "Primary works and adaptations through which most audiences encounter Electric vehicles history."
    },
    {
        "slug": "electric-vehicles-history-symbols",
        "name": "Electric vehicles history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Electric vehicles history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Electric vehicles history."
    },
    {
        "slug": "electric-vehicles-history-controversies",
        "name": "Electric vehicles history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Electric vehicles history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Electric vehicles history argumentative."
    },
    {
        "slug": "electric-vehicles-history-sources",
        "name": "Electric vehicles history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Electric vehicles history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Electric vehicles history."
    },
    {
        "slug": "electric-vehicles-history-geography",
        "name": "Electric vehicles history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Electric vehicles history.",
        "description": "Regions, routes, and spatial systems that situate Electric vehicles history beyond single named places."
    },
    {
        "slug": "electric-vehicles-history-legacy",
        "name": "Electric vehicles history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Electric vehicles history.",
        "description": "How Electric vehicles history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "electric-vehicles-history-practices",
        "name": "Electric vehicles history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Electric vehicles history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Electric vehicles history."
    },
    {
        "slug": "electric-vehicles-history-entry-1",
        "name": "Electric vehicles history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-2",
        "name": "Electric vehicles history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-3",
        "name": "Electric vehicles history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-4",
        "name": "Electric vehicles history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-5",
        "name": "Electric vehicles history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-6",
        "name": "Electric vehicles history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-7",
        "name": "Electric vehicles history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-8",
        "name": "Electric vehicles history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-9",
        "name": "Electric vehicles history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-10",
        "name": "Electric vehicles history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-11",
        "name": "Electric vehicles history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-12",
        "name": "Electric vehicles history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-13",
        "name": "Electric vehicles history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-14",
        "name": "Electric vehicles history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-15",
        "name": "Electric vehicles history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-16",
        "name": "Electric vehicles history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-17",
        "name": "Electric vehicles history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-18",
        "name": "Electric vehicles history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-19",
        "name": "Electric vehicles history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-20",
        "name": "Electric vehicles history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-21",
        "name": "Electric vehicles history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-22",
        "name": "Electric vehicles history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-23",
        "name": "Electric vehicles history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "electric-vehicles-history-entry-24",
        "name": "Electric vehicles history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Electric vehicles history.",
        "description": "A supporting encyclopedia entry in the Electric vehicles history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "electric-vehicles-history",
        "electric-vehicles-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-places",
        "contains",
        "Electric vehicles history places is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-events",
        "contains",
        "Electric vehicles history events is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-objects",
        "contains",
        "Electric vehicles history objects & artifacts is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-factions",
        "contains",
        "Electric vehicles history factions & groups is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-concepts",
        "contains",
        "Electric vehicles history concepts is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-eras",
        "contains",
        "Electric vehicles history eras is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-works",
        "contains",
        "Electric vehicles history works & media is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-symbols",
        "contains",
        "Electric vehicles history symbols is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-controversies",
        "contains",
        "Electric vehicles history controversies is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-sources",
        "contains",
        "Electric vehicles history sources is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-geography",
        "contains",
        "Electric vehicles history geography is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-legacy",
        "contains",
        "Electric vehicles history legacy is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-practices",
        "contains",
        "Electric vehicles history practices is a primary trailhead under Electric vehicles history.",
        0.88,
        0.82
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-1",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-2",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-3",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-4",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-5",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-6",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-7",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-8",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-9",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-10",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-11",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-12",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-13",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-14",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-15",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-16",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-17",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-18",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-19",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-20",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-21",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-22",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-23",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ],
    [
        "electric-vehicles-history",
        "electric-vehicles-history-entry-24",
        "contains",
        "Supporting entry under Electric vehicles history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
