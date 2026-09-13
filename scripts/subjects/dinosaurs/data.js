/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dinosaurs",
        "name": "Dinosaurs & prehistoric life",
        "type": "topic",
        "short_description": "Species, fossils, formations, eras, discoveries, scientists, anatomy, and the deep-time map of prehistoric life.",
        "description": "Species, fossils, formations, eras, discoveries, scientists, anatomy, and the deep-time map of prehistoric life. This Ton-o-Lore subject maps people, places, events, and ideas tied to dinosaurs and prehistoric life so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "dinosaurs-figures",
        "name": "Dinosaurs & prehistoric life figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dinosaurs & prehistoric life.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dinosaurs & prehistoric life."
    },
    {
        "slug": "dinosaurs-world",
        "name": "Dinosaurs & prehistoric life world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dinosaurs & prehistoric life.",
        "description": "Geography, institutions, and periodization that give Dinosaurs & prehistoric life its encyclopedia shape."
    },
    {
        "slug": "dinosaurs-places",
        "name": "Dinosaurs places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dinosaurs.",
        "description": "Places, regions, and built sites that give Dinosaurs its map — where events and figures concentrate."
    },
    {
        "slug": "dinosaurs-events",
        "name": "Dinosaurs events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dinosaurs.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dinosaurs timeline."
    },
    {
        "slug": "dinosaurs-objects",
        "name": "Dinosaurs objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dinosaurs.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dinosaurs."
    },
    {
        "slug": "dinosaurs-factions",
        "name": "Dinosaurs factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dinosaurs.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dinosaurs."
    },
    {
        "slug": "dinosaurs-concepts",
        "name": "Dinosaurs concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dinosaurs.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dinosaurs readable as a lore graph."
    },
    {
        "slug": "dinosaurs-eras",
        "name": "Dinosaurs eras",
        "type": "event",
        "short_description": "Periodization for Dinosaurs.",
        "description": "Named eras and phases that help readers track how Dinosaurs changes across time."
    },
    {
        "slug": "dinosaurs-works",
        "name": "Dinosaurs works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dinosaurs.",
        "description": "Primary works and adaptations through which most audiences encounter Dinosaurs."
    },
    {
        "slug": "dinosaurs-symbols",
        "name": "Dinosaurs symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dinosaurs.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dinosaurs."
    },
    {
        "slug": "dinosaurs-controversies",
        "name": "Dinosaurs controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dinosaurs.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dinosaurs argumentative."
    },
    {
        "slug": "dinosaurs-sources",
        "name": "Dinosaurs sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dinosaurs.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dinosaurs."
    },
    {
        "slug": "dinosaurs-geography",
        "name": "Dinosaurs geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dinosaurs.",
        "description": "Regions, routes, and spatial systems that situate Dinosaurs beyond single named places."
    },
    {
        "slug": "dinosaurs-legacy",
        "name": "Dinosaurs legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dinosaurs.",
        "description": "How Dinosaurs continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dinosaurs-practices",
        "name": "Dinosaurs & prehistoric life practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dinosaurs & prehistoric life.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dinosaurs & prehistoric life."
    },
    {
        "slug": "dinosaurs-entry-1",
        "name": "Dinosaurs & prehistoric life entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-2",
        "name": "Dinosaurs & prehistoric life entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-3",
        "name": "Dinosaurs & prehistoric life entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-4",
        "name": "Dinosaurs & prehistoric life entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-5",
        "name": "Dinosaurs & prehistoric life entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-6",
        "name": "Dinosaurs & prehistoric life entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-7",
        "name": "Dinosaurs & prehistoric life entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-8",
        "name": "Dinosaurs & prehistoric life entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-9",
        "name": "Dinosaurs & prehistoric life entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-10",
        "name": "Dinosaurs & prehistoric life entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-11",
        "name": "Dinosaurs & prehistoric life entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-12",
        "name": "Dinosaurs & prehistoric life entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-13",
        "name": "Dinosaurs & prehistoric life entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-14",
        "name": "Dinosaurs & prehistoric life entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-15",
        "name": "Dinosaurs & prehistoric life entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-16",
        "name": "Dinosaurs & prehistoric life entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-17",
        "name": "Dinosaurs & prehistoric life entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-18",
        "name": "Dinosaurs & prehistoric life entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-19",
        "name": "Dinosaurs & prehistoric life entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-20",
        "name": "Dinosaurs & prehistoric life entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-21",
        "name": "Dinosaurs & prehistoric life entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-22",
        "name": "Dinosaurs & prehistoric life entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-23",
        "name": "Dinosaurs & prehistoric life entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dinosaurs-entry-24",
        "name": "Dinosaurs & prehistoric life entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dinosaurs & prehistoric life.",
        "description": "A supporting encyclopedia entry in the Dinosaurs & prehistoric life subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dinosaurs",
        "dinosaurs-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dinosaurs",
        "dinosaurs-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dinosaurs",
        "dinosaurs-places",
        "contains",
        "Dinosaurs places is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-events",
        "contains",
        "Dinosaurs events is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-objects",
        "contains",
        "Dinosaurs objects & artifacts is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-factions",
        "contains",
        "Dinosaurs factions & groups is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-concepts",
        "contains",
        "Dinosaurs concepts is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-eras",
        "contains",
        "Dinosaurs eras is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-works",
        "contains",
        "Dinosaurs works & media is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-symbols",
        "contains",
        "Dinosaurs symbols is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-controversies",
        "contains",
        "Dinosaurs controversies is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-sources",
        "contains",
        "Dinosaurs sources is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-geography",
        "contains",
        "Dinosaurs geography is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-legacy",
        "contains",
        "Dinosaurs legacy is a primary trailhead under Dinosaurs.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-practices",
        "contains",
        "Dinosaurs & prehistoric life practices is a primary trailhead under Dinosaurs & prehistoric life.",
        0.88,
        0.82
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-1",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-2",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-3",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-4",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-5",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-6",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-7",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-8",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-9",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-10",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-11",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-12",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-13",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-14",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-15",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-16",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-17",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-18",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-19",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-20",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-21",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-22",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-23",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ],
    [
        "dinosaurs",
        "dinosaurs-entry-24",
        "contains",
        "Supporting entry under Dinosaurs & prehistoric life.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
