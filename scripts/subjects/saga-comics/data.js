/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "saga-comics",
        "name": "Saga",
        "type": "topic",
        "short_description": "Star-crossed parents, bounty hunters, and Vaughan/Staples’ space-opera indie epic.",
        "description": "Star-crossed parents, bounty hunters, and Vaughan/Staples’ space-opera indie epic. This Ton-o-Lore subject maps people, places, events, and ideas tied to Saga so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "saga-comics-figures",
        "name": "Saga figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Saga.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Saga."
    },
    {
        "slug": "saga-comics-world",
        "name": "Saga world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Saga.",
        "description": "Geography, institutions, and periodization that give Saga its encyclopedia shape."
    },
    {
        "slug": "saga-comics-places",
        "name": "Saga places",
        "type": "place",
        "short_description": "Locations and geographies that frame Saga.",
        "description": "Places, regions, and built sites that give Saga its map — where events and figures concentrate."
    },
    {
        "slug": "saga-comics-events",
        "name": "Saga events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Saga.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Saga timeline."
    },
    {
        "slug": "saga-comics-objects",
        "name": "Saga objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Saga.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Saga."
    },
    {
        "slug": "saga-comics-factions",
        "name": "Saga factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Saga.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Saga."
    },
    {
        "slug": "saga-comics-concepts",
        "name": "Saga concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Saga.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Saga readable as a lore graph."
    },
    {
        "slug": "saga-comics-eras",
        "name": "Saga eras",
        "type": "event",
        "short_description": "Periodization for Saga.",
        "description": "Named eras and phases that help readers track how Saga changes across time."
    },
    {
        "slug": "saga-comics-works",
        "name": "Saga works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Saga.",
        "description": "Primary works and adaptations through which most audiences encounter Saga."
    },
    {
        "slug": "saga-comics-symbols",
        "name": "Saga symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Saga.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Saga."
    },
    {
        "slug": "saga-comics-controversies",
        "name": "Saga controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Saga.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Saga argumentative."
    },
    {
        "slug": "saga-comics-sources",
        "name": "Saga sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Saga.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Saga."
    },
    {
        "slug": "saga-comics-geography",
        "name": "Saga geography",
        "type": "place",
        "short_description": "Broader geographic framing for Saga.",
        "description": "Regions, routes, and spatial systems that situate Saga beyond single named places."
    },
    {
        "slug": "saga-comics-legacy",
        "name": "Saga legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Saga.",
        "description": "How Saga continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "saga-comics-practices",
        "name": "Saga practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Saga.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Saga."
    },
    {
        "slug": "saga-comics-entry-1",
        "name": "Saga entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-2",
        "name": "Saga entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-3",
        "name": "Saga entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-4",
        "name": "Saga entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-5",
        "name": "Saga entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-6",
        "name": "Saga entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-7",
        "name": "Saga entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-8",
        "name": "Saga entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-9",
        "name": "Saga entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-10",
        "name": "Saga entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-11",
        "name": "Saga entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-12",
        "name": "Saga entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-13",
        "name": "Saga entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-14",
        "name": "Saga entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-15",
        "name": "Saga entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-16",
        "name": "Saga entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-17",
        "name": "Saga entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-18",
        "name": "Saga entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-19",
        "name": "Saga entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-20",
        "name": "Saga entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-21",
        "name": "Saga entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-22",
        "name": "Saga entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-23",
        "name": "Saga entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "saga-comics-entry-24",
        "name": "Saga entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Saga.",
        "description": "A supporting encyclopedia entry in the Saga subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "saga-comics",
        "saga-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "saga-comics",
        "saga-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "saga-comics",
        "saga-comics-places",
        "contains",
        "Saga places is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-events",
        "contains",
        "Saga events is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-objects",
        "contains",
        "Saga objects & artifacts is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-factions",
        "contains",
        "Saga factions & groups is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-concepts",
        "contains",
        "Saga concepts is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-eras",
        "contains",
        "Saga eras is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-works",
        "contains",
        "Saga works & media is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-symbols",
        "contains",
        "Saga symbols is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-controversies",
        "contains",
        "Saga controversies is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-sources",
        "contains",
        "Saga sources is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-geography",
        "contains",
        "Saga geography is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-legacy",
        "contains",
        "Saga legacy is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-practices",
        "contains",
        "Saga practices is a primary trailhead under Saga.",
        0.88,
        0.82
    ],
    [
        "saga-comics",
        "saga-comics-entry-1",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-2",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-3",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-4",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-5",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-6",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-7",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-8",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-9",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-10",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-11",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-12",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-13",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-14",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-15",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-16",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-17",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-18",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-19",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-20",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-21",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-22",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-23",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ],
    [
        "saga-comics",
        "saga-comics-entry-24",
        "contains",
        "Supporting entry under Saga.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
