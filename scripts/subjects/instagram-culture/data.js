/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "instagram-culture",
        "name": "Instagram culture",
        "type": "topic",
        "short_description": "Filters, influencers, Stories, and the visual feed that redefined social performance.",
        "description": "Filters, influencers, Stories, and the visual feed that redefined social performance. This Ton-o-Lore subject maps people, places, events, and ideas tied to Instagram culture so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "instagram-culture-figures",
        "name": "Instagram culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Instagram culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Instagram culture."
    },
    {
        "slug": "instagram-culture-world",
        "name": "Instagram culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Instagram culture.",
        "description": "Geography, institutions, and periodization that give Instagram culture its encyclopedia shape."
    },
    {
        "slug": "instagram-culture-places",
        "name": "Instagram culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Instagram culture.",
        "description": "Places, regions, and built sites that give Instagram culture its map — where events and figures concentrate."
    },
    {
        "slug": "instagram-culture-events",
        "name": "Instagram culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Instagram culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Instagram culture timeline."
    },
    {
        "slug": "instagram-culture-objects",
        "name": "Instagram culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Instagram culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Instagram culture."
    },
    {
        "slug": "instagram-culture-factions",
        "name": "Instagram culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Instagram culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Instagram culture."
    },
    {
        "slug": "instagram-culture-concepts",
        "name": "Instagram culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Instagram culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Instagram culture readable as a lore graph."
    },
    {
        "slug": "instagram-culture-eras",
        "name": "Instagram culture eras",
        "type": "event",
        "short_description": "Periodization for Instagram culture.",
        "description": "Named eras and phases that help readers track how Instagram culture changes across time."
    },
    {
        "slug": "instagram-culture-works",
        "name": "Instagram culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Instagram culture.",
        "description": "Primary works and adaptations through which most audiences encounter Instagram culture."
    },
    {
        "slug": "instagram-culture-symbols",
        "name": "Instagram culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Instagram culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Instagram culture."
    },
    {
        "slug": "instagram-culture-controversies",
        "name": "Instagram culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Instagram culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Instagram culture argumentative."
    },
    {
        "slug": "instagram-culture-sources",
        "name": "Instagram culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Instagram culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Instagram culture."
    },
    {
        "slug": "instagram-culture-geography",
        "name": "Instagram culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Instagram culture.",
        "description": "Regions, routes, and spatial systems that situate Instagram culture beyond single named places."
    },
    {
        "slug": "instagram-culture-legacy",
        "name": "Instagram culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Instagram culture.",
        "description": "How Instagram culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "instagram-culture-practices",
        "name": "Instagram culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Instagram culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Instagram culture."
    },
    {
        "slug": "instagram-culture-entry-1",
        "name": "Instagram culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-2",
        "name": "Instagram culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-3",
        "name": "Instagram culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-4",
        "name": "Instagram culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-5",
        "name": "Instagram culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-6",
        "name": "Instagram culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-7",
        "name": "Instagram culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-8",
        "name": "Instagram culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-9",
        "name": "Instagram culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-10",
        "name": "Instagram culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-11",
        "name": "Instagram culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-12",
        "name": "Instagram culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-13",
        "name": "Instagram culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-14",
        "name": "Instagram culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-15",
        "name": "Instagram culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-16",
        "name": "Instagram culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-17",
        "name": "Instagram culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-18",
        "name": "Instagram culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-19",
        "name": "Instagram culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-20",
        "name": "Instagram culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-21",
        "name": "Instagram culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-22",
        "name": "Instagram culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-23",
        "name": "Instagram culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "instagram-culture-entry-24",
        "name": "Instagram culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Instagram culture.",
        "description": "A supporting encyclopedia entry in the Instagram culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "instagram-culture",
        "instagram-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "instagram-culture",
        "instagram-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "instagram-culture",
        "instagram-culture-places",
        "contains",
        "Instagram culture places is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-events",
        "contains",
        "Instagram culture events is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-objects",
        "contains",
        "Instagram culture objects & artifacts is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-factions",
        "contains",
        "Instagram culture factions & groups is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-concepts",
        "contains",
        "Instagram culture concepts is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-eras",
        "contains",
        "Instagram culture eras is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-works",
        "contains",
        "Instagram culture works & media is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-symbols",
        "contains",
        "Instagram culture symbols is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-controversies",
        "contains",
        "Instagram culture controversies is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-sources",
        "contains",
        "Instagram culture sources is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-geography",
        "contains",
        "Instagram culture geography is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-legacy",
        "contains",
        "Instagram culture legacy is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-practices",
        "contains",
        "Instagram culture practices is a primary trailhead under Instagram culture.",
        0.88,
        0.82
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-1",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-2",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-3",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-4",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-5",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-6",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-7",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-8",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-9",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-10",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-11",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-12",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-13",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-14",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-15",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-16",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-17",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-18",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-19",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-20",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-21",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-22",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-23",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ],
    [
        "instagram-culture",
        "instagram-culture-entry-24",
        "contains",
        "Supporting entry under Instagram culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
