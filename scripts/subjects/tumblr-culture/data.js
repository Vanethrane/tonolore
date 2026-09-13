/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tumblr-culture",
        "name": "Tumblr culture",
        "type": "topic",
        "short_description": "Reblogs, fandom tagging, and the microblogging ecosystem that shaped 2010s youth culture.",
        "description": "Reblogs, fandom tagging, and the microblogging ecosystem that shaped 2010s youth culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tumblr culture so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "tumblr-culture-figures",
        "name": "Tumblr culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tumblr culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tumblr culture."
    },
    {
        "slug": "tumblr-culture-world",
        "name": "Tumblr culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tumblr culture.",
        "description": "Geography, institutions, and periodization that give Tumblr culture its encyclopedia shape."
    },
    {
        "slug": "tumblr-culture-places",
        "name": "Tumblr culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tumblr culture.",
        "description": "Places, regions, and built sites that give Tumblr culture its map — where events and figures concentrate."
    },
    {
        "slug": "tumblr-culture-events",
        "name": "Tumblr culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tumblr culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tumblr culture timeline."
    },
    {
        "slug": "tumblr-culture-objects",
        "name": "Tumblr culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tumblr culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tumblr culture."
    },
    {
        "slug": "tumblr-culture-factions",
        "name": "Tumblr culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tumblr culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tumblr culture."
    },
    {
        "slug": "tumblr-culture-concepts",
        "name": "Tumblr culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tumblr culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tumblr culture readable as a lore graph."
    },
    {
        "slug": "tumblr-culture-eras",
        "name": "Tumblr culture eras",
        "type": "event",
        "short_description": "Periodization for Tumblr culture.",
        "description": "Named eras and phases that help readers track how Tumblr culture changes across time."
    },
    {
        "slug": "tumblr-culture-works",
        "name": "Tumblr culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tumblr culture.",
        "description": "Primary works and adaptations through which most audiences encounter Tumblr culture."
    },
    {
        "slug": "tumblr-culture-symbols",
        "name": "Tumblr culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tumblr culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tumblr culture."
    },
    {
        "slug": "tumblr-culture-controversies",
        "name": "Tumblr culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tumblr culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tumblr culture argumentative."
    },
    {
        "slug": "tumblr-culture-sources",
        "name": "Tumblr culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tumblr culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tumblr culture."
    },
    {
        "slug": "tumblr-culture-geography",
        "name": "Tumblr culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tumblr culture.",
        "description": "Regions, routes, and spatial systems that situate Tumblr culture beyond single named places."
    },
    {
        "slug": "tumblr-culture-legacy",
        "name": "Tumblr culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tumblr culture.",
        "description": "How Tumblr culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tumblr-culture-practices",
        "name": "Tumblr culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tumblr culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tumblr culture."
    },
    {
        "slug": "tumblr-culture-entry-1",
        "name": "Tumblr culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-2",
        "name": "Tumblr culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-3",
        "name": "Tumblr culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-4",
        "name": "Tumblr culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-5",
        "name": "Tumblr culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-6",
        "name": "Tumblr culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-7",
        "name": "Tumblr culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-8",
        "name": "Tumblr culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-9",
        "name": "Tumblr culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-10",
        "name": "Tumblr culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-11",
        "name": "Tumblr culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-12",
        "name": "Tumblr culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-13",
        "name": "Tumblr culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-14",
        "name": "Tumblr culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-15",
        "name": "Tumblr culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-16",
        "name": "Tumblr culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-17",
        "name": "Tumblr culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-18",
        "name": "Tumblr culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-19",
        "name": "Tumblr culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-20",
        "name": "Tumblr culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-21",
        "name": "Tumblr culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-22",
        "name": "Tumblr culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-23",
        "name": "Tumblr culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tumblr-culture-entry-24",
        "name": "Tumblr culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tumblr culture.",
        "description": "A supporting encyclopedia entry in the Tumblr culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tumblr-culture",
        "tumblr-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tumblr-culture",
        "tumblr-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tumblr-culture",
        "tumblr-culture-places",
        "contains",
        "Tumblr culture places is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-events",
        "contains",
        "Tumblr culture events is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-objects",
        "contains",
        "Tumblr culture objects & artifacts is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-factions",
        "contains",
        "Tumblr culture factions & groups is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-concepts",
        "contains",
        "Tumblr culture concepts is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-eras",
        "contains",
        "Tumblr culture eras is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-works",
        "contains",
        "Tumblr culture works & media is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-symbols",
        "contains",
        "Tumblr culture symbols is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-controversies",
        "contains",
        "Tumblr culture controversies is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-sources",
        "contains",
        "Tumblr culture sources is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-geography",
        "contains",
        "Tumblr culture geography is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-legacy",
        "contains",
        "Tumblr culture legacy is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-practices",
        "contains",
        "Tumblr culture practices is a primary trailhead under Tumblr culture.",
        0.88,
        0.82
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-1",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-2",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-3",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-4",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-5",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-6",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-7",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-8",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-9",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-10",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-11",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-12",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-13",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-14",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-15",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-16",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-17",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-18",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-19",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-20",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-21",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-22",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-23",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ],
    [
        "tumblr-culture",
        "tumblr-culture-entry-24",
        "contains",
        "Supporting entry under Tumblr culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
