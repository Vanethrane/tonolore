/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aztec-empire",
        "name": "Aztec Empire",
        "type": "topic",
        "short_description": "Tenochtitlan, tribute networks, and the Mexica imperial system before Spanish conquest.",
        "description": "Tenochtitlan, tribute networks, and the Mexica imperial system before Spanish conquest. This Ton-o-Lore subject maps people, places, events, and ideas tied to Aztec Empire so readers can follow long-tail connections across history."
    },
    {
        "slug": "aztec-empire-figures",
        "name": "Aztec Empire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Aztec Empire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Aztec Empire."
    },
    {
        "slug": "aztec-empire-world",
        "name": "Aztec Empire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Aztec Empire.",
        "description": "Geography, institutions, and periodization that give Aztec Empire its encyclopedia shape."
    },
    {
        "slug": "aztec-empire-places",
        "name": "Aztec Empire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aztec Empire.",
        "description": "Places, regions, and built sites that give Aztec Empire its map — where events and figures concentrate."
    },
    {
        "slug": "aztec-empire-events",
        "name": "Aztec Empire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aztec Empire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aztec Empire timeline."
    },
    {
        "slug": "aztec-empire-objects",
        "name": "Aztec Empire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aztec Empire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aztec Empire."
    },
    {
        "slug": "aztec-empire-factions",
        "name": "Aztec Empire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aztec Empire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aztec Empire."
    },
    {
        "slug": "aztec-empire-concepts",
        "name": "Aztec Empire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aztec Empire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aztec Empire readable as a lore graph."
    },
    {
        "slug": "aztec-empire-eras",
        "name": "Aztec Empire eras",
        "type": "event",
        "short_description": "Periodization for Aztec Empire.",
        "description": "Named eras and phases that help readers track how Aztec Empire changes across time."
    },
    {
        "slug": "aztec-empire-works",
        "name": "Aztec Empire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aztec Empire.",
        "description": "Primary works and adaptations through which most audiences encounter Aztec Empire."
    },
    {
        "slug": "aztec-empire-symbols",
        "name": "Aztec Empire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aztec Empire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aztec Empire."
    },
    {
        "slug": "aztec-empire-controversies",
        "name": "Aztec Empire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aztec Empire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aztec Empire argumentative."
    },
    {
        "slug": "aztec-empire-sources",
        "name": "Aztec Empire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aztec Empire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aztec Empire."
    },
    {
        "slug": "aztec-empire-geography",
        "name": "Aztec Empire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aztec Empire.",
        "description": "Regions, routes, and spatial systems that situate Aztec Empire beyond single named places."
    },
    {
        "slug": "aztec-empire-legacy",
        "name": "Aztec Empire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aztec Empire.",
        "description": "How Aztec Empire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aztec-empire-practices",
        "name": "Aztec Empire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aztec Empire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aztec Empire."
    },
    {
        "slug": "aztec-empire-entry-1",
        "name": "Aztec Empire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-2",
        "name": "Aztec Empire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-3",
        "name": "Aztec Empire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-4",
        "name": "Aztec Empire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-5",
        "name": "Aztec Empire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-6",
        "name": "Aztec Empire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-7",
        "name": "Aztec Empire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-8",
        "name": "Aztec Empire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-9",
        "name": "Aztec Empire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-10",
        "name": "Aztec Empire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-11",
        "name": "Aztec Empire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-12",
        "name": "Aztec Empire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-13",
        "name": "Aztec Empire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-14",
        "name": "Aztec Empire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-15",
        "name": "Aztec Empire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-16",
        "name": "Aztec Empire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-17",
        "name": "Aztec Empire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-18",
        "name": "Aztec Empire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-19",
        "name": "Aztec Empire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-20",
        "name": "Aztec Empire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-21",
        "name": "Aztec Empire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-22",
        "name": "Aztec Empire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-23",
        "name": "Aztec Empire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aztec-empire-entry-24",
        "name": "Aztec Empire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aztec Empire.",
        "description": "A supporting encyclopedia entry in the Aztec Empire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aztec-empire",
        "aztec-empire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aztec-empire",
        "aztec-empire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aztec-empire",
        "aztec-empire-places",
        "contains",
        "Aztec Empire places is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-events",
        "contains",
        "Aztec Empire events is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-objects",
        "contains",
        "Aztec Empire objects & artifacts is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-factions",
        "contains",
        "Aztec Empire factions & groups is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-concepts",
        "contains",
        "Aztec Empire concepts is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-eras",
        "contains",
        "Aztec Empire eras is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-works",
        "contains",
        "Aztec Empire works & media is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-symbols",
        "contains",
        "Aztec Empire symbols is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-controversies",
        "contains",
        "Aztec Empire controversies is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-sources",
        "contains",
        "Aztec Empire sources is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-geography",
        "contains",
        "Aztec Empire geography is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-legacy",
        "contains",
        "Aztec Empire legacy is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-practices",
        "contains",
        "Aztec Empire practices is a primary trailhead under Aztec Empire.",
        0.88,
        0.82
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-1",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-2",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-3",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-4",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-5",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-6",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-7",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-8",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-9",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-10",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-11",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-12",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-13",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-14",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-15",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-16",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-17",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-18",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-19",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-20",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-21",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-22",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-23",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ],
    [
        "aztec-empire",
        "aztec-empire-entry-24",
        "contains",
        "Supporting entry under Aztec Empire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
