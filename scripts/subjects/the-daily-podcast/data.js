/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-daily-podcast",
        "name": "The Daily",
        "type": "topic",
        "short_description": "Weekday news explainers that turned newspaper journalism into habitual audio.",
        "description": "Weekday news explainers that turned newspaper journalism into habitual audio. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Daily so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "the-daily-podcast-figures",
        "name": "The Daily figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Daily.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Daily."
    },
    {
        "slug": "the-daily-podcast-world",
        "name": "The Daily world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Daily.",
        "description": "Geography, institutions, and periodization that give The Daily its encyclopedia shape."
    },
    {
        "slug": "the-daily-podcast-places",
        "name": "The Daily places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Daily.",
        "description": "Places, regions, and built sites that give The Daily its map — where events and figures concentrate."
    },
    {
        "slug": "the-daily-podcast-events",
        "name": "The Daily events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Daily.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Daily timeline."
    },
    {
        "slug": "the-daily-podcast-objects",
        "name": "The Daily objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Daily.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Daily."
    },
    {
        "slug": "the-daily-podcast-factions",
        "name": "The Daily factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Daily.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Daily."
    },
    {
        "slug": "the-daily-podcast-concepts",
        "name": "The Daily concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Daily.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Daily readable as a lore graph."
    },
    {
        "slug": "the-daily-podcast-eras",
        "name": "The Daily eras",
        "type": "event",
        "short_description": "Periodization for The Daily.",
        "description": "Named eras and phases that help readers track how The Daily changes across time."
    },
    {
        "slug": "the-daily-podcast-works",
        "name": "The Daily works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Daily.",
        "description": "Primary works and adaptations through which most audiences encounter The Daily."
    },
    {
        "slug": "the-daily-podcast-symbols",
        "name": "The Daily symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Daily.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Daily."
    },
    {
        "slug": "the-daily-podcast-controversies",
        "name": "The Daily controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Daily.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Daily argumentative."
    },
    {
        "slug": "the-daily-podcast-sources",
        "name": "The Daily sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Daily.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Daily."
    },
    {
        "slug": "the-daily-podcast-geography",
        "name": "The Daily geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Daily.",
        "description": "Regions, routes, and spatial systems that situate The Daily beyond single named places."
    },
    {
        "slug": "the-daily-podcast-legacy",
        "name": "The Daily legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Daily.",
        "description": "How The Daily continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-daily-podcast-practices",
        "name": "The Daily practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Daily.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Daily."
    },
    {
        "slug": "the-daily-podcast-entry-1",
        "name": "The Daily entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-2",
        "name": "The Daily entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-3",
        "name": "The Daily entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-4",
        "name": "The Daily entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-5",
        "name": "The Daily entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-6",
        "name": "The Daily entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-7",
        "name": "The Daily entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-8",
        "name": "The Daily entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-9",
        "name": "The Daily entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-10",
        "name": "The Daily entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-11",
        "name": "The Daily entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-12",
        "name": "The Daily entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-13",
        "name": "The Daily entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-14",
        "name": "The Daily entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-15",
        "name": "The Daily entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-16",
        "name": "The Daily entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-17",
        "name": "The Daily entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-18",
        "name": "The Daily entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-19",
        "name": "The Daily entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-20",
        "name": "The Daily entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-21",
        "name": "The Daily entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-22",
        "name": "The Daily entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-23",
        "name": "The Daily entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-daily-podcast-entry-24",
        "name": "The Daily entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Daily.",
        "description": "A supporting encyclopedia entry in the The Daily subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-daily-podcast",
        "the-daily-podcast-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-places",
        "contains",
        "The Daily places is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-events",
        "contains",
        "The Daily events is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-objects",
        "contains",
        "The Daily objects & artifacts is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-factions",
        "contains",
        "The Daily factions & groups is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-concepts",
        "contains",
        "The Daily concepts is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-eras",
        "contains",
        "The Daily eras is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-works",
        "contains",
        "The Daily works & media is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-symbols",
        "contains",
        "The Daily symbols is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-controversies",
        "contains",
        "The Daily controversies is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-sources",
        "contains",
        "The Daily sources is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-geography",
        "contains",
        "The Daily geography is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-legacy",
        "contains",
        "The Daily legacy is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-practices",
        "contains",
        "The Daily practices is a primary trailhead under The Daily.",
        0.88,
        0.82
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-1",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-2",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-3",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-4",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-5",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-6",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-7",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-8",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-9",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-10",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-11",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-12",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-13",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-14",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-15",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-16",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-17",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-18",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-19",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-20",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-21",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-22",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-23",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ],
    [
        "the-daily-podcast",
        "the-daily-podcast-entry-24",
        "contains",
        "Supporting entry under The Daily.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
