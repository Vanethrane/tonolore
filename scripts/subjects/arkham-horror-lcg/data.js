/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "arkham-horror-lcg",
        "name": "Arkham Horror: The Card Game",
        "type": "topic",
        "short_description": "Co-op mythos campaigns, investigator decks, and scenario packs of Lovecraftian dread.",
        "description": "Co-op mythos campaigns, investigator decks, and scenario packs of Lovecraftian dread. This Ton-o-Lore subject maps people, places, events, and ideas tied to Arkham Horror: The Card Game so readers can follow long-tail connections across card games."
    },
    {
        "slug": "arkham-horror-lcg-figures",
        "name": "Arkham Horror: The Card Game figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Arkham Horror: The Card Game.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Arkham Horror: The Card Game."
    },
    {
        "slug": "arkham-horror-lcg-world",
        "name": "Arkham Horror: The Card Game world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Arkham Horror: The Card Game.",
        "description": "Geography, institutions, and periodization that give Arkham Horror: The Card Game its encyclopedia shape."
    },
    {
        "slug": "arkham-horror-lcg-places",
        "name": "Arkham Horror: The Card Game places",
        "type": "place",
        "short_description": "Locations and geographies that frame Arkham Horror: The Card Game.",
        "description": "Places, regions, and built sites that give Arkham Horror: The Card Game its map — where events and figures concentrate."
    },
    {
        "slug": "arkham-horror-lcg-events",
        "name": "Arkham Horror: The Card Game events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Arkham Horror: The Card Game.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Arkham Horror: The Card Game timeline."
    },
    {
        "slug": "arkham-horror-lcg-objects",
        "name": "Arkham Horror: The Card Game objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Arkham Horror: The Card Game.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Arkham Horror: The Card Game."
    },
    {
        "slug": "arkham-horror-lcg-factions",
        "name": "Arkham Horror: The Card Game factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Arkham Horror: The Card Game.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Arkham Horror: The Card Game."
    },
    {
        "slug": "arkham-horror-lcg-concepts",
        "name": "Arkham Horror: The Card Game concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Arkham Horror: The Card Game.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Arkham Horror: The Card Game readable as a lore graph."
    },
    {
        "slug": "arkham-horror-lcg-eras",
        "name": "Arkham Horror: The Card Game eras",
        "type": "event",
        "short_description": "Periodization for Arkham Horror: The Card Game.",
        "description": "Named eras and phases that help readers track how Arkham Horror: The Card Game changes across time."
    },
    {
        "slug": "arkham-horror-lcg-works",
        "name": "Arkham Horror: The Card Game works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Arkham Horror: The Card Game.",
        "description": "Primary works and adaptations through which most audiences encounter Arkham Horror: The Card Game."
    },
    {
        "slug": "arkham-horror-lcg-symbols",
        "name": "Arkham Horror: The Card Game symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Arkham Horror: The Card Game.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Arkham Horror: The Card Game."
    },
    {
        "slug": "arkham-horror-lcg-controversies",
        "name": "Arkham Horror: The Card Game controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Arkham Horror: The Card Game.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Arkham Horror: The Card Game argumentative."
    },
    {
        "slug": "arkham-horror-lcg-sources",
        "name": "Arkham Horror: The Card Game sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Arkham Horror: The Card Game.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Arkham Horror: The Card Game."
    },
    {
        "slug": "arkham-horror-lcg-geography",
        "name": "Arkham Horror: The Card Game geography",
        "type": "place",
        "short_description": "Broader geographic framing for Arkham Horror: The Card Game.",
        "description": "Regions, routes, and spatial systems that situate Arkham Horror: The Card Game beyond single named places."
    },
    {
        "slug": "arkham-horror-lcg-legacy",
        "name": "Arkham Horror: The Card Game legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Arkham Horror: The Card Game.",
        "description": "How Arkham Horror: The Card Game continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "arkham-horror-lcg-practices",
        "name": "Arkham Horror: The Card Game practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Arkham Horror: The Card Game.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Arkham Horror: The Card Game."
    },
    {
        "slug": "arkham-horror-lcg-entry-1",
        "name": "Arkham Horror: The Card Game entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-2",
        "name": "Arkham Horror: The Card Game entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-3",
        "name": "Arkham Horror: The Card Game entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-4",
        "name": "Arkham Horror: The Card Game entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-5",
        "name": "Arkham Horror: The Card Game entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-6",
        "name": "Arkham Horror: The Card Game entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-7",
        "name": "Arkham Horror: The Card Game entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-8",
        "name": "Arkham Horror: The Card Game entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-9",
        "name": "Arkham Horror: The Card Game entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-10",
        "name": "Arkham Horror: The Card Game entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-11",
        "name": "Arkham Horror: The Card Game entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-12",
        "name": "Arkham Horror: The Card Game entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-13",
        "name": "Arkham Horror: The Card Game entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-14",
        "name": "Arkham Horror: The Card Game entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-15",
        "name": "Arkham Horror: The Card Game entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-16",
        "name": "Arkham Horror: The Card Game entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-17",
        "name": "Arkham Horror: The Card Game entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-18",
        "name": "Arkham Horror: The Card Game entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-19",
        "name": "Arkham Horror: The Card Game entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-20",
        "name": "Arkham Horror: The Card Game entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-21",
        "name": "Arkham Horror: The Card Game entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-22",
        "name": "Arkham Horror: The Card Game entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-23",
        "name": "Arkham Horror: The Card Game entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "arkham-horror-lcg-entry-24",
        "name": "Arkham Horror: The Card Game entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Arkham Horror: The Card Game.",
        "description": "A supporting encyclopedia entry in the Arkham Horror: The Card Game subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-places",
        "contains",
        "Arkham Horror: The Card Game places is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-events",
        "contains",
        "Arkham Horror: The Card Game events is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-objects",
        "contains",
        "Arkham Horror: The Card Game objects & artifacts is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-factions",
        "contains",
        "Arkham Horror: The Card Game factions & groups is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-concepts",
        "contains",
        "Arkham Horror: The Card Game concepts is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-eras",
        "contains",
        "Arkham Horror: The Card Game eras is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-works",
        "contains",
        "Arkham Horror: The Card Game works & media is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-symbols",
        "contains",
        "Arkham Horror: The Card Game symbols is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-controversies",
        "contains",
        "Arkham Horror: The Card Game controversies is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-sources",
        "contains",
        "Arkham Horror: The Card Game sources is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-geography",
        "contains",
        "Arkham Horror: The Card Game geography is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-legacy",
        "contains",
        "Arkham Horror: The Card Game legacy is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-practices",
        "contains",
        "Arkham Horror: The Card Game practices is a primary trailhead under Arkham Horror: The Card Game.",
        0.88,
        0.82
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-1",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-2",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-3",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-4",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-5",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-6",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-7",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-8",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-9",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-10",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-11",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-12",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-13",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-14",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-15",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-16",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-17",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-18",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-19",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-20",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-21",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-22",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-23",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ],
    [
        "arkham-horror-lcg",
        "arkham-horror-lcg-entry-24",
        "contains",
        "Supporting entry under Arkham Horror: The Card Game.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
