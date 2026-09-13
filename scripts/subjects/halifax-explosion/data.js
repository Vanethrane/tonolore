/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "halifax-explosion",
        "name": "Halifax Explosion",
        "type": "topic",
        "short_description": "1917 munitions blast, harbor ruin, and the largest non-nuclear explosion of its time.",
        "description": "1917 munitions blast, harbor ruin, and the largest non-nuclear explosion of its time. This Ton-o-Lore subject maps people, places, events, and ideas tied to Halifax Explosion so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "halifax-explosion-figures",
        "name": "Halifax Explosion figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Halifax Explosion.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Halifax Explosion."
    },
    {
        "slug": "halifax-explosion-world",
        "name": "Halifax Explosion world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Halifax Explosion.",
        "description": "Geography, institutions, and periodization that give Halifax Explosion its encyclopedia shape."
    },
    {
        "slug": "halifax-explosion-places",
        "name": "Halifax Explosion places",
        "type": "place",
        "short_description": "Locations and geographies that frame Halifax Explosion.",
        "description": "Places, regions, and built sites that give Halifax Explosion its map — where events and figures concentrate."
    },
    {
        "slug": "halifax-explosion-events",
        "name": "Halifax Explosion events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Halifax Explosion.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Halifax Explosion timeline."
    },
    {
        "slug": "halifax-explosion-objects",
        "name": "Halifax Explosion objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Halifax Explosion.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Halifax Explosion."
    },
    {
        "slug": "halifax-explosion-factions",
        "name": "Halifax Explosion factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Halifax Explosion.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Halifax Explosion."
    },
    {
        "slug": "halifax-explosion-concepts",
        "name": "Halifax Explosion concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Halifax Explosion.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Halifax Explosion readable as a lore graph."
    },
    {
        "slug": "halifax-explosion-eras",
        "name": "Halifax Explosion eras",
        "type": "event",
        "short_description": "Periodization for Halifax Explosion.",
        "description": "Named eras and phases that help readers track how Halifax Explosion changes across time."
    },
    {
        "slug": "halifax-explosion-works",
        "name": "Halifax Explosion works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Halifax Explosion.",
        "description": "Primary works and adaptations through which most audiences encounter Halifax Explosion."
    },
    {
        "slug": "halifax-explosion-symbols",
        "name": "Halifax Explosion symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Halifax Explosion.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Halifax Explosion."
    },
    {
        "slug": "halifax-explosion-controversies",
        "name": "Halifax Explosion controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Halifax Explosion.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Halifax Explosion argumentative."
    },
    {
        "slug": "halifax-explosion-sources",
        "name": "Halifax Explosion sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Halifax Explosion.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Halifax Explosion."
    },
    {
        "slug": "halifax-explosion-geography",
        "name": "Halifax Explosion geography",
        "type": "place",
        "short_description": "Broader geographic framing for Halifax Explosion.",
        "description": "Regions, routes, and spatial systems that situate Halifax Explosion beyond single named places."
    },
    {
        "slug": "halifax-explosion-legacy",
        "name": "Halifax Explosion legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Halifax Explosion.",
        "description": "How Halifax Explosion continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "halifax-explosion-practices",
        "name": "Halifax Explosion practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Halifax Explosion.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Halifax Explosion."
    },
    {
        "slug": "halifax-explosion-entry-1",
        "name": "Halifax Explosion entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-2",
        "name": "Halifax Explosion entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-3",
        "name": "Halifax Explosion entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-4",
        "name": "Halifax Explosion entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-5",
        "name": "Halifax Explosion entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-6",
        "name": "Halifax Explosion entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-7",
        "name": "Halifax Explosion entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-8",
        "name": "Halifax Explosion entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-9",
        "name": "Halifax Explosion entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-10",
        "name": "Halifax Explosion entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-11",
        "name": "Halifax Explosion entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-12",
        "name": "Halifax Explosion entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-13",
        "name": "Halifax Explosion entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-14",
        "name": "Halifax Explosion entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-15",
        "name": "Halifax Explosion entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-16",
        "name": "Halifax Explosion entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-17",
        "name": "Halifax Explosion entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-18",
        "name": "Halifax Explosion entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-19",
        "name": "Halifax Explosion entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-20",
        "name": "Halifax Explosion entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-21",
        "name": "Halifax Explosion entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-22",
        "name": "Halifax Explosion entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-23",
        "name": "Halifax Explosion entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "halifax-explosion-entry-24",
        "name": "Halifax Explosion entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Halifax Explosion.",
        "description": "A supporting encyclopedia entry in the Halifax Explosion subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "halifax-explosion",
        "halifax-explosion-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "halifax-explosion",
        "halifax-explosion-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "halifax-explosion",
        "halifax-explosion-places",
        "contains",
        "Halifax Explosion places is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-events",
        "contains",
        "Halifax Explosion events is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-objects",
        "contains",
        "Halifax Explosion objects & artifacts is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-factions",
        "contains",
        "Halifax Explosion factions & groups is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-concepts",
        "contains",
        "Halifax Explosion concepts is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-eras",
        "contains",
        "Halifax Explosion eras is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-works",
        "contains",
        "Halifax Explosion works & media is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-symbols",
        "contains",
        "Halifax Explosion symbols is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-controversies",
        "contains",
        "Halifax Explosion controversies is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-sources",
        "contains",
        "Halifax Explosion sources is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-geography",
        "contains",
        "Halifax Explosion geography is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-legacy",
        "contains",
        "Halifax Explosion legacy is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-practices",
        "contains",
        "Halifax Explosion practices is a primary trailhead under Halifax Explosion.",
        0.88,
        0.82
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-1",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-2",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-3",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-4",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-5",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-6",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-7",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-8",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-9",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-10",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-11",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-12",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-13",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-14",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-15",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-16",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-17",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-18",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-19",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-20",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-21",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-22",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-23",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ],
    [
        "halifax-explosion",
        "halifax-explosion-entry-24",
        "contains",
        "Supporting entry under Halifax Explosion.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
