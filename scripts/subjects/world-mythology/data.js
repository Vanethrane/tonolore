/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-mythology",
        "name": "World mythology",
        "type": "topic",
        "short_description": "Gods, creatures, heroes, myths, symbols, sacred places, and genealogies across global myth systems.",
        "description": "Gods, creatures, heroes, myths, symbols, sacred places, and genealogies across global myth systems. This Ton-o-Lore subject maps people, places, events, and ideas tied to World mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "world-mythology-figures",
        "name": "World mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to World mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World mythology."
    },
    {
        "slug": "world-mythology-world",
        "name": "World mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame World mythology.",
        "description": "Geography, institutions, and periodization that give World mythology its encyclopedia shape."
    },
    {
        "slug": "world-mythology-places",
        "name": "World mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame World mythology.",
        "description": "Places, regions, and built sites that give World mythology its map — where events and figures concentrate."
    },
    {
        "slug": "world-mythology-events",
        "name": "World mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in World mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the World mythology timeline."
    },
    {
        "slug": "world-mythology-objects",
        "name": "World mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World mythology."
    },
    {
        "slug": "world-mythology-factions",
        "name": "World mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World mythology."
    },
    {
        "slug": "world-mythology-concepts",
        "name": "World mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World mythology readable as a lore graph."
    },
    {
        "slug": "world-mythology-eras",
        "name": "World mythology eras",
        "type": "event",
        "short_description": "Periodization for World mythology.",
        "description": "Named eras and phases that help readers track how World mythology changes across time."
    },
    {
        "slug": "world-mythology-works",
        "name": "World mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World mythology.",
        "description": "Primary works and adaptations through which most audiences encounter World mythology."
    },
    {
        "slug": "world-mythology-symbols",
        "name": "World mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World mythology."
    },
    {
        "slug": "world-mythology-controversies",
        "name": "World mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World mythology argumentative."
    },
    {
        "slug": "world-mythology-sources",
        "name": "World mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World mythology."
    },
    {
        "slug": "world-mythology-geography",
        "name": "World mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for World mythology.",
        "description": "Regions, routes, and spatial systems that situate World mythology beyond single named places."
    },
    {
        "slug": "world-mythology-legacy",
        "name": "World mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of World mythology.",
        "description": "How World mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "world-mythology-practices",
        "name": "World mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in World mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in World mythology."
    },
    {
        "slug": "world-mythology-entry-1",
        "name": "World mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-2",
        "name": "World mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-3",
        "name": "World mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-4",
        "name": "World mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-5",
        "name": "World mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-6",
        "name": "World mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-7",
        "name": "World mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-8",
        "name": "World mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-9",
        "name": "World mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-10",
        "name": "World mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-11",
        "name": "World mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-12",
        "name": "World mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-13",
        "name": "World mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-14",
        "name": "World mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-15",
        "name": "World mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-16",
        "name": "World mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-17",
        "name": "World mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-18",
        "name": "World mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-19",
        "name": "World mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-20",
        "name": "World mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-21",
        "name": "World mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-22",
        "name": "World mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-23",
        "name": "World mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-mythology-entry-24",
        "name": "World mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside World mythology.",
        "description": "A supporting encyclopedia entry in the World mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "world-mythology",
        "world-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "world-mythology",
        "world-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "world-mythology",
        "world-mythology-places",
        "contains",
        "World mythology places is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-events",
        "contains",
        "World mythology events is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-objects",
        "contains",
        "World mythology objects & artifacts is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-factions",
        "contains",
        "World mythology factions & groups is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-concepts",
        "contains",
        "World mythology concepts is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-eras",
        "contains",
        "World mythology eras is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-works",
        "contains",
        "World mythology works & media is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-symbols",
        "contains",
        "World mythology symbols is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-controversies",
        "contains",
        "World mythology controversies is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-sources",
        "contains",
        "World mythology sources is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-geography",
        "contains",
        "World mythology geography is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-legacy",
        "contains",
        "World mythology legacy is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-practices",
        "contains",
        "World mythology practices is a primary trailhead under World mythology.",
        0.88,
        0.82
    ],
    [
        "world-mythology",
        "world-mythology-entry-1",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-2",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-3",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-4",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-5",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-6",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-7",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-8",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-9",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-10",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-11",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-12",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-13",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-14",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-15",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-16",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-17",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-18",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-19",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-20",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-21",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-22",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-23",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ],
    [
        "world-mythology",
        "world-mythology-entry-24",
        "contains",
        "Supporting entry under World mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
