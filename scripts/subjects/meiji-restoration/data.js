/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "meiji-restoration",
        "name": "Meiji Restoration",
        "type": "topic",
        "short_description": "Japan’s rapid modernization, imperial reform, and the end of Tokugawa rule.",
        "description": "Japan’s rapid modernization, imperial reform, and the end of Tokugawa rule. This Ton-o-Lore subject maps people, places, events, and ideas tied to Meiji Restoration so readers can follow long-tail connections across history."
    },
    {
        "slug": "meiji-restoration-figures",
        "name": "Meiji Restoration figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Meiji Restoration.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Meiji Restoration."
    },
    {
        "slug": "meiji-restoration-world",
        "name": "Meiji Restoration world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Meiji Restoration.",
        "description": "Geography, institutions, and periodization that give Meiji Restoration its encyclopedia shape."
    },
    {
        "slug": "meiji-restoration-places",
        "name": "Meiji Restoration places",
        "type": "place",
        "short_description": "Locations and geographies that frame Meiji Restoration.",
        "description": "Places, regions, and built sites that give Meiji Restoration its map — where events and figures concentrate."
    },
    {
        "slug": "meiji-restoration-events",
        "name": "Meiji Restoration events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Meiji Restoration.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Meiji Restoration timeline."
    },
    {
        "slug": "meiji-restoration-objects",
        "name": "Meiji Restoration objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Meiji Restoration.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Meiji Restoration."
    },
    {
        "slug": "meiji-restoration-factions",
        "name": "Meiji Restoration factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Meiji Restoration.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Meiji Restoration."
    },
    {
        "slug": "meiji-restoration-concepts",
        "name": "Meiji Restoration concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Meiji Restoration.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Meiji Restoration readable as a lore graph."
    },
    {
        "slug": "meiji-restoration-eras",
        "name": "Meiji Restoration eras",
        "type": "event",
        "short_description": "Periodization for Meiji Restoration.",
        "description": "Named eras and phases that help readers track how Meiji Restoration changes across time."
    },
    {
        "slug": "meiji-restoration-works",
        "name": "Meiji Restoration works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Meiji Restoration.",
        "description": "Primary works and adaptations through which most audiences encounter Meiji Restoration."
    },
    {
        "slug": "meiji-restoration-symbols",
        "name": "Meiji Restoration symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Meiji Restoration.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Meiji Restoration."
    },
    {
        "slug": "meiji-restoration-controversies",
        "name": "Meiji Restoration controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Meiji Restoration.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Meiji Restoration argumentative."
    },
    {
        "slug": "meiji-restoration-sources",
        "name": "Meiji Restoration sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Meiji Restoration.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Meiji Restoration."
    },
    {
        "slug": "meiji-restoration-geography",
        "name": "Meiji Restoration geography",
        "type": "place",
        "short_description": "Broader geographic framing for Meiji Restoration.",
        "description": "Regions, routes, and spatial systems that situate Meiji Restoration beyond single named places."
    },
    {
        "slug": "meiji-restoration-legacy",
        "name": "Meiji Restoration legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Meiji Restoration.",
        "description": "How Meiji Restoration continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "meiji-restoration-practices",
        "name": "Meiji Restoration practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Meiji Restoration.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Meiji Restoration."
    },
    {
        "slug": "meiji-restoration-entry-1",
        "name": "Meiji Restoration entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-2",
        "name": "Meiji Restoration entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-3",
        "name": "Meiji Restoration entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-4",
        "name": "Meiji Restoration entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-5",
        "name": "Meiji Restoration entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-6",
        "name": "Meiji Restoration entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-7",
        "name": "Meiji Restoration entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-8",
        "name": "Meiji Restoration entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-9",
        "name": "Meiji Restoration entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-10",
        "name": "Meiji Restoration entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-11",
        "name": "Meiji Restoration entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-12",
        "name": "Meiji Restoration entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-13",
        "name": "Meiji Restoration entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-14",
        "name": "Meiji Restoration entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-15",
        "name": "Meiji Restoration entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-16",
        "name": "Meiji Restoration entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-17",
        "name": "Meiji Restoration entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-18",
        "name": "Meiji Restoration entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-19",
        "name": "Meiji Restoration entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-20",
        "name": "Meiji Restoration entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-21",
        "name": "Meiji Restoration entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-22",
        "name": "Meiji Restoration entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-23",
        "name": "Meiji Restoration entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "meiji-restoration-entry-24",
        "name": "Meiji Restoration entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Meiji Restoration.",
        "description": "A supporting encyclopedia entry in the Meiji Restoration subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "meiji-restoration",
        "meiji-restoration-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "meiji-restoration",
        "meiji-restoration-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "meiji-restoration",
        "meiji-restoration-places",
        "contains",
        "Meiji Restoration places is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-events",
        "contains",
        "Meiji Restoration events is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-objects",
        "contains",
        "Meiji Restoration objects & artifacts is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-factions",
        "contains",
        "Meiji Restoration factions & groups is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-concepts",
        "contains",
        "Meiji Restoration concepts is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-eras",
        "contains",
        "Meiji Restoration eras is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-works",
        "contains",
        "Meiji Restoration works & media is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-symbols",
        "contains",
        "Meiji Restoration symbols is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-controversies",
        "contains",
        "Meiji Restoration controversies is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-sources",
        "contains",
        "Meiji Restoration sources is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-geography",
        "contains",
        "Meiji Restoration geography is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-legacy",
        "contains",
        "Meiji Restoration legacy is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-practices",
        "contains",
        "Meiji Restoration practices is a primary trailhead under Meiji Restoration.",
        0.88,
        0.82
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-1",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-2",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-3",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-4",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-5",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-6",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-7",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-8",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-9",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-10",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-11",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-12",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-13",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-14",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-15",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-16",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-17",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-18",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-19",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-20",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-21",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-22",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-23",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ],
    [
        "meiji-restoration",
        "meiji-restoration-entry-24",
        "contains",
        "Supporting entry under Meiji Restoration.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
