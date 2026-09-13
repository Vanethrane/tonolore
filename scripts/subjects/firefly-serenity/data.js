/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "firefly-serenity",
        "name": "Firefly / Serenity",
        "type": "topic",
        "short_description": "Browncoats, Alliance politics, and Whedon’s short-lived space-western that built a lasting fandom.",
        "description": "Browncoats, Alliance politics, and Whedon’s short-lived space-western that built a lasting fandom. This Ton-o-Lore subject maps people, places, events, and ideas tied to Firefly / Serenity so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "firefly-serenity-figures",
        "name": "Firefly / Serenity figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Firefly / Serenity.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Firefly / Serenity."
    },
    {
        "slug": "firefly-serenity-world",
        "name": "Firefly / Serenity world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Firefly / Serenity.",
        "description": "Geography, institutions, and periodization that give Firefly / Serenity its encyclopedia shape."
    },
    {
        "slug": "firefly-serenity-places",
        "name": "Firefly / Serenity places",
        "type": "place",
        "short_description": "Locations and geographies that frame Firefly / Serenity.",
        "description": "Places, regions, and built sites that give Firefly / Serenity its map — where events and figures concentrate."
    },
    {
        "slug": "firefly-serenity-events",
        "name": "Firefly / Serenity events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Firefly / Serenity.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Firefly / Serenity timeline."
    },
    {
        "slug": "firefly-serenity-objects",
        "name": "Firefly / Serenity objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Firefly / Serenity.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Firefly / Serenity."
    },
    {
        "slug": "firefly-serenity-factions",
        "name": "Firefly / Serenity factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Firefly / Serenity.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Firefly / Serenity."
    },
    {
        "slug": "firefly-serenity-concepts",
        "name": "Firefly / Serenity concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Firefly / Serenity.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Firefly / Serenity readable as a lore graph."
    },
    {
        "slug": "firefly-serenity-eras",
        "name": "Firefly / Serenity eras",
        "type": "event",
        "short_description": "Periodization for Firefly / Serenity.",
        "description": "Named eras and phases that help readers track how Firefly / Serenity changes across time."
    },
    {
        "slug": "firefly-serenity-works",
        "name": "Firefly / Serenity works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Firefly / Serenity.",
        "description": "Primary works and adaptations through which most audiences encounter Firefly / Serenity."
    },
    {
        "slug": "firefly-serenity-symbols",
        "name": "Firefly / Serenity symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Firefly / Serenity.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Firefly / Serenity."
    },
    {
        "slug": "firefly-serenity-controversies",
        "name": "Firefly / Serenity controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Firefly / Serenity.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Firefly / Serenity argumentative."
    },
    {
        "slug": "firefly-serenity-sources",
        "name": "Firefly / Serenity sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Firefly / Serenity.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Firefly / Serenity."
    },
    {
        "slug": "firefly-serenity-geography",
        "name": "Firefly / Serenity geography",
        "type": "place",
        "short_description": "Broader geographic framing for Firefly / Serenity.",
        "description": "Regions, routes, and spatial systems that situate Firefly / Serenity beyond single named places."
    },
    {
        "slug": "firefly-serenity-legacy",
        "name": "Firefly / Serenity legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Firefly / Serenity.",
        "description": "How Firefly / Serenity continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "firefly-serenity-practices",
        "name": "Firefly / Serenity practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Firefly / Serenity.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Firefly / Serenity."
    },
    {
        "slug": "firefly-serenity-entry-1",
        "name": "Firefly / Serenity entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-2",
        "name": "Firefly / Serenity entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-3",
        "name": "Firefly / Serenity entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-4",
        "name": "Firefly / Serenity entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-5",
        "name": "Firefly / Serenity entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-6",
        "name": "Firefly / Serenity entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-7",
        "name": "Firefly / Serenity entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-8",
        "name": "Firefly / Serenity entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-9",
        "name": "Firefly / Serenity entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-10",
        "name": "Firefly / Serenity entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-11",
        "name": "Firefly / Serenity entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-12",
        "name": "Firefly / Serenity entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-13",
        "name": "Firefly / Serenity entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-14",
        "name": "Firefly / Serenity entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-15",
        "name": "Firefly / Serenity entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-16",
        "name": "Firefly / Serenity entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-17",
        "name": "Firefly / Serenity entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-18",
        "name": "Firefly / Serenity entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-19",
        "name": "Firefly / Serenity entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-20",
        "name": "Firefly / Serenity entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-21",
        "name": "Firefly / Serenity entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-22",
        "name": "Firefly / Serenity entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-23",
        "name": "Firefly / Serenity entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "firefly-serenity-entry-24",
        "name": "Firefly / Serenity entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Firefly / Serenity.",
        "description": "A supporting encyclopedia entry in the Firefly / Serenity subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "firefly-serenity",
        "firefly-serenity-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "firefly-serenity",
        "firefly-serenity-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "firefly-serenity",
        "firefly-serenity-places",
        "contains",
        "Firefly / Serenity places is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-events",
        "contains",
        "Firefly / Serenity events is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-objects",
        "contains",
        "Firefly / Serenity objects & artifacts is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-factions",
        "contains",
        "Firefly / Serenity factions & groups is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-concepts",
        "contains",
        "Firefly / Serenity concepts is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-eras",
        "contains",
        "Firefly / Serenity eras is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-works",
        "contains",
        "Firefly / Serenity works & media is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-symbols",
        "contains",
        "Firefly / Serenity symbols is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-controversies",
        "contains",
        "Firefly / Serenity controversies is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-sources",
        "contains",
        "Firefly / Serenity sources is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-geography",
        "contains",
        "Firefly / Serenity geography is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-legacy",
        "contains",
        "Firefly / Serenity legacy is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-practices",
        "contains",
        "Firefly / Serenity practices is a primary trailhead under Firefly / Serenity.",
        0.88,
        0.82
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-1",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-2",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-3",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-4",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-5",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-6",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-7",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-8",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-9",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-10",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-11",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-12",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-13",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-14",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-15",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-16",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-17",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-18",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-19",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-20",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-21",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-22",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-23",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ],
    [
        "firefly-serenity",
        "firefly-serenity-entry-24",
        "contains",
        "Supporting entry under Firefly / Serenity.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
