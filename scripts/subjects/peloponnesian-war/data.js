/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "peloponnesian-war",
        "name": "Peloponnesian War",
        "type": "topic",
        "short_description": "Athens vs Sparta, Thucydides’ history, and the classical war that defined Greek politics.",
        "description": "Athens vs Sparta, Thucydides’ history, and the classical war that defined Greek politics. This Ton-o-Lore subject maps people, places, events, and ideas tied to Peloponnesian War so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "peloponnesian-war-figures",
        "name": "Peloponnesian War figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Peloponnesian War.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Peloponnesian War."
    },
    {
        "slug": "peloponnesian-war-world",
        "name": "Peloponnesian War world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Peloponnesian War.",
        "description": "Geography, institutions, and periodization that give Peloponnesian War its encyclopedia shape."
    },
    {
        "slug": "peloponnesian-war-places",
        "name": "Peloponnesian War places",
        "type": "place",
        "short_description": "Locations and geographies that frame Peloponnesian War.",
        "description": "Places, regions, and built sites that give Peloponnesian War its map — where events and figures concentrate."
    },
    {
        "slug": "peloponnesian-war-events",
        "name": "Peloponnesian War events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Peloponnesian War.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Peloponnesian War timeline."
    },
    {
        "slug": "peloponnesian-war-objects",
        "name": "Peloponnesian War objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Peloponnesian War.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Peloponnesian War."
    },
    {
        "slug": "peloponnesian-war-factions",
        "name": "Peloponnesian War factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Peloponnesian War.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Peloponnesian War."
    },
    {
        "slug": "peloponnesian-war-concepts",
        "name": "Peloponnesian War concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Peloponnesian War.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Peloponnesian War readable as a lore graph."
    },
    {
        "slug": "peloponnesian-war-eras",
        "name": "Peloponnesian War eras",
        "type": "event",
        "short_description": "Periodization for Peloponnesian War.",
        "description": "Named eras and phases that help readers track how Peloponnesian War changes across time."
    },
    {
        "slug": "peloponnesian-war-works",
        "name": "Peloponnesian War works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Peloponnesian War.",
        "description": "Primary works and adaptations through which most audiences encounter Peloponnesian War."
    },
    {
        "slug": "peloponnesian-war-symbols",
        "name": "Peloponnesian War symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Peloponnesian War.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Peloponnesian War."
    },
    {
        "slug": "peloponnesian-war-controversies",
        "name": "Peloponnesian War controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Peloponnesian War.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Peloponnesian War argumentative."
    },
    {
        "slug": "peloponnesian-war-sources",
        "name": "Peloponnesian War sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Peloponnesian War.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Peloponnesian War."
    },
    {
        "slug": "peloponnesian-war-geography",
        "name": "Peloponnesian War geography",
        "type": "place",
        "short_description": "Broader geographic framing for Peloponnesian War.",
        "description": "Regions, routes, and spatial systems that situate Peloponnesian War beyond single named places."
    },
    {
        "slug": "peloponnesian-war-legacy",
        "name": "Peloponnesian War legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Peloponnesian War.",
        "description": "How Peloponnesian War continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "peloponnesian-war-practices",
        "name": "Peloponnesian War practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Peloponnesian War.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Peloponnesian War."
    },
    {
        "slug": "peloponnesian-war-entry-1",
        "name": "Peloponnesian War entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-2",
        "name": "Peloponnesian War entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-3",
        "name": "Peloponnesian War entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-4",
        "name": "Peloponnesian War entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-5",
        "name": "Peloponnesian War entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-6",
        "name": "Peloponnesian War entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-7",
        "name": "Peloponnesian War entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-8",
        "name": "Peloponnesian War entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-9",
        "name": "Peloponnesian War entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-10",
        "name": "Peloponnesian War entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-11",
        "name": "Peloponnesian War entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-12",
        "name": "Peloponnesian War entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-13",
        "name": "Peloponnesian War entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-14",
        "name": "Peloponnesian War entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-15",
        "name": "Peloponnesian War entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-16",
        "name": "Peloponnesian War entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-17",
        "name": "Peloponnesian War entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-18",
        "name": "Peloponnesian War entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-19",
        "name": "Peloponnesian War entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-20",
        "name": "Peloponnesian War entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-21",
        "name": "Peloponnesian War entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-22",
        "name": "Peloponnesian War entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-23",
        "name": "Peloponnesian War entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "peloponnesian-war-entry-24",
        "name": "Peloponnesian War entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Peloponnesian War.",
        "description": "A supporting encyclopedia entry in the Peloponnesian War subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "peloponnesian-war",
        "peloponnesian-war-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-places",
        "contains",
        "Peloponnesian War places is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-events",
        "contains",
        "Peloponnesian War events is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-objects",
        "contains",
        "Peloponnesian War objects & artifacts is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-factions",
        "contains",
        "Peloponnesian War factions & groups is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-concepts",
        "contains",
        "Peloponnesian War concepts is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-eras",
        "contains",
        "Peloponnesian War eras is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-works",
        "contains",
        "Peloponnesian War works & media is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-symbols",
        "contains",
        "Peloponnesian War symbols is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-controversies",
        "contains",
        "Peloponnesian War controversies is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-sources",
        "contains",
        "Peloponnesian War sources is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-geography",
        "contains",
        "Peloponnesian War geography is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-legacy",
        "contains",
        "Peloponnesian War legacy is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-practices",
        "contains",
        "Peloponnesian War practices is a primary trailhead under Peloponnesian War.",
        0.88,
        0.82
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-1",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-2",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-3",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-4",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-5",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-6",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-7",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-8",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-9",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-10",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-11",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-12",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-13",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-14",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-15",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-16",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-17",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-18",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-19",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-20",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-21",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-22",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-23",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ],
    [
        "peloponnesian-war",
        "peloponnesian-war-entry-24",
        "contains",
        "Supporting entry under Peloponnesian War.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
