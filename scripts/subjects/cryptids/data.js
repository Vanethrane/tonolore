/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cryptids",
        "name": "Cryptids",
        "type": "topic",
        "short_description": "Bigfoot, Nessie, Mothman, and regional cryptid legends — sightings, investigators, and hoaxes.",
        "description": "Bigfoot, Nessie, Mothman, and regional cryptid legends — sightings, investigators, and hoaxes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cryptids so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "cryptids-figures",
        "name": "Cryptids figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cryptids.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cryptids."
    },
    {
        "slug": "cryptids-world",
        "name": "Cryptids world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cryptids.",
        "description": "Geography, institutions, and periodization that give Cryptids its encyclopedia shape."
    },
    {
        "slug": "cryptids-places",
        "name": "Cryptids places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cryptids.",
        "description": "Places, regions, and built sites that give Cryptids its map — where events and figures concentrate."
    },
    {
        "slug": "cryptids-events",
        "name": "Cryptids events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cryptids.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cryptids timeline."
    },
    {
        "slug": "cryptids-objects",
        "name": "Cryptids objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cryptids.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cryptids."
    },
    {
        "slug": "cryptids-factions",
        "name": "Cryptids factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cryptids.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cryptids."
    },
    {
        "slug": "cryptids-concepts",
        "name": "Cryptids concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cryptids.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cryptids readable as a lore graph."
    },
    {
        "slug": "cryptids-eras",
        "name": "Cryptids eras",
        "type": "event",
        "short_description": "Periodization for Cryptids.",
        "description": "Named eras and phases that help readers track how Cryptids changes across time."
    },
    {
        "slug": "cryptids-works",
        "name": "Cryptids works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cryptids.",
        "description": "Primary works and adaptations through which most audiences encounter Cryptids."
    },
    {
        "slug": "cryptids-symbols",
        "name": "Cryptids symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cryptids.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cryptids."
    },
    {
        "slug": "cryptids-controversies",
        "name": "Cryptids controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cryptids.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cryptids argumentative."
    },
    {
        "slug": "cryptids-sources",
        "name": "Cryptids sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cryptids.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cryptids."
    },
    {
        "slug": "cryptids-geography",
        "name": "Cryptids geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cryptids.",
        "description": "Regions, routes, and spatial systems that situate Cryptids beyond single named places."
    },
    {
        "slug": "cryptids-legacy",
        "name": "Cryptids legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cryptids.",
        "description": "How Cryptids continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cryptids-practices",
        "name": "Cryptids practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cryptids.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cryptids."
    },
    {
        "slug": "cryptids-entry-1",
        "name": "Cryptids entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-2",
        "name": "Cryptids entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-3",
        "name": "Cryptids entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-4",
        "name": "Cryptids entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-5",
        "name": "Cryptids entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-6",
        "name": "Cryptids entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-7",
        "name": "Cryptids entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-8",
        "name": "Cryptids entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-9",
        "name": "Cryptids entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-10",
        "name": "Cryptids entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-11",
        "name": "Cryptids entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-12",
        "name": "Cryptids entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-13",
        "name": "Cryptids entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-14",
        "name": "Cryptids entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-15",
        "name": "Cryptids entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-16",
        "name": "Cryptids entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-17",
        "name": "Cryptids entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-18",
        "name": "Cryptids entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-19",
        "name": "Cryptids entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-20",
        "name": "Cryptids entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-21",
        "name": "Cryptids entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-22",
        "name": "Cryptids entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-23",
        "name": "Cryptids entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cryptids-entry-24",
        "name": "Cryptids entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cryptids.",
        "description": "A supporting encyclopedia entry in the Cryptids subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cryptids",
        "cryptids-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cryptids",
        "cryptids-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cryptids",
        "cryptids-places",
        "contains",
        "Cryptids places is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-events",
        "contains",
        "Cryptids events is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-objects",
        "contains",
        "Cryptids objects & artifacts is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-factions",
        "contains",
        "Cryptids factions & groups is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-concepts",
        "contains",
        "Cryptids concepts is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-eras",
        "contains",
        "Cryptids eras is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-works",
        "contains",
        "Cryptids works & media is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-symbols",
        "contains",
        "Cryptids symbols is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-controversies",
        "contains",
        "Cryptids controversies is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-sources",
        "contains",
        "Cryptids sources is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-geography",
        "contains",
        "Cryptids geography is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-legacy",
        "contains",
        "Cryptids legacy is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-practices",
        "contains",
        "Cryptids practices is a primary trailhead under Cryptids.",
        0.88,
        0.82
    ],
    [
        "cryptids",
        "cryptids-entry-1",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-2",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-3",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-4",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-5",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-6",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-7",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-8",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-9",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-10",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-11",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-12",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-13",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-14",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-15",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-16",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-17",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-18",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-19",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-20",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-21",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-22",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-23",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ],
    [
        "cryptids",
        "cryptids-entry-24",
        "contains",
        "Supporting entry under Cryptids.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
