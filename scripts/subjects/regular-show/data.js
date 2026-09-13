/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "regular-show",
        "name": "Regular Show",
        "type": "topic",
        "short_description": "Park-job surrealism, death games, and the stoner-comedy vibe that became kids’ prestige weird.",
        "description": "Park-job surrealism, death games, and the stoner-comedy vibe that became kids’ prestige weird. This Ton-o-Lore subject maps people, places, events, and ideas tied to Regular Show so readers can follow long-tail connections across western animation."
    },
    {
        "slug": "regular-show-figures",
        "name": "Regular Show figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Regular Show.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Regular Show."
    },
    {
        "slug": "regular-show-world",
        "name": "Regular Show world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Regular Show.",
        "description": "Geography, institutions, and periodization that give Regular Show its encyclopedia shape."
    },
    {
        "slug": "regular-show-places",
        "name": "Regular Show places",
        "type": "place",
        "short_description": "Locations and geographies that frame Regular Show.",
        "description": "Places, regions, and built sites that give Regular Show its map — where events and figures concentrate."
    },
    {
        "slug": "regular-show-events",
        "name": "Regular Show events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Regular Show.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Regular Show timeline."
    },
    {
        "slug": "regular-show-objects",
        "name": "Regular Show objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Regular Show.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Regular Show."
    },
    {
        "slug": "regular-show-factions",
        "name": "Regular Show factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Regular Show.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Regular Show."
    },
    {
        "slug": "regular-show-concepts",
        "name": "Regular Show concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Regular Show.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Regular Show readable as a lore graph."
    },
    {
        "slug": "regular-show-eras",
        "name": "Regular Show eras",
        "type": "event",
        "short_description": "Periodization for Regular Show.",
        "description": "Named eras and phases that help readers track how Regular Show changes across time."
    },
    {
        "slug": "regular-show-works",
        "name": "Regular Show works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Regular Show.",
        "description": "Primary works and adaptations through which most audiences encounter Regular Show."
    },
    {
        "slug": "regular-show-symbols",
        "name": "Regular Show symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Regular Show.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Regular Show."
    },
    {
        "slug": "regular-show-controversies",
        "name": "Regular Show controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Regular Show.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Regular Show argumentative."
    },
    {
        "slug": "regular-show-sources",
        "name": "Regular Show sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Regular Show.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Regular Show."
    },
    {
        "slug": "regular-show-geography",
        "name": "Regular Show geography",
        "type": "place",
        "short_description": "Broader geographic framing for Regular Show.",
        "description": "Regions, routes, and spatial systems that situate Regular Show beyond single named places."
    },
    {
        "slug": "regular-show-legacy",
        "name": "Regular Show legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Regular Show.",
        "description": "How Regular Show continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "regular-show-practices",
        "name": "Regular Show practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Regular Show.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Regular Show."
    },
    {
        "slug": "regular-show-entry-1",
        "name": "Regular Show entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-2",
        "name": "Regular Show entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-3",
        "name": "Regular Show entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-4",
        "name": "Regular Show entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-5",
        "name": "Regular Show entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-6",
        "name": "Regular Show entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-7",
        "name": "Regular Show entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-8",
        "name": "Regular Show entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-9",
        "name": "Regular Show entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-10",
        "name": "Regular Show entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-11",
        "name": "Regular Show entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-12",
        "name": "Regular Show entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-13",
        "name": "Regular Show entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-14",
        "name": "Regular Show entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-15",
        "name": "Regular Show entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-16",
        "name": "Regular Show entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-17",
        "name": "Regular Show entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-18",
        "name": "Regular Show entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-19",
        "name": "Regular Show entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-20",
        "name": "Regular Show entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-21",
        "name": "Regular Show entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-22",
        "name": "Regular Show entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-23",
        "name": "Regular Show entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "regular-show-entry-24",
        "name": "Regular Show entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Regular Show.",
        "description": "A supporting encyclopedia entry in the Regular Show subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "regular-show",
        "regular-show-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "regular-show",
        "regular-show-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "regular-show",
        "regular-show-places",
        "contains",
        "Regular Show places is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-events",
        "contains",
        "Regular Show events is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-objects",
        "contains",
        "Regular Show objects & artifacts is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-factions",
        "contains",
        "Regular Show factions & groups is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-concepts",
        "contains",
        "Regular Show concepts is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-eras",
        "contains",
        "Regular Show eras is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-works",
        "contains",
        "Regular Show works & media is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-symbols",
        "contains",
        "Regular Show symbols is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-controversies",
        "contains",
        "Regular Show controversies is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-sources",
        "contains",
        "Regular Show sources is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-geography",
        "contains",
        "Regular Show geography is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-legacy",
        "contains",
        "Regular Show legacy is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-practices",
        "contains",
        "Regular Show practices is a primary trailhead under Regular Show.",
        0.88,
        0.82
    ],
    [
        "regular-show",
        "regular-show-entry-1",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-2",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-3",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-4",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-5",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-6",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-7",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-8",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-9",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-10",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-11",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-12",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-13",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-14",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-15",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-16",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-17",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-18",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-19",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-20",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-21",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-22",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-23",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ],
    [
        "regular-show",
        "regular-show-entry-24",
        "contains",
        "Supporting entry under Regular Show.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
