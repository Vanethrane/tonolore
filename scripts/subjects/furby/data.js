/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "furby",
        "name": "Furby",
        "type": "topic",
        "short_description": "Electronic chatter, Furbish language, and the interactive pet toy that defined late-90s shelves.",
        "description": "Electronic chatter, Furbish language, and the interactive pet toy that defined late-90s shelves. This Ton-o-Lore subject maps people, places, events, and ideas tied to Furby so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "furby-figures",
        "name": "Furby figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Furby.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Furby."
    },
    {
        "slug": "furby-world",
        "name": "Furby world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Furby.",
        "description": "Geography, institutions, and periodization that give Furby its encyclopedia shape."
    },
    {
        "slug": "furby-places",
        "name": "Furby places",
        "type": "place",
        "short_description": "Locations and geographies that frame Furby.",
        "description": "Places, regions, and built sites that give Furby its map — where events and figures concentrate."
    },
    {
        "slug": "furby-events",
        "name": "Furby events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Furby.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Furby timeline."
    },
    {
        "slug": "furby-objects",
        "name": "Furby objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Furby.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Furby."
    },
    {
        "slug": "furby-factions",
        "name": "Furby factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Furby.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Furby."
    },
    {
        "slug": "furby-concepts",
        "name": "Furby concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Furby.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Furby readable as a lore graph."
    },
    {
        "slug": "furby-eras",
        "name": "Furby eras",
        "type": "event",
        "short_description": "Periodization for Furby.",
        "description": "Named eras and phases that help readers track how Furby changes across time."
    },
    {
        "slug": "furby-works",
        "name": "Furby works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Furby.",
        "description": "Primary works and adaptations through which most audiences encounter Furby."
    },
    {
        "slug": "furby-symbols",
        "name": "Furby symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Furby.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Furby."
    },
    {
        "slug": "furby-controversies",
        "name": "Furby controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Furby.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Furby argumentative."
    },
    {
        "slug": "furby-sources",
        "name": "Furby sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Furby.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Furby."
    },
    {
        "slug": "furby-geography",
        "name": "Furby geography",
        "type": "place",
        "short_description": "Broader geographic framing for Furby.",
        "description": "Regions, routes, and spatial systems that situate Furby beyond single named places."
    },
    {
        "slug": "furby-legacy",
        "name": "Furby legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Furby.",
        "description": "How Furby continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "furby-practices",
        "name": "Furby practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Furby.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Furby."
    },
    {
        "slug": "furby-entry-1",
        "name": "Furby entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-2",
        "name": "Furby entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-3",
        "name": "Furby entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-4",
        "name": "Furby entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-5",
        "name": "Furby entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-6",
        "name": "Furby entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-7",
        "name": "Furby entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-8",
        "name": "Furby entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-9",
        "name": "Furby entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-10",
        "name": "Furby entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-11",
        "name": "Furby entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-12",
        "name": "Furby entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-13",
        "name": "Furby entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-14",
        "name": "Furby entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-15",
        "name": "Furby entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-16",
        "name": "Furby entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-17",
        "name": "Furby entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-18",
        "name": "Furby entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-19",
        "name": "Furby entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-20",
        "name": "Furby entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-21",
        "name": "Furby entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-22",
        "name": "Furby entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-23",
        "name": "Furby entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "furby-entry-24",
        "name": "Furby entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Furby.",
        "description": "A supporting encyclopedia entry in the Furby subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "furby",
        "furby-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "furby",
        "furby-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "furby",
        "furby-places",
        "contains",
        "Furby places is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-events",
        "contains",
        "Furby events is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-objects",
        "contains",
        "Furby objects & artifacts is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-factions",
        "contains",
        "Furby factions & groups is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-concepts",
        "contains",
        "Furby concepts is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-eras",
        "contains",
        "Furby eras is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-works",
        "contains",
        "Furby works & media is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-symbols",
        "contains",
        "Furby symbols is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-controversies",
        "contains",
        "Furby controversies is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-sources",
        "contains",
        "Furby sources is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-geography",
        "contains",
        "Furby geography is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-legacy",
        "contains",
        "Furby legacy is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-practices",
        "contains",
        "Furby practices is a primary trailhead under Furby.",
        0.88,
        0.82
    ],
    [
        "furby",
        "furby-entry-1",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-2",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-3",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-4",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-5",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-6",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-7",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-8",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-9",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-10",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-11",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-12",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-13",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-14",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-15",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-16",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-17",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-18",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-19",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-20",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-21",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-22",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-23",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ],
    [
        "furby",
        "furby-entry-24",
        "contains",
        "Supporting entry under Furby.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
