/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "achaemenid-empire",
        "name": "Achaemenid Empire",
        "type": "topic",
        "short_description": "Persian kings, satrapies, royal roads, and the first pan-Near Eastern superstate.",
        "description": "Persian kings, satrapies, royal roads, and the first pan-Near Eastern superstate. This Ton-o-Lore subject maps people, places, events, and ideas tied to Achaemenid Empire so readers can follow long-tail connections across history."
    },
    {
        "slug": "achaemenid-empire-figures",
        "name": "Achaemenid Empire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Achaemenid Empire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Achaemenid Empire."
    },
    {
        "slug": "achaemenid-empire-world",
        "name": "Achaemenid Empire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Achaemenid Empire.",
        "description": "Geography, institutions, and periodization that give Achaemenid Empire its encyclopedia shape."
    },
    {
        "slug": "achaemenid-empire-places",
        "name": "Achaemenid Empire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Achaemenid Empire.",
        "description": "Places, regions, and built sites that give Achaemenid Empire its map — where events and figures concentrate."
    },
    {
        "slug": "achaemenid-empire-events",
        "name": "Achaemenid Empire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Achaemenid Empire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Achaemenid Empire timeline."
    },
    {
        "slug": "achaemenid-empire-objects",
        "name": "Achaemenid Empire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Achaemenid Empire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Achaemenid Empire."
    },
    {
        "slug": "achaemenid-empire-factions",
        "name": "Achaemenid Empire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Achaemenid Empire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Achaemenid Empire."
    },
    {
        "slug": "achaemenid-empire-concepts",
        "name": "Achaemenid Empire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Achaemenid Empire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Achaemenid Empire readable as a lore graph."
    },
    {
        "slug": "achaemenid-empire-eras",
        "name": "Achaemenid Empire eras",
        "type": "event",
        "short_description": "Periodization for Achaemenid Empire.",
        "description": "Named eras and phases that help readers track how Achaemenid Empire changes across time."
    },
    {
        "slug": "achaemenid-empire-works",
        "name": "Achaemenid Empire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Achaemenid Empire.",
        "description": "Primary works and adaptations through which most audiences encounter Achaemenid Empire."
    },
    {
        "slug": "achaemenid-empire-symbols",
        "name": "Achaemenid Empire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Achaemenid Empire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Achaemenid Empire."
    },
    {
        "slug": "achaemenid-empire-controversies",
        "name": "Achaemenid Empire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Achaemenid Empire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Achaemenid Empire argumentative."
    },
    {
        "slug": "achaemenid-empire-sources",
        "name": "Achaemenid Empire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Achaemenid Empire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Achaemenid Empire."
    },
    {
        "slug": "achaemenid-empire-geography",
        "name": "Achaemenid Empire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Achaemenid Empire.",
        "description": "Regions, routes, and spatial systems that situate Achaemenid Empire beyond single named places."
    },
    {
        "slug": "achaemenid-empire-legacy",
        "name": "Achaemenid Empire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Achaemenid Empire.",
        "description": "How Achaemenid Empire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "achaemenid-empire-practices",
        "name": "Achaemenid Empire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Achaemenid Empire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Achaemenid Empire."
    },
    {
        "slug": "achaemenid-empire-entry-1",
        "name": "Achaemenid Empire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-2",
        "name": "Achaemenid Empire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-3",
        "name": "Achaemenid Empire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-4",
        "name": "Achaemenid Empire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-5",
        "name": "Achaemenid Empire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-6",
        "name": "Achaemenid Empire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-7",
        "name": "Achaemenid Empire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-8",
        "name": "Achaemenid Empire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-9",
        "name": "Achaemenid Empire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-10",
        "name": "Achaemenid Empire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-11",
        "name": "Achaemenid Empire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-12",
        "name": "Achaemenid Empire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-13",
        "name": "Achaemenid Empire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-14",
        "name": "Achaemenid Empire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-15",
        "name": "Achaemenid Empire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-16",
        "name": "Achaemenid Empire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-17",
        "name": "Achaemenid Empire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-18",
        "name": "Achaemenid Empire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-19",
        "name": "Achaemenid Empire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-20",
        "name": "Achaemenid Empire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-21",
        "name": "Achaemenid Empire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-22",
        "name": "Achaemenid Empire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-23",
        "name": "Achaemenid Empire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "achaemenid-empire-entry-24",
        "name": "Achaemenid Empire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Achaemenid Empire.",
        "description": "A supporting encyclopedia entry in the Achaemenid Empire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "achaemenid-empire",
        "achaemenid-empire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-places",
        "contains",
        "Achaemenid Empire places is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-events",
        "contains",
        "Achaemenid Empire events is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-objects",
        "contains",
        "Achaemenid Empire objects & artifacts is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-factions",
        "contains",
        "Achaemenid Empire factions & groups is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-concepts",
        "contains",
        "Achaemenid Empire concepts is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-eras",
        "contains",
        "Achaemenid Empire eras is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-works",
        "contains",
        "Achaemenid Empire works & media is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-symbols",
        "contains",
        "Achaemenid Empire symbols is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-controversies",
        "contains",
        "Achaemenid Empire controversies is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-sources",
        "contains",
        "Achaemenid Empire sources is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-geography",
        "contains",
        "Achaemenid Empire geography is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-legacy",
        "contains",
        "Achaemenid Empire legacy is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-practices",
        "contains",
        "Achaemenid Empire practices is a primary trailhead under Achaemenid Empire.",
        0.88,
        0.82
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-1",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-2",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-3",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-4",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-5",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-6",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-7",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-8",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-9",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-10",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-11",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-12",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-13",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-14",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-15",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-16",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-17",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-18",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-19",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-20",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-21",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-22",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-23",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ],
    [
        "achaemenid-empire",
        "achaemenid-empire-entry-24",
        "contains",
        "Supporting entry under Achaemenid Empire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
