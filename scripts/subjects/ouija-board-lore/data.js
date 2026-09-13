/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ouija-board-lore",
        "name": "Ouija board lore",
        "type": "topic",
        "short_description": "Talking boards, parlor spiritualism, and the commercial séance toy that became horror icon.",
        "description": "Talking boards, parlor spiritualism, and the commercial séance toy that became horror icon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ouija board lore so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "ouija-board-lore-figures",
        "name": "Ouija board lore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ouija board lore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ouija board lore."
    },
    {
        "slug": "ouija-board-lore-world",
        "name": "Ouija board lore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ouija board lore.",
        "description": "Geography, institutions, and periodization that give Ouija board lore its encyclopedia shape."
    },
    {
        "slug": "ouija-board-lore-places",
        "name": "Ouija board lore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ouija board lore.",
        "description": "Places, regions, and built sites that give Ouija board lore its map — where events and figures concentrate."
    },
    {
        "slug": "ouija-board-lore-events",
        "name": "Ouija board lore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ouija board lore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ouija board lore timeline."
    },
    {
        "slug": "ouija-board-lore-objects",
        "name": "Ouija board lore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ouija board lore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ouija board lore."
    },
    {
        "slug": "ouija-board-lore-factions",
        "name": "Ouija board lore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ouija board lore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ouija board lore."
    },
    {
        "slug": "ouija-board-lore-concepts",
        "name": "Ouija board lore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ouija board lore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ouija board lore readable as a lore graph."
    },
    {
        "slug": "ouija-board-lore-eras",
        "name": "Ouija board lore eras",
        "type": "event",
        "short_description": "Periodization for Ouija board lore.",
        "description": "Named eras and phases that help readers track how Ouija board lore changes across time."
    },
    {
        "slug": "ouija-board-lore-works",
        "name": "Ouija board lore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ouija board lore.",
        "description": "Primary works and adaptations through which most audiences encounter Ouija board lore."
    },
    {
        "slug": "ouija-board-lore-symbols",
        "name": "Ouija board lore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ouija board lore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ouija board lore."
    },
    {
        "slug": "ouija-board-lore-controversies",
        "name": "Ouija board lore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ouija board lore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ouija board lore argumentative."
    },
    {
        "slug": "ouija-board-lore-sources",
        "name": "Ouija board lore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ouija board lore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ouija board lore."
    },
    {
        "slug": "ouija-board-lore-geography",
        "name": "Ouija board lore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ouija board lore.",
        "description": "Regions, routes, and spatial systems that situate Ouija board lore beyond single named places."
    },
    {
        "slug": "ouija-board-lore-legacy",
        "name": "Ouija board lore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ouija board lore.",
        "description": "How Ouija board lore continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ouija-board-lore-practices",
        "name": "Ouija board lore practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ouija board lore.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ouija board lore."
    },
    {
        "slug": "ouija-board-lore-entry-1",
        "name": "Ouija board lore entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-2",
        "name": "Ouija board lore entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-3",
        "name": "Ouija board lore entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-4",
        "name": "Ouija board lore entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-5",
        "name": "Ouija board lore entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-6",
        "name": "Ouija board lore entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-7",
        "name": "Ouija board lore entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-8",
        "name": "Ouija board lore entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-9",
        "name": "Ouija board lore entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-10",
        "name": "Ouija board lore entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-11",
        "name": "Ouija board lore entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-12",
        "name": "Ouija board lore entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-13",
        "name": "Ouija board lore entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-14",
        "name": "Ouija board lore entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-15",
        "name": "Ouija board lore entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-16",
        "name": "Ouija board lore entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-17",
        "name": "Ouija board lore entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-18",
        "name": "Ouija board lore entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-19",
        "name": "Ouija board lore entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-20",
        "name": "Ouija board lore entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-21",
        "name": "Ouija board lore entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-22",
        "name": "Ouija board lore entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-23",
        "name": "Ouija board lore entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ouija-board-lore-entry-24",
        "name": "Ouija board lore entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ouija board lore.",
        "description": "A supporting encyclopedia entry in the Ouija board lore subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ouija-board-lore",
        "ouija-board-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-places",
        "contains",
        "Ouija board lore places is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-events",
        "contains",
        "Ouija board lore events is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-objects",
        "contains",
        "Ouija board lore objects & artifacts is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-factions",
        "contains",
        "Ouija board lore factions & groups is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-concepts",
        "contains",
        "Ouija board lore concepts is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-eras",
        "contains",
        "Ouija board lore eras is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-works",
        "contains",
        "Ouija board lore works & media is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-symbols",
        "contains",
        "Ouija board lore symbols is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-controversies",
        "contains",
        "Ouija board lore controversies is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-sources",
        "contains",
        "Ouija board lore sources is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-geography",
        "contains",
        "Ouija board lore geography is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-legacy",
        "contains",
        "Ouija board lore legacy is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-practices",
        "contains",
        "Ouija board lore practices is a primary trailhead under Ouija board lore.",
        0.88,
        0.82
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-1",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-2",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-3",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-4",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-5",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-6",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-7",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-8",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-9",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-10",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-11",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-12",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-13",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-14",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-15",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-16",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-17",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-18",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-19",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-20",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-21",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-22",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-23",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ],
    [
        "ouija-board-lore",
        "ouija-board-lore-entry-24",
        "contains",
        "Supporting entry under Ouija board lore.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
