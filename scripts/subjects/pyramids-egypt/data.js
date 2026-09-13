/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pyramids-egypt",
        "name": "Egyptian pyramids",
        "type": "topic",
        "short_description": "Giza complex, tomb engineering, and the stone mountains of pharaonic power.",
        "description": "Giza complex, tomb engineering, and the stone mountains of pharaonic power. This Ton-o-Lore subject maps people, places, events, and ideas tied to Egyptian pyramids so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "pyramids-egypt-figures",
        "name": "Egyptian pyramids figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Egyptian pyramids.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Egyptian pyramids."
    },
    {
        "slug": "pyramids-egypt-world",
        "name": "Egyptian pyramids world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Egyptian pyramids.",
        "description": "Geography, institutions, and periodization that give Egyptian pyramids its encyclopedia shape."
    },
    {
        "slug": "pyramids-egypt-places",
        "name": "Egyptian pyramids places",
        "type": "place",
        "short_description": "Locations and geographies that frame Egyptian pyramids.",
        "description": "Places, regions, and built sites that give Egyptian pyramids its map — where events and figures concentrate."
    },
    {
        "slug": "pyramids-egypt-events",
        "name": "Egyptian pyramids events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Egyptian pyramids.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Egyptian pyramids timeline."
    },
    {
        "slug": "pyramids-egypt-objects",
        "name": "Egyptian pyramids objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Egyptian pyramids.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Egyptian pyramids."
    },
    {
        "slug": "pyramids-egypt-factions",
        "name": "Egyptian pyramids factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Egyptian pyramids.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Egyptian pyramids."
    },
    {
        "slug": "pyramids-egypt-concepts",
        "name": "Egyptian pyramids concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Egyptian pyramids.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Egyptian pyramids readable as a lore graph."
    },
    {
        "slug": "pyramids-egypt-eras",
        "name": "Egyptian pyramids eras",
        "type": "event",
        "short_description": "Periodization for Egyptian pyramids.",
        "description": "Named eras and phases that help readers track how Egyptian pyramids changes across time."
    },
    {
        "slug": "pyramids-egypt-works",
        "name": "Egyptian pyramids works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Egyptian pyramids.",
        "description": "Primary works and adaptations through which most audiences encounter Egyptian pyramids."
    },
    {
        "slug": "pyramids-egypt-symbols",
        "name": "Egyptian pyramids symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Egyptian pyramids.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Egyptian pyramids."
    },
    {
        "slug": "pyramids-egypt-controversies",
        "name": "Egyptian pyramids controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Egyptian pyramids.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Egyptian pyramids argumentative."
    },
    {
        "slug": "pyramids-egypt-sources",
        "name": "Egyptian pyramids sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Egyptian pyramids.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Egyptian pyramids."
    },
    {
        "slug": "pyramids-egypt-geography",
        "name": "Egyptian pyramids geography",
        "type": "place",
        "short_description": "Broader geographic framing for Egyptian pyramids.",
        "description": "Regions, routes, and spatial systems that situate Egyptian pyramids beyond single named places."
    },
    {
        "slug": "pyramids-egypt-legacy",
        "name": "Egyptian pyramids legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Egyptian pyramids.",
        "description": "How Egyptian pyramids continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pyramids-egypt-practices",
        "name": "Egyptian pyramids practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Egyptian pyramids.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Egyptian pyramids."
    },
    {
        "slug": "pyramids-egypt-entry-1",
        "name": "Egyptian pyramids entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-2",
        "name": "Egyptian pyramids entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-3",
        "name": "Egyptian pyramids entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-4",
        "name": "Egyptian pyramids entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-5",
        "name": "Egyptian pyramids entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-6",
        "name": "Egyptian pyramids entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-7",
        "name": "Egyptian pyramids entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-8",
        "name": "Egyptian pyramids entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-9",
        "name": "Egyptian pyramids entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-10",
        "name": "Egyptian pyramids entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-11",
        "name": "Egyptian pyramids entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-12",
        "name": "Egyptian pyramids entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-13",
        "name": "Egyptian pyramids entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-14",
        "name": "Egyptian pyramids entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-15",
        "name": "Egyptian pyramids entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-16",
        "name": "Egyptian pyramids entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-17",
        "name": "Egyptian pyramids entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-18",
        "name": "Egyptian pyramids entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-19",
        "name": "Egyptian pyramids entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-20",
        "name": "Egyptian pyramids entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-21",
        "name": "Egyptian pyramids entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-22",
        "name": "Egyptian pyramids entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-23",
        "name": "Egyptian pyramids entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pyramids-egypt-entry-24",
        "name": "Egyptian pyramids entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Egyptian pyramids.",
        "description": "A supporting encyclopedia entry in the Egyptian pyramids subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pyramids-egypt",
        "pyramids-egypt-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-places",
        "contains",
        "Egyptian pyramids places is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-events",
        "contains",
        "Egyptian pyramids events is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-objects",
        "contains",
        "Egyptian pyramids objects & artifacts is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-factions",
        "contains",
        "Egyptian pyramids factions & groups is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-concepts",
        "contains",
        "Egyptian pyramids concepts is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-eras",
        "contains",
        "Egyptian pyramids eras is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-works",
        "contains",
        "Egyptian pyramids works & media is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-symbols",
        "contains",
        "Egyptian pyramids symbols is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-controversies",
        "contains",
        "Egyptian pyramids controversies is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-sources",
        "contains",
        "Egyptian pyramids sources is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-geography",
        "contains",
        "Egyptian pyramids geography is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-legacy",
        "contains",
        "Egyptian pyramids legacy is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-practices",
        "contains",
        "Egyptian pyramids practices is a primary trailhead under Egyptian pyramids.",
        0.88,
        0.82
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-1",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-2",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-3",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-4",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-5",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-6",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-7",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-8",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-9",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-10",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-11",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-12",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-13",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-14",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-15",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-16",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-17",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-18",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-19",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-20",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-21",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-22",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-23",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ],
    [
        "pyramids-egypt",
        "pyramids-egypt-entry-24",
        "contains",
        "Supporting entry under Egyptian pyramids.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
