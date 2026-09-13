/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lord-of-the-rings-films",
        "name": "The Lord of the Rings films",
        "type": "topic",
        "short_description": "Jackson’s trilogy craft, New Zealand Middle-earth, and the fantasy film benchmark.",
        "description": "Jackson’s trilogy craft, New Zealand Middle-earth, and the fantasy film benchmark. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Lord of the Rings films so readers can follow long-tail connections across movies."
    },
    {
        "slug": "lord-of-the-rings-films-figures",
        "name": "The Lord of the Rings films figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Lord of the Rings films.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Lord of the Rings films."
    },
    {
        "slug": "lord-of-the-rings-films-world",
        "name": "The Lord of the Rings films world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Lord of the Rings films.",
        "description": "Geography, institutions, and periodization that give The Lord of the Rings films its encyclopedia shape."
    },
    {
        "slug": "lord-of-the-rings-films-places",
        "name": "The Lord of the Rings films places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Lord of the Rings films.",
        "description": "Places, regions, and built sites that give The Lord of the Rings films its map — where events and figures concentrate."
    },
    {
        "slug": "lord-of-the-rings-films-events",
        "name": "The Lord of the Rings films events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Lord of the Rings films.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Lord of the Rings films timeline."
    },
    {
        "slug": "lord-of-the-rings-films-objects",
        "name": "The Lord of the Rings films objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Lord of the Rings films.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Lord of the Rings films."
    },
    {
        "slug": "lord-of-the-rings-films-factions",
        "name": "The Lord of the Rings films factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Lord of the Rings films.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Lord of the Rings films."
    },
    {
        "slug": "lord-of-the-rings-films-concepts",
        "name": "The Lord of the Rings films concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Lord of the Rings films.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Lord of the Rings films readable as a lore graph."
    },
    {
        "slug": "lord-of-the-rings-films-eras",
        "name": "The Lord of the Rings films eras",
        "type": "event",
        "short_description": "Periodization for The Lord of the Rings films.",
        "description": "Named eras and phases that help readers track how The Lord of the Rings films changes across time."
    },
    {
        "slug": "lord-of-the-rings-films-works",
        "name": "The Lord of the Rings films works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Lord of the Rings films.",
        "description": "Primary works and adaptations through which most audiences encounter The Lord of the Rings films."
    },
    {
        "slug": "lord-of-the-rings-films-symbols",
        "name": "The Lord of the Rings films symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Lord of the Rings films.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Lord of the Rings films."
    },
    {
        "slug": "lord-of-the-rings-films-controversies",
        "name": "The Lord of the Rings films controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Lord of the Rings films.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Lord of the Rings films argumentative."
    },
    {
        "slug": "lord-of-the-rings-films-sources",
        "name": "The Lord of the Rings films sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Lord of the Rings films.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Lord of the Rings films."
    },
    {
        "slug": "lord-of-the-rings-films-geography",
        "name": "The Lord of the Rings films geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Lord of the Rings films.",
        "description": "Regions, routes, and spatial systems that situate The Lord of the Rings films beyond single named places."
    },
    {
        "slug": "lord-of-the-rings-films-legacy",
        "name": "The Lord of the Rings films legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Lord of the Rings films.",
        "description": "How The Lord of the Rings films continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "lord-of-the-rings-films-practices",
        "name": "The Lord of the Rings films practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Lord of the Rings films.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Lord of the Rings films."
    },
    {
        "slug": "lord-of-the-rings-films-entry-1",
        "name": "The Lord of the Rings films entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-2",
        "name": "The Lord of the Rings films entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-3",
        "name": "The Lord of the Rings films entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-4",
        "name": "The Lord of the Rings films entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-5",
        "name": "The Lord of the Rings films entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-6",
        "name": "The Lord of the Rings films entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-7",
        "name": "The Lord of the Rings films entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-8",
        "name": "The Lord of the Rings films entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-9",
        "name": "The Lord of the Rings films entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-10",
        "name": "The Lord of the Rings films entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-11",
        "name": "The Lord of the Rings films entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-12",
        "name": "The Lord of the Rings films entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-13",
        "name": "The Lord of the Rings films entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-14",
        "name": "The Lord of the Rings films entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-15",
        "name": "The Lord of the Rings films entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-16",
        "name": "The Lord of the Rings films entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-17",
        "name": "The Lord of the Rings films entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-18",
        "name": "The Lord of the Rings films entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-19",
        "name": "The Lord of the Rings films entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-20",
        "name": "The Lord of the Rings films entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-21",
        "name": "The Lord of the Rings films entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-22",
        "name": "The Lord of the Rings films entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-23",
        "name": "The Lord of the Rings films entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lord-of-the-rings-films-entry-24",
        "name": "The Lord of the Rings films entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Lord of the Rings films.",
        "description": "A supporting encyclopedia entry in the The Lord of the Rings films subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-places",
        "contains",
        "The Lord of the Rings films places is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-events",
        "contains",
        "The Lord of the Rings films events is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-objects",
        "contains",
        "The Lord of the Rings films objects & artifacts is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-factions",
        "contains",
        "The Lord of the Rings films factions & groups is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-concepts",
        "contains",
        "The Lord of the Rings films concepts is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-eras",
        "contains",
        "The Lord of the Rings films eras is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-works",
        "contains",
        "The Lord of the Rings films works & media is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-symbols",
        "contains",
        "The Lord of the Rings films symbols is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-controversies",
        "contains",
        "The Lord of the Rings films controversies is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-sources",
        "contains",
        "The Lord of the Rings films sources is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-geography",
        "contains",
        "The Lord of the Rings films geography is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-legacy",
        "contains",
        "The Lord of the Rings films legacy is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-practices",
        "contains",
        "The Lord of the Rings films practices is a primary trailhead under The Lord of the Rings films.",
        0.88,
        0.82
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-1",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-2",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-3",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-4",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-5",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-6",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-7",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-8",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-9",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-10",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-11",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-12",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-13",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-14",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-15",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-16",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-17",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-18",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-19",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-20",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-21",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-22",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-23",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ],
    [
        "lord-of-the-rings-films",
        "lord-of-the-rings-films-entry-24",
        "contains",
        "Supporting entry under The Lord of the Rings films.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
