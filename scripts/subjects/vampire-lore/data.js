/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "vampire-lore",
        "name": "Vampire lore",
        "type": "topic",
        "short_description": "Folk vampires, literary bloodlines, rules of undeath, hunters, and the places the myth keeps reanimating.",
        "description": "Folk vampires, literary bloodlines, rules of undeath, hunters, and the places the myth keeps reanimating. This Ton-o-Lore subject maps people, places, events, and ideas tied to Vampire lore so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "vampire-lore-figures",
        "name": "Vampire lore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Vampire lore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Vampire lore."
    },
    {
        "slug": "vampire-lore-world",
        "name": "Vampire lore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Vampire lore.",
        "description": "Geography, institutions, and periodization that give Vampire lore its encyclopedia shape."
    },
    {
        "slug": "vampire-lore-places",
        "name": "Vampire lore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Vampire lore.",
        "description": "Places, regions, and built sites that give Vampire lore its map — where events and figures concentrate."
    },
    {
        "slug": "vampire-lore-events",
        "name": "Vampire lore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Vampire lore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Vampire lore timeline."
    },
    {
        "slug": "vampire-lore-objects",
        "name": "Vampire lore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Vampire lore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Vampire lore."
    },
    {
        "slug": "vampire-lore-factions",
        "name": "Vampire lore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Vampire lore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Vampire lore."
    },
    {
        "slug": "vampire-lore-concepts",
        "name": "Vampire lore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Vampire lore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Vampire lore readable as a lore graph."
    },
    {
        "slug": "vampire-lore-eras",
        "name": "Vampire lore eras",
        "type": "event",
        "short_description": "Periodization for Vampire lore.",
        "description": "Named eras and phases that help readers track how Vampire lore changes across time."
    },
    {
        "slug": "vampire-lore-works",
        "name": "Vampire lore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Vampire lore.",
        "description": "Primary works and adaptations through which most audiences encounter Vampire lore."
    },
    {
        "slug": "vampire-lore-symbols",
        "name": "Vampire lore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Vampire lore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Vampire lore."
    },
    {
        "slug": "vampire-lore-controversies",
        "name": "Vampire lore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Vampire lore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Vampire lore argumentative."
    },
    {
        "slug": "vampire-lore-sources",
        "name": "Vampire lore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Vampire lore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Vampire lore."
    },
    {
        "slug": "vampire-lore-geography",
        "name": "Vampire lore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Vampire lore.",
        "description": "Regions, routes, and spatial systems that situate Vampire lore beyond single named places."
    },
    {
        "slug": "vampire-lore-legacy",
        "name": "Vampire lore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Vampire lore.",
        "description": "How Vampire lore continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "vampire-lore-practices",
        "name": "Vampire lore practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Vampire lore.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Vampire lore."
    },
    {
        "slug": "vampire-lore-entry-1",
        "name": "Vampire lore entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-2",
        "name": "Vampire lore entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-3",
        "name": "Vampire lore entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-4",
        "name": "Vampire lore entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-5",
        "name": "Vampire lore entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-6",
        "name": "Vampire lore entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-7",
        "name": "Vampire lore entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-8",
        "name": "Vampire lore entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-9",
        "name": "Vampire lore entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-10",
        "name": "Vampire lore entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-11",
        "name": "Vampire lore entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-12",
        "name": "Vampire lore entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-13",
        "name": "Vampire lore entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-14",
        "name": "Vampire lore entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-15",
        "name": "Vampire lore entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-16",
        "name": "Vampire lore entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-17",
        "name": "Vampire lore entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-18",
        "name": "Vampire lore entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-19",
        "name": "Vampire lore entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-20",
        "name": "Vampire lore entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-21",
        "name": "Vampire lore entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-22",
        "name": "Vampire lore entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-23",
        "name": "Vampire lore entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vampire-lore-entry-24",
        "name": "Vampire lore entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vampire lore.",
        "description": "A supporting encyclopedia entry in the Vampire lore subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "vampire-lore",
        "vampire-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "vampire-lore",
        "vampire-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "vampire-lore",
        "vampire-lore-places",
        "contains",
        "Vampire lore places is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-events",
        "contains",
        "Vampire lore events is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-objects",
        "contains",
        "Vampire lore objects & artifacts is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-factions",
        "contains",
        "Vampire lore factions & groups is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-concepts",
        "contains",
        "Vampire lore concepts is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-eras",
        "contains",
        "Vampire lore eras is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-works",
        "contains",
        "Vampire lore works & media is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-symbols",
        "contains",
        "Vampire lore symbols is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-controversies",
        "contains",
        "Vampire lore controversies is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-sources",
        "contains",
        "Vampire lore sources is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-geography",
        "contains",
        "Vampire lore geography is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-legacy",
        "contains",
        "Vampire lore legacy is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-practices",
        "contains",
        "Vampire lore practices is a primary trailhead under Vampire lore.",
        0.88,
        0.82
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-1",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-2",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-3",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-4",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-5",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-6",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-7",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-8",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-9",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-10",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-11",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-12",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-13",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-14",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-15",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-16",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-17",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-18",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-19",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-20",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-21",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-22",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-23",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ],
    [
        "vampire-lore",
        "vampire-lore-entry-24",
        "contains",
        "Supporting entry under Vampire lore.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
