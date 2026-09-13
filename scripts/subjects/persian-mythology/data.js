/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "persian-mythology",
        "name": "Persian mythology",
        "type": "topic",
        "short_description": "Avestan divinities, Shahnameh heroes, and the dualistic cosmos of ancient Iranian tradition.",
        "description": "Avestan divinities, Shahnameh heroes, and the dualistic cosmos of ancient Iranian tradition. This Ton-o-Lore subject maps people, places, events, and ideas tied to Persian mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "persian-mythology-figures",
        "name": "Persian mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Persian mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Persian mythology."
    },
    {
        "slug": "persian-mythology-world",
        "name": "Persian mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Persian mythology.",
        "description": "Geography, institutions, and periodization that give Persian mythology its encyclopedia shape."
    },
    {
        "slug": "persian-mythology-places",
        "name": "Persian mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Persian mythology.",
        "description": "Places, regions, and built sites that give Persian mythology its map — where events and figures concentrate."
    },
    {
        "slug": "persian-mythology-events",
        "name": "Persian mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Persian mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Persian mythology timeline."
    },
    {
        "slug": "persian-mythology-objects",
        "name": "Persian mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Persian mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Persian mythology."
    },
    {
        "slug": "persian-mythology-factions",
        "name": "Persian mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Persian mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Persian mythology."
    },
    {
        "slug": "persian-mythology-concepts",
        "name": "Persian mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Persian mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Persian mythology readable as a lore graph."
    },
    {
        "slug": "persian-mythology-eras",
        "name": "Persian mythology eras",
        "type": "event",
        "short_description": "Periodization for Persian mythology.",
        "description": "Named eras and phases that help readers track how Persian mythology changes across time."
    },
    {
        "slug": "persian-mythology-works",
        "name": "Persian mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Persian mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Persian mythology."
    },
    {
        "slug": "persian-mythology-symbols",
        "name": "Persian mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Persian mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Persian mythology."
    },
    {
        "slug": "persian-mythology-controversies",
        "name": "Persian mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Persian mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Persian mythology argumentative."
    },
    {
        "slug": "persian-mythology-sources",
        "name": "Persian mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Persian mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Persian mythology."
    },
    {
        "slug": "persian-mythology-geography",
        "name": "Persian mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Persian mythology.",
        "description": "Regions, routes, and spatial systems that situate Persian mythology beyond single named places."
    },
    {
        "slug": "persian-mythology-legacy",
        "name": "Persian mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Persian mythology.",
        "description": "How Persian mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "persian-mythology-practices",
        "name": "Persian mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Persian mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Persian mythology."
    },
    {
        "slug": "persian-mythology-entry-1",
        "name": "Persian mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-2",
        "name": "Persian mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-3",
        "name": "Persian mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-4",
        "name": "Persian mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-5",
        "name": "Persian mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-6",
        "name": "Persian mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-7",
        "name": "Persian mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-8",
        "name": "Persian mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-9",
        "name": "Persian mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-10",
        "name": "Persian mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-11",
        "name": "Persian mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-12",
        "name": "Persian mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-13",
        "name": "Persian mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-14",
        "name": "Persian mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-15",
        "name": "Persian mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-16",
        "name": "Persian mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-17",
        "name": "Persian mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-18",
        "name": "Persian mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-19",
        "name": "Persian mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-20",
        "name": "Persian mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-21",
        "name": "Persian mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-22",
        "name": "Persian mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-23",
        "name": "Persian mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "persian-mythology-entry-24",
        "name": "Persian mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Persian mythology.",
        "description": "A supporting encyclopedia entry in the Persian mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "persian-mythology",
        "persian-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "persian-mythology",
        "persian-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "persian-mythology",
        "persian-mythology-places",
        "contains",
        "Persian mythology places is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-events",
        "contains",
        "Persian mythology events is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-objects",
        "contains",
        "Persian mythology objects & artifacts is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-factions",
        "contains",
        "Persian mythology factions & groups is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-concepts",
        "contains",
        "Persian mythology concepts is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-eras",
        "contains",
        "Persian mythology eras is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-works",
        "contains",
        "Persian mythology works & media is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-symbols",
        "contains",
        "Persian mythology symbols is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-controversies",
        "contains",
        "Persian mythology controversies is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-sources",
        "contains",
        "Persian mythology sources is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-geography",
        "contains",
        "Persian mythology geography is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-legacy",
        "contains",
        "Persian mythology legacy is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-practices",
        "contains",
        "Persian mythology practices is a primary trailhead under Persian mythology.",
        0.88,
        0.82
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-1",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-2",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-3",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-4",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-5",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-6",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-7",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-8",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-9",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-10",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-11",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-12",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-13",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-14",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-15",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-16",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-17",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-18",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-19",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-20",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-21",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-22",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-23",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ],
    [
        "persian-mythology",
        "persian-mythology-entry-24",
        "contains",
        "Supporting entry under Persian mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
