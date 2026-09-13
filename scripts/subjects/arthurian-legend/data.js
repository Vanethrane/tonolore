/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "arthurian-legend",
        "name": "Arthurian legend",
        "type": "topic",
        "short_description": "Camelot, the Round Table, and Grail quests across medieval and modern retellings.",
        "description": "Camelot, the Round Table, and Grail quests across medieval and modern retellings. This Ton-o-Lore subject maps people, places, events, and ideas tied to Arthurian legend so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "arthurian-legend-figures",
        "name": "Arthurian legend figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Arthurian legend.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Arthurian legend."
    },
    {
        "slug": "arthurian-legend-world",
        "name": "Arthurian legend world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Arthurian legend.",
        "description": "Geography, institutions, and periodization that give Arthurian legend its encyclopedia shape."
    },
    {
        "slug": "arthurian-legend-places",
        "name": "Arthurian legend places",
        "type": "place",
        "short_description": "Locations and geographies that frame Arthurian legend.",
        "description": "Places, regions, and built sites that give Arthurian legend its map — where events and figures concentrate."
    },
    {
        "slug": "arthurian-legend-events",
        "name": "Arthurian legend events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Arthurian legend.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Arthurian legend timeline."
    },
    {
        "slug": "arthurian-legend-objects",
        "name": "Arthurian legend objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Arthurian legend.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Arthurian legend."
    },
    {
        "slug": "arthurian-legend-factions",
        "name": "Arthurian legend factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Arthurian legend.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Arthurian legend."
    },
    {
        "slug": "arthurian-legend-concepts",
        "name": "Arthurian legend concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Arthurian legend.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Arthurian legend readable as a lore graph."
    },
    {
        "slug": "arthurian-legend-eras",
        "name": "Arthurian legend eras",
        "type": "event",
        "short_description": "Periodization for Arthurian legend.",
        "description": "Named eras and phases that help readers track how Arthurian legend changes across time."
    },
    {
        "slug": "arthurian-legend-works",
        "name": "Arthurian legend works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Arthurian legend.",
        "description": "Primary works and adaptations through which most audiences encounter Arthurian legend."
    },
    {
        "slug": "arthurian-legend-symbols",
        "name": "Arthurian legend symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Arthurian legend.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Arthurian legend."
    },
    {
        "slug": "arthurian-legend-controversies",
        "name": "Arthurian legend controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Arthurian legend.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Arthurian legend argumentative."
    },
    {
        "slug": "arthurian-legend-sources",
        "name": "Arthurian legend sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Arthurian legend.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Arthurian legend."
    },
    {
        "slug": "arthurian-legend-geography",
        "name": "Arthurian legend geography",
        "type": "place",
        "short_description": "Broader geographic framing for Arthurian legend.",
        "description": "Regions, routes, and spatial systems that situate Arthurian legend beyond single named places."
    },
    {
        "slug": "arthurian-legend-legacy",
        "name": "Arthurian legend legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Arthurian legend.",
        "description": "How Arthurian legend continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "arthurian-legend-practices",
        "name": "Arthurian legend practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Arthurian legend.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Arthurian legend."
    },
    {
        "slug": "arthurian-legend-entry-1",
        "name": "Arthurian legend entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-2",
        "name": "Arthurian legend entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-3",
        "name": "Arthurian legend entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-4",
        "name": "Arthurian legend entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-5",
        "name": "Arthurian legend entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-6",
        "name": "Arthurian legend entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-7",
        "name": "Arthurian legend entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-8",
        "name": "Arthurian legend entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-9",
        "name": "Arthurian legend entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-10",
        "name": "Arthurian legend entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-11",
        "name": "Arthurian legend entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-12",
        "name": "Arthurian legend entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-13",
        "name": "Arthurian legend entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-14",
        "name": "Arthurian legend entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-15",
        "name": "Arthurian legend entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-16",
        "name": "Arthurian legend entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-17",
        "name": "Arthurian legend entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-18",
        "name": "Arthurian legend entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-19",
        "name": "Arthurian legend entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-20",
        "name": "Arthurian legend entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-21",
        "name": "Arthurian legend entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-22",
        "name": "Arthurian legend entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-23",
        "name": "Arthurian legend entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arthurian-legend-entry-24",
        "name": "Arthurian legend entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arthurian legend.",
        "description": "A supporting encyclopedia entry in the Arthurian legend subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "arthurian-legend",
        "arthurian-legend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "arthurian-legend",
        "arthurian-legend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "arthurian-legend",
        "arthurian-legend-places",
        "contains",
        "Arthurian legend places is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-events",
        "contains",
        "Arthurian legend events is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-objects",
        "contains",
        "Arthurian legend objects & artifacts is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-factions",
        "contains",
        "Arthurian legend factions & groups is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-concepts",
        "contains",
        "Arthurian legend concepts is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-eras",
        "contains",
        "Arthurian legend eras is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-works",
        "contains",
        "Arthurian legend works & media is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-symbols",
        "contains",
        "Arthurian legend symbols is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-controversies",
        "contains",
        "Arthurian legend controversies is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-sources",
        "contains",
        "Arthurian legend sources is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-geography",
        "contains",
        "Arthurian legend geography is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-legacy",
        "contains",
        "Arthurian legend legacy is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-practices",
        "contains",
        "Arthurian legend practices is a primary trailhead under Arthurian legend.",
        0.88,
        0.82
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-1",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-2",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-3",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-4",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-5",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-6",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-7",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-8",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-9",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-10",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-11",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-12",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-13",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-14",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-15",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-16",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-17",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-18",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-19",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-20",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-21",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-22",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-23",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ],
    [
        "arthurian-legend",
        "arthurian-legend-entry-24",
        "contains",
        "Supporting entry under Arthurian legend.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
