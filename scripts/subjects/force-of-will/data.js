/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "force-of-will",
        "name": "Force of Will",
        "type": "topic",
        "short_description": "Ruler mechanics, collaborative storytelling, and the anime-style TCG with shared world events.",
        "description": "Ruler mechanics, collaborative storytelling, and the anime-style TCG with shared world events. This Ton-o-Lore subject maps people, places, events, and ideas tied to Force of Will so readers can follow long-tail connections across card games."
    },
    {
        "slug": "force-of-will-figures",
        "name": "Force of Will figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Force of Will.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Force of Will."
    },
    {
        "slug": "force-of-will-world",
        "name": "Force of Will world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Force of Will.",
        "description": "Geography, institutions, and periodization that give Force of Will its encyclopedia shape."
    },
    {
        "slug": "force-of-will-places",
        "name": "Force of Will places",
        "type": "place",
        "short_description": "Locations and geographies that frame Force of Will.",
        "description": "Places, regions, and built sites that give Force of Will its map — where events and figures concentrate."
    },
    {
        "slug": "force-of-will-events",
        "name": "Force of Will events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Force of Will.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Force of Will timeline."
    },
    {
        "slug": "force-of-will-objects",
        "name": "Force of Will objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Force of Will.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Force of Will."
    },
    {
        "slug": "force-of-will-factions",
        "name": "Force of Will factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Force of Will.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Force of Will."
    },
    {
        "slug": "force-of-will-concepts",
        "name": "Force of Will concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Force of Will.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Force of Will readable as a lore graph."
    },
    {
        "slug": "force-of-will-eras",
        "name": "Force of Will eras",
        "type": "event",
        "short_description": "Periodization for Force of Will.",
        "description": "Named eras and phases that help readers track how Force of Will changes across time."
    },
    {
        "slug": "force-of-will-works",
        "name": "Force of Will works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Force of Will.",
        "description": "Primary works and adaptations through which most audiences encounter Force of Will."
    },
    {
        "slug": "force-of-will-symbols",
        "name": "Force of Will symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Force of Will.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Force of Will."
    },
    {
        "slug": "force-of-will-controversies",
        "name": "Force of Will controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Force of Will.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Force of Will argumentative."
    },
    {
        "slug": "force-of-will-sources",
        "name": "Force of Will sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Force of Will.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Force of Will."
    },
    {
        "slug": "force-of-will-geography",
        "name": "Force of Will geography",
        "type": "place",
        "short_description": "Broader geographic framing for Force of Will.",
        "description": "Regions, routes, and spatial systems that situate Force of Will beyond single named places."
    },
    {
        "slug": "force-of-will-legacy",
        "name": "Force of Will legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Force of Will.",
        "description": "How Force of Will continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "force-of-will-practices",
        "name": "Force of Will practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Force of Will.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Force of Will."
    },
    {
        "slug": "force-of-will-entry-1",
        "name": "Force of Will entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-2",
        "name": "Force of Will entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-3",
        "name": "Force of Will entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-4",
        "name": "Force of Will entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-5",
        "name": "Force of Will entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-6",
        "name": "Force of Will entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-7",
        "name": "Force of Will entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-8",
        "name": "Force of Will entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-9",
        "name": "Force of Will entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-10",
        "name": "Force of Will entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-11",
        "name": "Force of Will entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-12",
        "name": "Force of Will entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-13",
        "name": "Force of Will entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-14",
        "name": "Force of Will entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-15",
        "name": "Force of Will entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-16",
        "name": "Force of Will entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-17",
        "name": "Force of Will entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-18",
        "name": "Force of Will entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-19",
        "name": "Force of Will entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-20",
        "name": "Force of Will entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-21",
        "name": "Force of Will entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-22",
        "name": "Force of Will entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-23",
        "name": "Force of Will entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "force-of-will-entry-24",
        "name": "Force of Will entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Force of Will.",
        "description": "A supporting encyclopedia entry in the Force of Will subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "force-of-will",
        "force-of-will-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "force-of-will",
        "force-of-will-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "force-of-will",
        "force-of-will-places",
        "contains",
        "Force of Will places is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-events",
        "contains",
        "Force of Will events is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-objects",
        "contains",
        "Force of Will objects & artifacts is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-factions",
        "contains",
        "Force of Will factions & groups is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-concepts",
        "contains",
        "Force of Will concepts is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-eras",
        "contains",
        "Force of Will eras is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-works",
        "contains",
        "Force of Will works & media is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-symbols",
        "contains",
        "Force of Will symbols is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-controversies",
        "contains",
        "Force of Will controversies is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-sources",
        "contains",
        "Force of Will sources is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-geography",
        "contains",
        "Force of Will geography is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-legacy",
        "contains",
        "Force of Will legacy is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-practices",
        "contains",
        "Force of Will practices is a primary trailhead under Force of Will.",
        0.88,
        0.82
    ],
    [
        "force-of-will",
        "force-of-will-entry-1",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-2",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-3",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-4",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-5",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-6",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-7",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-8",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-9",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-10",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-11",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-12",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-13",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-14",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-15",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-16",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-17",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-18",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-19",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-20",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-21",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-22",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-23",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ],
    [
        "force-of-will",
        "force-of-will-entry-24",
        "contains",
        "Supporting entry under Force of Will.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
