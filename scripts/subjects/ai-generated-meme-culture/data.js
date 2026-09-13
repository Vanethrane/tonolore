/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ai-generated-meme-culture",
        "name": "AI-generated meme culture",
        "type": "topic",
        "short_description": "Prompt jokes, deepfake satire, and the 2020s meme layer built on generative models.",
        "description": "Prompt jokes, deepfake satire, and the 2020s meme layer built on generative models. This Ton-o-Lore subject maps people, places, events, and ideas tied to AI-generated meme culture so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "ai-generated-meme-culture-figures",
        "name": "AI-generated meme culture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to AI-generated meme culture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring AI-generated meme culture."
    },
    {
        "slug": "ai-generated-meme-culture-world",
        "name": "AI-generated meme culture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame AI-generated meme culture.",
        "description": "Geography, institutions, and periodization that give AI-generated meme culture its encyclopedia shape."
    },
    {
        "slug": "ai-generated-meme-culture-places",
        "name": "AI-generated meme culture places",
        "type": "place",
        "short_description": "Locations and geographies that frame AI-generated meme culture.",
        "description": "Places, regions, and built sites that give AI-generated meme culture its map — where events and figures concentrate."
    },
    {
        "slug": "ai-generated-meme-culture-events",
        "name": "AI-generated meme culture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in AI-generated meme culture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the AI-generated meme culture timeline."
    },
    {
        "slug": "ai-generated-meme-culture-objects",
        "name": "AI-generated meme culture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to AI-generated meme culture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through AI-generated meme culture."
    },
    {
        "slug": "ai-generated-meme-culture-factions",
        "name": "AI-generated meme culture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside AI-generated meme culture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in AI-generated meme culture."
    },
    {
        "slug": "ai-generated-meme-culture-concepts",
        "name": "AI-generated meme culture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize AI-generated meme culture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make AI-generated meme culture readable as a lore graph."
    },
    {
        "slug": "ai-generated-meme-culture-eras",
        "name": "AI-generated meme culture eras",
        "type": "event",
        "short_description": "Periodization for AI-generated meme culture.",
        "description": "Named eras and phases that help readers track how AI-generated meme culture changes across time."
    },
    {
        "slug": "ai-generated-meme-culture-works",
        "name": "AI-generated meme culture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry AI-generated meme culture.",
        "description": "Primary works and adaptations through which most audiences encounter AI-generated meme culture."
    },
    {
        "slug": "ai-generated-meme-culture-symbols",
        "name": "AI-generated meme culture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with AI-generated meme culture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside AI-generated meme culture."
    },
    {
        "slug": "ai-generated-meme-culture-controversies",
        "name": "AI-generated meme culture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in AI-generated meme culture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep AI-generated meme culture argumentative."
    },
    {
        "slug": "ai-generated-meme-culture-sources",
        "name": "AI-generated meme culture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into AI-generated meme culture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify AI-generated meme culture."
    },
    {
        "slug": "ai-generated-meme-culture-geography",
        "name": "AI-generated meme culture geography",
        "type": "place",
        "short_description": "Broader geographic framing for AI-generated meme culture.",
        "description": "Regions, routes, and spatial systems that situate AI-generated meme culture beyond single named places."
    },
    {
        "slug": "ai-generated-meme-culture-legacy",
        "name": "AI-generated meme culture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of AI-generated meme culture.",
        "description": "How AI-generated meme culture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ai-generated-meme-culture-practices",
        "name": "AI-generated meme culture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in AI-generated meme culture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in AI-generated meme culture."
    },
    {
        "slug": "ai-generated-meme-culture-entry-1",
        "name": "AI-generated meme culture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-2",
        "name": "AI-generated meme culture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-3",
        "name": "AI-generated meme culture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-4",
        "name": "AI-generated meme culture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-5",
        "name": "AI-generated meme culture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-6",
        "name": "AI-generated meme culture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-7",
        "name": "AI-generated meme culture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-8",
        "name": "AI-generated meme culture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-9",
        "name": "AI-generated meme culture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-10",
        "name": "AI-generated meme culture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-11",
        "name": "AI-generated meme culture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-12",
        "name": "AI-generated meme culture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-13",
        "name": "AI-generated meme culture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-14",
        "name": "AI-generated meme culture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-15",
        "name": "AI-generated meme culture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-16",
        "name": "AI-generated meme culture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-17",
        "name": "AI-generated meme culture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-18",
        "name": "AI-generated meme culture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-19",
        "name": "AI-generated meme culture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-20",
        "name": "AI-generated meme culture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-21",
        "name": "AI-generated meme culture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-22",
        "name": "AI-generated meme culture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-23",
        "name": "AI-generated meme culture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ai-generated-meme-culture-entry-24",
        "name": "AI-generated meme culture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside AI-generated meme culture.",
        "description": "A supporting encyclopedia entry in the AI-generated meme culture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-places",
        "contains",
        "AI-generated meme culture places is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-events",
        "contains",
        "AI-generated meme culture events is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-objects",
        "contains",
        "AI-generated meme culture objects & artifacts is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-factions",
        "contains",
        "AI-generated meme culture factions & groups is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-concepts",
        "contains",
        "AI-generated meme culture concepts is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-eras",
        "contains",
        "AI-generated meme culture eras is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-works",
        "contains",
        "AI-generated meme culture works & media is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-symbols",
        "contains",
        "AI-generated meme culture symbols is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-controversies",
        "contains",
        "AI-generated meme culture controversies is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-sources",
        "contains",
        "AI-generated meme culture sources is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-geography",
        "contains",
        "AI-generated meme culture geography is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-legacy",
        "contains",
        "AI-generated meme culture legacy is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-practices",
        "contains",
        "AI-generated meme culture practices is a primary trailhead under AI-generated meme culture.",
        0.88,
        0.82
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-1",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-2",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-3",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-4",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-5",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-6",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-7",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-8",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-9",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-10",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-11",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-12",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-13",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-14",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-15",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-16",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-17",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-18",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-19",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-20",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-21",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-22",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-23",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ],
    [
        "ai-generated-meme-culture",
        "ai-generated-meme-culture-entry-24",
        "contains",
        "Supporting entry under AI-generated meme culture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
