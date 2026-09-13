/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "death-note",
        "name": "Death Note",
        "type": "topic",
        "short_description": "Shinigami notebook, moral cat-and-mouse, and the thriller that defined mid-2000s anime discourse.",
        "description": "Shinigami notebook, moral cat-and-mouse, and the thriller that defined mid-2000s anime discourse. This Ton-o-Lore subject maps people, places, events, and ideas tied to Death Note so readers can follow long-tail connections across anime."
    },
    {
        "slug": "death-note-figures",
        "name": "Death Note figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Death Note.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Death Note."
    },
    {
        "slug": "death-note-world",
        "name": "Death Note world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Death Note.",
        "description": "Geography, institutions, and periodization that give Death Note its encyclopedia shape."
    },
    {
        "slug": "death-note-places",
        "name": "Death Note places",
        "type": "place",
        "short_description": "Locations and geographies that frame Death Note.",
        "description": "Places, regions, and built sites that give Death Note its map — where events and figures concentrate."
    },
    {
        "slug": "death-note-events",
        "name": "Death Note events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Death Note.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Death Note timeline."
    },
    {
        "slug": "death-note-objects",
        "name": "Death Note objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Death Note.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Death Note."
    },
    {
        "slug": "death-note-factions",
        "name": "Death Note factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Death Note.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Death Note."
    },
    {
        "slug": "death-note-concepts",
        "name": "Death Note concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Death Note.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Death Note readable as a lore graph."
    },
    {
        "slug": "death-note-eras",
        "name": "Death Note eras",
        "type": "event",
        "short_description": "Periodization for Death Note.",
        "description": "Named eras and phases that help readers track how Death Note changes across time."
    },
    {
        "slug": "death-note-works",
        "name": "Death Note works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Death Note.",
        "description": "Primary works and adaptations through which most audiences encounter Death Note."
    },
    {
        "slug": "death-note-symbols",
        "name": "Death Note symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Death Note.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Death Note."
    },
    {
        "slug": "death-note-controversies",
        "name": "Death Note controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Death Note.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Death Note argumentative."
    },
    {
        "slug": "death-note-sources",
        "name": "Death Note sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Death Note.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Death Note."
    },
    {
        "slug": "death-note-geography",
        "name": "Death Note geography",
        "type": "place",
        "short_description": "Broader geographic framing for Death Note.",
        "description": "Regions, routes, and spatial systems that situate Death Note beyond single named places."
    },
    {
        "slug": "death-note-legacy",
        "name": "Death Note legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Death Note.",
        "description": "How Death Note continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "death-note-practices",
        "name": "Death Note practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Death Note.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Death Note."
    },
    {
        "slug": "death-note-entry-1",
        "name": "Death Note entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-2",
        "name": "Death Note entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-3",
        "name": "Death Note entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-4",
        "name": "Death Note entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-5",
        "name": "Death Note entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-6",
        "name": "Death Note entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-7",
        "name": "Death Note entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-8",
        "name": "Death Note entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-9",
        "name": "Death Note entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-10",
        "name": "Death Note entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-11",
        "name": "Death Note entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-12",
        "name": "Death Note entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-13",
        "name": "Death Note entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-14",
        "name": "Death Note entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-15",
        "name": "Death Note entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-16",
        "name": "Death Note entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-17",
        "name": "Death Note entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-18",
        "name": "Death Note entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-19",
        "name": "Death Note entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-20",
        "name": "Death Note entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-21",
        "name": "Death Note entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-22",
        "name": "Death Note entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-23",
        "name": "Death Note entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "death-note-entry-24",
        "name": "Death Note entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Death Note.",
        "description": "A supporting encyclopedia entry in the Death Note subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "death-note",
        "death-note-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "death-note",
        "death-note-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "death-note",
        "death-note-places",
        "contains",
        "Death Note places is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-events",
        "contains",
        "Death Note events is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-objects",
        "contains",
        "Death Note objects & artifacts is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-factions",
        "contains",
        "Death Note factions & groups is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-concepts",
        "contains",
        "Death Note concepts is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-eras",
        "contains",
        "Death Note eras is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-works",
        "contains",
        "Death Note works & media is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-symbols",
        "contains",
        "Death Note symbols is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-controversies",
        "contains",
        "Death Note controversies is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-sources",
        "contains",
        "Death Note sources is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-geography",
        "contains",
        "Death Note geography is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-legacy",
        "contains",
        "Death Note legacy is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-practices",
        "contains",
        "Death Note practices is a primary trailhead under Death Note.",
        0.88,
        0.82
    ],
    [
        "death-note",
        "death-note-entry-1",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-2",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-3",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-4",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-5",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-6",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-7",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-8",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-9",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-10",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-11",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-12",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-13",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-14",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-15",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-16",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-17",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-18",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-19",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-20",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-21",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-22",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-23",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ],
    [
        "death-note",
        "death-note-entry-24",
        "contains",
        "Supporting entry under Death Note.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
