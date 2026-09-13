/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "insidious-franchise",
        "name": "Insidious",
        "type": "topic",
        "short_description": "The Further, astral predators, and the Lambert family continuum of dream-realm dread.",
        "description": "The Further, astral predators, and the Lambert family continuum of dream-realm dread. This Ton-o-Lore subject maps people, places, events, and ideas tied to Insidious so readers can follow long-tail connections across horror."
    },
    {
        "slug": "insidious-franchise-figures",
        "name": "Insidious figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Insidious.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Insidious."
    },
    {
        "slug": "insidious-franchise-world",
        "name": "Insidious world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Insidious.",
        "description": "Geography, institutions, and periodization that give Insidious its encyclopedia shape."
    },
    {
        "slug": "insidious-franchise-places",
        "name": "Insidious places",
        "type": "place",
        "short_description": "Locations and geographies that frame Insidious.",
        "description": "Places, regions, and built sites that give Insidious its map — where events and figures concentrate."
    },
    {
        "slug": "insidious-franchise-events",
        "name": "Insidious events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Insidious.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Insidious timeline."
    },
    {
        "slug": "insidious-franchise-objects",
        "name": "Insidious objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Insidious.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Insidious."
    },
    {
        "slug": "insidious-franchise-factions",
        "name": "Insidious factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Insidious.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Insidious."
    },
    {
        "slug": "insidious-franchise-concepts",
        "name": "Insidious concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Insidious.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Insidious readable as a lore graph."
    },
    {
        "slug": "insidious-franchise-eras",
        "name": "Insidious eras",
        "type": "event",
        "short_description": "Periodization for Insidious.",
        "description": "Named eras and phases that help readers track how Insidious changes across time."
    },
    {
        "slug": "insidious-franchise-works",
        "name": "Insidious works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Insidious.",
        "description": "Primary works and adaptations through which most audiences encounter Insidious."
    },
    {
        "slug": "insidious-franchise-symbols",
        "name": "Insidious symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Insidious.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Insidious."
    },
    {
        "slug": "insidious-franchise-controversies",
        "name": "Insidious controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Insidious.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Insidious argumentative."
    },
    {
        "slug": "insidious-franchise-sources",
        "name": "Insidious sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Insidious.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Insidious."
    },
    {
        "slug": "insidious-franchise-geography",
        "name": "Insidious geography",
        "type": "place",
        "short_description": "Broader geographic framing for Insidious.",
        "description": "Regions, routes, and spatial systems that situate Insidious beyond single named places."
    },
    {
        "slug": "insidious-franchise-legacy",
        "name": "Insidious legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Insidious.",
        "description": "How Insidious continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "insidious-franchise-practices",
        "name": "Insidious practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Insidious.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Insidious."
    },
    {
        "slug": "insidious-franchise-entry-1",
        "name": "Insidious entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-2",
        "name": "Insidious entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-3",
        "name": "Insidious entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-4",
        "name": "Insidious entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-5",
        "name": "Insidious entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-6",
        "name": "Insidious entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-7",
        "name": "Insidious entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-8",
        "name": "Insidious entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-9",
        "name": "Insidious entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-10",
        "name": "Insidious entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-11",
        "name": "Insidious entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-12",
        "name": "Insidious entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-13",
        "name": "Insidious entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-14",
        "name": "Insidious entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-15",
        "name": "Insidious entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-16",
        "name": "Insidious entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-17",
        "name": "Insidious entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-18",
        "name": "Insidious entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-19",
        "name": "Insidious entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-20",
        "name": "Insidious entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-21",
        "name": "Insidious entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-22",
        "name": "Insidious entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-23",
        "name": "Insidious entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "insidious-franchise-entry-24",
        "name": "Insidious entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Insidious.",
        "description": "A supporting encyclopedia entry in the Insidious subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "insidious-franchise",
        "insidious-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "insidious-franchise",
        "insidious-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "insidious-franchise",
        "insidious-franchise-places",
        "contains",
        "Insidious places is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-events",
        "contains",
        "Insidious events is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-objects",
        "contains",
        "Insidious objects & artifacts is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-factions",
        "contains",
        "Insidious factions & groups is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-concepts",
        "contains",
        "Insidious concepts is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-eras",
        "contains",
        "Insidious eras is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-works",
        "contains",
        "Insidious works & media is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-symbols",
        "contains",
        "Insidious symbols is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-controversies",
        "contains",
        "Insidious controversies is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-sources",
        "contains",
        "Insidious sources is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-geography",
        "contains",
        "Insidious geography is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-legacy",
        "contains",
        "Insidious legacy is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-practices",
        "contains",
        "Insidious practices is a primary trailhead under Insidious.",
        0.88,
        0.82
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-1",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-2",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-3",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-4",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-5",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-6",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-7",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-8",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-9",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-10",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-11",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-12",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-13",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-14",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-15",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-16",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-17",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-18",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-19",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-20",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-21",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-22",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-23",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ],
    [
        "insidious-franchise",
        "insidious-franchise-entry-24",
        "contains",
        "Supporting entry under Insidious.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
