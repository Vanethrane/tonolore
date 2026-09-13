/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "beyblade",
        "name": "Beyblade",
        "type": "topic",
        "short_description": "Spinning tops, stadium battles, and the duel-toy franchise with anime-backed lore.",
        "description": "Spinning tops, stadium battles, and the duel-toy franchise with anime-backed lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Beyblade so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "beyblade-figures",
        "name": "Beyblade figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Beyblade.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Beyblade."
    },
    {
        "slug": "beyblade-world",
        "name": "Beyblade world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Beyblade.",
        "description": "Geography, institutions, and periodization that give Beyblade its encyclopedia shape."
    },
    {
        "slug": "beyblade-places",
        "name": "Beyblade places",
        "type": "place",
        "short_description": "Locations and geographies that frame Beyblade.",
        "description": "Places, regions, and built sites that give Beyblade its map — where events and figures concentrate."
    },
    {
        "slug": "beyblade-events",
        "name": "Beyblade events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Beyblade.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Beyblade timeline."
    },
    {
        "slug": "beyblade-objects",
        "name": "Beyblade objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Beyblade.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Beyblade."
    },
    {
        "slug": "beyblade-factions",
        "name": "Beyblade factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Beyblade.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Beyblade."
    },
    {
        "slug": "beyblade-concepts",
        "name": "Beyblade concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Beyblade.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Beyblade readable as a lore graph."
    },
    {
        "slug": "beyblade-eras",
        "name": "Beyblade eras",
        "type": "event",
        "short_description": "Periodization for Beyblade.",
        "description": "Named eras and phases that help readers track how Beyblade changes across time."
    },
    {
        "slug": "beyblade-works",
        "name": "Beyblade works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Beyblade.",
        "description": "Primary works and adaptations through which most audiences encounter Beyblade."
    },
    {
        "slug": "beyblade-symbols",
        "name": "Beyblade symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Beyblade.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Beyblade."
    },
    {
        "slug": "beyblade-controversies",
        "name": "Beyblade controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Beyblade.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Beyblade argumentative."
    },
    {
        "slug": "beyblade-sources",
        "name": "Beyblade sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Beyblade.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Beyblade."
    },
    {
        "slug": "beyblade-geography",
        "name": "Beyblade geography",
        "type": "place",
        "short_description": "Broader geographic framing for Beyblade.",
        "description": "Regions, routes, and spatial systems that situate Beyblade beyond single named places."
    },
    {
        "slug": "beyblade-legacy",
        "name": "Beyblade legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Beyblade.",
        "description": "How Beyblade continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "beyblade-practices",
        "name": "Beyblade practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Beyblade.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Beyblade."
    },
    {
        "slug": "beyblade-entry-1",
        "name": "Beyblade entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-2",
        "name": "Beyblade entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-3",
        "name": "Beyblade entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-4",
        "name": "Beyblade entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-5",
        "name": "Beyblade entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-6",
        "name": "Beyblade entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-7",
        "name": "Beyblade entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-8",
        "name": "Beyblade entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-9",
        "name": "Beyblade entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-10",
        "name": "Beyblade entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-11",
        "name": "Beyblade entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-12",
        "name": "Beyblade entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-13",
        "name": "Beyblade entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-14",
        "name": "Beyblade entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-15",
        "name": "Beyblade entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-16",
        "name": "Beyblade entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-17",
        "name": "Beyblade entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-18",
        "name": "Beyblade entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-19",
        "name": "Beyblade entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-20",
        "name": "Beyblade entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-21",
        "name": "Beyblade entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-22",
        "name": "Beyblade entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-23",
        "name": "Beyblade entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beyblade-entry-24",
        "name": "Beyblade entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beyblade.",
        "description": "A supporting encyclopedia entry in the Beyblade subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "beyblade",
        "beyblade-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "beyblade",
        "beyblade-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "beyblade",
        "beyblade-places",
        "contains",
        "Beyblade places is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-events",
        "contains",
        "Beyblade events is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-objects",
        "contains",
        "Beyblade objects & artifacts is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-factions",
        "contains",
        "Beyblade factions & groups is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-concepts",
        "contains",
        "Beyblade concepts is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-eras",
        "contains",
        "Beyblade eras is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-works",
        "contains",
        "Beyblade works & media is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-symbols",
        "contains",
        "Beyblade symbols is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-controversies",
        "contains",
        "Beyblade controversies is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-sources",
        "contains",
        "Beyblade sources is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-geography",
        "contains",
        "Beyblade geography is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-legacy",
        "contains",
        "Beyblade legacy is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-practices",
        "contains",
        "Beyblade practices is a primary trailhead under Beyblade.",
        0.88,
        0.82
    ],
    [
        "beyblade",
        "beyblade-entry-1",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-2",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-3",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-4",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-5",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-6",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-7",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-8",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-9",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-10",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-11",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-12",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-13",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-14",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-15",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-16",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-17",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-18",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-19",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-20",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-21",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-22",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-23",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ],
    [
        "beyblade",
        "beyblade-entry-24",
        "contains",
        "Supporting entry under Beyblade.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
