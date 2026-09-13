/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "true-crime-media",
        "name": "True crime media history",
        "type": "topic",
        "short_description": "From broadsheets to podcasts — how crime stories became a mass entertainment genre.",
        "description": "From broadsheets to podcasts — how crime stories became a mass entertainment genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to True crime media history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "true-crime-media-figures",
        "name": "True crime media history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to True crime media history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring True crime media history."
    },
    {
        "slug": "true-crime-media-world",
        "name": "True crime media history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame True crime media history.",
        "description": "Geography, institutions, and periodization that give True crime media history its encyclopedia shape."
    },
    {
        "slug": "true-crime-media-places",
        "name": "True crime media history places",
        "type": "place",
        "short_description": "Locations and geographies that frame True crime media history.",
        "description": "Places, regions, and built sites that give True crime media history its map — where events and figures concentrate."
    },
    {
        "slug": "true-crime-media-events",
        "name": "True crime media history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in True crime media history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the True crime media history timeline."
    },
    {
        "slug": "true-crime-media-objects",
        "name": "True crime media history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to True crime media history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through True crime media history."
    },
    {
        "slug": "true-crime-media-factions",
        "name": "True crime media history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside True crime media history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in True crime media history."
    },
    {
        "slug": "true-crime-media-concepts",
        "name": "True crime media history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize True crime media history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make True crime media history readable as a lore graph."
    },
    {
        "slug": "true-crime-media-eras",
        "name": "True crime media history eras",
        "type": "event",
        "short_description": "Periodization for True crime media history.",
        "description": "Named eras and phases that help readers track how True crime media history changes across time."
    },
    {
        "slug": "true-crime-media-works",
        "name": "True crime media history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry True crime media history.",
        "description": "Primary works and adaptations through which most audiences encounter True crime media history."
    },
    {
        "slug": "true-crime-media-symbols",
        "name": "True crime media history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with True crime media history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside True crime media history."
    },
    {
        "slug": "true-crime-media-controversies",
        "name": "True crime media history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in True crime media history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep True crime media history argumentative."
    },
    {
        "slug": "true-crime-media-sources",
        "name": "True crime media history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into True crime media history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify True crime media history."
    },
    {
        "slug": "true-crime-media-geography",
        "name": "True crime media history geography",
        "type": "place",
        "short_description": "Broader geographic framing for True crime media history.",
        "description": "Regions, routes, and spatial systems that situate True crime media history beyond single named places."
    },
    {
        "slug": "true-crime-media-legacy",
        "name": "True crime media history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of True crime media history.",
        "description": "How True crime media history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "true-crime-media-practices",
        "name": "True crime media history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in True crime media history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in True crime media history."
    },
    {
        "slug": "true-crime-media-entry-1",
        "name": "True crime media history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-2",
        "name": "True crime media history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-3",
        "name": "True crime media history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-4",
        "name": "True crime media history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-5",
        "name": "True crime media history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-6",
        "name": "True crime media history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-7",
        "name": "True crime media history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-8",
        "name": "True crime media history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-9",
        "name": "True crime media history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-10",
        "name": "True crime media history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-11",
        "name": "True crime media history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-12",
        "name": "True crime media history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-13",
        "name": "True crime media history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-14",
        "name": "True crime media history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-15",
        "name": "True crime media history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-16",
        "name": "True crime media history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-17",
        "name": "True crime media history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-18",
        "name": "True crime media history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-19",
        "name": "True crime media history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-20",
        "name": "True crime media history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-21",
        "name": "True crime media history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-22",
        "name": "True crime media history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-23",
        "name": "True crime media history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "true-crime-media-entry-24",
        "name": "True crime media history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside True crime media history.",
        "description": "A supporting encyclopedia entry in the True crime media history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "true-crime-media",
        "true-crime-media-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "true-crime-media",
        "true-crime-media-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "true-crime-media",
        "true-crime-media-places",
        "contains",
        "True crime media history places is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-events",
        "contains",
        "True crime media history events is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-objects",
        "contains",
        "True crime media history objects & artifacts is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-factions",
        "contains",
        "True crime media history factions & groups is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-concepts",
        "contains",
        "True crime media history concepts is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-eras",
        "contains",
        "True crime media history eras is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-works",
        "contains",
        "True crime media history works & media is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-symbols",
        "contains",
        "True crime media history symbols is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-controversies",
        "contains",
        "True crime media history controversies is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-sources",
        "contains",
        "True crime media history sources is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-geography",
        "contains",
        "True crime media history geography is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-legacy",
        "contains",
        "True crime media history legacy is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-practices",
        "contains",
        "True crime media history practices is a primary trailhead under True crime media history.",
        0.88,
        0.82
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-1",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-2",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-3",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-4",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-5",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-6",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-7",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-8",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-9",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-10",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-11",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-12",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-13",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-14",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-15",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-16",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-17",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-18",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-19",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-20",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-21",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-22",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-23",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ],
    [
        "true-crime-media",
        "true-crime-media-entry-24",
        "contains",
        "Supporting entry under True crime media history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
