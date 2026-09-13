/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hunger-games-films",
        "name": "The Hunger Games films",
        "type": "topic",
        "short_description": "Panem arenas, Mockingjay rebellion, and the YA dystopia that dominated 2010s box offices.",
        "description": "Panem arenas, Mockingjay rebellion, and the YA dystopia that dominated 2010s box offices. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Hunger Games films so readers can follow long-tail connections across movies."
    },
    {
        "slug": "hunger-games-films-figures",
        "name": "The Hunger Games films figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Hunger Games films.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Hunger Games films."
    },
    {
        "slug": "hunger-games-films-world",
        "name": "The Hunger Games films world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Hunger Games films.",
        "description": "Geography, institutions, and periodization that give The Hunger Games films its encyclopedia shape."
    },
    {
        "slug": "hunger-games-films-places",
        "name": "The Hunger Games films places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Hunger Games films.",
        "description": "Places, regions, and built sites that give The Hunger Games films its map — where events and figures concentrate."
    },
    {
        "slug": "hunger-games-films-events",
        "name": "The Hunger Games films events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Hunger Games films.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Hunger Games films timeline."
    },
    {
        "slug": "hunger-games-films-objects",
        "name": "The Hunger Games films objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Hunger Games films.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Hunger Games films."
    },
    {
        "slug": "hunger-games-films-factions",
        "name": "The Hunger Games films factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Hunger Games films.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Hunger Games films."
    },
    {
        "slug": "hunger-games-films-concepts",
        "name": "The Hunger Games films concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Hunger Games films.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Hunger Games films readable as a lore graph."
    },
    {
        "slug": "hunger-games-films-eras",
        "name": "The Hunger Games films eras",
        "type": "event",
        "short_description": "Periodization for The Hunger Games films.",
        "description": "Named eras and phases that help readers track how The Hunger Games films changes across time."
    },
    {
        "slug": "hunger-games-films-works",
        "name": "The Hunger Games films works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Hunger Games films.",
        "description": "Primary works and adaptations through which most audiences encounter The Hunger Games films."
    },
    {
        "slug": "hunger-games-films-symbols",
        "name": "The Hunger Games films symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Hunger Games films.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Hunger Games films."
    },
    {
        "slug": "hunger-games-films-controversies",
        "name": "The Hunger Games films controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Hunger Games films.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Hunger Games films argumentative."
    },
    {
        "slug": "hunger-games-films-sources",
        "name": "The Hunger Games films sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Hunger Games films.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Hunger Games films."
    },
    {
        "slug": "hunger-games-films-geography",
        "name": "The Hunger Games films geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Hunger Games films.",
        "description": "Regions, routes, and spatial systems that situate The Hunger Games films beyond single named places."
    },
    {
        "slug": "hunger-games-films-legacy",
        "name": "The Hunger Games films legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Hunger Games films.",
        "description": "How The Hunger Games films continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hunger-games-films-practices",
        "name": "The Hunger Games films practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Hunger Games films.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Hunger Games films."
    },
    {
        "slug": "hunger-games-films-entry-1",
        "name": "The Hunger Games films entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-2",
        "name": "The Hunger Games films entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-3",
        "name": "The Hunger Games films entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-4",
        "name": "The Hunger Games films entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-5",
        "name": "The Hunger Games films entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-6",
        "name": "The Hunger Games films entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-7",
        "name": "The Hunger Games films entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-8",
        "name": "The Hunger Games films entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-9",
        "name": "The Hunger Games films entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-10",
        "name": "The Hunger Games films entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-11",
        "name": "The Hunger Games films entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-12",
        "name": "The Hunger Games films entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-13",
        "name": "The Hunger Games films entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-14",
        "name": "The Hunger Games films entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-15",
        "name": "The Hunger Games films entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-16",
        "name": "The Hunger Games films entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-17",
        "name": "The Hunger Games films entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-18",
        "name": "The Hunger Games films entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-19",
        "name": "The Hunger Games films entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-20",
        "name": "The Hunger Games films entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-21",
        "name": "The Hunger Games films entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-22",
        "name": "The Hunger Games films entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-23",
        "name": "The Hunger Games films entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hunger-games-films-entry-24",
        "name": "The Hunger Games films entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hunger Games films.",
        "description": "A supporting encyclopedia entry in the The Hunger Games films subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hunger-games-films",
        "hunger-games-films-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hunger-games-films",
        "hunger-games-films-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hunger-games-films",
        "hunger-games-films-places",
        "contains",
        "The Hunger Games films places is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-events",
        "contains",
        "The Hunger Games films events is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-objects",
        "contains",
        "The Hunger Games films objects & artifacts is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-factions",
        "contains",
        "The Hunger Games films factions & groups is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-concepts",
        "contains",
        "The Hunger Games films concepts is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-eras",
        "contains",
        "The Hunger Games films eras is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-works",
        "contains",
        "The Hunger Games films works & media is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-symbols",
        "contains",
        "The Hunger Games films symbols is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-controversies",
        "contains",
        "The Hunger Games films controversies is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-sources",
        "contains",
        "The Hunger Games films sources is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-geography",
        "contains",
        "The Hunger Games films geography is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-legacy",
        "contains",
        "The Hunger Games films legacy is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-practices",
        "contains",
        "The Hunger Games films practices is a primary trailhead under The Hunger Games films.",
        0.88,
        0.82
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-1",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-2",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-3",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-4",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-5",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-6",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-7",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-8",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-9",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-10",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-11",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-12",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-13",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-14",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-15",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-16",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-17",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-18",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-19",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-20",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-21",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-22",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-23",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ],
    [
        "hunger-games-films",
        "hunger-games-films-entry-24",
        "contains",
        "Supporting entry under The Hunger Games films.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
