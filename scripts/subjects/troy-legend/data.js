/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "troy-legend",
        "name": "Trojan War legend",
        "type": "topic",
        "short_description": "Helen, wooden horse, and the Homeric war cycle that sits between myth and remembered history.",
        "description": "Helen, wooden horse, and the Homeric war cycle that sits between myth and remembered history. This Ton-o-Lore subject maps people, places, events, and ideas tied to Trojan War legend so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "troy-legend-figures",
        "name": "Trojan War legend figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Trojan War legend.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Trojan War legend."
    },
    {
        "slug": "troy-legend-world",
        "name": "Trojan War legend world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Trojan War legend.",
        "description": "Geography, institutions, and periodization that give Trojan War legend its encyclopedia shape."
    },
    {
        "slug": "troy-legend-places",
        "name": "Trojan War legend places",
        "type": "place",
        "short_description": "Locations and geographies that frame Trojan War legend.",
        "description": "Places, regions, and built sites that give Trojan War legend its map — where events and figures concentrate."
    },
    {
        "slug": "troy-legend-events",
        "name": "Trojan War legend events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Trojan War legend.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Trojan War legend timeline."
    },
    {
        "slug": "troy-legend-objects",
        "name": "Trojan War legend objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Trojan War legend.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Trojan War legend."
    },
    {
        "slug": "troy-legend-factions",
        "name": "Trojan War legend factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Trojan War legend.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Trojan War legend."
    },
    {
        "slug": "troy-legend-concepts",
        "name": "Trojan War legend concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Trojan War legend.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Trojan War legend readable as a lore graph."
    },
    {
        "slug": "troy-legend-eras",
        "name": "Trojan War legend eras",
        "type": "event",
        "short_description": "Periodization for Trojan War legend.",
        "description": "Named eras and phases that help readers track how Trojan War legend changes across time."
    },
    {
        "slug": "troy-legend-works",
        "name": "Trojan War legend works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Trojan War legend.",
        "description": "Primary works and adaptations through which most audiences encounter Trojan War legend."
    },
    {
        "slug": "troy-legend-symbols",
        "name": "Trojan War legend symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Trojan War legend.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Trojan War legend."
    },
    {
        "slug": "troy-legend-controversies",
        "name": "Trojan War legend controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Trojan War legend.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Trojan War legend argumentative."
    },
    {
        "slug": "troy-legend-sources",
        "name": "Trojan War legend sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Trojan War legend.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Trojan War legend."
    },
    {
        "slug": "troy-legend-geography",
        "name": "Trojan War legend geography",
        "type": "place",
        "short_description": "Broader geographic framing for Trojan War legend.",
        "description": "Regions, routes, and spatial systems that situate Trojan War legend beyond single named places."
    },
    {
        "slug": "troy-legend-legacy",
        "name": "Trojan War legend legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Trojan War legend.",
        "description": "How Trojan War legend continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "troy-legend-practices",
        "name": "Trojan War legend practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Trojan War legend.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Trojan War legend."
    },
    {
        "slug": "troy-legend-entry-1",
        "name": "Trojan War legend entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-2",
        "name": "Trojan War legend entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-3",
        "name": "Trojan War legend entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-4",
        "name": "Trojan War legend entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-5",
        "name": "Trojan War legend entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-6",
        "name": "Trojan War legend entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-7",
        "name": "Trojan War legend entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-8",
        "name": "Trojan War legend entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-9",
        "name": "Trojan War legend entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-10",
        "name": "Trojan War legend entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-11",
        "name": "Trojan War legend entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-12",
        "name": "Trojan War legend entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-13",
        "name": "Trojan War legend entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-14",
        "name": "Trojan War legend entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-15",
        "name": "Trojan War legend entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-16",
        "name": "Trojan War legend entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-17",
        "name": "Trojan War legend entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-18",
        "name": "Trojan War legend entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-19",
        "name": "Trojan War legend entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-20",
        "name": "Trojan War legend entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-21",
        "name": "Trojan War legend entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-22",
        "name": "Trojan War legend entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-23",
        "name": "Trojan War legend entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "troy-legend-entry-24",
        "name": "Trojan War legend entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Trojan War legend.",
        "description": "A supporting encyclopedia entry in the Trojan War legend subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "troy-legend",
        "troy-legend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "troy-legend",
        "troy-legend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "troy-legend",
        "troy-legend-places",
        "contains",
        "Trojan War legend places is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-events",
        "contains",
        "Trojan War legend events is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-objects",
        "contains",
        "Trojan War legend objects & artifacts is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-factions",
        "contains",
        "Trojan War legend factions & groups is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-concepts",
        "contains",
        "Trojan War legend concepts is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-eras",
        "contains",
        "Trojan War legend eras is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-works",
        "contains",
        "Trojan War legend works & media is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-symbols",
        "contains",
        "Trojan War legend symbols is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-controversies",
        "contains",
        "Trojan War legend controversies is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-sources",
        "contains",
        "Trojan War legend sources is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-geography",
        "contains",
        "Trojan War legend geography is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-legacy",
        "contains",
        "Trojan War legend legacy is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-practices",
        "contains",
        "Trojan War legend practices is a primary trailhead under Trojan War legend.",
        0.88,
        0.82
    ],
    [
        "troy-legend",
        "troy-legend-entry-1",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-2",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-3",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-4",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-5",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-6",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-7",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-8",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-9",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-10",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-11",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-12",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-13",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-14",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-15",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-16",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-17",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-18",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-19",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-20",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-21",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-22",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-23",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ],
    [
        "troy-legend",
        "troy-legend-entry-24",
        "contains",
        "Supporting entry under Trojan War legend.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
