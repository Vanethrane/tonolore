/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "shakespeare",
        "name": "Shakespeare",
        "type": "topic",
        "short_description": "Plays, characters, and performance traditions around William Shakespeare's canon.",
        "description": "Plays, characters, and performance traditions around William Shakespeare's canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Shakespeare so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "shakespeare-figures",
        "name": "Shakespeare figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Shakespeare.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Shakespeare."
    },
    {
        "slug": "shakespeare-world",
        "name": "Shakespeare world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Shakespeare.",
        "description": "Geography, institutions, and periodization that give Shakespeare its encyclopedia shape."
    },
    {
        "slug": "shakespeare-places",
        "name": "Shakespeare places",
        "type": "place",
        "short_description": "Locations and geographies that frame Shakespeare.",
        "description": "Places, regions, and built sites that give Shakespeare its map — where events and figures concentrate."
    },
    {
        "slug": "shakespeare-events",
        "name": "Shakespeare events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Shakespeare.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Shakespeare timeline."
    },
    {
        "slug": "shakespeare-objects",
        "name": "Shakespeare objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Shakespeare.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Shakespeare."
    },
    {
        "slug": "shakespeare-factions",
        "name": "Shakespeare factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Shakespeare.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Shakespeare."
    },
    {
        "slug": "shakespeare-concepts",
        "name": "Shakespeare concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Shakespeare.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Shakespeare readable as a lore graph."
    },
    {
        "slug": "shakespeare-eras",
        "name": "Shakespeare eras",
        "type": "event",
        "short_description": "Periodization for Shakespeare.",
        "description": "Named eras and phases that help readers track how Shakespeare changes across time."
    },
    {
        "slug": "shakespeare-works",
        "name": "Shakespeare works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Shakespeare.",
        "description": "Primary works and adaptations through which most audiences encounter Shakespeare."
    },
    {
        "slug": "shakespeare-symbols",
        "name": "Shakespeare symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Shakespeare.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Shakespeare."
    },
    {
        "slug": "shakespeare-controversies",
        "name": "Shakespeare controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Shakespeare.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Shakespeare argumentative."
    },
    {
        "slug": "shakespeare-sources",
        "name": "Shakespeare sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Shakespeare.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Shakespeare."
    },
    {
        "slug": "shakespeare-geography",
        "name": "Shakespeare geography",
        "type": "place",
        "short_description": "Broader geographic framing for Shakespeare.",
        "description": "Regions, routes, and spatial systems that situate Shakespeare beyond single named places."
    },
    {
        "slug": "shakespeare-legacy",
        "name": "Shakespeare legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Shakespeare.",
        "description": "How Shakespeare continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "shakespeare-practices",
        "name": "Shakespeare practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Shakespeare.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Shakespeare."
    },
    {
        "slug": "shakespeare-entry-1",
        "name": "Shakespeare entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-2",
        "name": "Shakespeare entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-3",
        "name": "Shakespeare entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-4",
        "name": "Shakespeare entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-5",
        "name": "Shakespeare entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-6",
        "name": "Shakespeare entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-7",
        "name": "Shakespeare entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-8",
        "name": "Shakespeare entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-9",
        "name": "Shakespeare entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-10",
        "name": "Shakespeare entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-11",
        "name": "Shakespeare entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-12",
        "name": "Shakespeare entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-13",
        "name": "Shakespeare entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-14",
        "name": "Shakespeare entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-15",
        "name": "Shakespeare entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-16",
        "name": "Shakespeare entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-17",
        "name": "Shakespeare entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-18",
        "name": "Shakespeare entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-19",
        "name": "Shakespeare entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-20",
        "name": "Shakespeare entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-21",
        "name": "Shakespeare entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-22",
        "name": "Shakespeare entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-23",
        "name": "Shakespeare entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "shakespeare-entry-24",
        "name": "Shakespeare entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Shakespeare.",
        "description": "A supporting encyclopedia entry in the Shakespeare subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "shakespeare",
        "shakespeare-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "shakespeare",
        "shakespeare-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "shakespeare",
        "shakespeare-places",
        "contains",
        "Shakespeare places is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-events",
        "contains",
        "Shakespeare events is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-objects",
        "contains",
        "Shakespeare objects & artifacts is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-factions",
        "contains",
        "Shakespeare factions & groups is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-concepts",
        "contains",
        "Shakespeare concepts is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-eras",
        "contains",
        "Shakespeare eras is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-works",
        "contains",
        "Shakespeare works & media is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-symbols",
        "contains",
        "Shakespeare symbols is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-controversies",
        "contains",
        "Shakespeare controversies is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-sources",
        "contains",
        "Shakespeare sources is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-geography",
        "contains",
        "Shakespeare geography is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-legacy",
        "contains",
        "Shakespeare legacy is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-practices",
        "contains",
        "Shakespeare practices is a primary trailhead under Shakespeare.",
        0.88,
        0.82
    ],
    [
        "shakespeare",
        "shakespeare-entry-1",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-2",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-3",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-4",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-5",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-6",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-7",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-8",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-9",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-10",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-11",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-12",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-13",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-14",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-15",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-16",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-17",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-18",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-19",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-20",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-21",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-22",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-23",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ],
    [
        "shakespeare",
        "shakespeare-entry-24",
        "contains",
        "Supporting entry under Shakespeare.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
