/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "finnish-kalevala-folklore",
        "name": "Kalevala folklore",
        "type": "topic",
        "short_description": "Runesingers, sampo forging, and the epic poetry that became Finland’s national myth reservoir.",
        "description": "Runesingers, sampo forging, and the epic poetry that became Finland’s national myth reservoir. This Ton-o-Lore subject maps people, places, events, and ideas tied to Kalevala folklore so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "finnish-kalevala-folklore-figures",
        "name": "Kalevala folklore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Kalevala folklore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Kalevala folklore."
    },
    {
        "slug": "finnish-kalevala-folklore-world",
        "name": "Kalevala folklore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Kalevala folklore.",
        "description": "Geography, institutions, and periodization that give Kalevala folklore its encyclopedia shape."
    },
    {
        "slug": "finnish-kalevala-folklore-places",
        "name": "Kalevala folklore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Kalevala folklore.",
        "description": "Places, regions, and built sites that give Kalevala folklore its map — where events and figures concentrate."
    },
    {
        "slug": "finnish-kalevala-folklore-events",
        "name": "Kalevala folklore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Kalevala folklore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Kalevala folklore timeline."
    },
    {
        "slug": "finnish-kalevala-folklore-objects",
        "name": "Kalevala folklore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Kalevala folklore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Kalevala folklore."
    },
    {
        "slug": "finnish-kalevala-folklore-factions",
        "name": "Kalevala folklore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Kalevala folklore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Kalevala folklore."
    },
    {
        "slug": "finnish-kalevala-folklore-concepts",
        "name": "Kalevala folklore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Kalevala folklore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Kalevala folklore readable as a lore graph."
    },
    {
        "slug": "finnish-kalevala-folklore-eras",
        "name": "Kalevala folklore eras",
        "type": "event",
        "short_description": "Periodization for Kalevala folklore.",
        "description": "Named eras and phases that help readers track how Kalevala folklore changes across time."
    },
    {
        "slug": "finnish-kalevala-folklore-works",
        "name": "Kalevala folklore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Kalevala folklore.",
        "description": "Primary works and adaptations through which most audiences encounter Kalevala folklore."
    },
    {
        "slug": "finnish-kalevala-folklore-symbols",
        "name": "Kalevala folklore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Kalevala folklore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Kalevala folklore."
    },
    {
        "slug": "finnish-kalevala-folklore-controversies",
        "name": "Kalevala folklore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Kalevala folklore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Kalevala folklore argumentative."
    },
    {
        "slug": "finnish-kalevala-folklore-sources",
        "name": "Kalevala folklore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Kalevala folklore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Kalevala folklore."
    },
    {
        "slug": "finnish-kalevala-folklore-geography",
        "name": "Kalevala folklore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Kalevala folklore.",
        "description": "Regions, routes, and spatial systems that situate Kalevala folklore beyond single named places."
    },
    {
        "slug": "finnish-kalevala-folklore-legacy",
        "name": "Kalevala folklore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Kalevala folklore.",
        "description": "How Kalevala folklore continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "finnish-kalevala-folklore-practices",
        "name": "Kalevala folklore practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Kalevala folklore.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Kalevala folklore."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-1",
        "name": "Kalevala folklore entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-2",
        "name": "Kalevala folklore entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-3",
        "name": "Kalevala folklore entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-4",
        "name": "Kalevala folklore entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-5",
        "name": "Kalevala folklore entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-6",
        "name": "Kalevala folklore entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-7",
        "name": "Kalevala folklore entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-8",
        "name": "Kalevala folklore entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-9",
        "name": "Kalevala folklore entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-10",
        "name": "Kalevala folklore entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-11",
        "name": "Kalevala folklore entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-12",
        "name": "Kalevala folklore entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-13",
        "name": "Kalevala folklore entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-14",
        "name": "Kalevala folklore entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-15",
        "name": "Kalevala folklore entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-16",
        "name": "Kalevala folklore entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-17",
        "name": "Kalevala folklore entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-18",
        "name": "Kalevala folklore entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-19",
        "name": "Kalevala folklore entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-20",
        "name": "Kalevala folklore entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-21",
        "name": "Kalevala folklore entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-22",
        "name": "Kalevala folklore entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-23",
        "name": "Kalevala folklore entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "finnish-kalevala-folklore-entry-24",
        "name": "Kalevala folklore entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kalevala folklore.",
        "description": "A supporting encyclopedia entry in the Kalevala folklore subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-places",
        "contains",
        "Kalevala folklore places is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-events",
        "contains",
        "Kalevala folklore events is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-objects",
        "contains",
        "Kalevala folklore objects & artifacts is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-factions",
        "contains",
        "Kalevala folklore factions & groups is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-concepts",
        "contains",
        "Kalevala folklore concepts is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-eras",
        "contains",
        "Kalevala folklore eras is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-works",
        "contains",
        "Kalevala folklore works & media is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-symbols",
        "contains",
        "Kalevala folklore symbols is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-controversies",
        "contains",
        "Kalevala folklore controversies is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-sources",
        "contains",
        "Kalevala folklore sources is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-geography",
        "contains",
        "Kalevala folklore geography is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-legacy",
        "contains",
        "Kalevala folklore legacy is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-practices",
        "contains",
        "Kalevala folklore practices is a primary trailhead under Kalevala folklore.",
        0.88,
        0.82
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-1",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-2",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-3",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-4",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-5",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-6",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-7",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-8",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-9",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-10",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-11",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-12",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-13",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-14",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-15",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-16",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-17",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-18",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-19",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-20",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-21",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-22",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-23",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ],
    [
        "finnish-kalevala-folklore",
        "finnish-kalevala-folklore-entry-24",
        "contains",
        "Supporting entry under Kalevala folklore.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
