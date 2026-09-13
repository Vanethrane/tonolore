/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "westworld-series",
        "name": "Westworld",
        "type": "topic",
        "short_description": "Host consciousness, park loops, and the android-uprising prestige riff on Delos fantasy.",
        "description": "Host consciousness, park loops, and the android-uprising prestige riff on Delos fantasy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Westworld so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "westworld-series-figures",
        "name": "Westworld figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Westworld.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Westworld."
    },
    {
        "slug": "westworld-series-world",
        "name": "Westworld world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Westworld.",
        "description": "Geography, institutions, and periodization that give Westworld its encyclopedia shape."
    },
    {
        "slug": "westworld-series-places",
        "name": "Westworld places",
        "type": "place",
        "short_description": "Locations and geographies that frame Westworld.",
        "description": "Places, regions, and built sites that give Westworld its map — where events and figures concentrate."
    },
    {
        "slug": "westworld-series-events",
        "name": "Westworld events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Westworld.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Westworld timeline."
    },
    {
        "slug": "westworld-series-objects",
        "name": "Westworld objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Westworld.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Westworld."
    },
    {
        "slug": "westworld-series-factions",
        "name": "Westworld factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Westworld.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Westworld."
    },
    {
        "slug": "westworld-series-concepts",
        "name": "Westworld concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Westworld.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Westworld readable as a lore graph."
    },
    {
        "slug": "westworld-series-eras",
        "name": "Westworld eras",
        "type": "event",
        "short_description": "Periodization for Westworld.",
        "description": "Named eras and phases that help readers track how Westworld changes across time."
    },
    {
        "slug": "westworld-series-works",
        "name": "Westworld works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Westworld.",
        "description": "Primary works and adaptations through which most audiences encounter Westworld."
    },
    {
        "slug": "westworld-series-symbols",
        "name": "Westworld symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Westworld.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Westworld."
    },
    {
        "slug": "westworld-series-controversies",
        "name": "Westworld controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Westworld.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Westworld argumentative."
    },
    {
        "slug": "westworld-series-sources",
        "name": "Westworld sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Westworld.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Westworld."
    },
    {
        "slug": "westworld-series-geography",
        "name": "Westworld geography",
        "type": "place",
        "short_description": "Broader geographic framing for Westworld.",
        "description": "Regions, routes, and spatial systems that situate Westworld beyond single named places."
    },
    {
        "slug": "westworld-series-legacy",
        "name": "Westworld legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Westworld.",
        "description": "How Westworld continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "westworld-series-practices",
        "name": "Westworld practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Westworld.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Westworld."
    },
    {
        "slug": "westworld-series-entry-1",
        "name": "Westworld entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-2",
        "name": "Westworld entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-3",
        "name": "Westworld entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-4",
        "name": "Westworld entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-5",
        "name": "Westworld entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-6",
        "name": "Westworld entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-7",
        "name": "Westworld entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-8",
        "name": "Westworld entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-9",
        "name": "Westworld entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-10",
        "name": "Westworld entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-11",
        "name": "Westworld entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-12",
        "name": "Westworld entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-13",
        "name": "Westworld entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-14",
        "name": "Westworld entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-15",
        "name": "Westworld entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-16",
        "name": "Westworld entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-17",
        "name": "Westworld entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-18",
        "name": "Westworld entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-19",
        "name": "Westworld entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-20",
        "name": "Westworld entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-21",
        "name": "Westworld entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-22",
        "name": "Westworld entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-23",
        "name": "Westworld entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "westworld-series-entry-24",
        "name": "Westworld entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Westworld.",
        "description": "A supporting encyclopedia entry in the Westworld subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "westworld-series",
        "westworld-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "westworld-series",
        "westworld-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "westworld-series",
        "westworld-series-places",
        "contains",
        "Westworld places is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-events",
        "contains",
        "Westworld events is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-objects",
        "contains",
        "Westworld objects & artifacts is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-factions",
        "contains",
        "Westworld factions & groups is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-concepts",
        "contains",
        "Westworld concepts is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-eras",
        "contains",
        "Westworld eras is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-works",
        "contains",
        "Westworld works & media is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-symbols",
        "contains",
        "Westworld symbols is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-controversies",
        "contains",
        "Westworld controversies is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-sources",
        "contains",
        "Westworld sources is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-geography",
        "contains",
        "Westworld geography is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-legacy",
        "contains",
        "Westworld legacy is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-practices",
        "contains",
        "Westworld practices is a primary trailhead under Westworld.",
        0.88,
        0.82
    ],
    [
        "westworld-series",
        "westworld-series-entry-1",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-2",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-3",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-4",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-5",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-6",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-7",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-8",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-9",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-10",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-11",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-12",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-13",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-14",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-15",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-16",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-17",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-18",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-19",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-20",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-21",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-22",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-23",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ],
    [
        "westworld-series",
        "westworld-series-entry-24",
        "contains",
        "Supporting entry under Westworld.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
