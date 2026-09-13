/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "king-of-fighters",
        "name": "The King of Fighters",
        "type": "topic",
        "short_description": "Team battles, Orochi saga, and SNK’s crossover fighter mythology.",
        "description": "Team battles, Orochi saga, and SNK’s crossover fighter mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to The King of Fighters so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "king-of-fighters-figures",
        "name": "The King of Fighters figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The King of Fighters.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The King of Fighters."
    },
    {
        "slug": "king-of-fighters-world",
        "name": "The King of Fighters world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The King of Fighters.",
        "description": "Geography, institutions, and periodization that give The King of Fighters its encyclopedia shape."
    },
    {
        "slug": "king-of-fighters-places",
        "name": "The King of Fighters places",
        "type": "place",
        "short_description": "Locations and geographies that frame The King of Fighters.",
        "description": "Places, regions, and built sites that give The King of Fighters its map — where events and figures concentrate."
    },
    {
        "slug": "king-of-fighters-events",
        "name": "The King of Fighters events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The King of Fighters.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The King of Fighters timeline."
    },
    {
        "slug": "king-of-fighters-objects",
        "name": "The King of Fighters objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The King of Fighters.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The King of Fighters."
    },
    {
        "slug": "king-of-fighters-factions",
        "name": "The King of Fighters factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The King of Fighters.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The King of Fighters."
    },
    {
        "slug": "king-of-fighters-concepts",
        "name": "The King of Fighters concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The King of Fighters.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The King of Fighters readable as a lore graph."
    },
    {
        "slug": "king-of-fighters-eras",
        "name": "The King of Fighters eras",
        "type": "event",
        "short_description": "Periodization for The King of Fighters.",
        "description": "Named eras and phases that help readers track how The King of Fighters changes across time."
    },
    {
        "slug": "king-of-fighters-works",
        "name": "The King of Fighters works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The King of Fighters.",
        "description": "Primary works and adaptations through which most audiences encounter The King of Fighters."
    },
    {
        "slug": "king-of-fighters-symbols",
        "name": "The King of Fighters symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The King of Fighters.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The King of Fighters."
    },
    {
        "slug": "king-of-fighters-controversies",
        "name": "The King of Fighters controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The King of Fighters.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The King of Fighters argumentative."
    },
    {
        "slug": "king-of-fighters-sources",
        "name": "The King of Fighters sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The King of Fighters.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The King of Fighters."
    },
    {
        "slug": "king-of-fighters-geography",
        "name": "The King of Fighters geography",
        "type": "place",
        "short_description": "Broader geographic framing for The King of Fighters.",
        "description": "Regions, routes, and spatial systems that situate The King of Fighters beyond single named places."
    },
    {
        "slug": "king-of-fighters-legacy",
        "name": "The King of Fighters legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The King of Fighters.",
        "description": "How The King of Fighters continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "king-of-fighters-practices",
        "name": "The King of Fighters practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The King of Fighters.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The King of Fighters."
    },
    {
        "slug": "king-of-fighters-entry-1",
        "name": "The King of Fighters entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-2",
        "name": "The King of Fighters entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-3",
        "name": "The King of Fighters entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-4",
        "name": "The King of Fighters entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-5",
        "name": "The King of Fighters entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-6",
        "name": "The King of Fighters entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-7",
        "name": "The King of Fighters entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-8",
        "name": "The King of Fighters entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-9",
        "name": "The King of Fighters entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-10",
        "name": "The King of Fighters entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-11",
        "name": "The King of Fighters entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-12",
        "name": "The King of Fighters entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-13",
        "name": "The King of Fighters entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-14",
        "name": "The King of Fighters entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-15",
        "name": "The King of Fighters entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-16",
        "name": "The King of Fighters entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-17",
        "name": "The King of Fighters entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-18",
        "name": "The King of Fighters entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-19",
        "name": "The King of Fighters entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-20",
        "name": "The King of Fighters entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-21",
        "name": "The King of Fighters entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-22",
        "name": "The King of Fighters entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-23",
        "name": "The King of Fighters entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "king-of-fighters-entry-24",
        "name": "The King of Fighters entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The King of Fighters.",
        "description": "A supporting encyclopedia entry in the The King of Fighters subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "king-of-fighters",
        "king-of-fighters-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "king-of-fighters",
        "king-of-fighters-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "king-of-fighters",
        "king-of-fighters-places",
        "contains",
        "The King of Fighters places is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-events",
        "contains",
        "The King of Fighters events is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-objects",
        "contains",
        "The King of Fighters objects & artifacts is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-factions",
        "contains",
        "The King of Fighters factions & groups is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-concepts",
        "contains",
        "The King of Fighters concepts is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-eras",
        "contains",
        "The King of Fighters eras is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-works",
        "contains",
        "The King of Fighters works & media is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-symbols",
        "contains",
        "The King of Fighters symbols is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-controversies",
        "contains",
        "The King of Fighters controversies is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-sources",
        "contains",
        "The King of Fighters sources is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-geography",
        "contains",
        "The King of Fighters geography is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-legacy",
        "contains",
        "The King of Fighters legacy is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-practices",
        "contains",
        "The King of Fighters practices is a primary trailhead under The King of Fighters.",
        0.88,
        0.82
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-1",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-2",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-3",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-4",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-5",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-6",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-7",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-8",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-9",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-10",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-11",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-12",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-13",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-14",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-15",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-16",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-17",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-18",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-19",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-20",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-21",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-22",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-23",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ],
    [
        "king-of-fighters",
        "king-of-fighters-entry-24",
        "contains",
        "Supporting entry under The King of Fighters.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
