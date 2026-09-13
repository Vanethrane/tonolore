/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "british-empire",
        "name": "British Empire",
        "type": "topic",
        "short_description": "Colonies, navy, trade companies, and the global dominion that reshaped the modern map.",
        "description": "Colonies, navy, trade companies, and the global dominion that reshaped the modern map. This Ton-o-Lore subject maps people, places, events, and ideas tied to British Empire so readers can follow long-tail connections across history."
    },
    {
        "slug": "british-empire-figures",
        "name": "British Empire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to British Empire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring British Empire."
    },
    {
        "slug": "british-empire-world",
        "name": "British Empire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame British Empire.",
        "description": "Geography, institutions, and periodization that give British Empire its encyclopedia shape."
    },
    {
        "slug": "british-empire-places",
        "name": "British Empire places",
        "type": "place",
        "short_description": "Locations and geographies that frame British Empire.",
        "description": "Places, regions, and built sites that give British Empire its map — where events and figures concentrate."
    },
    {
        "slug": "british-empire-events",
        "name": "British Empire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in British Empire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the British Empire timeline."
    },
    {
        "slug": "british-empire-objects",
        "name": "British Empire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to British Empire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through British Empire."
    },
    {
        "slug": "british-empire-factions",
        "name": "British Empire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside British Empire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in British Empire."
    },
    {
        "slug": "british-empire-concepts",
        "name": "British Empire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize British Empire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make British Empire readable as a lore graph."
    },
    {
        "slug": "british-empire-eras",
        "name": "British Empire eras",
        "type": "event",
        "short_description": "Periodization for British Empire.",
        "description": "Named eras and phases that help readers track how British Empire changes across time."
    },
    {
        "slug": "british-empire-works",
        "name": "British Empire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry British Empire.",
        "description": "Primary works and adaptations through which most audiences encounter British Empire."
    },
    {
        "slug": "british-empire-symbols",
        "name": "British Empire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with British Empire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside British Empire."
    },
    {
        "slug": "british-empire-controversies",
        "name": "British Empire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in British Empire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep British Empire argumentative."
    },
    {
        "slug": "british-empire-sources",
        "name": "British Empire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into British Empire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify British Empire."
    },
    {
        "slug": "british-empire-geography",
        "name": "British Empire geography",
        "type": "place",
        "short_description": "Broader geographic framing for British Empire.",
        "description": "Regions, routes, and spatial systems that situate British Empire beyond single named places."
    },
    {
        "slug": "british-empire-legacy",
        "name": "British Empire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of British Empire.",
        "description": "How British Empire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "british-empire-practices",
        "name": "British Empire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in British Empire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in British Empire."
    },
    {
        "slug": "british-empire-entry-1",
        "name": "British Empire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-2",
        "name": "British Empire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-3",
        "name": "British Empire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-4",
        "name": "British Empire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-5",
        "name": "British Empire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-6",
        "name": "British Empire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-7",
        "name": "British Empire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-8",
        "name": "British Empire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-9",
        "name": "British Empire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-10",
        "name": "British Empire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-11",
        "name": "British Empire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-12",
        "name": "British Empire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-13",
        "name": "British Empire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-14",
        "name": "British Empire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-15",
        "name": "British Empire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-16",
        "name": "British Empire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-17",
        "name": "British Empire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-18",
        "name": "British Empire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-19",
        "name": "British Empire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-20",
        "name": "British Empire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-21",
        "name": "British Empire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-22",
        "name": "British Empire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-23",
        "name": "British Empire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "british-empire-entry-24",
        "name": "British Empire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside British Empire.",
        "description": "A supporting encyclopedia entry in the British Empire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "british-empire",
        "british-empire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "british-empire",
        "british-empire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "british-empire",
        "british-empire-places",
        "contains",
        "British Empire places is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-events",
        "contains",
        "British Empire events is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-objects",
        "contains",
        "British Empire objects & artifacts is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-factions",
        "contains",
        "British Empire factions & groups is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-concepts",
        "contains",
        "British Empire concepts is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-eras",
        "contains",
        "British Empire eras is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-works",
        "contains",
        "British Empire works & media is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-symbols",
        "contains",
        "British Empire symbols is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-controversies",
        "contains",
        "British Empire controversies is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-sources",
        "contains",
        "British Empire sources is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-geography",
        "contains",
        "British Empire geography is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-legacy",
        "contains",
        "British Empire legacy is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-practices",
        "contains",
        "British Empire practices is a primary trailhead under British Empire.",
        0.88,
        0.82
    ],
    [
        "british-empire",
        "british-empire-entry-1",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-2",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-3",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-4",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-5",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-6",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-7",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-8",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-9",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-10",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-11",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-12",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-13",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-14",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-15",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-16",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-17",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-18",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-19",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-20",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-21",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-22",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-23",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ],
    [
        "british-empire",
        "british-empire-entry-24",
        "contains",
        "Supporting entry under British Empire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
