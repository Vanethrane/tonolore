/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "assassin-creed",
        "name": "Assassin's Creed",
        "type": "topic",
        "short_description": "Animus history tourism, Assassin–Templar war, and the long-running parkour conspiracy saga.",
        "description": "Animus history tourism, Assassin–Templar war, and the long-running parkour conspiracy saga. This Ton-o-Lore subject maps people, places, events, and ideas tied to Assassin's Creed so readers can follow long-tail connections across video games."
    },
    {
        "slug": "assassin-creed-figures",
        "name": "Assassin's Creed figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Assassin's Creed.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Assassin's Creed."
    },
    {
        "slug": "assassin-creed-world",
        "name": "Assassin's Creed world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Assassin's Creed.",
        "description": "Geography, institutions, and periodization that give Assassin's Creed its encyclopedia shape."
    },
    {
        "slug": "assassin-creed-places",
        "name": "Assassin's Creed places",
        "type": "place",
        "short_description": "Locations and geographies that frame Assassin's Creed.",
        "description": "Places, regions, and built sites that give Assassin's Creed its map — where events and figures concentrate."
    },
    {
        "slug": "assassin-creed-events",
        "name": "Assassin's Creed events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Assassin's Creed.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Assassin's Creed timeline."
    },
    {
        "slug": "assassin-creed-objects",
        "name": "Assassin's Creed objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Assassin's Creed.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Assassin's Creed."
    },
    {
        "slug": "assassin-creed-factions",
        "name": "Assassin's Creed factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Assassin's Creed.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Assassin's Creed."
    },
    {
        "slug": "assassin-creed-concepts",
        "name": "Assassin's Creed concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Assassin's Creed.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Assassin's Creed readable as a lore graph."
    },
    {
        "slug": "assassin-creed-eras",
        "name": "Assassin's Creed eras",
        "type": "event",
        "short_description": "Periodization for Assassin's Creed.",
        "description": "Named eras and phases that help readers track how Assassin's Creed changes across time."
    },
    {
        "slug": "assassin-creed-works",
        "name": "Assassin's Creed works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Assassin's Creed.",
        "description": "Primary works and adaptations through which most audiences encounter Assassin's Creed."
    },
    {
        "slug": "assassin-creed-symbols",
        "name": "Assassin's Creed symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Assassin's Creed.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Assassin's Creed."
    },
    {
        "slug": "assassin-creed-controversies",
        "name": "Assassin's Creed controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Assassin's Creed.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Assassin's Creed argumentative."
    },
    {
        "slug": "assassin-creed-sources",
        "name": "Assassin's Creed sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Assassin's Creed.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Assassin's Creed."
    },
    {
        "slug": "assassin-creed-geography",
        "name": "Assassin's Creed geography",
        "type": "place",
        "short_description": "Broader geographic framing for Assassin's Creed.",
        "description": "Regions, routes, and spatial systems that situate Assassin's Creed beyond single named places."
    },
    {
        "slug": "assassin-creed-legacy",
        "name": "Assassin's Creed legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Assassin's Creed.",
        "description": "How Assassin's Creed continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "assassin-creed-practices",
        "name": "Assassin's Creed practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Assassin's Creed.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Assassin's Creed."
    },
    {
        "slug": "assassin-creed-entry-1",
        "name": "Assassin's Creed entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-2",
        "name": "Assassin's Creed entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-3",
        "name": "Assassin's Creed entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-4",
        "name": "Assassin's Creed entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-5",
        "name": "Assassin's Creed entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-6",
        "name": "Assassin's Creed entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-7",
        "name": "Assassin's Creed entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-8",
        "name": "Assassin's Creed entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-9",
        "name": "Assassin's Creed entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-10",
        "name": "Assassin's Creed entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-11",
        "name": "Assassin's Creed entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-12",
        "name": "Assassin's Creed entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-13",
        "name": "Assassin's Creed entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-14",
        "name": "Assassin's Creed entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-15",
        "name": "Assassin's Creed entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-16",
        "name": "Assassin's Creed entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-17",
        "name": "Assassin's Creed entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-18",
        "name": "Assassin's Creed entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-19",
        "name": "Assassin's Creed entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-20",
        "name": "Assassin's Creed entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-21",
        "name": "Assassin's Creed entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-22",
        "name": "Assassin's Creed entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-23",
        "name": "Assassin's Creed entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "assassin-creed-entry-24",
        "name": "Assassin's Creed entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Assassin's Creed.",
        "description": "A supporting encyclopedia entry in the Assassin's Creed subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "assassin-creed",
        "assassin-creed-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "assassin-creed",
        "assassin-creed-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "assassin-creed",
        "assassin-creed-places",
        "contains",
        "Assassin's Creed places is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-events",
        "contains",
        "Assassin's Creed events is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-objects",
        "contains",
        "Assassin's Creed objects & artifacts is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-factions",
        "contains",
        "Assassin's Creed factions & groups is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-concepts",
        "contains",
        "Assassin's Creed concepts is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-eras",
        "contains",
        "Assassin's Creed eras is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-works",
        "contains",
        "Assassin's Creed works & media is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-symbols",
        "contains",
        "Assassin's Creed symbols is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-controversies",
        "contains",
        "Assassin's Creed controversies is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-sources",
        "contains",
        "Assassin's Creed sources is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-geography",
        "contains",
        "Assassin's Creed geography is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-legacy",
        "contains",
        "Assassin's Creed legacy is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-practices",
        "contains",
        "Assassin's Creed practices is a primary trailhead under Assassin's Creed.",
        0.88,
        0.82
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-1",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-2",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-3",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-4",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-5",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-6",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-7",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-8",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-9",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-10",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-11",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-12",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-13",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-14",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-15",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-16",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-17",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-18",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-19",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-20",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-21",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-22",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-23",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ],
    [
        "assassin-creed",
        "assassin-creed-entry-24",
        "contains",
        "Supporting entry under Assassin's Creed.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
