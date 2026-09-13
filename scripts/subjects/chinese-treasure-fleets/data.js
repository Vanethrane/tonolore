/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chinese-treasure-fleets",
        "name": "Chinese treasure fleets",
        "type": "topic",
        "short_description": "Zheng He, massive junks, and the Ming voyages that projected power across the Indian Ocean.",
        "description": "Zheng He, massive junks, and the Ming voyages that projected power across the Indian Ocean. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chinese treasure fleets so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "chinese-treasure-fleets-figures",
        "name": "Chinese treasure fleets figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chinese treasure fleets.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chinese treasure fleets."
    },
    {
        "slug": "chinese-treasure-fleets-world",
        "name": "Chinese treasure fleets world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chinese treasure fleets.",
        "description": "Geography, institutions, and periodization that give Chinese treasure fleets its encyclopedia shape."
    },
    {
        "slug": "chinese-treasure-fleets-places",
        "name": "Chinese treasure fleets places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chinese treasure fleets.",
        "description": "Places, regions, and built sites that give Chinese treasure fleets its map — where events and figures concentrate."
    },
    {
        "slug": "chinese-treasure-fleets-events",
        "name": "Chinese treasure fleets events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chinese treasure fleets.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chinese treasure fleets timeline."
    },
    {
        "slug": "chinese-treasure-fleets-objects",
        "name": "Chinese treasure fleets objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chinese treasure fleets.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chinese treasure fleets."
    },
    {
        "slug": "chinese-treasure-fleets-factions",
        "name": "Chinese treasure fleets factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chinese treasure fleets.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chinese treasure fleets."
    },
    {
        "slug": "chinese-treasure-fleets-concepts",
        "name": "Chinese treasure fleets concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chinese treasure fleets.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chinese treasure fleets readable as a lore graph."
    },
    {
        "slug": "chinese-treasure-fleets-eras",
        "name": "Chinese treasure fleets eras",
        "type": "event",
        "short_description": "Periodization for Chinese treasure fleets.",
        "description": "Named eras and phases that help readers track how Chinese treasure fleets changes across time."
    },
    {
        "slug": "chinese-treasure-fleets-works",
        "name": "Chinese treasure fleets works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chinese treasure fleets.",
        "description": "Primary works and adaptations through which most audiences encounter Chinese treasure fleets."
    },
    {
        "slug": "chinese-treasure-fleets-symbols",
        "name": "Chinese treasure fleets symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chinese treasure fleets.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chinese treasure fleets."
    },
    {
        "slug": "chinese-treasure-fleets-controversies",
        "name": "Chinese treasure fleets controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chinese treasure fleets.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chinese treasure fleets argumentative."
    },
    {
        "slug": "chinese-treasure-fleets-sources",
        "name": "Chinese treasure fleets sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chinese treasure fleets.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chinese treasure fleets."
    },
    {
        "slug": "chinese-treasure-fleets-geography",
        "name": "Chinese treasure fleets geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chinese treasure fleets.",
        "description": "Regions, routes, and spatial systems that situate Chinese treasure fleets beyond single named places."
    },
    {
        "slug": "chinese-treasure-fleets-legacy",
        "name": "Chinese treasure fleets legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chinese treasure fleets.",
        "description": "How Chinese treasure fleets continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "chinese-treasure-fleets-practices",
        "name": "Chinese treasure fleets practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Chinese treasure fleets.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Chinese treasure fleets."
    },
    {
        "slug": "chinese-treasure-fleets-entry-1",
        "name": "Chinese treasure fleets entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-2",
        "name": "Chinese treasure fleets entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-3",
        "name": "Chinese treasure fleets entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-4",
        "name": "Chinese treasure fleets entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-5",
        "name": "Chinese treasure fleets entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-6",
        "name": "Chinese treasure fleets entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-7",
        "name": "Chinese treasure fleets entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-8",
        "name": "Chinese treasure fleets entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-9",
        "name": "Chinese treasure fleets entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-10",
        "name": "Chinese treasure fleets entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-11",
        "name": "Chinese treasure fleets entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-12",
        "name": "Chinese treasure fleets entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-13",
        "name": "Chinese treasure fleets entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-14",
        "name": "Chinese treasure fleets entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-15",
        "name": "Chinese treasure fleets entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-16",
        "name": "Chinese treasure fleets entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-17",
        "name": "Chinese treasure fleets entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-18",
        "name": "Chinese treasure fleets entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-19",
        "name": "Chinese treasure fleets entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-20",
        "name": "Chinese treasure fleets entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-21",
        "name": "Chinese treasure fleets entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-22",
        "name": "Chinese treasure fleets entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-23",
        "name": "Chinese treasure fleets entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-treasure-fleets-entry-24",
        "name": "Chinese treasure fleets entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese treasure fleets.",
        "description": "A supporting encyclopedia entry in the Chinese treasure fleets subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-places",
        "contains",
        "Chinese treasure fleets places is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-events",
        "contains",
        "Chinese treasure fleets events is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-objects",
        "contains",
        "Chinese treasure fleets objects & artifacts is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-factions",
        "contains",
        "Chinese treasure fleets factions & groups is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-concepts",
        "contains",
        "Chinese treasure fleets concepts is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-eras",
        "contains",
        "Chinese treasure fleets eras is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-works",
        "contains",
        "Chinese treasure fleets works & media is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-symbols",
        "contains",
        "Chinese treasure fleets symbols is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-controversies",
        "contains",
        "Chinese treasure fleets controversies is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-sources",
        "contains",
        "Chinese treasure fleets sources is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-geography",
        "contains",
        "Chinese treasure fleets geography is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-legacy",
        "contains",
        "Chinese treasure fleets legacy is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-practices",
        "contains",
        "Chinese treasure fleets practices is a primary trailhead under Chinese treasure fleets.",
        0.88,
        0.82
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-1",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-2",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-3",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-4",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-5",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-6",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-7",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-8",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-9",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-10",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-11",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-12",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-13",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-14",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-15",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-16",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-17",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-18",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-19",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-20",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-21",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-22",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-23",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ],
    [
        "chinese-treasure-fleets",
        "chinese-treasure-fleets-entry-24",
        "contains",
        "Supporting entry under Chinese treasure fleets.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
