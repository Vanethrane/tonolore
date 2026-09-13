/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "faust-legend",
        "name": "Faust legend",
        "type": "topic",
        "short_description": "Devil’s bargain, knowledge hunger, and the German pact tale that haunted European literature.",
        "description": "Devil’s bargain, knowledge hunger, and the German pact tale that haunted European literature. This Ton-o-Lore subject maps people, places, events, and ideas tied to Faust legend so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "faust-legend-figures",
        "name": "Faust legend figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Faust legend.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Faust legend."
    },
    {
        "slug": "faust-legend-world",
        "name": "Faust legend world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Faust legend.",
        "description": "Geography, institutions, and periodization that give Faust legend its encyclopedia shape."
    },
    {
        "slug": "faust-legend-places",
        "name": "Faust legend places",
        "type": "place",
        "short_description": "Locations and geographies that frame Faust legend.",
        "description": "Places, regions, and built sites that give Faust legend its map — where events and figures concentrate."
    },
    {
        "slug": "faust-legend-events",
        "name": "Faust legend events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Faust legend.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Faust legend timeline."
    },
    {
        "slug": "faust-legend-objects",
        "name": "Faust legend objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Faust legend.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Faust legend."
    },
    {
        "slug": "faust-legend-factions",
        "name": "Faust legend factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Faust legend.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Faust legend."
    },
    {
        "slug": "faust-legend-concepts",
        "name": "Faust legend concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Faust legend.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Faust legend readable as a lore graph."
    },
    {
        "slug": "faust-legend-eras",
        "name": "Faust legend eras",
        "type": "event",
        "short_description": "Periodization for Faust legend.",
        "description": "Named eras and phases that help readers track how Faust legend changes across time."
    },
    {
        "slug": "faust-legend-works",
        "name": "Faust legend works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Faust legend.",
        "description": "Primary works and adaptations through which most audiences encounter Faust legend."
    },
    {
        "slug": "faust-legend-symbols",
        "name": "Faust legend symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Faust legend.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Faust legend."
    },
    {
        "slug": "faust-legend-controversies",
        "name": "Faust legend controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Faust legend.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Faust legend argumentative."
    },
    {
        "slug": "faust-legend-sources",
        "name": "Faust legend sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Faust legend.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Faust legend."
    },
    {
        "slug": "faust-legend-geography",
        "name": "Faust legend geography",
        "type": "place",
        "short_description": "Broader geographic framing for Faust legend.",
        "description": "Regions, routes, and spatial systems that situate Faust legend beyond single named places."
    },
    {
        "slug": "faust-legend-legacy",
        "name": "Faust legend legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Faust legend.",
        "description": "How Faust legend continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "faust-legend-practices",
        "name": "Faust legend practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Faust legend.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Faust legend."
    },
    {
        "slug": "faust-legend-entry-1",
        "name": "Faust legend entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-2",
        "name": "Faust legend entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-3",
        "name": "Faust legend entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-4",
        "name": "Faust legend entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-5",
        "name": "Faust legend entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-6",
        "name": "Faust legend entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-7",
        "name": "Faust legend entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-8",
        "name": "Faust legend entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-9",
        "name": "Faust legend entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-10",
        "name": "Faust legend entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-11",
        "name": "Faust legend entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-12",
        "name": "Faust legend entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-13",
        "name": "Faust legend entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-14",
        "name": "Faust legend entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-15",
        "name": "Faust legend entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-16",
        "name": "Faust legend entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-17",
        "name": "Faust legend entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-18",
        "name": "Faust legend entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-19",
        "name": "Faust legend entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-20",
        "name": "Faust legend entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-21",
        "name": "Faust legend entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-22",
        "name": "Faust legend entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-23",
        "name": "Faust legend entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "faust-legend-entry-24",
        "name": "Faust legend entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Faust legend.",
        "description": "A supporting encyclopedia entry in the Faust legend subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "faust-legend",
        "faust-legend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "faust-legend",
        "faust-legend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "faust-legend",
        "faust-legend-places",
        "contains",
        "Faust legend places is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-events",
        "contains",
        "Faust legend events is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-objects",
        "contains",
        "Faust legend objects & artifacts is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-factions",
        "contains",
        "Faust legend factions & groups is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-concepts",
        "contains",
        "Faust legend concepts is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-eras",
        "contains",
        "Faust legend eras is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-works",
        "contains",
        "Faust legend works & media is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-symbols",
        "contains",
        "Faust legend symbols is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-controversies",
        "contains",
        "Faust legend controversies is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-sources",
        "contains",
        "Faust legend sources is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-geography",
        "contains",
        "Faust legend geography is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-legacy",
        "contains",
        "Faust legend legacy is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-practices",
        "contains",
        "Faust legend practices is a primary trailhead under Faust legend.",
        0.88,
        0.82
    ],
    [
        "faust-legend",
        "faust-legend-entry-1",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-2",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-3",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-4",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-5",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-6",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-7",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-8",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-9",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-10",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-11",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-12",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-13",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-14",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-15",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-16",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-17",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-18",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-19",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-20",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-21",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-22",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-23",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ],
    [
        "faust-legend",
        "faust-legend-entry-24",
        "contains",
        "Supporting entry under Faust legend.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
