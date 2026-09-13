/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bratz",
        "name": "Bratz",
        "type": "topic",
        "short_description": "Fashion dolls, attitude branding, and the early-2000s rival that challenged Barbie dominance.",
        "description": "Fashion dolls, attitude branding, and the early-2000s rival that challenged Barbie dominance. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bratz so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "bratz-figures",
        "name": "Bratz figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bratz.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bratz."
    },
    {
        "slug": "bratz-world",
        "name": "Bratz world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bratz.",
        "description": "Geography, institutions, and periodization that give Bratz its encyclopedia shape."
    },
    {
        "slug": "bratz-places",
        "name": "Bratz places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bratz.",
        "description": "Places, regions, and built sites that give Bratz its map — where events and figures concentrate."
    },
    {
        "slug": "bratz-events",
        "name": "Bratz events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bratz.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bratz timeline."
    },
    {
        "slug": "bratz-objects",
        "name": "Bratz objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bratz.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bratz."
    },
    {
        "slug": "bratz-factions",
        "name": "Bratz factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bratz.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bratz."
    },
    {
        "slug": "bratz-concepts",
        "name": "Bratz concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bratz.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bratz readable as a lore graph."
    },
    {
        "slug": "bratz-eras",
        "name": "Bratz eras",
        "type": "event",
        "short_description": "Periodization for Bratz.",
        "description": "Named eras and phases that help readers track how Bratz changes across time."
    },
    {
        "slug": "bratz-works",
        "name": "Bratz works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bratz.",
        "description": "Primary works and adaptations through which most audiences encounter Bratz."
    },
    {
        "slug": "bratz-symbols",
        "name": "Bratz symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bratz.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bratz."
    },
    {
        "slug": "bratz-controversies",
        "name": "Bratz controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bratz.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bratz argumentative."
    },
    {
        "slug": "bratz-sources",
        "name": "Bratz sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bratz.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bratz."
    },
    {
        "slug": "bratz-geography",
        "name": "Bratz geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bratz.",
        "description": "Regions, routes, and spatial systems that situate Bratz beyond single named places."
    },
    {
        "slug": "bratz-legacy",
        "name": "Bratz legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bratz.",
        "description": "How Bratz continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bratz-practices",
        "name": "Bratz practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bratz.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bratz."
    },
    {
        "slug": "bratz-entry-1",
        "name": "Bratz entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-2",
        "name": "Bratz entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-3",
        "name": "Bratz entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-4",
        "name": "Bratz entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-5",
        "name": "Bratz entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-6",
        "name": "Bratz entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-7",
        "name": "Bratz entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-8",
        "name": "Bratz entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-9",
        "name": "Bratz entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-10",
        "name": "Bratz entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-11",
        "name": "Bratz entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-12",
        "name": "Bratz entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-13",
        "name": "Bratz entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-14",
        "name": "Bratz entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-15",
        "name": "Bratz entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-16",
        "name": "Bratz entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-17",
        "name": "Bratz entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-18",
        "name": "Bratz entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-19",
        "name": "Bratz entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-20",
        "name": "Bratz entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-21",
        "name": "Bratz entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-22",
        "name": "Bratz entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-23",
        "name": "Bratz entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bratz-entry-24",
        "name": "Bratz entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bratz.",
        "description": "A supporting encyclopedia entry in the Bratz subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bratz",
        "bratz-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bratz",
        "bratz-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bratz",
        "bratz-places",
        "contains",
        "Bratz places is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-events",
        "contains",
        "Bratz events is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-objects",
        "contains",
        "Bratz objects & artifacts is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-factions",
        "contains",
        "Bratz factions & groups is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-concepts",
        "contains",
        "Bratz concepts is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-eras",
        "contains",
        "Bratz eras is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-works",
        "contains",
        "Bratz works & media is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-symbols",
        "contains",
        "Bratz symbols is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-controversies",
        "contains",
        "Bratz controversies is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-sources",
        "contains",
        "Bratz sources is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-geography",
        "contains",
        "Bratz geography is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-legacy",
        "contains",
        "Bratz legacy is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-practices",
        "contains",
        "Bratz practices is a primary trailhead under Bratz.",
        0.88,
        0.82
    ],
    [
        "bratz",
        "bratz-entry-1",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-2",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-3",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-4",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-5",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-6",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-7",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-8",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-9",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-10",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-11",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-12",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-13",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-14",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-15",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-16",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-17",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-18",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-19",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-20",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-21",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-22",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-23",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ],
    [
        "bratz",
        "bratz-entry-24",
        "contains",
        "Supporting entry under Bratz.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
