/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "virtua-fighter",
        "name": "Virtua Fighter",
        "type": "topic",
        "short_description": "3D pioneers, dojo disciplines, and Sega’s foundational polygonal fighting series.",
        "description": "3D pioneers, dojo disciplines, and Sega’s foundational polygonal fighting series. This Ton-o-Lore subject maps people, places, events, and ideas tied to Virtua Fighter so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "virtua-fighter-figures",
        "name": "Virtua Fighter figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Virtua Fighter.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Virtua Fighter."
    },
    {
        "slug": "virtua-fighter-world",
        "name": "Virtua Fighter world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Virtua Fighter.",
        "description": "Geography, institutions, and periodization that give Virtua Fighter its encyclopedia shape."
    },
    {
        "slug": "virtua-fighter-places",
        "name": "Virtua Fighter places",
        "type": "place",
        "short_description": "Locations and geographies that frame Virtua Fighter.",
        "description": "Places, regions, and built sites that give Virtua Fighter its map — where events and figures concentrate."
    },
    {
        "slug": "virtua-fighter-events",
        "name": "Virtua Fighter events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Virtua Fighter.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Virtua Fighter timeline."
    },
    {
        "slug": "virtua-fighter-objects",
        "name": "Virtua Fighter objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Virtua Fighter.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Virtua Fighter."
    },
    {
        "slug": "virtua-fighter-factions",
        "name": "Virtua Fighter factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Virtua Fighter.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Virtua Fighter."
    },
    {
        "slug": "virtua-fighter-concepts",
        "name": "Virtua Fighter concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Virtua Fighter.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Virtua Fighter readable as a lore graph."
    },
    {
        "slug": "virtua-fighter-eras",
        "name": "Virtua Fighter eras",
        "type": "event",
        "short_description": "Periodization for Virtua Fighter.",
        "description": "Named eras and phases that help readers track how Virtua Fighter changes across time."
    },
    {
        "slug": "virtua-fighter-works",
        "name": "Virtua Fighter works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Virtua Fighter.",
        "description": "Primary works and adaptations through which most audiences encounter Virtua Fighter."
    },
    {
        "slug": "virtua-fighter-symbols",
        "name": "Virtua Fighter symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Virtua Fighter.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Virtua Fighter."
    },
    {
        "slug": "virtua-fighter-controversies",
        "name": "Virtua Fighter controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Virtua Fighter.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Virtua Fighter argumentative."
    },
    {
        "slug": "virtua-fighter-sources",
        "name": "Virtua Fighter sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Virtua Fighter.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Virtua Fighter."
    },
    {
        "slug": "virtua-fighter-geography",
        "name": "Virtua Fighter geography",
        "type": "place",
        "short_description": "Broader geographic framing for Virtua Fighter.",
        "description": "Regions, routes, and spatial systems that situate Virtua Fighter beyond single named places."
    },
    {
        "slug": "virtua-fighter-legacy",
        "name": "Virtua Fighter legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Virtua Fighter.",
        "description": "How Virtua Fighter continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "virtua-fighter-practices",
        "name": "Virtua Fighter practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Virtua Fighter.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Virtua Fighter."
    },
    {
        "slug": "virtua-fighter-entry-1",
        "name": "Virtua Fighter entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-2",
        "name": "Virtua Fighter entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-3",
        "name": "Virtua Fighter entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-4",
        "name": "Virtua Fighter entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-5",
        "name": "Virtua Fighter entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-6",
        "name": "Virtua Fighter entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-7",
        "name": "Virtua Fighter entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-8",
        "name": "Virtua Fighter entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-9",
        "name": "Virtua Fighter entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-10",
        "name": "Virtua Fighter entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-11",
        "name": "Virtua Fighter entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-12",
        "name": "Virtua Fighter entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-13",
        "name": "Virtua Fighter entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-14",
        "name": "Virtua Fighter entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-15",
        "name": "Virtua Fighter entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-16",
        "name": "Virtua Fighter entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-17",
        "name": "Virtua Fighter entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-18",
        "name": "Virtua Fighter entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-19",
        "name": "Virtua Fighter entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-20",
        "name": "Virtua Fighter entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-21",
        "name": "Virtua Fighter entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-22",
        "name": "Virtua Fighter entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-23",
        "name": "Virtua Fighter entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "virtua-fighter-entry-24",
        "name": "Virtua Fighter entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Virtua Fighter.",
        "description": "A supporting encyclopedia entry in the Virtua Fighter subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "virtua-fighter",
        "virtua-fighter-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "virtua-fighter",
        "virtua-fighter-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "virtua-fighter",
        "virtua-fighter-places",
        "contains",
        "Virtua Fighter places is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-events",
        "contains",
        "Virtua Fighter events is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-objects",
        "contains",
        "Virtua Fighter objects & artifacts is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-factions",
        "contains",
        "Virtua Fighter factions & groups is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-concepts",
        "contains",
        "Virtua Fighter concepts is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-eras",
        "contains",
        "Virtua Fighter eras is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-works",
        "contains",
        "Virtua Fighter works & media is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-symbols",
        "contains",
        "Virtua Fighter symbols is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-controversies",
        "contains",
        "Virtua Fighter controversies is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-sources",
        "contains",
        "Virtua Fighter sources is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-geography",
        "contains",
        "Virtua Fighter geography is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-legacy",
        "contains",
        "Virtua Fighter legacy is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-practices",
        "contains",
        "Virtua Fighter practices is a primary trailhead under Virtua Fighter.",
        0.88,
        0.82
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-1",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-2",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-3",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-4",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-5",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-6",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-7",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-8",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-9",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-10",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-11",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-12",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-13",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-14",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-15",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-16",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-17",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-18",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-19",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-20",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-21",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-22",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-23",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ],
    [
        "virtua-fighter",
        "virtua-fighter-entry-24",
        "contains",
        "Supporting entry under Virtua Fighter.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
