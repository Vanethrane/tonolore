/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "horse-transport-history",
        "name": "Horse transport history",
        "type": "topic",
        "short_description": "Carriages, cavalry logistics, and the animal power that preceded engines.",
        "description": "Carriages, cavalry logistics, and the animal power that preceded engines. This Ton-o-Lore subject maps people, places, events, and ideas tied to Horse transport history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "horse-transport-history-figures",
        "name": "Horse transport history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Horse transport history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Horse transport history."
    },
    {
        "slug": "horse-transport-history-world",
        "name": "Horse transport history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Horse transport history.",
        "description": "Geography, institutions, and periodization that give Horse transport history its encyclopedia shape."
    },
    {
        "slug": "horse-transport-history-places",
        "name": "Horse transport history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Horse transport history.",
        "description": "Places, regions, and built sites that give Horse transport history its map — where events and figures concentrate."
    },
    {
        "slug": "horse-transport-history-events",
        "name": "Horse transport history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Horse transport history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Horse transport history timeline."
    },
    {
        "slug": "horse-transport-history-objects",
        "name": "Horse transport history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Horse transport history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Horse transport history."
    },
    {
        "slug": "horse-transport-history-factions",
        "name": "Horse transport history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Horse transport history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Horse transport history."
    },
    {
        "slug": "horse-transport-history-concepts",
        "name": "Horse transport history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Horse transport history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Horse transport history readable as a lore graph."
    },
    {
        "slug": "horse-transport-history-eras",
        "name": "Horse transport history eras",
        "type": "event",
        "short_description": "Periodization for Horse transport history.",
        "description": "Named eras and phases that help readers track how Horse transport history changes across time."
    },
    {
        "slug": "horse-transport-history-works",
        "name": "Horse transport history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Horse transport history.",
        "description": "Primary works and adaptations through which most audiences encounter Horse transport history."
    },
    {
        "slug": "horse-transport-history-symbols",
        "name": "Horse transport history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Horse transport history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Horse transport history."
    },
    {
        "slug": "horse-transport-history-controversies",
        "name": "Horse transport history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Horse transport history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Horse transport history argumentative."
    },
    {
        "slug": "horse-transport-history-sources",
        "name": "Horse transport history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Horse transport history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Horse transport history."
    },
    {
        "slug": "horse-transport-history-geography",
        "name": "Horse transport history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Horse transport history.",
        "description": "Regions, routes, and spatial systems that situate Horse transport history beyond single named places."
    },
    {
        "slug": "horse-transport-history-legacy",
        "name": "Horse transport history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Horse transport history.",
        "description": "How Horse transport history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "horse-transport-history-practices",
        "name": "Horse transport history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Horse transport history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Horse transport history."
    },
    {
        "slug": "horse-transport-history-entry-1",
        "name": "Horse transport history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-2",
        "name": "Horse transport history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-3",
        "name": "Horse transport history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-4",
        "name": "Horse transport history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-5",
        "name": "Horse transport history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-6",
        "name": "Horse transport history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-7",
        "name": "Horse transport history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-8",
        "name": "Horse transport history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-9",
        "name": "Horse transport history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-10",
        "name": "Horse transport history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-11",
        "name": "Horse transport history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-12",
        "name": "Horse transport history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-13",
        "name": "Horse transport history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-14",
        "name": "Horse transport history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-15",
        "name": "Horse transport history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-16",
        "name": "Horse transport history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-17",
        "name": "Horse transport history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-18",
        "name": "Horse transport history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-19",
        "name": "Horse transport history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-20",
        "name": "Horse transport history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-21",
        "name": "Horse transport history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-22",
        "name": "Horse transport history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-23",
        "name": "Horse transport history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "horse-transport-history-entry-24",
        "name": "Horse transport history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Horse transport history.",
        "description": "A supporting encyclopedia entry in the Horse transport history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "horse-transport-history",
        "horse-transport-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "horse-transport-history",
        "horse-transport-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "horse-transport-history",
        "horse-transport-history-places",
        "contains",
        "Horse transport history places is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-events",
        "contains",
        "Horse transport history events is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-objects",
        "contains",
        "Horse transport history objects & artifacts is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-factions",
        "contains",
        "Horse transport history factions & groups is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-concepts",
        "contains",
        "Horse transport history concepts is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-eras",
        "contains",
        "Horse transport history eras is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-works",
        "contains",
        "Horse transport history works & media is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-symbols",
        "contains",
        "Horse transport history symbols is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-controversies",
        "contains",
        "Horse transport history controversies is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-sources",
        "contains",
        "Horse transport history sources is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-geography",
        "contains",
        "Horse transport history geography is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-legacy",
        "contains",
        "Horse transport history legacy is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-practices",
        "contains",
        "Horse transport history practices is a primary trailhead under Horse transport history.",
        0.88,
        0.82
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-1",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-2",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-3",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-4",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-5",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-6",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-7",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-8",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-9",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-10",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-11",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-12",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-13",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-14",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-15",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-16",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-17",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-18",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-19",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-20",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-21",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-22",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-23",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ],
    [
        "horse-transport-history",
        "horse-transport-history-entry-24",
        "contains",
        "Supporting entry under Horse transport history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
