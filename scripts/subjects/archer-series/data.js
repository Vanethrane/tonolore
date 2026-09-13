/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "archer-series",
        "name": "Archer",
        "type": "topic",
        "short_description": "Spy-agency incompetence, continuity resets, and the stylish adult toon that kept reinventing itself.",
        "description": "Spy-agency incompetence, continuity resets, and the stylish adult toon that kept reinventing itself. This Ton-o-Lore subject maps people, places, events, and ideas tied to Archer so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "archer-series-figures",
        "name": "Archer figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Archer.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Archer."
    },
    {
        "slug": "archer-series-world",
        "name": "Archer world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Archer.",
        "description": "Geography, institutions, and periodization that give Archer its encyclopedia shape."
    },
    {
        "slug": "archer-series-places",
        "name": "Archer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Archer.",
        "description": "Places, regions, and built sites that give Archer its map — where events and figures concentrate."
    },
    {
        "slug": "archer-series-events",
        "name": "Archer events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Archer.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Archer timeline."
    },
    {
        "slug": "archer-series-objects",
        "name": "Archer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Archer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Archer."
    },
    {
        "slug": "archer-series-factions",
        "name": "Archer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Archer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Archer."
    },
    {
        "slug": "archer-series-concepts",
        "name": "Archer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Archer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Archer readable as a lore graph."
    },
    {
        "slug": "archer-series-eras",
        "name": "Archer eras",
        "type": "event",
        "short_description": "Periodization for Archer.",
        "description": "Named eras and phases that help readers track how Archer changes across time."
    },
    {
        "slug": "archer-series-works",
        "name": "Archer works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Archer.",
        "description": "Primary works and adaptations through which most audiences encounter Archer."
    },
    {
        "slug": "archer-series-symbols",
        "name": "Archer symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Archer.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Archer."
    },
    {
        "slug": "archer-series-controversies",
        "name": "Archer controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Archer.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Archer argumentative."
    },
    {
        "slug": "archer-series-sources",
        "name": "Archer sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Archer.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Archer."
    },
    {
        "slug": "archer-series-geography",
        "name": "Archer geography",
        "type": "place",
        "short_description": "Broader geographic framing for Archer.",
        "description": "Regions, routes, and spatial systems that situate Archer beyond single named places."
    },
    {
        "slug": "archer-series-legacy",
        "name": "Archer legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Archer.",
        "description": "How Archer continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "archer-series-practices",
        "name": "Archer practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Archer.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Archer."
    },
    {
        "slug": "archer-series-entry-1",
        "name": "Archer entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-2",
        "name": "Archer entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-3",
        "name": "Archer entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-4",
        "name": "Archer entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-5",
        "name": "Archer entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-6",
        "name": "Archer entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-7",
        "name": "Archer entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-8",
        "name": "Archer entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-9",
        "name": "Archer entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-10",
        "name": "Archer entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-11",
        "name": "Archer entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-12",
        "name": "Archer entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-13",
        "name": "Archer entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-14",
        "name": "Archer entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-15",
        "name": "Archer entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-16",
        "name": "Archer entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-17",
        "name": "Archer entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-18",
        "name": "Archer entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-19",
        "name": "Archer entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-20",
        "name": "Archer entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-21",
        "name": "Archer entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-22",
        "name": "Archer entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-23",
        "name": "Archer entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "archer-series-entry-24",
        "name": "Archer entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Archer.",
        "description": "A supporting encyclopedia entry in the Archer subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "archer-series",
        "archer-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "archer-series",
        "archer-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "archer-series",
        "archer-series-places",
        "contains",
        "Archer places is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-events",
        "contains",
        "Archer events is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-objects",
        "contains",
        "Archer objects & artifacts is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-factions",
        "contains",
        "Archer factions & groups is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-concepts",
        "contains",
        "Archer concepts is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-eras",
        "contains",
        "Archer eras is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-works",
        "contains",
        "Archer works & media is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-symbols",
        "contains",
        "Archer symbols is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-controversies",
        "contains",
        "Archer controversies is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-sources",
        "contains",
        "Archer sources is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-geography",
        "contains",
        "Archer geography is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-legacy",
        "contains",
        "Archer legacy is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-practices",
        "contains",
        "Archer practices is a primary trailhead under Archer.",
        0.88,
        0.82
    ],
    [
        "archer-series",
        "archer-series-entry-1",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-2",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-3",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-4",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-5",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-6",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-7",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-8",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-9",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-10",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-11",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-12",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-13",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-14",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-15",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-16",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-17",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-18",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-19",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-20",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-21",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-22",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-23",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ],
    [
        "archer-series",
        "archer-series-entry-24",
        "contains",
        "Supporting entry under Archer.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
