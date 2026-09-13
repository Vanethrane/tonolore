/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "astronomy-observatories",
        "name": "Astronomy & observatories",
        "type": "topic",
        "short_description": "Telescopes, surveys, catalogs, and the institutions that chart the night sky.",
        "description": "Telescopes, surveys, catalogs, and the institutions that chart the night sky. This Ton-o-Lore subject maps people, places, events, and ideas tied to Astronomy & observatories so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "astronomy-observatories-figures",
        "name": "Astronomy & observatories figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Astronomy & observatories.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Astronomy & observatories."
    },
    {
        "slug": "astronomy-observatories-world",
        "name": "Astronomy & observatories world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Astronomy & observatories.",
        "description": "Geography, institutions, and periodization that give Astronomy & observatories its encyclopedia shape."
    },
    {
        "slug": "astronomy-observatories-places",
        "name": "Astronomy & observatories places",
        "type": "place",
        "short_description": "Locations and geographies that frame Astronomy & observatories.",
        "description": "Places, regions, and built sites that give Astronomy & observatories its map — where events and figures concentrate."
    },
    {
        "slug": "astronomy-observatories-events",
        "name": "Astronomy & observatories events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Astronomy & observatories.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Astronomy & observatories timeline."
    },
    {
        "slug": "astronomy-observatories-objects",
        "name": "Astronomy & observatories objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Astronomy & observatories.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Astronomy & observatories."
    },
    {
        "slug": "astronomy-observatories-factions",
        "name": "Astronomy & observatories factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Astronomy & observatories.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Astronomy & observatories."
    },
    {
        "slug": "astronomy-observatories-concepts",
        "name": "Astronomy & observatories concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Astronomy & observatories.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Astronomy & observatories readable as a lore graph."
    },
    {
        "slug": "astronomy-observatories-eras",
        "name": "Astronomy & observatories eras",
        "type": "event",
        "short_description": "Periodization for Astronomy & observatories.",
        "description": "Named eras and phases that help readers track how Astronomy & observatories changes across time."
    },
    {
        "slug": "astronomy-observatories-works",
        "name": "Astronomy & observatories works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Astronomy & observatories.",
        "description": "Primary works and adaptations through which most audiences encounter Astronomy & observatories."
    },
    {
        "slug": "astronomy-observatories-symbols",
        "name": "Astronomy & observatories symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Astronomy & observatories.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Astronomy & observatories."
    },
    {
        "slug": "astronomy-observatories-controversies",
        "name": "Astronomy & observatories controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Astronomy & observatories.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Astronomy & observatories argumentative."
    },
    {
        "slug": "astronomy-observatories-sources",
        "name": "Astronomy & observatories sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Astronomy & observatories.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Astronomy & observatories."
    },
    {
        "slug": "astronomy-observatories-geography",
        "name": "Astronomy & observatories geography",
        "type": "place",
        "short_description": "Broader geographic framing for Astronomy & observatories.",
        "description": "Regions, routes, and spatial systems that situate Astronomy & observatories beyond single named places."
    },
    {
        "slug": "astronomy-observatories-legacy",
        "name": "Astronomy & observatories legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Astronomy & observatories.",
        "description": "How Astronomy & observatories continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "astronomy-observatories-practices",
        "name": "Astronomy & observatories practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Astronomy & observatories.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Astronomy & observatories."
    },
    {
        "slug": "astronomy-observatories-entry-1",
        "name": "Astronomy & observatories entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-2",
        "name": "Astronomy & observatories entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-3",
        "name": "Astronomy & observatories entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-4",
        "name": "Astronomy & observatories entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-5",
        "name": "Astronomy & observatories entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-6",
        "name": "Astronomy & observatories entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-7",
        "name": "Astronomy & observatories entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-8",
        "name": "Astronomy & observatories entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-9",
        "name": "Astronomy & observatories entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-10",
        "name": "Astronomy & observatories entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-11",
        "name": "Astronomy & observatories entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-12",
        "name": "Astronomy & observatories entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-13",
        "name": "Astronomy & observatories entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-14",
        "name": "Astronomy & observatories entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-15",
        "name": "Astronomy & observatories entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-16",
        "name": "Astronomy & observatories entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-17",
        "name": "Astronomy & observatories entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-18",
        "name": "Astronomy & observatories entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-19",
        "name": "Astronomy & observatories entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-20",
        "name": "Astronomy & observatories entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-21",
        "name": "Astronomy & observatories entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-22",
        "name": "Astronomy & observatories entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-23",
        "name": "Astronomy & observatories entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "astronomy-observatories-entry-24",
        "name": "Astronomy & observatories entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Astronomy & observatories.",
        "description": "A supporting encyclopedia entry in the Astronomy & observatories subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "astronomy-observatories",
        "astronomy-observatories-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-places",
        "contains",
        "Astronomy & observatories places is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-events",
        "contains",
        "Astronomy & observatories events is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-objects",
        "contains",
        "Astronomy & observatories objects & artifacts is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-factions",
        "contains",
        "Astronomy & observatories factions & groups is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-concepts",
        "contains",
        "Astronomy & observatories concepts is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-eras",
        "contains",
        "Astronomy & observatories eras is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-works",
        "contains",
        "Astronomy & observatories works & media is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-symbols",
        "contains",
        "Astronomy & observatories symbols is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-controversies",
        "contains",
        "Astronomy & observatories controversies is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-sources",
        "contains",
        "Astronomy & observatories sources is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-geography",
        "contains",
        "Astronomy & observatories geography is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-legacy",
        "contains",
        "Astronomy & observatories legacy is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-practices",
        "contains",
        "Astronomy & observatories practices is a primary trailhead under Astronomy & observatories.",
        0.88,
        0.82
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-1",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-2",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-3",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-4",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-5",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-6",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-7",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-8",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-9",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-10",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-11",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-12",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-13",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-14",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-15",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-16",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-17",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-18",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-19",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-20",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-21",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-22",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-23",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ],
    [
        "astronomy-observatories",
        "astronomy-observatories-entry-24",
        "contains",
        "Supporting entry under Astronomy & observatories.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
