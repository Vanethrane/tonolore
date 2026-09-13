/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cartel-wars-mexico",
        "name": "Mexican cartel wars",
        "type": "topic",
        "short_description": "Plazas, kingpins, and the contemporary conflict that remade North American crime maps.",
        "description": "Plazas, kingpins, and the contemporary conflict that remade North American crime maps. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mexican cartel wars so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "cartel-wars-mexico-figures",
        "name": "Mexican cartel wars figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mexican cartel wars.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mexican cartel wars."
    },
    {
        "slug": "cartel-wars-mexico-world",
        "name": "Mexican cartel wars world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mexican cartel wars.",
        "description": "Geography, institutions, and periodization that give Mexican cartel wars its encyclopedia shape."
    },
    {
        "slug": "cartel-wars-mexico-places",
        "name": "Mexican cartel wars places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mexican cartel wars.",
        "description": "Places, regions, and built sites that give Mexican cartel wars its map — where events and figures concentrate."
    },
    {
        "slug": "cartel-wars-mexico-events",
        "name": "Mexican cartel wars events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mexican cartel wars.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mexican cartel wars timeline."
    },
    {
        "slug": "cartel-wars-mexico-objects",
        "name": "Mexican cartel wars objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mexican cartel wars.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mexican cartel wars."
    },
    {
        "slug": "cartel-wars-mexico-factions",
        "name": "Mexican cartel wars factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mexican cartel wars.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mexican cartel wars."
    },
    {
        "slug": "cartel-wars-mexico-concepts",
        "name": "Mexican cartel wars concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mexican cartel wars.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mexican cartel wars readable as a lore graph."
    },
    {
        "slug": "cartel-wars-mexico-eras",
        "name": "Mexican cartel wars eras",
        "type": "event",
        "short_description": "Periodization for Mexican cartel wars.",
        "description": "Named eras and phases that help readers track how Mexican cartel wars changes across time."
    },
    {
        "slug": "cartel-wars-mexico-works",
        "name": "Mexican cartel wars works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mexican cartel wars.",
        "description": "Primary works and adaptations through which most audiences encounter Mexican cartel wars."
    },
    {
        "slug": "cartel-wars-mexico-symbols",
        "name": "Mexican cartel wars symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mexican cartel wars.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mexican cartel wars."
    },
    {
        "slug": "cartel-wars-mexico-controversies",
        "name": "Mexican cartel wars controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mexican cartel wars.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mexican cartel wars argumentative."
    },
    {
        "slug": "cartel-wars-mexico-sources",
        "name": "Mexican cartel wars sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mexican cartel wars.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mexican cartel wars."
    },
    {
        "slug": "cartel-wars-mexico-geography",
        "name": "Mexican cartel wars geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mexican cartel wars.",
        "description": "Regions, routes, and spatial systems that situate Mexican cartel wars beyond single named places."
    },
    {
        "slug": "cartel-wars-mexico-legacy",
        "name": "Mexican cartel wars legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mexican cartel wars.",
        "description": "How Mexican cartel wars continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cartel-wars-mexico-practices",
        "name": "Mexican cartel wars practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mexican cartel wars.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mexican cartel wars."
    },
    {
        "slug": "cartel-wars-mexico-entry-1",
        "name": "Mexican cartel wars entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-2",
        "name": "Mexican cartel wars entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-3",
        "name": "Mexican cartel wars entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-4",
        "name": "Mexican cartel wars entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-5",
        "name": "Mexican cartel wars entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-6",
        "name": "Mexican cartel wars entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-7",
        "name": "Mexican cartel wars entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-8",
        "name": "Mexican cartel wars entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-9",
        "name": "Mexican cartel wars entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-10",
        "name": "Mexican cartel wars entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-11",
        "name": "Mexican cartel wars entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-12",
        "name": "Mexican cartel wars entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-13",
        "name": "Mexican cartel wars entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-14",
        "name": "Mexican cartel wars entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-15",
        "name": "Mexican cartel wars entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-16",
        "name": "Mexican cartel wars entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-17",
        "name": "Mexican cartel wars entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-18",
        "name": "Mexican cartel wars entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-19",
        "name": "Mexican cartel wars entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-20",
        "name": "Mexican cartel wars entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-21",
        "name": "Mexican cartel wars entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-22",
        "name": "Mexican cartel wars entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-23",
        "name": "Mexican cartel wars entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cartel-wars-mexico-entry-24",
        "name": "Mexican cartel wars entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mexican cartel wars.",
        "description": "A supporting encyclopedia entry in the Mexican cartel wars subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-places",
        "contains",
        "Mexican cartel wars places is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-events",
        "contains",
        "Mexican cartel wars events is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-objects",
        "contains",
        "Mexican cartel wars objects & artifacts is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-factions",
        "contains",
        "Mexican cartel wars factions & groups is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-concepts",
        "contains",
        "Mexican cartel wars concepts is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-eras",
        "contains",
        "Mexican cartel wars eras is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-works",
        "contains",
        "Mexican cartel wars works & media is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-symbols",
        "contains",
        "Mexican cartel wars symbols is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-controversies",
        "contains",
        "Mexican cartel wars controversies is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-sources",
        "contains",
        "Mexican cartel wars sources is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-geography",
        "contains",
        "Mexican cartel wars geography is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-legacy",
        "contains",
        "Mexican cartel wars legacy is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-practices",
        "contains",
        "Mexican cartel wars practices is a primary trailhead under Mexican cartel wars.",
        0.88,
        0.82
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-1",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-2",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-3",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-4",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-5",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-6",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-7",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-8",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-9",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-10",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-11",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-12",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-13",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-14",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-15",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-16",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-17",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-18",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-19",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-20",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-21",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-22",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-23",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ],
    [
        "cartel-wars-mexico",
        "cartel-wars-mexico-entry-24",
        "contains",
        "Supporting entry under Mexican cartel wars.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
