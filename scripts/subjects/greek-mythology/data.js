/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "greek-mythology",
        "name": "Greek mythology",
        "type": "topic",
        "short_description": "Olympians, heroes, and underworld geography that seeded Western fantasy language.",
        "description": "Olympians, heroes, and underworld geography that seeded Western fantasy language. This Ton-o-Lore subject maps people, places, events, and ideas tied to Greek mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "greek-mythology-figures",
        "name": "Greek mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Greek mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Greek mythology."
    },
    {
        "slug": "greek-mythology-world",
        "name": "Greek mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Greek mythology.",
        "description": "Geography, institutions, and periodization that give Greek mythology its encyclopedia shape."
    },
    {
        "slug": "greek-mythology-places",
        "name": "Greek mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Greek mythology.",
        "description": "Places, regions, and built sites that give Greek mythology its map — where events and figures concentrate."
    },
    {
        "slug": "greek-mythology-events",
        "name": "Greek mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Greek mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Greek mythology timeline."
    },
    {
        "slug": "greek-mythology-objects",
        "name": "Greek mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Greek mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Greek mythology."
    },
    {
        "slug": "greek-mythology-factions",
        "name": "Greek mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Greek mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Greek mythology."
    },
    {
        "slug": "greek-mythology-concepts",
        "name": "Greek mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Greek mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Greek mythology readable as a lore graph."
    },
    {
        "slug": "greek-mythology-eras",
        "name": "Greek mythology eras",
        "type": "event",
        "short_description": "Periodization for Greek mythology.",
        "description": "Named eras and phases that help readers track how Greek mythology changes across time."
    },
    {
        "slug": "greek-mythology-works",
        "name": "Greek mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Greek mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Greek mythology."
    },
    {
        "slug": "greek-mythology-symbols",
        "name": "Greek mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Greek mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Greek mythology."
    },
    {
        "slug": "greek-mythology-controversies",
        "name": "Greek mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Greek mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Greek mythology argumentative."
    },
    {
        "slug": "greek-mythology-sources",
        "name": "Greek mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Greek mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Greek mythology."
    },
    {
        "slug": "greek-mythology-geography",
        "name": "Greek mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Greek mythology.",
        "description": "Regions, routes, and spatial systems that situate Greek mythology beyond single named places."
    },
    {
        "slug": "greek-mythology-legacy",
        "name": "Greek mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Greek mythology.",
        "description": "How Greek mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "greek-mythology-practices",
        "name": "Greek mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Greek mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Greek mythology."
    },
    {
        "slug": "greek-mythology-entry-1",
        "name": "Greek mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-2",
        "name": "Greek mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-3",
        "name": "Greek mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-4",
        "name": "Greek mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-5",
        "name": "Greek mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-6",
        "name": "Greek mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-7",
        "name": "Greek mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-8",
        "name": "Greek mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-9",
        "name": "Greek mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-10",
        "name": "Greek mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-11",
        "name": "Greek mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-12",
        "name": "Greek mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-13",
        "name": "Greek mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-14",
        "name": "Greek mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-15",
        "name": "Greek mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-16",
        "name": "Greek mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-17",
        "name": "Greek mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-18",
        "name": "Greek mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-19",
        "name": "Greek mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-20",
        "name": "Greek mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-21",
        "name": "Greek mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-22",
        "name": "Greek mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-23",
        "name": "Greek mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "greek-mythology-entry-24",
        "name": "Greek mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Greek mythology.",
        "description": "A supporting encyclopedia entry in the Greek mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "greek-mythology",
        "greek-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "greek-mythology",
        "greek-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "greek-mythology",
        "greek-mythology-places",
        "contains",
        "Greek mythology places is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-events",
        "contains",
        "Greek mythology events is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-objects",
        "contains",
        "Greek mythology objects & artifacts is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-factions",
        "contains",
        "Greek mythology factions & groups is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-concepts",
        "contains",
        "Greek mythology concepts is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-eras",
        "contains",
        "Greek mythology eras is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-works",
        "contains",
        "Greek mythology works & media is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-symbols",
        "contains",
        "Greek mythology symbols is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-controversies",
        "contains",
        "Greek mythology controversies is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-sources",
        "contains",
        "Greek mythology sources is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-geography",
        "contains",
        "Greek mythology geography is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-legacy",
        "contains",
        "Greek mythology legacy is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-practices",
        "contains",
        "Greek mythology practices is a primary trailhead under Greek mythology.",
        0.88,
        0.82
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-1",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-2",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-3",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-4",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-5",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-6",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-7",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-8",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-9",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-10",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-11",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-12",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-13",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-14",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-15",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-16",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-17",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-18",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-19",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-20",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-21",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-22",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-23",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ],
    [
        "greek-mythology",
        "greek-mythology-entry-24",
        "contains",
        "Supporting entry under Greek mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
