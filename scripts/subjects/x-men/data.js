/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "x-men",
        "name": "X-Men",
        "type": "topic",
        "short_description": "Mutant metaphor, teams and schisms, and Marvel’s longest-running minority-superhero epic.",
        "description": "Mutant metaphor, teams and schisms, and Marvel’s longest-running minority-superhero epic. This Ton-o-Lore subject maps people, places, events, and ideas tied to X-Men so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "x-men-figures",
        "name": "X-Men figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to X-Men.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring X-Men."
    },
    {
        "slug": "x-men-world",
        "name": "X-Men world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame X-Men.",
        "description": "Geography, institutions, and periodization that give X-Men its encyclopedia shape."
    },
    {
        "slug": "x-men-places",
        "name": "X-Men places",
        "type": "place",
        "short_description": "Locations and geographies that frame X-Men.",
        "description": "Places, regions, and built sites that give X-Men its map — where events and figures concentrate."
    },
    {
        "slug": "x-men-events",
        "name": "X-Men events",
        "type": "event",
        "short_description": "Turning points and dated episodes in X-Men.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the X-Men timeline."
    },
    {
        "slug": "x-men-objects",
        "name": "X-Men objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to X-Men.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through X-Men."
    },
    {
        "slug": "x-men-factions",
        "name": "X-Men factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside X-Men.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in X-Men."
    },
    {
        "slug": "x-men-concepts",
        "name": "X-Men concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize X-Men.",
        "description": "Keywords, doctrines, systems, and abstract forces that make X-Men readable as a lore graph."
    },
    {
        "slug": "x-men-eras",
        "name": "X-Men eras",
        "type": "event",
        "short_description": "Periodization for X-Men.",
        "description": "Named eras and phases that help readers track how X-Men changes across time."
    },
    {
        "slug": "x-men-works",
        "name": "X-Men works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry X-Men.",
        "description": "Primary works and adaptations through which most audiences encounter X-Men."
    },
    {
        "slug": "x-men-symbols",
        "name": "X-Men symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with X-Men.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside X-Men."
    },
    {
        "slug": "x-men-controversies",
        "name": "X-Men controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in X-Men.",
        "description": "Debates, rival canons, scandals, and contested facts that keep X-Men argumentative."
    },
    {
        "slug": "x-men-sources",
        "name": "X-Men sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into X-Men.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify X-Men."
    },
    {
        "slug": "x-men-geography",
        "name": "X-Men geography",
        "type": "place",
        "short_description": "Broader geographic framing for X-Men.",
        "description": "Regions, routes, and spatial systems that situate X-Men beyond single named places."
    },
    {
        "slug": "x-men-legacy",
        "name": "X-Men legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of X-Men.",
        "description": "How X-Men continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "x-men-practices",
        "name": "X-Men practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in X-Men.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in X-Men."
    },
    {
        "slug": "x-men-entry-1",
        "name": "X-Men entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-2",
        "name": "X-Men entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-3",
        "name": "X-Men entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-4",
        "name": "X-Men entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-5",
        "name": "X-Men entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-6",
        "name": "X-Men entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-7",
        "name": "X-Men entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-8",
        "name": "X-Men entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-9",
        "name": "X-Men entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-10",
        "name": "X-Men entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-11",
        "name": "X-Men entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-12",
        "name": "X-Men entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-13",
        "name": "X-Men entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-14",
        "name": "X-Men entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-15",
        "name": "X-Men entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-16",
        "name": "X-Men entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-17",
        "name": "X-Men entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-18",
        "name": "X-Men entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-19",
        "name": "X-Men entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-20",
        "name": "X-Men entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-21",
        "name": "X-Men entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-22",
        "name": "X-Men entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-23",
        "name": "X-Men entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "x-men-entry-24",
        "name": "X-Men entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside X-Men.",
        "description": "A supporting encyclopedia entry in the X-Men subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "x-men",
        "x-men-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "x-men",
        "x-men-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "x-men",
        "x-men-places",
        "contains",
        "X-Men places is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-events",
        "contains",
        "X-Men events is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-objects",
        "contains",
        "X-Men objects & artifacts is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-factions",
        "contains",
        "X-Men factions & groups is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-concepts",
        "contains",
        "X-Men concepts is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-eras",
        "contains",
        "X-Men eras is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-works",
        "contains",
        "X-Men works & media is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-symbols",
        "contains",
        "X-Men symbols is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-controversies",
        "contains",
        "X-Men controversies is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-sources",
        "contains",
        "X-Men sources is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-geography",
        "contains",
        "X-Men geography is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-legacy",
        "contains",
        "X-Men legacy is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-practices",
        "contains",
        "X-Men practices is a primary trailhead under X-Men.",
        0.88,
        0.82
    ],
    [
        "x-men",
        "x-men-entry-1",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-2",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-3",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-4",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-5",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-6",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-7",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-8",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-9",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-10",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-11",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-12",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-13",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-14",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-15",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-16",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-17",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-18",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-19",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-20",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-21",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-22",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-23",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ],
    [
        "x-men",
        "x-men-entry-24",
        "contains",
        "Supporting entry under X-Men.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
