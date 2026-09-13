/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "discworld",
        "name": "Discworld",
        "type": "topic",
        "short_description": "Flat world on elephants, Ankh-Morpork, and Pratchett’s comic fantasy continuum of dense footnotes.",
        "description": "Flat world on elephants, Ankh-Morpork, and Pratchett’s comic fantasy continuum of dense footnotes. This Ton-o-Lore subject maps people, places, events, and ideas tied to Discworld so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "discworld-figures",
        "name": "Discworld figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Discworld.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Discworld."
    },
    {
        "slug": "discworld-world",
        "name": "Discworld world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Discworld.",
        "description": "Geography, institutions, and periodization that give Discworld its encyclopedia shape."
    },
    {
        "slug": "discworld-places",
        "name": "Discworld places",
        "type": "place",
        "short_description": "Locations and geographies that frame Discworld.",
        "description": "Places, regions, and built sites that give Discworld its map — where events and figures concentrate."
    },
    {
        "slug": "discworld-events",
        "name": "Discworld events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Discworld.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Discworld timeline."
    },
    {
        "slug": "discworld-objects",
        "name": "Discworld objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Discworld.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Discworld."
    },
    {
        "slug": "discworld-factions",
        "name": "Discworld factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Discworld.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Discworld."
    },
    {
        "slug": "discworld-concepts",
        "name": "Discworld concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Discworld.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Discworld readable as a lore graph."
    },
    {
        "slug": "discworld-eras",
        "name": "Discworld eras",
        "type": "event",
        "short_description": "Periodization for Discworld.",
        "description": "Named eras and phases that help readers track how Discworld changes across time."
    },
    {
        "slug": "discworld-works",
        "name": "Discworld works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Discworld.",
        "description": "Primary works and adaptations through which most audiences encounter Discworld."
    },
    {
        "slug": "discworld-symbols",
        "name": "Discworld symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Discworld.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Discworld."
    },
    {
        "slug": "discworld-controversies",
        "name": "Discworld controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Discworld.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Discworld argumentative."
    },
    {
        "slug": "discworld-sources",
        "name": "Discworld sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Discworld.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Discworld."
    },
    {
        "slug": "discworld-geography",
        "name": "Discworld geography",
        "type": "place",
        "short_description": "Broader geographic framing for Discworld.",
        "description": "Regions, routes, and spatial systems that situate Discworld beyond single named places."
    },
    {
        "slug": "discworld-legacy",
        "name": "Discworld legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Discworld.",
        "description": "How Discworld continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "discworld-practices",
        "name": "Discworld practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Discworld.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Discworld."
    },
    {
        "slug": "discworld-entry-1",
        "name": "Discworld entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-2",
        "name": "Discworld entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-3",
        "name": "Discworld entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-4",
        "name": "Discworld entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-5",
        "name": "Discworld entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-6",
        "name": "Discworld entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-7",
        "name": "Discworld entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-8",
        "name": "Discworld entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-9",
        "name": "Discworld entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-10",
        "name": "Discworld entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-11",
        "name": "Discworld entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-12",
        "name": "Discworld entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-13",
        "name": "Discworld entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-14",
        "name": "Discworld entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-15",
        "name": "Discworld entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-16",
        "name": "Discworld entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-17",
        "name": "Discworld entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-18",
        "name": "Discworld entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-19",
        "name": "Discworld entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-20",
        "name": "Discworld entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-21",
        "name": "Discworld entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-22",
        "name": "Discworld entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-23",
        "name": "Discworld entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "discworld-entry-24",
        "name": "Discworld entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Discworld.",
        "description": "A supporting encyclopedia entry in the Discworld subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "discworld",
        "discworld-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "discworld",
        "discworld-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "discworld",
        "discworld-places",
        "contains",
        "Discworld places is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-events",
        "contains",
        "Discworld events is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-objects",
        "contains",
        "Discworld objects & artifacts is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-factions",
        "contains",
        "Discworld factions & groups is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-concepts",
        "contains",
        "Discworld concepts is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-eras",
        "contains",
        "Discworld eras is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-works",
        "contains",
        "Discworld works & media is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-symbols",
        "contains",
        "Discworld symbols is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-controversies",
        "contains",
        "Discworld controversies is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-sources",
        "contains",
        "Discworld sources is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-geography",
        "contains",
        "Discworld geography is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-legacy",
        "contains",
        "Discworld legacy is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-practices",
        "contains",
        "Discworld practices is a primary trailhead under Discworld.",
        0.88,
        0.82
    ],
    [
        "discworld",
        "discworld-entry-1",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-2",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-3",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-4",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-5",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-6",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-7",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-8",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-9",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-10",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-11",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-12",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-13",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-14",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-15",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-16",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-17",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-18",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-19",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-20",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-21",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-22",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-23",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ],
    [
        "discworld",
        "discworld-entry-24",
        "contains",
        "Supporting entry under Discworld.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
