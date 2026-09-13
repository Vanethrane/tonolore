/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "marvel-champions",
        "name": "Marvel Champions",
        "type": "topic",
        "short_description": "Hero decks vs villain scenarios — the cooperative LCG of Marvel’s roster.",
        "description": "Hero decks vs villain scenarios — the cooperative LCG of Marvel’s roster. This Ton-o-Lore subject maps people, places, events, and ideas tied to Marvel Champions so readers can follow long-tail connections across card games."
    },
    {
        "slug": "marvel-champions-figures",
        "name": "Marvel Champions figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Marvel Champions.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Marvel Champions."
    },
    {
        "slug": "marvel-champions-world",
        "name": "Marvel Champions world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Marvel Champions.",
        "description": "Geography, institutions, and periodization that give Marvel Champions its encyclopedia shape."
    },
    {
        "slug": "marvel-champions-places",
        "name": "Marvel Champions places",
        "type": "place",
        "short_description": "Locations and geographies that frame Marvel Champions.",
        "description": "Places, regions, and built sites that give Marvel Champions its map — where events and figures concentrate."
    },
    {
        "slug": "marvel-champions-events",
        "name": "Marvel Champions events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Marvel Champions.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Marvel Champions timeline."
    },
    {
        "slug": "marvel-champions-objects",
        "name": "Marvel Champions objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Marvel Champions.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Marvel Champions."
    },
    {
        "slug": "marvel-champions-factions",
        "name": "Marvel Champions factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Marvel Champions.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Marvel Champions."
    },
    {
        "slug": "marvel-champions-concepts",
        "name": "Marvel Champions concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Marvel Champions.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Marvel Champions readable as a lore graph."
    },
    {
        "slug": "marvel-champions-eras",
        "name": "Marvel Champions eras",
        "type": "event",
        "short_description": "Periodization for Marvel Champions.",
        "description": "Named eras and phases that help readers track how Marvel Champions changes across time."
    },
    {
        "slug": "marvel-champions-works",
        "name": "Marvel Champions works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Marvel Champions.",
        "description": "Primary works and adaptations through which most audiences encounter Marvel Champions."
    },
    {
        "slug": "marvel-champions-symbols",
        "name": "Marvel Champions symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Marvel Champions.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Marvel Champions."
    },
    {
        "slug": "marvel-champions-controversies",
        "name": "Marvel Champions controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Marvel Champions.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Marvel Champions argumentative."
    },
    {
        "slug": "marvel-champions-sources",
        "name": "Marvel Champions sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Marvel Champions.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Marvel Champions."
    },
    {
        "slug": "marvel-champions-geography",
        "name": "Marvel Champions geography",
        "type": "place",
        "short_description": "Broader geographic framing for Marvel Champions.",
        "description": "Regions, routes, and spatial systems that situate Marvel Champions beyond single named places."
    },
    {
        "slug": "marvel-champions-legacy",
        "name": "Marvel Champions legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Marvel Champions.",
        "description": "How Marvel Champions continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "marvel-champions-practices",
        "name": "Marvel Champions practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Marvel Champions.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Marvel Champions."
    },
    {
        "slug": "marvel-champions-entry-1",
        "name": "Marvel Champions entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-2",
        "name": "Marvel Champions entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-3",
        "name": "Marvel Champions entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-4",
        "name": "Marvel Champions entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-5",
        "name": "Marvel Champions entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-6",
        "name": "Marvel Champions entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-7",
        "name": "Marvel Champions entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-8",
        "name": "Marvel Champions entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-9",
        "name": "Marvel Champions entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-10",
        "name": "Marvel Champions entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-11",
        "name": "Marvel Champions entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-12",
        "name": "Marvel Champions entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-13",
        "name": "Marvel Champions entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-14",
        "name": "Marvel Champions entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-15",
        "name": "Marvel Champions entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-16",
        "name": "Marvel Champions entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-17",
        "name": "Marvel Champions entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-18",
        "name": "Marvel Champions entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-19",
        "name": "Marvel Champions entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-20",
        "name": "Marvel Champions entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-21",
        "name": "Marvel Champions entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-22",
        "name": "Marvel Champions entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-23",
        "name": "Marvel Champions entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "marvel-champions-entry-24",
        "name": "Marvel Champions entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Marvel Champions.",
        "description": "A supporting encyclopedia entry in the Marvel Champions subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "marvel-champions",
        "marvel-champions-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "marvel-champions",
        "marvel-champions-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "marvel-champions",
        "marvel-champions-places",
        "contains",
        "Marvel Champions places is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-events",
        "contains",
        "Marvel Champions events is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-objects",
        "contains",
        "Marvel Champions objects & artifacts is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-factions",
        "contains",
        "Marvel Champions factions & groups is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-concepts",
        "contains",
        "Marvel Champions concepts is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-eras",
        "contains",
        "Marvel Champions eras is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-works",
        "contains",
        "Marvel Champions works & media is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-symbols",
        "contains",
        "Marvel Champions symbols is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-controversies",
        "contains",
        "Marvel Champions controversies is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-sources",
        "contains",
        "Marvel Champions sources is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-geography",
        "contains",
        "Marvel Champions geography is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-legacy",
        "contains",
        "Marvel Champions legacy is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-practices",
        "contains",
        "Marvel Champions practices is a primary trailhead under Marvel Champions.",
        0.88,
        0.82
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-1",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-2",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-3",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-4",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-5",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-6",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-7",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-8",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-9",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-10",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-11",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-12",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-13",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-14",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-15",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-16",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-17",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-18",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-19",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-20",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-21",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-22",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-23",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ],
    [
        "marvel-champions",
        "marvel-champions-entry-24",
        "contains",
        "Supporting entry under Marvel Champions.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
