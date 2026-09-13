/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "roman-mythology",
        "name": "Roman mythology",
        "type": "topic",
        "short_description": "Capitoline gods, founding legends, and the syncretic pantheon that absorbed Greek and Italic cults.",
        "description": "Capitoline gods, founding legends, and the syncretic pantheon that absorbed Greek and Italic cults. This Ton-o-Lore subject maps people, places, events, and ideas tied to Roman mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "roman-mythology-figures",
        "name": "Roman mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Roman mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Roman mythology."
    },
    {
        "slug": "roman-mythology-world",
        "name": "Roman mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Roman mythology.",
        "description": "Geography, institutions, and periodization that give Roman mythology its encyclopedia shape."
    },
    {
        "slug": "roman-mythology-places",
        "name": "Roman mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Roman mythology.",
        "description": "Places, regions, and built sites that give Roman mythology its map — where events and figures concentrate."
    },
    {
        "slug": "roman-mythology-events",
        "name": "Roman mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Roman mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Roman mythology timeline."
    },
    {
        "slug": "roman-mythology-objects",
        "name": "Roman mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Roman mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Roman mythology."
    },
    {
        "slug": "roman-mythology-factions",
        "name": "Roman mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Roman mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Roman mythology."
    },
    {
        "slug": "roman-mythology-concepts",
        "name": "Roman mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Roman mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Roman mythology readable as a lore graph."
    },
    {
        "slug": "roman-mythology-eras",
        "name": "Roman mythology eras",
        "type": "event",
        "short_description": "Periodization for Roman mythology.",
        "description": "Named eras and phases that help readers track how Roman mythology changes across time."
    },
    {
        "slug": "roman-mythology-works",
        "name": "Roman mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Roman mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Roman mythology."
    },
    {
        "slug": "roman-mythology-symbols",
        "name": "Roman mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Roman mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Roman mythology."
    },
    {
        "slug": "roman-mythology-controversies",
        "name": "Roman mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Roman mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Roman mythology argumentative."
    },
    {
        "slug": "roman-mythology-sources",
        "name": "Roman mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Roman mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Roman mythology."
    },
    {
        "slug": "roman-mythology-geography",
        "name": "Roman mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Roman mythology.",
        "description": "Regions, routes, and spatial systems that situate Roman mythology beyond single named places."
    },
    {
        "slug": "roman-mythology-legacy",
        "name": "Roman mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Roman mythology.",
        "description": "How Roman mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "roman-mythology-practices",
        "name": "Roman mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Roman mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Roman mythology."
    },
    {
        "slug": "roman-mythology-entry-1",
        "name": "Roman mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-2",
        "name": "Roman mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-3",
        "name": "Roman mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-4",
        "name": "Roman mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-5",
        "name": "Roman mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-6",
        "name": "Roman mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-7",
        "name": "Roman mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-8",
        "name": "Roman mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-9",
        "name": "Roman mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-10",
        "name": "Roman mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-11",
        "name": "Roman mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-12",
        "name": "Roman mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-13",
        "name": "Roman mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-14",
        "name": "Roman mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-15",
        "name": "Roman mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-16",
        "name": "Roman mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-17",
        "name": "Roman mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-18",
        "name": "Roman mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-19",
        "name": "Roman mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-20",
        "name": "Roman mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-21",
        "name": "Roman mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-22",
        "name": "Roman mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-23",
        "name": "Roman mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "roman-mythology-entry-24",
        "name": "Roman mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Roman mythology.",
        "description": "A supporting encyclopedia entry in the Roman mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "roman-mythology",
        "roman-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "roman-mythology",
        "roman-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "roman-mythology",
        "roman-mythology-places",
        "contains",
        "Roman mythology places is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-events",
        "contains",
        "Roman mythology events is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-objects",
        "contains",
        "Roman mythology objects & artifacts is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-factions",
        "contains",
        "Roman mythology factions & groups is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-concepts",
        "contains",
        "Roman mythology concepts is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-eras",
        "contains",
        "Roman mythology eras is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-works",
        "contains",
        "Roman mythology works & media is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-symbols",
        "contains",
        "Roman mythology symbols is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-controversies",
        "contains",
        "Roman mythology controversies is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-sources",
        "contains",
        "Roman mythology sources is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-geography",
        "contains",
        "Roman mythology geography is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-legacy",
        "contains",
        "Roman mythology legacy is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-practices",
        "contains",
        "Roman mythology practices is a primary trailhead under Roman mythology.",
        0.88,
        0.82
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-1",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-2",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-3",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-4",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-5",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-6",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-7",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-8",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-9",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-10",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-11",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-12",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-13",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-14",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-15",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-16",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-17",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-18",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-19",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-20",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-21",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-22",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-23",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ],
    [
        "roman-mythology",
        "roman-mythology-entry-24",
        "contains",
        "Supporting entry under Roman mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
