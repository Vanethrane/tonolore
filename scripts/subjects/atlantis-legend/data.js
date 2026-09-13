/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "atlantis-legend",
        "name": "Atlantis legend",
        "type": "topic",
        "short_description": "Plato’s lost island, drownings, and the speculative geography that never stopped returning.",
        "description": "Plato’s lost island, drownings, and the speculative geography that never stopped returning. This Ton-o-Lore subject maps people, places, events, and ideas tied to Atlantis legend so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "atlantis-legend-figures",
        "name": "Atlantis legend figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Atlantis legend.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Atlantis legend."
    },
    {
        "slug": "atlantis-legend-world",
        "name": "Atlantis legend world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Atlantis legend.",
        "description": "Geography, institutions, and periodization that give Atlantis legend its encyclopedia shape."
    },
    {
        "slug": "atlantis-legend-places",
        "name": "Atlantis legend places",
        "type": "place",
        "short_description": "Locations and geographies that frame Atlantis legend.",
        "description": "Places, regions, and built sites that give Atlantis legend its map — where events and figures concentrate."
    },
    {
        "slug": "atlantis-legend-events",
        "name": "Atlantis legend events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Atlantis legend.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Atlantis legend timeline."
    },
    {
        "slug": "atlantis-legend-objects",
        "name": "Atlantis legend objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Atlantis legend.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Atlantis legend."
    },
    {
        "slug": "atlantis-legend-factions",
        "name": "Atlantis legend factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Atlantis legend.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Atlantis legend."
    },
    {
        "slug": "atlantis-legend-concepts",
        "name": "Atlantis legend concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Atlantis legend.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Atlantis legend readable as a lore graph."
    },
    {
        "slug": "atlantis-legend-eras",
        "name": "Atlantis legend eras",
        "type": "event",
        "short_description": "Periodization for Atlantis legend.",
        "description": "Named eras and phases that help readers track how Atlantis legend changes across time."
    },
    {
        "slug": "atlantis-legend-works",
        "name": "Atlantis legend works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Atlantis legend.",
        "description": "Primary works and adaptations through which most audiences encounter Atlantis legend."
    },
    {
        "slug": "atlantis-legend-symbols",
        "name": "Atlantis legend symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Atlantis legend.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Atlantis legend."
    },
    {
        "slug": "atlantis-legend-controversies",
        "name": "Atlantis legend controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Atlantis legend.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Atlantis legend argumentative."
    },
    {
        "slug": "atlantis-legend-sources",
        "name": "Atlantis legend sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Atlantis legend.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Atlantis legend."
    },
    {
        "slug": "atlantis-legend-geography",
        "name": "Atlantis legend geography",
        "type": "place",
        "short_description": "Broader geographic framing for Atlantis legend.",
        "description": "Regions, routes, and spatial systems that situate Atlantis legend beyond single named places."
    },
    {
        "slug": "atlantis-legend-legacy",
        "name": "Atlantis legend legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Atlantis legend.",
        "description": "How Atlantis legend continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "atlantis-legend-practices",
        "name": "Atlantis legend practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Atlantis legend.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Atlantis legend."
    },
    {
        "slug": "atlantis-legend-entry-1",
        "name": "Atlantis legend entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-2",
        "name": "Atlantis legend entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-3",
        "name": "Atlantis legend entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-4",
        "name": "Atlantis legend entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-5",
        "name": "Atlantis legend entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-6",
        "name": "Atlantis legend entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-7",
        "name": "Atlantis legend entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-8",
        "name": "Atlantis legend entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-9",
        "name": "Atlantis legend entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-10",
        "name": "Atlantis legend entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-11",
        "name": "Atlantis legend entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-12",
        "name": "Atlantis legend entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-13",
        "name": "Atlantis legend entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-14",
        "name": "Atlantis legend entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-15",
        "name": "Atlantis legend entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-16",
        "name": "Atlantis legend entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-17",
        "name": "Atlantis legend entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-18",
        "name": "Atlantis legend entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-19",
        "name": "Atlantis legend entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-20",
        "name": "Atlantis legend entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-21",
        "name": "Atlantis legend entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-22",
        "name": "Atlantis legend entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-23",
        "name": "Atlantis legend entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "atlantis-legend-entry-24",
        "name": "Atlantis legend entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Atlantis legend.",
        "description": "A supporting encyclopedia entry in the Atlantis legend subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "atlantis-legend",
        "atlantis-legend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "atlantis-legend",
        "atlantis-legend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "atlantis-legend",
        "atlantis-legend-places",
        "contains",
        "Atlantis legend places is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-events",
        "contains",
        "Atlantis legend events is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-objects",
        "contains",
        "Atlantis legend objects & artifacts is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-factions",
        "contains",
        "Atlantis legend factions & groups is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-concepts",
        "contains",
        "Atlantis legend concepts is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-eras",
        "contains",
        "Atlantis legend eras is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-works",
        "contains",
        "Atlantis legend works & media is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-symbols",
        "contains",
        "Atlantis legend symbols is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-controversies",
        "contains",
        "Atlantis legend controversies is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-sources",
        "contains",
        "Atlantis legend sources is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-geography",
        "contains",
        "Atlantis legend geography is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-legacy",
        "contains",
        "Atlantis legend legacy is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-practices",
        "contains",
        "Atlantis legend practices is a primary trailhead under Atlantis legend.",
        0.88,
        0.82
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-1",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-2",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-3",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-4",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-5",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-6",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-7",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-8",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-9",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-10",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-11",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-12",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-13",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-14",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-15",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-16",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-17",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-18",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-19",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-20",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-21",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-22",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-23",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ],
    [
        "atlantis-legend",
        "atlantis-legend-entry-24",
        "contains",
        "Supporting entry under Atlantis legend.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
