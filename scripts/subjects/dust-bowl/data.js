/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dust-bowl",
        "name": "Dust Bowl",
        "type": "topic",
        "short_description": "Black blizzards, Okie migration, and the ecological-agricultural collapse of the 1930s Plains.",
        "description": "Black blizzards, Okie migration, and the ecological-agricultural collapse of the 1930s Plains. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dust Bowl so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "dust-bowl-figures",
        "name": "Dust Bowl figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dust Bowl.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dust Bowl."
    },
    {
        "slug": "dust-bowl-world",
        "name": "Dust Bowl world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dust Bowl.",
        "description": "Geography, institutions, and periodization that give Dust Bowl its encyclopedia shape."
    },
    {
        "slug": "dust-bowl-places",
        "name": "Dust Bowl places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dust Bowl.",
        "description": "Places, regions, and built sites that give Dust Bowl its map — where events and figures concentrate."
    },
    {
        "slug": "dust-bowl-events",
        "name": "Dust Bowl events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dust Bowl.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dust Bowl timeline."
    },
    {
        "slug": "dust-bowl-objects",
        "name": "Dust Bowl objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dust Bowl.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dust Bowl."
    },
    {
        "slug": "dust-bowl-factions",
        "name": "Dust Bowl factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dust Bowl.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dust Bowl."
    },
    {
        "slug": "dust-bowl-concepts",
        "name": "Dust Bowl concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dust Bowl.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dust Bowl readable as a lore graph."
    },
    {
        "slug": "dust-bowl-eras",
        "name": "Dust Bowl eras",
        "type": "event",
        "short_description": "Periodization for Dust Bowl.",
        "description": "Named eras and phases that help readers track how Dust Bowl changes across time."
    },
    {
        "slug": "dust-bowl-works",
        "name": "Dust Bowl works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dust Bowl.",
        "description": "Primary works and adaptations through which most audiences encounter Dust Bowl."
    },
    {
        "slug": "dust-bowl-symbols",
        "name": "Dust Bowl symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dust Bowl.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dust Bowl."
    },
    {
        "slug": "dust-bowl-controversies",
        "name": "Dust Bowl controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dust Bowl.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dust Bowl argumentative."
    },
    {
        "slug": "dust-bowl-sources",
        "name": "Dust Bowl sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dust Bowl.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dust Bowl."
    },
    {
        "slug": "dust-bowl-geography",
        "name": "Dust Bowl geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dust Bowl.",
        "description": "Regions, routes, and spatial systems that situate Dust Bowl beyond single named places."
    },
    {
        "slug": "dust-bowl-legacy",
        "name": "Dust Bowl legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dust Bowl.",
        "description": "How Dust Bowl continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dust-bowl-practices",
        "name": "Dust Bowl practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dust Bowl.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dust Bowl."
    },
    {
        "slug": "dust-bowl-entry-1",
        "name": "Dust Bowl entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-2",
        "name": "Dust Bowl entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-3",
        "name": "Dust Bowl entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-4",
        "name": "Dust Bowl entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-5",
        "name": "Dust Bowl entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-6",
        "name": "Dust Bowl entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-7",
        "name": "Dust Bowl entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-8",
        "name": "Dust Bowl entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-9",
        "name": "Dust Bowl entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-10",
        "name": "Dust Bowl entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-11",
        "name": "Dust Bowl entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-12",
        "name": "Dust Bowl entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-13",
        "name": "Dust Bowl entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-14",
        "name": "Dust Bowl entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-15",
        "name": "Dust Bowl entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-16",
        "name": "Dust Bowl entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-17",
        "name": "Dust Bowl entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-18",
        "name": "Dust Bowl entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-19",
        "name": "Dust Bowl entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-20",
        "name": "Dust Bowl entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-21",
        "name": "Dust Bowl entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-22",
        "name": "Dust Bowl entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-23",
        "name": "Dust Bowl entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dust-bowl-entry-24",
        "name": "Dust Bowl entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dust Bowl.",
        "description": "A supporting encyclopedia entry in the Dust Bowl subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dust-bowl",
        "dust-bowl-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dust-bowl",
        "dust-bowl-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dust-bowl",
        "dust-bowl-places",
        "contains",
        "Dust Bowl places is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-events",
        "contains",
        "Dust Bowl events is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-objects",
        "contains",
        "Dust Bowl objects & artifacts is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-factions",
        "contains",
        "Dust Bowl factions & groups is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-concepts",
        "contains",
        "Dust Bowl concepts is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-eras",
        "contains",
        "Dust Bowl eras is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-works",
        "contains",
        "Dust Bowl works & media is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-symbols",
        "contains",
        "Dust Bowl symbols is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-controversies",
        "contains",
        "Dust Bowl controversies is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-sources",
        "contains",
        "Dust Bowl sources is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-geography",
        "contains",
        "Dust Bowl geography is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-legacy",
        "contains",
        "Dust Bowl legacy is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-practices",
        "contains",
        "Dust Bowl practices is a primary trailhead under Dust Bowl.",
        0.88,
        0.82
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-1",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-2",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-3",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-4",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-5",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-6",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-7",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-8",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-9",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-10",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-11",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-12",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-13",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-14",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-15",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-16",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-17",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-18",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-19",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-20",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-21",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-22",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-23",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ],
    [
        "dust-bowl",
        "dust-bowl-entry-24",
        "contains",
        "Supporting entry under Dust Bowl.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
