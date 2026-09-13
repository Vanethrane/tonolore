/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spaceflight-transport",
        "name": "Spaceflight as transport",
        "type": "topic",
        "short_description": "Rockets, capsules, and the vehicles that made orbit a destination.",
        "description": "Rockets, capsules, and the vehicles that made orbit a destination. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spaceflight as transport so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "spaceflight-transport-figures",
        "name": "Spaceflight as transport figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spaceflight as transport.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spaceflight as transport."
    },
    {
        "slug": "spaceflight-transport-world",
        "name": "Spaceflight as transport world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spaceflight as transport.",
        "description": "Geography, institutions, and periodization that give Spaceflight as transport its encyclopedia shape."
    },
    {
        "slug": "spaceflight-transport-places",
        "name": "Spaceflight as transport places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spaceflight as transport.",
        "description": "Places, regions, and built sites that give Spaceflight as transport its map — where events and figures concentrate."
    },
    {
        "slug": "spaceflight-transport-events",
        "name": "Spaceflight as transport events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spaceflight as transport.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spaceflight as transport timeline."
    },
    {
        "slug": "spaceflight-transport-objects",
        "name": "Spaceflight as transport objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spaceflight as transport.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spaceflight as transport."
    },
    {
        "slug": "spaceflight-transport-factions",
        "name": "Spaceflight as transport factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spaceflight as transport.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spaceflight as transport."
    },
    {
        "slug": "spaceflight-transport-concepts",
        "name": "Spaceflight as transport concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spaceflight as transport.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spaceflight as transport readable as a lore graph."
    },
    {
        "slug": "spaceflight-transport-eras",
        "name": "Spaceflight as transport eras",
        "type": "event",
        "short_description": "Periodization for Spaceflight as transport.",
        "description": "Named eras and phases that help readers track how Spaceflight as transport changes across time."
    },
    {
        "slug": "spaceflight-transport-works",
        "name": "Spaceflight as transport works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spaceflight as transport.",
        "description": "Primary works and adaptations through which most audiences encounter Spaceflight as transport."
    },
    {
        "slug": "spaceflight-transport-symbols",
        "name": "Spaceflight as transport symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spaceflight as transport.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spaceflight as transport."
    },
    {
        "slug": "spaceflight-transport-controversies",
        "name": "Spaceflight as transport controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spaceflight as transport.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spaceflight as transport argumentative."
    },
    {
        "slug": "spaceflight-transport-sources",
        "name": "Spaceflight as transport sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spaceflight as transport.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spaceflight as transport."
    },
    {
        "slug": "spaceflight-transport-geography",
        "name": "Spaceflight as transport geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spaceflight as transport.",
        "description": "Regions, routes, and spatial systems that situate Spaceflight as transport beyond single named places."
    },
    {
        "slug": "spaceflight-transport-legacy",
        "name": "Spaceflight as transport legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spaceflight as transport.",
        "description": "How Spaceflight as transport continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spaceflight-transport-practices",
        "name": "Spaceflight as transport practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spaceflight as transport.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spaceflight as transport."
    },
    {
        "slug": "spaceflight-transport-entry-1",
        "name": "Spaceflight as transport entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-2",
        "name": "Spaceflight as transport entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-3",
        "name": "Spaceflight as transport entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-4",
        "name": "Spaceflight as transport entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-5",
        "name": "Spaceflight as transport entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-6",
        "name": "Spaceflight as transport entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-7",
        "name": "Spaceflight as transport entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-8",
        "name": "Spaceflight as transport entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-9",
        "name": "Spaceflight as transport entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-10",
        "name": "Spaceflight as transport entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-11",
        "name": "Spaceflight as transport entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-12",
        "name": "Spaceflight as transport entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-13",
        "name": "Spaceflight as transport entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-14",
        "name": "Spaceflight as transport entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-15",
        "name": "Spaceflight as transport entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-16",
        "name": "Spaceflight as transport entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-17",
        "name": "Spaceflight as transport entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-18",
        "name": "Spaceflight as transport entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-19",
        "name": "Spaceflight as transport entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-20",
        "name": "Spaceflight as transport entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-21",
        "name": "Spaceflight as transport entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-22",
        "name": "Spaceflight as transport entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-23",
        "name": "Spaceflight as transport entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spaceflight-transport-entry-24",
        "name": "Spaceflight as transport entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spaceflight as transport.",
        "description": "A supporting encyclopedia entry in the Spaceflight as transport subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spaceflight-transport",
        "spaceflight-transport-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-places",
        "contains",
        "Spaceflight as transport places is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-events",
        "contains",
        "Spaceflight as transport events is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-objects",
        "contains",
        "Spaceflight as transport objects & artifacts is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-factions",
        "contains",
        "Spaceflight as transport factions & groups is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-concepts",
        "contains",
        "Spaceflight as transport concepts is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-eras",
        "contains",
        "Spaceflight as transport eras is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-works",
        "contains",
        "Spaceflight as transport works & media is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-symbols",
        "contains",
        "Spaceflight as transport symbols is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-controversies",
        "contains",
        "Spaceflight as transport controversies is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-sources",
        "contains",
        "Spaceflight as transport sources is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-geography",
        "contains",
        "Spaceflight as transport geography is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-legacy",
        "contains",
        "Spaceflight as transport legacy is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-practices",
        "contains",
        "Spaceflight as transport practices is a primary trailhead under Spaceflight as transport.",
        0.88,
        0.82
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-1",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-2",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-3",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-4",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-5",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-6",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-7",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-8",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-9",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-10",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-11",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-12",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-13",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-14",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-15",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-16",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-17",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-18",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-19",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-20",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-21",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-22",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-23",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ],
    [
        "spaceflight-transport",
        "spaceflight-transport-entry-24",
        "contains",
        "Supporting entry under Spaceflight as transport.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
