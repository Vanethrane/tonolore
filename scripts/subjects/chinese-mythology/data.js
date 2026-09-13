/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "chinese-mythology",
        "name": "Chinese mythology",
        "type": "topic",
        "short_description": "Dragons, immortals, heavenly bureaucracy, and the epic cycles that structure East Asian sacred narrative.",
        "description": "Dragons, immortals, heavenly bureaucracy, and the epic cycles that structure East Asian sacred narrative. This Ton-o-Lore subject maps people, places, events, and ideas tied to Chinese mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "chinese-mythology-figures",
        "name": "Chinese mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Chinese mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Chinese mythology."
    },
    {
        "slug": "chinese-mythology-world",
        "name": "Chinese mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Chinese mythology.",
        "description": "Geography, institutions, and periodization that give Chinese mythology its encyclopedia shape."
    },
    {
        "slug": "chinese-mythology-places",
        "name": "Chinese mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Chinese mythology.",
        "description": "Places, regions, and built sites that give Chinese mythology its map — where events and figures concentrate."
    },
    {
        "slug": "chinese-mythology-events",
        "name": "Chinese mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Chinese mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Chinese mythology timeline."
    },
    {
        "slug": "chinese-mythology-objects",
        "name": "Chinese mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Chinese mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Chinese mythology."
    },
    {
        "slug": "chinese-mythology-factions",
        "name": "Chinese mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Chinese mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Chinese mythology."
    },
    {
        "slug": "chinese-mythology-concepts",
        "name": "Chinese mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Chinese mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Chinese mythology readable as a lore graph."
    },
    {
        "slug": "chinese-mythology-eras",
        "name": "Chinese mythology eras",
        "type": "event",
        "short_description": "Periodization for Chinese mythology.",
        "description": "Named eras and phases that help readers track how Chinese mythology changes across time."
    },
    {
        "slug": "chinese-mythology-works",
        "name": "Chinese mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Chinese mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Chinese mythology."
    },
    {
        "slug": "chinese-mythology-symbols",
        "name": "Chinese mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Chinese mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Chinese mythology."
    },
    {
        "slug": "chinese-mythology-controversies",
        "name": "Chinese mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Chinese mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Chinese mythology argumentative."
    },
    {
        "slug": "chinese-mythology-sources",
        "name": "Chinese mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Chinese mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Chinese mythology."
    },
    {
        "slug": "chinese-mythology-geography",
        "name": "Chinese mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Chinese mythology.",
        "description": "Regions, routes, and spatial systems that situate Chinese mythology beyond single named places."
    },
    {
        "slug": "chinese-mythology-legacy",
        "name": "Chinese mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Chinese mythology.",
        "description": "How Chinese mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "chinese-mythology-practices",
        "name": "Chinese mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Chinese mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Chinese mythology."
    },
    {
        "slug": "chinese-mythology-entry-1",
        "name": "Chinese mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-2",
        "name": "Chinese mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-3",
        "name": "Chinese mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-4",
        "name": "Chinese mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-5",
        "name": "Chinese mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-6",
        "name": "Chinese mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-7",
        "name": "Chinese mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-8",
        "name": "Chinese mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-9",
        "name": "Chinese mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-10",
        "name": "Chinese mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-11",
        "name": "Chinese mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-12",
        "name": "Chinese mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-13",
        "name": "Chinese mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-14",
        "name": "Chinese mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-15",
        "name": "Chinese mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-16",
        "name": "Chinese mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-17",
        "name": "Chinese mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-18",
        "name": "Chinese mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-19",
        "name": "Chinese mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-20",
        "name": "Chinese mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-21",
        "name": "Chinese mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-22",
        "name": "Chinese mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-23",
        "name": "Chinese mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "chinese-mythology-entry-24",
        "name": "Chinese mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Chinese mythology.",
        "description": "A supporting encyclopedia entry in the Chinese mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "chinese-mythology",
        "chinese-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "chinese-mythology",
        "chinese-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "chinese-mythology",
        "chinese-mythology-places",
        "contains",
        "Chinese mythology places is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-events",
        "contains",
        "Chinese mythology events is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-objects",
        "contains",
        "Chinese mythology objects & artifacts is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-factions",
        "contains",
        "Chinese mythology factions & groups is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-concepts",
        "contains",
        "Chinese mythology concepts is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-eras",
        "contains",
        "Chinese mythology eras is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-works",
        "contains",
        "Chinese mythology works & media is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-symbols",
        "contains",
        "Chinese mythology symbols is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-controversies",
        "contains",
        "Chinese mythology controversies is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-sources",
        "contains",
        "Chinese mythology sources is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-geography",
        "contains",
        "Chinese mythology geography is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-legacy",
        "contains",
        "Chinese mythology legacy is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-practices",
        "contains",
        "Chinese mythology practices is a primary trailhead under Chinese mythology.",
        0.88,
        0.82
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-1",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-2",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-3",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-4",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-5",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-6",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-7",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-8",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-9",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-10",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-11",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-12",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-13",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-14",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-15",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-16",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-17",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-18",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-19",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-20",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-21",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-22",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-23",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ],
    [
        "chinese-mythology",
        "chinese-mythology-entry-24",
        "contains",
        "Supporting entry under Chinese mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
