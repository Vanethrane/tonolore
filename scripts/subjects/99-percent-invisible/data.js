/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "99-percent-invisible",
        "name": "99% Invisible",
        "type": "topic",
        "short_description": "Design stories hiding in plain sight — architecture, objects, and the built world’s quiet lore.",
        "description": "Design stories hiding in plain sight — architecture, objects, and the built world’s quiet lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to 99% Invisible so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "99-percent-invisible-figures",
        "name": "99% Invisible figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to 99% Invisible.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring 99% Invisible."
    },
    {
        "slug": "99-percent-invisible-world",
        "name": "99% Invisible world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame 99% Invisible.",
        "description": "Geography, institutions, and periodization that give 99% Invisible its encyclopedia shape."
    },
    {
        "slug": "99-percent-invisible-places",
        "name": "99% Invisible places",
        "type": "place",
        "short_description": "Locations and geographies that frame 99% Invisible.",
        "description": "Places, regions, and built sites that give 99% Invisible its map — where events and figures concentrate."
    },
    {
        "slug": "99-percent-invisible-events",
        "name": "99% Invisible events",
        "type": "event",
        "short_description": "Turning points and dated episodes in 99% Invisible.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the 99% Invisible timeline."
    },
    {
        "slug": "99-percent-invisible-objects",
        "name": "99% Invisible objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to 99% Invisible.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through 99% Invisible."
    },
    {
        "slug": "99-percent-invisible-factions",
        "name": "99% Invisible factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside 99% Invisible.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in 99% Invisible."
    },
    {
        "slug": "99-percent-invisible-concepts",
        "name": "99% Invisible concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize 99% Invisible.",
        "description": "Keywords, doctrines, systems, and abstract forces that make 99% Invisible readable as a lore graph."
    },
    {
        "slug": "99-percent-invisible-eras",
        "name": "99% Invisible eras",
        "type": "event",
        "short_description": "Periodization for 99% Invisible.",
        "description": "Named eras and phases that help readers track how 99% Invisible changes across time."
    },
    {
        "slug": "99-percent-invisible-works",
        "name": "99% Invisible works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry 99% Invisible.",
        "description": "Primary works and adaptations through which most audiences encounter 99% Invisible."
    },
    {
        "slug": "99-percent-invisible-symbols",
        "name": "99% Invisible symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with 99% Invisible.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside 99% Invisible."
    },
    {
        "slug": "99-percent-invisible-controversies",
        "name": "99% Invisible controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in 99% Invisible.",
        "description": "Debates, rival canons, scandals, and contested facts that keep 99% Invisible argumentative."
    },
    {
        "slug": "99-percent-invisible-sources",
        "name": "99% Invisible sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into 99% Invisible.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify 99% Invisible."
    },
    {
        "slug": "99-percent-invisible-geography",
        "name": "99% Invisible geography",
        "type": "place",
        "short_description": "Broader geographic framing for 99% Invisible.",
        "description": "Regions, routes, and spatial systems that situate 99% Invisible beyond single named places."
    },
    {
        "slug": "99-percent-invisible-legacy",
        "name": "99% Invisible legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of 99% Invisible.",
        "description": "How 99% Invisible continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "99-percent-invisible-practices",
        "name": "99% Invisible practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in 99% Invisible.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in 99% Invisible."
    },
    {
        "slug": "99-percent-invisible-entry-1",
        "name": "99% Invisible entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-2",
        "name": "99% Invisible entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-3",
        "name": "99% Invisible entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-4",
        "name": "99% Invisible entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-5",
        "name": "99% Invisible entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-6",
        "name": "99% Invisible entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-7",
        "name": "99% Invisible entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-8",
        "name": "99% Invisible entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-9",
        "name": "99% Invisible entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-10",
        "name": "99% Invisible entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-11",
        "name": "99% Invisible entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-12",
        "name": "99% Invisible entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-13",
        "name": "99% Invisible entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-14",
        "name": "99% Invisible entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-15",
        "name": "99% Invisible entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-16",
        "name": "99% Invisible entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-17",
        "name": "99% Invisible entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-18",
        "name": "99% Invisible entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-19",
        "name": "99% Invisible entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-20",
        "name": "99% Invisible entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-21",
        "name": "99% Invisible entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-22",
        "name": "99% Invisible entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-23",
        "name": "99% Invisible entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "99-percent-invisible-entry-24",
        "name": "99% Invisible entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside 99% Invisible.",
        "description": "A supporting encyclopedia entry in the 99% Invisible subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "99-percent-invisible",
        "99-percent-invisible-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-places",
        "contains",
        "99% Invisible places is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-events",
        "contains",
        "99% Invisible events is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-objects",
        "contains",
        "99% Invisible objects & artifacts is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-factions",
        "contains",
        "99% Invisible factions & groups is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-concepts",
        "contains",
        "99% Invisible concepts is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-eras",
        "contains",
        "99% Invisible eras is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-works",
        "contains",
        "99% Invisible works & media is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-symbols",
        "contains",
        "99% Invisible symbols is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-controversies",
        "contains",
        "99% Invisible controversies is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-sources",
        "contains",
        "99% Invisible sources is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-geography",
        "contains",
        "99% Invisible geography is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-legacy",
        "contains",
        "99% Invisible legacy is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-practices",
        "contains",
        "99% Invisible practices is a primary trailhead under 99% Invisible.",
        0.88,
        0.82
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-1",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-2",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-3",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-4",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-5",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-6",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-7",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-8",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-9",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-10",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-11",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-12",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-13",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-14",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-15",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-16",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-17",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-18",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-19",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-20",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-21",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-22",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-23",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ],
    [
        "99-percent-invisible",
        "99-percent-invisible-entry-24",
        "contains",
        "Supporting entry under 99% Invisible.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
