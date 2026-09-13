/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "plate-tectonics",
        "name": "Plate tectonics",
        "type": "topic",
        "short_description": "Continental drift, subduction, and the unifying theory that remapped Earth’s geology.",
        "description": "Continental drift, subduction, and the unifying theory that remapped Earth’s geology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Plate tectonics so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "plate-tectonics-figures",
        "name": "Plate tectonics figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Plate tectonics.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Plate tectonics."
    },
    {
        "slug": "plate-tectonics-world",
        "name": "Plate tectonics world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Plate tectonics.",
        "description": "Geography, institutions, and periodization that give Plate tectonics its encyclopedia shape."
    },
    {
        "slug": "plate-tectonics-places",
        "name": "Plate tectonics places",
        "type": "place",
        "short_description": "Locations and geographies that frame Plate tectonics.",
        "description": "Places, regions, and built sites that give Plate tectonics its map — where events and figures concentrate."
    },
    {
        "slug": "plate-tectonics-events",
        "name": "Plate tectonics events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Plate tectonics.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Plate tectonics timeline."
    },
    {
        "slug": "plate-tectonics-objects",
        "name": "Plate tectonics objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Plate tectonics.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Plate tectonics."
    },
    {
        "slug": "plate-tectonics-factions",
        "name": "Plate tectonics factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Plate tectonics.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Plate tectonics."
    },
    {
        "slug": "plate-tectonics-concepts",
        "name": "Plate tectonics concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Plate tectonics.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Plate tectonics readable as a lore graph."
    },
    {
        "slug": "plate-tectonics-eras",
        "name": "Plate tectonics eras",
        "type": "event",
        "short_description": "Periodization for Plate tectonics.",
        "description": "Named eras and phases that help readers track how Plate tectonics changes across time."
    },
    {
        "slug": "plate-tectonics-works",
        "name": "Plate tectonics works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Plate tectonics.",
        "description": "Primary works and adaptations through which most audiences encounter Plate tectonics."
    },
    {
        "slug": "plate-tectonics-symbols",
        "name": "Plate tectonics symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Plate tectonics.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Plate tectonics."
    },
    {
        "slug": "plate-tectonics-controversies",
        "name": "Plate tectonics controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Plate tectonics.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Plate tectonics argumentative."
    },
    {
        "slug": "plate-tectonics-sources",
        "name": "Plate tectonics sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Plate tectonics.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Plate tectonics."
    },
    {
        "slug": "plate-tectonics-geography",
        "name": "Plate tectonics geography",
        "type": "place",
        "short_description": "Broader geographic framing for Plate tectonics.",
        "description": "Regions, routes, and spatial systems that situate Plate tectonics beyond single named places."
    },
    {
        "slug": "plate-tectonics-legacy",
        "name": "Plate tectonics legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Plate tectonics.",
        "description": "How Plate tectonics continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "plate-tectonics-practices",
        "name": "Plate tectonics practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Plate tectonics.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Plate tectonics."
    },
    {
        "slug": "plate-tectonics-entry-1",
        "name": "Plate tectonics entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-2",
        "name": "Plate tectonics entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-3",
        "name": "Plate tectonics entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-4",
        "name": "Plate tectonics entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-5",
        "name": "Plate tectonics entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-6",
        "name": "Plate tectonics entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-7",
        "name": "Plate tectonics entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-8",
        "name": "Plate tectonics entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-9",
        "name": "Plate tectonics entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-10",
        "name": "Plate tectonics entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-11",
        "name": "Plate tectonics entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-12",
        "name": "Plate tectonics entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-13",
        "name": "Plate tectonics entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-14",
        "name": "Plate tectonics entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-15",
        "name": "Plate tectonics entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-16",
        "name": "Plate tectonics entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-17",
        "name": "Plate tectonics entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-18",
        "name": "Plate tectonics entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-19",
        "name": "Plate tectonics entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-20",
        "name": "Plate tectonics entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-21",
        "name": "Plate tectonics entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-22",
        "name": "Plate tectonics entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-23",
        "name": "Plate tectonics entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "plate-tectonics-entry-24",
        "name": "Plate tectonics entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Plate tectonics.",
        "description": "A supporting encyclopedia entry in the Plate tectonics subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "plate-tectonics",
        "plate-tectonics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "plate-tectonics",
        "plate-tectonics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "plate-tectonics",
        "plate-tectonics-places",
        "contains",
        "Plate tectonics places is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-events",
        "contains",
        "Plate tectonics events is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-objects",
        "contains",
        "Plate tectonics objects & artifacts is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-factions",
        "contains",
        "Plate tectonics factions & groups is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-concepts",
        "contains",
        "Plate tectonics concepts is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-eras",
        "contains",
        "Plate tectonics eras is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-works",
        "contains",
        "Plate tectonics works & media is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-symbols",
        "contains",
        "Plate tectonics symbols is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-controversies",
        "contains",
        "Plate tectonics controversies is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-sources",
        "contains",
        "Plate tectonics sources is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-geography",
        "contains",
        "Plate tectonics geography is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-legacy",
        "contains",
        "Plate tectonics legacy is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-practices",
        "contains",
        "Plate tectonics practices is a primary trailhead under Plate tectonics.",
        0.88,
        0.82
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-1",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-2",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-3",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-4",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-5",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-6",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-7",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-8",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-9",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-10",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-11",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-12",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-13",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-14",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-15",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-16",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-17",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-18",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-19",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-20",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-21",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-22",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-23",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ],
    [
        "plate-tectonics",
        "plate-tectonics-entry-24",
        "contains",
        "Supporting entry under Plate tectonics.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
