/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "james-bond-films",
        "name": "James Bond films",
        "type": "topic",
        "short_description": "00 numbers, gadgets, and the spy film series that set the template for franchise longevity.",
        "description": "00 numbers, gadgets, and the spy film series that set the template for franchise longevity. This Ton-o-Lore subject maps people, places, events, and ideas tied to James Bond films so readers can follow long-tail connections across movies."
    },
    {
        "slug": "james-bond-films-figures",
        "name": "James Bond films figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to James Bond films.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring James Bond films."
    },
    {
        "slug": "james-bond-films-world",
        "name": "James Bond films world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame James Bond films.",
        "description": "Geography, institutions, and periodization that give James Bond films its encyclopedia shape."
    },
    {
        "slug": "james-bond-films-places",
        "name": "James Bond films places",
        "type": "place",
        "short_description": "Locations and geographies that frame James Bond films.",
        "description": "Places, regions, and built sites that give James Bond films its map — where events and figures concentrate."
    },
    {
        "slug": "james-bond-films-events",
        "name": "James Bond films events",
        "type": "event",
        "short_description": "Turning points and dated episodes in James Bond films.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the James Bond films timeline."
    },
    {
        "slug": "james-bond-films-objects",
        "name": "James Bond films objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to James Bond films.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through James Bond films."
    },
    {
        "slug": "james-bond-films-factions",
        "name": "James Bond films factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside James Bond films.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in James Bond films."
    },
    {
        "slug": "james-bond-films-concepts",
        "name": "James Bond films concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize James Bond films.",
        "description": "Keywords, doctrines, systems, and abstract forces that make James Bond films readable as a lore graph."
    },
    {
        "slug": "james-bond-films-eras",
        "name": "James Bond films eras",
        "type": "event",
        "short_description": "Periodization for James Bond films.",
        "description": "Named eras and phases that help readers track how James Bond films changes across time."
    },
    {
        "slug": "james-bond-films-works",
        "name": "James Bond films works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry James Bond films.",
        "description": "Primary works and adaptations through which most audiences encounter James Bond films."
    },
    {
        "slug": "james-bond-films-symbols",
        "name": "James Bond films symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with James Bond films.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside James Bond films."
    },
    {
        "slug": "james-bond-films-controversies",
        "name": "James Bond films controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in James Bond films.",
        "description": "Debates, rival canons, scandals, and contested facts that keep James Bond films argumentative."
    },
    {
        "slug": "james-bond-films-sources",
        "name": "James Bond films sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into James Bond films.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify James Bond films."
    },
    {
        "slug": "james-bond-films-geography",
        "name": "James Bond films geography",
        "type": "place",
        "short_description": "Broader geographic framing for James Bond films.",
        "description": "Regions, routes, and spatial systems that situate James Bond films beyond single named places."
    },
    {
        "slug": "james-bond-films-legacy",
        "name": "James Bond films legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of James Bond films.",
        "description": "How James Bond films continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "james-bond-films-practices",
        "name": "James Bond films practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in James Bond films.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in James Bond films."
    },
    {
        "slug": "james-bond-films-entry-1",
        "name": "James Bond films entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-2",
        "name": "James Bond films entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-3",
        "name": "James Bond films entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-4",
        "name": "James Bond films entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-5",
        "name": "James Bond films entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-6",
        "name": "James Bond films entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-7",
        "name": "James Bond films entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-8",
        "name": "James Bond films entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-9",
        "name": "James Bond films entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-10",
        "name": "James Bond films entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-11",
        "name": "James Bond films entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-12",
        "name": "James Bond films entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-13",
        "name": "James Bond films entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-14",
        "name": "James Bond films entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-15",
        "name": "James Bond films entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-16",
        "name": "James Bond films entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-17",
        "name": "James Bond films entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-18",
        "name": "James Bond films entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-19",
        "name": "James Bond films entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-20",
        "name": "James Bond films entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-21",
        "name": "James Bond films entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-22",
        "name": "James Bond films entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-23",
        "name": "James Bond films entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "james-bond-films-entry-24",
        "name": "James Bond films entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside James Bond films.",
        "description": "A supporting encyclopedia entry in the James Bond films subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "james-bond-films",
        "james-bond-films-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "james-bond-films",
        "james-bond-films-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "james-bond-films",
        "james-bond-films-places",
        "contains",
        "James Bond films places is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-events",
        "contains",
        "James Bond films events is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-objects",
        "contains",
        "James Bond films objects & artifacts is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-factions",
        "contains",
        "James Bond films factions & groups is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-concepts",
        "contains",
        "James Bond films concepts is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-eras",
        "contains",
        "James Bond films eras is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-works",
        "contains",
        "James Bond films works & media is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-symbols",
        "contains",
        "James Bond films symbols is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-controversies",
        "contains",
        "James Bond films controversies is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-sources",
        "contains",
        "James Bond films sources is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-geography",
        "contains",
        "James Bond films geography is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-legacy",
        "contains",
        "James Bond films legacy is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-practices",
        "contains",
        "James Bond films practices is a primary trailhead under James Bond films.",
        0.88,
        0.82
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-1",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-2",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-3",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-4",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-5",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-6",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-7",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-8",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-9",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-10",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-11",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-12",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-13",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-14",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-15",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-16",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-17",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-18",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-19",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-20",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-21",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-22",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-23",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ],
    [
        "james-bond-films",
        "james-bond-films-entry-24",
        "contains",
        "Supporting entry under James Bond films.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
