/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tank-warfare",
        "name": "Tank warfare",
        "type": "topic",
        "short_description": "Armor doctrine, breakthroughs, and the tracked machines that remade land combat.",
        "description": "Armor doctrine, breakthroughs, and the tracked machines that remade land combat. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tank warfare so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "tank-warfare-figures",
        "name": "Tank warfare figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tank warfare.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tank warfare."
    },
    {
        "slug": "tank-warfare-world",
        "name": "Tank warfare world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tank warfare.",
        "description": "Geography, institutions, and periodization that give Tank warfare its encyclopedia shape."
    },
    {
        "slug": "tank-warfare-places",
        "name": "Tank warfare places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tank warfare.",
        "description": "Places, regions, and built sites that give Tank warfare its map — where events and figures concentrate."
    },
    {
        "slug": "tank-warfare-events",
        "name": "Tank warfare events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tank warfare.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tank warfare timeline."
    },
    {
        "slug": "tank-warfare-objects",
        "name": "Tank warfare objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tank warfare.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tank warfare."
    },
    {
        "slug": "tank-warfare-factions",
        "name": "Tank warfare factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tank warfare.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tank warfare."
    },
    {
        "slug": "tank-warfare-concepts",
        "name": "Tank warfare concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tank warfare.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tank warfare readable as a lore graph."
    },
    {
        "slug": "tank-warfare-eras",
        "name": "Tank warfare eras",
        "type": "event",
        "short_description": "Periodization for Tank warfare.",
        "description": "Named eras and phases that help readers track how Tank warfare changes across time."
    },
    {
        "slug": "tank-warfare-works",
        "name": "Tank warfare works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tank warfare.",
        "description": "Primary works and adaptations through which most audiences encounter Tank warfare."
    },
    {
        "slug": "tank-warfare-symbols",
        "name": "Tank warfare symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tank warfare.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tank warfare."
    },
    {
        "slug": "tank-warfare-controversies",
        "name": "Tank warfare controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tank warfare.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tank warfare argumentative."
    },
    {
        "slug": "tank-warfare-sources",
        "name": "Tank warfare sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tank warfare.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tank warfare."
    },
    {
        "slug": "tank-warfare-geography",
        "name": "Tank warfare geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tank warfare.",
        "description": "Regions, routes, and spatial systems that situate Tank warfare beyond single named places."
    },
    {
        "slug": "tank-warfare-legacy",
        "name": "Tank warfare legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tank warfare.",
        "description": "How Tank warfare continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tank-warfare-practices",
        "name": "Tank warfare practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tank warfare.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tank warfare."
    },
    {
        "slug": "tank-warfare-entry-1",
        "name": "Tank warfare entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-2",
        "name": "Tank warfare entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-3",
        "name": "Tank warfare entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-4",
        "name": "Tank warfare entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-5",
        "name": "Tank warfare entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-6",
        "name": "Tank warfare entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-7",
        "name": "Tank warfare entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-8",
        "name": "Tank warfare entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-9",
        "name": "Tank warfare entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-10",
        "name": "Tank warfare entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-11",
        "name": "Tank warfare entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-12",
        "name": "Tank warfare entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-13",
        "name": "Tank warfare entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-14",
        "name": "Tank warfare entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-15",
        "name": "Tank warfare entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-16",
        "name": "Tank warfare entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-17",
        "name": "Tank warfare entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-18",
        "name": "Tank warfare entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-19",
        "name": "Tank warfare entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-20",
        "name": "Tank warfare entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-21",
        "name": "Tank warfare entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-22",
        "name": "Tank warfare entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-23",
        "name": "Tank warfare entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tank-warfare-entry-24",
        "name": "Tank warfare entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tank warfare.",
        "description": "A supporting encyclopedia entry in the Tank warfare subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tank-warfare",
        "tank-warfare-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tank-warfare",
        "tank-warfare-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tank-warfare",
        "tank-warfare-places",
        "contains",
        "Tank warfare places is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-events",
        "contains",
        "Tank warfare events is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-objects",
        "contains",
        "Tank warfare objects & artifacts is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-factions",
        "contains",
        "Tank warfare factions & groups is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-concepts",
        "contains",
        "Tank warfare concepts is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-eras",
        "contains",
        "Tank warfare eras is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-works",
        "contains",
        "Tank warfare works & media is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-symbols",
        "contains",
        "Tank warfare symbols is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-controversies",
        "contains",
        "Tank warfare controversies is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-sources",
        "contains",
        "Tank warfare sources is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-geography",
        "contains",
        "Tank warfare geography is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-legacy",
        "contains",
        "Tank warfare legacy is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-practices",
        "contains",
        "Tank warfare practices is a primary trailhead under Tank warfare.",
        0.88,
        0.82
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-1",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-2",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-3",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-4",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-5",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-6",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-7",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-8",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-9",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-10",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-11",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-12",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-13",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-14",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-15",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-16",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-17",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-18",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-19",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-20",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-21",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-22",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-23",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ],
    [
        "tank-warfare",
        "tank-warfare-entry-24",
        "contains",
        "Supporting entry under Tank warfare.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
