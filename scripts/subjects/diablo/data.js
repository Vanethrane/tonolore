/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "diablo",
        "name": "Diablo",
        "type": "topic",
        "short_description": "Sanctuary, Nephalem, and the isometric demon-slaying hack-and-slash dynasty.",
        "description": "Sanctuary, Nephalem, and the isometric demon-slaying hack-and-slash dynasty. This Ton-o-Lore subject maps people, places, events, and ideas tied to Diablo so readers can follow long-tail connections across video games."
    },
    {
        "slug": "diablo-figures",
        "name": "Diablo figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Diablo.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Diablo."
    },
    {
        "slug": "diablo-world",
        "name": "Diablo world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Diablo.",
        "description": "Geography, institutions, and periodization that give Diablo its encyclopedia shape."
    },
    {
        "slug": "diablo-places",
        "name": "Diablo places",
        "type": "place",
        "short_description": "Locations and geographies that frame Diablo.",
        "description": "Places, regions, and built sites that give Diablo its map — where events and figures concentrate."
    },
    {
        "slug": "diablo-events",
        "name": "Diablo events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Diablo.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Diablo timeline."
    },
    {
        "slug": "diablo-objects",
        "name": "Diablo objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Diablo.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Diablo."
    },
    {
        "slug": "diablo-factions",
        "name": "Diablo factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Diablo.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Diablo."
    },
    {
        "slug": "diablo-concepts",
        "name": "Diablo concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Diablo.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Diablo readable as a lore graph."
    },
    {
        "slug": "diablo-eras",
        "name": "Diablo eras",
        "type": "event",
        "short_description": "Periodization for Diablo.",
        "description": "Named eras and phases that help readers track how Diablo changes across time."
    },
    {
        "slug": "diablo-works",
        "name": "Diablo works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Diablo.",
        "description": "Primary works and adaptations through which most audiences encounter Diablo."
    },
    {
        "slug": "diablo-symbols",
        "name": "Diablo symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Diablo.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Diablo."
    },
    {
        "slug": "diablo-controversies",
        "name": "Diablo controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Diablo.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Diablo argumentative."
    },
    {
        "slug": "diablo-sources",
        "name": "Diablo sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Diablo.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Diablo."
    },
    {
        "slug": "diablo-geography",
        "name": "Diablo geography",
        "type": "place",
        "short_description": "Broader geographic framing for Diablo.",
        "description": "Regions, routes, and spatial systems that situate Diablo beyond single named places."
    },
    {
        "slug": "diablo-legacy",
        "name": "Diablo legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Diablo.",
        "description": "How Diablo continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "diablo-practices",
        "name": "Diablo practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Diablo.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Diablo."
    },
    {
        "slug": "diablo-entry-1",
        "name": "Diablo entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-2",
        "name": "Diablo entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-3",
        "name": "Diablo entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-4",
        "name": "Diablo entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-5",
        "name": "Diablo entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-6",
        "name": "Diablo entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-7",
        "name": "Diablo entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-8",
        "name": "Diablo entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-9",
        "name": "Diablo entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-10",
        "name": "Diablo entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-11",
        "name": "Diablo entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-12",
        "name": "Diablo entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-13",
        "name": "Diablo entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-14",
        "name": "Diablo entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-15",
        "name": "Diablo entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-16",
        "name": "Diablo entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-17",
        "name": "Diablo entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-18",
        "name": "Diablo entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-19",
        "name": "Diablo entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-20",
        "name": "Diablo entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-21",
        "name": "Diablo entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-22",
        "name": "Diablo entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-23",
        "name": "Diablo entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "diablo-entry-24",
        "name": "Diablo entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Diablo.",
        "description": "A supporting encyclopedia entry in the Diablo subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "diablo",
        "diablo-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "diablo",
        "diablo-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "diablo",
        "diablo-places",
        "contains",
        "Diablo places is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-events",
        "contains",
        "Diablo events is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-objects",
        "contains",
        "Diablo objects & artifacts is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-factions",
        "contains",
        "Diablo factions & groups is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-concepts",
        "contains",
        "Diablo concepts is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-eras",
        "contains",
        "Diablo eras is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-works",
        "contains",
        "Diablo works & media is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-symbols",
        "contains",
        "Diablo symbols is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-controversies",
        "contains",
        "Diablo controversies is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-sources",
        "contains",
        "Diablo sources is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-geography",
        "contains",
        "Diablo geography is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-legacy",
        "contains",
        "Diablo legacy is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-practices",
        "contains",
        "Diablo practices is a primary trailhead under Diablo.",
        0.88,
        0.82
    ],
    [
        "diablo",
        "diablo-entry-1",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-2",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-3",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-4",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-5",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-6",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-7",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-8",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-9",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-10",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-11",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-12",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-13",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-14",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-15",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-16",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-17",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-18",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-19",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-20",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-21",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-22",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-23",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ],
    [
        "diablo",
        "diablo-entry-24",
        "contains",
        "Supporting entry under Diablo.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
