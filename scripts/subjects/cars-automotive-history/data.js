/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cars-automotive-history",
        "name": "Cars & automotive history",
        "type": "topic",
        "short_description": "Models, engines, designers, races, companies, owners, failures, and the innovations that remade mobility.",
        "description": "Models, engines, designers, races, companies, owners, failures, and the innovations that remade mobility. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cars & automotive history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "cars-automotive-history-figures",
        "name": "Cars & automotive history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cars & automotive history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cars & automotive history."
    },
    {
        "slug": "cars-automotive-history-world",
        "name": "Cars & automotive history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cars & automotive history.",
        "description": "Geography, institutions, and periodization that give Cars & automotive history its encyclopedia shape."
    },
    {
        "slug": "cars-automotive-history-places",
        "name": "Cars & automotive history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cars & automotive history.",
        "description": "Places, regions, and built sites that give Cars & automotive history its map — where events and figures concentrate."
    },
    {
        "slug": "cars-automotive-history-events",
        "name": "Cars & automotive history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cars & automotive history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cars & automotive history timeline."
    },
    {
        "slug": "cars-automotive-history-objects",
        "name": "Cars & automotive history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cars & automotive history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cars & automotive history."
    },
    {
        "slug": "cars-automotive-history-factions",
        "name": "Cars & automotive history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cars & automotive history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cars & automotive history."
    },
    {
        "slug": "cars-automotive-history-concepts",
        "name": "Cars & automotive history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cars & automotive history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cars & automotive history readable as a lore graph."
    },
    {
        "slug": "cars-automotive-history-eras",
        "name": "Cars & automotive history eras",
        "type": "event",
        "short_description": "Periodization for Cars & automotive history.",
        "description": "Named eras and phases that help readers track how Cars & automotive history changes across time."
    },
    {
        "slug": "cars-automotive-history-works",
        "name": "Cars & automotive history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cars & automotive history.",
        "description": "Primary works and adaptations through which most audiences encounter Cars & automotive history."
    },
    {
        "slug": "cars-automotive-history-symbols",
        "name": "Cars & automotive history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cars & automotive history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cars & automotive history."
    },
    {
        "slug": "cars-automotive-history-controversies",
        "name": "Cars & automotive history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cars & automotive history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cars & automotive history argumentative."
    },
    {
        "slug": "cars-automotive-history-sources",
        "name": "Cars & automotive history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cars & automotive history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cars & automotive history."
    },
    {
        "slug": "cars-automotive-history-geography",
        "name": "Cars & automotive history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cars & automotive history.",
        "description": "Regions, routes, and spatial systems that situate Cars & automotive history beyond single named places."
    },
    {
        "slug": "cars-automotive-history-legacy",
        "name": "Cars & automotive history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cars & automotive history.",
        "description": "How Cars & automotive history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cars-automotive-history-practices",
        "name": "Cars & automotive history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cars & automotive history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cars & automotive history."
    },
    {
        "slug": "cars-automotive-history-entry-1",
        "name": "Cars & automotive history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-2",
        "name": "Cars & automotive history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-3",
        "name": "Cars & automotive history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-4",
        "name": "Cars & automotive history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-5",
        "name": "Cars & automotive history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-6",
        "name": "Cars & automotive history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-7",
        "name": "Cars & automotive history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-8",
        "name": "Cars & automotive history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-9",
        "name": "Cars & automotive history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-10",
        "name": "Cars & automotive history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-11",
        "name": "Cars & automotive history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-12",
        "name": "Cars & automotive history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-13",
        "name": "Cars & automotive history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-14",
        "name": "Cars & automotive history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-15",
        "name": "Cars & automotive history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-16",
        "name": "Cars & automotive history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-17",
        "name": "Cars & automotive history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-18",
        "name": "Cars & automotive history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-19",
        "name": "Cars & automotive history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-20",
        "name": "Cars & automotive history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-21",
        "name": "Cars & automotive history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-22",
        "name": "Cars & automotive history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-23",
        "name": "Cars & automotive history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cars-automotive-history-entry-24",
        "name": "Cars & automotive history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cars & automotive history.",
        "description": "A supporting encyclopedia entry in the Cars & automotive history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cars-automotive-history",
        "cars-automotive-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-places",
        "contains",
        "Cars & automotive history places is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-events",
        "contains",
        "Cars & automotive history events is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-objects",
        "contains",
        "Cars & automotive history objects & artifacts is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-factions",
        "contains",
        "Cars & automotive history factions & groups is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-concepts",
        "contains",
        "Cars & automotive history concepts is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-eras",
        "contains",
        "Cars & automotive history eras is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-works",
        "contains",
        "Cars & automotive history works & media is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-symbols",
        "contains",
        "Cars & automotive history symbols is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-controversies",
        "contains",
        "Cars & automotive history controversies is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-sources",
        "contains",
        "Cars & automotive history sources is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-geography",
        "contains",
        "Cars & automotive history geography is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-legacy",
        "contains",
        "Cars & automotive history legacy is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-practices",
        "contains",
        "Cars & automotive history practices is a primary trailhead under Cars & automotive history.",
        0.88,
        0.82
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-1",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-2",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-3",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-4",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-5",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-6",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-7",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-8",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-9",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-10",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-11",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-12",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-13",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-14",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-15",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-16",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-17",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-18",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-19",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-20",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-21",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-22",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-23",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ],
    [
        "cars-automotive-history",
        "cars-automotive-history-entry-24",
        "contains",
        "Supporting entry under Cars & automotive history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
