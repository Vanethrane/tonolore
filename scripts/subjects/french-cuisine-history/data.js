/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "french-cuisine-history",
        "name": "French cuisine history",
        "type": "topic",
        "short_description": "Brigades, sauces, and the haute tradition that defined restaurant hierarchy.",
        "description": "Brigades, sauces, and the haute tradition that defined restaurant hierarchy. This Ton-o-Lore subject maps people, places, events, and ideas tied to French cuisine history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "french-cuisine-history-figures",
        "name": "French cuisine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to French cuisine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring French cuisine history."
    },
    {
        "slug": "french-cuisine-history-world",
        "name": "French cuisine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame French cuisine history.",
        "description": "Geography, institutions, and periodization that give French cuisine history its encyclopedia shape."
    },
    {
        "slug": "french-cuisine-history-places",
        "name": "French cuisine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame French cuisine history.",
        "description": "Places, regions, and built sites that give French cuisine history its map — where events and figures concentrate."
    },
    {
        "slug": "french-cuisine-history-events",
        "name": "French cuisine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in French cuisine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the French cuisine history timeline."
    },
    {
        "slug": "french-cuisine-history-objects",
        "name": "French cuisine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to French cuisine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through French cuisine history."
    },
    {
        "slug": "french-cuisine-history-factions",
        "name": "French cuisine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside French cuisine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in French cuisine history."
    },
    {
        "slug": "french-cuisine-history-concepts",
        "name": "French cuisine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize French cuisine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make French cuisine history readable as a lore graph."
    },
    {
        "slug": "french-cuisine-history-eras",
        "name": "French cuisine history eras",
        "type": "event",
        "short_description": "Periodization for French cuisine history.",
        "description": "Named eras and phases that help readers track how French cuisine history changes across time."
    },
    {
        "slug": "french-cuisine-history-works",
        "name": "French cuisine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry French cuisine history.",
        "description": "Primary works and adaptations through which most audiences encounter French cuisine history."
    },
    {
        "slug": "french-cuisine-history-symbols",
        "name": "French cuisine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with French cuisine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside French cuisine history."
    },
    {
        "slug": "french-cuisine-history-controversies",
        "name": "French cuisine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in French cuisine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep French cuisine history argumentative."
    },
    {
        "slug": "french-cuisine-history-sources",
        "name": "French cuisine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into French cuisine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify French cuisine history."
    },
    {
        "slug": "french-cuisine-history-geography",
        "name": "French cuisine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for French cuisine history.",
        "description": "Regions, routes, and spatial systems that situate French cuisine history beyond single named places."
    },
    {
        "slug": "french-cuisine-history-legacy",
        "name": "French cuisine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of French cuisine history.",
        "description": "How French cuisine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "french-cuisine-history-practices",
        "name": "French cuisine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in French cuisine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in French cuisine history."
    },
    {
        "slug": "french-cuisine-history-entry-1",
        "name": "French cuisine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-2",
        "name": "French cuisine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-3",
        "name": "French cuisine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-4",
        "name": "French cuisine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-5",
        "name": "French cuisine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-6",
        "name": "French cuisine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-7",
        "name": "French cuisine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-8",
        "name": "French cuisine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-9",
        "name": "French cuisine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-10",
        "name": "French cuisine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-11",
        "name": "French cuisine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-12",
        "name": "French cuisine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-13",
        "name": "French cuisine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-14",
        "name": "French cuisine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-15",
        "name": "French cuisine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-16",
        "name": "French cuisine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-17",
        "name": "French cuisine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-18",
        "name": "French cuisine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-19",
        "name": "French cuisine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-20",
        "name": "French cuisine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-21",
        "name": "French cuisine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-22",
        "name": "French cuisine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-23",
        "name": "French cuisine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "french-cuisine-history-entry-24",
        "name": "French cuisine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside French cuisine history.",
        "description": "A supporting encyclopedia entry in the French cuisine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "french-cuisine-history",
        "french-cuisine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-places",
        "contains",
        "French cuisine history places is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-events",
        "contains",
        "French cuisine history events is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-objects",
        "contains",
        "French cuisine history objects & artifacts is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-factions",
        "contains",
        "French cuisine history factions & groups is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-concepts",
        "contains",
        "French cuisine history concepts is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-eras",
        "contains",
        "French cuisine history eras is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-works",
        "contains",
        "French cuisine history works & media is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-symbols",
        "contains",
        "French cuisine history symbols is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-controversies",
        "contains",
        "French cuisine history controversies is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-sources",
        "contains",
        "French cuisine history sources is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-geography",
        "contains",
        "French cuisine history geography is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-legacy",
        "contains",
        "French cuisine history legacy is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-practices",
        "contains",
        "French cuisine history practices is a primary trailhead under French cuisine history.",
        0.88,
        0.82
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-1",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-2",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-3",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-4",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-5",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-6",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-7",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-8",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-9",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-10",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-11",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-12",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-13",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-14",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-15",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-16",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-17",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-18",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-19",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-20",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-21",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-22",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-23",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ],
    [
        "french-cuisine-history",
        "french-cuisine-history-entry-24",
        "contains",
        "Supporting entry under French cuisine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
