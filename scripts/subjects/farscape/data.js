/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "farscape",
        "name": "Farscape",
        "type": "topic",
        "short_description": "Moya’s crew, Peacekeeper pursuit, and the puppety psychedelic space opera of the early 2000s.",
        "description": "Moya’s crew, Peacekeeper pursuit, and the puppety psychedelic space opera of the early 2000s. This Ton-o-Lore subject maps people, places, events, and ideas tied to Farscape so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "farscape-figures",
        "name": "Farscape figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Farscape.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Farscape."
    },
    {
        "slug": "farscape-world",
        "name": "Farscape world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Farscape.",
        "description": "Geography, institutions, and periodization that give Farscape its encyclopedia shape."
    },
    {
        "slug": "farscape-places",
        "name": "Farscape places",
        "type": "place",
        "short_description": "Locations and geographies that frame Farscape.",
        "description": "Places, regions, and built sites that give Farscape its map — where events and figures concentrate."
    },
    {
        "slug": "farscape-events",
        "name": "Farscape events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Farscape.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Farscape timeline."
    },
    {
        "slug": "farscape-objects",
        "name": "Farscape objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Farscape.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Farscape."
    },
    {
        "slug": "farscape-factions",
        "name": "Farscape factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Farscape.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Farscape."
    },
    {
        "slug": "farscape-concepts",
        "name": "Farscape concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Farscape.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Farscape readable as a lore graph."
    },
    {
        "slug": "farscape-eras",
        "name": "Farscape eras",
        "type": "event",
        "short_description": "Periodization for Farscape.",
        "description": "Named eras and phases that help readers track how Farscape changes across time."
    },
    {
        "slug": "farscape-works",
        "name": "Farscape works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Farscape.",
        "description": "Primary works and adaptations through which most audiences encounter Farscape."
    },
    {
        "slug": "farscape-symbols",
        "name": "Farscape symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Farscape.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Farscape."
    },
    {
        "slug": "farscape-controversies",
        "name": "Farscape controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Farscape.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Farscape argumentative."
    },
    {
        "slug": "farscape-sources",
        "name": "Farscape sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Farscape.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Farscape."
    },
    {
        "slug": "farscape-geography",
        "name": "Farscape geography",
        "type": "place",
        "short_description": "Broader geographic framing for Farscape.",
        "description": "Regions, routes, and spatial systems that situate Farscape beyond single named places."
    },
    {
        "slug": "farscape-legacy",
        "name": "Farscape legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Farscape.",
        "description": "How Farscape continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "farscape-practices",
        "name": "Farscape practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Farscape.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Farscape."
    },
    {
        "slug": "farscape-entry-1",
        "name": "Farscape entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-2",
        "name": "Farscape entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-3",
        "name": "Farscape entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-4",
        "name": "Farscape entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-5",
        "name": "Farscape entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-6",
        "name": "Farscape entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-7",
        "name": "Farscape entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-8",
        "name": "Farscape entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-9",
        "name": "Farscape entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-10",
        "name": "Farscape entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-11",
        "name": "Farscape entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-12",
        "name": "Farscape entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-13",
        "name": "Farscape entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-14",
        "name": "Farscape entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-15",
        "name": "Farscape entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-16",
        "name": "Farscape entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-17",
        "name": "Farscape entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-18",
        "name": "Farscape entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-19",
        "name": "Farscape entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-20",
        "name": "Farscape entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-21",
        "name": "Farscape entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-22",
        "name": "Farscape entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-23",
        "name": "Farscape entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "farscape-entry-24",
        "name": "Farscape entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Farscape.",
        "description": "A supporting encyclopedia entry in the Farscape subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "farscape",
        "farscape-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "farscape",
        "farscape-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "farscape",
        "farscape-places",
        "contains",
        "Farscape places is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-events",
        "contains",
        "Farscape events is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-objects",
        "contains",
        "Farscape objects & artifacts is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-factions",
        "contains",
        "Farscape factions & groups is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-concepts",
        "contains",
        "Farscape concepts is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-eras",
        "contains",
        "Farscape eras is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-works",
        "contains",
        "Farscape works & media is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-symbols",
        "contains",
        "Farscape symbols is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-controversies",
        "contains",
        "Farscape controversies is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-sources",
        "contains",
        "Farscape sources is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-geography",
        "contains",
        "Farscape geography is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-legacy",
        "contains",
        "Farscape legacy is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-practices",
        "contains",
        "Farscape practices is a primary trailhead under Farscape.",
        0.88,
        0.82
    ],
    [
        "farscape",
        "farscape-entry-1",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-2",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-3",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-4",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-5",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-6",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-7",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-8",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-9",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-10",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-11",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-12",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-13",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-14",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-15",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-16",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-17",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-18",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-19",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-20",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-21",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-22",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-23",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ],
    [
        "farscape",
        "farscape-entry-24",
        "contains",
        "Supporting entry under Farscape.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
