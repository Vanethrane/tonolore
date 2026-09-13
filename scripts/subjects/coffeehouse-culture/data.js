/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "coffeehouse-culture",
        "name": "Coffeehouse culture",
        "type": "topic",
        "short_description": "Public spheres, espresso bars, and the social rooms built around the bean.",
        "description": "Public spheres, espresso bars, and the social rooms built around the bean. This Ton-o-Lore subject maps people, places, events, and ideas tied to Coffeehouse culture so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "coffeehouse-culture-figures",
        "name": "Coffeehouse culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Coffeehouse culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Coffeehouse culture."
    },
    {
        "slug": "coffeehouse-culture-world",
        "name": "Coffeehouse culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Coffeehouse culture.",
        "description": "Geography, institutions, and periodization that give Coffeehouse culture its encyclopedia shape."
    },
    {
        "slug": "coffeehouse-culture-places",
        "name": "Coffeehouse culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Coffeehouse culture.",
        "description": "Places, regions, and built sites that give Coffeehouse culture its map — where events and figures concentrate."
    },
    {
        "slug": "coffeehouse-culture-events",
        "name": "Coffeehouse culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Coffeehouse culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Coffeehouse culture timeline."
    },
    {
        "slug": "coffeehouse-culture-objects",
        "name": "Coffeehouse culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Coffeehouse culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Coffeehouse culture."
    },
    {
        "slug": "coffeehouse-culture-factions",
        "name": "Coffeehouse culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Coffeehouse culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Coffeehouse culture."
    },
    {
        "slug": "coffeehouse-culture-concepts",
        "name": "Coffeehouse culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Coffeehouse culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Coffeehouse culture readable as a lore graph."
    },
    {
        "slug": "coffeehouse-culture-eras",
        "name": "Coffeehouse culture eras",
        "type": "event",
        "short_description": "Periodization for Coffeehouse culture.",
        "description": "Named eras and phases that help readers track how Coffeehouse culture changes across time."
    },
    {
        "slug": "coffeehouse-culture-works",
        "name": "Coffeehouse culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Coffeehouse culture.",
        "description": "Primary works and adaptations through which most audiences encounter Coffeehouse culture."
    },
    {
        "slug": "coffeehouse-culture-symbols",
        "name": "Coffeehouse culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Coffeehouse culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Coffeehouse culture."
    },
    {
        "slug": "coffeehouse-culture-controversies",
        "name": "Coffeehouse culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Coffeehouse culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Coffeehouse culture argumentative."
    },
    {
        "slug": "coffeehouse-culture-sources",
        "name": "Coffeehouse culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Coffeehouse culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Coffeehouse culture."
    },
    {
        "slug": "coffeehouse-culture-geography",
        "name": "Coffeehouse culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Coffeehouse culture.",
        "description": "Regions, routes, and spatial systems that situate Coffeehouse culture beyond single named places."
    },
    {
        "slug": "coffeehouse-culture-legacy",
        "name": "Coffeehouse culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Coffeehouse culture.",
        "description": "How Coffeehouse culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "coffeehouse-culture-practices",
        "name": "Coffeehouse culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Coffeehouse culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Coffeehouse culture."
    },
    {
        "slug": "coffeehouse-culture-entry-1",
        "name": "Coffeehouse culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-2",
        "name": "Coffeehouse culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-3",
        "name": "Coffeehouse culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-4",
        "name": "Coffeehouse culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-5",
        "name": "Coffeehouse culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-6",
        "name": "Coffeehouse culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-7",
        "name": "Coffeehouse culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-8",
        "name": "Coffeehouse culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-9",
        "name": "Coffeehouse culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-10",
        "name": "Coffeehouse culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-11",
        "name": "Coffeehouse culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-12",
        "name": "Coffeehouse culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-13",
        "name": "Coffeehouse culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-14",
        "name": "Coffeehouse culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-15",
        "name": "Coffeehouse culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-16",
        "name": "Coffeehouse culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-17",
        "name": "Coffeehouse culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-18",
        "name": "Coffeehouse culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-19",
        "name": "Coffeehouse culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-20",
        "name": "Coffeehouse culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-21",
        "name": "Coffeehouse culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-22",
        "name": "Coffeehouse culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-23",
        "name": "Coffeehouse culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "coffeehouse-culture-entry-24",
        "name": "Coffeehouse culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Coffeehouse culture.",
        "description": "A supporting encyclopedia entry in the Coffeehouse culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "coffeehouse-culture",
        "coffeehouse-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-places",
        "contains",
        "Coffeehouse culture places is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-events",
        "contains",
        "Coffeehouse culture events is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-objects",
        "contains",
        "Coffeehouse culture objects & artifacts is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-factions",
        "contains",
        "Coffeehouse culture factions & groups is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-concepts",
        "contains",
        "Coffeehouse culture concepts is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-eras",
        "contains",
        "Coffeehouse culture eras is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-works",
        "contains",
        "Coffeehouse culture works & media is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-symbols",
        "contains",
        "Coffeehouse culture symbols is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-controversies",
        "contains",
        "Coffeehouse culture controversies is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-sources",
        "contains",
        "Coffeehouse culture sources is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-geography",
        "contains",
        "Coffeehouse culture geography is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-legacy",
        "contains",
        "Coffeehouse culture legacy is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-practices",
        "contains",
        "Coffeehouse culture practices is a primary trailhead under Coffeehouse culture.",
        0.88,
        0.82
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-1",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-2",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-3",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-4",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-5",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-6",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-7",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-8",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-9",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-10",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-11",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-12",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-13",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-14",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-15",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-16",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-17",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-18",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-19",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-20",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-21",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-22",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-23",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ],
    [
        "coffeehouse-culture",
        "coffeehouse-culture-entry-24",
        "contains",
        "Supporting entry under Coffeehouse culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
