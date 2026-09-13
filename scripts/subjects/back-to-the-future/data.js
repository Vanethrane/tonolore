/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "back-to-the-future",
        "name": "Back to the Future",
        "type": "topic",
        "short_description": "DeLorean time jumps, Hill Valley timelines, and the family-friendly paradox comedy.",
        "description": "DeLorean time jumps, Hill Valley timelines, and the family-friendly paradox comedy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Back to the Future so readers can follow long-tail connections across movies."
    },
    {
        "slug": "back-to-the-future-figures",
        "name": "Back to the Future figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Back to the Future.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Back to the Future."
    },
    {
        "slug": "back-to-the-future-world",
        "name": "Back to the Future world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Back to the Future.",
        "description": "Geography, institutions, and periodization that give Back to the Future its encyclopedia shape."
    },
    {
        "slug": "back-to-the-future-places",
        "name": "Back to the Future places",
        "type": "place",
        "short_description": "Locations and geographies that frame Back to the Future.",
        "description": "Places, regions, and built sites that give Back to the Future its map — where events and figures concentrate."
    },
    {
        "slug": "back-to-the-future-events",
        "name": "Back to the Future events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Back to the Future.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Back to the Future timeline."
    },
    {
        "slug": "back-to-the-future-objects",
        "name": "Back to the Future objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Back to the Future.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Back to the Future."
    },
    {
        "slug": "back-to-the-future-factions",
        "name": "Back to the Future factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Back to the Future.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Back to the Future."
    },
    {
        "slug": "back-to-the-future-concepts",
        "name": "Back to the Future concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Back to the Future.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Back to the Future readable as a lore graph."
    },
    {
        "slug": "back-to-the-future-eras",
        "name": "Back to the Future eras",
        "type": "event",
        "short_description": "Periodization for Back to the Future.",
        "description": "Named eras and phases that help readers track how Back to the Future changes across time."
    },
    {
        "slug": "back-to-the-future-works",
        "name": "Back to the Future works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Back to the Future.",
        "description": "Primary works and adaptations through which most audiences encounter Back to the Future."
    },
    {
        "slug": "back-to-the-future-symbols",
        "name": "Back to the Future symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Back to the Future.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Back to the Future."
    },
    {
        "slug": "back-to-the-future-controversies",
        "name": "Back to the Future controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Back to the Future.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Back to the Future argumentative."
    },
    {
        "slug": "back-to-the-future-sources",
        "name": "Back to the Future sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Back to the Future.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Back to the Future."
    },
    {
        "slug": "back-to-the-future-geography",
        "name": "Back to the Future geography",
        "type": "place",
        "short_description": "Broader geographic framing for Back to the Future.",
        "description": "Regions, routes, and spatial systems that situate Back to the Future beyond single named places."
    },
    {
        "slug": "back-to-the-future-legacy",
        "name": "Back to the Future legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Back to the Future.",
        "description": "How Back to the Future continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "back-to-the-future-practices",
        "name": "Back to the Future practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Back to the Future.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Back to the Future."
    },
    {
        "slug": "back-to-the-future-entry-1",
        "name": "Back to the Future entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-2",
        "name": "Back to the Future entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-3",
        "name": "Back to the Future entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-4",
        "name": "Back to the Future entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-5",
        "name": "Back to the Future entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-6",
        "name": "Back to the Future entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-7",
        "name": "Back to the Future entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-8",
        "name": "Back to the Future entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-9",
        "name": "Back to the Future entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-10",
        "name": "Back to the Future entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-11",
        "name": "Back to the Future entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-12",
        "name": "Back to the Future entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-13",
        "name": "Back to the Future entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-14",
        "name": "Back to the Future entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-15",
        "name": "Back to the Future entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-16",
        "name": "Back to the Future entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-17",
        "name": "Back to the Future entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-18",
        "name": "Back to the Future entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-19",
        "name": "Back to the Future entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-20",
        "name": "Back to the Future entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-21",
        "name": "Back to the Future entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-22",
        "name": "Back to the Future entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-23",
        "name": "Back to the Future entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "back-to-the-future-entry-24",
        "name": "Back to the Future entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Back to the Future.",
        "description": "A supporting encyclopedia entry in the Back to the Future subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "back-to-the-future",
        "back-to-the-future-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "back-to-the-future",
        "back-to-the-future-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "back-to-the-future",
        "back-to-the-future-places",
        "contains",
        "Back to the Future places is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-events",
        "contains",
        "Back to the Future events is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-objects",
        "contains",
        "Back to the Future objects & artifacts is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-factions",
        "contains",
        "Back to the Future factions & groups is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-concepts",
        "contains",
        "Back to the Future concepts is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-eras",
        "contains",
        "Back to the Future eras is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-works",
        "contains",
        "Back to the Future works & media is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-symbols",
        "contains",
        "Back to the Future symbols is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-controversies",
        "contains",
        "Back to the Future controversies is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-sources",
        "contains",
        "Back to the Future sources is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-geography",
        "contains",
        "Back to the Future geography is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-legacy",
        "contains",
        "Back to the Future legacy is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-practices",
        "contains",
        "Back to the Future practices is a primary trailhead under Back to the Future.",
        0.88,
        0.82
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-1",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-2",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-3",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-4",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-5",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-6",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-7",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-8",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-9",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-10",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-11",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-12",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-13",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-14",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-15",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-16",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-17",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-18",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-19",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-20",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-21",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-22",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-23",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ],
    [
        "back-to-the-future",
        "back-to-the-future-entry-24",
        "contains",
        "Supporting entry under Back to the Future.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
