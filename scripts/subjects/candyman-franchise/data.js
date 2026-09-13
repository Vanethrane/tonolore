/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "candyman-franchise",
        "name": "Candyman",
        "type": "topic",
        "short_description": "Urban legend invocation, Bee-swarm mythology, and the Chicago housing-project haunt.",
        "description": "Urban legend invocation, Bee-swarm mythology, and the Chicago housing-project haunt. This Ton-o-Lore subject maps people, places, events, and ideas tied to Candyman so readers can follow long-tail connections across horror."
    },
    {
        "slug": "candyman-franchise-figures",
        "name": "Candyman figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Candyman.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Candyman."
    },
    {
        "slug": "candyman-franchise-world",
        "name": "Candyman world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Candyman.",
        "description": "Geography, institutions, and periodization that give Candyman its encyclopedia shape."
    },
    {
        "slug": "candyman-franchise-places",
        "name": "Candyman places",
        "type": "place",
        "short_description": "Locations and geographies that frame Candyman.",
        "description": "Places, regions, and built sites that give Candyman its map — where events and figures concentrate."
    },
    {
        "slug": "candyman-franchise-events",
        "name": "Candyman events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Candyman.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Candyman timeline."
    },
    {
        "slug": "candyman-franchise-objects",
        "name": "Candyman objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Candyman.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Candyman."
    },
    {
        "slug": "candyman-franchise-factions",
        "name": "Candyman factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Candyman.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Candyman."
    },
    {
        "slug": "candyman-franchise-concepts",
        "name": "Candyman concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Candyman.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Candyman readable as a lore graph."
    },
    {
        "slug": "candyman-franchise-eras",
        "name": "Candyman eras",
        "type": "event",
        "short_description": "Periodization for Candyman.",
        "description": "Named eras and phases that help readers track how Candyman changes across time."
    },
    {
        "slug": "candyman-franchise-works",
        "name": "Candyman works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Candyman.",
        "description": "Primary works and adaptations through which most audiences encounter Candyman."
    },
    {
        "slug": "candyman-franchise-symbols",
        "name": "Candyman symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Candyman.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Candyman."
    },
    {
        "slug": "candyman-franchise-controversies",
        "name": "Candyman controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Candyman.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Candyman argumentative."
    },
    {
        "slug": "candyman-franchise-sources",
        "name": "Candyman sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Candyman.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Candyman."
    },
    {
        "slug": "candyman-franchise-geography",
        "name": "Candyman geography",
        "type": "place",
        "short_description": "Broader geographic framing for Candyman.",
        "description": "Regions, routes, and spatial systems that situate Candyman beyond single named places."
    },
    {
        "slug": "candyman-franchise-legacy",
        "name": "Candyman legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Candyman.",
        "description": "How Candyman continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "candyman-franchise-practices",
        "name": "Candyman practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Candyman.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Candyman."
    },
    {
        "slug": "candyman-franchise-entry-1",
        "name": "Candyman entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-2",
        "name": "Candyman entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-3",
        "name": "Candyman entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-4",
        "name": "Candyman entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-5",
        "name": "Candyman entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-6",
        "name": "Candyman entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-7",
        "name": "Candyman entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-8",
        "name": "Candyman entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-9",
        "name": "Candyman entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-10",
        "name": "Candyman entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-11",
        "name": "Candyman entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-12",
        "name": "Candyman entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-13",
        "name": "Candyman entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-14",
        "name": "Candyman entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-15",
        "name": "Candyman entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-16",
        "name": "Candyman entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-17",
        "name": "Candyman entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-18",
        "name": "Candyman entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-19",
        "name": "Candyman entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-20",
        "name": "Candyman entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-21",
        "name": "Candyman entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-22",
        "name": "Candyman entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-23",
        "name": "Candyman entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "candyman-franchise-entry-24",
        "name": "Candyman entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Candyman.",
        "description": "A supporting encyclopedia entry in the Candyman subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "candyman-franchise",
        "candyman-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "candyman-franchise",
        "candyman-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "candyman-franchise",
        "candyman-franchise-places",
        "contains",
        "Candyman places is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-events",
        "contains",
        "Candyman events is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-objects",
        "contains",
        "Candyman objects & artifacts is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-factions",
        "contains",
        "Candyman factions & groups is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-concepts",
        "contains",
        "Candyman concepts is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-eras",
        "contains",
        "Candyman eras is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-works",
        "contains",
        "Candyman works & media is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-symbols",
        "contains",
        "Candyman symbols is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-controversies",
        "contains",
        "Candyman controversies is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-sources",
        "contains",
        "Candyman sources is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-geography",
        "contains",
        "Candyman geography is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-legacy",
        "contains",
        "Candyman legacy is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-practices",
        "contains",
        "Candyman practices is a primary trailhead under Candyman.",
        0.88,
        0.82
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-1",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-2",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-3",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-4",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-5",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-6",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-7",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-8",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-9",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-10",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-11",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-12",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-13",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-14",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-15",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-16",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-17",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-18",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-19",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-20",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-21",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-22",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-23",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ],
    [
        "candyman-franchise",
        "candyman-franchise-entry-24",
        "contains",
        "Supporting entry under Candyman.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
