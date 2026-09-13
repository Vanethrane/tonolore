/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hermeticism",
        "name": "Hermeticism",
        "type": "topic",
        "short_description": "Hermes Trismegistus, as above so below, and the syncretic philosophy that fed Western esotericism.",
        "description": "Hermes Trismegistus, as above so below, and the syncretic philosophy that fed Western esotericism. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hermeticism so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "hermeticism-figures",
        "name": "Hermeticism figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hermeticism.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hermeticism."
    },
    {
        "slug": "hermeticism-world",
        "name": "Hermeticism world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hermeticism.",
        "description": "Geography, institutions, and periodization that give Hermeticism its encyclopedia shape."
    },
    {
        "slug": "hermeticism-places",
        "name": "Hermeticism places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hermeticism.",
        "description": "Places, regions, and built sites that give Hermeticism its map — where events and figures concentrate."
    },
    {
        "slug": "hermeticism-events",
        "name": "Hermeticism events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hermeticism.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hermeticism timeline."
    },
    {
        "slug": "hermeticism-objects",
        "name": "Hermeticism objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hermeticism.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hermeticism."
    },
    {
        "slug": "hermeticism-factions",
        "name": "Hermeticism factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hermeticism.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hermeticism."
    },
    {
        "slug": "hermeticism-concepts",
        "name": "Hermeticism concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hermeticism.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hermeticism readable as a lore graph."
    },
    {
        "slug": "hermeticism-eras",
        "name": "Hermeticism eras",
        "type": "event",
        "short_description": "Periodization for Hermeticism.",
        "description": "Named eras and phases that help readers track how Hermeticism changes across time."
    },
    {
        "slug": "hermeticism-works",
        "name": "Hermeticism works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hermeticism.",
        "description": "Primary works and adaptations through which most audiences encounter Hermeticism."
    },
    {
        "slug": "hermeticism-symbols",
        "name": "Hermeticism symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hermeticism.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hermeticism."
    },
    {
        "slug": "hermeticism-controversies",
        "name": "Hermeticism controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hermeticism.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hermeticism argumentative."
    },
    {
        "slug": "hermeticism-sources",
        "name": "Hermeticism sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hermeticism.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hermeticism."
    },
    {
        "slug": "hermeticism-geography",
        "name": "Hermeticism geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hermeticism.",
        "description": "Regions, routes, and spatial systems that situate Hermeticism beyond single named places."
    },
    {
        "slug": "hermeticism-legacy",
        "name": "Hermeticism legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hermeticism.",
        "description": "How Hermeticism continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hermeticism-practices",
        "name": "Hermeticism practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hermeticism.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hermeticism."
    },
    {
        "slug": "hermeticism-entry-1",
        "name": "Hermeticism entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-2",
        "name": "Hermeticism entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-3",
        "name": "Hermeticism entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-4",
        "name": "Hermeticism entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-5",
        "name": "Hermeticism entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-6",
        "name": "Hermeticism entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-7",
        "name": "Hermeticism entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-8",
        "name": "Hermeticism entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-9",
        "name": "Hermeticism entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-10",
        "name": "Hermeticism entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-11",
        "name": "Hermeticism entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-12",
        "name": "Hermeticism entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-13",
        "name": "Hermeticism entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-14",
        "name": "Hermeticism entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-15",
        "name": "Hermeticism entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-16",
        "name": "Hermeticism entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-17",
        "name": "Hermeticism entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-18",
        "name": "Hermeticism entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-19",
        "name": "Hermeticism entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-20",
        "name": "Hermeticism entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-21",
        "name": "Hermeticism entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-22",
        "name": "Hermeticism entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-23",
        "name": "Hermeticism entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hermeticism-entry-24",
        "name": "Hermeticism entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermeticism.",
        "description": "A supporting encyclopedia entry in the Hermeticism subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hermeticism",
        "hermeticism-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hermeticism",
        "hermeticism-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hermeticism",
        "hermeticism-places",
        "contains",
        "Hermeticism places is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-events",
        "contains",
        "Hermeticism events is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-objects",
        "contains",
        "Hermeticism objects & artifacts is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-factions",
        "contains",
        "Hermeticism factions & groups is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-concepts",
        "contains",
        "Hermeticism concepts is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-eras",
        "contains",
        "Hermeticism eras is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-works",
        "contains",
        "Hermeticism works & media is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-symbols",
        "contains",
        "Hermeticism symbols is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-controversies",
        "contains",
        "Hermeticism controversies is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-sources",
        "contains",
        "Hermeticism sources is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-geography",
        "contains",
        "Hermeticism geography is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-legacy",
        "contains",
        "Hermeticism legacy is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-practices",
        "contains",
        "Hermeticism practices is a primary trailhead under Hermeticism.",
        0.88,
        0.82
    ],
    [
        "hermeticism",
        "hermeticism-entry-1",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-2",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-3",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-4",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-5",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-6",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-7",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-8",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-9",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-10",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-11",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-12",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-13",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-14",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-15",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-16",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-17",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-18",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-19",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-20",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-21",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-22",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-23",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ],
    [
        "hermeticism",
        "hermeticism-entry-24",
        "contains",
        "Supporting entry under Hermeticism.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
