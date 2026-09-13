/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-sopranos",
        "name": "The Sopranos",
        "type": "topic",
        "short_description": "Therapy for a mob boss, New Jersey crew, and the show that invented modern prestige TV grammar.",
        "description": "Therapy for a mob boss, New Jersey crew, and the show that invented modern prestige TV grammar. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Sopranos so readers can follow long-tail connections across television."
    },
    {
        "slug": "the-sopranos-figures",
        "name": "The Sopranos figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Sopranos.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Sopranos."
    },
    {
        "slug": "the-sopranos-world",
        "name": "The Sopranos world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Sopranos.",
        "description": "Geography, institutions, and periodization that give The Sopranos its encyclopedia shape."
    },
    {
        "slug": "the-sopranos-places",
        "name": "The Sopranos places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Sopranos.",
        "description": "Places, regions, and built sites that give The Sopranos its map — where events and figures concentrate."
    },
    {
        "slug": "the-sopranos-events",
        "name": "The Sopranos events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Sopranos.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Sopranos timeline."
    },
    {
        "slug": "the-sopranos-objects",
        "name": "The Sopranos objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Sopranos.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Sopranos."
    },
    {
        "slug": "the-sopranos-factions",
        "name": "The Sopranos factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Sopranos.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Sopranos."
    },
    {
        "slug": "the-sopranos-concepts",
        "name": "The Sopranos concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Sopranos.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Sopranos readable as a lore graph."
    },
    {
        "slug": "the-sopranos-eras",
        "name": "The Sopranos eras",
        "type": "event",
        "short_description": "Periodization for The Sopranos.",
        "description": "Named eras and phases that help readers track how The Sopranos changes across time."
    },
    {
        "slug": "the-sopranos-works",
        "name": "The Sopranos works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Sopranos.",
        "description": "Primary works and adaptations through which most audiences encounter The Sopranos."
    },
    {
        "slug": "the-sopranos-symbols",
        "name": "The Sopranos symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Sopranos.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Sopranos."
    },
    {
        "slug": "the-sopranos-controversies",
        "name": "The Sopranos controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Sopranos.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Sopranos argumentative."
    },
    {
        "slug": "the-sopranos-sources",
        "name": "The Sopranos sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Sopranos.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Sopranos."
    },
    {
        "slug": "the-sopranos-geography",
        "name": "The Sopranos geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Sopranos.",
        "description": "Regions, routes, and spatial systems that situate The Sopranos beyond single named places."
    },
    {
        "slug": "the-sopranos-legacy",
        "name": "The Sopranos legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Sopranos.",
        "description": "How The Sopranos continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-sopranos-practices",
        "name": "The Sopranos practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Sopranos.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Sopranos."
    },
    {
        "slug": "the-sopranos-entry-1",
        "name": "The Sopranos entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-2",
        "name": "The Sopranos entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-3",
        "name": "The Sopranos entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-4",
        "name": "The Sopranos entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-5",
        "name": "The Sopranos entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-6",
        "name": "The Sopranos entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-7",
        "name": "The Sopranos entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-8",
        "name": "The Sopranos entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-9",
        "name": "The Sopranos entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-10",
        "name": "The Sopranos entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-11",
        "name": "The Sopranos entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-12",
        "name": "The Sopranos entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-13",
        "name": "The Sopranos entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-14",
        "name": "The Sopranos entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-15",
        "name": "The Sopranos entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-16",
        "name": "The Sopranos entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-17",
        "name": "The Sopranos entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-18",
        "name": "The Sopranos entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-19",
        "name": "The Sopranos entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-20",
        "name": "The Sopranos entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-21",
        "name": "The Sopranos entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-22",
        "name": "The Sopranos entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-23",
        "name": "The Sopranos entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-sopranos-entry-24",
        "name": "The Sopranos entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Sopranos.",
        "description": "A supporting encyclopedia entry in the The Sopranos subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-sopranos",
        "the-sopranos-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-sopranos",
        "the-sopranos-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-sopranos",
        "the-sopranos-places",
        "contains",
        "The Sopranos places is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-events",
        "contains",
        "The Sopranos events is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-objects",
        "contains",
        "The Sopranos objects & artifacts is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-factions",
        "contains",
        "The Sopranos factions & groups is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-concepts",
        "contains",
        "The Sopranos concepts is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-eras",
        "contains",
        "The Sopranos eras is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-works",
        "contains",
        "The Sopranos works & media is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-symbols",
        "contains",
        "The Sopranos symbols is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-controversies",
        "contains",
        "The Sopranos controversies is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-sources",
        "contains",
        "The Sopranos sources is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-geography",
        "contains",
        "The Sopranos geography is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-legacy",
        "contains",
        "The Sopranos legacy is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-practices",
        "contains",
        "The Sopranos practices is a primary trailhead under The Sopranos.",
        0.88,
        0.82
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-1",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-2",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-3",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-4",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-5",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-6",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-7",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-8",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-9",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-10",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-11",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-12",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-13",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-14",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-15",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-16",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-17",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-18",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-19",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-20",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-21",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-22",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-23",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ],
    [
        "the-sopranos",
        "the-sopranos-entry-24",
        "contains",
        "Supporting entry under The Sopranos.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
