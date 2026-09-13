/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "foundation-books",
        "name": "Foundation (books)",
        "type": "topic",
        "short_description": "Psychohistory, galactic empire fall, and Asimov’s blueprint for literary space opera.",
        "description": "Psychohistory, galactic empire fall, and Asimov’s blueprint for literary space opera. This Ton-o-Lore subject maps people, places, events, and ideas tied to Foundation (books) so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "foundation-books-figures",
        "name": "Foundation (books) figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Foundation (books).",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Foundation (books)."
    },
    {
        "slug": "foundation-books-world",
        "name": "Foundation (books) world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Foundation (books).",
        "description": "Geography, institutions, and periodization that give Foundation (books) its encyclopedia shape."
    },
    {
        "slug": "foundation-books-places",
        "name": "Foundation (books) places",
        "type": "place",
        "short_description": "Locations and geographies that frame Foundation (books).",
        "description": "Places, regions, and built sites that give Foundation (books) its map — where events and figures concentrate."
    },
    {
        "slug": "foundation-books-events",
        "name": "Foundation (books) events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Foundation (books).",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Foundation (books) timeline."
    },
    {
        "slug": "foundation-books-objects",
        "name": "Foundation (books) objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Foundation (books).",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Foundation (books)."
    },
    {
        "slug": "foundation-books-factions",
        "name": "Foundation (books) factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Foundation (books).",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Foundation (books)."
    },
    {
        "slug": "foundation-books-concepts",
        "name": "Foundation (books) concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Foundation (books).",
        "description": "Keywords, doctrines, systems, and abstract forces that make Foundation (books) readable as a lore graph."
    },
    {
        "slug": "foundation-books-eras",
        "name": "Foundation (books) eras",
        "type": "event",
        "short_description": "Periodization for Foundation (books).",
        "description": "Named eras and phases that help readers track how Foundation (books) changes across time."
    },
    {
        "slug": "foundation-books-works",
        "name": "Foundation (books) works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Foundation (books).",
        "description": "Primary works and adaptations through which most audiences encounter Foundation (books)."
    },
    {
        "slug": "foundation-books-symbols",
        "name": "Foundation (books) symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Foundation (books).",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Foundation (books)."
    },
    {
        "slug": "foundation-books-controversies",
        "name": "Foundation (books) controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Foundation (books).",
        "description": "Debates, rival canons, scandals, and contested facts that keep Foundation (books) argumentative."
    },
    {
        "slug": "foundation-books-sources",
        "name": "Foundation (books) sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Foundation (books).",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Foundation (books)."
    },
    {
        "slug": "foundation-books-geography",
        "name": "Foundation (books) geography",
        "type": "place",
        "short_description": "Broader geographic framing for Foundation (books).",
        "description": "Regions, routes, and spatial systems that situate Foundation (books) beyond single named places."
    },
    {
        "slug": "foundation-books-legacy",
        "name": "Foundation (books) legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Foundation (books).",
        "description": "How Foundation (books) continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "foundation-books-practices",
        "name": "Foundation (books) practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Foundation (books).",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Foundation (books)."
    },
    {
        "slug": "foundation-books-entry-1",
        "name": "Foundation (books) entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-2",
        "name": "Foundation (books) entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-3",
        "name": "Foundation (books) entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-4",
        "name": "Foundation (books) entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-5",
        "name": "Foundation (books) entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-6",
        "name": "Foundation (books) entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-7",
        "name": "Foundation (books) entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-8",
        "name": "Foundation (books) entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-9",
        "name": "Foundation (books) entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-10",
        "name": "Foundation (books) entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-11",
        "name": "Foundation (books) entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-12",
        "name": "Foundation (books) entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-13",
        "name": "Foundation (books) entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-14",
        "name": "Foundation (books) entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-15",
        "name": "Foundation (books) entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-16",
        "name": "Foundation (books) entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-17",
        "name": "Foundation (books) entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-18",
        "name": "Foundation (books) entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-19",
        "name": "Foundation (books) entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-20",
        "name": "Foundation (books) entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-21",
        "name": "Foundation (books) entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-22",
        "name": "Foundation (books) entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-23",
        "name": "Foundation (books) entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "foundation-books-entry-24",
        "name": "Foundation (books) entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Foundation (books).",
        "description": "A supporting encyclopedia entry in the Foundation (books) subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "foundation-books",
        "foundation-books-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "foundation-books",
        "foundation-books-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "foundation-books",
        "foundation-books-places",
        "contains",
        "Foundation (books) places is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-events",
        "contains",
        "Foundation (books) events is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-objects",
        "contains",
        "Foundation (books) objects & artifacts is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-factions",
        "contains",
        "Foundation (books) factions & groups is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-concepts",
        "contains",
        "Foundation (books) concepts is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-eras",
        "contains",
        "Foundation (books) eras is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-works",
        "contains",
        "Foundation (books) works & media is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-symbols",
        "contains",
        "Foundation (books) symbols is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-controversies",
        "contains",
        "Foundation (books) controversies is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-sources",
        "contains",
        "Foundation (books) sources is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-geography",
        "contains",
        "Foundation (books) geography is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-legacy",
        "contains",
        "Foundation (books) legacy is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-practices",
        "contains",
        "Foundation (books) practices is a primary trailhead under Foundation (books).",
        0.88,
        0.82
    ],
    [
        "foundation-books",
        "foundation-books-entry-1",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-2",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-3",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-4",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-5",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-6",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-7",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-8",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-9",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-10",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-11",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-12",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-13",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-14",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-15",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-16",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-17",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-18",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-19",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-20",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-21",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-22",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-23",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ],
    [
        "foundation-books",
        "foundation-books-entry-24",
        "contains",
        "Supporting entry under Foundation (books).",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
