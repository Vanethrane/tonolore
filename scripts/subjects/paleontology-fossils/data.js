/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "paleontology-fossils",
        "name": "Paleontology & fossils",
        "type": "topic",
        "short_description": "Excavations, deep time, and the fossil record beyond dinosaurs alone.",
        "description": "Excavations, deep time, and the fossil record beyond dinosaurs alone. This Ton-o-Lore subject maps people, places, events, and ideas tied to Paleontology & fossils so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "paleontology-fossils-figures",
        "name": "Paleontology & fossils figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Paleontology & fossils.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Paleontology & fossils."
    },
    {
        "slug": "paleontology-fossils-world",
        "name": "Paleontology & fossils world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Paleontology & fossils.",
        "description": "Geography, institutions, and periodization that give Paleontology & fossils its encyclopedia shape."
    },
    {
        "slug": "paleontology-fossils-places",
        "name": "Paleontology & fossils places",
        "type": "place",
        "short_description": "Locations and geographies that frame Paleontology & fossils.",
        "description": "Places, regions, and built sites that give Paleontology & fossils its map — where events and figures concentrate."
    },
    {
        "slug": "paleontology-fossils-events",
        "name": "Paleontology & fossils events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Paleontology & fossils.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Paleontology & fossils timeline."
    },
    {
        "slug": "paleontology-fossils-objects",
        "name": "Paleontology & fossils objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Paleontology & fossils.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Paleontology & fossils."
    },
    {
        "slug": "paleontology-fossils-factions",
        "name": "Paleontology & fossils factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Paleontology & fossils.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Paleontology & fossils."
    },
    {
        "slug": "paleontology-fossils-concepts",
        "name": "Paleontology & fossils concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Paleontology & fossils.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Paleontology & fossils readable as a lore graph."
    },
    {
        "slug": "paleontology-fossils-eras",
        "name": "Paleontology & fossils eras",
        "type": "event",
        "short_description": "Periodization for Paleontology & fossils.",
        "description": "Named eras and phases that help readers track how Paleontology & fossils changes across time."
    },
    {
        "slug": "paleontology-fossils-works",
        "name": "Paleontology & fossils works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Paleontology & fossils.",
        "description": "Primary works and adaptations through which most audiences encounter Paleontology & fossils."
    },
    {
        "slug": "paleontology-fossils-symbols",
        "name": "Paleontology & fossils symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Paleontology & fossils.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Paleontology & fossils."
    },
    {
        "slug": "paleontology-fossils-controversies",
        "name": "Paleontology & fossils controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Paleontology & fossils.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Paleontology & fossils argumentative."
    },
    {
        "slug": "paleontology-fossils-sources",
        "name": "Paleontology & fossils sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Paleontology & fossils.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Paleontology & fossils."
    },
    {
        "slug": "paleontology-fossils-geography",
        "name": "Paleontology & fossils geography",
        "type": "place",
        "short_description": "Broader geographic framing for Paleontology & fossils.",
        "description": "Regions, routes, and spatial systems that situate Paleontology & fossils beyond single named places."
    },
    {
        "slug": "paleontology-fossils-legacy",
        "name": "Paleontology & fossils legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Paleontology & fossils.",
        "description": "How Paleontology & fossils continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "paleontology-fossils-practices",
        "name": "Paleontology & fossils practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Paleontology & fossils.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Paleontology & fossils."
    },
    {
        "slug": "paleontology-fossils-entry-1",
        "name": "Paleontology & fossils entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-2",
        "name": "Paleontology & fossils entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-3",
        "name": "Paleontology & fossils entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-4",
        "name": "Paleontology & fossils entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-5",
        "name": "Paleontology & fossils entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-6",
        "name": "Paleontology & fossils entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-7",
        "name": "Paleontology & fossils entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-8",
        "name": "Paleontology & fossils entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-9",
        "name": "Paleontology & fossils entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-10",
        "name": "Paleontology & fossils entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-11",
        "name": "Paleontology & fossils entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-12",
        "name": "Paleontology & fossils entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-13",
        "name": "Paleontology & fossils entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-14",
        "name": "Paleontology & fossils entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-15",
        "name": "Paleontology & fossils entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-16",
        "name": "Paleontology & fossils entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-17",
        "name": "Paleontology & fossils entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-18",
        "name": "Paleontology & fossils entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-19",
        "name": "Paleontology & fossils entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-20",
        "name": "Paleontology & fossils entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-21",
        "name": "Paleontology & fossils entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-22",
        "name": "Paleontology & fossils entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-23",
        "name": "Paleontology & fossils entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "paleontology-fossils-entry-24",
        "name": "Paleontology & fossils entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Paleontology & fossils.",
        "description": "A supporting encyclopedia entry in the Paleontology & fossils subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "paleontology-fossils",
        "paleontology-fossils-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-places",
        "contains",
        "Paleontology & fossils places is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-events",
        "contains",
        "Paleontology & fossils events is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-objects",
        "contains",
        "Paleontology & fossils objects & artifacts is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-factions",
        "contains",
        "Paleontology & fossils factions & groups is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-concepts",
        "contains",
        "Paleontology & fossils concepts is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-eras",
        "contains",
        "Paleontology & fossils eras is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-works",
        "contains",
        "Paleontology & fossils works & media is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-symbols",
        "contains",
        "Paleontology & fossils symbols is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-controversies",
        "contains",
        "Paleontology & fossils controversies is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-sources",
        "contains",
        "Paleontology & fossils sources is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-geography",
        "contains",
        "Paleontology & fossils geography is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-legacy",
        "contains",
        "Paleontology & fossils legacy is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-practices",
        "contains",
        "Paleontology & fossils practices is a primary trailhead under Paleontology & fossils.",
        0.88,
        0.82
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-1",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-2",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-3",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-4",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-5",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-6",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-7",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-8",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-9",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-10",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-11",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-12",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-13",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-14",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-15",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-16",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-17",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-18",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-19",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-20",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-21",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-22",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-23",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ],
    [
        "paleontology-fossils",
        "paleontology-fossils-entry-24",
        "contains",
        "Supporting entry under Paleontology & fossils.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
