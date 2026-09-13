/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sonic-the-hedgehog",
        "name": "Sonic the Hedgehog",
        "type": "topic",
        "short_description": "Green Hill speed, Chaos Emeralds, and Sega’s blue mascot universe across decades of tones.",
        "description": "Green Hill speed, Chaos Emeralds, and Sega’s blue mascot universe across decades of tones. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sonic the Hedgehog so readers can follow long-tail connections across video games."
    },
    {
        "slug": "sonic-the-hedgehog-figures",
        "name": "Sonic the Hedgehog figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sonic the Hedgehog.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sonic the Hedgehog."
    },
    {
        "slug": "sonic-the-hedgehog-world",
        "name": "Sonic the Hedgehog world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sonic the Hedgehog.",
        "description": "Geography, institutions, and periodization that give Sonic the Hedgehog its encyclopedia shape."
    },
    {
        "slug": "sonic-the-hedgehog-places",
        "name": "Sonic the Hedgehog places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sonic the Hedgehog.",
        "description": "Places, regions, and built sites that give Sonic the Hedgehog its map — where events and figures concentrate."
    },
    {
        "slug": "sonic-the-hedgehog-events",
        "name": "Sonic the Hedgehog events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sonic the Hedgehog.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sonic the Hedgehog timeline."
    },
    {
        "slug": "sonic-the-hedgehog-objects",
        "name": "Sonic the Hedgehog objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sonic the Hedgehog.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sonic the Hedgehog."
    },
    {
        "slug": "sonic-the-hedgehog-factions",
        "name": "Sonic the Hedgehog factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sonic the Hedgehog.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sonic the Hedgehog."
    },
    {
        "slug": "sonic-the-hedgehog-concepts",
        "name": "Sonic the Hedgehog concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sonic the Hedgehog.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sonic the Hedgehog readable as a lore graph."
    },
    {
        "slug": "sonic-the-hedgehog-eras",
        "name": "Sonic the Hedgehog eras",
        "type": "event",
        "short_description": "Periodization for Sonic the Hedgehog.",
        "description": "Named eras and phases that help readers track how Sonic the Hedgehog changes across time."
    },
    {
        "slug": "sonic-the-hedgehog-works",
        "name": "Sonic the Hedgehog works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sonic the Hedgehog.",
        "description": "Primary works and adaptations through which most audiences encounter Sonic the Hedgehog."
    },
    {
        "slug": "sonic-the-hedgehog-symbols",
        "name": "Sonic the Hedgehog symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sonic the Hedgehog.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sonic the Hedgehog."
    },
    {
        "slug": "sonic-the-hedgehog-controversies",
        "name": "Sonic the Hedgehog controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sonic the Hedgehog.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sonic the Hedgehog argumentative."
    },
    {
        "slug": "sonic-the-hedgehog-sources",
        "name": "Sonic the Hedgehog sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sonic the Hedgehog.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sonic the Hedgehog."
    },
    {
        "slug": "sonic-the-hedgehog-geography",
        "name": "Sonic the Hedgehog geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sonic the Hedgehog.",
        "description": "Regions, routes, and spatial systems that situate Sonic the Hedgehog beyond single named places."
    },
    {
        "slug": "sonic-the-hedgehog-legacy",
        "name": "Sonic the Hedgehog legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sonic the Hedgehog.",
        "description": "How Sonic the Hedgehog continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sonic-the-hedgehog-practices",
        "name": "Sonic the Hedgehog practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sonic the Hedgehog.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sonic the Hedgehog."
    },
    {
        "slug": "sonic-the-hedgehog-entry-1",
        "name": "Sonic the Hedgehog entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-2",
        "name": "Sonic the Hedgehog entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-3",
        "name": "Sonic the Hedgehog entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-4",
        "name": "Sonic the Hedgehog entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-5",
        "name": "Sonic the Hedgehog entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-6",
        "name": "Sonic the Hedgehog entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-7",
        "name": "Sonic the Hedgehog entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-8",
        "name": "Sonic the Hedgehog entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-9",
        "name": "Sonic the Hedgehog entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-10",
        "name": "Sonic the Hedgehog entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-11",
        "name": "Sonic the Hedgehog entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-12",
        "name": "Sonic the Hedgehog entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-13",
        "name": "Sonic the Hedgehog entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-14",
        "name": "Sonic the Hedgehog entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-15",
        "name": "Sonic the Hedgehog entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-16",
        "name": "Sonic the Hedgehog entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-17",
        "name": "Sonic the Hedgehog entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-18",
        "name": "Sonic the Hedgehog entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-19",
        "name": "Sonic the Hedgehog entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-20",
        "name": "Sonic the Hedgehog entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-21",
        "name": "Sonic the Hedgehog entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-22",
        "name": "Sonic the Hedgehog entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-23",
        "name": "Sonic the Hedgehog entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sonic-the-hedgehog-entry-24",
        "name": "Sonic the Hedgehog entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sonic the Hedgehog.",
        "description": "A supporting encyclopedia entry in the Sonic the Hedgehog subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-places",
        "contains",
        "Sonic the Hedgehog places is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-events",
        "contains",
        "Sonic the Hedgehog events is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-objects",
        "contains",
        "Sonic the Hedgehog objects & artifacts is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-factions",
        "contains",
        "Sonic the Hedgehog factions & groups is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-concepts",
        "contains",
        "Sonic the Hedgehog concepts is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-eras",
        "contains",
        "Sonic the Hedgehog eras is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-works",
        "contains",
        "Sonic the Hedgehog works & media is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-symbols",
        "contains",
        "Sonic the Hedgehog symbols is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-controversies",
        "contains",
        "Sonic the Hedgehog controversies is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-sources",
        "contains",
        "Sonic the Hedgehog sources is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-geography",
        "contains",
        "Sonic the Hedgehog geography is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-legacy",
        "contains",
        "Sonic the Hedgehog legacy is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-practices",
        "contains",
        "Sonic the Hedgehog practices is a primary trailhead under Sonic the Hedgehog.",
        0.88,
        0.82
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-1",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-2",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-3",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-4",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-5",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-6",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-7",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-8",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-9",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-10",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-11",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-12",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-13",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-14",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-15",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-16",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-17",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-18",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-19",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-20",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-21",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-22",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-23",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ],
    [
        "sonic-the-hedgehog",
        "sonic-the-hedgehog-entry-24",
        "contains",
        "Supporting entry under Sonic the Hedgehog.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
