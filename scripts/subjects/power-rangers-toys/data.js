/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "power-rangers-toys",
        "name": "Power Rangers toys",
        "type": "topic",
        "short_description": "Zords, morphers, and the Sentai-adapted megazord mythology sold as action figures.",
        "description": "Zords, morphers, and the Sentai-adapted megazord mythology sold as action figures. This Ton-o-Lore subject maps people, places, events, and ideas tied to Power Rangers toys so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "power-rangers-toys-figures",
        "name": "Power Rangers toys figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Power Rangers toys.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Power Rangers toys."
    },
    {
        "slug": "power-rangers-toys-world",
        "name": "Power Rangers toys world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Power Rangers toys.",
        "description": "Geography, institutions, and periodization that give Power Rangers toys its encyclopedia shape."
    },
    {
        "slug": "power-rangers-toys-places",
        "name": "Power Rangers toys places",
        "type": "place",
        "short_description": "Locations and geographies that frame Power Rangers toys.",
        "description": "Places, regions, and built sites that give Power Rangers toys its map — where events and figures concentrate."
    },
    {
        "slug": "power-rangers-toys-events",
        "name": "Power Rangers toys events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Power Rangers toys.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Power Rangers toys timeline."
    },
    {
        "slug": "power-rangers-toys-objects",
        "name": "Power Rangers toys objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Power Rangers toys.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Power Rangers toys."
    },
    {
        "slug": "power-rangers-toys-factions",
        "name": "Power Rangers toys factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Power Rangers toys.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Power Rangers toys."
    },
    {
        "slug": "power-rangers-toys-concepts",
        "name": "Power Rangers toys concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Power Rangers toys.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Power Rangers toys readable as a lore graph."
    },
    {
        "slug": "power-rangers-toys-eras",
        "name": "Power Rangers toys eras",
        "type": "event",
        "short_description": "Periodization for Power Rangers toys.",
        "description": "Named eras and phases that help readers track how Power Rangers toys changes across time."
    },
    {
        "slug": "power-rangers-toys-works",
        "name": "Power Rangers toys works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Power Rangers toys.",
        "description": "Primary works and adaptations through which most audiences encounter Power Rangers toys."
    },
    {
        "slug": "power-rangers-toys-symbols",
        "name": "Power Rangers toys symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Power Rangers toys.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Power Rangers toys."
    },
    {
        "slug": "power-rangers-toys-controversies",
        "name": "Power Rangers toys controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Power Rangers toys.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Power Rangers toys argumentative."
    },
    {
        "slug": "power-rangers-toys-sources",
        "name": "Power Rangers toys sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Power Rangers toys.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Power Rangers toys."
    },
    {
        "slug": "power-rangers-toys-geography",
        "name": "Power Rangers toys geography",
        "type": "place",
        "short_description": "Broader geographic framing for Power Rangers toys.",
        "description": "Regions, routes, and spatial systems that situate Power Rangers toys beyond single named places."
    },
    {
        "slug": "power-rangers-toys-legacy",
        "name": "Power Rangers toys legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Power Rangers toys.",
        "description": "How Power Rangers toys continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "power-rangers-toys-practices",
        "name": "Power Rangers toys practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Power Rangers toys.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Power Rangers toys."
    },
    {
        "slug": "power-rangers-toys-entry-1",
        "name": "Power Rangers toys entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-2",
        "name": "Power Rangers toys entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-3",
        "name": "Power Rangers toys entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-4",
        "name": "Power Rangers toys entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-5",
        "name": "Power Rangers toys entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-6",
        "name": "Power Rangers toys entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-7",
        "name": "Power Rangers toys entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-8",
        "name": "Power Rangers toys entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-9",
        "name": "Power Rangers toys entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-10",
        "name": "Power Rangers toys entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-11",
        "name": "Power Rangers toys entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-12",
        "name": "Power Rangers toys entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-13",
        "name": "Power Rangers toys entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-14",
        "name": "Power Rangers toys entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-15",
        "name": "Power Rangers toys entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-16",
        "name": "Power Rangers toys entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-17",
        "name": "Power Rangers toys entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-18",
        "name": "Power Rangers toys entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-19",
        "name": "Power Rangers toys entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-20",
        "name": "Power Rangers toys entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-21",
        "name": "Power Rangers toys entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-22",
        "name": "Power Rangers toys entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-23",
        "name": "Power Rangers toys entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "power-rangers-toys-entry-24",
        "name": "Power Rangers toys entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Power Rangers toys.",
        "description": "A supporting encyclopedia entry in the Power Rangers toys subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "power-rangers-toys",
        "power-rangers-toys-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-places",
        "contains",
        "Power Rangers toys places is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-events",
        "contains",
        "Power Rangers toys events is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-objects",
        "contains",
        "Power Rangers toys objects & artifacts is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-factions",
        "contains",
        "Power Rangers toys factions & groups is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-concepts",
        "contains",
        "Power Rangers toys concepts is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-eras",
        "contains",
        "Power Rangers toys eras is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-works",
        "contains",
        "Power Rangers toys works & media is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-symbols",
        "contains",
        "Power Rangers toys symbols is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-controversies",
        "contains",
        "Power Rangers toys controversies is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-sources",
        "contains",
        "Power Rangers toys sources is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-geography",
        "contains",
        "Power Rangers toys geography is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-legacy",
        "contains",
        "Power Rangers toys legacy is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-practices",
        "contains",
        "Power Rangers toys practices is a primary trailhead under Power Rangers toys.",
        0.88,
        0.82
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-1",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-2",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-3",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-4",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-5",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-6",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-7",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-8",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-9",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-10",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-11",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-12",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-13",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-14",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-15",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-16",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-17",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-18",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-19",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-20",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-21",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-22",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-23",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ],
    [
        "power-rangers-toys",
        "power-rangers-toys-entry-24",
        "contains",
        "Supporting entry under Power Rangers toys.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
