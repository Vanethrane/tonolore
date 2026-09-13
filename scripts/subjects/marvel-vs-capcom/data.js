/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "marvel-vs-capcom",
        "name": "Marvel vs. Capcom",
        "type": "topic",
        "short_description": "Tag chaos, assists, and the crossover mythology of comic heroes meeting Capcom icons.",
        "description": "Tag chaos, assists, and the crossover mythology of comic heroes meeting Capcom icons. This Ton-o-Lore subject maps people, places, events, and ideas tied to Marvel vs. Capcom so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "marvel-vs-capcom-figures",
        "name": "Marvel vs. Capcom figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Marvel vs. Capcom.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Marvel vs. Capcom."
    },
    {
        "slug": "marvel-vs-capcom-world",
        "name": "Marvel vs. Capcom world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Marvel vs. Capcom.",
        "description": "Geography, institutions, and periodization that give Marvel vs. Capcom its encyclopedia shape."
    },
    {
        "slug": "marvel-vs-capcom-places",
        "name": "Marvel vs. Capcom places",
        "type": "place",
        "short_description": "Locations and geographies that frame Marvel vs. Capcom.",
        "description": "Places, regions, and built sites that give Marvel vs. Capcom its map — where events and figures concentrate."
    },
    {
        "slug": "marvel-vs-capcom-events",
        "name": "Marvel vs. Capcom events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Marvel vs. Capcom.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Marvel vs. Capcom timeline."
    },
    {
        "slug": "marvel-vs-capcom-objects",
        "name": "Marvel vs. Capcom objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Marvel vs. Capcom.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Marvel vs. Capcom."
    },
    {
        "slug": "marvel-vs-capcom-factions",
        "name": "Marvel vs. Capcom factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Marvel vs. Capcom.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Marvel vs. Capcom."
    },
    {
        "slug": "marvel-vs-capcom-concepts",
        "name": "Marvel vs. Capcom concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Marvel vs. Capcom.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Marvel vs. Capcom readable as a lore graph."
    },
    {
        "slug": "marvel-vs-capcom-eras",
        "name": "Marvel vs. Capcom eras",
        "type": "event",
        "short_description": "Periodization for Marvel vs. Capcom.",
        "description": "Named eras and phases that help readers track how Marvel vs. Capcom changes across time."
    },
    {
        "slug": "marvel-vs-capcom-works",
        "name": "Marvel vs. Capcom works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Marvel vs. Capcom.",
        "description": "Primary works and adaptations through which most audiences encounter Marvel vs. Capcom."
    },
    {
        "slug": "marvel-vs-capcom-symbols",
        "name": "Marvel vs. Capcom symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Marvel vs. Capcom.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Marvel vs. Capcom."
    },
    {
        "slug": "marvel-vs-capcom-controversies",
        "name": "Marvel vs. Capcom controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Marvel vs. Capcom.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Marvel vs. Capcom argumentative."
    },
    {
        "slug": "marvel-vs-capcom-sources",
        "name": "Marvel vs. Capcom sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Marvel vs. Capcom.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Marvel vs. Capcom."
    },
    {
        "slug": "marvel-vs-capcom-geography",
        "name": "Marvel vs. Capcom geography",
        "type": "place",
        "short_description": "Broader geographic framing for Marvel vs. Capcom.",
        "description": "Regions, routes, and spatial systems that situate Marvel vs. Capcom beyond single named places."
    },
    {
        "slug": "marvel-vs-capcom-legacy",
        "name": "Marvel vs. Capcom legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Marvel vs. Capcom.",
        "description": "How Marvel vs. Capcom continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "marvel-vs-capcom-practices",
        "name": "Marvel vs. Capcom practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Marvel vs. Capcom.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Marvel vs. Capcom."
    },
    {
        "slug": "marvel-vs-capcom-entry-1",
        "name": "Marvel vs. Capcom entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-2",
        "name": "Marvel vs. Capcom entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-3",
        "name": "Marvel vs. Capcom entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-4",
        "name": "Marvel vs. Capcom entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-5",
        "name": "Marvel vs. Capcom entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-6",
        "name": "Marvel vs. Capcom entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-7",
        "name": "Marvel vs. Capcom entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-8",
        "name": "Marvel vs. Capcom entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-9",
        "name": "Marvel vs. Capcom entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-10",
        "name": "Marvel vs. Capcom entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-11",
        "name": "Marvel vs. Capcom entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-12",
        "name": "Marvel vs. Capcom entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-13",
        "name": "Marvel vs. Capcom entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-14",
        "name": "Marvel vs. Capcom entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-15",
        "name": "Marvel vs. Capcom entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-16",
        "name": "Marvel vs. Capcom entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-17",
        "name": "Marvel vs. Capcom entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-18",
        "name": "Marvel vs. Capcom entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-19",
        "name": "Marvel vs. Capcom entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-20",
        "name": "Marvel vs. Capcom entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-21",
        "name": "Marvel vs. Capcom entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-22",
        "name": "Marvel vs. Capcom entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-23",
        "name": "Marvel vs. Capcom entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-vs-capcom-entry-24",
        "name": "Marvel vs. Capcom entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel vs. Capcom.",
        "description": "A supporting encyclopedia entry in the Marvel vs. Capcom subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-places",
        "contains",
        "Marvel vs. Capcom places is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-events",
        "contains",
        "Marvel vs. Capcom events is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-objects",
        "contains",
        "Marvel vs. Capcom objects & artifacts is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-factions",
        "contains",
        "Marvel vs. Capcom factions & groups is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-concepts",
        "contains",
        "Marvel vs. Capcom concepts is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-eras",
        "contains",
        "Marvel vs. Capcom eras is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-works",
        "contains",
        "Marvel vs. Capcom works & media is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-symbols",
        "contains",
        "Marvel vs. Capcom symbols is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-controversies",
        "contains",
        "Marvel vs. Capcom controversies is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-sources",
        "contains",
        "Marvel vs. Capcom sources is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-geography",
        "contains",
        "Marvel vs. Capcom geography is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-legacy",
        "contains",
        "Marvel vs. Capcom legacy is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-practices",
        "contains",
        "Marvel vs. Capcom practices is a primary trailhead under Marvel vs. Capcom.",
        0.88,
        0.82
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-1",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-2",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-3",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-4",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-5",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-6",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-7",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-8",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-9",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-10",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-11",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-12",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-13",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-14",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-15",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-16",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-17",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-18",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-19",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-20",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-21",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-22",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-23",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ],
    [
        "marvel-vs-capcom",
        "marvel-vs-capcom-entry-24",
        "contains",
        "Supporting entry under Marvel vs. Capcom.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
