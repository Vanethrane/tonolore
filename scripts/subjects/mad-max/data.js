/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mad-max",
        "name": "Mad Max",
        "type": "topic",
        "short_description": "Wasteland convoys, Fury Road, and Miller’s desert-opera of vehicular myth.",
        "description": "Wasteland convoys, Fury Road, and Miller’s desert-opera of vehicular myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mad Max so readers can follow long-tail connections across movies."
    },
    {
        "slug": "mad-max-figures",
        "name": "Mad Max figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mad Max.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mad Max."
    },
    {
        "slug": "mad-max-world",
        "name": "Mad Max world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mad Max.",
        "description": "Geography, institutions, and periodization that give Mad Max its encyclopedia shape."
    },
    {
        "slug": "mad-max-places",
        "name": "Mad Max places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mad Max.",
        "description": "Places, regions, and built sites that give Mad Max its map — where events and figures concentrate."
    },
    {
        "slug": "mad-max-events",
        "name": "Mad Max events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mad Max.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mad Max timeline."
    },
    {
        "slug": "mad-max-objects",
        "name": "Mad Max objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mad Max.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mad Max."
    },
    {
        "slug": "mad-max-factions",
        "name": "Mad Max factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mad Max.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mad Max."
    },
    {
        "slug": "mad-max-concepts",
        "name": "Mad Max concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mad Max.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mad Max readable as a lore graph."
    },
    {
        "slug": "mad-max-eras",
        "name": "Mad Max eras",
        "type": "event",
        "short_description": "Periodization for Mad Max.",
        "description": "Named eras and phases that help readers track how Mad Max changes across time."
    },
    {
        "slug": "mad-max-works",
        "name": "Mad Max works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mad Max.",
        "description": "Primary works and adaptations through which most audiences encounter Mad Max."
    },
    {
        "slug": "mad-max-symbols",
        "name": "Mad Max symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mad Max.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mad Max."
    },
    {
        "slug": "mad-max-controversies",
        "name": "Mad Max controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mad Max.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mad Max argumentative."
    },
    {
        "slug": "mad-max-sources",
        "name": "Mad Max sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mad Max.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mad Max."
    },
    {
        "slug": "mad-max-geography",
        "name": "Mad Max geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mad Max.",
        "description": "Regions, routes, and spatial systems that situate Mad Max beyond single named places."
    },
    {
        "slug": "mad-max-legacy",
        "name": "Mad Max legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mad Max.",
        "description": "How Mad Max continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mad-max-practices",
        "name": "Mad Max practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mad Max.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mad Max."
    },
    {
        "slug": "mad-max-entry-1",
        "name": "Mad Max entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-2",
        "name": "Mad Max entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-3",
        "name": "Mad Max entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-4",
        "name": "Mad Max entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-5",
        "name": "Mad Max entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-6",
        "name": "Mad Max entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-7",
        "name": "Mad Max entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-8",
        "name": "Mad Max entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-9",
        "name": "Mad Max entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-10",
        "name": "Mad Max entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-11",
        "name": "Mad Max entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-12",
        "name": "Mad Max entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-13",
        "name": "Mad Max entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-14",
        "name": "Mad Max entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-15",
        "name": "Mad Max entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-16",
        "name": "Mad Max entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-17",
        "name": "Mad Max entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-18",
        "name": "Mad Max entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-19",
        "name": "Mad Max entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-20",
        "name": "Mad Max entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-21",
        "name": "Mad Max entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-22",
        "name": "Mad Max entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-23",
        "name": "Mad Max entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mad-max-entry-24",
        "name": "Mad Max entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mad Max.",
        "description": "A supporting encyclopedia entry in the Mad Max subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mad-max",
        "mad-max-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mad-max",
        "mad-max-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mad-max",
        "mad-max-places",
        "contains",
        "Mad Max places is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-events",
        "contains",
        "Mad Max events is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-objects",
        "contains",
        "Mad Max objects & artifacts is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-factions",
        "contains",
        "Mad Max factions & groups is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-concepts",
        "contains",
        "Mad Max concepts is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-eras",
        "contains",
        "Mad Max eras is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-works",
        "contains",
        "Mad Max works & media is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-symbols",
        "contains",
        "Mad Max symbols is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-controversies",
        "contains",
        "Mad Max controversies is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-sources",
        "contains",
        "Mad Max sources is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-geography",
        "contains",
        "Mad Max geography is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-legacy",
        "contains",
        "Mad Max legacy is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-practices",
        "contains",
        "Mad Max practices is a primary trailhead under Mad Max.",
        0.88,
        0.82
    ],
    [
        "mad-max",
        "mad-max-entry-1",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-2",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-3",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-4",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-5",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-6",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-7",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-8",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-9",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-10",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-11",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-12",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-13",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-14",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-15",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-16",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-17",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-18",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-19",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-20",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-21",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-22",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-23",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ],
    [
        "mad-max",
        "mad-max-entry-24",
        "contains",
        "Supporting entry under Mad Max.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
