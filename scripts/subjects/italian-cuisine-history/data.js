/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "italian-cuisine-history",
        "name": "Italian cuisine history",
        "type": "topic",
        "short_description": "Pasta, regional pride, and the post-unification story of Italy on a plate.",
        "description": "Pasta, regional pride, and the post-unification story of Italy on a plate. This Ton-o-Lore subject maps people, places, events, and ideas tied to Italian cuisine history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "italian-cuisine-history-figures",
        "name": "Italian cuisine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Italian cuisine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Italian cuisine history."
    },
    {
        "slug": "italian-cuisine-history-world",
        "name": "Italian cuisine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Italian cuisine history.",
        "description": "Geography, institutions, and periodization that give Italian cuisine history its encyclopedia shape."
    },
    {
        "slug": "italian-cuisine-history-places",
        "name": "Italian cuisine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Italian cuisine history.",
        "description": "Places, regions, and built sites that give Italian cuisine history its map — where events and figures concentrate."
    },
    {
        "slug": "italian-cuisine-history-events",
        "name": "Italian cuisine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Italian cuisine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Italian cuisine history timeline."
    },
    {
        "slug": "italian-cuisine-history-objects",
        "name": "Italian cuisine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Italian cuisine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Italian cuisine history."
    },
    {
        "slug": "italian-cuisine-history-factions",
        "name": "Italian cuisine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Italian cuisine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Italian cuisine history."
    },
    {
        "slug": "italian-cuisine-history-concepts",
        "name": "Italian cuisine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Italian cuisine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Italian cuisine history readable as a lore graph."
    },
    {
        "slug": "italian-cuisine-history-eras",
        "name": "Italian cuisine history eras",
        "type": "event",
        "short_description": "Periodization for Italian cuisine history.",
        "description": "Named eras and phases that help readers track how Italian cuisine history changes across time."
    },
    {
        "slug": "italian-cuisine-history-works",
        "name": "Italian cuisine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Italian cuisine history.",
        "description": "Primary works and adaptations through which most audiences encounter Italian cuisine history."
    },
    {
        "slug": "italian-cuisine-history-symbols",
        "name": "Italian cuisine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Italian cuisine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Italian cuisine history."
    },
    {
        "slug": "italian-cuisine-history-controversies",
        "name": "Italian cuisine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Italian cuisine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Italian cuisine history argumentative."
    },
    {
        "slug": "italian-cuisine-history-sources",
        "name": "Italian cuisine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Italian cuisine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Italian cuisine history."
    },
    {
        "slug": "italian-cuisine-history-geography",
        "name": "Italian cuisine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Italian cuisine history.",
        "description": "Regions, routes, and spatial systems that situate Italian cuisine history beyond single named places."
    },
    {
        "slug": "italian-cuisine-history-legacy",
        "name": "Italian cuisine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Italian cuisine history.",
        "description": "How Italian cuisine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "italian-cuisine-history-practices",
        "name": "Italian cuisine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Italian cuisine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Italian cuisine history."
    },
    {
        "slug": "italian-cuisine-history-entry-1",
        "name": "Italian cuisine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-2",
        "name": "Italian cuisine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-3",
        "name": "Italian cuisine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-4",
        "name": "Italian cuisine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-5",
        "name": "Italian cuisine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-6",
        "name": "Italian cuisine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-7",
        "name": "Italian cuisine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-8",
        "name": "Italian cuisine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-9",
        "name": "Italian cuisine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-10",
        "name": "Italian cuisine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-11",
        "name": "Italian cuisine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-12",
        "name": "Italian cuisine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-13",
        "name": "Italian cuisine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-14",
        "name": "Italian cuisine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-15",
        "name": "Italian cuisine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-16",
        "name": "Italian cuisine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-17",
        "name": "Italian cuisine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-18",
        "name": "Italian cuisine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-19",
        "name": "Italian cuisine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-20",
        "name": "Italian cuisine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-21",
        "name": "Italian cuisine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-22",
        "name": "Italian cuisine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-23",
        "name": "Italian cuisine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "italian-cuisine-history-entry-24",
        "name": "Italian cuisine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Italian cuisine history.",
        "description": "A supporting encyclopedia entry in the Italian cuisine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "italian-cuisine-history",
        "italian-cuisine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-places",
        "contains",
        "Italian cuisine history places is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-events",
        "contains",
        "Italian cuisine history events is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-objects",
        "contains",
        "Italian cuisine history objects & artifacts is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-factions",
        "contains",
        "Italian cuisine history factions & groups is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-concepts",
        "contains",
        "Italian cuisine history concepts is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-eras",
        "contains",
        "Italian cuisine history eras is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-works",
        "contains",
        "Italian cuisine history works & media is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-symbols",
        "contains",
        "Italian cuisine history symbols is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-controversies",
        "contains",
        "Italian cuisine history controversies is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-sources",
        "contains",
        "Italian cuisine history sources is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-geography",
        "contains",
        "Italian cuisine history geography is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-legacy",
        "contains",
        "Italian cuisine history legacy is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-practices",
        "contains",
        "Italian cuisine history practices is a primary trailhead under Italian cuisine history.",
        0.88,
        0.82
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-1",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-2",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-3",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-4",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-5",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-6",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-7",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-8",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-9",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-10",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-11",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-12",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-13",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-14",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-15",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-16",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-17",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-18",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-19",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-20",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-21",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-22",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-23",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ],
    [
        "italian-cuisine-history",
        "italian-cuisine-history-entry-24",
        "contains",
        "Supporting entry under Italian cuisine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
