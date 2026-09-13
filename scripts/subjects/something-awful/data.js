/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "something-awful",
        "name": "Something Awful",
        "type": "topic",
        "short_description": "Goons, Photoshop Phriday, and the forum culture that seeded countless internet comedy forms.",
        "description": "Goons, Photoshop Phriday, and the forum culture that seeded countless internet comedy forms. This Ton-o-Lore subject maps people, places, events, and ideas tied to Something Awful so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "something-awful-figures",
        "name": "Something Awful figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Something Awful.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Something Awful."
    },
    {
        "slug": "something-awful-world",
        "name": "Something Awful world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Something Awful.",
        "description": "Geography, institutions, and periodization that give Something Awful its encyclopedia shape."
    },
    {
        "slug": "something-awful-places",
        "name": "Something Awful places",
        "type": "place",
        "short_description": "Locations and geographies that frame Something Awful.",
        "description": "Places, regions, and built sites that give Something Awful its map — where events and figures concentrate."
    },
    {
        "slug": "something-awful-events",
        "name": "Something Awful events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Something Awful.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Something Awful timeline."
    },
    {
        "slug": "something-awful-objects",
        "name": "Something Awful objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Something Awful.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Something Awful."
    },
    {
        "slug": "something-awful-factions",
        "name": "Something Awful factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Something Awful.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Something Awful."
    },
    {
        "slug": "something-awful-concepts",
        "name": "Something Awful concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Something Awful.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Something Awful readable as a lore graph."
    },
    {
        "slug": "something-awful-eras",
        "name": "Something Awful eras",
        "type": "event",
        "short_description": "Periodization for Something Awful.",
        "description": "Named eras and phases that help readers track how Something Awful changes across time."
    },
    {
        "slug": "something-awful-works",
        "name": "Something Awful works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Something Awful.",
        "description": "Primary works and adaptations through which most audiences encounter Something Awful."
    },
    {
        "slug": "something-awful-symbols",
        "name": "Something Awful symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Something Awful.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Something Awful."
    },
    {
        "slug": "something-awful-controversies",
        "name": "Something Awful controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Something Awful.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Something Awful argumentative."
    },
    {
        "slug": "something-awful-sources",
        "name": "Something Awful sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Something Awful.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Something Awful."
    },
    {
        "slug": "something-awful-geography",
        "name": "Something Awful geography",
        "type": "place",
        "short_description": "Broader geographic framing for Something Awful.",
        "description": "Regions, routes, and spatial systems that situate Something Awful beyond single named places."
    },
    {
        "slug": "something-awful-legacy",
        "name": "Something Awful legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Something Awful.",
        "description": "How Something Awful continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "something-awful-practices",
        "name": "Something Awful practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Something Awful.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Something Awful."
    },
    {
        "slug": "something-awful-entry-1",
        "name": "Something Awful entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-2",
        "name": "Something Awful entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-3",
        "name": "Something Awful entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-4",
        "name": "Something Awful entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-5",
        "name": "Something Awful entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-6",
        "name": "Something Awful entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-7",
        "name": "Something Awful entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-8",
        "name": "Something Awful entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-9",
        "name": "Something Awful entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-10",
        "name": "Something Awful entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-11",
        "name": "Something Awful entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-12",
        "name": "Something Awful entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-13",
        "name": "Something Awful entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-14",
        "name": "Something Awful entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-15",
        "name": "Something Awful entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-16",
        "name": "Something Awful entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-17",
        "name": "Something Awful entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-18",
        "name": "Something Awful entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-19",
        "name": "Something Awful entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-20",
        "name": "Something Awful entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-21",
        "name": "Something Awful entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-22",
        "name": "Something Awful entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-23",
        "name": "Something Awful entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "something-awful-entry-24",
        "name": "Something Awful entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Something Awful.",
        "description": "A supporting encyclopedia entry in the Something Awful subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "something-awful",
        "something-awful-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "something-awful",
        "something-awful-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "something-awful",
        "something-awful-places",
        "contains",
        "Something Awful places is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-events",
        "contains",
        "Something Awful events is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-objects",
        "contains",
        "Something Awful objects & artifacts is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-factions",
        "contains",
        "Something Awful factions & groups is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-concepts",
        "contains",
        "Something Awful concepts is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-eras",
        "contains",
        "Something Awful eras is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-works",
        "contains",
        "Something Awful works & media is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-symbols",
        "contains",
        "Something Awful symbols is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-controversies",
        "contains",
        "Something Awful controversies is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-sources",
        "contains",
        "Something Awful sources is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-geography",
        "contains",
        "Something Awful geography is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-legacy",
        "contains",
        "Something Awful legacy is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-practices",
        "contains",
        "Something Awful practices is a primary trailhead under Something Awful.",
        0.88,
        0.82
    ],
    [
        "something-awful",
        "something-awful-entry-1",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-2",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-3",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-4",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-5",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-6",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-7",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-8",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-9",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-10",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-11",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-12",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-13",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-14",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-15",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-16",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-17",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-18",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-19",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-20",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-21",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-22",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-23",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ],
    [
        "something-awful",
        "something-awful-entry-24",
        "contains",
        "Supporting entry under Something Awful.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
