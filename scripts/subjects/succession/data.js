/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "succession",
        "name": "Succession",
        "type": "topic",
        "short_description": "Roy family knife-fights, media empire succession, and the Shakespearean boardroom satire.",
        "description": "Roy family knife-fights, media empire succession, and the Shakespearean boardroom satire. This Ton-o-Lore subject maps people, places, events, and ideas tied to Succession so readers can follow long-tail connections across television."
    },
    {
        "slug": "succession-figures",
        "name": "Succession figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Succession.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Succession."
    },
    {
        "slug": "succession-world",
        "name": "Succession world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Succession.",
        "description": "Geography, institutions, and periodization that give Succession its encyclopedia shape."
    },
    {
        "slug": "succession-places",
        "name": "Succession places",
        "type": "place",
        "short_description": "Locations and geographies that frame Succession.",
        "description": "Places, regions, and built sites that give Succession its map — where events and figures concentrate."
    },
    {
        "slug": "succession-events",
        "name": "Succession events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Succession.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Succession timeline."
    },
    {
        "slug": "succession-objects",
        "name": "Succession objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Succession.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Succession."
    },
    {
        "slug": "succession-factions",
        "name": "Succession factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Succession.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Succession."
    },
    {
        "slug": "succession-concepts",
        "name": "Succession concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Succession.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Succession readable as a lore graph."
    },
    {
        "slug": "succession-eras",
        "name": "Succession eras",
        "type": "event",
        "short_description": "Periodization for Succession.",
        "description": "Named eras and phases that help readers track how Succession changes across time."
    },
    {
        "slug": "succession-works",
        "name": "Succession works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Succession.",
        "description": "Primary works and adaptations through which most audiences encounter Succession."
    },
    {
        "slug": "succession-symbols",
        "name": "Succession symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Succession.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Succession."
    },
    {
        "slug": "succession-controversies",
        "name": "Succession controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Succession.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Succession argumentative."
    },
    {
        "slug": "succession-sources",
        "name": "Succession sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Succession.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Succession."
    },
    {
        "slug": "succession-geography",
        "name": "Succession geography",
        "type": "place",
        "short_description": "Broader geographic framing for Succession.",
        "description": "Regions, routes, and spatial systems that situate Succession beyond single named places."
    },
    {
        "slug": "succession-legacy",
        "name": "Succession legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Succession.",
        "description": "How Succession continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "succession-practices",
        "name": "Succession practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Succession.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Succession."
    },
    {
        "slug": "succession-entry-1",
        "name": "Succession entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-2",
        "name": "Succession entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-3",
        "name": "Succession entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-4",
        "name": "Succession entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-5",
        "name": "Succession entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-6",
        "name": "Succession entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-7",
        "name": "Succession entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-8",
        "name": "Succession entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-9",
        "name": "Succession entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-10",
        "name": "Succession entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-11",
        "name": "Succession entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-12",
        "name": "Succession entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-13",
        "name": "Succession entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-14",
        "name": "Succession entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-15",
        "name": "Succession entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-16",
        "name": "Succession entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-17",
        "name": "Succession entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-18",
        "name": "Succession entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-19",
        "name": "Succession entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-20",
        "name": "Succession entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-21",
        "name": "Succession entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-22",
        "name": "Succession entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-23",
        "name": "Succession entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "succession-entry-24",
        "name": "Succession entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Succession.",
        "description": "A supporting encyclopedia entry in the Succession subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "succession",
        "succession-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "succession",
        "succession-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "succession",
        "succession-places",
        "contains",
        "Succession places is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-events",
        "contains",
        "Succession events is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-objects",
        "contains",
        "Succession objects & artifacts is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-factions",
        "contains",
        "Succession factions & groups is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-concepts",
        "contains",
        "Succession concepts is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-eras",
        "contains",
        "Succession eras is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-works",
        "contains",
        "Succession works & media is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-symbols",
        "contains",
        "Succession symbols is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-controversies",
        "contains",
        "Succession controversies is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-sources",
        "contains",
        "Succession sources is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-geography",
        "contains",
        "Succession geography is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-legacy",
        "contains",
        "Succession legacy is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-practices",
        "contains",
        "Succession practices is a primary trailhead under Succession.",
        0.88,
        0.82
    ],
    [
        "succession",
        "succession-entry-1",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-2",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-3",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-4",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-5",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-6",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-7",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-8",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-9",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-10",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-11",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-12",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-13",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-14",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-15",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-16",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-17",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-18",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-19",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-20",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-21",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-22",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-23",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ],
    [
        "succession",
        "succession-entry-24",
        "contains",
        "Supporting entry under Succession.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
