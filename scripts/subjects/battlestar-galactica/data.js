/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "battlestar-galactica",
        "name": "Battlestar Galactica",
        "type": "topic",
        "short_description": "Cylon cycles, exodus fleets, and the reimagined space-opera that made military SF feel operatic.",
        "description": "Cylon cycles, exodus fleets, and the reimagined space-opera that made military SF feel operatic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Battlestar Galactica so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "battlestar-galactica-figures",
        "name": "Battlestar Galactica figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Battlestar Galactica.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Battlestar Galactica."
    },
    {
        "slug": "battlestar-galactica-world",
        "name": "Battlestar Galactica world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Battlestar Galactica.",
        "description": "Geography, institutions, and periodization that give Battlestar Galactica its encyclopedia shape."
    },
    {
        "slug": "battlestar-galactica-places",
        "name": "Battlestar Galactica places",
        "type": "place",
        "short_description": "Locations and geographies that frame Battlestar Galactica.",
        "description": "Places, regions, and built sites that give Battlestar Galactica its map — where events and figures concentrate."
    },
    {
        "slug": "battlestar-galactica-events",
        "name": "Battlestar Galactica events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Battlestar Galactica.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Battlestar Galactica timeline."
    },
    {
        "slug": "battlestar-galactica-objects",
        "name": "Battlestar Galactica objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Battlestar Galactica.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Battlestar Galactica."
    },
    {
        "slug": "battlestar-galactica-factions",
        "name": "Battlestar Galactica factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Battlestar Galactica.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Battlestar Galactica."
    },
    {
        "slug": "battlestar-galactica-concepts",
        "name": "Battlestar Galactica concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Battlestar Galactica.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Battlestar Galactica readable as a lore graph."
    },
    {
        "slug": "battlestar-galactica-eras",
        "name": "Battlestar Galactica eras",
        "type": "event",
        "short_description": "Periodization for Battlestar Galactica.",
        "description": "Named eras and phases that help readers track how Battlestar Galactica changes across time."
    },
    {
        "slug": "battlestar-galactica-works",
        "name": "Battlestar Galactica works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Battlestar Galactica.",
        "description": "Primary works and adaptations through which most audiences encounter Battlestar Galactica."
    },
    {
        "slug": "battlestar-galactica-symbols",
        "name": "Battlestar Galactica symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Battlestar Galactica.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Battlestar Galactica."
    },
    {
        "slug": "battlestar-galactica-controversies",
        "name": "Battlestar Galactica controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Battlestar Galactica.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Battlestar Galactica argumentative."
    },
    {
        "slug": "battlestar-galactica-sources",
        "name": "Battlestar Galactica sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Battlestar Galactica.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Battlestar Galactica."
    },
    {
        "slug": "battlestar-galactica-geography",
        "name": "Battlestar Galactica geography",
        "type": "place",
        "short_description": "Broader geographic framing for Battlestar Galactica.",
        "description": "Regions, routes, and spatial systems that situate Battlestar Galactica beyond single named places."
    },
    {
        "slug": "battlestar-galactica-legacy",
        "name": "Battlestar Galactica legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Battlestar Galactica.",
        "description": "How Battlestar Galactica continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "battlestar-galactica-practices",
        "name": "Battlestar Galactica practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Battlestar Galactica.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Battlestar Galactica."
    },
    {
        "slug": "battlestar-galactica-entry-1",
        "name": "Battlestar Galactica entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-2",
        "name": "Battlestar Galactica entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-3",
        "name": "Battlestar Galactica entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-4",
        "name": "Battlestar Galactica entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-5",
        "name": "Battlestar Galactica entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-6",
        "name": "Battlestar Galactica entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-7",
        "name": "Battlestar Galactica entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-8",
        "name": "Battlestar Galactica entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-9",
        "name": "Battlestar Galactica entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-10",
        "name": "Battlestar Galactica entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-11",
        "name": "Battlestar Galactica entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-12",
        "name": "Battlestar Galactica entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-13",
        "name": "Battlestar Galactica entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-14",
        "name": "Battlestar Galactica entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-15",
        "name": "Battlestar Galactica entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-16",
        "name": "Battlestar Galactica entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-17",
        "name": "Battlestar Galactica entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-18",
        "name": "Battlestar Galactica entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-19",
        "name": "Battlestar Galactica entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-20",
        "name": "Battlestar Galactica entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-21",
        "name": "Battlestar Galactica entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-22",
        "name": "Battlestar Galactica entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-23",
        "name": "Battlestar Galactica entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "battlestar-galactica-entry-24",
        "name": "Battlestar Galactica entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Battlestar Galactica.",
        "description": "A supporting encyclopedia entry in the Battlestar Galactica subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "battlestar-galactica",
        "battlestar-galactica-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-places",
        "contains",
        "Battlestar Galactica places is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-events",
        "contains",
        "Battlestar Galactica events is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-objects",
        "contains",
        "Battlestar Galactica objects & artifacts is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-factions",
        "contains",
        "Battlestar Galactica factions & groups is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-concepts",
        "contains",
        "Battlestar Galactica concepts is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-eras",
        "contains",
        "Battlestar Galactica eras is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-works",
        "contains",
        "Battlestar Galactica works & media is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-symbols",
        "contains",
        "Battlestar Galactica symbols is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-controversies",
        "contains",
        "Battlestar Galactica controversies is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-sources",
        "contains",
        "Battlestar Galactica sources is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-geography",
        "contains",
        "Battlestar Galactica geography is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-legacy",
        "contains",
        "Battlestar Galactica legacy is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-practices",
        "contains",
        "Battlestar Galactica practices is a primary trailhead under Battlestar Galactica.",
        0.88,
        0.82
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-1",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-2",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-3",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-4",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-5",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-6",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-7",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-8",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-9",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-10",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-11",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-12",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-13",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-14",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-15",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-16",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-17",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-18",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-19",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-20",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-21",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-22",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-23",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ],
    [
        "battlestar-galactica",
        "battlestar-galactica-entry-24",
        "contains",
        "Supporting entry under Battlestar Galactica.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
