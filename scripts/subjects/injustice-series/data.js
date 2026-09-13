/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "injustice-series",
        "name": "Injustice",
        "type": "topic",
        "short_description": "Regime Superman lore, DC roster wars, and NetherRealm’s multiverse fighter saga.",
        "description": "Regime Superman lore, DC roster wars, and NetherRealm’s multiverse fighter saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to Injustice so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "injustice-series-figures",
        "name": "Injustice figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Injustice.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Injustice."
    },
    {
        "slug": "injustice-series-world",
        "name": "Injustice world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Injustice.",
        "description": "Geography, institutions, and periodization that give Injustice its encyclopedia shape."
    },
    {
        "slug": "injustice-series-places",
        "name": "Injustice places",
        "type": "place",
        "short_description": "Locations and geographies that frame Injustice.",
        "description": "Places, regions, and built sites that give Injustice its map — where events and figures concentrate."
    },
    {
        "slug": "injustice-series-events",
        "name": "Injustice events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Injustice.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Injustice timeline."
    },
    {
        "slug": "injustice-series-objects",
        "name": "Injustice objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Injustice.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Injustice."
    },
    {
        "slug": "injustice-series-factions",
        "name": "Injustice factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Injustice.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Injustice."
    },
    {
        "slug": "injustice-series-concepts",
        "name": "Injustice concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Injustice.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Injustice readable as a lore graph."
    },
    {
        "slug": "injustice-series-eras",
        "name": "Injustice eras",
        "type": "event",
        "short_description": "Periodization for Injustice.",
        "description": "Named eras and phases that help readers track how Injustice changes across time."
    },
    {
        "slug": "injustice-series-works",
        "name": "Injustice works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Injustice.",
        "description": "Primary works and adaptations through which most audiences encounter Injustice."
    },
    {
        "slug": "injustice-series-symbols",
        "name": "Injustice symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Injustice.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Injustice."
    },
    {
        "slug": "injustice-series-controversies",
        "name": "Injustice controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Injustice.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Injustice argumentative."
    },
    {
        "slug": "injustice-series-sources",
        "name": "Injustice sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Injustice.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Injustice."
    },
    {
        "slug": "injustice-series-geography",
        "name": "Injustice geography",
        "type": "place",
        "short_description": "Broader geographic framing for Injustice.",
        "description": "Regions, routes, and spatial systems that situate Injustice beyond single named places."
    },
    {
        "slug": "injustice-series-legacy",
        "name": "Injustice legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Injustice.",
        "description": "How Injustice continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "injustice-series-practices",
        "name": "Injustice practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Injustice.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Injustice."
    },
    {
        "slug": "injustice-series-entry-1",
        "name": "Injustice entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-2",
        "name": "Injustice entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-3",
        "name": "Injustice entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-4",
        "name": "Injustice entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-5",
        "name": "Injustice entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-6",
        "name": "Injustice entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-7",
        "name": "Injustice entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-8",
        "name": "Injustice entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-9",
        "name": "Injustice entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-10",
        "name": "Injustice entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-11",
        "name": "Injustice entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-12",
        "name": "Injustice entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-13",
        "name": "Injustice entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-14",
        "name": "Injustice entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-15",
        "name": "Injustice entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-16",
        "name": "Injustice entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-17",
        "name": "Injustice entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-18",
        "name": "Injustice entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-19",
        "name": "Injustice entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-20",
        "name": "Injustice entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-21",
        "name": "Injustice entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-22",
        "name": "Injustice entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-23",
        "name": "Injustice entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "injustice-series-entry-24",
        "name": "Injustice entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Injustice.",
        "description": "A supporting encyclopedia entry in the Injustice subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "injustice-series",
        "injustice-series-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "injustice-series",
        "injustice-series-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "injustice-series",
        "injustice-series-places",
        "contains",
        "Injustice places is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-events",
        "contains",
        "Injustice events is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-objects",
        "contains",
        "Injustice objects & artifacts is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-factions",
        "contains",
        "Injustice factions & groups is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-concepts",
        "contains",
        "Injustice concepts is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-eras",
        "contains",
        "Injustice eras is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-works",
        "contains",
        "Injustice works & media is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-symbols",
        "contains",
        "Injustice symbols is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-controversies",
        "contains",
        "Injustice controversies is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-sources",
        "contains",
        "Injustice sources is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-geography",
        "contains",
        "Injustice geography is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-legacy",
        "contains",
        "Injustice legacy is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-practices",
        "contains",
        "Injustice practices is a primary trailhead under Injustice.",
        0.88,
        0.82
    ],
    [
        "injustice-series",
        "injustice-series-entry-1",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-2",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-3",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-4",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-5",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-6",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-7",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-8",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-9",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-10",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-11",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-12",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-13",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-14",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-15",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-16",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-17",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-18",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-19",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-20",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-21",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-22",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-23",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ],
    [
        "injustice-series",
        "injustice-series-entry-24",
        "contains",
        "Supporting entry under Injustice.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
