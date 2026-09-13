/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hitchhikers-guide",
        "name": "The Hitchhiker's Guide to the Galaxy",
        "type": "topic",
        "short_description": "Towels, Infinite Improbability, and Adams’ absurdist SF comedy that became a phrasebook.",
        "description": "Towels, Infinite Improbability, and Adams’ absurdist SF comedy that became a phrasebook. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Hitchhiker's Guide to the Galaxy so readers can follow long-tail connections across books & literature."
    },
    {
        "slug": "hitchhikers-guide-figures",
        "name": "The Hitchhiker's Guide to the Galaxy figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Hitchhiker's Guide to the Galaxy.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Hitchhiker's Guide to the Galaxy."
    },
    {
        "slug": "hitchhikers-guide-world",
        "name": "The Hitchhiker's Guide to the Galaxy world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Hitchhiker's Guide to the Galaxy.",
        "description": "Geography, institutions, and periodization that give The Hitchhiker's Guide to the Galaxy its encyclopedia shape."
    },
    {
        "slug": "hitchhikers-guide-places",
        "name": "The Hitchhiker's Guide to the Galaxy places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Hitchhiker's Guide to the Galaxy.",
        "description": "Places, regions, and built sites that give The Hitchhiker's Guide to the Galaxy its map — where events and figures concentrate."
    },
    {
        "slug": "hitchhikers-guide-events",
        "name": "The Hitchhiker's Guide to the Galaxy events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Hitchhiker's Guide to the Galaxy.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Hitchhiker's Guide to the Galaxy timeline."
    },
    {
        "slug": "hitchhikers-guide-objects",
        "name": "The Hitchhiker's Guide to the Galaxy objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Hitchhiker's Guide to the Galaxy.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Hitchhiker's Guide to the Galaxy."
    },
    {
        "slug": "hitchhikers-guide-factions",
        "name": "The Hitchhiker's Guide to the Galaxy factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Hitchhiker's Guide to the Galaxy.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Hitchhiker's Guide to the Galaxy."
    },
    {
        "slug": "hitchhikers-guide-concepts",
        "name": "The Hitchhiker's Guide to the Galaxy concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Hitchhiker's Guide to the Galaxy.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Hitchhiker's Guide to the Galaxy readable as a lore graph."
    },
    {
        "slug": "hitchhikers-guide-eras",
        "name": "The Hitchhiker's Guide to the Galaxy eras",
        "type": "event",
        "short_description": "Periodization for The Hitchhiker's Guide to the Galaxy.",
        "description": "Named eras and phases that help readers track how The Hitchhiker's Guide to the Galaxy changes across time."
    },
    {
        "slug": "hitchhikers-guide-works",
        "name": "The Hitchhiker's Guide to the Galaxy works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Hitchhiker's Guide to the Galaxy.",
        "description": "Primary works and adaptations through which most audiences encounter The Hitchhiker's Guide to the Galaxy."
    },
    {
        "slug": "hitchhikers-guide-symbols",
        "name": "The Hitchhiker's Guide to the Galaxy symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Hitchhiker's Guide to the Galaxy.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Hitchhiker's Guide to the Galaxy."
    },
    {
        "slug": "hitchhikers-guide-controversies",
        "name": "The Hitchhiker's Guide to the Galaxy controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Hitchhiker's Guide to the Galaxy.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Hitchhiker's Guide to the Galaxy argumentative."
    },
    {
        "slug": "hitchhikers-guide-sources",
        "name": "The Hitchhiker's Guide to the Galaxy sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Hitchhiker's Guide to the Galaxy.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Hitchhiker's Guide to the Galaxy."
    },
    {
        "slug": "hitchhikers-guide-geography",
        "name": "The Hitchhiker's Guide to the Galaxy geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Hitchhiker's Guide to the Galaxy.",
        "description": "Regions, routes, and spatial systems that situate The Hitchhiker's Guide to the Galaxy beyond single named places."
    },
    {
        "slug": "hitchhikers-guide-legacy",
        "name": "The Hitchhiker's Guide to the Galaxy legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Hitchhiker's Guide to the Galaxy.",
        "description": "How The Hitchhiker's Guide to the Galaxy continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hitchhikers-guide-practices",
        "name": "The Hitchhiker's Guide to the Galaxy practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Hitchhiker's Guide to the Galaxy.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Hitchhiker's Guide to the Galaxy."
    },
    {
        "slug": "hitchhikers-guide-entry-1",
        "name": "The Hitchhiker's Guide to the Galaxy entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-2",
        "name": "The Hitchhiker's Guide to the Galaxy entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-3",
        "name": "The Hitchhiker's Guide to the Galaxy entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-4",
        "name": "The Hitchhiker's Guide to the Galaxy entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-5",
        "name": "The Hitchhiker's Guide to the Galaxy entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-6",
        "name": "The Hitchhiker's Guide to the Galaxy entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-7",
        "name": "The Hitchhiker's Guide to the Galaxy entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-8",
        "name": "The Hitchhiker's Guide to the Galaxy entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-9",
        "name": "The Hitchhiker's Guide to the Galaxy entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-10",
        "name": "The Hitchhiker's Guide to the Galaxy entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-11",
        "name": "The Hitchhiker's Guide to the Galaxy entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-12",
        "name": "The Hitchhiker's Guide to the Galaxy entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-13",
        "name": "The Hitchhiker's Guide to the Galaxy entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-14",
        "name": "The Hitchhiker's Guide to the Galaxy entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-15",
        "name": "The Hitchhiker's Guide to the Galaxy entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-16",
        "name": "The Hitchhiker's Guide to the Galaxy entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-17",
        "name": "The Hitchhiker's Guide to the Galaxy entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-18",
        "name": "The Hitchhiker's Guide to the Galaxy entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-19",
        "name": "The Hitchhiker's Guide to the Galaxy entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-20",
        "name": "The Hitchhiker's Guide to the Galaxy entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-21",
        "name": "The Hitchhiker's Guide to the Galaxy entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-22",
        "name": "The Hitchhiker's Guide to the Galaxy entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-23",
        "name": "The Hitchhiker's Guide to the Galaxy entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hitchhikers-guide-entry-24",
        "name": "The Hitchhiker's Guide to the Galaxy entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Hitchhiker's Guide to the Galaxy.",
        "description": "A supporting encyclopedia entry in the The Hitchhiker's Guide to the Galaxy subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hitchhikers-guide",
        "hitchhikers-guide-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-places",
        "contains",
        "The Hitchhiker's Guide to the Galaxy places is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-events",
        "contains",
        "The Hitchhiker's Guide to the Galaxy events is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-objects",
        "contains",
        "The Hitchhiker's Guide to the Galaxy objects & artifacts is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-factions",
        "contains",
        "The Hitchhiker's Guide to the Galaxy factions & groups is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-concepts",
        "contains",
        "The Hitchhiker's Guide to the Galaxy concepts is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-eras",
        "contains",
        "The Hitchhiker's Guide to the Galaxy eras is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-works",
        "contains",
        "The Hitchhiker's Guide to the Galaxy works & media is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-symbols",
        "contains",
        "The Hitchhiker's Guide to the Galaxy symbols is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-controversies",
        "contains",
        "The Hitchhiker's Guide to the Galaxy controversies is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-sources",
        "contains",
        "The Hitchhiker's Guide to the Galaxy sources is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-geography",
        "contains",
        "The Hitchhiker's Guide to the Galaxy geography is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-legacy",
        "contains",
        "The Hitchhiker's Guide to the Galaxy legacy is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-practices",
        "contains",
        "The Hitchhiker's Guide to the Galaxy practices is a primary trailhead under The Hitchhiker's Guide to the Galaxy.",
        0.88,
        0.82
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-1",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-2",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-3",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-4",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-5",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-6",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-7",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-8",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-9",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-10",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-11",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-12",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-13",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-14",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-15",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-16",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-17",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-18",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-19",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-20",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-21",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-22",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-23",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ],
    [
        "hitchhikers-guide",
        "hitchhikers-guide-entry-24",
        "contains",
        "Supporting entry under The Hitchhiker's Guide to the Galaxy.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
