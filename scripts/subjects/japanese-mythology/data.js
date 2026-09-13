/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "japanese-mythology",
        "name": "Japanese mythology",
        "type": "topic",
        "short_description": "Kami, creation myths, and Shinto-Buddhist cosmologies mapped from the Kojiki and Nihon Shoki.",
        "description": "Kami, creation myths, and Shinto-Buddhist cosmologies mapped from the Kojiki and Nihon Shoki. This Ton-o-Lore subject maps people, places, events, and ideas tied to Japanese mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "japanese-mythology-figures",
        "name": "Japanese mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Japanese mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Japanese mythology."
    },
    {
        "slug": "japanese-mythology-world",
        "name": "Japanese mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Japanese mythology.",
        "description": "Geography, institutions, and periodization that give Japanese mythology its encyclopedia shape."
    },
    {
        "slug": "japanese-mythology-places",
        "name": "Japanese mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Japanese mythology.",
        "description": "Places, regions, and built sites that give Japanese mythology its map — where events and figures concentrate."
    },
    {
        "slug": "japanese-mythology-events",
        "name": "Japanese mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Japanese mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Japanese mythology timeline."
    },
    {
        "slug": "japanese-mythology-objects",
        "name": "Japanese mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Japanese mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Japanese mythology."
    },
    {
        "slug": "japanese-mythology-factions",
        "name": "Japanese mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Japanese mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Japanese mythology."
    },
    {
        "slug": "japanese-mythology-concepts",
        "name": "Japanese mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Japanese mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Japanese mythology readable as a lore graph."
    },
    {
        "slug": "japanese-mythology-eras",
        "name": "Japanese mythology eras",
        "type": "event",
        "short_description": "Periodization for Japanese mythology.",
        "description": "Named eras and phases that help readers track how Japanese mythology changes across time."
    },
    {
        "slug": "japanese-mythology-works",
        "name": "Japanese mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Japanese mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Japanese mythology."
    },
    {
        "slug": "japanese-mythology-symbols",
        "name": "Japanese mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Japanese mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Japanese mythology."
    },
    {
        "slug": "japanese-mythology-controversies",
        "name": "Japanese mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Japanese mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Japanese mythology argumentative."
    },
    {
        "slug": "japanese-mythology-sources",
        "name": "Japanese mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Japanese mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Japanese mythology."
    },
    {
        "slug": "japanese-mythology-geography",
        "name": "Japanese mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Japanese mythology.",
        "description": "Regions, routes, and spatial systems that situate Japanese mythology beyond single named places."
    },
    {
        "slug": "japanese-mythology-legacy",
        "name": "Japanese mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Japanese mythology.",
        "description": "How Japanese mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "japanese-mythology-practices",
        "name": "Japanese mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Japanese mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Japanese mythology."
    },
    {
        "slug": "japanese-mythology-entry-1",
        "name": "Japanese mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-2",
        "name": "Japanese mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-3",
        "name": "Japanese mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-4",
        "name": "Japanese mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-5",
        "name": "Japanese mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-6",
        "name": "Japanese mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-7",
        "name": "Japanese mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-8",
        "name": "Japanese mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-9",
        "name": "Japanese mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-10",
        "name": "Japanese mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-11",
        "name": "Japanese mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-12",
        "name": "Japanese mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-13",
        "name": "Japanese mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-14",
        "name": "Japanese mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-15",
        "name": "Japanese mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-16",
        "name": "Japanese mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-17",
        "name": "Japanese mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-18",
        "name": "Japanese mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-19",
        "name": "Japanese mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-20",
        "name": "Japanese mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-21",
        "name": "Japanese mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-22",
        "name": "Japanese mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-23",
        "name": "Japanese mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "japanese-mythology-entry-24",
        "name": "Japanese mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Japanese mythology.",
        "description": "A supporting encyclopedia entry in the Japanese mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "japanese-mythology",
        "japanese-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "japanese-mythology",
        "japanese-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "japanese-mythology",
        "japanese-mythology-places",
        "contains",
        "Japanese mythology places is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-events",
        "contains",
        "Japanese mythology events is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-objects",
        "contains",
        "Japanese mythology objects & artifacts is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-factions",
        "contains",
        "Japanese mythology factions & groups is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-concepts",
        "contains",
        "Japanese mythology concepts is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-eras",
        "contains",
        "Japanese mythology eras is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-works",
        "contains",
        "Japanese mythology works & media is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-symbols",
        "contains",
        "Japanese mythology symbols is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-controversies",
        "contains",
        "Japanese mythology controversies is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-sources",
        "contains",
        "Japanese mythology sources is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-geography",
        "contains",
        "Japanese mythology geography is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-legacy",
        "contains",
        "Japanese mythology legacy is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-practices",
        "contains",
        "Japanese mythology practices is a primary trailhead under Japanese mythology.",
        0.88,
        0.82
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-1",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-2",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-3",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-4",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-5",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-6",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-7",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-8",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-9",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-10",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-11",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-12",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-13",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-14",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-15",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-16",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-17",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-18",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-19",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-20",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-21",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-22",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-23",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ],
    [
        "japanese-mythology",
        "japanese-mythology-entry-24",
        "contains",
        "Supporting entry under Japanese mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
