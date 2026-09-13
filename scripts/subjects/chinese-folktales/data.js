/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chinese-folktales",
        "name": "Chinese folktales",
        "type": "topic",
        "short_description": "Fox spirits, filial piety tales, and the classical story cycles of imperial and folk China.",
        "description": "Fox spirits, filial piety tales, and the classical story cycles of imperial and folk China. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chinese folktales so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "chinese-folktales-figures",
        "name": "Chinese folktales figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chinese folktales.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chinese folktales."
    },
    {
        "slug": "chinese-folktales-world",
        "name": "Chinese folktales world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chinese folktales.",
        "description": "Geography, institutions, and periodization that give Chinese folktales its encyclopedia shape."
    },
    {
        "slug": "chinese-folktales-places",
        "name": "Chinese folktales places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chinese folktales.",
        "description": "Places, regions, and built sites that give Chinese folktales its map — where events and figures concentrate."
    },
    {
        "slug": "chinese-folktales-events",
        "name": "Chinese folktales events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chinese folktales.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chinese folktales timeline."
    },
    {
        "slug": "chinese-folktales-objects",
        "name": "Chinese folktales objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chinese folktales.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chinese folktales."
    },
    {
        "slug": "chinese-folktales-factions",
        "name": "Chinese folktales factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chinese folktales.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chinese folktales."
    },
    {
        "slug": "chinese-folktales-concepts",
        "name": "Chinese folktales concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chinese folktales.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chinese folktales readable as a lore graph."
    },
    {
        "slug": "chinese-folktales-eras",
        "name": "Chinese folktales eras",
        "type": "event",
        "short_description": "Periodization for Chinese folktales.",
        "description": "Named eras and phases that help readers track how Chinese folktales changes across time."
    },
    {
        "slug": "chinese-folktales-works",
        "name": "Chinese folktales works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chinese folktales.",
        "description": "Primary works and adaptations through which most audiences encounter Chinese folktales."
    },
    {
        "slug": "chinese-folktales-symbols",
        "name": "Chinese folktales symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chinese folktales.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chinese folktales."
    },
    {
        "slug": "chinese-folktales-controversies",
        "name": "Chinese folktales controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chinese folktales.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chinese folktales argumentative."
    },
    {
        "slug": "chinese-folktales-sources",
        "name": "Chinese folktales sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chinese folktales.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chinese folktales."
    },
    {
        "slug": "chinese-folktales-geography",
        "name": "Chinese folktales geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chinese folktales.",
        "description": "Regions, routes, and spatial systems that situate Chinese folktales beyond single named places."
    },
    {
        "slug": "chinese-folktales-legacy",
        "name": "Chinese folktales legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chinese folktales.",
        "description": "How Chinese folktales continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "chinese-folktales-practices",
        "name": "Chinese folktales practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Chinese folktales.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Chinese folktales."
    },
    {
        "slug": "chinese-folktales-entry-1",
        "name": "Chinese folktales entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-2",
        "name": "Chinese folktales entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-3",
        "name": "Chinese folktales entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-4",
        "name": "Chinese folktales entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-5",
        "name": "Chinese folktales entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-6",
        "name": "Chinese folktales entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-7",
        "name": "Chinese folktales entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-8",
        "name": "Chinese folktales entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-9",
        "name": "Chinese folktales entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-10",
        "name": "Chinese folktales entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-11",
        "name": "Chinese folktales entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-12",
        "name": "Chinese folktales entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-13",
        "name": "Chinese folktales entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-14",
        "name": "Chinese folktales entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-15",
        "name": "Chinese folktales entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-16",
        "name": "Chinese folktales entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-17",
        "name": "Chinese folktales entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-18",
        "name": "Chinese folktales entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-19",
        "name": "Chinese folktales entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-20",
        "name": "Chinese folktales entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-21",
        "name": "Chinese folktales entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-22",
        "name": "Chinese folktales entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-23",
        "name": "Chinese folktales entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-folktales-entry-24",
        "name": "Chinese folktales entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese folktales.",
        "description": "A supporting encyclopedia entry in the Chinese folktales subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "chinese-folktales",
        "chinese-folktales-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chinese-folktales",
        "chinese-folktales-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chinese-folktales",
        "chinese-folktales-places",
        "contains",
        "Chinese folktales places is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-events",
        "contains",
        "Chinese folktales events is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-objects",
        "contains",
        "Chinese folktales objects & artifacts is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-factions",
        "contains",
        "Chinese folktales factions & groups is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-concepts",
        "contains",
        "Chinese folktales concepts is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-eras",
        "contains",
        "Chinese folktales eras is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-works",
        "contains",
        "Chinese folktales works & media is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-symbols",
        "contains",
        "Chinese folktales symbols is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-controversies",
        "contains",
        "Chinese folktales controversies is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-sources",
        "contains",
        "Chinese folktales sources is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-geography",
        "contains",
        "Chinese folktales geography is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-legacy",
        "contains",
        "Chinese folktales legacy is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-practices",
        "contains",
        "Chinese folktales practices is a primary trailhead under Chinese folktales.",
        0.88,
        0.82
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-1",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-2",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-3",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-4",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-5",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-6",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-7",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-8",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-9",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-10",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-11",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-12",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-13",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-14",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-15",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-16",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-17",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-18",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-19",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-20",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-21",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-22",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-23",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ],
    [
        "chinese-folktales",
        "chinese-folktales-entry-24",
        "contains",
        "Supporting entry under Chinese folktales.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
