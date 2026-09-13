/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "rifts-rpg",
        "name": "Rifts",
        "type": "topic",
        "short_description": "Mega-Damage chaos, dimensional rifts, and the kitchen-sink RPG of post-apocalyptic excess.",
        "description": "Mega-Damage chaos, dimensional rifts, and the kitchen-sink RPG of post-apocalyptic excess. This Ton-o-Lore subject maps people, places, events, and ideas tied to Rifts so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "rifts-rpg-figures",
        "name": "Rifts figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Rifts.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Rifts."
    },
    {
        "slug": "rifts-rpg-world",
        "name": "Rifts world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Rifts.",
        "description": "Geography, institutions, and periodization that give Rifts its encyclopedia shape."
    },
    {
        "slug": "rifts-rpg-places",
        "name": "Rifts places",
        "type": "place",
        "short_description": "Locations and geographies that frame Rifts.",
        "description": "Places, regions, and built sites that give Rifts its map — where events and figures concentrate."
    },
    {
        "slug": "rifts-rpg-events",
        "name": "Rifts events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Rifts.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Rifts timeline."
    },
    {
        "slug": "rifts-rpg-objects",
        "name": "Rifts objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Rifts.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Rifts."
    },
    {
        "slug": "rifts-rpg-factions",
        "name": "Rifts factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Rifts.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Rifts."
    },
    {
        "slug": "rifts-rpg-concepts",
        "name": "Rifts concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Rifts.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Rifts readable as a lore graph."
    },
    {
        "slug": "rifts-rpg-eras",
        "name": "Rifts eras",
        "type": "event",
        "short_description": "Periodization for Rifts.",
        "description": "Named eras and phases that help readers track how Rifts changes across time."
    },
    {
        "slug": "rifts-rpg-works",
        "name": "Rifts works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Rifts.",
        "description": "Primary works and adaptations through which most audiences encounter Rifts."
    },
    {
        "slug": "rifts-rpg-symbols",
        "name": "Rifts symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Rifts.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Rifts."
    },
    {
        "slug": "rifts-rpg-controversies",
        "name": "Rifts controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Rifts.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Rifts argumentative."
    },
    {
        "slug": "rifts-rpg-sources",
        "name": "Rifts sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Rifts.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Rifts."
    },
    {
        "slug": "rifts-rpg-geography",
        "name": "Rifts geography",
        "type": "place",
        "short_description": "Broader geographic framing for Rifts.",
        "description": "Regions, routes, and spatial systems that situate Rifts beyond single named places."
    },
    {
        "slug": "rifts-rpg-legacy",
        "name": "Rifts legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Rifts.",
        "description": "How Rifts continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "rifts-rpg-practices",
        "name": "Rifts practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Rifts.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Rifts."
    },
    {
        "slug": "rifts-rpg-entry-1",
        "name": "Rifts entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-2",
        "name": "Rifts entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-3",
        "name": "Rifts entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-4",
        "name": "Rifts entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-5",
        "name": "Rifts entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-6",
        "name": "Rifts entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-7",
        "name": "Rifts entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-8",
        "name": "Rifts entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-9",
        "name": "Rifts entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-10",
        "name": "Rifts entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-11",
        "name": "Rifts entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-12",
        "name": "Rifts entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-13",
        "name": "Rifts entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-14",
        "name": "Rifts entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-15",
        "name": "Rifts entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-16",
        "name": "Rifts entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-17",
        "name": "Rifts entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-18",
        "name": "Rifts entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-19",
        "name": "Rifts entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-20",
        "name": "Rifts entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-21",
        "name": "Rifts entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-22",
        "name": "Rifts entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-23",
        "name": "Rifts entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "rifts-rpg-entry-24",
        "name": "Rifts entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Rifts.",
        "description": "A supporting encyclopedia entry in the Rifts subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "rifts-rpg",
        "rifts-rpg-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "rifts-rpg",
        "rifts-rpg-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "rifts-rpg",
        "rifts-rpg-places",
        "contains",
        "Rifts places is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-events",
        "contains",
        "Rifts events is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-objects",
        "contains",
        "Rifts objects & artifacts is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-factions",
        "contains",
        "Rifts factions & groups is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-concepts",
        "contains",
        "Rifts concepts is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-eras",
        "contains",
        "Rifts eras is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-works",
        "contains",
        "Rifts works & media is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-symbols",
        "contains",
        "Rifts symbols is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-controversies",
        "contains",
        "Rifts controversies is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-sources",
        "contains",
        "Rifts sources is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-geography",
        "contains",
        "Rifts geography is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-legacy",
        "contains",
        "Rifts legacy is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-practices",
        "contains",
        "Rifts practices is a primary trailhead under Rifts.",
        0.88,
        0.82
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-1",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-2",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-3",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-4",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-5",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-6",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-7",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-8",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-9",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-10",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-11",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-12",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-13",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-14",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-15",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-16",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-17",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-18",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-19",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-20",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-21",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-22",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-23",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ],
    [
        "rifts-rpg",
        "rifts-rpg-entry-24",
        "contains",
        "Supporting entry under Rifts.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
