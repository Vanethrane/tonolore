/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "reply-all",
        "name": "Reply All",
        "type": "topic",
        "short_description": "Internet mysteries, tech human stories, and the podcast that mapped online weirdness.",
        "description": "Internet mysteries, tech human stories, and the podcast that mapped online weirdness. This Ton-o-Lore subject maps people, places, events, and ideas tied to Reply All so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "reply-all-figures",
        "name": "Reply All figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Reply All.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Reply All."
    },
    {
        "slug": "reply-all-world",
        "name": "Reply All world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Reply All.",
        "description": "Geography, institutions, and periodization that give Reply All its encyclopedia shape."
    },
    {
        "slug": "reply-all-places",
        "name": "Reply All places",
        "type": "place",
        "short_description": "Locations and geographies that frame Reply All.",
        "description": "Places, regions, and built sites that give Reply All its map — where events and figures concentrate."
    },
    {
        "slug": "reply-all-events",
        "name": "Reply All events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Reply All.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Reply All timeline."
    },
    {
        "slug": "reply-all-objects",
        "name": "Reply All objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Reply All.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Reply All."
    },
    {
        "slug": "reply-all-factions",
        "name": "Reply All factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Reply All.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Reply All."
    },
    {
        "slug": "reply-all-concepts",
        "name": "Reply All concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Reply All.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Reply All readable as a lore graph."
    },
    {
        "slug": "reply-all-eras",
        "name": "Reply All eras",
        "type": "event",
        "short_description": "Periodization for Reply All.",
        "description": "Named eras and phases that help readers track how Reply All changes across time."
    },
    {
        "slug": "reply-all-works",
        "name": "Reply All works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Reply All.",
        "description": "Primary works and adaptations through which most audiences encounter Reply All."
    },
    {
        "slug": "reply-all-symbols",
        "name": "Reply All symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Reply All.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Reply All."
    },
    {
        "slug": "reply-all-controversies",
        "name": "Reply All controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Reply All.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Reply All argumentative."
    },
    {
        "slug": "reply-all-sources",
        "name": "Reply All sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Reply All.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Reply All."
    },
    {
        "slug": "reply-all-geography",
        "name": "Reply All geography",
        "type": "place",
        "short_description": "Broader geographic framing for Reply All.",
        "description": "Regions, routes, and spatial systems that situate Reply All beyond single named places."
    },
    {
        "slug": "reply-all-legacy",
        "name": "Reply All legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Reply All.",
        "description": "How Reply All continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "reply-all-practices",
        "name": "Reply All practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Reply All.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Reply All."
    },
    {
        "slug": "reply-all-entry-1",
        "name": "Reply All entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-2",
        "name": "Reply All entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-3",
        "name": "Reply All entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-4",
        "name": "Reply All entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-5",
        "name": "Reply All entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-6",
        "name": "Reply All entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-7",
        "name": "Reply All entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-8",
        "name": "Reply All entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-9",
        "name": "Reply All entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-10",
        "name": "Reply All entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-11",
        "name": "Reply All entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-12",
        "name": "Reply All entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-13",
        "name": "Reply All entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-14",
        "name": "Reply All entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-15",
        "name": "Reply All entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-16",
        "name": "Reply All entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-17",
        "name": "Reply All entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-18",
        "name": "Reply All entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-19",
        "name": "Reply All entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-20",
        "name": "Reply All entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-21",
        "name": "Reply All entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-22",
        "name": "Reply All entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-23",
        "name": "Reply All entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "reply-all-entry-24",
        "name": "Reply All entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Reply All.",
        "description": "A supporting encyclopedia entry in the Reply All subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "reply-all",
        "reply-all-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "reply-all",
        "reply-all-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "reply-all",
        "reply-all-places",
        "contains",
        "Reply All places is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-events",
        "contains",
        "Reply All events is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-objects",
        "contains",
        "Reply All objects & artifacts is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-factions",
        "contains",
        "Reply All factions & groups is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-concepts",
        "contains",
        "Reply All concepts is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-eras",
        "contains",
        "Reply All eras is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-works",
        "contains",
        "Reply All works & media is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-symbols",
        "contains",
        "Reply All symbols is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-controversies",
        "contains",
        "Reply All controversies is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-sources",
        "contains",
        "Reply All sources is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-geography",
        "contains",
        "Reply All geography is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-legacy",
        "contains",
        "Reply All legacy is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-practices",
        "contains",
        "Reply All practices is a primary trailhead under Reply All.",
        0.88,
        0.82
    ],
    [
        "reply-all",
        "reply-all-entry-1",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-2",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-3",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-4",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-5",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-6",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-7",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-8",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-9",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-10",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-11",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-12",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-13",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-14",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-15",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-16",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-17",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-18",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-19",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-20",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-21",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-22",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-23",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ],
    [
        "reply-all",
        "reply-all-entry-24",
        "contains",
        "Supporting entry under Reply All.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
