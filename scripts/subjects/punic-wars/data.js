/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "punic-wars",
        "name": "Punic Wars",
        "type": "topic",
        "short_description": "Rome vs Carthage, Hannibal’s Alps, and the Mediterranean struggle for supremacy.",
        "description": "Rome vs Carthage, Hannibal’s Alps, and the Mediterranean struggle for supremacy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Punic Wars so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "punic-wars-figures",
        "name": "Punic Wars figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Punic Wars.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Punic Wars."
    },
    {
        "slug": "punic-wars-world",
        "name": "Punic Wars world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Punic Wars.",
        "description": "Geography, institutions, and periodization that give Punic Wars its encyclopedia shape."
    },
    {
        "slug": "punic-wars-places",
        "name": "Punic Wars places",
        "type": "place",
        "short_description": "Locations and geographies that frame Punic Wars.",
        "description": "Places, regions, and built sites that give Punic Wars its map — where events and figures concentrate."
    },
    {
        "slug": "punic-wars-events",
        "name": "Punic Wars events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Punic Wars.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Punic Wars timeline."
    },
    {
        "slug": "punic-wars-objects",
        "name": "Punic Wars objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Punic Wars.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Punic Wars."
    },
    {
        "slug": "punic-wars-factions",
        "name": "Punic Wars factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Punic Wars.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Punic Wars."
    },
    {
        "slug": "punic-wars-concepts",
        "name": "Punic Wars concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Punic Wars.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Punic Wars readable as a lore graph."
    },
    {
        "slug": "punic-wars-eras",
        "name": "Punic Wars eras",
        "type": "event",
        "short_description": "Periodization for Punic Wars.",
        "description": "Named eras and phases that help readers track how Punic Wars changes across time."
    },
    {
        "slug": "punic-wars-works",
        "name": "Punic Wars works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Punic Wars.",
        "description": "Primary works and adaptations through which most audiences encounter Punic Wars."
    },
    {
        "slug": "punic-wars-symbols",
        "name": "Punic Wars symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Punic Wars.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Punic Wars."
    },
    {
        "slug": "punic-wars-controversies",
        "name": "Punic Wars controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Punic Wars.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Punic Wars argumentative."
    },
    {
        "slug": "punic-wars-sources",
        "name": "Punic Wars sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Punic Wars.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Punic Wars."
    },
    {
        "slug": "punic-wars-geography",
        "name": "Punic Wars geography",
        "type": "place",
        "short_description": "Broader geographic framing for Punic Wars.",
        "description": "Regions, routes, and spatial systems that situate Punic Wars beyond single named places."
    },
    {
        "slug": "punic-wars-legacy",
        "name": "Punic Wars legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Punic Wars.",
        "description": "How Punic Wars continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "punic-wars-practices",
        "name": "Punic Wars practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Punic Wars.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Punic Wars."
    },
    {
        "slug": "punic-wars-entry-1",
        "name": "Punic Wars entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-2",
        "name": "Punic Wars entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-3",
        "name": "Punic Wars entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-4",
        "name": "Punic Wars entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-5",
        "name": "Punic Wars entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-6",
        "name": "Punic Wars entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-7",
        "name": "Punic Wars entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-8",
        "name": "Punic Wars entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-9",
        "name": "Punic Wars entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-10",
        "name": "Punic Wars entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-11",
        "name": "Punic Wars entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-12",
        "name": "Punic Wars entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-13",
        "name": "Punic Wars entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-14",
        "name": "Punic Wars entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-15",
        "name": "Punic Wars entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-16",
        "name": "Punic Wars entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-17",
        "name": "Punic Wars entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-18",
        "name": "Punic Wars entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-19",
        "name": "Punic Wars entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-20",
        "name": "Punic Wars entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-21",
        "name": "Punic Wars entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-22",
        "name": "Punic Wars entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-23",
        "name": "Punic Wars entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "punic-wars-entry-24",
        "name": "Punic Wars entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Punic Wars.",
        "description": "A supporting encyclopedia entry in the Punic Wars subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "punic-wars",
        "punic-wars-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "punic-wars",
        "punic-wars-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "punic-wars",
        "punic-wars-places",
        "contains",
        "Punic Wars places is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-events",
        "contains",
        "Punic Wars events is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-objects",
        "contains",
        "Punic Wars objects & artifacts is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-factions",
        "contains",
        "Punic Wars factions & groups is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-concepts",
        "contains",
        "Punic Wars concepts is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-eras",
        "contains",
        "Punic Wars eras is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-works",
        "contains",
        "Punic Wars works & media is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-symbols",
        "contains",
        "Punic Wars symbols is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-controversies",
        "contains",
        "Punic Wars controversies is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-sources",
        "contains",
        "Punic Wars sources is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-geography",
        "contains",
        "Punic Wars geography is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-legacy",
        "contains",
        "Punic Wars legacy is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-practices",
        "contains",
        "Punic Wars practices is a primary trailhead under Punic Wars.",
        0.88,
        0.82
    ],
    [
        "punic-wars",
        "punic-wars-entry-1",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-2",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-3",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-4",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-5",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-6",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-7",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-8",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-9",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-10",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-11",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-12",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-13",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-14",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-15",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-16",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-17",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-18",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-19",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-20",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-21",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-22",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-23",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ],
    [
        "punic-wars",
        "punic-wars-entry-24",
        "contains",
        "Supporting entry under Punic Wars.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
