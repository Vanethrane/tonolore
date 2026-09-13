/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cabin-in-the-woods-lore",
        "name": "The Cabin in the Woods",
        "type": "topic",
        "short_description": "Ritual facilities, genre gods, and the meta-horror machine behind the cabin trope.",
        "description": "Ritual facilities, genre gods, and the meta-horror machine behind the cabin trope. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Cabin in the Woods so readers can follow long-tail connections across horror."
    },
    {
        "slug": "cabin-in-the-woods-lore-figures",
        "name": "The Cabin in the Woods figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Cabin in the Woods.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Cabin in the Woods."
    },
    {
        "slug": "cabin-in-the-woods-lore-world",
        "name": "The Cabin in the Woods world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Cabin in the Woods.",
        "description": "Geography, institutions, and periodization that give The Cabin in the Woods its encyclopedia shape."
    },
    {
        "slug": "cabin-in-the-woods-lore-places",
        "name": "The Cabin in the Woods places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Cabin in the Woods.",
        "description": "Places, regions, and built sites that give The Cabin in the Woods its map — where events and figures concentrate."
    },
    {
        "slug": "cabin-in-the-woods-lore-events",
        "name": "The Cabin in the Woods events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Cabin in the Woods.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Cabin in the Woods timeline."
    },
    {
        "slug": "cabin-in-the-woods-lore-objects",
        "name": "The Cabin in the Woods objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Cabin in the Woods.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Cabin in the Woods."
    },
    {
        "slug": "cabin-in-the-woods-lore-factions",
        "name": "The Cabin in the Woods factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Cabin in the Woods.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Cabin in the Woods."
    },
    {
        "slug": "cabin-in-the-woods-lore-concepts",
        "name": "The Cabin in the Woods concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Cabin in the Woods.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Cabin in the Woods readable as a lore graph."
    },
    {
        "slug": "cabin-in-the-woods-lore-eras",
        "name": "The Cabin in the Woods eras",
        "type": "event",
        "short_description": "Periodization for The Cabin in the Woods.",
        "description": "Named eras and phases that help readers track how The Cabin in the Woods changes across time."
    },
    {
        "slug": "cabin-in-the-woods-lore-works",
        "name": "The Cabin in the Woods works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Cabin in the Woods.",
        "description": "Primary works and adaptations through which most audiences encounter The Cabin in the Woods."
    },
    {
        "slug": "cabin-in-the-woods-lore-symbols",
        "name": "The Cabin in the Woods symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Cabin in the Woods.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Cabin in the Woods."
    },
    {
        "slug": "cabin-in-the-woods-lore-controversies",
        "name": "The Cabin in the Woods controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Cabin in the Woods.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Cabin in the Woods argumentative."
    },
    {
        "slug": "cabin-in-the-woods-lore-sources",
        "name": "The Cabin in the Woods sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Cabin in the Woods.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Cabin in the Woods."
    },
    {
        "slug": "cabin-in-the-woods-lore-geography",
        "name": "The Cabin in the Woods geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Cabin in the Woods.",
        "description": "Regions, routes, and spatial systems that situate The Cabin in the Woods beyond single named places."
    },
    {
        "slug": "cabin-in-the-woods-lore-legacy",
        "name": "The Cabin in the Woods legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Cabin in the Woods.",
        "description": "How The Cabin in the Woods continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cabin-in-the-woods-lore-practices",
        "name": "The Cabin in the Woods practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Cabin in the Woods.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Cabin in the Woods."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-1",
        "name": "The Cabin in the Woods entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-2",
        "name": "The Cabin in the Woods entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-3",
        "name": "The Cabin in the Woods entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-4",
        "name": "The Cabin in the Woods entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-5",
        "name": "The Cabin in the Woods entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-6",
        "name": "The Cabin in the Woods entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-7",
        "name": "The Cabin in the Woods entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-8",
        "name": "The Cabin in the Woods entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-9",
        "name": "The Cabin in the Woods entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-10",
        "name": "The Cabin in the Woods entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-11",
        "name": "The Cabin in the Woods entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-12",
        "name": "The Cabin in the Woods entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-13",
        "name": "The Cabin in the Woods entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-14",
        "name": "The Cabin in the Woods entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-15",
        "name": "The Cabin in the Woods entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-16",
        "name": "The Cabin in the Woods entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-17",
        "name": "The Cabin in the Woods entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-18",
        "name": "The Cabin in the Woods entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-19",
        "name": "The Cabin in the Woods entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-20",
        "name": "The Cabin in the Woods entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-21",
        "name": "The Cabin in the Woods entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-22",
        "name": "The Cabin in the Woods entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-23",
        "name": "The Cabin in the Woods entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cabin-in-the-woods-lore-entry-24",
        "name": "The Cabin in the Woods entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Cabin in the Woods.",
        "description": "A supporting encyclopedia entry in the The Cabin in the Woods subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-places",
        "contains",
        "The Cabin in the Woods places is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-events",
        "contains",
        "The Cabin in the Woods events is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-objects",
        "contains",
        "The Cabin in the Woods objects & artifacts is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-factions",
        "contains",
        "The Cabin in the Woods factions & groups is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-concepts",
        "contains",
        "The Cabin in the Woods concepts is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-eras",
        "contains",
        "The Cabin in the Woods eras is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-works",
        "contains",
        "The Cabin in the Woods works & media is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-symbols",
        "contains",
        "The Cabin in the Woods symbols is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-controversies",
        "contains",
        "The Cabin in the Woods controversies is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-sources",
        "contains",
        "The Cabin in the Woods sources is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-geography",
        "contains",
        "The Cabin in the Woods geography is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-legacy",
        "contains",
        "The Cabin in the Woods legacy is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-practices",
        "contains",
        "The Cabin in the Woods practices is a primary trailhead under The Cabin in the Woods.",
        0.88,
        0.82
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-1",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-2",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-3",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-4",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-5",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-6",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-7",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-8",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-9",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-10",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-11",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-12",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-13",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-14",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-15",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-16",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-17",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-18",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-19",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-20",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-21",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-22",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-23",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ],
    [
        "cabin-in-the-woods-lore",
        "cabin-in-the-woods-lore-entry-24",
        "contains",
        "Supporting entry under The Cabin in the Woods.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
