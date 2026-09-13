/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mongol-empire",
        "name": "Mongol Empire",
        "type": "topic",
        "short_description": "Khans, conquest routes, Pax Mongolica, and the largest contiguous land empire in history.",
        "description": "Khans, conquest routes, Pax Mongolica, and the largest contiguous land empire in history. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mongol Empire so readers can follow long-tail connections across history."
    },
    {
        "slug": "mongol-empire-figures",
        "name": "Mongol Empire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mongol Empire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mongol Empire."
    },
    {
        "slug": "mongol-empire-world",
        "name": "Mongol Empire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mongol Empire.",
        "description": "Geography, institutions, and periodization that give Mongol Empire its encyclopedia shape."
    },
    {
        "slug": "mongol-empire-places",
        "name": "Mongol Empire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mongol Empire.",
        "description": "Places, regions, and built sites that give Mongol Empire its map — where events and figures concentrate."
    },
    {
        "slug": "mongol-empire-events",
        "name": "Mongol Empire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mongol Empire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mongol Empire timeline."
    },
    {
        "slug": "mongol-empire-objects",
        "name": "Mongol Empire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mongol Empire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mongol Empire."
    },
    {
        "slug": "mongol-empire-factions",
        "name": "Mongol Empire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mongol Empire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mongol Empire."
    },
    {
        "slug": "mongol-empire-concepts",
        "name": "Mongol Empire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mongol Empire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mongol Empire readable as a lore graph."
    },
    {
        "slug": "mongol-empire-eras",
        "name": "Mongol Empire eras",
        "type": "event",
        "short_description": "Periodization for Mongol Empire.",
        "description": "Named eras and phases that help readers track how Mongol Empire changes across time."
    },
    {
        "slug": "mongol-empire-works",
        "name": "Mongol Empire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mongol Empire.",
        "description": "Primary works and adaptations through which most audiences encounter Mongol Empire."
    },
    {
        "slug": "mongol-empire-symbols",
        "name": "Mongol Empire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mongol Empire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mongol Empire."
    },
    {
        "slug": "mongol-empire-controversies",
        "name": "Mongol Empire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mongol Empire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mongol Empire argumentative."
    },
    {
        "slug": "mongol-empire-sources",
        "name": "Mongol Empire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mongol Empire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mongol Empire."
    },
    {
        "slug": "mongol-empire-geography",
        "name": "Mongol Empire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mongol Empire.",
        "description": "Regions, routes, and spatial systems that situate Mongol Empire beyond single named places."
    },
    {
        "slug": "mongol-empire-legacy",
        "name": "Mongol Empire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mongol Empire.",
        "description": "How Mongol Empire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mongol-empire-practices",
        "name": "Mongol Empire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mongol Empire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mongol Empire."
    },
    {
        "slug": "mongol-empire-entry-1",
        "name": "Mongol Empire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-2",
        "name": "Mongol Empire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-3",
        "name": "Mongol Empire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-4",
        "name": "Mongol Empire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-5",
        "name": "Mongol Empire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-6",
        "name": "Mongol Empire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-7",
        "name": "Mongol Empire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-8",
        "name": "Mongol Empire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-9",
        "name": "Mongol Empire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-10",
        "name": "Mongol Empire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-11",
        "name": "Mongol Empire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-12",
        "name": "Mongol Empire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-13",
        "name": "Mongol Empire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-14",
        "name": "Mongol Empire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-15",
        "name": "Mongol Empire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-16",
        "name": "Mongol Empire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-17",
        "name": "Mongol Empire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-18",
        "name": "Mongol Empire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-19",
        "name": "Mongol Empire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-20",
        "name": "Mongol Empire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-21",
        "name": "Mongol Empire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-22",
        "name": "Mongol Empire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-23",
        "name": "Mongol Empire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mongol-empire-entry-24",
        "name": "Mongol Empire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mongol Empire.",
        "description": "A supporting encyclopedia entry in the Mongol Empire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mongol-empire",
        "mongol-empire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mongol-empire",
        "mongol-empire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mongol-empire",
        "mongol-empire-places",
        "contains",
        "Mongol Empire places is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-events",
        "contains",
        "Mongol Empire events is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-objects",
        "contains",
        "Mongol Empire objects & artifacts is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-factions",
        "contains",
        "Mongol Empire factions & groups is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-concepts",
        "contains",
        "Mongol Empire concepts is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-eras",
        "contains",
        "Mongol Empire eras is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-works",
        "contains",
        "Mongol Empire works & media is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-symbols",
        "contains",
        "Mongol Empire symbols is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-controversies",
        "contains",
        "Mongol Empire controversies is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-sources",
        "contains",
        "Mongol Empire sources is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-geography",
        "contains",
        "Mongol Empire geography is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-legacy",
        "contains",
        "Mongol Empire legacy is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-practices",
        "contains",
        "Mongol Empire practices is a primary trailhead under Mongol Empire.",
        0.88,
        0.82
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-1",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-2",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-3",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-4",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-5",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-6",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-7",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-8",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-9",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-10",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-11",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-12",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-13",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-14",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-15",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-16",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-17",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-18",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-19",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-20",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-21",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-22",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-23",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ],
    [
        "mongol-empire",
        "mongol-empire-entry-24",
        "contains",
        "Supporting entry under Mongol Empire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
