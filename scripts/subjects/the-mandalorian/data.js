/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-mandalorian",
        "name": "The Mandalorian",
        "type": "topic",
        "short_description": "Bounty hunter creed, Grogu, and the live-action Star Wars TV that proved the galaxy works weekly.",
        "description": "Bounty hunter creed, Grogu, and the live-action Star Wars TV that proved the galaxy works weekly. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Mandalorian so readers can follow long-tail connections across television."
    },
    {
        "slug": "the-mandalorian-figures",
        "name": "The Mandalorian figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Mandalorian.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Mandalorian."
    },
    {
        "slug": "the-mandalorian-world",
        "name": "The Mandalorian world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Mandalorian.",
        "description": "Geography, institutions, and periodization that give The Mandalorian its encyclopedia shape."
    },
    {
        "slug": "the-mandalorian-places",
        "name": "The Mandalorian places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Mandalorian.",
        "description": "Places, regions, and built sites that give The Mandalorian its map — where events and figures concentrate."
    },
    {
        "slug": "the-mandalorian-events",
        "name": "The Mandalorian events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Mandalorian.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Mandalorian timeline."
    },
    {
        "slug": "the-mandalorian-objects",
        "name": "The Mandalorian objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Mandalorian.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Mandalorian."
    },
    {
        "slug": "the-mandalorian-factions",
        "name": "The Mandalorian factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Mandalorian.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Mandalorian."
    },
    {
        "slug": "the-mandalorian-concepts",
        "name": "The Mandalorian concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Mandalorian.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Mandalorian readable as a lore graph."
    },
    {
        "slug": "the-mandalorian-eras",
        "name": "The Mandalorian eras",
        "type": "event",
        "short_description": "Periodization for The Mandalorian.",
        "description": "Named eras and phases that help readers track how The Mandalorian changes across time."
    },
    {
        "slug": "the-mandalorian-works",
        "name": "The Mandalorian works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Mandalorian.",
        "description": "Primary works and adaptations through which most audiences encounter The Mandalorian."
    },
    {
        "slug": "the-mandalorian-symbols",
        "name": "The Mandalorian symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Mandalorian.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Mandalorian."
    },
    {
        "slug": "the-mandalorian-controversies",
        "name": "The Mandalorian controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Mandalorian.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Mandalorian argumentative."
    },
    {
        "slug": "the-mandalorian-sources",
        "name": "The Mandalorian sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Mandalorian.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Mandalorian."
    },
    {
        "slug": "the-mandalorian-geography",
        "name": "The Mandalorian geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Mandalorian.",
        "description": "Regions, routes, and spatial systems that situate The Mandalorian beyond single named places."
    },
    {
        "slug": "the-mandalorian-legacy",
        "name": "The Mandalorian legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Mandalorian.",
        "description": "How The Mandalorian continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-mandalorian-practices",
        "name": "The Mandalorian practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Mandalorian.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Mandalorian."
    },
    {
        "slug": "the-mandalorian-entry-1",
        "name": "The Mandalorian entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-2",
        "name": "The Mandalorian entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-3",
        "name": "The Mandalorian entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-4",
        "name": "The Mandalorian entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-5",
        "name": "The Mandalorian entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-6",
        "name": "The Mandalorian entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-7",
        "name": "The Mandalorian entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-8",
        "name": "The Mandalorian entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-9",
        "name": "The Mandalorian entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-10",
        "name": "The Mandalorian entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-11",
        "name": "The Mandalorian entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-12",
        "name": "The Mandalorian entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-13",
        "name": "The Mandalorian entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-14",
        "name": "The Mandalorian entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-15",
        "name": "The Mandalorian entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-16",
        "name": "The Mandalorian entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-17",
        "name": "The Mandalorian entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-18",
        "name": "The Mandalorian entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-19",
        "name": "The Mandalorian entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-20",
        "name": "The Mandalorian entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-21",
        "name": "The Mandalorian entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-22",
        "name": "The Mandalorian entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-23",
        "name": "The Mandalorian entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-mandalorian-entry-24",
        "name": "The Mandalorian entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Mandalorian.",
        "description": "A supporting encyclopedia entry in the The Mandalorian subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-mandalorian",
        "the-mandalorian-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-mandalorian",
        "the-mandalorian-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-mandalorian",
        "the-mandalorian-places",
        "contains",
        "The Mandalorian places is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-events",
        "contains",
        "The Mandalorian events is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-objects",
        "contains",
        "The Mandalorian objects & artifacts is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-factions",
        "contains",
        "The Mandalorian factions & groups is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-concepts",
        "contains",
        "The Mandalorian concepts is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-eras",
        "contains",
        "The Mandalorian eras is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-works",
        "contains",
        "The Mandalorian works & media is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-symbols",
        "contains",
        "The Mandalorian symbols is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-controversies",
        "contains",
        "The Mandalorian controversies is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-sources",
        "contains",
        "The Mandalorian sources is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-geography",
        "contains",
        "The Mandalorian geography is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-legacy",
        "contains",
        "The Mandalorian legacy is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-practices",
        "contains",
        "The Mandalorian practices is a primary trailhead under The Mandalorian.",
        0.88,
        0.82
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-1",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-2",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-3",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-4",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-5",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-6",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-7",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-8",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-9",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-10",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-11",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-12",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-13",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-14",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-15",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-16",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-17",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-18",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-19",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-20",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-21",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-22",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-23",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ],
    [
        "the-mandalorian",
        "the-mandalorian-entry-24",
        "contains",
        "Supporting entry under The Mandalorian.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
