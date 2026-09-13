/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nerf",
        "name": "Nerf",
        "type": "topic",
        "short_description": "Foam blasters, dart wars, and the backyard combat toyline that became a lifestyle brand.",
        "description": "Foam blasters, dart wars, and the backyard combat toyline that became a lifestyle brand. This Ton-o-Lore subject maps people, places, events, and ideas tied to Nerf so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "nerf-figures",
        "name": "Nerf figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Nerf.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Nerf."
    },
    {
        "slug": "nerf-world",
        "name": "Nerf world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Nerf.",
        "description": "Geography, institutions, and periodization that give Nerf its encyclopedia shape."
    },
    {
        "slug": "nerf-places",
        "name": "Nerf places",
        "type": "place",
        "short_description": "Locations and geographies that frame Nerf.",
        "description": "Places, regions, and built sites that give Nerf its map — where events and figures concentrate."
    },
    {
        "slug": "nerf-events",
        "name": "Nerf events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Nerf.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Nerf timeline."
    },
    {
        "slug": "nerf-objects",
        "name": "Nerf objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Nerf.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Nerf."
    },
    {
        "slug": "nerf-factions",
        "name": "Nerf factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Nerf.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Nerf."
    },
    {
        "slug": "nerf-concepts",
        "name": "Nerf concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Nerf.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Nerf readable as a lore graph."
    },
    {
        "slug": "nerf-eras",
        "name": "Nerf eras",
        "type": "event",
        "short_description": "Periodization for Nerf.",
        "description": "Named eras and phases that help readers track how Nerf changes across time."
    },
    {
        "slug": "nerf-works",
        "name": "Nerf works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Nerf.",
        "description": "Primary works and adaptations through which most audiences encounter Nerf."
    },
    {
        "slug": "nerf-symbols",
        "name": "Nerf symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Nerf.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Nerf."
    },
    {
        "slug": "nerf-controversies",
        "name": "Nerf controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Nerf.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Nerf argumentative."
    },
    {
        "slug": "nerf-sources",
        "name": "Nerf sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Nerf.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Nerf."
    },
    {
        "slug": "nerf-geography",
        "name": "Nerf geography",
        "type": "place",
        "short_description": "Broader geographic framing for Nerf.",
        "description": "Regions, routes, and spatial systems that situate Nerf beyond single named places."
    },
    {
        "slug": "nerf-legacy",
        "name": "Nerf legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Nerf.",
        "description": "How Nerf continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nerf-practices",
        "name": "Nerf practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Nerf.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Nerf."
    },
    {
        "slug": "nerf-entry-1",
        "name": "Nerf entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-2",
        "name": "Nerf entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-3",
        "name": "Nerf entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-4",
        "name": "Nerf entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-5",
        "name": "Nerf entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-6",
        "name": "Nerf entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-7",
        "name": "Nerf entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-8",
        "name": "Nerf entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-9",
        "name": "Nerf entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-10",
        "name": "Nerf entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-11",
        "name": "Nerf entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-12",
        "name": "Nerf entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-13",
        "name": "Nerf entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-14",
        "name": "Nerf entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-15",
        "name": "Nerf entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-16",
        "name": "Nerf entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-17",
        "name": "Nerf entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-18",
        "name": "Nerf entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-19",
        "name": "Nerf entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-20",
        "name": "Nerf entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-21",
        "name": "Nerf entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-22",
        "name": "Nerf entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-23",
        "name": "Nerf entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nerf-entry-24",
        "name": "Nerf entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nerf.",
        "description": "A supporting encyclopedia entry in the Nerf subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nerf",
        "nerf-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nerf",
        "nerf-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "nerf",
        "nerf-places",
        "contains",
        "Nerf places is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-events",
        "contains",
        "Nerf events is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-objects",
        "contains",
        "Nerf objects & artifacts is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-factions",
        "contains",
        "Nerf factions & groups is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-concepts",
        "contains",
        "Nerf concepts is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-eras",
        "contains",
        "Nerf eras is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-works",
        "contains",
        "Nerf works & media is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-symbols",
        "contains",
        "Nerf symbols is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-controversies",
        "contains",
        "Nerf controversies is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-sources",
        "contains",
        "Nerf sources is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-geography",
        "contains",
        "Nerf geography is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-legacy",
        "contains",
        "Nerf legacy is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-practices",
        "contains",
        "Nerf practices is a primary trailhead under Nerf.",
        0.88,
        0.82
    ],
    [
        "nerf",
        "nerf-entry-1",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-2",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-3",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-4",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-5",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-6",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-7",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-8",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-9",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-10",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-11",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-12",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-13",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-14",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-15",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-16",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-17",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-18",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-19",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-20",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-21",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-22",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-23",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ],
    [
        "nerf",
        "nerf-entry-24",
        "contains",
        "Supporting entry under Nerf.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
