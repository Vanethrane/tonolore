/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "yacht-racing-history",
        "name": "Yacht racing history",
        "type": "topic",
        "short_description": "America’s Cup, ocean races, and the competitive sailing lore of rich hulls and hard crews.",
        "description": "America’s Cup, ocean races, and the competitive sailing lore of rich hulls and hard crews. This Ton-o-Lore subject maps people, places, events, and ideas tied to Yacht racing history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "yacht-racing-history-figures",
        "name": "Yacht racing history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Yacht racing history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Yacht racing history."
    },
    {
        "slug": "yacht-racing-history-world",
        "name": "Yacht racing history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Yacht racing history.",
        "description": "Geography, institutions, and periodization that give Yacht racing history its encyclopedia shape."
    },
    {
        "slug": "yacht-racing-history-places",
        "name": "Yacht racing history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Yacht racing history.",
        "description": "Places, regions, and built sites that give Yacht racing history its map — where events and figures concentrate."
    },
    {
        "slug": "yacht-racing-history-events",
        "name": "Yacht racing history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Yacht racing history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Yacht racing history timeline."
    },
    {
        "slug": "yacht-racing-history-objects",
        "name": "Yacht racing history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Yacht racing history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Yacht racing history."
    },
    {
        "slug": "yacht-racing-history-factions",
        "name": "Yacht racing history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Yacht racing history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Yacht racing history."
    },
    {
        "slug": "yacht-racing-history-concepts",
        "name": "Yacht racing history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Yacht racing history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Yacht racing history readable as a lore graph."
    },
    {
        "slug": "yacht-racing-history-eras",
        "name": "Yacht racing history eras",
        "type": "event",
        "short_description": "Periodization for Yacht racing history.",
        "description": "Named eras and phases that help readers track how Yacht racing history changes across time."
    },
    {
        "slug": "yacht-racing-history-works",
        "name": "Yacht racing history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Yacht racing history.",
        "description": "Primary works and adaptations through which most audiences encounter Yacht racing history."
    },
    {
        "slug": "yacht-racing-history-symbols",
        "name": "Yacht racing history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Yacht racing history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Yacht racing history."
    },
    {
        "slug": "yacht-racing-history-controversies",
        "name": "Yacht racing history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Yacht racing history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Yacht racing history argumentative."
    },
    {
        "slug": "yacht-racing-history-sources",
        "name": "Yacht racing history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Yacht racing history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Yacht racing history."
    },
    {
        "slug": "yacht-racing-history-geography",
        "name": "Yacht racing history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Yacht racing history.",
        "description": "Regions, routes, and spatial systems that situate Yacht racing history beyond single named places."
    },
    {
        "slug": "yacht-racing-history-legacy",
        "name": "Yacht racing history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Yacht racing history.",
        "description": "How Yacht racing history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "yacht-racing-history-practices",
        "name": "Yacht racing history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Yacht racing history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Yacht racing history."
    },
    {
        "slug": "yacht-racing-history-entry-1",
        "name": "Yacht racing history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-2",
        "name": "Yacht racing history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-3",
        "name": "Yacht racing history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-4",
        "name": "Yacht racing history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-5",
        "name": "Yacht racing history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-6",
        "name": "Yacht racing history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-7",
        "name": "Yacht racing history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-8",
        "name": "Yacht racing history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-9",
        "name": "Yacht racing history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-10",
        "name": "Yacht racing history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-11",
        "name": "Yacht racing history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-12",
        "name": "Yacht racing history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-13",
        "name": "Yacht racing history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-14",
        "name": "Yacht racing history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-15",
        "name": "Yacht racing history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-16",
        "name": "Yacht racing history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-17",
        "name": "Yacht racing history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-18",
        "name": "Yacht racing history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-19",
        "name": "Yacht racing history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-20",
        "name": "Yacht racing history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-21",
        "name": "Yacht racing history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-22",
        "name": "Yacht racing history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-23",
        "name": "Yacht racing history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "yacht-racing-history-entry-24",
        "name": "Yacht racing history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Yacht racing history.",
        "description": "A supporting encyclopedia entry in the Yacht racing history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "yacht-racing-history",
        "yacht-racing-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-places",
        "contains",
        "Yacht racing history places is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-events",
        "contains",
        "Yacht racing history events is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-objects",
        "contains",
        "Yacht racing history objects & artifacts is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-factions",
        "contains",
        "Yacht racing history factions & groups is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-concepts",
        "contains",
        "Yacht racing history concepts is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-eras",
        "contains",
        "Yacht racing history eras is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-works",
        "contains",
        "Yacht racing history works & media is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-symbols",
        "contains",
        "Yacht racing history symbols is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-controversies",
        "contains",
        "Yacht racing history controversies is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-sources",
        "contains",
        "Yacht racing history sources is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-geography",
        "contains",
        "Yacht racing history geography is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-legacy",
        "contains",
        "Yacht racing history legacy is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-practices",
        "contains",
        "Yacht racing history practices is a primary trailhead under Yacht racing history.",
        0.88,
        0.82
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-1",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-2",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-3",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-4",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-5",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-6",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-7",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-8",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-9",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-10",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-11",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-12",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-13",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-14",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-15",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-16",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-17",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-18",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-19",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-20",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-21",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-22",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-23",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ],
    [
        "yacht-racing-history",
        "yacht-racing-history-entry-24",
        "contains",
        "Supporting entry under Yacht racing history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
