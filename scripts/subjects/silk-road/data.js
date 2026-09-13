/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "silk-road",
        "name": "Silk Road",
        "type": "topic",
        "short_description": "Overland and maritime corridors that moved goods, faiths, and stories across Eurasia.",
        "description": "Overland and maritime corridors that moved goods, faiths, and stories across Eurasia. This Ton-o-Lore subject maps people, places, events, and ideas tied to Silk Road so readers can follow long-tail connections across history."
    },
    {
        "slug": "silk-road-figures",
        "name": "Silk Road figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Silk Road.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Silk Road."
    },
    {
        "slug": "silk-road-world",
        "name": "Silk Road world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Silk Road.",
        "description": "Geography, institutions, and periodization that give Silk Road its encyclopedia shape."
    },
    {
        "slug": "silk-road-places",
        "name": "Silk Road places",
        "type": "place",
        "short_description": "Locations and geographies that frame Silk Road.",
        "description": "Places, regions, and built sites that give Silk Road its map — where events and figures concentrate."
    },
    {
        "slug": "silk-road-events",
        "name": "Silk Road events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Silk Road.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Silk Road timeline."
    },
    {
        "slug": "silk-road-objects",
        "name": "Silk Road objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Silk Road.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Silk Road."
    },
    {
        "slug": "silk-road-factions",
        "name": "Silk Road factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Silk Road.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Silk Road."
    },
    {
        "slug": "silk-road-concepts",
        "name": "Silk Road concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Silk Road.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Silk Road readable as a lore graph."
    },
    {
        "slug": "silk-road-eras",
        "name": "Silk Road eras",
        "type": "event",
        "short_description": "Periodization for Silk Road.",
        "description": "Named eras and phases that help readers track how Silk Road changes across time."
    },
    {
        "slug": "silk-road-works",
        "name": "Silk Road works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Silk Road.",
        "description": "Primary works and adaptations through which most audiences encounter Silk Road."
    },
    {
        "slug": "silk-road-symbols",
        "name": "Silk Road symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Silk Road.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Silk Road."
    },
    {
        "slug": "silk-road-controversies",
        "name": "Silk Road controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Silk Road.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Silk Road argumentative."
    },
    {
        "slug": "silk-road-sources",
        "name": "Silk Road sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Silk Road.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Silk Road."
    },
    {
        "slug": "silk-road-geography",
        "name": "Silk Road geography",
        "type": "place",
        "short_description": "Broader geographic framing for Silk Road.",
        "description": "Regions, routes, and spatial systems that situate Silk Road beyond single named places."
    },
    {
        "slug": "silk-road-legacy",
        "name": "Silk Road legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Silk Road.",
        "description": "How Silk Road continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "silk-road-practices",
        "name": "Silk Road practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Silk Road.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Silk Road."
    },
    {
        "slug": "silk-road-entry-1",
        "name": "Silk Road entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-2",
        "name": "Silk Road entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-3",
        "name": "Silk Road entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-4",
        "name": "Silk Road entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-5",
        "name": "Silk Road entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-6",
        "name": "Silk Road entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-7",
        "name": "Silk Road entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-8",
        "name": "Silk Road entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-9",
        "name": "Silk Road entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-10",
        "name": "Silk Road entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-11",
        "name": "Silk Road entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-12",
        "name": "Silk Road entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-13",
        "name": "Silk Road entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-14",
        "name": "Silk Road entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-15",
        "name": "Silk Road entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-16",
        "name": "Silk Road entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-17",
        "name": "Silk Road entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-18",
        "name": "Silk Road entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-19",
        "name": "Silk Road entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-20",
        "name": "Silk Road entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-21",
        "name": "Silk Road entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-22",
        "name": "Silk Road entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-23",
        "name": "Silk Road entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "silk-road-entry-24",
        "name": "Silk Road entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Silk Road.",
        "description": "A supporting encyclopedia entry in the Silk Road subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "silk-road",
        "silk-road-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "silk-road",
        "silk-road-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "silk-road",
        "silk-road-places",
        "contains",
        "Silk Road places is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-events",
        "contains",
        "Silk Road events is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-objects",
        "contains",
        "Silk Road objects & artifacts is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-factions",
        "contains",
        "Silk Road factions & groups is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-concepts",
        "contains",
        "Silk Road concepts is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-eras",
        "contains",
        "Silk Road eras is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-works",
        "contains",
        "Silk Road works & media is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-symbols",
        "contains",
        "Silk Road symbols is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-controversies",
        "contains",
        "Silk Road controversies is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-sources",
        "contains",
        "Silk Road sources is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-geography",
        "contains",
        "Silk Road geography is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-legacy",
        "contains",
        "Silk Road legacy is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-practices",
        "contains",
        "Silk Road practices is a primary trailhead under Silk Road.",
        0.88,
        0.82
    ],
    [
        "silk-road",
        "silk-road-entry-1",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-2",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-3",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-4",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-5",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-6",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-7",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-8",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-9",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-10",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-11",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-12",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-13",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-14",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-15",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-16",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-17",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-18",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-19",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-20",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-21",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-22",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-23",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ],
    [
        "silk-road",
        "silk-road-entry-24",
        "contains",
        "Supporting entry under Silk Road.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
