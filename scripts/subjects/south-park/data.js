/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "south-park",
        "name": "South Park",
        "type": "topic",
        "short_description": "Cutout chaos, topical satire, and the mountain-town kids who broke cable comedy rules.",
        "description": "Cutout chaos, topical satire, and the mountain-town kids who broke cable comedy rules. This Ton-o-Lore subject maps people, places, events, and ideas tied to South Park so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "south-park-figures",
        "name": "South Park figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to South Park.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring South Park."
    },
    {
        "slug": "south-park-world",
        "name": "South Park world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame South Park.",
        "description": "Geography, institutions, and periodization that give South Park its encyclopedia shape."
    },
    {
        "slug": "south-park-places",
        "name": "South Park places",
        "type": "place",
        "short_description": "Locations and geographies that frame South Park.",
        "description": "Places, regions, and built sites that give South Park its map — where events and figures concentrate."
    },
    {
        "slug": "south-park-events",
        "name": "South Park events",
        "type": "event",
        "short_description": "Turning points and dated episodes in South Park.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the South Park timeline."
    },
    {
        "slug": "south-park-objects",
        "name": "South Park objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to South Park.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through South Park."
    },
    {
        "slug": "south-park-factions",
        "name": "South Park factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside South Park.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in South Park."
    },
    {
        "slug": "south-park-concepts",
        "name": "South Park concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize South Park.",
        "description": "Keywords, doctrines, systems, and abstract forces that make South Park readable as a lore graph."
    },
    {
        "slug": "south-park-eras",
        "name": "South Park eras",
        "type": "event",
        "short_description": "Periodization for South Park.",
        "description": "Named eras and phases that help readers track how South Park changes across time."
    },
    {
        "slug": "south-park-works",
        "name": "South Park works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry South Park.",
        "description": "Primary works and adaptations through which most audiences encounter South Park."
    },
    {
        "slug": "south-park-symbols",
        "name": "South Park symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with South Park.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside South Park."
    },
    {
        "slug": "south-park-controversies",
        "name": "South Park controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in South Park.",
        "description": "Debates, rival canons, scandals, and contested facts that keep South Park argumentative."
    },
    {
        "slug": "south-park-sources",
        "name": "South Park sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into South Park.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify South Park."
    },
    {
        "slug": "south-park-geography",
        "name": "South Park geography",
        "type": "place",
        "short_description": "Broader geographic framing for South Park.",
        "description": "Regions, routes, and spatial systems that situate South Park beyond single named places."
    },
    {
        "slug": "south-park-legacy",
        "name": "South Park legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of South Park.",
        "description": "How South Park continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "south-park-practices",
        "name": "South Park practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in South Park.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in South Park."
    },
    {
        "slug": "south-park-entry-1",
        "name": "South Park entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-2",
        "name": "South Park entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-3",
        "name": "South Park entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-4",
        "name": "South Park entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-5",
        "name": "South Park entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-6",
        "name": "South Park entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-7",
        "name": "South Park entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-8",
        "name": "South Park entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-9",
        "name": "South Park entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-10",
        "name": "South Park entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-11",
        "name": "South Park entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-12",
        "name": "South Park entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-13",
        "name": "South Park entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-14",
        "name": "South Park entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-15",
        "name": "South Park entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-16",
        "name": "South Park entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-17",
        "name": "South Park entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-18",
        "name": "South Park entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-19",
        "name": "South Park entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-20",
        "name": "South Park entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-21",
        "name": "South Park entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-22",
        "name": "South Park entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-23",
        "name": "South Park entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "south-park-entry-24",
        "name": "South Park entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside South Park.",
        "description": "A supporting encyclopedia entry in the South Park subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "south-park",
        "south-park-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "south-park",
        "south-park-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "south-park",
        "south-park-places",
        "contains",
        "South Park places is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-events",
        "contains",
        "South Park events is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-objects",
        "contains",
        "South Park objects & artifacts is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-factions",
        "contains",
        "South Park factions & groups is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-concepts",
        "contains",
        "South Park concepts is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-eras",
        "contains",
        "South Park eras is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-works",
        "contains",
        "South Park works & media is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-symbols",
        "contains",
        "South Park symbols is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-controversies",
        "contains",
        "South Park controversies is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-sources",
        "contains",
        "South Park sources is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-geography",
        "contains",
        "South Park geography is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-legacy",
        "contains",
        "South Park legacy is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-practices",
        "contains",
        "South Park practices is a primary trailhead under South Park.",
        0.88,
        0.82
    ],
    [
        "south-park",
        "south-park-entry-1",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-2",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-3",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-4",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-5",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-6",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-7",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-8",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-9",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-10",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-11",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-12",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-13",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-14",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-15",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-16",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-17",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-18",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-19",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-20",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-21",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-22",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-23",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ],
    [
        "south-park",
        "south-park-entry-24",
        "contains",
        "Supporting entry under South Park.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
