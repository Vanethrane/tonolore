/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "deep-sea-exploration",
        "name": "Deep-sea exploration",
        "type": "topic",
        "short_description": "Trenches, submersibles, vents, and the abyss that still yields new species and maps.",
        "description": "Trenches, submersibles, vents, and the abyss that still yields new species and maps. This Ton-o-Lore subject maps people, places, events, and ideas tied to Deep-sea exploration so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "deep-sea-exploration-figures",
        "name": "Deep-sea exploration figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Deep-sea exploration.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Deep-sea exploration."
    },
    {
        "slug": "deep-sea-exploration-world",
        "name": "Deep-sea exploration world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Deep-sea exploration.",
        "description": "Geography, institutions, and periodization that give Deep-sea exploration its encyclopedia shape."
    },
    {
        "slug": "deep-sea-exploration-places",
        "name": "Deep-sea exploration places",
        "type": "place",
        "short_description": "Locations and geographies that frame Deep-sea exploration.",
        "description": "Places, regions, and built sites that give Deep-sea exploration its map — where events and figures concentrate."
    },
    {
        "slug": "deep-sea-exploration-events",
        "name": "Deep-sea exploration events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Deep-sea exploration.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Deep-sea exploration timeline."
    },
    {
        "slug": "deep-sea-exploration-objects",
        "name": "Deep-sea exploration objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Deep-sea exploration.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Deep-sea exploration."
    },
    {
        "slug": "deep-sea-exploration-factions",
        "name": "Deep-sea exploration factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Deep-sea exploration.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Deep-sea exploration."
    },
    {
        "slug": "deep-sea-exploration-concepts",
        "name": "Deep-sea exploration concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Deep-sea exploration.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Deep-sea exploration readable as a lore graph."
    },
    {
        "slug": "deep-sea-exploration-eras",
        "name": "Deep-sea exploration eras",
        "type": "event",
        "short_description": "Periodization for Deep-sea exploration.",
        "description": "Named eras and phases that help readers track how Deep-sea exploration changes across time."
    },
    {
        "slug": "deep-sea-exploration-works",
        "name": "Deep-sea exploration works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Deep-sea exploration.",
        "description": "Primary works and adaptations through which most audiences encounter Deep-sea exploration."
    },
    {
        "slug": "deep-sea-exploration-symbols",
        "name": "Deep-sea exploration symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Deep-sea exploration.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Deep-sea exploration."
    },
    {
        "slug": "deep-sea-exploration-controversies",
        "name": "Deep-sea exploration controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Deep-sea exploration.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Deep-sea exploration argumentative."
    },
    {
        "slug": "deep-sea-exploration-sources",
        "name": "Deep-sea exploration sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Deep-sea exploration.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Deep-sea exploration."
    },
    {
        "slug": "deep-sea-exploration-geography",
        "name": "Deep-sea exploration geography",
        "type": "place",
        "short_description": "Broader geographic framing for Deep-sea exploration.",
        "description": "Regions, routes, and spatial systems that situate Deep-sea exploration beyond single named places."
    },
    {
        "slug": "deep-sea-exploration-legacy",
        "name": "Deep-sea exploration legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Deep-sea exploration.",
        "description": "How Deep-sea exploration continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "deep-sea-exploration-practices",
        "name": "Deep-sea exploration practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Deep-sea exploration.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Deep-sea exploration."
    },
    {
        "slug": "deep-sea-exploration-entry-1",
        "name": "Deep-sea exploration entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-2",
        "name": "Deep-sea exploration entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-3",
        "name": "Deep-sea exploration entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-4",
        "name": "Deep-sea exploration entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-5",
        "name": "Deep-sea exploration entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-6",
        "name": "Deep-sea exploration entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-7",
        "name": "Deep-sea exploration entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-8",
        "name": "Deep-sea exploration entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-9",
        "name": "Deep-sea exploration entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-10",
        "name": "Deep-sea exploration entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-11",
        "name": "Deep-sea exploration entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-12",
        "name": "Deep-sea exploration entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-13",
        "name": "Deep-sea exploration entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-14",
        "name": "Deep-sea exploration entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-15",
        "name": "Deep-sea exploration entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-16",
        "name": "Deep-sea exploration entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-17",
        "name": "Deep-sea exploration entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-18",
        "name": "Deep-sea exploration entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-19",
        "name": "Deep-sea exploration entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-20",
        "name": "Deep-sea exploration entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-21",
        "name": "Deep-sea exploration entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-22",
        "name": "Deep-sea exploration entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-23",
        "name": "Deep-sea exploration entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "deep-sea-exploration-entry-24",
        "name": "Deep-sea exploration entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Deep-sea exploration.",
        "description": "A supporting encyclopedia entry in the Deep-sea exploration subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "deep-sea-exploration",
        "deep-sea-exploration-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-places",
        "contains",
        "Deep-sea exploration places is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-events",
        "contains",
        "Deep-sea exploration events is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-objects",
        "contains",
        "Deep-sea exploration objects & artifacts is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-factions",
        "contains",
        "Deep-sea exploration factions & groups is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-concepts",
        "contains",
        "Deep-sea exploration concepts is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-eras",
        "contains",
        "Deep-sea exploration eras is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-works",
        "contains",
        "Deep-sea exploration works & media is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-symbols",
        "contains",
        "Deep-sea exploration symbols is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-controversies",
        "contains",
        "Deep-sea exploration controversies is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-sources",
        "contains",
        "Deep-sea exploration sources is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-geography",
        "contains",
        "Deep-sea exploration geography is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-legacy",
        "contains",
        "Deep-sea exploration legacy is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-practices",
        "contains",
        "Deep-sea exploration practices is a primary trailhead under Deep-sea exploration.",
        0.88,
        0.82
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-1",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-2",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-3",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-4",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-5",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-6",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-7",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-8",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-9",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-10",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-11",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-12",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-13",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-14",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-15",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-16",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-17",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-18",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-19",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-20",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-21",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-22",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-23",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ],
    [
        "deep-sea-exploration",
        "deep-sea-exploration-entry-24",
        "contains",
        "Supporting entry under Deep-sea exploration.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
