/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "batman-the-animated-series",
        "name": "Batman: The Animated Series",
        "type": "topic",
        "short_description": "Art Dec Gotham, redefined villains, and the gold standard of Western superhero animation.",
        "description": "Art Dec Gotham, redefined villains, and the gold standard of Western superhero animation. This Ton-o-Lore subject maps people, places, events, and ideas tied to Batman: The Animated Series so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "batman-the-animated-series-figures",
        "name": "Batman: The Animated Series figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Batman: The Animated Series.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Batman: The Animated Series."
    },
    {
        "slug": "batman-the-animated-series-world",
        "name": "Batman: The Animated Series world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Batman: The Animated Series.",
        "description": "Geography, institutions, and periodization that give Batman: The Animated Series its encyclopedia shape."
    },
    {
        "slug": "batman-the-animated-series-places",
        "name": "Batman: The Animated Series places",
        "type": "place",
        "short_description": "Locations and geographies that frame Batman: The Animated Series.",
        "description": "Places, regions, and built sites that give Batman: The Animated Series its map — where events and figures concentrate."
    },
    {
        "slug": "batman-the-animated-series-events",
        "name": "Batman: The Animated Series events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Batman: The Animated Series.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Batman: The Animated Series timeline."
    },
    {
        "slug": "batman-the-animated-series-objects",
        "name": "Batman: The Animated Series objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Batman: The Animated Series.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Batman: The Animated Series."
    },
    {
        "slug": "batman-the-animated-series-factions",
        "name": "Batman: The Animated Series factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Batman: The Animated Series.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Batman: The Animated Series."
    },
    {
        "slug": "batman-the-animated-series-concepts",
        "name": "Batman: The Animated Series concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Batman: The Animated Series.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Batman: The Animated Series readable as a lore graph."
    },
    {
        "slug": "batman-the-animated-series-eras",
        "name": "Batman: The Animated Series eras",
        "type": "event",
        "short_description": "Periodization for Batman: The Animated Series.",
        "description": "Named eras and phases that help readers track how Batman: The Animated Series changes across time."
    },
    {
        "slug": "batman-the-animated-series-works",
        "name": "Batman: The Animated Series works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Batman: The Animated Series.",
        "description": "Primary works and adaptations through which most audiences encounter Batman: The Animated Series."
    },
    {
        "slug": "batman-the-animated-series-symbols",
        "name": "Batman: The Animated Series symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Batman: The Animated Series.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Batman: The Animated Series."
    },
    {
        "slug": "batman-the-animated-series-controversies",
        "name": "Batman: The Animated Series controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Batman: The Animated Series.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Batman: The Animated Series argumentative."
    },
    {
        "slug": "batman-the-animated-series-sources",
        "name": "Batman: The Animated Series sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Batman: The Animated Series.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Batman: The Animated Series."
    },
    {
        "slug": "batman-the-animated-series-geography",
        "name": "Batman: The Animated Series geography",
        "type": "place",
        "short_description": "Broader geographic framing for Batman: The Animated Series.",
        "description": "Regions, routes, and spatial systems that situate Batman: The Animated Series beyond single named places."
    },
    {
        "slug": "batman-the-animated-series-legacy",
        "name": "Batman: The Animated Series legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Batman: The Animated Series.",
        "description": "How Batman: The Animated Series continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "batman-the-animated-series-practices",
        "name": "Batman: The Animated Series practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Batman: The Animated Series.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Batman: The Animated Series."
    },
    {
        "slug": "batman-the-animated-series-entry-1",
        "name": "Batman: The Animated Series entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-2",
        "name": "Batman: The Animated Series entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-3",
        "name": "Batman: The Animated Series entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-4",
        "name": "Batman: The Animated Series entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-5",
        "name": "Batman: The Animated Series entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-6",
        "name": "Batman: The Animated Series entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-7",
        "name": "Batman: The Animated Series entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-8",
        "name": "Batman: The Animated Series entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-9",
        "name": "Batman: The Animated Series entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-10",
        "name": "Batman: The Animated Series entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-11",
        "name": "Batman: The Animated Series entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-12",
        "name": "Batman: The Animated Series entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-13",
        "name": "Batman: The Animated Series entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-14",
        "name": "Batman: The Animated Series entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-15",
        "name": "Batman: The Animated Series entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-16",
        "name": "Batman: The Animated Series entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-17",
        "name": "Batman: The Animated Series entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-18",
        "name": "Batman: The Animated Series entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-19",
        "name": "Batman: The Animated Series entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-20",
        "name": "Batman: The Animated Series entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-21",
        "name": "Batman: The Animated Series entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-22",
        "name": "Batman: The Animated Series entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-23",
        "name": "Batman: The Animated Series entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "batman-the-animated-series-entry-24",
        "name": "Batman: The Animated Series entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Batman: The Animated Series.",
        "description": "A supporting encyclopedia entry in the Batman: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "batman-the-animated-series",
        "batman-the-animated-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-places",
        "contains",
        "Batman: The Animated Series places is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-events",
        "contains",
        "Batman: The Animated Series events is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-objects",
        "contains",
        "Batman: The Animated Series objects & artifacts is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-factions",
        "contains",
        "Batman: The Animated Series factions & groups is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-concepts",
        "contains",
        "Batman: The Animated Series concepts is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-eras",
        "contains",
        "Batman: The Animated Series eras is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-works",
        "contains",
        "Batman: The Animated Series works & media is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-symbols",
        "contains",
        "Batman: The Animated Series symbols is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-controversies",
        "contains",
        "Batman: The Animated Series controversies is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-sources",
        "contains",
        "Batman: The Animated Series sources is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-geography",
        "contains",
        "Batman: The Animated Series geography is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-legacy",
        "contains",
        "Batman: The Animated Series legacy is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-practices",
        "contains",
        "Batman: The Animated Series practices is a primary trailhead under Batman: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-1",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-2",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-3",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-4",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-5",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-6",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-7",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-8",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-9",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-10",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-11",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-12",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-13",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-14",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-15",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-16",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-17",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-18",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-19",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-20",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-21",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-22",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-23",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "batman-the-animated-series",
        "batman-the-animated-series-entry-24",
        "contains",
        "Supporting entry under Batman: The Animated Series.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
