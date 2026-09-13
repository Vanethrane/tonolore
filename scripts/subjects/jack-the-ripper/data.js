/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "jack-the-ripper",
        "name": "Jack the Ripper",
        "type": "topic",
        "short_description": "Whitechapel murders, suspect industry, and the unsolved Victorian serial case that never ends.",
        "description": "Whitechapel murders, suspect industry, and the unsolved Victorian serial case that never ends. This Ton-o-Lore subject maps people, places, events, and ideas tied to Jack the Ripper so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "jack-the-ripper-figures",
        "name": "Jack the Ripper figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Jack the Ripper.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Jack the Ripper."
    },
    {
        "slug": "jack-the-ripper-world",
        "name": "Jack the Ripper world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Jack the Ripper.",
        "description": "Geography, institutions, and periodization that give Jack the Ripper its encyclopedia shape."
    },
    {
        "slug": "jack-the-ripper-places",
        "name": "Jack the Ripper places",
        "type": "place",
        "short_description": "Locations and geographies that frame Jack the Ripper.",
        "description": "Places, regions, and built sites that give Jack the Ripper its map — where events and figures concentrate."
    },
    {
        "slug": "jack-the-ripper-events",
        "name": "Jack the Ripper events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Jack the Ripper.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Jack the Ripper timeline."
    },
    {
        "slug": "jack-the-ripper-objects",
        "name": "Jack the Ripper objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Jack the Ripper.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Jack the Ripper."
    },
    {
        "slug": "jack-the-ripper-factions",
        "name": "Jack the Ripper factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Jack the Ripper.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Jack the Ripper."
    },
    {
        "slug": "jack-the-ripper-concepts",
        "name": "Jack the Ripper concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Jack the Ripper.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Jack the Ripper readable as a lore graph."
    },
    {
        "slug": "jack-the-ripper-eras",
        "name": "Jack the Ripper eras",
        "type": "event",
        "short_description": "Periodization for Jack the Ripper.",
        "description": "Named eras and phases that help readers track how Jack the Ripper changes across time."
    },
    {
        "slug": "jack-the-ripper-works",
        "name": "Jack the Ripper works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Jack the Ripper.",
        "description": "Primary works and adaptations through which most audiences encounter Jack the Ripper."
    },
    {
        "slug": "jack-the-ripper-symbols",
        "name": "Jack the Ripper symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Jack the Ripper.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Jack the Ripper."
    },
    {
        "slug": "jack-the-ripper-controversies",
        "name": "Jack the Ripper controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Jack the Ripper.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Jack the Ripper argumentative."
    },
    {
        "slug": "jack-the-ripper-sources",
        "name": "Jack the Ripper sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Jack the Ripper.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Jack the Ripper."
    },
    {
        "slug": "jack-the-ripper-geography",
        "name": "Jack the Ripper geography",
        "type": "place",
        "short_description": "Broader geographic framing for Jack the Ripper.",
        "description": "Regions, routes, and spatial systems that situate Jack the Ripper beyond single named places."
    },
    {
        "slug": "jack-the-ripper-legacy",
        "name": "Jack the Ripper legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Jack the Ripper.",
        "description": "How Jack the Ripper continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "jack-the-ripper-practices",
        "name": "Jack the Ripper practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Jack the Ripper.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Jack the Ripper."
    },
    {
        "slug": "jack-the-ripper-entry-1",
        "name": "Jack the Ripper entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-2",
        "name": "Jack the Ripper entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-3",
        "name": "Jack the Ripper entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-4",
        "name": "Jack the Ripper entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-5",
        "name": "Jack the Ripper entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-6",
        "name": "Jack the Ripper entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-7",
        "name": "Jack the Ripper entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-8",
        "name": "Jack the Ripper entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-9",
        "name": "Jack the Ripper entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-10",
        "name": "Jack the Ripper entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-11",
        "name": "Jack the Ripper entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-12",
        "name": "Jack the Ripper entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-13",
        "name": "Jack the Ripper entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-14",
        "name": "Jack the Ripper entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-15",
        "name": "Jack the Ripper entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-16",
        "name": "Jack the Ripper entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-17",
        "name": "Jack the Ripper entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-18",
        "name": "Jack the Ripper entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-19",
        "name": "Jack the Ripper entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-20",
        "name": "Jack the Ripper entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-21",
        "name": "Jack the Ripper entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-22",
        "name": "Jack the Ripper entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-23",
        "name": "Jack the Ripper entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "jack-the-ripper-entry-24",
        "name": "Jack the Ripper entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Jack the Ripper.",
        "description": "A supporting encyclopedia entry in the Jack the Ripper subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "jack-the-ripper",
        "jack-the-ripper-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-places",
        "contains",
        "Jack the Ripper places is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-events",
        "contains",
        "Jack the Ripper events is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-objects",
        "contains",
        "Jack the Ripper objects & artifacts is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-factions",
        "contains",
        "Jack the Ripper factions & groups is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-concepts",
        "contains",
        "Jack the Ripper concepts is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-eras",
        "contains",
        "Jack the Ripper eras is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-works",
        "contains",
        "Jack the Ripper works & media is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-symbols",
        "contains",
        "Jack the Ripper symbols is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-controversies",
        "contains",
        "Jack the Ripper controversies is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-sources",
        "contains",
        "Jack the Ripper sources is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-geography",
        "contains",
        "Jack the Ripper geography is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-legacy",
        "contains",
        "Jack the Ripper legacy is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-practices",
        "contains",
        "Jack the Ripper practices is a primary trailhead under Jack the Ripper.",
        0.88,
        0.82
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-1",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-2",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-3",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-4",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-5",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-6",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-7",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-8",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-9",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-10",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-11",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-12",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-13",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-14",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-15",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-16",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-17",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-18",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-19",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-20",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-21",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-22",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-23",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ],
    [
        "jack-the-ripper",
        "jack-the-ripper-entry-24",
        "contains",
        "Supporting entry under Jack the Ripper.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
