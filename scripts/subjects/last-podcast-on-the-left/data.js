/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "last-podcast-on-the-left",
        "name": "Last Podcast on the Left",
        "type": "topic",
        "short_description": "True crime and occult comedy deep dives with dense research bits and cult following.",
        "description": "True crime and occult comedy deep dives with dense research bits and cult following. This Ton-o-Lore subject maps people, places, events, and ideas tied to Last Podcast on the Left so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "last-podcast-on-the-left-figures",
        "name": "Last Podcast on the Left figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Last Podcast on the Left.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Last Podcast on the Left."
    },
    {
        "slug": "last-podcast-on-the-left-world",
        "name": "Last Podcast on the Left world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Last Podcast on the Left.",
        "description": "Geography, institutions, and periodization that give Last Podcast on the Left its encyclopedia shape."
    },
    {
        "slug": "last-podcast-on-the-left-places",
        "name": "Last Podcast on the Left places",
        "type": "place",
        "short_description": "Locations and geographies that frame Last Podcast on the Left.",
        "description": "Places, regions, and built sites that give Last Podcast on the Left its map — where events and figures concentrate."
    },
    {
        "slug": "last-podcast-on-the-left-events",
        "name": "Last Podcast on the Left events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Last Podcast on the Left.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Last Podcast on the Left timeline."
    },
    {
        "slug": "last-podcast-on-the-left-objects",
        "name": "Last Podcast on the Left objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Last Podcast on the Left.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Last Podcast on the Left."
    },
    {
        "slug": "last-podcast-on-the-left-factions",
        "name": "Last Podcast on the Left factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Last Podcast on the Left.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Last Podcast on the Left."
    },
    {
        "slug": "last-podcast-on-the-left-concepts",
        "name": "Last Podcast on the Left concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Last Podcast on the Left.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Last Podcast on the Left readable as a lore graph."
    },
    {
        "slug": "last-podcast-on-the-left-eras",
        "name": "Last Podcast on the Left eras",
        "type": "event",
        "short_description": "Periodization for Last Podcast on the Left.",
        "description": "Named eras and phases that help readers track how Last Podcast on the Left changes across time."
    },
    {
        "slug": "last-podcast-on-the-left-works",
        "name": "Last Podcast on the Left works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Last Podcast on the Left.",
        "description": "Primary works and adaptations through which most audiences encounter Last Podcast on the Left."
    },
    {
        "slug": "last-podcast-on-the-left-symbols",
        "name": "Last Podcast on the Left symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Last Podcast on the Left.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Last Podcast on the Left."
    },
    {
        "slug": "last-podcast-on-the-left-controversies",
        "name": "Last Podcast on the Left controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Last Podcast on the Left.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Last Podcast on the Left argumentative."
    },
    {
        "slug": "last-podcast-on-the-left-sources",
        "name": "Last Podcast on the Left sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Last Podcast on the Left.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Last Podcast on the Left."
    },
    {
        "slug": "last-podcast-on-the-left-geography",
        "name": "Last Podcast on the Left geography",
        "type": "place",
        "short_description": "Broader geographic framing for Last Podcast on the Left.",
        "description": "Regions, routes, and spatial systems that situate Last Podcast on the Left beyond single named places."
    },
    {
        "slug": "last-podcast-on-the-left-legacy",
        "name": "Last Podcast on the Left legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Last Podcast on the Left.",
        "description": "How Last Podcast on the Left continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "last-podcast-on-the-left-practices",
        "name": "Last Podcast on the Left practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Last Podcast on the Left.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Last Podcast on the Left."
    },
    {
        "slug": "last-podcast-on-the-left-entry-1",
        "name": "Last Podcast on the Left entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-2",
        "name": "Last Podcast on the Left entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-3",
        "name": "Last Podcast on the Left entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-4",
        "name": "Last Podcast on the Left entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-5",
        "name": "Last Podcast on the Left entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-6",
        "name": "Last Podcast on the Left entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-7",
        "name": "Last Podcast on the Left entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-8",
        "name": "Last Podcast on the Left entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-9",
        "name": "Last Podcast on the Left entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-10",
        "name": "Last Podcast on the Left entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-11",
        "name": "Last Podcast on the Left entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-12",
        "name": "Last Podcast on the Left entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-13",
        "name": "Last Podcast on the Left entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-14",
        "name": "Last Podcast on the Left entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-15",
        "name": "Last Podcast on the Left entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-16",
        "name": "Last Podcast on the Left entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-17",
        "name": "Last Podcast on the Left entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-18",
        "name": "Last Podcast on the Left entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-19",
        "name": "Last Podcast on the Left entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-20",
        "name": "Last Podcast on the Left entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-21",
        "name": "Last Podcast on the Left entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-22",
        "name": "Last Podcast on the Left entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-23",
        "name": "Last Podcast on the Left entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "last-podcast-on-the-left-entry-24",
        "name": "Last Podcast on the Left entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Last Podcast on the Left.",
        "description": "A supporting encyclopedia entry in the Last Podcast on the Left subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-places",
        "contains",
        "Last Podcast on the Left places is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-events",
        "contains",
        "Last Podcast on the Left events is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-objects",
        "contains",
        "Last Podcast on the Left objects & artifacts is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-factions",
        "contains",
        "Last Podcast on the Left factions & groups is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-concepts",
        "contains",
        "Last Podcast on the Left concepts is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-eras",
        "contains",
        "Last Podcast on the Left eras is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-works",
        "contains",
        "Last Podcast on the Left works & media is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-symbols",
        "contains",
        "Last Podcast on the Left symbols is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-controversies",
        "contains",
        "Last Podcast on the Left controversies is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-sources",
        "contains",
        "Last Podcast on the Left sources is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-geography",
        "contains",
        "Last Podcast on the Left geography is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-legacy",
        "contains",
        "Last Podcast on the Left legacy is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-practices",
        "contains",
        "Last Podcast on the Left practices is a primary trailhead under Last Podcast on the Left.",
        0.88,
        0.82
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-1",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-2",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-3",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-4",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-5",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-6",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-7",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-8",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-9",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-10",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-11",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-12",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-13",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-14",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-15",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-16",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-17",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-18",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-19",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-20",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-21",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-22",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-23",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ],
    [
        "last-podcast-on-the-left",
        "last-podcast-on-the-left-entry-24",
        "contains",
        "Supporting entry under Last Podcast on the Left.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
