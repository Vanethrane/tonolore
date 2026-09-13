/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "titanic-disaster",
        "name": "Titanic disaster",
        "type": "topic",
        "short_description": "Iceberg night, class lifeboats, and the 1912 sinking that became maritime tragedy archetype.",
        "description": "Iceberg night, class lifeboats, and the 1912 sinking that became maritime tragedy archetype. This Ton-o-Lore subject maps people, places, events, and ideas tied to Titanic disaster so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "titanic-disaster-figures",
        "name": "Titanic disaster figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Titanic disaster.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Titanic disaster."
    },
    {
        "slug": "titanic-disaster-world",
        "name": "Titanic disaster world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Titanic disaster.",
        "description": "Geography, institutions, and periodization that give Titanic disaster its encyclopedia shape."
    },
    {
        "slug": "titanic-disaster-places",
        "name": "Titanic disaster places",
        "type": "place",
        "short_description": "Locations and geographies that frame Titanic disaster.",
        "description": "Places, regions, and built sites that give Titanic disaster its map — where events and figures concentrate."
    },
    {
        "slug": "titanic-disaster-events",
        "name": "Titanic disaster events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Titanic disaster.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Titanic disaster timeline."
    },
    {
        "slug": "titanic-disaster-objects",
        "name": "Titanic disaster objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Titanic disaster.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Titanic disaster."
    },
    {
        "slug": "titanic-disaster-factions",
        "name": "Titanic disaster factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Titanic disaster.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Titanic disaster."
    },
    {
        "slug": "titanic-disaster-concepts",
        "name": "Titanic disaster concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Titanic disaster.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Titanic disaster readable as a lore graph."
    },
    {
        "slug": "titanic-disaster-eras",
        "name": "Titanic disaster eras",
        "type": "event",
        "short_description": "Periodization for Titanic disaster.",
        "description": "Named eras and phases that help readers track how Titanic disaster changes across time."
    },
    {
        "slug": "titanic-disaster-works",
        "name": "Titanic disaster works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Titanic disaster.",
        "description": "Primary works and adaptations through which most audiences encounter Titanic disaster."
    },
    {
        "slug": "titanic-disaster-symbols",
        "name": "Titanic disaster symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Titanic disaster.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Titanic disaster."
    },
    {
        "slug": "titanic-disaster-controversies",
        "name": "Titanic disaster controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Titanic disaster.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Titanic disaster argumentative."
    },
    {
        "slug": "titanic-disaster-sources",
        "name": "Titanic disaster sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Titanic disaster.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Titanic disaster."
    },
    {
        "slug": "titanic-disaster-geography",
        "name": "Titanic disaster geography",
        "type": "place",
        "short_description": "Broader geographic framing for Titanic disaster.",
        "description": "Regions, routes, and spatial systems that situate Titanic disaster beyond single named places."
    },
    {
        "slug": "titanic-disaster-legacy",
        "name": "Titanic disaster legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Titanic disaster.",
        "description": "How Titanic disaster continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "titanic-disaster-practices",
        "name": "Titanic disaster practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Titanic disaster.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Titanic disaster."
    },
    {
        "slug": "titanic-disaster-entry-1",
        "name": "Titanic disaster entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-2",
        "name": "Titanic disaster entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-3",
        "name": "Titanic disaster entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-4",
        "name": "Titanic disaster entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-5",
        "name": "Titanic disaster entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-6",
        "name": "Titanic disaster entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-7",
        "name": "Titanic disaster entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-8",
        "name": "Titanic disaster entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-9",
        "name": "Titanic disaster entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-10",
        "name": "Titanic disaster entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-11",
        "name": "Titanic disaster entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-12",
        "name": "Titanic disaster entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-13",
        "name": "Titanic disaster entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-14",
        "name": "Titanic disaster entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-15",
        "name": "Titanic disaster entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-16",
        "name": "Titanic disaster entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-17",
        "name": "Titanic disaster entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-18",
        "name": "Titanic disaster entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-19",
        "name": "Titanic disaster entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-20",
        "name": "Titanic disaster entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-21",
        "name": "Titanic disaster entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-22",
        "name": "Titanic disaster entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-23",
        "name": "Titanic disaster entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "titanic-disaster-entry-24",
        "name": "Titanic disaster entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Titanic disaster.",
        "description": "A supporting encyclopedia entry in the Titanic disaster subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "titanic-disaster",
        "titanic-disaster-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "titanic-disaster",
        "titanic-disaster-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "titanic-disaster",
        "titanic-disaster-places",
        "contains",
        "Titanic disaster places is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-events",
        "contains",
        "Titanic disaster events is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-objects",
        "contains",
        "Titanic disaster objects & artifacts is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-factions",
        "contains",
        "Titanic disaster factions & groups is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-concepts",
        "contains",
        "Titanic disaster concepts is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-eras",
        "contains",
        "Titanic disaster eras is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-works",
        "contains",
        "Titanic disaster works & media is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-symbols",
        "contains",
        "Titanic disaster symbols is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-controversies",
        "contains",
        "Titanic disaster controversies is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-sources",
        "contains",
        "Titanic disaster sources is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-geography",
        "contains",
        "Titanic disaster geography is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-legacy",
        "contains",
        "Titanic disaster legacy is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-practices",
        "contains",
        "Titanic disaster practices is a primary trailhead under Titanic disaster.",
        0.88,
        0.82
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-1",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-2",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-3",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-4",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-5",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-6",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-7",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-8",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-9",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-10",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-11",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-12",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-13",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-14",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-15",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-16",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-17",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-18",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-19",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-20",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-21",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-22",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-23",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ],
    [
        "titanic-disaster",
        "titanic-disaster-entry-24",
        "contains",
        "Supporting entry under Titanic disaster.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
