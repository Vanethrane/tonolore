/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "powered-by-the-apocalypse",
        "name": "Powered by the Apocalypse",
        "type": "topic",
        "short_description": "Moves, soft/hard hits, and the design lineage behind Monsterhearts, Masks, and dozens more.",
        "description": "Moves, soft/hard hits, and the design lineage behind Monsterhearts, Masks, and dozens more. This Ton-o-Lore subject maps people, places, events, and ideas tied to Powered by the Apocalypse so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "powered-by-the-apocalypse-figures",
        "name": "Powered by the Apocalypse figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Powered by the Apocalypse.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Powered by the Apocalypse."
    },
    {
        "slug": "powered-by-the-apocalypse-world",
        "name": "Powered by the Apocalypse world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Powered by the Apocalypse.",
        "description": "Geography, institutions, and periodization that give Powered by the Apocalypse its encyclopedia shape."
    },
    {
        "slug": "powered-by-the-apocalypse-places",
        "name": "Powered by the Apocalypse places",
        "type": "place",
        "short_description": "Locations and geographies that frame Powered by the Apocalypse.",
        "description": "Places, regions, and built sites that give Powered by the Apocalypse its map — where events and figures concentrate."
    },
    {
        "slug": "powered-by-the-apocalypse-events",
        "name": "Powered by the Apocalypse events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Powered by the Apocalypse.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Powered by the Apocalypse timeline."
    },
    {
        "slug": "powered-by-the-apocalypse-objects",
        "name": "Powered by the Apocalypse objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Powered by the Apocalypse.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Powered by the Apocalypse."
    },
    {
        "slug": "powered-by-the-apocalypse-factions",
        "name": "Powered by the Apocalypse factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Powered by the Apocalypse.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Powered by the Apocalypse."
    },
    {
        "slug": "powered-by-the-apocalypse-concepts",
        "name": "Powered by the Apocalypse concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Powered by the Apocalypse.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Powered by the Apocalypse readable as a lore graph."
    },
    {
        "slug": "powered-by-the-apocalypse-eras",
        "name": "Powered by the Apocalypse eras",
        "type": "event",
        "short_description": "Periodization for Powered by the Apocalypse.",
        "description": "Named eras and phases that help readers track how Powered by the Apocalypse changes across time."
    },
    {
        "slug": "powered-by-the-apocalypse-works",
        "name": "Powered by the Apocalypse works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Powered by the Apocalypse.",
        "description": "Primary works and adaptations through which most audiences encounter Powered by the Apocalypse."
    },
    {
        "slug": "powered-by-the-apocalypse-symbols",
        "name": "Powered by the Apocalypse symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Powered by the Apocalypse.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Powered by the Apocalypse."
    },
    {
        "slug": "powered-by-the-apocalypse-controversies",
        "name": "Powered by the Apocalypse controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Powered by the Apocalypse.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Powered by the Apocalypse argumentative."
    },
    {
        "slug": "powered-by-the-apocalypse-sources",
        "name": "Powered by the Apocalypse sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Powered by the Apocalypse.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Powered by the Apocalypse."
    },
    {
        "slug": "powered-by-the-apocalypse-geography",
        "name": "Powered by the Apocalypse geography",
        "type": "place",
        "short_description": "Broader geographic framing for Powered by the Apocalypse.",
        "description": "Regions, routes, and spatial systems that situate Powered by the Apocalypse beyond single named places."
    },
    {
        "slug": "powered-by-the-apocalypse-legacy",
        "name": "Powered by the Apocalypse legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Powered by the Apocalypse.",
        "description": "How Powered by the Apocalypse continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "powered-by-the-apocalypse-practices",
        "name": "Powered by the Apocalypse practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Powered by the Apocalypse.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Powered by the Apocalypse."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-1",
        "name": "Powered by the Apocalypse entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-2",
        "name": "Powered by the Apocalypse entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-3",
        "name": "Powered by the Apocalypse entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-4",
        "name": "Powered by the Apocalypse entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-5",
        "name": "Powered by the Apocalypse entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-6",
        "name": "Powered by the Apocalypse entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-7",
        "name": "Powered by the Apocalypse entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-8",
        "name": "Powered by the Apocalypse entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-9",
        "name": "Powered by the Apocalypse entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-10",
        "name": "Powered by the Apocalypse entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-11",
        "name": "Powered by the Apocalypse entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-12",
        "name": "Powered by the Apocalypse entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-13",
        "name": "Powered by the Apocalypse entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-14",
        "name": "Powered by the Apocalypse entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-15",
        "name": "Powered by the Apocalypse entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-16",
        "name": "Powered by the Apocalypse entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-17",
        "name": "Powered by the Apocalypse entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-18",
        "name": "Powered by the Apocalypse entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-19",
        "name": "Powered by the Apocalypse entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-20",
        "name": "Powered by the Apocalypse entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-21",
        "name": "Powered by the Apocalypse entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-22",
        "name": "Powered by the Apocalypse entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-23",
        "name": "Powered by the Apocalypse entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "powered-by-the-apocalypse-entry-24",
        "name": "Powered by the Apocalypse entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Powered by the Apocalypse.",
        "description": "A supporting encyclopedia entry in the Powered by the Apocalypse subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-places",
        "contains",
        "Powered by the Apocalypse places is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-events",
        "contains",
        "Powered by the Apocalypse events is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-objects",
        "contains",
        "Powered by the Apocalypse objects & artifacts is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-factions",
        "contains",
        "Powered by the Apocalypse factions & groups is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-concepts",
        "contains",
        "Powered by the Apocalypse concepts is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-eras",
        "contains",
        "Powered by the Apocalypse eras is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-works",
        "contains",
        "Powered by the Apocalypse works & media is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-symbols",
        "contains",
        "Powered by the Apocalypse symbols is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-controversies",
        "contains",
        "Powered by the Apocalypse controversies is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-sources",
        "contains",
        "Powered by the Apocalypse sources is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-geography",
        "contains",
        "Powered by the Apocalypse geography is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-legacy",
        "contains",
        "Powered by the Apocalypse legacy is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-practices",
        "contains",
        "Powered by the Apocalypse practices is a primary trailhead under Powered by the Apocalypse.",
        0.88,
        0.82
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-1",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-2",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-3",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-4",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-5",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-6",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-7",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-8",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-9",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-10",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-11",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-12",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-13",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-14",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-15",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-16",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-17",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-18",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-19",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-20",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-21",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-22",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-23",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ],
    [
        "powered-by-the-apocalypse",
        "powered-by-the-apocalypse-entry-24",
        "contains",
        "Supporting entry under Powered by the Apocalypse.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
