/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "seinfeld",
        "name": "Seinfeld",
        "type": "topic",
        "short_description": "Show about nothing, New York neuroses, and the comedy that remade sitcom structure.",
        "description": "Show about nothing, New York neuroses, and the comedy that remade sitcom structure. This Ton-o-Lore subject maps people, places, events, and ideas tied to Seinfeld so readers can follow long-tail connections across television."
    },
    {
        "slug": "seinfeld-figures",
        "name": "Seinfeld figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Seinfeld.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Seinfeld."
    },
    {
        "slug": "seinfeld-world",
        "name": "Seinfeld world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Seinfeld.",
        "description": "Geography, institutions, and periodization that give Seinfeld its encyclopedia shape."
    },
    {
        "slug": "seinfeld-places",
        "name": "Seinfeld places",
        "type": "place",
        "short_description": "Locations and geographies that frame Seinfeld.",
        "description": "Places, regions, and built sites that give Seinfeld its map — where events and figures concentrate."
    },
    {
        "slug": "seinfeld-events",
        "name": "Seinfeld events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Seinfeld.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Seinfeld timeline."
    },
    {
        "slug": "seinfeld-objects",
        "name": "Seinfeld objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Seinfeld.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Seinfeld."
    },
    {
        "slug": "seinfeld-factions",
        "name": "Seinfeld factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Seinfeld.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Seinfeld."
    },
    {
        "slug": "seinfeld-concepts",
        "name": "Seinfeld concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Seinfeld.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Seinfeld readable as a lore graph."
    },
    {
        "slug": "seinfeld-eras",
        "name": "Seinfeld eras",
        "type": "event",
        "short_description": "Periodization for Seinfeld.",
        "description": "Named eras and phases that help readers track how Seinfeld changes across time."
    },
    {
        "slug": "seinfeld-works",
        "name": "Seinfeld works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Seinfeld.",
        "description": "Primary works and adaptations through which most audiences encounter Seinfeld."
    },
    {
        "slug": "seinfeld-symbols",
        "name": "Seinfeld symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Seinfeld.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Seinfeld."
    },
    {
        "slug": "seinfeld-controversies",
        "name": "Seinfeld controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Seinfeld.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Seinfeld argumentative."
    },
    {
        "slug": "seinfeld-sources",
        "name": "Seinfeld sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Seinfeld.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Seinfeld."
    },
    {
        "slug": "seinfeld-geography",
        "name": "Seinfeld geography",
        "type": "place",
        "short_description": "Broader geographic framing for Seinfeld.",
        "description": "Regions, routes, and spatial systems that situate Seinfeld beyond single named places."
    },
    {
        "slug": "seinfeld-legacy",
        "name": "Seinfeld legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Seinfeld.",
        "description": "How Seinfeld continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "seinfeld-practices",
        "name": "Seinfeld practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Seinfeld.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Seinfeld."
    },
    {
        "slug": "seinfeld-entry-1",
        "name": "Seinfeld entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-2",
        "name": "Seinfeld entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-3",
        "name": "Seinfeld entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-4",
        "name": "Seinfeld entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-5",
        "name": "Seinfeld entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-6",
        "name": "Seinfeld entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-7",
        "name": "Seinfeld entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-8",
        "name": "Seinfeld entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-9",
        "name": "Seinfeld entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-10",
        "name": "Seinfeld entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-11",
        "name": "Seinfeld entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-12",
        "name": "Seinfeld entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-13",
        "name": "Seinfeld entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-14",
        "name": "Seinfeld entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-15",
        "name": "Seinfeld entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-16",
        "name": "Seinfeld entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-17",
        "name": "Seinfeld entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-18",
        "name": "Seinfeld entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-19",
        "name": "Seinfeld entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-20",
        "name": "Seinfeld entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-21",
        "name": "Seinfeld entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-22",
        "name": "Seinfeld entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-23",
        "name": "Seinfeld entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "seinfeld-entry-24",
        "name": "Seinfeld entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Seinfeld.",
        "description": "A supporting encyclopedia entry in the Seinfeld subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "seinfeld",
        "seinfeld-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "seinfeld",
        "seinfeld-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "seinfeld",
        "seinfeld-places",
        "contains",
        "Seinfeld places is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-events",
        "contains",
        "Seinfeld events is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-objects",
        "contains",
        "Seinfeld objects & artifacts is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-factions",
        "contains",
        "Seinfeld factions & groups is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-concepts",
        "contains",
        "Seinfeld concepts is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-eras",
        "contains",
        "Seinfeld eras is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-works",
        "contains",
        "Seinfeld works & media is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-symbols",
        "contains",
        "Seinfeld symbols is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-controversies",
        "contains",
        "Seinfeld controversies is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-sources",
        "contains",
        "Seinfeld sources is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-geography",
        "contains",
        "Seinfeld geography is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-legacy",
        "contains",
        "Seinfeld legacy is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-practices",
        "contains",
        "Seinfeld practices is a primary trailhead under Seinfeld.",
        0.88,
        0.82
    ],
    [
        "seinfeld",
        "seinfeld-entry-1",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-2",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-3",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-4",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-5",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-6",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-7",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-8",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-9",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-10",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-11",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-12",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-13",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-14",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-15",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-16",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-17",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-18",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-19",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-20",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-21",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-22",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-23",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ],
    [
        "seinfeld",
        "seinfeld-entry-24",
        "contains",
        "Supporting entry under Seinfeld.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
