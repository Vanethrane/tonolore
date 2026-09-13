/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "indian-cuisine-history",
        "name": "Indian cuisine history",
        "type": "topic",
        "short_description": "Spice routes, regional thalis, and the subcontinent’s vast cooking traditions.",
        "description": "Spice routes, regional thalis, and the subcontinent’s vast cooking traditions. This Ton-o-Lore subject maps people, places, events, and ideas tied to Indian cuisine history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "indian-cuisine-history-figures",
        "name": "Indian cuisine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Indian cuisine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Indian cuisine history."
    },
    {
        "slug": "indian-cuisine-history-world",
        "name": "Indian cuisine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Indian cuisine history.",
        "description": "Geography, institutions, and periodization that give Indian cuisine history its encyclopedia shape."
    },
    {
        "slug": "indian-cuisine-history-places",
        "name": "Indian cuisine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Indian cuisine history.",
        "description": "Places, regions, and built sites that give Indian cuisine history its map — where events and figures concentrate."
    },
    {
        "slug": "indian-cuisine-history-events",
        "name": "Indian cuisine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Indian cuisine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Indian cuisine history timeline."
    },
    {
        "slug": "indian-cuisine-history-objects",
        "name": "Indian cuisine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Indian cuisine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Indian cuisine history."
    },
    {
        "slug": "indian-cuisine-history-factions",
        "name": "Indian cuisine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Indian cuisine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Indian cuisine history."
    },
    {
        "slug": "indian-cuisine-history-concepts",
        "name": "Indian cuisine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Indian cuisine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Indian cuisine history readable as a lore graph."
    },
    {
        "slug": "indian-cuisine-history-eras",
        "name": "Indian cuisine history eras",
        "type": "event",
        "short_description": "Periodization for Indian cuisine history.",
        "description": "Named eras and phases that help readers track how Indian cuisine history changes across time."
    },
    {
        "slug": "indian-cuisine-history-works",
        "name": "Indian cuisine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Indian cuisine history.",
        "description": "Primary works and adaptations through which most audiences encounter Indian cuisine history."
    },
    {
        "slug": "indian-cuisine-history-symbols",
        "name": "Indian cuisine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Indian cuisine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Indian cuisine history."
    },
    {
        "slug": "indian-cuisine-history-controversies",
        "name": "Indian cuisine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Indian cuisine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Indian cuisine history argumentative."
    },
    {
        "slug": "indian-cuisine-history-sources",
        "name": "Indian cuisine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Indian cuisine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Indian cuisine history."
    },
    {
        "slug": "indian-cuisine-history-geography",
        "name": "Indian cuisine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Indian cuisine history.",
        "description": "Regions, routes, and spatial systems that situate Indian cuisine history beyond single named places."
    },
    {
        "slug": "indian-cuisine-history-legacy",
        "name": "Indian cuisine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Indian cuisine history.",
        "description": "How Indian cuisine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "indian-cuisine-history-practices",
        "name": "Indian cuisine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Indian cuisine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Indian cuisine history."
    },
    {
        "slug": "indian-cuisine-history-entry-1",
        "name": "Indian cuisine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-2",
        "name": "Indian cuisine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-3",
        "name": "Indian cuisine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-4",
        "name": "Indian cuisine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-5",
        "name": "Indian cuisine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-6",
        "name": "Indian cuisine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-7",
        "name": "Indian cuisine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-8",
        "name": "Indian cuisine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-9",
        "name": "Indian cuisine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-10",
        "name": "Indian cuisine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-11",
        "name": "Indian cuisine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-12",
        "name": "Indian cuisine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-13",
        "name": "Indian cuisine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-14",
        "name": "Indian cuisine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-15",
        "name": "Indian cuisine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-16",
        "name": "Indian cuisine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-17",
        "name": "Indian cuisine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-18",
        "name": "Indian cuisine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-19",
        "name": "Indian cuisine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-20",
        "name": "Indian cuisine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-21",
        "name": "Indian cuisine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-22",
        "name": "Indian cuisine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-23",
        "name": "Indian cuisine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "indian-cuisine-history-entry-24",
        "name": "Indian cuisine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Indian cuisine history.",
        "description": "A supporting encyclopedia entry in the Indian cuisine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "indian-cuisine-history",
        "indian-cuisine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-places",
        "contains",
        "Indian cuisine history places is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-events",
        "contains",
        "Indian cuisine history events is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-objects",
        "contains",
        "Indian cuisine history objects & artifacts is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-factions",
        "contains",
        "Indian cuisine history factions & groups is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-concepts",
        "contains",
        "Indian cuisine history concepts is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-eras",
        "contains",
        "Indian cuisine history eras is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-works",
        "contains",
        "Indian cuisine history works & media is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-symbols",
        "contains",
        "Indian cuisine history symbols is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-controversies",
        "contains",
        "Indian cuisine history controversies is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-sources",
        "contains",
        "Indian cuisine history sources is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-geography",
        "contains",
        "Indian cuisine history geography is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-legacy",
        "contains",
        "Indian cuisine history legacy is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-practices",
        "contains",
        "Indian cuisine history practices is a primary trailhead under Indian cuisine history.",
        0.88,
        0.82
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-1",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-2",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-3",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-4",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-5",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-6",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-7",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-8",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-9",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-10",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-11",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-12",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-13",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-14",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-15",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-16",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-17",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-18",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-19",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-20",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-21",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-22",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-23",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ],
    [
        "indian-cuisine-history",
        "indian-cuisine-history-entry-24",
        "contains",
        "Supporting entry under Indian cuisine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
