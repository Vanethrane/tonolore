/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bhopal-disaster",
        "name": "Bhopal disaster",
        "type": "topic",
        "short_description": "1984 gas leak, Union Carbide, and the industrial catastrophe that redefined chemical risk.",
        "description": "1984 gas leak, Union Carbide, and the industrial catastrophe that redefined chemical risk. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bhopal disaster so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "bhopal-disaster-figures",
        "name": "Bhopal disaster figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bhopal disaster.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bhopal disaster."
    },
    {
        "slug": "bhopal-disaster-world",
        "name": "Bhopal disaster world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bhopal disaster.",
        "description": "Geography, institutions, and periodization that give Bhopal disaster its encyclopedia shape."
    },
    {
        "slug": "bhopal-disaster-places",
        "name": "Bhopal disaster places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bhopal disaster.",
        "description": "Places, regions, and built sites that give Bhopal disaster its map — where events and figures concentrate."
    },
    {
        "slug": "bhopal-disaster-events",
        "name": "Bhopal disaster events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bhopal disaster.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bhopal disaster timeline."
    },
    {
        "slug": "bhopal-disaster-objects",
        "name": "Bhopal disaster objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bhopal disaster.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bhopal disaster."
    },
    {
        "slug": "bhopal-disaster-factions",
        "name": "Bhopal disaster factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bhopal disaster.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bhopal disaster."
    },
    {
        "slug": "bhopal-disaster-concepts",
        "name": "Bhopal disaster concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bhopal disaster.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bhopal disaster readable as a lore graph."
    },
    {
        "slug": "bhopal-disaster-eras",
        "name": "Bhopal disaster eras",
        "type": "event",
        "short_description": "Periodization for Bhopal disaster.",
        "description": "Named eras and phases that help readers track how Bhopal disaster changes across time."
    },
    {
        "slug": "bhopal-disaster-works",
        "name": "Bhopal disaster works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bhopal disaster.",
        "description": "Primary works and adaptations through which most audiences encounter Bhopal disaster."
    },
    {
        "slug": "bhopal-disaster-symbols",
        "name": "Bhopal disaster symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bhopal disaster.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bhopal disaster."
    },
    {
        "slug": "bhopal-disaster-controversies",
        "name": "Bhopal disaster controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bhopal disaster.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bhopal disaster argumentative."
    },
    {
        "slug": "bhopal-disaster-sources",
        "name": "Bhopal disaster sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bhopal disaster.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bhopal disaster."
    },
    {
        "slug": "bhopal-disaster-geography",
        "name": "Bhopal disaster geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bhopal disaster.",
        "description": "Regions, routes, and spatial systems that situate Bhopal disaster beyond single named places."
    },
    {
        "slug": "bhopal-disaster-legacy",
        "name": "Bhopal disaster legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bhopal disaster.",
        "description": "How Bhopal disaster continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bhopal-disaster-practices",
        "name": "Bhopal disaster practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bhopal disaster.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bhopal disaster."
    },
    {
        "slug": "bhopal-disaster-entry-1",
        "name": "Bhopal disaster entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-2",
        "name": "Bhopal disaster entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-3",
        "name": "Bhopal disaster entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-4",
        "name": "Bhopal disaster entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-5",
        "name": "Bhopal disaster entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-6",
        "name": "Bhopal disaster entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-7",
        "name": "Bhopal disaster entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-8",
        "name": "Bhopal disaster entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-9",
        "name": "Bhopal disaster entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-10",
        "name": "Bhopal disaster entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-11",
        "name": "Bhopal disaster entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-12",
        "name": "Bhopal disaster entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-13",
        "name": "Bhopal disaster entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-14",
        "name": "Bhopal disaster entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-15",
        "name": "Bhopal disaster entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-16",
        "name": "Bhopal disaster entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-17",
        "name": "Bhopal disaster entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-18",
        "name": "Bhopal disaster entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-19",
        "name": "Bhopal disaster entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-20",
        "name": "Bhopal disaster entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-21",
        "name": "Bhopal disaster entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-22",
        "name": "Bhopal disaster entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-23",
        "name": "Bhopal disaster entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bhopal-disaster-entry-24",
        "name": "Bhopal disaster entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bhopal disaster.",
        "description": "A supporting encyclopedia entry in the Bhopal disaster subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bhopal-disaster",
        "bhopal-disaster-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-places",
        "contains",
        "Bhopal disaster places is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-events",
        "contains",
        "Bhopal disaster events is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-objects",
        "contains",
        "Bhopal disaster objects & artifacts is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-factions",
        "contains",
        "Bhopal disaster factions & groups is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-concepts",
        "contains",
        "Bhopal disaster concepts is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-eras",
        "contains",
        "Bhopal disaster eras is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-works",
        "contains",
        "Bhopal disaster works & media is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-symbols",
        "contains",
        "Bhopal disaster symbols is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-controversies",
        "contains",
        "Bhopal disaster controversies is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-sources",
        "contains",
        "Bhopal disaster sources is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-geography",
        "contains",
        "Bhopal disaster geography is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-legacy",
        "contains",
        "Bhopal disaster legacy is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-practices",
        "contains",
        "Bhopal disaster practices is a primary trailhead under Bhopal disaster.",
        0.88,
        0.82
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-1",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-2",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-3",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-4",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-5",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-6",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-7",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-8",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-9",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-10",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-11",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-12",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-13",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-14",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-15",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-16",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-17",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-18",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-19",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-20",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-21",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-22",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-23",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ],
    [
        "bhopal-disaster",
        "bhopal-disaster-entry-24",
        "contains",
        "Supporting entry under Bhopal disaster.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
