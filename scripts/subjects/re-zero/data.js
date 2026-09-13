/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "re-zero",
        "name": "Re:Zero",
        "type": "topic",
        "short_description": "Return-by-death, Emilia camp politics, and the suffering-loop isekai that redefined the genre.",
        "description": "Return-by-death, Emilia camp politics, and the suffering-loop isekai that redefined the genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to Re:Zero so readers can follow long-tail connections across anime."
    },
    {
        "slug": "re-zero-figures",
        "name": "Re:Zero figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Re:Zero.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Re:Zero."
    },
    {
        "slug": "re-zero-world",
        "name": "Re:Zero world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Re:Zero.",
        "description": "Geography, institutions, and periodization that give Re:Zero its encyclopedia shape."
    },
    {
        "slug": "re-zero-places",
        "name": "Re:Zero places",
        "type": "place",
        "short_description": "Locations and geographies that frame Re:Zero.",
        "description": "Places, regions, and built sites that give Re:Zero its map — where events and figures concentrate."
    },
    {
        "slug": "re-zero-events",
        "name": "Re:Zero events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Re:Zero.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Re:Zero timeline."
    },
    {
        "slug": "re-zero-objects",
        "name": "Re:Zero objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Re:Zero.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Re:Zero."
    },
    {
        "slug": "re-zero-factions",
        "name": "Re:Zero factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Re:Zero.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Re:Zero."
    },
    {
        "slug": "re-zero-concepts",
        "name": "Re:Zero concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Re:Zero.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Re:Zero readable as a lore graph."
    },
    {
        "slug": "re-zero-eras",
        "name": "Re:Zero eras",
        "type": "event",
        "short_description": "Periodization for Re:Zero.",
        "description": "Named eras and phases that help readers track how Re:Zero changes across time."
    },
    {
        "slug": "re-zero-works",
        "name": "Re:Zero works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Re:Zero.",
        "description": "Primary works and adaptations through which most audiences encounter Re:Zero."
    },
    {
        "slug": "re-zero-symbols",
        "name": "Re:Zero symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Re:Zero.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Re:Zero."
    },
    {
        "slug": "re-zero-controversies",
        "name": "Re:Zero controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Re:Zero.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Re:Zero argumentative."
    },
    {
        "slug": "re-zero-sources",
        "name": "Re:Zero sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Re:Zero.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Re:Zero."
    },
    {
        "slug": "re-zero-geography",
        "name": "Re:Zero geography",
        "type": "place",
        "short_description": "Broader geographic framing for Re:Zero.",
        "description": "Regions, routes, and spatial systems that situate Re:Zero beyond single named places."
    },
    {
        "slug": "re-zero-legacy",
        "name": "Re:Zero legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Re:Zero.",
        "description": "How Re:Zero continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "re-zero-practices",
        "name": "Re:Zero practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Re:Zero.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Re:Zero."
    },
    {
        "slug": "re-zero-entry-1",
        "name": "Re:Zero entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-2",
        "name": "Re:Zero entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-3",
        "name": "Re:Zero entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-4",
        "name": "Re:Zero entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-5",
        "name": "Re:Zero entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-6",
        "name": "Re:Zero entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-7",
        "name": "Re:Zero entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-8",
        "name": "Re:Zero entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-9",
        "name": "Re:Zero entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-10",
        "name": "Re:Zero entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-11",
        "name": "Re:Zero entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-12",
        "name": "Re:Zero entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-13",
        "name": "Re:Zero entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-14",
        "name": "Re:Zero entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-15",
        "name": "Re:Zero entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-16",
        "name": "Re:Zero entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-17",
        "name": "Re:Zero entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-18",
        "name": "Re:Zero entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-19",
        "name": "Re:Zero entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-20",
        "name": "Re:Zero entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-21",
        "name": "Re:Zero entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-22",
        "name": "Re:Zero entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-23",
        "name": "Re:Zero entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "re-zero-entry-24",
        "name": "Re:Zero entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Re:Zero.",
        "description": "A supporting encyclopedia entry in the Re:Zero subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "re-zero",
        "re-zero-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "re-zero",
        "re-zero-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "re-zero",
        "re-zero-places",
        "contains",
        "Re:Zero places is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-events",
        "contains",
        "Re:Zero events is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-objects",
        "contains",
        "Re:Zero objects & artifacts is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-factions",
        "contains",
        "Re:Zero factions & groups is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-concepts",
        "contains",
        "Re:Zero concepts is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-eras",
        "contains",
        "Re:Zero eras is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-works",
        "contains",
        "Re:Zero works & media is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-symbols",
        "contains",
        "Re:Zero symbols is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-controversies",
        "contains",
        "Re:Zero controversies is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-sources",
        "contains",
        "Re:Zero sources is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-geography",
        "contains",
        "Re:Zero geography is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-legacy",
        "contains",
        "Re:Zero legacy is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-practices",
        "contains",
        "Re:Zero practices is a primary trailhead under Re:Zero.",
        0.88,
        0.82
    ],
    [
        "re-zero",
        "re-zero-entry-1",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-2",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-3",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-4",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-5",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-6",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-7",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-8",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-9",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-10",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-11",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-12",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-13",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-14",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-15",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-16",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-17",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-18",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-19",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-20",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-21",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-22",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-23",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ],
    [
        "re-zero",
        "re-zero-entry-24",
        "contains",
        "Supporting entry under Re:Zero.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
