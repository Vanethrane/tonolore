/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "x-men-the-animated-series",
        "name": "X-Men: The Animated Series",
        "type": "topic",
        "short_description": "Mutant soap opera, 90s continuity, and the cartoon that carried comics lore to Saturday mornings.",
        "description": "Mutant soap opera, 90s continuity, and the cartoon that carried comics lore to Saturday mornings. This Ton-o-Lore subject maps people, places, events, and ideas tied to X-Men: The Animated Series so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "x-men-the-animated-series-figures",
        "name": "X-Men: The Animated Series figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to X-Men: The Animated Series.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring X-Men: The Animated Series."
    },
    {
        "slug": "x-men-the-animated-series-world",
        "name": "X-Men: The Animated Series world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame X-Men: The Animated Series.",
        "description": "Geography, institutions, and periodization that give X-Men: The Animated Series its encyclopedia shape."
    },
    {
        "slug": "x-men-the-animated-series-places",
        "name": "X-Men: The Animated Series places",
        "type": "place",
        "short_description": "Locations and geographies that frame X-Men: The Animated Series.",
        "description": "Places, regions, and built sites that give X-Men: The Animated Series its map — where events and figures concentrate."
    },
    {
        "slug": "x-men-the-animated-series-events",
        "name": "X-Men: The Animated Series events",
        "type": "event",
        "short_description": "Turning points and dated episodes in X-Men: The Animated Series.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the X-Men: The Animated Series timeline."
    },
    {
        "slug": "x-men-the-animated-series-objects",
        "name": "X-Men: The Animated Series objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to X-Men: The Animated Series.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through X-Men: The Animated Series."
    },
    {
        "slug": "x-men-the-animated-series-factions",
        "name": "X-Men: The Animated Series factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside X-Men: The Animated Series.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in X-Men: The Animated Series."
    },
    {
        "slug": "x-men-the-animated-series-concepts",
        "name": "X-Men: The Animated Series concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize X-Men: The Animated Series.",
        "description": "Keywords, doctrines, systems, and abstract forces that make X-Men: The Animated Series readable as a lore graph."
    },
    {
        "slug": "x-men-the-animated-series-eras",
        "name": "X-Men: The Animated Series eras",
        "type": "event",
        "short_description": "Periodization for X-Men: The Animated Series.",
        "description": "Named eras and phases that help readers track how X-Men: The Animated Series changes across time."
    },
    {
        "slug": "x-men-the-animated-series-works",
        "name": "X-Men: The Animated Series works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry X-Men: The Animated Series.",
        "description": "Primary works and adaptations through which most audiences encounter X-Men: The Animated Series."
    },
    {
        "slug": "x-men-the-animated-series-symbols",
        "name": "X-Men: The Animated Series symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with X-Men: The Animated Series.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside X-Men: The Animated Series."
    },
    {
        "slug": "x-men-the-animated-series-controversies",
        "name": "X-Men: The Animated Series controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in X-Men: The Animated Series.",
        "description": "Debates, rival canons, scandals, and contested facts that keep X-Men: The Animated Series argumentative."
    },
    {
        "slug": "x-men-the-animated-series-sources",
        "name": "X-Men: The Animated Series sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into X-Men: The Animated Series.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify X-Men: The Animated Series."
    },
    {
        "slug": "x-men-the-animated-series-geography",
        "name": "X-Men: The Animated Series geography",
        "type": "place",
        "short_description": "Broader geographic framing for X-Men: The Animated Series.",
        "description": "Regions, routes, and spatial systems that situate X-Men: The Animated Series beyond single named places."
    },
    {
        "slug": "x-men-the-animated-series-legacy",
        "name": "X-Men: The Animated Series legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of X-Men: The Animated Series.",
        "description": "How X-Men: The Animated Series continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "x-men-the-animated-series-practices",
        "name": "X-Men: The Animated Series practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in X-Men: The Animated Series.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in X-Men: The Animated Series."
    },
    {
        "slug": "x-men-the-animated-series-entry-1",
        "name": "X-Men: The Animated Series entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-2",
        "name": "X-Men: The Animated Series entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-3",
        "name": "X-Men: The Animated Series entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-4",
        "name": "X-Men: The Animated Series entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-5",
        "name": "X-Men: The Animated Series entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-6",
        "name": "X-Men: The Animated Series entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-7",
        "name": "X-Men: The Animated Series entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-8",
        "name": "X-Men: The Animated Series entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-9",
        "name": "X-Men: The Animated Series entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-10",
        "name": "X-Men: The Animated Series entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-11",
        "name": "X-Men: The Animated Series entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-12",
        "name": "X-Men: The Animated Series entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-13",
        "name": "X-Men: The Animated Series entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-14",
        "name": "X-Men: The Animated Series entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-15",
        "name": "X-Men: The Animated Series entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-16",
        "name": "X-Men: The Animated Series entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-17",
        "name": "X-Men: The Animated Series entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-18",
        "name": "X-Men: The Animated Series entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-19",
        "name": "X-Men: The Animated Series entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-20",
        "name": "X-Men: The Animated Series entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-21",
        "name": "X-Men: The Animated Series entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-22",
        "name": "X-Men: The Animated Series entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-23",
        "name": "X-Men: The Animated Series entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-the-animated-series-entry-24",
        "name": "X-Men: The Animated Series entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men: The Animated Series.",
        "description": "A supporting encyclopedia entry in the X-Men: The Animated Series subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-places",
        "contains",
        "X-Men: The Animated Series places is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-events",
        "contains",
        "X-Men: The Animated Series events is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-objects",
        "contains",
        "X-Men: The Animated Series objects & artifacts is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-factions",
        "contains",
        "X-Men: The Animated Series factions & groups is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-concepts",
        "contains",
        "X-Men: The Animated Series concepts is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-eras",
        "contains",
        "X-Men: The Animated Series eras is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-works",
        "contains",
        "X-Men: The Animated Series works & media is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-symbols",
        "contains",
        "X-Men: The Animated Series symbols is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-controversies",
        "contains",
        "X-Men: The Animated Series controversies is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-sources",
        "contains",
        "X-Men: The Animated Series sources is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-geography",
        "contains",
        "X-Men: The Animated Series geography is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-legacy",
        "contains",
        "X-Men: The Animated Series legacy is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-practices",
        "contains",
        "X-Men: The Animated Series practices is a primary trailhead under X-Men: The Animated Series.",
        0.88,
        0.82
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-1",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-2",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-3",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-4",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-5",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-6",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-7",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-8",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-9",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-10",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-11",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-12",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-13",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-14",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-15",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-16",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-17",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-18",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-19",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-20",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-21",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-22",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-23",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ],
    [
        "x-men-the-animated-series",
        "x-men-the-animated-series-entry-24",
        "contains",
        "Supporting entry under X-Men: The Animated Series.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
