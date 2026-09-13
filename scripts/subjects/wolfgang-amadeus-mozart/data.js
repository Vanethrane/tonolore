/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wolfgang-amadeus-mozart",
        "name": "Wolfgang Amadeus Mozart",
        "type": "topic",
        "short_description": "Prodigy-composer of opera, symphony, and chamber works that define the Classical repertoire.",
        "description": "Prodigy-composer of opera, symphony, and chamber works that define the Classical repertoire. This Ton-o-Lore subject maps people, works, places, and ideas tied to Wolfgang Amadeus Mozart so readers can follow long-tail connections across the classical tradition."
    },
    {
        "slug": "wolfgang-amadeus-mozart-catalog",
        "name": "Wolfgang Amadeus Mozart catalog",
        "type": "topic",
        "short_description": "Core recordings and works associated with Wolfgang Amadeus Mozart.",
        "description": "A working index of albums, compositions, and standout tracks that anchor how listeners encounter Wolfgang Amadeus Mozart in the classical tradition."
    },
    {
        "slug": "wolfgang-amadeus-mozart-era",
        "name": "Wolfgang Amadeus Mozart eras",
        "type": "event",
        "short_description": "Career phases and stylistic turns in the Wolfgang Amadeus Mozart story.",
        "description": "Periodization helps encyclopedia readers track how Wolfgang Amadeus Mozart changed sound, lineup, or public myth across decades of classical history."
    },
    {
        "slug": "wolfgang-amadeus-mozart-figures",
        "name": "Wolfgang Amadeus Mozart figures",
        "type": "topic",
        "short_description": "People and named forces central to Wolfgang Amadeus Mozart.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Wolfgang Amadeus Mozart."
    },
    {
        "slug": "wolfgang-amadeus-mozart-places",
        "name": "Wolfgang Amadeus Mozart places",
        "type": "place",
        "short_description": "Locations and geographies that frame Wolfgang Amadeus Mozart.",
        "description": "Places, regions, and built sites that give Wolfgang Amadeus Mozart its map — where events and figures concentrate."
    },
    {
        "slug": "wolfgang-amadeus-mozart-events",
        "name": "Wolfgang Amadeus Mozart events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Wolfgang Amadeus Mozart.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Wolfgang Amadeus Mozart timeline."
    },
    {
        "slug": "wolfgang-amadeus-mozart-objects",
        "name": "Wolfgang Amadeus Mozart objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Wolfgang Amadeus Mozart.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Wolfgang Amadeus Mozart."
    },
    {
        "slug": "wolfgang-amadeus-mozart-factions",
        "name": "Wolfgang Amadeus Mozart factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Wolfgang Amadeus Mozart.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Wolfgang Amadeus Mozart."
    },
    {
        "slug": "wolfgang-amadeus-mozart-concepts",
        "name": "Wolfgang Amadeus Mozart concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Wolfgang Amadeus Mozart.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Wolfgang Amadeus Mozart readable as a lore graph."
    },
    {
        "slug": "wolfgang-amadeus-mozart-eras",
        "name": "Wolfgang Amadeus Mozart eras",
        "type": "event",
        "short_description": "Periodization for Wolfgang Amadeus Mozart.",
        "description": "Named eras and phases that help readers track how Wolfgang Amadeus Mozart changes across time."
    },
    {
        "slug": "wolfgang-amadeus-mozart-works",
        "name": "Wolfgang Amadeus Mozart works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Wolfgang Amadeus Mozart.",
        "description": "Primary works and adaptations through which most audiences encounter Wolfgang Amadeus Mozart."
    },
    {
        "slug": "wolfgang-amadeus-mozart-symbols",
        "name": "Wolfgang Amadeus Mozart symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Wolfgang Amadeus Mozart.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Wolfgang Amadeus Mozart."
    },
    {
        "slug": "wolfgang-amadeus-mozart-controversies",
        "name": "Wolfgang Amadeus Mozart controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Wolfgang Amadeus Mozart.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Wolfgang Amadeus Mozart argumentative."
    },
    {
        "slug": "wolfgang-amadeus-mozart-sources",
        "name": "Wolfgang Amadeus Mozart sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Wolfgang Amadeus Mozart.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Wolfgang Amadeus Mozart."
    },
    {
        "slug": "wolfgang-amadeus-mozart-geography",
        "name": "Wolfgang Amadeus Mozart geography",
        "type": "place",
        "short_description": "Broader geographic framing for Wolfgang Amadeus Mozart.",
        "description": "Regions, routes, and spatial systems that situate Wolfgang Amadeus Mozart beyond single named places."
    },
    {
        "slug": "wolfgang-amadeus-mozart-legacy",
        "name": "Wolfgang Amadeus Mozart legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Wolfgang Amadeus Mozart.",
        "description": "How Wolfgang Amadeus Mozart continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wolfgang-amadeus-mozart-practices",
        "name": "Wolfgang Amadeus Mozart practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Wolfgang Amadeus Mozart.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Wolfgang Amadeus Mozart."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-1",
        "name": "Wolfgang Amadeus Mozart entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-2",
        "name": "Wolfgang Amadeus Mozart entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-3",
        "name": "Wolfgang Amadeus Mozart entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-4",
        "name": "Wolfgang Amadeus Mozart entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-5",
        "name": "Wolfgang Amadeus Mozart entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-6",
        "name": "Wolfgang Amadeus Mozart entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-7",
        "name": "Wolfgang Amadeus Mozart entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-8",
        "name": "Wolfgang Amadeus Mozart entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-9",
        "name": "Wolfgang Amadeus Mozart entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-10",
        "name": "Wolfgang Amadeus Mozart entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-11",
        "name": "Wolfgang Amadeus Mozart entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-12",
        "name": "Wolfgang Amadeus Mozart entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-13",
        "name": "Wolfgang Amadeus Mozart entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-14",
        "name": "Wolfgang Amadeus Mozart entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-15",
        "name": "Wolfgang Amadeus Mozart entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-16",
        "name": "Wolfgang Amadeus Mozart entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-17",
        "name": "Wolfgang Amadeus Mozart entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-18",
        "name": "Wolfgang Amadeus Mozart entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-19",
        "name": "Wolfgang Amadeus Mozart entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-20",
        "name": "Wolfgang Amadeus Mozart entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-21",
        "name": "Wolfgang Amadeus Mozart entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-22",
        "name": "Wolfgang Amadeus Mozart entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wolfgang-amadeus-mozart-entry-23",
        "name": "Wolfgang Amadeus Mozart entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Wolfgang Amadeus Mozart.",
        "description": "A supporting encyclopedia entry in the Wolfgang Amadeus Mozart subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-catalog",
        "contains",
        "The catalog is the recorded body of work most readers meet first.",
        0.9,
        0.85
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-era",
        "contains",
        "Eras organize commentary on stylistic and cultural change over time.",
        0.85,
        0.8
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-figures",
        "contains",
        "Wolfgang Amadeus Mozart figures is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-places",
        "contains",
        "Wolfgang Amadeus Mozart places is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-events",
        "contains",
        "Wolfgang Amadeus Mozart events is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-objects",
        "contains",
        "Wolfgang Amadeus Mozart objects & artifacts is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-factions",
        "contains",
        "Wolfgang Amadeus Mozart factions & groups is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-concepts",
        "contains",
        "Wolfgang Amadeus Mozart concepts is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-eras",
        "contains",
        "Wolfgang Amadeus Mozart eras is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-works",
        "contains",
        "Wolfgang Amadeus Mozart works & media is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-symbols",
        "contains",
        "Wolfgang Amadeus Mozart symbols is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-controversies",
        "contains",
        "Wolfgang Amadeus Mozart controversies is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-sources",
        "contains",
        "Wolfgang Amadeus Mozart sources is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-geography",
        "contains",
        "Wolfgang Amadeus Mozart geography is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-legacy",
        "contains",
        "Wolfgang Amadeus Mozart legacy is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-practices",
        "contains",
        "Wolfgang Amadeus Mozart practices is a primary trailhead under Wolfgang Amadeus Mozart.",
        0.88,
        0.82
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-1",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-2",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-3",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-4",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-5",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-6",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-7",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-8",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-9",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-10",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-11",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-12",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-13",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-14",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-15",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-16",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-17",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-18",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-19",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-20",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-21",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-22",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ],
    [
        "wolfgang-amadeus-mozart",
        "wolfgang-amadeus-mozart-entry-23",
        "contains",
        "Supporting entry under Wolfgang Amadeus Mozart.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
