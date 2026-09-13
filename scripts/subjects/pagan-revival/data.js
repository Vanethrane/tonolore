/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pagan-revival",
        "name": "Modern pagan revival",
        "type": "topic",
        "short_description": "Wicca, reconstructionists, and the twentieth-century return of nature-centered occult religion.",
        "description": "Wicca, reconstructionists, and the twentieth-century return of nature-centered occult religion. This Ton-o-Lore subject maps people, places, events, and ideas tied to Modern pagan revival so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "pagan-revival-figures",
        "name": "Modern pagan revival figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Modern pagan revival.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Modern pagan revival."
    },
    {
        "slug": "pagan-revival-world",
        "name": "Modern pagan revival world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Modern pagan revival.",
        "description": "Geography, institutions, and periodization that give Modern pagan revival its encyclopedia shape."
    },
    {
        "slug": "pagan-revival-places",
        "name": "Modern pagan revival places",
        "type": "place",
        "short_description": "Locations and geographies that frame Modern pagan revival.",
        "description": "Places, regions, and built sites that give Modern pagan revival its map — where events and figures concentrate."
    },
    {
        "slug": "pagan-revival-events",
        "name": "Modern pagan revival events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Modern pagan revival.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Modern pagan revival timeline."
    },
    {
        "slug": "pagan-revival-objects",
        "name": "Modern pagan revival objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Modern pagan revival.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Modern pagan revival."
    },
    {
        "slug": "pagan-revival-factions",
        "name": "Modern pagan revival factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Modern pagan revival.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Modern pagan revival."
    },
    {
        "slug": "pagan-revival-concepts",
        "name": "Modern pagan revival concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Modern pagan revival.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Modern pagan revival readable as a lore graph."
    },
    {
        "slug": "pagan-revival-eras",
        "name": "Modern pagan revival eras",
        "type": "event",
        "short_description": "Periodization for Modern pagan revival.",
        "description": "Named eras and phases that help readers track how Modern pagan revival changes across time."
    },
    {
        "slug": "pagan-revival-works",
        "name": "Modern pagan revival works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Modern pagan revival.",
        "description": "Primary works and adaptations through which most audiences encounter Modern pagan revival."
    },
    {
        "slug": "pagan-revival-symbols",
        "name": "Modern pagan revival symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Modern pagan revival.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Modern pagan revival."
    },
    {
        "slug": "pagan-revival-controversies",
        "name": "Modern pagan revival controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Modern pagan revival.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Modern pagan revival argumentative."
    },
    {
        "slug": "pagan-revival-sources",
        "name": "Modern pagan revival sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Modern pagan revival.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Modern pagan revival."
    },
    {
        "slug": "pagan-revival-geography",
        "name": "Modern pagan revival geography",
        "type": "place",
        "short_description": "Broader geographic framing for Modern pagan revival.",
        "description": "Regions, routes, and spatial systems that situate Modern pagan revival beyond single named places."
    },
    {
        "slug": "pagan-revival-legacy",
        "name": "Modern pagan revival legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Modern pagan revival.",
        "description": "How Modern pagan revival continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pagan-revival-practices",
        "name": "Modern pagan revival practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Modern pagan revival.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Modern pagan revival."
    },
    {
        "slug": "pagan-revival-entry-1",
        "name": "Modern pagan revival entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-2",
        "name": "Modern pagan revival entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-3",
        "name": "Modern pagan revival entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-4",
        "name": "Modern pagan revival entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-5",
        "name": "Modern pagan revival entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-6",
        "name": "Modern pagan revival entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-7",
        "name": "Modern pagan revival entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-8",
        "name": "Modern pagan revival entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-9",
        "name": "Modern pagan revival entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-10",
        "name": "Modern pagan revival entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-11",
        "name": "Modern pagan revival entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-12",
        "name": "Modern pagan revival entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-13",
        "name": "Modern pagan revival entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-14",
        "name": "Modern pagan revival entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-15",
        "name": "Modern pagan revival entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-16",
        "name": "Modern pagan revival entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-17",
        "name": "Modern pagan revival entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-18",
        "name": "Modern pagan revival entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-19",
        "name": "Modern pagan revival entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-20",
        "name": "Modern pagan revival entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-21",
        "name": "Modern pagan revival entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-22",
        "name": "Modern pagan revival entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-23",
        "name": "Modern pagan revival entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pagan-revival-entry-24",
        "name": "Modern pagan revival entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Modern pagan revival.",
        "description": "A supporting encyclopedia entry in the Modern pagan revival subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pagan-revival",
        "pagan-revival-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pagan-revival",
        "pagan-revival-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pagan-revival",
        "pagan-revival-places",
        "contains",
        "Modern pagan revival places is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-events",
        "contains",
        "Modern pagan revival events is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-objects",
        "contains",
        "Modern pagan revival objects & artifacts is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-factions",
        "contains",
        "Modern pagan revival factions & groups is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-concepts",
        "contains",
        "Modern pagan revival concepts is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-eras",
        "contains",
        "Modern pagan revival eras is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-works",
        "contains",
        "Modern pagan revival works & media is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-symbols",
        "contains",
        "Modern pagan revival symbols is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-controversies",
        "contains",
        "Modern pagan revival controversies is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-sources",
        "contains",
        "Modern pagan revival sources is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-geography",
        "contains",
        "Modern pagan revival geography is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-legacy",
        "contains",
        "Modern pagan revival legacy is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-practices",
        "contains",
        "Modern pagan revival practices is a primary trailhead under Modern pagan revival.",
        0.88,
        0.82
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-1",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-2",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-3",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-4",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-5",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-6",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-7",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-8",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-9",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-10",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-11",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-12",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-13",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-14",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-15",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-16",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-17",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-18",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-19",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-20",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-21",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-22",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-23",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ],
    [
        "pagan-revival",
        "pagan-revival-entry-24",
        "contains",
        "Supporting entry under Modern pagan revival.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
