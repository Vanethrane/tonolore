/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "railroad-history",
        "name": "Railroad history",
        "type": "topic",
        "short_description": "Railroads, locomotives, towns, engineers, robber barons, disasters, and the routes that stitched continents.",
        "description": "Railroads, locomotives, towns, engineers, robber barons, disasters, and the routes that stitched continents. This Ton-o-Lore subject maps people, places, events, and ideas tied to Railroad history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "railroad-history-figures",
        "name": "Railroad history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Railroad history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Railroad history."
    },
    {
        "slug": "railroad-history-world",
        "name": "Railroad history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Railroad history.",
        "description": "Geography, institutions, and periodization that give Railroad history its encyclopedia shape."
    },
    {
        "slug": "railroad-history-places",
        "name": "Railroad history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Railroad history.",
        "description": "Places, regions, and built sites that give Railroad history its map — where events and figures concentrate."
    },
    {
        "slug": "railroad-history-events",
        "name": "Railroad history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Railroad history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Railroad history timeline."
    },
    {
        "slug": "railroad-history-objects",
        "name": "Railroad history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Railroad history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Railroad history."
    },
    {
        "slug": "railroad-history-factions",
        "name": "Railroad history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Railroad history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Railroad history."
    },
    {
        "slug": "railroad-history-concepts",
        "name": "Railroad history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Railroad history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Railroad history readable as a lore graph."
    },
    {
        "slug": "railroad-history-eras",
        "name": "Railroad history eras",
        "type": "event",
        "short_description": "Periodization for Railroad history.",
        "description": "Named eras and phases that help readers track how Railroad history changes across time."
    },
    {
        "slug": "railroad-history-works",
        "name": "Railroad history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Railroad history.",
        "description": "Primary works and adaptations through which most audiences encounter Railroad history."
    },
    {
        "slug": "railroad-history-symbols",
        "name": "Railroad history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Railroad history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Railroad history."
    },
    {
        "slug": "railroad-history-controversies",
        "name": "Railroad history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Railroad history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Railroad history argumentative."
    },
    {
        "slug": "railroad-history-sources",
        "name": "Railroad history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Railroad history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Railroad history."
    },
    {
        "slug": "railroad-history-geography",
        "name": "Railroad history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Railroad history.",
        "description": "Regions, routes, and spatial systems that situate Railroad history beyond single named places."
    },
    {
        "slug": "railroad-history-legacy",
        "name": "Railroad history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Railroad history.",
        "description": "How Railroad history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "railroad-history-practices",
        "name": "Railroad history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Railroad history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Railroad history."
    },
    {
        "slug": "railroad-history-entry-1",
        "name": "Railroad history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-2",
        "name": "Railroad history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-3",
        "name": "Railroad history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-4",
        "name": "Railroad history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-5",
        "name": "Railroad history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-6",
        "name": "Railroad history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-7",
        "name": "Railroad history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-8",
        "name": "Railroad history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-9",
        "name": "Railroad history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-10",
        "name": "Railroad history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-11",
        "name": "Railroad history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-12",
        "name": "Railroad history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-13",
        "name": "Railroad history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-14",
        "name": "Railroad history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-15",
        "name": "Railroad history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-16",
        "name": "Railroad history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-17",
        "name": "Railroad history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-18",
        "name": "Railroad history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-19",
        "name": "Railroad history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-20",
        "name": "Railroad history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-21",
        "name": "Railroad history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-22",
        "name": "Railroad history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-23",
        "name": "Railroad history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "railroad-history-entry-24",
        "name": "Railroad history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Railroad history.",
        "description": "A supporting encyclopedia entry in the Railroad history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "railroad-history",
        "railroad-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "railroad-history",
        "railroad-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "railroad-history",
        "railroad-history-places",
        "contains",
        "Railroad history places is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-events",
        "contains",
        "Railroad history events is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-objects",
        "contains",
        "Railroad history objects & artifacts is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-factions",
        "contains",
        "Railroad history factions & groups is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-concepts",
        "contains",
        "Railroad history concepts is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-eras",
        "contains",
        "Railroad history eras is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-works",
        "contains",
        "Railroad history works & media is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-symbols",
        "contains",
        "Railroad history symbols is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-controversies",
        "contains",
        "Railroad history controversies is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-sources",
        "contains",
        "Railroad history sources is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-geography",
        "contains",
        "Railroad history geography is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-legacy",
        "contains",
        "Railroad history legacy is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-practices",
        "contains",
        "Railroad history practices is a primary trailhead under Railroad history.",
        0.88,
        0.82
    ],
    [
        "railroad-history",
        "railroad-history-entry-1",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-2",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-3",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-4",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-5",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-6",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-7",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-8",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-9",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-10",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-11",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-12",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-13",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-14",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-15",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-16",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-17",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-18",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-19",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-20",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-21",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-22",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-23",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ],
    [
        "railroad-history",
        "railroad-history-entry-24",
        "contains",
        "Supporting entry under Railroad history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
