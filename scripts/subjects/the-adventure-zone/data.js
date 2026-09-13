/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-adventure-zone",
        "name": "The Adventure Zone",
        "type": "topic",
        "short_description": "McElroy D&D actual play that became a graphic-novel and stage-touring fandom.",
        "description": "McElroy D&D actual play that became a graphic-novel and stage-touring fandom. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Adventure Zone so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "the-adventure-zone-figures",
        "name": "The Adventure Zone figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Adventure Zone.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Adventure Zone."
    },
    {
        "slug": "the-adventure-zone-world",
        "name": "The Adventure Zone world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Adventure Zone.",
        "description": "Geography, institutions, and periodization that give The Adventure Zone its encyclopedia shape."
    },
    {
        "slug": "the-adventure-zone-places",
        "name": "The Adventure Zone places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Adventure Zone.",
        "description": "Places, regions, and built sites that give The Adventure Zone its map — where events and figures concentrate."
    },
    {
        "slug": "the-adventure-zone-events",
        "name": "The Adventure Zone events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Adventure Zone.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Adventure Zone timeline."
    },
    {
        "slug": "the-adventure-zone-objects",
        "name": "The Adventure Zone objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Adventure Zone.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Adventure Zone."
    },
    {
        "slug": "the-adventure-zone-factions",
        "name": "The Adventure Zone factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Adventure Zone.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Adventure Zone."
    },
    {
        "slug": "the-adventure-zone-concepts",
        "name": "The Adventure Zone concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Adventure Zone.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Adventure Zone readable as a lore graph."
    },
    {
        "slug": "the-adventure-zone-eras",
        "name": "The Adventure Zone eras",
        "type": "event",
        "short_description": "Periodization for The Adventure Zone.",
        "description": "Named eras and phases that help readers track how The Adventure Zone changes across time."
    },
    {
        "slug": "the-adventure-zone-works",
        "name": "The Adventure Zone works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Adventure Zone.",
        "description": "Primary works and adaptations through which most audiences encounter The Adventure Zone."
    },
    {
        "slug": "the-adventure-zone-symbols",
        "name": "The Adventure Zone symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Adventure Zone.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Adventure Zone."
    },
    {
        "slug": "the-adventure-zone-controversies",
        "name": "The Adventure Zone controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Adventure Zone.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Adventure Zone argumentative."
    },
    {
        "slug": "the-adventure-zone-sources",
        "name": "The Adventure Zone sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Adventure Zone.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Adventure Zone."
    },
    {
        "slug": "the-adventure-zone-geography",
        "name": "The Adventure Zone geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Adventure Zone.",
        "description": "Regions, routes, and spatial systems that situate The Adventure Zone beyond single named places."
    },
    {
        "slug": "the-adventure-zone-legacy",
        "name": "The Adventure Zone legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Adventure Zone.",
        "description": "How The Adventure Zone continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-adventure-zone-practices",
        "name": "The Adventure Zone practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Adventure Zone.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Adventure Zone."
    },
    {
        "slug": "the-adventure-zone-entry-1",
        "name": "The Adventure Zone entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-2",
        "name": "The Adventure Zone entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-3",
        "name": "The Adventure Zone entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-4",
        "name": "The Adventure Zone entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-5",
        "name": "The Adventure Zone entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-6",
        "name": "The Adventure Zone entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-7",
        "name": "The Adventure Zone entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-8",
        "name": "The Adventure Zone entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-9",
        "name": "The Adventure Zone entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-10",
        "name": "The Adventure Zone entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-11",
        "name": "The Adventure Zone entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-12",
        "name": "The Adventure Zone entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-13",
        "name": "The Adventure Zone entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-14",
        "name": "The Adventure Zone entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-15",
        "name": "The Adventure Zone entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-16",
        "name": "The Adventure Zone entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-17",
        "name": "The Adventure Zone entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-18",
        "name": "The Adventure Zone entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-19",
        "name": "The Adventure Zone entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-20",
        "name": "The Adventure Zone entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-21",
        "name": "The Adventure Zone entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-22",
        "name": "The Adventure Zone entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-23",
        "name": "The Adventure Zone entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-adventure-zone-entry-24",
        "name": "The Adventure Zone entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Adventure Zone.",
        "description": "A supporting encyclopedia entry in the The Adventure Zone subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-adventure-zone",
        "the-adventure-zone-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-places",
        "contains",
        "The Adventure Zone places is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-events",
        "contains",
        "The Adventure Zone events is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-objects",
        "contains",
        "The Adventure Zone objects & artifacts is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-factions",
        "contains",
        "The Adventure Zone factions & groups is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-concepts",
        "contains",
        "The Adventure Zone concepts is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-eras",
        "contains",
        "The Adventure Zone eras is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-works",
        "contains",
        "The Adventure Zone works & media is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-symbols",
        "contains",
        "The Adventure Zone symbols is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-controversies",
        "contains",
        "The Adventure Zone controversies is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-sources",
        "contains",
        "The Adventure Zone sources is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-geography",
        "contains",
        "The Adventure Zone geography is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-legacy",
        "contains",
        "The Adventure Zone legacy is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-practices",
        "contains",
        "The Adventure Zone practices is a primary trailhead under The Adventure Zone.",
        0.88,
        0.82
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-1",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-2",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-3",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-4",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-5",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-6",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-7",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-8",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-9",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-10",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-11",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-12",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-13",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-14",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-15",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-16",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-17",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-18",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-19",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-20",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-21",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-22",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-23",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ],
    [
        "the-adventure-zone",
        "the-adventure-zone-entry-24",
        "contains",
        "Supporting entry under The Adventure Zone.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
