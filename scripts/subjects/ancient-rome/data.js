/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ancient-rome",
        "name": "The Roman Empire",
        "type": "topic",
        "short_description": "Republic to empire — emperors, legions, intrigue, cities, and monuments that still organize civic myth.",
        "description": "Republic to empire — emperors, legions, intrigue, cities, and monuments that still organize civic myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to the Roman Empire so readers can follow long-tail connections across history."
    },
    {
        "slug": "ancient-rome-figures",
        "name": "Roman Empire figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to the Roman Empire.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring the Roman Empire."
    },
    {
        "slug": "ancient-rome-world",
        "name": "Roman Empire world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame the Roman Empire.",
        "description": "Geography, institutions, and periodization that give the Roman Empire its encyclopedia shape."
    },
    {
        "slug": "ancient-rome-places",
        "name": "The Roman Empire places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Roman Empire.",
        "description": "Places, regions, and built sites that give The Roman Empire its map — where events and figures concentrate."
    },
    {
        "slug": "ancient-rome-events",
        "name": "The Roman Empire events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Roman Empire.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Roman Empire timeline."
    },
    {
        "slug": "ancient-rome-objects",
        "name": "The Roman Empire objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Roman Empire.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Roman Empire."
    },
    {
        "slug": "ancient-rome-factions",
        "name": "The Roman Empire factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Roman Empire.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Roman Empire."
    },
    {
        "slug": "ancient-rome-concepts",
        "name": "The Roman Empire concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Roman Empire.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Roman Empire readable as a lore graph."
    },
    {
        "slug": "ancient-rome-eras",
        "name": "The Roman Empire eras",
        "type": "event",
        "short_description": "Periodization for The Roman Empire.",
        "description": "Named eras and phases that help readers track how The Roman Empire changes across time."
    },
    {
        "slug": "ancient-rome-works",
        "name": "The Roman Empire works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Roman Empire.",
        "description": "Primary works and adaptations through which most audiences encounter The Roman Empire."
    },
    {
        "slug": "ancient-rome-symbols",
        "name": "The Roman Empire symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Roman Empire.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Roman Empire."
    },
    {
        "slug": "ancient-rome-controversies",
        "name": "The Roman Empire controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Roman Empire.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Roman Empire argumentative."
    },
    {
        "slug": "ancient-rome-sources",
        "name": "The Roman Empire sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Roman Empire.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Roman Empire."
    },
    {
        "slug": "ancient-rome-geography",
        "name": "The Roman Empire geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Roman Empire.",
        "description": "Regions, routes, and spatial systems that situate The Roman Empire beyond single named places."
    },
    {
        "slug": "ancient-rome-legacy",
        "name": "The Roman Empire legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Roman Empire.",
        "description": "How The Roman Empire continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ancient-rome-practices",
        "name": "The Roman Empire practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Roman Empire.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Roman Empire."
    },
    {
        "slug": "ancient-rome-entry-1",
        "name": "The Roman Empire entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-2",
        "name": "The Roman Empire entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-3",
        "name": "The Roman Empire entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-4",
        "name": "The Roman Empire entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-5",
        "name": "The Roman Empire entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-6",
        "name": "The Roman Empire entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-7",
        "name": "The Roman Empire entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-8",
        "name": "The Roman Empire entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-9",
        "name": "The Roman Empire entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-10",
        "name": "The Roman Empire entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-11",
        "name": "The Roman Empire entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-12",
        "name": "The Roman Empire entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-13",
        "name": "The Roman Empire entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-14",
        "name": "The Roman Empire entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-15",
        "name": "The Roman Empire entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-16",
        "name": "The Roman Empire entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-17",
        "name": "The Roman Empire entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-18",
        "name": "The Roman Empire entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-19",
        "name": "The Roman Empire entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-20",
        "name": "The Roman Empire entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-21",
        "name": "The Roman Empire entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-22",
        "name": "The Roman Empire entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-23",
        "name": "The Roman Empire entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-rome-entry-24",
        "name": "The Roman Empire entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Roman Empire.",
        "description": "A supporting encyclopedia entry in the The Roman Empire subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ancient-rome",
        "ancient-rome-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ancient-rome",
        "ancient-rome-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ancient-rome",
        "ancient-rome-places",
        "contains",
        "The Roman Empire places is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-events",
        "contains",
        "The Roman Empire events is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-objects",
        "contains",
        "The Roman Empire objects & artifacts is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-factions",
        "contains",
        "The Roman Empire factions & groups is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-concepts",
        "contains",
        "The Roman Empire concepts is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-eras",
        "contains",
        "The Roman Empire eras is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-works",
        "contains",
        "The Roman Empire works & media is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-symbols",
        "contains",
        "The Roman Empire symbols is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-controversies",
        "contains",
        "The Roman Empire controversies is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-sources",
        "contains",
        "The Roman Empire sources is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-geography",
        "contains",
        "The Roman Empire geography is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-legacy",
        "contains",
        "The Roman Empire legacy is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-practices",
        "contains",
        "The Roman Empire practices is a primary trailhead under The Roman Empire.",
        0.88,
        0.82
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-1",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-2",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-3",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-4",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-5",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-6",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-7",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-8",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-9",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-10",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-11",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-12",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-13",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-14",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-15",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-16",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-17",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-18",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-19",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-20",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-21",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-22",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-23",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ],
    [
        "ancient-rome",
        "ancient-rome-entry-24",
        "contains",
        "Supporting entry under The Roman Empire.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
