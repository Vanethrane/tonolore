/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "whitey-bulger-lore",
        "name": "Whitey Bulger lore",
        "type": "topic",
        "short_description": "Winter Hill, FBI informants, and the Boston crime boss who became American underworld myth.",
        "description": "Winter Hill, FBI informants, and the Boston crime boss who became American underworld myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Whitey Bulger lore so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "whitey-bulger-lore-figures",
        "name": "Whitey Bulger lore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Whitey Bulger lore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Whitey Bulger lore."
    },
    {
        "slug": "whitey-bulger-lore-world",
        "name": "Whitey Bulger lore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Whitey Bulger lore.",
        "description": "Geography, institutions, and periodization that give Whitey Bulger lore its encyclopedia shape."
    },
    {
        "slug": "whitey-bulger-lore-places",
        "name": "Whitey Bulger lore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Whitey Bulger lore.",
        "description": "Places, regions, and built sites that give Whitey Bulger lore its map — where events and figures concentrate."
    },
    {
        "slug": "whitey-bulger-lore-events",
        "name": "Whitey Bulger lore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Whitey Bulger lore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Whitey Bulger lore timeline."
    },
    {
        "slug": "whitey-bulger-lore-objects",
        "name": "Whitey Bulger lore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Whitey Bulger lore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Whitey Bulger lore."
    },
    {
        "slug": "whitey-bulger-lore-factions",
        "name": "Whitey Bulger lore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Whitey Bulger lore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Whitey Bulger lore."
    },
    {
        "slug": "whitey-bulger-lore-concepts",
        "name": "Whitey Bulger lore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Whitey Bulger lore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Whitey Bulger lore readable as a lore graph."
    },
    {
        "slug": "whitey-bulger-lore-eras",
        "name": "Whitey Bulger lore eras",
        "type": "event",
        "short_description": "Periodization for Whitey Bulger lore.",
        "description": "Named eras and phases that help readers track how Whitey Bulger lore changes across time."
    },
    {
        "slug": "whitey-bulger-lore-works",
        "name": "Whitey Bulger lore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Whitey Bulger lore.",
        "description": "Primary works and adaptations through which most audiences encounter Whitey Bulger lore."
    },
    {
        "slug": "whitey-bulger-lore-symbols",
        "name": "Whitey Bulger lore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Whitey Bulger lore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Whitey Bulger lore."
    },
    {
        "slug": "whitey-bulger-lore-controversies",
        "name": "Whitey Bulger lore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Whitey Bulger lore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Whitey Bulger lore argumentative."
    },
    {
        "slug": "whitey-bulger-lore-sources",
        "name": "Whitey Bulger lore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Whitey Bulger lore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Whitey Bulger lore."
    },
    {
        "slug": "whitey-bulger-lore-geography",
        "name": "Whitey Bulger lore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Whitey Bulger lore.",
        "description": "Regions, routes, and spatial systems that situate Whitey Bulger lore beyond single named places."
    },
    {
        "slug": "whitey-bulger-lore-legacy",
        "name": "Whitey Bulger lore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Whitey Bulger lore.",
        "description": "How Whitey Bulger lore continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "whitey-bulger-lore-practices",
        "name": "Whitey Bulger lore practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Whitey Bulger lore.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Whitey Bulger lore."
    },
    {
        "slug": "whitey-bulger-lore-entry-1",
        "name": "Whitey Bulger lore entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-2",
        "name": "Whitey Bulger lore entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-3",
        "name": "Whitey Bulger lore entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-4",
        "name": "Whitey Bulger lore entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-5",
        "name": "Whitey Bulger lore entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-6",
        "name": "Whitey Bulger lore entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-7",
        "name": "Whitey Bulger lore entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-8",
        "name": "Whitey Bulger lore entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-9",
        "name": "Whitey Bulger lore entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-10",
        "name": "Whitey Bulger lore entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-11",
        "name": "Whitey Bulger lore entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-12",
        "name": "Whitey Bulger lore entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-13",
        "name": "Whitey Bulger lore entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-14",
        "name": "Whitey Bulger lore entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-15",
        "name": "Whitey Bulger lore entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-16",
        "name": "Whitey Bulger lore entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-17",
        "name": "Whitey Bulger lore entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-18",
        "name": "Whitey Bulger lore entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-19",
        "name": "Whitey Bulger lore entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-20",
        "name": "Whitey Bulger lore entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-21",
        "name": "Whitey Bulger lore entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-22",
        "name": "Whitey Bulger lore entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-23",
        "name": "Whitey Bulger lore entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "whitey-bulger-lore-entry-24",
        "name": "Whitey Bulger lore entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Whitey Bulger lore.",
        "description": "A supporting encyclopedia entry in the Whitey Bulger lore subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-places",
        "contains",
        "Whitey Bulger lore places is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-events",
        "contains",
        "Whitey Bulger lore events is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-objects",
        "contains",
        "Whitey Bulger lore objects & artifacts is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-factions",
        "contains",
        "Whitey Bulger lore factions & groups is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-concepts",
        "contains",
        "Whitey Bulger lore concepts is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-eras",
        "contains",
        "Whitey Bulger lore eras is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-works",
        "contains",
        "Whitey Bulger lore works & media is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-symbols",
        "contains",
        "Whitey Bulger lore symbols is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-controversies",
        "contains",
        "Whitey Bulger lore controversies is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-sources",
        "contains",
        "Whitey Bulger lore sources is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-geography",
        "contains",
        "Whitey Bulger lore geography is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-legacy",
        "contains",
        "Whitey Bulger lore legacy is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-practices",
        "contains",
        "Whitey Bulger lore practices is a primary trailhead under Whitey Bulger lore.",
        0.88,
        0.82
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-1",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-2",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-3",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-4",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-5",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-6",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-7",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-8",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-9",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-10",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-11",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-12",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-13",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-14",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-15",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-16",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-17",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-18",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-19",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-20",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-21",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-22",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-23",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ],
    [
        "whitey-bulger-lore",
        "whitey-bulger-lore-entry-24",
        "contains",
        "Supporting entry under Whitey Bulger lore.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
