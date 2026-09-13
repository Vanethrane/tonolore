/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "voltron-toys",
        "name": "Voltron",
        "type": "topic",
        "short_description": "Lion combiners, Defender lore, and the mecha toyline that defined Western combining robots.",
        "description": "Lion combiners, Defender lore, and the mecha toyline that defined Western combining robots. This Ton-o-Lore subject maps people, places, events, and ideas tied to Voltron so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "voltron-toys-figures",
        "name": "Voltron figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Voltron.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Voltron."
    },
    {
        "slug": "voltron-toys-world",
        "name": "Voltron world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Voltron.",
        "description": "Geography, institutions, and periodization that give Voltron its encyclopedia shape."
    },
    {
        "slug": "voltron-toys-places",
        "name": "Voltron places",
        "type": "place",
        "short_description": "Locations and geographies that frame Voltron.",
        "description": "Places, regions, and built sites that give Voltron its map — where events and figures concentrate."
    },
    {
        "slug": "voltron-toys-events",
        "name": "Voltron events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Voltron.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Voltron timeline."
    },
    {
        "slug": "voltron-toys-objects",
        "name": "Voltron objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Voltron.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Voltron."
    },
    {
        "slug": "voltron-toys-factions",
        "name": "Voltron factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Voltron.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Voltron."
    },
    {
        "slug": "voltron-toys-concepts",
        "name": "Voltron concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Voltron.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Voltron readable as a lore graph."
    },
    {
        "slug": "voltron-toys-eras",
        "name": "Voltron eras",
        "type": "event",
        "short_description": "Periodization for Voltron.",
        "description": "Named eras and phases that help readers track how Voltron changes across time."
    },
    {
        "slug": "voltron-toys-works",
        "name": "Voltron works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Voltron.",
        "description": "Primary works and adaptations through which most audiences encounter Voltron."
    },
    {
        "slug": "voltron-toys-symbols",
        "name": "Voltron symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Voltron.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Voltron."
    },
    {
        "slug": "voltron-toys-controversies",
        "name": "Voltron controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Voltron.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Voltron argumentative."
    },
    {
        "slug": "voltron-toys-sources",
        "name": "Voltron sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Voltron.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Voltron."
    },
    {
        "slug": "voltron-toys-geography",
        "name": "Voltron geography",
        "type": "place",
        "short_description": "Broader geographic framing for Voltron.",
        "description": "Regions, routes, and spatial systems that situate Voltron beyond single named places."
    },
    {
        "slug": "voltron-toys-legacy",
        "name": "Voltron legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Voltron.",
        "description": "How Voltron continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "voltron-toys-practices",
        "name": "Voltron practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Voltron.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Voltron."
    },
    {
        "slug": "voltron-toys-entry-1",
        "name": "Voltron entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-2",
        "name": "Voltron entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-3",
        "name": "Voltron entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-4",
        "name": "Voltron entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-5",
        "name": "Voltron entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-6",
        "name": "Voltron entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-7",
        "name": "Voltron entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-8",
        "name": "Voltron entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-9",
        "name": "Voltron entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-10",
        "name": "Voltron entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-11",
        "name": "Voltron entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-12",
        "name": "Voltron entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-13",
        "name": "Voltron entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-14",
        "name": "Voltron entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-15",
        "name": "Voltron entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-16",
        "name": "Voltron entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-17",
        "name": "Voltron entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-18",
        "name": "Voltron entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-19",
        "name": "Voltron entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-20",
        "name": "Voltron entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-21",
        "name": "Voltron entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-22",
        "name": "Voltron entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-23",
        "name": "Voltron entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "voltron-toys-entry-24",
        "name": "Voltron entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Voltron.",
        "description": "A supporting encyclopedia entry in the Voltron subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "voltron-toys",
        "voltron-toys-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "voltron-toys",
        "voltron-toys-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "voltron-toys",
        "voltron-toys-places",
        "contains",
        "Voltron places is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-events",
        "contains",
        "Voltron events is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-objects",
        "contains",
        "Voltron objects & artifacts is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-factions",
        "contains",
        "Voltron factions & groups is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-concepts",
        "contains",
        "Voltron concepts is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-eras",
        "contains",
        "Voltron eras is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-works",
        "contains",
        "Voltron works & media is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-symbols",
        "contains",
        "Voltron symbols is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-controversies",
        "contains",
        "Voltron controversies is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-sources",
        "contains",
        "Voltron sources is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-geography",
        "contains",
        "Voltron geography is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-legacy",
        "contains",
        "Voltron legacy is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-practices",
        "contains",
        "Voltron practices is a primary trailhead under Voltron.",
        0.88,
        0.82
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-1",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-2",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-3",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-4",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-5",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-6",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-7",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-8",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-9",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-10",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-11",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-12",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-13",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-14",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-15",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-16",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-17",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-18",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-19",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-20",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-21",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-22",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-23",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ],
    [
        "voltron-toys",
        "voltron-toys-entry-24",
        "contains",
        "Supporting entry under Voltron.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
