/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "transformers-toys",
        "name": "Transformers (toys)",
        "type": "topic",
        "short_description": "Converting robots, factions, and the toyline that launched a multimedia war of Autobots and Decepticons.",
        "description": "Converting robots, factions, and the toyline that launched a multimedia war of Autobots and Decepticons. This Ton-o-Lore subject maps people, places, events, and ideas tied to Transformers (toys) so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "transformers-toys-figures",
        "name": "Transformers (toys) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Transformers (toys).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Transformers (toys)."
    },
    {
        "slug": "transformers-toys-world",
        "name": "Transformers (toys) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Transformers (toys).",
        "description": "Geography, institutions, and periodization that give Transformers (toys) its encyclopedia shape."
    },
    {
        "slug": "transformers-toys-places",
        "name": "Transformers (toys) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Transformers (toys).",
        "description": "Places, regions, and built sites that give Transformers (toys) its map — where events and figures concentrate."
    },
    {
        "slug": "transformers-toys-events",
        "name": "Transformers (toys) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Transformers (toys).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Transformers (toys) timeline."
    },
    {
        "slug": "transformers-toys-objects",
        "name": "Transformers (toys) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Transformers (toys).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Transformers (toys)."
    },
    {
        "slug": "transformers-toys-factions",
        "name": "Transformers (toys) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Transformers (toys).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Transformers (toys)."
    },
    {
        "slug": "transformers-toys-concepts",
        "name": "Transformers (toys) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Transformers (toys).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Transformers (toys) readable as a lore graph."
    },
    {
        "slug": "transformers-toys-eras",
        "name": "Transformers (toys) eras",
        "type": "event",
        "short_description": "Periodization for Transformers (toys).",
        "description": "Named eras and phases that help readers track how Transformers (toys) changes across time."
    },
    {
        "slug": "transformers-toys-works",
        "name": "Transformers (toys) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Transformers (toys).",
        "description": "Primary works and adaptations through which most audiences encounter Transformers (toys)."
    },
    {
        "slug": "transformers-toys-symbols",
        "name": "Transformers (toys) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Transformers (toys).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Transformers (toys)."
    },
    {
        "slug": "transformers-toys-controversies",
        "name": "Transformers (toys) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Transformers (toys).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Transformers (toys) argumentative."
    },
    {
        "slug": "transformers-toys-sources",
        "name": "Transformers (toys) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Transformers (toys).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Transformers (toys)."
    },
    {
        "slug": "transformers-toys-geography",
        "name": "Transformers (toys) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Transformers (toys).",
        "description": "Regions, routes, and spatial systems that situate Transformers (toys) beyond single named places."
    },
    {
        "slug": "transformers-toys-legacy",
        "name": "Transformers (toys) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Transformers (toys).",
        "description": "How Transformers (toys) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "transformers-toys-practices",
        "name": "Transformers (toys) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Transformers (toys).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Transformers (toys)."
    },
    {
        "slug": "transformers-toys-entry-1",
        "name": "Transformers (toys) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-2",
        "name": "Transformers (toys) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-3",
        "name": "Transformers (toys) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-4",
        "name": "Transformers (toys) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-5",
        "name": "Transformers (toys) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-6",
        "name": "Transformers (toys) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-7",
        "name": "Transformers (toys) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-8",
        "name": "Transformers (toys) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-9",
        "name": "Transformers (toys) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-10",
        "name": "Transformers (toys) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-11",
        "name": "Transformers (toys) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-12",
        "name": "Transformers (toys) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-13",
        "name": "Transformers (toys) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-14",
        "name": "Transformers (toys) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-15",
        "name": "Transformers (toys) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-16",
        "name": "Transformers (toys) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-17",
        "name": "Transformers (toys) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-18",
        "name": "Transformers (toys) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-19",
        "name": "Transformers (toys) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-20",
        "name": "Transformers (toys) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-21",
        "name": "Transformers (toys) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-22",
        "name": "Transformers (toys) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-23",
        "name": "Transformers (toys) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "transformers-toys-entry-24",
        "name": "Transformers (toys) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Transformers (toys).",
        "description": "A supporting encyclopedia entry in the Transformers (toys) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "transformers-toys",
        "transformers-toys-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "transformers-toys",
        "transformers-toys-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "transformers-toys",
        "transformers-toys-places",
        "contains",
        "Transformers (toys) places is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-events",
        "contains",
        "Transformers (toys) events is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-objects",
        "contains",
        "Transformers (toys) objects & artifacts is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-factions",
        "contains",
        "Transformers (toys) factions & groups is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-concepts",
        "contains",
        "Transformers (toys) concepts is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-eras",
        "contains",
        "Transformers (toys) eras is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-works",
        "contains",
        "Transformers (toys) works & media is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-symbols",
        "contains",
        "Transformers (toys) symbols is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-controversies",
        "contains",
        "Transformers (toys) controversies is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-sources",
        "contains",
        "Transformers (toys) sources is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-geography",
        "contains",
        "Transformers (toys) geography is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-legacy",
        "contains",
        "Transformers (toys) legacy is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-practices",
        "contains",
        "Transformers (toys) practices is a primary trailhead under Transformers (toys).",
        0.88,
        0.82
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-1",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-2",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-3",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-4",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-5",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-6",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-7",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-8",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-9",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-10",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-11",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-12",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-13",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-14",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-15",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-16",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-17",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-18",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-19",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-20",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-21",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-22",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-23",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ],
    [
        "transformers-toys",
        "transformers-toys-entry-24",
        "contains",
        "Supporting entry under Transformers (toys).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
