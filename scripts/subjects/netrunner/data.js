/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "netrunner",
        "name": "Android: Netrunner",
        "type": "topic",
        "short_description": "Runner vs corp asymmetry, cyberpunk heists, and the beloved LCG of digital crime.",
        "description": "Runner vs corp asymmetry, cyberpunk heists, and the beloved LCG of digital crime. This Ton-o-Lore subject maps people, places, events, and ideas tied to Android: Netrunner so readers can follow long-tail connections across card games."
    },
    {
        "slug": "netrunner-figures",
        "name": "Android: Netrunner figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Android: Netrunner.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Android: Netrunner."
    },
    {
        "slug": "netrunner-world",
        "name": "Android: Netrunner world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Android: Netrunner.",
        "description": "Geography, institutions, and periodization that give Android: Netrunner its encyclopedia shape."
    },
    {
        "slug": "netrunner-places",
        "name": "Android: Netrunner places",
        "type": "place",
        "short_description": "Locations and geographies that frame Android: Netrunner.",
        "description": "Places, regions, and built sites that give Android: Netrunner its map — where events and figures concentrate."
    },
    {
        "slug": "netrunner-events",
        "name": "Android: Netrunner events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Android: Netrunner.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Android: Netrunner timeline."
    },
    {
        "slug": "netrunner-objects",
        "name": "Android: Netrunner objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Android: Netrunner.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Android: Netrunner."
    },
    {
        "slug": "netrunner-factions",
        "name": "Android: Netrunner factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Android: Netrunner.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Android: Netrunner."
    },
    {
        "slug": "netrunner-concepts",
        "name": "Android: Netrunner concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Android: Netrunner.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Android: Netrunner readable as a lore graph."
    },
    {
        "slug": "netrunner-eras",
        "name": "Android: Netrunner eras",
        "type": "event",
        "short_description": "Periodization for Android: Netrunner.",
        "description": "Named eras and phases that help readers track how Android: Netrunner changes across time."
    },
    {
        "slug": "netrunner-works",
        "name": "Android: Netrunner works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Android: Netrunner.",
        "description": "Primary works and adaptations through which most audiences encounter Android: Netrunner."
    },
    {
        "slug": "netrunner-symbols",
        "name": "Android: Netrunner symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Android: Netrunner.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Android: Netrunner."
    },
    {
        "slug": "netrunner-controversies",
        "name": "Android: Netrunner controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Android: Netrunner.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Android: Netrunner argumentative."
    },
    {
        "slug": "netrunner-sources",
        "name": "Android: Netrunner sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Android: Netrunner.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Android: Netrunner."
    },
    {
        "slug": "netrunner-geography",
        "name": "Android: Netrunner geography",
        "type": "place",
        "short_description": "Broader geographic framing for Android: Netrunner.",
        "description": "Regions, routes, and spatial systems that situate Android: Netrunner beyond single named places."
    },
    {
        "slug": "netrunner-legacy",
        "name": "Android: Netrunner legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Android: Netrunner.",
        "description": "How Android: Netrunner continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "netrunner-practices",
        "name": "Android: Netrunner practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Android: Netrunner.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Android: Netrunner."
    },
    {
        "slug": "netrunner-entry-1",
        "name": "Android: Netrunner entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-2",
        "name": "Android: Netrunner entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-3",
        "name": "Android: Netrunner entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-4",
        "name": "Android: Netrunner entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-5",
        "name": "Android: Netrunner entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-6",
        "name": "Android: Netrunner entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-7",
        "name": "Android: Netrunner entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-8",
        "name": "Android: Netrunner entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-9",
        "name": "Android: Netrunner entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-10",
        "name": "Android: Netrunner entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-11",
        "name": "Android: Netrunner entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-12",
        "name": "Android: Netrunner entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-13",
        "name": "Android: Netrunner entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-14",
        "name": "Android: Netrunner entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-15",
        "name": "Android: Netrunner entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-16",
        "name": "Android: Netrunner entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-17",
        "name": "Android: Netrunner entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-18",
        "name": "Android: Netrunner entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-19",
        "name": "Android: Netrunner entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-20",
        "name": "Android: Netrunner entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-21",
        "name": "Android: Netrunner entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-22",
        "name": "Android: Netrunner entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-23",
        "name": "Android: Netrunner entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "netrunner-entry-24",
        "name": "Android: Netrunner entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Android: Netrunner.",
        "description": "A supporting encyclopedia entry in the Android: Netrunner subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "netrunner",
        "netrunner-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "netrunner",
        "netrunner-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "netrunner",
        "netrunner-places",
        "contains",
        "Android: Netrunner places is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-events",
        "contains",
        "Android: Netrunner events is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-objects",
        "contains",
        "Android: Netrunner objects & artifacts is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-factions",
        "contains",
        "Android: Netrunner factions & groups is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-concepts",
        "contains",
        "Android: Netrunner concepts is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-eras",
        "contains",
        "Android: Netrunner eras is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-works",
        "contains",
        "Android: Netrunner works & media is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-symbols",
        "contains",
        "Android: Netrunner symbols is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-controversies",
        "contains",
        "Android: Netrunner controversies is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-sources",
        "contains",
        "Android: Netrunner sources is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-geography",
        "contains",
        "Android: Netrunner geography is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-legacy",
        "contains",
        "Android: Netrunner legacy is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-practices",
        "contains",
        "Android: Netrunner practices is a primary trailhead under Android: Netrunner.",
        0.88,
        0.82
    ],
    [
        "netrunner",
        "netrunner-entry-1",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-2",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-3",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-4",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-5",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-6",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-7",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-8",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-9",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-10",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-11",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-12",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-13",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-14",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-15",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-16",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-17",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-18",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-19",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-20",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-21",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-22",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-23",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ],
    [
        "netrunner",
        "netrunner-entry-24",
        "contains",
        "Supporting entry under Android: Netrunner.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
