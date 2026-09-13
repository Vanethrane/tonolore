/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "earthsea",
        "name": "Earthsea",
        "type": "topic",
        "short_description": "True names, archipelago magic, and Le Guin’s foundational secondary-world wizardry.",
        "description": "True names, archipelago magic, and Le Guin’s foundational secondary-world wizardry. This Ton-o-Lore subject maps people, places, events, and ideas tied to Earthsea so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "earthsea-figures",
        "name": "Earthsea figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Earthsea.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Earthsea."
    },
    {
        "slug": "earthsea-world",
        "name": "Earthsea world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Earthsea.",
        "description": "Geography, institutions, and periodization that give Earthsea its encyclopedia shape."
    },
    {
        "slug": "earthsea-places",
        "name": "Earthsea places",
        "type": "place",
        "short_description": "Locations and geographies that frame Earthsea.",
        "description": "Places, regions, and built sites that give Earthsea its map — where events and figures concentrate."
    },
    {
        "slug": "earthsea-events",
        "name": "Earthsea events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Earthsea.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Earthsea timeline."
    },
    {
        "slug": "earthsea-objects",
        "name": "Earthsea objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Earthsea.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Earthsea."
    },
    {
        "slug": "earthsea-factions",
        "name": "Earthsea factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Earthsea.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Earthsea."
    },
    {
        "slug": "earthsea-concepts",
        "name": "Earthsea concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Earthsea.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Earthsea readable as a lore graph."
    },
    {
        "slug": "earthsea-eras",
        "name": "Earthsea eras",
        "type": "event",
        "short_description": "Periodization for Earthsea.",
        "description": "Named eras and phases that help readers track how Earthsea changes across time."
    },
    {
        "slug": "earthsea-works",
        "name": "Earthsea works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Earthsea.",
        "description": "Primary works and adaptations through which most audiences encounter Earthsea."
    },
    {
        "slug": "earthsea-symbols",
        "name": "Earthsea symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Earthsea.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Earthsea."
    },
    {
        "slug": "earthsea-controversies",
        "name": "Earthsea controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Earthsea.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Earthsea argumentative."
    },
    {
        "slug": "earthsea-sources",
        "name": "Earthsea sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Earthsea.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Earthsea."
    },
    {
        "slug": "earthsea-geography",
        "name": "Earthsea geography",
        "type": "place",
        "short_description": "Broader geographic framing for Earthsea.",
        "description": "Regions, routes, and spatial systems that situate Earthsea beyond single named places."
    },
    {
        "slug": "earthsea-legacy",
        "name": "Earthsea legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Earthsea.",
        "description": "How Earthsea continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "earthsea-practices",
        "name": "Earthsea practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Earthsea.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Earthsea."
    },
    {
        "slug": "earthsea-entry-1",
        "name": "Earthsea entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-2",
        "name": "Earthsea entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-3",
        "name": "Earthsea entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-4",
        "name": "Earthsea entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-5",
        "name": "Earthsea entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-6",
        "name": "Earthsea entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-7",
        "name": "Earthsea entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-8",
        "name": "Earthsea entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-9",
        "name": "Earthsea entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-10",
        "name": "Earthsea entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-11",
        "name": "Earthsea entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-12",
        "name": "Earthsea entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-13",
        "name": "Earthsea entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-14",
        "name": "Earthsea entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-15",
        "name": "Earthsea entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-16",
        "name": "Earthsea entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-17",
        "name": "Earthsea entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-18",
        "name": "Earthsea entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-19",
        "name": "Earthsea entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-20",
        "name": "Earthsea entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-21",
        "name": "Earthsea entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-22",
        "name": "Earthsea entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-23",
        "name": "Earthsea entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "earthsea-entry-24",
        "name": "Earthsea entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Earthsea.",
        "description": "A supporting encyclopedia entry in the Earthsea subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "earthsea",
        "earthsea-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "earthsea",
        "earthsea-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "earthsea",
        "earthsea-places",
        "contains",
        "Earthsea places is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-events",
        "contains",
        "Earthsea events is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-objects",
        "contains",
        "Earthsea objects & artifacts is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-factions",
        "contains",
        "Earthsea factions & groups is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-concepts",
        "contains",
        "Earthsea concepts is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-eras",
        "contains",
        "Earthsea eras is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-works",
        "contains",
        "Earthsea works & media is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-symbols",
        "contains",
        "Earthsea symbols is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-controversies",
        "contains",
        "Earthsea controversies is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-sources",
        "contains",
        "Earthsea sources is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-geography",
        "contains",
        "Earthsea geography is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-legacy",
        "contains",
        "Earthsea legacy is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-practices",
        "contains",
        "Earthsea practices is a primary trailhead under Earthsea.",
        0.88,
        0.82
    ],
    [
        "earthsea",
        "earthsea-entry-1",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-2",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-3",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-4",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-5",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-6",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-7",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-8",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-9",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-10",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-11",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-12",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-13",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-14",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-15",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-16",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-17",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-18",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-19",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-20",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-21",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-22",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-23",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ],
    [
        "earthsea",
        "earthsea-entry-24",
        "contains",
        "Supporting entry under Earthsea.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
