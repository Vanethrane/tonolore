/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "phantom-of-the-opera-musical",
        "name": "The Phantom of the Opera",
        "type": "topic",
        "short_description": "Mask, chandelier, and Lloyd Webber’s long-running Gothic romance of the Paris Opera.",
        "description": "Mask, chandelier, and Lloyd Webber’s long-running Gothic romance of the Paris Opera. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Phantom of the Opera so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "phantom-of-the-opera-musical-figures",
        "name": "The Phantom of the Opera figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Phantom of the Opera.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Phantom of the Opera."
    },
    {
        "slug": "phantom-of-the-opera-musical-world",
        "name": "The Phantom of the Opera world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Phantom of the Opera.",
        "description": "Geography, institutions, and periodization that give The Phantom of the Opera its encyclopedia shape."
    },
    {
        "slug": "phantom-of-the-opera-musical-places",
        "name": "The Phantom of the Opera places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Phantom of the Opera.",
        "description": "Places, regions, and built sites that give The Phantom of the Opera its map — where events and figures concentrate."
    },
    {
        "slug": "phantom-of-the-opera-musical-events",
        "name": "The Phantom of the Opera events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Phantom of the Opera.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Phantom of the Opera timeline."
    },
    {
        "slug": "phantom-of-the-opera-musical-objects",
        "name": "The Phantom of the Opera objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Phantom of the Opera.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Phantom of the Opera."
    },
    {
        "slug": "phantom-of-the-opera-musical-factions",
        "name": "The Phantom of the Opera factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Phantom of the Opera.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Phantom of the Opera."
    },
    {
        "slug": "phantom-of-the-opera-musical-concepts",
        "name": "The Phantom of the Opera concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Phantom of the Opera.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Phantom of the Opera readable as a lore graph."
    },
    {
        "slug": "phantom-of-the-opera-musical-eras",
        "name": "The Phantom of the Opera eras",
        "type": "event",
        "short_description": "Periodization for The Phantom of the Opera.",
        "description": "Named eras and phases that help readers track how The Phantom of the Opera changes across time."
    },
    {
        "slug": "phantom-of-the-opera-musical-works",
        "name": "The Phantom of the Opera works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Phantom of the Opera.",
        "description": "Primary works and adaptations through which most audiences encounter The Phantom of the Opera."
    },
    {
        "slug": "phantom-of-the-opera-musical-symbols",
        "name": "The Phantom of the Opera symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Phantom of the Opera.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Phantom of the Opera."
    },
    {
        "slug": "phantom-of-the-opera-musical-controversies",
        "name": "The Phantom of the Opera controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Phantom of the Opera.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Phantom of the Opera argumentative."
    },
    {
        "slug": "phantom-of-the-opera-musical-sources",
        "name": "The Phantom of the Opera sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Phantom of the Opera.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Phantom of the Opera."
    },
    {
        "slug": "phantom-of-the-opera-musical-geography",
        "name": "The Phantom of the Opera geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Phantom of the Opera.",
        "description": "Regions, routes, and spatial systems that situate The Phantom of the Opera beyond single named places."
    },
    {
        "slug": "phantom-of-the-opera-musical-legacy",
        "name": "The Phantom of the Opera legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Phantom of the Opera.",
        "description": "How The Phantom of the Opera continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "phantom-of-the-opera-musical-practices",
        "name": "The Phantom of the Opera practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Phantom of the Opera.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Phantom of the Opera."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-1",
        "name": "The Phantom of the Opera entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-2",
        "name": "The Phantom of the Opera entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-3",
        "name": "The Phantom of the Opera entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-4",
        "name": "The Phantom of the Opera entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-5",
        "name": "The Phantom of the Opera entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-6",
        "name": "The Phantom of the Opera entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-7",
        "name": "The Phantom of the Opera entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-8",
        "name": "The Phantom of the Opera entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-9",
        "name": "The Phantom of the Opera entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-10",
        "name": "The Phantom of the Opera entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-11",
        "name": "The Phantom of the Opera entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-12",
        "name": "The Phantom of the Opera entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-13",
        "name": "The Phantom of the Opera entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-14",
        "name": "The Phantom of the Opera entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-15",
        "name": "The Phantom of the Opera entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-16",
        "name": "The Phantom of the Opera entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-17",
        "name": "The Phantom of the Opera entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-18",
        "name": "The Phantom of the Opera entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-19",
        "name": "The Phantom of the Opera entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-20",
        "name": "The Phantom of the Opera entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-21",
        "name": "The Phantom of the Opera entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-22",
        "name": "The Phantom of the Opera entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-23",
        "name": "The Phantom of the Opera entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "phantom-of-the-opera-musical-entry-24",
        "name": "The Phantom of the Opera entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Phantom of the Opera.",
        "description": "A supporting encyclopedia entry in the The Phantom of the Opera subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-places",
        "contains",
        "The Phantom of the Opera places is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-events",
        "contains",
        "The Phantom of the Opera events is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-objects",
        "contains",
        "The Phantom of the Opera objects & artifacts is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-factions",
        "contains",
        "The Phantom of the Opera factions & groups is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-concepts",
        "contains",
        "The Phantom of the Opera concepts is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-eras",
        "contains",
        "The Phantom of the Opera eras is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-works",
        "contains",
        "The Phantom of the Opera works & media is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-symbols",
        "contains",
        "The Phantom of the Opera symbols is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-controversies",
        "contains",
        "The Phantom of the Opera controversies is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-sources",
        "contains",
        "The Phantom of the Opera sources is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-geography",
        "contains",
        "The Phantom of the Opera geography is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-legacy",
        "contains",
        "The Phantom of the Opera legacy is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-practices",
        "contains",
        "The Phantom of the Opera practices is a primary trailhead under The Phantom of the Opera.",
        0.88,
        0.82
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-1",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-2",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-3",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-4",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-5",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-6",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-7",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-8",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-9",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-10",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-11",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-12",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-13",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-14",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-15",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-16",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-17",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-18",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-19",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-20",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-21",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-22",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-23",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ],
    [
        "phantom-of-the-opera-musical",
        "phantom-of-the-opera-musical-entry-24",
        "contains",
        "Supporting entry under The Phantom of the Opera.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
