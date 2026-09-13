/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "narnia",
        "name": "The Chronicles of Narnia",
        "type": "topic",
        "short_description": "Wardrobe portals, Aslan, and the children’s Christian fantasy that never left school libraries.",
        "description": "Wardrobe portals, Aslan, and the children’s Christian fantasy that never left school libraries. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Chronicles of Narnia so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "narnia-figures",
        "name": "The Chronicles of Narnia figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Chronicles of Narnia.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Chronicles of Narnia."
    },
    {
        "slug": "narnia-world",
        "name": "The Chronicles of Narnia world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Chronicles of Narnia.",
        "description": "Geography, institutions, and periodization that give The Chronicles of Narnia its encyclopedia shape."
    },
    {
        "slug": "narnia-places",
        "name": "The Chronicles of Narnia places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Chronicles of Narnia.",
        "description": "Places, regions, and built sites that give The Chronicles of Narnia its map — where events and figures concentrate."
    },
    {
        "slug": "narnia-events",
        "name": "The Chronicles of Narnia events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Chronicles of Narnia.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Chronicles of Narnia timeline."
    },
    {
        "slug": "narnia-objects",
        "name": "The Chronicles of Narnia objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Chronicles of Narnia.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Chronicles of Narnia."
    },
    {
        "slug": "narnia-factions",
        "name": "The Chronicles of Narnia factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Chronicles of Narnia.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Chronicles of Narnia."
    },
    {
        "slug": "narnia-concepts",
        "name": "The Chronicles of Narnia concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Chronicles of Narnia.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Chronicles of Narnia readable as a lore graph."
    },
    {
        "slug": "narnia-eras",
        "name": "The Chronicles of Narnia eras",
        "type": "event",
        "short_description": "Periodization for The Chronicles of Narnia.",
        "description": "Named eras and phases that help readers track how The Chronicles of Narnia changes across time."
    },
    {
        "slug": "narnia-works",
        "name": "The Chronicles of Narnia works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Chronicles of Narnia.",
        "description": "Primary works and adaptations through which most audiences encounter The Chronicles of Narnia."
    },
    {
        "slug": "narnia-symbols",
        "name": "The Chronicles of Narnia symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Chronicles of Narnia.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Chronicles of Narnia."
    },
    {
        "slug": "narnia-controversies",
        "name": "The Chronicles of Narnia controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Chronicles of Narnia.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Chronicles of Narnia argumentative."
    },
    {
        "slug": "narnia-sources",
        "name": "The Chronicles of Narnia sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Chronicles of Narnia.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Chronicles of Narnia."
    },
    {
        "slug": "narnia-geography",
        "name": "The Chronicles of Narnia geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Chronicles of Narnia.",
        "description": "Regions, routes, and spatial systems that situate The Chronicles of Narnia beyond single named places."
    },
    {
        "slug": "narnia-legacy",
        "name": "The Chronicles of Narnia legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Chronicles of Narnia.",
        "description": "How The Chronicles of Narnia continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "narnia-practices",
        "name": "The Chronicles of Narnia practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Chronicles of Narnia.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Chronicles of Narnia."
    },
    {
        "slug": "narnia-entry-1",
        "name": "The Chronicles of Narnia entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-2",
        "name": "The Chronicles of Narnia entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-3",
        "name": "The Chronicles of Narnia entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-4",
        "name": "The Chronicles of Narnia entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-5",
        "name": "The Chronicles of Narnia entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-6",
        "name": "The Chronicles of Narnia entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-7",
        "name": "The Chronicles of Narnia entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-8",
        "name": "The Chronicles of Narnia entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-9",
        "name": "The Chronicles of Narnia entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-10",
        "name": "The Chronicles of Narnia entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-11",
        "name": "The Chronicles of Narnia entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-12",
        "name": "The Chronicles of Narnia entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-13",
        "name": "The Chronicles of Narnia entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-14",
        "name": "The Chronicles of Narnia entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-15",
        "name": "The Chronicles of Narnia entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-16",
        "name": "The Chronicles of Narnia entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-17",
        "name": "The Chronicles of Narnia entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-18",
        "name": "The Chronicles of Narnia entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-19",
        "name": "The Chronicles of Narnia entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-20",
        "name": "The Chronicles of Narnia entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-21",
        "name": "The Chronicles of Narnia entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-22",
        "name": "The Chronicles of Narnia entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-23",
        "name": "The Chronicles of Narnia entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "narnia-entry-24",
        "name": "The Chronicles of Narnia entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Chronicles of Narnia.",
        "description": "A supporting encyclopedia entry in the The Chronicles of Narnia subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "narnia",
        "narnia-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "narnia",
        "narnia-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "narnia",
        "narnia-places",
        "contains",
        "The Chronicles of Narnia places is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-events",
        "contains",
        "The Chronicles of Narnia events is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-objects",
        "contains",
        "The Chronicles of Narnia objects & artifacts is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-factions",
        "contains",
        "The Chronicles of Narnia factions & groups is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-concepts",
        "contains",
        "The Chronicles of Narnia concepts is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-eras",
        "contains",
        "The Chronicles of Narnia eras is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-works",
        "contains",
        "The Chronicles of Narnia works & media is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-symbols",
        "contains",
        "The Chronicles of Narnia symbols is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-controversies",
        "contains",
        "The Chronicles of Narnia controversies is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-sources",
        "contains",
        "The Chronicles of Narnia sources is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-geography",
        "contains",
        "The Chronicles of Narnia geography is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-legacy",
        "contains",
        "The Chronicles of Narnia legacy is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-practices",
        "contains",
        "The Chronicles of Narnia practices is a primary trailhead under The Chronicles of Narnia.",
        0.88,
        0.82
    ],
    [
        "narnia",
        "narnia-entry-1",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-2",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-3",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-4",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-5",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-6",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-7",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-8",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-9",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-10",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-11",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-12",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-13",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-14",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-15",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-16",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-17",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-18",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-19",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-20",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-21",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-22",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-23",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ],
    [
        "narnia",
        "narnia-entry-24",
        "contains",
        "Supporting entry under The Chronicles of Narnia.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
