/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "friends-sitcom",
        "name": "Friends",
        "type": "topic",
        "short_description": "Purple apartment, Central Perk, and the 90s sitcom that never left syndication culture.",
        "description": "Purple apartment, Central Perk, and the 90s sitcom that never left syndication culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Friends so readers can follow long-tail connections across television."
    },
    {
        "slug": "friends-sitcom-figures",
        "name": "Friends figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Friends.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Friends."
    },
    {
        "slug": "friends-sitcom-world",
        "name": "Friends world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Friends.",
        "description": "Geography, institutions, and periodization that give Friends its encyclopedia shape."
    },
    {
        "slug": "friends-sitcom-places",
        "name": "Friends places",
        "type": "place",
        "short_description": "Locations and geographies that frame Friends.",
        "description": "Places, regions, and built sites that give Friends its map — where events and figures concentrate."
    },
    {
        "slug": "friends-sitcom-events",
        "name": "Friends events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Friends.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Friends timeline."
    },
    {
        "slug": "friends-sitcom-objects",
        "name": "Friends objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Friends.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Friends."
    },
    {
        "slug": "friends-sitcom-factions",
        "name": "Friends factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Friends.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Friends."
    },
    {
        "slug": "friends-sitcom-concepts",
        "name": "Friends concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Friends.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Friends readable as a lore graph."
    },
    {
        "slug": "friends-sitcom-eras",
        "name": "Friends eras",
        "type": "event",
        "short_description": "Periodization for Friends.",
        "description": "Named eras and phases that help readers track how Friends changes across time."
    },
    {
        "slug": "friends-sitcom-works",
        "name": "Friends works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Friends.",
        "description": "Primary works and adaptations through which most audiences encounter Friends."
    },
    {
        "slug": "friends-sitcom-symbols",
        "name": "Friends symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Friends.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Friends."
    },
    {
        "slug": "friends-sitcom-controversies",
        "name": "Friends controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Friends.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Friends argumentative."
    },
    {
        "slug": "friends-sitcom-sources",
        "name": "Friends sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Friends.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Friends."
    },
    {
        "slug": "friends-sitcom-geography",
        "name": "Friends geography",
        "type": "place",
        "short_description": "Broader geographic framing for Friends.",
        "description": "Regions, routes, and spatial systems that situate Friends beyond single named places."
    },
    {
        "slug": "friends-sitcom-legacy",
        "name": "Friends legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Friends.",
        "description": "How Friends continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "friends-sitcom-practices",
        "name": "Friends practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Friends.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Friends."
    },
    {
        "slug": "friends-sitcom-entry-1",
        "name": "Friends entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-2",
        "name": "Friends entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-3",
        "name": "Friends entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-4",
        "name": "Friends entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-5",
        "name": "Friends entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-6",
        "name": "Friends entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-7",
        "name": "Friends entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-8",
        "name": "Friends entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-9",
        "name": "Friends entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-10",
        "name": "Friends entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-11",
        "name": "Friends entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-12",
        "name": "Friends entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-13",
        "name": "Friends entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-14",
        "name": "Friends entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-15",
        "name": "Friends entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-16",
        "name": "Friends entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-17",
        "name": "Friends entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-18",
        "name": "Friends entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-19",
        "name": "Friends entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-20",
        "name": "Friends entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-21",
        "name": "Friends entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-22",
        "name": "Friends entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-23",
        "name": "Friends entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "friends-sitcom-entry-24",
        "name": "Friends entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Friends.",
        "description": "A supporting encyclopedia entry in the Friends subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "friends-sitcom",
        "friends-sitcom-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "friends-sitcom",
        "friends-sitcom-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "friends-sitcom",
        "friends-sitcom-places",
        "contains",
        "Friends places is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-events",
        "contains",
        "Friends events is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-objects",
        "contains",
        "Friends objects & artifacts is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-factions",
        "contains",
        "Friends factions & groups is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-concepts",
        "contains",
        "Friends concepts is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-eras",
        "contains",
        "Friends eras is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-works",
        "contains",
        "Friends works & media is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-symbols",
        "contains",
        "Friends symbols is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-controversies",
        "contains",
        "Friends controversies is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-sources",
        "contains",
        "Friends sources is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-geography",
        "contains",
        "Friends geography is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-legacy",
        "contains",
        "Friends legacy is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-practices",
        "contains",
        "Friends practices is a primary trailhead under Friends.",
        0.88,
        0.82
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-1",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-2",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-3",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-4",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-5",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-6",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-7",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-8",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-9",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-10",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-11",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-12",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-13",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-14",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-15",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-16",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-17",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-18",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-19",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-20",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-21",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-22",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-23",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ],
    [
        "friends-sitcom",
        "friends-sitcom-entry-24",
        "contains",
        "Supporting entry under Friends.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
