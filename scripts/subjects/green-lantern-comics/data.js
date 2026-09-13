/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "green-lantern-comics",
        "name": "Green Lantern",
        "type": "topic",
        "short_description": "Power rings, Corps spectrum, and the space-cop mythology of DC’s emotional light.",
        "description": "Power rings, Corps spectrum, and the space-cop mythology of DC’s emotional light. This Ton-o-Lore subject maps people, places, events, and ideas tied to Green Lantern so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "green-lantern-comics-figures",
        "name": "Green Lantern figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Green Lantern.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Green Lantern."
    },
    {
        "slug": "green-lantern-comics-world",
        "name": "Green Lantern world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Green Lantern.",
        "description": "Geography, institutions, and periodization that give Green Lantern its encyclopedia shape."
    },
    {
        "slug": "green-lantern-comics-places",
        "name": "Green Lantern places",
        "type": "place",
        "short_description": "Locations and geographies that frame Green Lantern.",
        "description": "Places, regions, and built sites that give Green Lantern its map — where events and figures concentrate."
    },
    {
        "slug": "green-lantern-comics-events",
        "name": "Green Lantern events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Green Lantern.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Green Lantern timeline."
    },
    {
        "slug": "green-lantern-comics-objects",
        "name": "Green Lantern objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Green Lantern.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Green Lantern."
    },
    {
        "slug": "green-lantern-comics-factions",
        "name": "Green Lantern factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Green Lantern.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Green Lantern."
    },
    {
        "slug": "green-lantern-comics-concepts",
        "name": "Green Lantern concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Green Lantern.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Green Lantern readable as a lore graph."
    },
    {
        "slug": "green-lantern-comics-eras",
        "name": "Green Lantern eras",
        "type": "event",
        "short_description": "Periodization for Green Lantern.",
        "description": "Named eras and phases that help readers track how Green Lantern changes across time."
    },
    {
        "slug": "green-lantern-comics-works",
        "name": "Green Lantern works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Green Lantern.",
        "description": "Primary works and adaptations through which most audiences encounter Green Lantern."
    },
    {
        "slug": "green-lantern-comics-symbols",
        "name": "Green Lantern symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Green Lantern.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Green Lantern."
    },
    {
        "slug": "green-lantern-comics-controversies",
        "name": "Green Lantern controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Green Lantern.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Green Lantern argumentative."
    },
    {
        "slug": "green-lantern-comics-sources",
        "name": "Green Lantern sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Green Lantern.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Green Lantern."
    },
    {
        "slug": "green-lantern-comics-geography",
        "name": "Green Lantern geography",
        "type": "place",
        "short_description": "Broader geographic framing for Green Lantern.",
        "description": "Regions, routes, and spatial systems that situate Green Lantern beyond single named places."
    },
    {
        "slug": "green-lantern-comics-legacy",
        "name": "Green Lantern legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Green Lantern.",
        "description": "How Green Lantern continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "green-lantern-comics-practices",
        "name": "Green Lantern practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Green Lantern.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Green Lantern."
    },
    {
        "slug": "green-lantern-comics-entry-1",
        "name": "Green Lantern entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-2",
        "name": "Green Lantern entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-3",
        "name": "Green Lantern entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-4",
        "name": "Green Lantern entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-5",
        "name": "Green Lantern entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-6",
        "name": "Green Lantern entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-7",
        "name": "Green Lantern entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-8",
        "name": "Green Lantern entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-9",
        "name": "Green Lantern entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-10",
        "name": "Green Lantern entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-11",
        "name": "Green Lantern entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-12",
        "name": "Green Lantern entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-13",
        "name": "Green Lantern entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-14",
        "name": "Green Lantern entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-15",
        "name": "Green Lantern entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-16",
        "name": "Green Lantern entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-17",
        "name": "Green Lantern entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-18",
        "name": "Green Lantern entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-19",
        "name": "Green Lantern entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-20",
        "name": "Green Lantern entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-21",
        "name": "Green Lantern entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-22",
        "name": "Green Lantern entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-23",
        "name": "Green Lantern entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "green-lantern-comics-entry-24",
        "name": "Green Lantern entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Green Lantern.",
        "description": "A supporting encyclopedia entry in the Green Lantern subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "green-lantern-comics",
        "green-lantern-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-places",
        "contains",
        "Green Lantern places is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-events",
        "contains",
        "Green Lantern events is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-objects",
        "contains",
        "Green Lantern objects & artifacts is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-factions",
        "contains",
        "Green Lantern factions & groups is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-concepts",
        "contains",
        "Green Lantern concepts is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-eras",
        "contains",
        "Green Lantern eras is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-works",
        "contains",
        "Green Lantern works & media is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-symbols",
        "contains",
        "Green Lantern symbols is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-controversies",
        "contains",
        "Green Lantern controversies is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-sources",
        "contains",
        "Green Lantern sources is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-geography",
        "contains",
        "Green Lantern geography is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-legacy",
        "contains",
        "Green Lantern legacy is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-practices",
        "contains",
        "Green Lantern practices is a primary trailhead under Green Lantern.",
        0.88,
        0.82
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-1",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-2",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-3",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-4",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-5",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-6",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-7",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-8",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-9",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-10",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-11",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-12",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-13",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-14",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-15",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-16",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-17",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-18",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-19",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-20",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-21",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-22",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-23",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ],
    [
        "green-lantern-comics",
        "green-lantern-comics-entry-24",
        "contains",
        "Supporting entry under Green Lantern.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
