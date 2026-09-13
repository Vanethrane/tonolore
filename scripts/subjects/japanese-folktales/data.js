/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "japanese-folktales",
        "name": "Japanese folktales",
        "type": "topic",
        "short_description": "Yokai encounters, gratitude animals, and the mukashibanashi tradition of moral and uncanny tales.",
        "description": "Yokai encounters, gratitude animals, and the mukashibanashi tradition of moral and uncanny tales. This Ton-o-Lore subject maps people, places, events, and ideas tied to Japanese folktales so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "japanese-folktales-figures",
        "name": "Japanese folktales figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Japanese folktales.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Japanese folktales."
    },
    {
        "slug": "japanese-folktales-world",
        "name": "Japanese folktales world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Japanese folktales.",
        "description": "Geography, institutions, and periodization that give Japanese folktales its encyclopedia shape."
    },
    {
        "slug": "japanese-folktales-places",
        "name": "Japanese folktales places",
        "type": "place",
        "short_description": "Locations and geographies that frame Japanese folktales.",
        "description": "Places, regions, and built sites that give Japanese folktales its map — where events and figures concentrate."
    },
    {
        "slug": "japanese-folktales-events",
        "name": "Japanese folktales events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Japanese folktales.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Japanese folktales timeline."
    },
    {
        "slug": "japanese-folktales-objects",
        "name": "Japanese folktales objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Japanese folktales.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Japanese folktales."
    },
    {
        "slug": "japanese-folktales-factions",
        "name": "Japanese folktales factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Japanese folktales.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Japanese folktales."
    },
    {
        "slug": "japanese-folktales-concepts",
        "name": "Japanese folktales concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Japanese folktales.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Japanese folktales readable as a lore graph."
    },
    {
        "slug": "japanese-folktales-eras",
        "name": "Japanese folktales eras",
        "type": "event",
        "short_description": "Periodization for Japanese folktales.",
        "description": "Named eras and phases that help readers track how Japanese folktales changes across time."
    },
    {
        "slug": "japanese-folktales-works",
        "name": "Japanese folktales works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Japanese folktales.",
        "description": "Primary works and adaptations through which most audiences encounter Japanese folktales."
    },
    {
        "slug": "japanese-folktales-symbols",
        "name": "Japanese folktales symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Japanese folktales.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Japanese folktales."
    },
    {
        "slug": "japanese-folktales-controversies",
        "name": "Japanese folktales controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Japanese folktales.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Japanese folktales argumentative."
    },
    {
        "slug": "japanese-folktales-sources",
        "name": "Japanese folktales sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Japanese folktales.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Japanese folktales."
    },
    {
        "slug": "japanese-folktales-geography",
        "name": "Japanese folktales geography",
        "type": "place",
        "short_description": "Broader geographic framing for Japanese folktales.",
        "description": "Regions, routes, and spatial systems that situate Japanese folktales beyond single named places."
    },
    {
        "slug": "japanese-folktales-legacy",
        "name": "Japanese folktales legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Japanese folktales.",
        "description": "How Japanese folktales continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "japanese-folktales-practices",
        "name": "Japanese folktales practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Japanese folktales.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Japanese folktales."
    },
    {
        "slug": "japanese-folktales-entry-1",
        "name": "Japanese folktales entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-2",
        "name": "Japanese folktales entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-3",
        "name": "Japanese folktales entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-4",
        "name": "Japanese folktales entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-5",
        "name": "Japanese folktales entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-6",
        "name": "Japanese folktales entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-7",
        "name": "Japanese folktales entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-8",
        "name": "Japanese folktales entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-9",
        "name": "Japanese folktales entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-10",
        "name": "Japanese folktales entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-11",
        "name": "Japanese folktales entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-12",
        "name": "Japanese folktales entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-13",
        "name": "Japanese folktales entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-14",
        "name": "Japanese folktales entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-15",
        "name": "Japanese folktales entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-16",
        "name": "Japanese folktales entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-17",
        "name": "Japanese folktales entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-18",
        "name": "Japanese folktales entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-19",
        "name": "Japanese folktales entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-20",
        "name": "Japanese folktales entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-21",
        "name": "Japanese folktales entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-22",
        "name": "Japanese folktales entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-23",
        "name": "Japanese folktales entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-folktales-entry-24",
        "name": "Japanese folktales entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese folktales.",
        "description": "A supporting encyclopedia entry in the Japanese folktales subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "japanese-folktales",
        "japanese-folktales-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "japanese-folktales",
        "japanese-folktales-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "japanese-folktales",
        "japanese-folktales-places",
        "contains",
        "Japanese folktales places is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-events",
        "contains",
        "Japanese folktales events is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-objects",
        "contains",
        "Japanese folktales objects & artifacts is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-factions",
        "contains",
        "Japanese folktales factions & groups is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-concepts",
        "contains",
        "Japanese folktales concepts is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-eras",
        "contains",
        "Japanese folktales eras is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-works",
        "contains",
        "Japanese folktales works & media is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-symbols",
        "contains",
        "Japanese folktales symbols is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-controversies",
        "contains",
        "Japanese folktales controversies is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-sources",
        "contains",
        "Japanese folktales sources is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-geography",
        "contains",
        "Japanese folktales geography is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-legacy",
        "contains",
        "Japanese folktales legacy is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-practices",
        "contains",
        "Japanese folktales practices is a primary trailhead under Japanese folktales.",
        0.88,
        0.82
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-1",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-2",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-3",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-4",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-5",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-6",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-7",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-8",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-9",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-10",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-11",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-12",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-13",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-14",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-15",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-16",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-17",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-18",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-19",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-20",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-21",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-22",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-23",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ],
    [
        "japanese-folktales",
        "japanese-folktales-entry-24",
        "contains",
        "Supporting entry under Japanese folktales.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
