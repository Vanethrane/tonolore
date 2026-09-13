/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "american-horror-story",
        "name": "American Horror Story",
        "type": "topic",
        "short_description": "Anthology seasons, recurring casts, and the Ryan Murphy horror carnival of American dread.",
        "description": "Anthology seasons, recurring casts, and the Ryan Murphy horror carnival of American dread. This Ton-o-Lore subject maps people, places, events, and ideas tied to American Horror Story so readers can follow long-tail connections across horror."
    },
    {
        "slug": "american-horror-story-figures",
        "name": "American Horror Story figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to American Horror Story.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring American Horror Story."
    },
    {
        "slug": "american-horror-story-world",
        "name": "American Horror Story world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame American Horror Story.",
        "description": "Geography, institutions, and periodization that give American Horror Story its encyclopedia shape."
    },
    {
        "slug": "american-horror-story-places",
        "name": "American Horror Story places",
        "type": "place",
        "short_description": "Locations and geographies that frame American Horror Story.",
        "description": "Places, regions, and built sites that give American Horror Story its map — where events and figures concentrate."
    },
    {
        "slug": "american-horror-story-events",
        "name": "American Horror Story events",
        "type": "event",
        "short_description": "Turning points and dated episodes in American Horror Story.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the American Horror Story timeline."
    },
    {
        "slug": "american-horror-story-objects",
        "name": "American Horror Story objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to American Horror Story.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through American Horror Story."
    },
    {
        "slug": "american-horror-story-factions",
        "name": "American Horror Story factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside American Horror Story.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in American Horror Story."
    },
    {
        "slug": "american-horror-story-concepts",
        "name": "American Horror Story concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize American Horror Story.",
        "description": "Keywords, doctrines, systems, and abstract forces that make American Horror Story readable as a lore graph."
    },
    {
        "slug": "american-horror-story-eras",
        "name": "American Horror Story eras",
        "type": "event",
        "short_description": "Periodization for American Horror Story.",
        "description": "Named eras and phases that help readers track how American Horror Story changes across time."
    },
    {
        "slug": "american-horror-story-works",
        "name": "American Horror Story works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry American Horror Story.",
        "description": "Primary works and adaptations through which most audiences encounter American Horror Story."
    },
    {
        "slug": "american-horror-story-symbols",
        "name": "American Horror Story symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with American Horror Story.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside American Horror Story."
    },
    {
        "slug": "american-horror-story-controversies",
        "name": "American Horror Story controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in American Horror Story.",
        "description": "Debates, rival canons, scandals, and contested facts that keep American Horror Story argumentative."
    },
    {
        "slug": "american-horror-story-sources",
        "name": "American Horror Story sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into American Horror Story.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify American Horror Story."
    },
    {
        "slug": "american-horror-story-geography",
        "name": "American Horror Story geography",
        "type": "place",
        "short_description": "Broader geographic framing for American Horror Story.",
        "description": "Regions, routes, and spatial systems that situate American Horror Story beyond single named places."
    },
    {
        "slug": "american-horror-story-legacy",
        "name": "American Horror Story legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of American Horror Story.",
        "description": "How American Horror Story continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "american-horror-story-practices",
        "name": "American Horror Story practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in American Horror Story.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in American Horror Story."
    },
    {
        "slug": "american-horror-story-entry-1",
        "name": "American Horror Story entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-2",
        "name": "American Horror Story entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-3",
        "name": "American Horror Story entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-4",
        "name": "American Horror Story entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-5",
        "name": "American Horror Story entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-6",
        "name": "American Horror Story entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-7",
        "name": "American Horror Story entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-8",
        "name": "American Horror Story entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-9",
        "name": "American Horror Story entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-10",
        "name": "American Horror Story entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-11",
        "name": "American Horror Story entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-12",
        "name": "American Horror Story entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-13",
        "name": "American Horror Story entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-14",
        "name": "American Horror Story entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-15",
        "name": "American Horror Story entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-16",
        "name": "American Horror Story entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-17",
        "name": "American Horror Story entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-18",
        "name": "American Horror Story entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-19",
        "name": "American Horror Story entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-20",
        "name": "American Horror Story entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-21",
        "name": "American Horror Story entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-22",
        "name": "American Horror Story entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-23",
        "name": "American Horror Story entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-horror-story-entry-24",
        "name": "American Horror Story entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Horror Story.",
        "description": "A supporting encyclopedia entry in the American Horror Story subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "american-horror-story",
        "american-horror-story-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "american-horror-story",
        "american-horror-story-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "american-horror-story",
        "american-horror-story-places",
        "contains",
        "American Horror Story places is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-events",
        "contains",
        "American Horror Story events is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-objects",
        "contains",
        "American Horror Story objects & artifacts is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-factions",
        "contains",
        "American Horror Story factions & groups is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-concepts",
        "contains",
        "American Horror Story concepts is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-eras",
        "contains",
        "American Horror Story eras is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-works",
        "contains",
        "American Horror Story works & media is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-symbols",
        "contains",
        "American Horror Story symbols is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-controversies",
        "contains",
        "American Horror Story controversies is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-sources",
        "contains",
        "American Horror Story sources is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-geography",
        "contains",
        "American Horror Story geography is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-legacy",
        "contains",
        "American Horror Story legacy is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-practices",
        "contains",
        "American Horror Story practices is a primary trailhead under American Horror Story.",
        0.88,
        0.82
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-1",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-2",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-3",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-4",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-5",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-6",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-7",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-8",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-9",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-10",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-11",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-12",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-13",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-14",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-15",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-16",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-17",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-18",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-19",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-20",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-21",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-22",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-23",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ],
    [
        "american-horror-story",
        "american-horror-story-entry-24",
        "contains",
        "Supporting entry under American Horror Story.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
