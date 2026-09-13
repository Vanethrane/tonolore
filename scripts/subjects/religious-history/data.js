/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "religious-history",
        "name": "Religious history",
        "type": "topic",
        "short_description": "Founders, scriptures, schisms, councils, saints, and the institutions that carried belief through time.",
        "description": "Founders, scriptures, schisms, councils, saints, and the institutions that carried belief through time. This Ton-o-Lore subject maps people, places, events, and ideas tied to Religious history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "religious-history-figures",
        "name": "Religious history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Religious history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Religious history."
    },
    {
        "slug": "religious-history-world",
        "name": "Religious history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Religious history.",
        "description": "Geography, institutions, and periodization that give Religious history its encyclopedia shape."
    },
    {
        "slug": "religious-history-places",
        "name": "Religious history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Religious history.",
        "description": "Places, regions, and built sites that give Religious history its map — where events and figures concentrate."
    },
    {
        "slug": "religious-history-events",
        "name": "Religious history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Religious history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Religious history timeline."
    },
    {
        "slug": "religious-history-objects",
        "name": "Religious history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Religious history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Religious history."
    },
    {
        "slug": "religious-history-factions",
        "name": "Religious history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Religious history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Religious history."
    },
    {
        "slug": "religious-history-concepts",
        "name": "Religious history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Religious history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Religious history readable as a lore graph."
    },
    {
        "slug": "religious-history-eras",
        "name": "Religious history eras",
        "type": "event",
        "short_description": "Periodization for Religious history.",
        "description": "Named eras and phases that help readers track how Religious history changes across time."
    },
    {
        "slug": "religious-history-works",
        "name": "Religious history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Religious history.",
        "description": "Primary works and adaptations through which most audiences encounter Religious history."
    },
    {
        "slug": "religious-history-symbols",
        "name": "Religious history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Religious history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Religious history."
    },
    {
        "slug": "religious-history-controversies",
        "name": "Religious history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Religious history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Religious history argumentative."
    },
    {
        "slug": "religious-history-sources",
        "name": "Religious history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Religious history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Religious history."
    },
    {
        "slug": "religious-history-geography",
        "name": "Religious history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Religious history.",
        "description": "Regions, routes, and spatial systems that situate Religious history beyond single named places."
    },
    {
        "slug": "religious-history-legacy",
        "name": "Religious history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Religious history.",
        "description": "How Religious history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "religious-history-practices",
        "name": "Religious history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Religious history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Religious history."
    },
    {
        "slug": "religious-history-entry-1",
        "name": "Religious history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-2",
        "name": "Religious history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-3",
        "name": "Religious history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-4",
        "name": "Religious history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-5",
        "name": "Religious history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-6",
        "name": "Religious history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-7",
        "name": "Religious history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-8",
        "name": "Religious history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-9",
        "name": "Religious history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-10",
        "name": "Religious history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-11",
        "name": "Religious history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-12",
        "name": "Religious history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-13",
        "name": "Religious history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-14",
        "name": "Religious history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-15",
        "name": "Religious history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-16",
        "name": "Religious history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-17",
        "name": "Religious history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-18",
        "name": "Religious history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-19",
        "name": "Religious history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-20",
        "name": "Religious history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-21",
        "name": "Religious history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-22",
        "name": "Religious history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-23",
        "name": "Religious history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "religious-history-entry-24",
        "name": "Religious history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Religious history.",
        "description": "A supporting encyclopedia entry in the Religious history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "religious-history",
        "religious-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "religious-history",
        "religious-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "religious-history",
        "religious-history-places",
        "contains",
        "Religious history places is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-events",
        "contains",
        "Religious history events is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-objects",
        "contains",
        "Religious history objects & artifacts is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-factions",
        "contains",
        "Religious history factions & groups is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-concepts",
        "contains",
        "Religious history concepts is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-eras",
        "contains",
        "Religious history eras is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-works",
        "contains",
        "Religious history works & media is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-symbols",
        "contains",
        "Religious history symbols is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-controversies",
        "contains",
        "Religious history controversies is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-sources",
        "contains",
        "Religious history sources is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-geography",
        "contains",
        "Religious history geography is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-legacy",
        "contains",
        "Religious history legacy is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-practices",
        "contains",
        "Religious history practices is a primary trailhead under Religious history.",
        0.88,
        0.82
    ],
    [
        "religious-history",
        "religious-history-entry-1",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-2",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-3",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-4",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-5",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-6",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-7",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-8",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-9",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-10",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-11",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-12",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-13",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-14",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-15",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-16",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-17",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-18",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-19",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-20",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-21",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-22",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-23",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ],
    [
        "religious-history",
        "religious-history-entry-24",
        "contains",
        "Supporting entry under Religious history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
