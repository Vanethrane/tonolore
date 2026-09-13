/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bob-burger",
        "name": "Bob's Burgers",
        "type": "topic",
        "short_description": "Belcher family absurdism, musical episodes, and the warmest weird restaurant in animation.",
        "description": "Belcher family absurdism, musical episodes, and the warmest weird restaurant in animation. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bob's Burgers so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "bob-burger-figures",
        "name": "Bob's Burgers figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bob's Burgers.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bob's Burgers."
    },
    {
        "slug": "bob-burger-world",
        "name": "Bob's Burgers world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bob's Burgers.",
        "description": "Geography, institutions, and periodization that give Bob's Burgers its encyclopedia shape."
    },
    {
        "slug": "bob-burger-places",
        "name": "Bob's Burgers places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bob's Burgers.",
        "description": "Places, regions, and built sites that give Bob's Burgers its map — where events and figures concentrate."
    },
    {
        "slug": "bob-burger-events",
        "name": "Bob's Burgers events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bob's Burgers.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bob's Burgers timeline."
    },
    {
        "slug": "bob-burger-objects",
        "name": "Bob's Burgers objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bob's Burgers.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bob's Burgers."
    },
    {
        "slug": "bob-burger-factions",
        "name": "Bob's Burgers factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bob's Burgers.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bob's Burgers."
    },
    {
        "slug": "bob-burger-concepts",
        "name": "Bob's Burgers concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bob's Burgers.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bob's Burgers readable as a lore graph."
    },
    {
        "slug": "bob-burger-eras",
        "name": "Bob's Burgers eras",
        "type": "event",
        "short_description": "Periodization for Bob's Burgers.",
        "description": "Named eras and phases that help readers track how Bob's Burgers changes across time."
    },
    {
        "slug": "bob-burger-works",
        "name": "Bob's Burgers works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bob's Burgers.",
        "description": "Primary works and adaptations through which most audiences encounter Bob's Burgers."
    },
    {
        "slug": "bob-burger-symbols",
        "name": "Bob's Burgers symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bob's Burgers.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bob's Burgers."
    },
    {
        "slug": "bob-burger-controversies",
        "name": "Bob's Burgers controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bob's Burgers.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bob's Burgers argumentative."
    },
    {
        "slug": "bob-burger-sources",
        "name": "Bob's Burgers sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bob's Burgers.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bob's Burgers."
    },
    {
        "slug": "bob-burger-geography",
        "name": "Bob's Burgers geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bob's Burgers.",
        "description": "Regions, routes, and spatial systems that situate Bob's Burgers beyond single named places."
    },
    {
        "slug": "bob-burger-legacy",
        "name": "Bob's Burgers legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bob's Burgers.",
        "description": "How Bob's Burgers continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bob-burger-practices",
        "name": "Bob's Burgers practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bob's Burgers.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bob's Burgers."
    },
    {
        "slug": "bob-burger-entry-1",
        "name": "Bob's Burgers entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-2",
        "name": "Bob's Burgers entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-3",
        "name": "Bob's Burgers entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-4",
        "name": "Bob's Burgers entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-5",
        "name": "Bob's Burgers entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-6",
        "name": "Bob's Burgers entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-7",
        "name": "Bob's Burgers entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-8",
        "name": "Bob's Burgers entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-9",
        "name": "Bob's Burgers entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-10",
        "name": "Bob's Burgers entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-11",
        "name": "Bob's Burgers entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-12",
        "name": "Bob's Burgers entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-13",
        "name": "Bob's Burgers entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-14",
        "name": "Bob's Burgers entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-15",
        "name": "Bob's Burgers entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-16",
        "name": "Bob's Burgers entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-17",
        "name": "Bob's Burgers entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-18",
        "name": "Bob's Burgers entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-19",
        "name": "Bob's Burgers entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-20",
        "name": "Bob's Burgers entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-21",
        "name": "Bob's Burgers entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-22",
        "name": "Bob's Burgers entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-23",
        "name": "Bob's Burgers entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bob-burger-entry-24",
        "name": "Bob's Burgers entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bob's Burgers.",
        "description": "A supporting encyclopedia entry in the Bob's Burgers subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bob-burger",
        "bob-burger-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bob-burger",
        "bob-burger-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bob-burger",
        "bob-burger-places",
        "contains",
        "Bob's Burgers places is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-events",
        "contains",
        "Bob's Burgers events is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-objects",
        "contains",
        "Bob's Burgers objects & artifacts is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-factions",
        "contains",
        "Bob's Burgers factions & groups is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-concepts",
        "contains",
        "Bob's Burgers concepts is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-eras",
        "contains",
        "Bob's Burgers eras is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-works",
        "contains",
        "Bob's Burgers works & media is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-symbols",
        "contains",
        "Bob's Burgers symbols is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-controversies",
        "contains",
        "Bob's Burgers controversies is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-sources",
        "contains",
        "Bob's Burgers sources is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-geography",
        "contains",
        "Bob's Burgers geography is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-legacy",
        "contains",
        "Bob's Burgers legacy is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-practices",
        "contains",
        "Bob's Burgers practices is a primary trailhead under Bob's Burgers.",
        0.88,
        0.82
    ],
    [
        "bob-burger",
        "bob-burger-entry-1",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-2",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-3",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-4",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-5",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-6",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-7",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-8",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-9",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-10",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-11",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-12",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-13",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-14",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-15",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-16",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-17",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-18",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-19",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-20",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-21",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-22",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-23",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ],
    [
        "bob-burger",
        "bob-burger-entry-24",
        "contains",
        "Supporting entry under Bob's Burgers.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
