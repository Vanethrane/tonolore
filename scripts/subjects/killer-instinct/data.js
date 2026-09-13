/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "killer-instinct",
        "name": "Killer Instinct",
        "type": "topic",
        "short_description": "Combo breakers, Ultra combos, and the Midway-to-Xbox fighter with theatrical finishers.",
        "description": "Combo breakers, Ultra combos, and the Midway-to-Xbox fighter with theatrical finishers. This Ton-o-Lore subject maps people, places, events, and ideas tied to Killer Instinct so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "killer-instinct-figures",
        "name": "Killer Instinct figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Killer Instinct.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Killer Instinct."
    },
    {
        "slug": "killer-instinct-world",
        "name": "Killer Instinct world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Killer Instinct.",
        "description": "Geography, institutions, and periodization that give Killer Instinct its encyclopedia shape."
    },
    {
        "slug": "killer-instinct-places",
        "name": "Killer Instinct places",
        "type": "place",
        "short_description": "Locations and geographies that frame Killer Instinct.",
        "description": "Places, regions, and built sites that give Killer Instinct its map — where events and figures concentrate."
    },
    {
        "slug": "killer-instinct-events",
        "name": "Killer Instinct events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Killer Instinct.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Killer Instinct timeline."
    },
    {
        "slug": "killer-instinct-objects",
        "name": "Killer Instinct objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Killer Instinct.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Killer Instinct."
    },
    {
        "slug": "killer-instinct-factions",
        "name": "Killer Instinct factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Killer Instinct.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Killer Instinct."
    },
    {
        "slug": "killer-instinct-concepts",
        "name": "Killer Instinct concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Killer Instinct.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Killer Instinct readable as a lore graph."
    },
    {
        "slug": "killer-instinct-eras",
        "name": "Killer Instinct eras",
        "type": "event",
        "short_description": "Periodization for Killer Instinct.",
        "description": "Named eras and phases that help readers track how Killer Instinct changes across time."
    },
    {
        "slug": "killer-instinct-works",
        "name": "Killer Instinct works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Killer Instinct.",
        "description": "Primary works and adaptations through which most audiences encounter Killer Instinct."
    },
    {
        "slug": "killer-instinct-symbols",
        "name": "Killer Instinct symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Killer Instinct.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Killer Instinct."
    },
    {
        "slug": "killer-instinct-controversies",
        "name": "Killer Instinct controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Killer Instinct.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Killer Instinct argumentative."
    },
    {
        "slug": "killer-instinct-sources",
        "name": "Killer Instinct sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Killer Instinct.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Killer Instinct."
    },
    {
        "slug": "killer-instinct-geography",
        "name": "Killer Instinct geography",
        "type": "place",
        "short_description": "Broader geographic framing for Killer Instinct.",
        "description": "Regions, routes, and spatial systems that situate Killer Instinct beyond single named places."
    },
    {
        "slug": "killer-instinct-legacy",
        "name": "Killer Instinct legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Killer Instinct.",
        "description": "How Killer Instinct continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "killer-instinct-practices",
        "name": "Killer Instinct practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Killer Instinct.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Killer Instinct."
    },
    {
        "slug": "killer-instinct-entry-1",
        "name": "Killer Instinct entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-2",
        "name": "Killer Instinct entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-3",
        "name": "Killer Instinct entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-4",
        "name": "Killer Instinct entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-5",
        "name": "Killer Instinct entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-6",
        "name": "Killer Instinct entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-7",
        "name": "Killer Instinct entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-8",
        "name": "Killer Instinct entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-9",
        "name": "Killer Instinct entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-10",
        "name": "Killer Instinct entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-11",
        "name": "Killer Instinct entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-12",
        "name": "Killer Instinct entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-13",
        "name": "Killer Instinct entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-14",
        "name": "Killer Instinct entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-15",
        "name": "Killer Instinct entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-16",
        "name": "Killer Instinct entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-17",
        "name": "Killer Instinct entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-18",
        "name": "Killer Instinct entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-19",
        "name": "Killer Instinct entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-20",
        "name": "Killer Instinct entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-21",
        "name": "Killer Instinct entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-22",
        "name": "Killer Instinct entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-23",
        "name": "Killer Instinct entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "killer-instinct-entry-24",
        "name": "Killer Instinct entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Killer Instinct.",
        "description": "A supporting encyclopedia entry in the Killer Instinct subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "killer-instinct",
        "killer-instinct-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "killer-instinct",
        "killer-instinct-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "killer-instinct",
        "killer-instinct-places",
        "contains",
        "Killer Instinct places is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-events",
        "contains",
        "Killer Instinct events is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-objects",
        "contains",
        "Killer Instinct objects & artifacts is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-factions",
        "contains",
        "Killer Instinct factions & groups is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-concepts",
        "contains",
        "Killer Instinct concepts is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-eras",
        "contains",
        "Killer Instinct eras is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-works",
        "contains",
        "Killer Instinct works & media is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-symbols",
        "contains",
        "Killer Instinct symbols is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-controversies",
        "contains",
        "Killer Instinct controversies is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-sources",
        "contains",
        "Killer Instinct sources is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-geography",
        "contains",
        "Killer Instinct geography is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-legacy",
        "contains",
        "Killer Instinct legacy is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-practices",
        "contains",
        "Killer Instinct practices is a primary trailhead under Killer Instinct.",
        0.88,
        0.82
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-1",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-2",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-3",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-4",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-5",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-6",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-7",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-8",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-9",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-10",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-11",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-12",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-13",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-14",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-15",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-16",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-17",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-18",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-19",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-20",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-21",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-22",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-23",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ],
    [
        "killer-instinct",
        "killer-instinct-entry-24",
        "contains",
        "Supporting entry under Killer Instinct.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
