/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "byzantine-empire",
        "name": "Byzantine Empire",
        "type": "topic",
        "short_description": "Constantinople, emperors, theology, and the medieval Roman state that outlasted the West.",
        "description": "Constantinople, emperors, theology, and the medieval Roman state that outlasted the West. This Ton-o-Lore subject maps people, places, events, and ideas tied to Byzantine Empire so readers can follow long-tail connections across history."
    },
    {
        "slug": "byzantine-empire-figures",
        "name": "Byzantine Empire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Byzantine Empire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Byzantine Empire."
    },
    {
        "slug": "byzantine-empire-world",
        "name": "Byzantine Empire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Byzantine Empire.",
        "description": "Geography, institutions, and periodization that give Byzantine Empire its encyclopedia shape."
    },
    {
        "slug": "byzantine-empire-places",
        "name": "Byzantine Empire places",
        "type": "place",
        "short_description": "Locations and geographies that frame Byzantine Empire.",
        "description": "Places, regions, and built sites that give Byzantine Empire its map — where events and figures concentrate."
    },
    {
        "slug": "byzantine-empire-events",
        "name": "Byzantine Empire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Byzantine Empire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Byzantine Empire timeline."
    },
    {
        "slug": "byzantine-empire-objects",
        "name": "Byzantine Empire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Byzantine Empire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Byzantine Empire."
    },
    {
        "slug": "byzantine-empire-factions",
        "name": "Byzantine Empire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Byzantine Empire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Byzantine Empire."
    },
    {
        "slug": "byzantine-empire-concepts",
        "name": "Byzantine Empire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Byzantine Empire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Byzantine Empire readable as a lore graph."
    },
    {
        "slug": "byzantine-empire-eras",
        "name": "Byzantine Empire eras",
        "type": "event",
        "short_description": "Periodization for Byzantine Empire.",
        "description": "Named eras and phases that help readers track how Byzantine Empire changes across time."
    },
    {
        "slug": "byzantine-empire-works",
        "name": "Byzantine Empire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Byzantine Empire.",
        "description": "Primary works and adaptations through which most audiences encounter Byzantine Empire."
    },
    {
        "slug": "byzantine-empire-symbols",
        "name": "Byzantine Empire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Byzantine Empire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Byzantine Empire."
    },
    {
        "slug": "byzantine-empire-controversies",
        "name": "Byzantine Empire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Byzantine Empire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Byzantine Empire argumentative."
    },
    {
        "slug": "byzantine-empire-sources",
        "name": "Byzantine Empire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Byzantine Empire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Byzantine Empire."
    },
    {
        "slug": "byzantine-empire-geography",
        "name": "Byzantine Empire geography",
        "type": "place",
        "short_description": "Broader geographic framing for Byzantine Empire.",
        "description": "Regions, routes, and spatial systems that situate Byzantine Empire beyond single named places."
    },
    {
        "slug": "byzantine-empire-legacy",
        "name": "Byzantine Empire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Byzantine Empire.",
        "description": "How Byzantine Empire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "byzantine-empire-practices",
        "name": "Byzantine Empire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Byzantine Empire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Byzantine Empire."
    },
    {
        "slug": "byzantine-empire-entry-1",
        "name": "Byzantine Empire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-2",
        "name": "Byzantine Empire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-3",
        "name": "Byzantine Empire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-4",
        "name": "Byzantine Empire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-5",
        "name": "Byzantine Empire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-6",
        "name": "Byzantine Empire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-7",
        "name": "Byzantine Empire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-8",
        "name": "Byzantine Empire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-9",
        "name": "Byzantine Empire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-10",
        "name": "Byzantine Empire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-11",
        "name": "Byzantine Empire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-12",
        "name": "Byzantine Empire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-13",
        "name": "Byzantine Empire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-14",
        "name": "Byzantine Empire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-15",
        "name": "Byzantine Empire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-16",
        "name": "Byzantine Empire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-17",
        "name": "Byzantine Empire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-18",
        "name": "Byzantine Empire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-19",
        "name": "Byzantine Empire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-20",
        "name": "Byzantine Empire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-21",
        "name": "Byzantine Empire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-22",
        "name": "Byzantine Empire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-23",
        "name": "Byzantine Empire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "byzantine-empire-entry-24",
        "name": "Byzantine Empire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Byzantine Empire.",
        "description": "A supporting encyclopedia entry in the Byzantine Empire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "byzantine-empire",
        "byzantine-empire-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "byzantine-empire",
        "byzantine-empire-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "byzantine-empire",
        "byzantine-empire-places",
        "contains",
        "Byzantine Empire places is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-events",
        "contains",
        "Byzantine Empire events is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-objects",
        "contains",
        "Byzantine Empire objects & artifacts is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-factions",
        "contains",
        "Byzantine Empire factions & groups is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-concepts",
        "contains",
        "Byzantine Empire concepts is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-eras",
        "contains",
        "Byzantine Empire eras is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-works",
        "contains",
        "Byzantine Empire works & media is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-symbols",
        "contains",
        "Byzantine Empire symbols is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-controversies",
        "contains",
        "Byzantine Empire controversies is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-sources",
        "contains",
        "Byzantine Empire sources is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-geography",
        "contains",
        "Byzantine Empire geography is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-legacy",
        "contains",
        "Byzantine Empire legacy is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-practices",
        "contains",
        "Byzantine Empire practices is a primary trailhead under Byzantine Empire.",
        0.88,
        0.82
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-1",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-2",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-3",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-4",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-5",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-6",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-7",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-8",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-9",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-10",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-11",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-12",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-13",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-14",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-15",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-16",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-17",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-18",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-19",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-20",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-21",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-22",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-23",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ],
    [
        "byzantine-empire",
        "byzantine-empire-entry-24",
        "contains",
        "Supporting entry under Byzantine Empire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
