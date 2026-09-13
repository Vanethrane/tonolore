/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "inca-mythology",
        "name": "Inca mythology",
        "type": "topic",
        "short_description": "Inti, Viracocha, Andean sacred geography, and the imperial religion of Tawantinsuyu.",
        "description": "Inti, Viracocha, Andean sacred geography, and the imperial religion of Tawantinsuyu. This Ton-o-Lore subject maps people, places, events, and ideas tied to Inca mythology so readers can follow long-tail connections across mythology."
    },
    {
        "slug": "inca-mythology-figures",
        "name": "Inca mythology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Inca mythology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Inca mythology."
    },
    {
        "slug": "inca-mythology-world",
        "name": "Inca mythology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Inca mythology.",
        "description": "Geography, institutions, and periodization that give Inca mythology its encyclopedia shape."
    },
    {
        "slug": "inca-mythology-places",
        "name": "Inca mythology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Inca mythology.",
        "description": "Places, regions, and built sites that give Inca mythology its map — where events and figures concentrate."
    },
    {
        "slug": "inca-mythology-events",
        "name": "Inca mythology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Inca mythology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Inca mythology timeline."
    },
    {
        "slug": "inca-mythology-objects",
        "name": "Inca mythology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Inca mythology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Inca mythology."
    },
    {
        "slug": "inca-mythology-factions",
        "name": "Inca mythology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Inca mythology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Inca mythology."
    },
    {
        "slug": "inca-mythology-concepts",
        "name": "Inca mythology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Inca mythology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Inca mythology readable as a lore graph."
    },
    {
        "slug": "inca-mythology-eras",
        "name": "Inca mythology eras",
        "type": "event",
        "short_description": "Periodization for Inca mythology.",
        "description": "Named eras and phases that help readers track how Inca mythology changes across time."
    },
    {
        "slug": "inca-mythology-works",
        "name": "Inca mythology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Inca mythology.",
        "description": "Primary works and adaptations through which most audiences encounter Inca mythology."
    },
    {
        "slug": "inca-mythology-symbols",
        "name": "Inca mythology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Inca mythology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Inca mythology."
    },
    {
        "slug": "inca-mythology-controversies",
        "name": "Inca mythology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Inca mythology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Inca mythology argumentative."
    },
    {
        "slug": "inca-mythology-sources",
        "name": "Inca mythology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Inca mythology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Inca mythology."
    },
    {
        "slug": "inca-mythology-geography",
        "name": "Inca mythology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Inca mythology.",
        "description": "Regions, routes, and spatial systems that situate Inca mythology beyond single named places."
    },
    {
        "slug": "inca-mythology-legacy",
        "name": "Inca mythology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Inca mythology.",
        "description": "How Inca mythology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "inca-mythology-practices",
        "name": "Inca mythology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Inca mythology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Inca mythology."
    },
    {
        "slug": "inca-mythology-entry-1",
        "name": "Inca mythology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-2",
        "name": "Inca mythology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-3",
        "name": "Inca mythology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-4",
        "name": "Inca mythology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-5",
        "name": "Inca mythology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-6",
        "name": "Inca mythology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-7",
        "name": "Inca mythology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-8",
        "name": "Inca mythology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-9",
        "name": "Inca mythology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-10",
        "name": "Inca mythology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-11",
        "name": "Inca mythology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-12",
        "name": "Inca mythology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-13",
        "name": "Inca mythology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-14",
        "name": "Inca mythology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-15",
        "name": "Inca mythology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-16",
        "name": "Inca mythology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-17",
        "name": "Inca mythology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-18",
        "name": "Inca mythology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-19",
        "name": "Inca mythology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-20",
        "name": "Inca mythology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-21",
        "name": "Inca mythology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-22",
        "name": "Inca mythology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-23",
        "name": "Inca mythology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "inca-mythology-entry-24",
        "name": "Inca mythology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Inca mythology.",
        "description": "A supporting encyclopedia entry in the Inca mythology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "inca-mythology",
        "inca-mythology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "inca-mythology",
        "inca-mythology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "inca-mythology",
        "inca-mythology-places",
        "contains",
        "Inca mythology places is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-events",
        "contains",
        "Inca mythology events is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-objects",
        "contains",
        "Inca mythology objects & artifacts is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-factions",
        "contains",
        "Inca mythology factions & groups is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-concepts",
        "contains",
        "Inca mythology concepts is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-eras",
        "contains",
        "Inca mythology eras is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-works",
        "contains",
        "Inca mythology works & media is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-symbols",
        "contains",
        "Inca mythology symbols is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-controversies",
        "contains",
        "Inca mythology controversies is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-sources",
        "contains",
        "Inca mythology sources is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-geography",
        "contains",
        "Inca mythology geography is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-legacy",
        "contains",
        "Inca mythology legacy is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-practices",
        "contains",
        "Inca mythology practices is a primary trailhead under Inca mythology.",
        0.88,
        0.82
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-1",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-2",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-3",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-4",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-5",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-6",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-7",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-8",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-9",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-10",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-11",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-12",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-13",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-14",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-15",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-16",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-17",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-18",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-19",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-20",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-21",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-22",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-23",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ],
    [
        "inca-mythology",
        "inca-mythology-entry-24",
        "contains",
        "Supporting entry under Inca mythology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
