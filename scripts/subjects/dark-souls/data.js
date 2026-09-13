/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "dark-souls",
        "name": "Dark Souls",
        "type": "topic",
        "short_description": "Lordran cycles, cryptic item lore, and the difficulty mythos that remade action RPGs.",
        "description": "Lordran cycles, cryptic item lore, and the difficulty mythos that remade action RPGs. This Ton-o-Lore subject maps people, places, events, and ideas tied to Dark Souls so readers can follow long-tail connections across video games."
    },
    {
        "slug": "dark-souls-figures",
        "name": "Dark Souls figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Dark Souls.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Dark Souls."
    },
    {
        "slug": "dark-souls-world",
        "name": "Dark Souls world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Dark Souls.",
        "description": "Geography, institutions, and periodization that give Dark Souls its encyclopedia shape."
    },
    {
        "slug": "dark-souls-places",
        "name": "Dark Souls places",
        "type": "place",
        "short_description": "Locations and geographies that frame Dark Souls.",
        "description": "Places, regions, and built sites that give Dark Souls its map — where events and figures concentrate."
    },
    {
        "slug": "dark-souls-events",
        "name": "Dark Souls events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Dark Souls.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Dark Souls timeline."
    },
    {
        "slug": "dark-souls-objects",
        "name": "Dark Souls objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Dark Souls.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Dark Souls."
    },
    {
        "slug": "dark-souls-factions",
        "name": "Dark Souls factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Dark Souls.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Dark Souls."
    },
    {
        "slug": "dark-souls-concepts",
        "name": "Dark Souls concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Dark Souls.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Dark Souls readable as a lore graph."
    },
    {
        "slug": "dark-souls-eras",
        "name": "Dark Souls eras",
        "type": "event",
        "short_description": "Periodization for Dark Souls.",
        "description": "Named eras and phases that help readers track how Dark Souls changes across time."
    },
    {
        "slug": "dark-souls-works",
        "name": "Dark Souls works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Dark Souls.",
        "description": "Primary works and adaptations through which most audiences encounter Dark Souls."
    },
    {
        "slug": "dark-souls-symbols",
        "name": "Dark Souls symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Dark Souls.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Dark Souls."
    },
    {
        "slug": "dark-souls-controversies",
        "name": "Dark Souls controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Dark Souls.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Dark Souls argumentative."
    },
    {
        "slug": "dark-souls-sources",
        "name": "Dark Souls sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Dark Souls.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Dark Souls."
    },
    {
        "slug": "dark-souls-geography",
        "name": "Dark Souls geography",
        "type": "place",
        "short_description": "Broader geographic framing for Dark Souls.",
        "description": "Regions, routes, and spatial systems that situate Dark Souls beyond single named places."
    },
    {
        "slug": "dark-souls-legacy",
        "name": "Dark Souls legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Dark Souls.",
        "description": "How Dark Souls continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "dark-souls-practices",
        "name": "Dark Souls practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Dark Souls.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Dark Souls."
    },
    {
        "slug": "dark-souls-entry-1",
        "name": "Dark Souls entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-2",
        "name": "Dark Souls entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-3",
        "name": "Dark Souls entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-4",
        "name": "Dark Souls entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-5",
        "name": "Dark Souls entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-6",
        "name": "Dark Souls entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-7",
        "name": "Dark Souls entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-8",
        "name": "Dark Souls entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-9",
        "name": "Dark Souls entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-10",
        "name": "Dark Souls entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-11",
        "name": "Dark Souls entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-12",
        "name": "Dark Souls entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-13",
        "name": "Dark Souls entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-14",
        "name": "Dark Souls entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-15",
        "name": "Dark Souls entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-16",
        "name": "Dark Souls entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-17",
        "name": "Dark Souls entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-18",
        "name": "Dark Souls entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-19",
        "name": "Dark Souls entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-20",
        "name": "Dark Souls entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-21",
        "name": "Dark Souls entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-22",
        "name": "Dark Souls entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-23",
        "name": "Dark Souls entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "dark-souls-entry-24",
        "name": "Dark Souls entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Dark Souls.",
        "description": "A supporting encyclopedia entry in the Dark Souls subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "dark-souls",
        "dark-souls-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "dark-souls",
        "dark-souls-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "dark-souls",
        "dark-souls-places",
        "contains",
        "Dark Souls places is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-events",
        "contains",
        "Dark Souls events is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-objects",
        "contains",
        "Dark Souls objects & artifacts is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-factions",
        "contains",
        "Dark Souls factions & groups is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-concepts",
        "contains",
        "Dark Souls concepts is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-eras",
        "contains",
        "Dark Souls eras is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-works",
        "contains",
        "Dark Souls works & media is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-symbols",
        "contains",
        "Dark Souls symbols is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-controversies",
        "contains",
        "Dark Souls controversies is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-sources",
        "contains",
        "Dark Souls sources is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-geography",
        "contains",
        "Dark Souls geography is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-legacy",
        "contains",
        "Dark Souls legacy is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-practices",
        "contains",
        "Dark Souls practices is a primary trailhead under Dark Souls.",
        0.88,
        0.82
    ],
    [
        "dark-souls",
        "dark-souls-entry-1",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-2",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-3",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-4",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-5",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-6",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-7",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-8",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-9",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-10",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-11",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-12",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-13",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-14",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-15",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-16",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-17",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-18",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-19",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-20",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-21",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-22",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-23",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ],
    [
        "dark-souls",
        "dark-souls-entry-24",
        "contains",
        "Supporting entry under Dark Souls.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
