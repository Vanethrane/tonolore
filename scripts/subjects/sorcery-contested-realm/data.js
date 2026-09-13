/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sorcery-contested-realm",
        "name": "Sorcery: Contested Realm",
        "type": "topic",
        "short_description": "Hand-painted art, dual-plane play, and the retro-aesthetic TCG revival darling.",
        "description": "Hand-painted art, dual-plane play, and the retro-aesthetic TCG revival darling. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sorcery: Contested Realm so readers can follow long-tail connections across card games."
    },
    {
        "slug": "sorcery-contested-realm-figures",
        "name": "Sorcery: Contested Realm figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sorcery: Contested Realm.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sorcery: Contested Realm."
    },
    {
        "slug": "sorcery-contested-realm-world",
        "name": "Sorcery: Contested Realm world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sorcery: Contested Realm.",
        "description": "Geography, institutions, and periodization that give Sorcery: Contested Realm its encyclopedia shape."
    },
    {
        "slug": "sorcery-contested-realm-places",
        "name": "Sorcery: Contested Realm places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sorcery: Contested Realm.",
        "description": "Places, regions, and built sites that give Sorcery: Contested Realm its map — where events and figures concentrate."
    },
    {
        "slug": "sorcery-contested-realm-events",
        "name": "Sorcery: Contested Realm events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sorcery: Contested Realm.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sorcery: Contested Realm timeline."
    },
    {
        "slug": "sorcery-contested-realm-objects",
        "name": "Sorcery: Contested Realm objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sorcery: Contested Realm.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sorcery: Contested Realm."
    },
    {
        "slug": "sorcery-contested-realm-factions",
        "name": "Sorcery: Contested Realm factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sorcery: Contested Realm.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sorcery: Contested Realm."
    },
    {
        "slug": "sorcery-contested-realm-concepts",
        "name": "Sorcery: Contested Realm concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sorcery: Contested Realm.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sorcery: Contested Realm readable as a lore graph."
    },
    {
        "slug": "sorcery-contested-realm-eras",
        "name": "Sorcery: Contested Realm eras",
        "type": "event",
        "short_description": "Periodization for Sorcery: Contested Realm.",
        "description": "Named eras and phases that help readers track how Sorcery: Contested Realm changes across time."
    },
    {
        "slug": "sorcery-contested-realm-works",
        "name": "Sorcery: Contested Realm works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sorcery: Contested Realm.",
        "description": "Primary works and adaptations through which most audiences encounter Sorcery: Contested Realm."
    },
    {
        "slug": "sorcery-contested-realm-symbols",
        "name": "Sorcery: Contested Realm symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sorcery: Contested Realm.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sorcery: Contested Realm."
    },
    {
        "slug": "sorcery-contested-realm-controversies",
        "name": "Sorcery: Contested Realm controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sorcery: Contested Realm.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sorcery: Contested Realm argumentative."
    },
    {
        "slug": "sorcery-contested-realm-sources",
        "name": "Sorcery: Contested Realm sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sorcery: Contested Realm.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sorcery: Contested Realm."
    },
    {
        "slug": "sorcery-contested-realm-geography",
        "name": "Sorcery: Contested Realm geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sorcery: Contested Realm.",
        "description": "Regions, routes, and spatial systems that situate Sorcery: Contested Realm beyond single named places."
    },
    {
        "slug": "sorcery-contested-realm-legacy",
        "name": "Sorcery: Contested Realm legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sorcery: Contested Realm.",
        "description": "How Sorcery: Contested Realm continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sorcery-contested-realm-practices",
        "name": "Sorcery: Contested Realm practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sorcery: Contested Realm.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sorcery: Contested Realm."
    },
    {
        "slug": "sorcery-contested-realm-entry-1",
        "name": "Sorcery: Contested Realm entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-2",
        "name": "Sorcery: Contested Realm entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-3",
        "name": "Sorcery: Contested Realm entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-4",
        "name": "Sorcery: Contested Realm entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-5",
        "name": "Sorcery: Contested Realm entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-6",
        "name": "Sorcery: Contested Realm entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-7",
        "name": "Sorcery: Contested Realm entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-8",
        "name": "Sorcery: Contested Realm entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-9",
        "name": "Sorcery: Contested Realm entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-10",
        "name": "Sorcery: Contested Realm entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-11",
        "name": "Sorcery: Contested Realm entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-12",
        "name": "Sorcery: Contested Realm entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-13",
        "name": "Sorcery: Contested Realm entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-14",
        "name": "Sorcery: Contested Realm entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-15",
        "name": "Sorcery: Contested Realm entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-16",
        "name": "Sorcery: Contested Realm entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-17",
        "name": "Sorcery: Contested Realm entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-18",
        "name": "Sorcery: Contested Realm entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-19",
        "name": "Sorcery: Contested Realm entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-20",
        "name": "Sorcery: Contested Realm entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-21",
        "name": "Sorcery: Contested Realm entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-22",
        "name": "Sorcery: Contested Realm entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-23",
        "name": "Sorcery: Contested Realm entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sorcery-contested-realm-entry-24",
        "name": "Sorcery: Contested Realm entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sorcery: Contested Realm.",
        "description": "A supporting encyclopedia entry in the Sorcery: Contested Realm subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-places",
        "contains",
        "Sorcery: Contested Realm places is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-events",
        "contains",
        "Sorcery: Contested Realm events is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-objects",
        "contains",
        "Sorcery: Contested Realm objects & artifacts is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-factions",
        "contains",
        "Sorcery: Contested Realm factions & groups is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-concepts",
        "contains",
        "Sorcery: Contested Realm concepts is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-eras",
        "contains",
        "Sorcery: Contested Realm eras is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-works",
        "contains",
        "Sorcery: Contested Realm works & media is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-symbols",
        "contains",
        "Sorcery: Contested Realm symbols is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-controversies",
        "contains",
        "Sorcery: Contested Realm controversies is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-sources",
        "contains",
        "Sorcery: Contested Realm sources is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-geography",
        "contains",
        "Sorcery: Contested Realm geography is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-legacy",
        "contains",
        "Sorcery: Contested Realm legacy is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-practices",
        "contains",
        "Sorcery: Contested Realm practices is a primary trailhead under Sorcery: Contested Realm.",
        0.88,
        0.82
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-1",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-2",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-3",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-4",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-5",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-6",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-7",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-8",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-9",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-10",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-11",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-12",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-13",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-14",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-15",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-16",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-17",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-18",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-19",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-20",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-21",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-22",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-23",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ],
    [
        "sorcery-contested-realm",
        "sorcery-contested-realm-entry-24",
        "contains",
        "Supporting entry under Sorcery: Contested Realm.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
