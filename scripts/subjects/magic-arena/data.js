/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "magic-arena",
        "name": "Magic: The Gathering Arena",
        "type": "topic",
        "short_description": "Digital MTG client, Alchemy formats, and the online home of tabletop Magic’s daily play.",
        "description": "Digital MTG client, Alchemy formats, and the online home of tabletop Magic’s daily play. This Ton-o-Lore subject maps people, places, events, and ideas tied to Magic: The Gathering Arena so readers can follow long-tail connections across card games."
    },
    {
        "slug": "magic-arena-figures",
        "name": "Magic: The Gathering Arena figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Magic: The Gathering Arena.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Magic: The Gathering Arena."
    },
    {
        "slug": "magic-arena-world",
        "name": "Magic: The Gathering Arena world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Magic: The Gathering Arena.",
        "description": "Geography, institutions, and periodization that give Magic: The Gathering Arena its encyclopedia shape."
    },
    {
        "slug": "magic-arena-places",
        "name": "Magic: The Gathering Arena places",
        "type": "place",
        "short_description": "Locations and geographies that frame Magic: The Gathering Arena.",
        "description": "Places, regions, and built sites that give Magic: The Gathering Arena its map — where events and figures concentrate."
    },
    {
        "slug": "magic-arena-events",
        "name": "Magic: The Gathering Arena events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Magic: The Gathering Arena.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Magic: The Gathering Arena timeline."
    },
    {
        "slug": "magic-arena-objects",
        "name": "Magic: The Gathering Arena objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Magic: The Gathering Arena.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Magic: The Gathering Arena."
    },
    {
        "slug": "magic-arena-factions",
        "name": "Magic: The Gathering Arena factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Magic: The Gathering Arena.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Magic: The Gathering Arena."
    },
    {
        "slug": "magic-arena-concepts",
        "name": "Magic: The Gathering Arena concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Magic: The Gathering Arena.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Magic: The Gathering Arena readable as a lore graph."
    },
    {
        "slug": "magic-arena-eras",
        "name": "Magic: The Gathering Arena eras",
        "type": "event",
        "short_description": "Periodization for Magic: The Gathering Arena.",
        "description": "Named eras and phases that help readers track how Magic: The Gathering Arena changes across time."
    },
    {
        "slug": "magic-arena-works",
        "name": "Magic: The Gathering Arena works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Magic: The Gathering Arena.",
        "description": "Primary works and adaptations through which most audiences encounter Magic: The Gathering Arena."
    },
    {
        "slug": "magic-arena-symbols",
        "name": "Magic: The Gathering Arena symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Magic: The Gathering Arena.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Magic: The Gathering Arena."
    },
    {
        "slug": "magic-arena-controversies",
        "name": "Magic: The Gathering Arena controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Magic: The Gathering Arena.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Magic: The Gathering Arena argumentative."
    },
    {
        "slug": "magic-arena-sources",
        "name": "Magic: The Gathering Arena sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Magic: The Gathering Arena.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Magic: The Gathering Arena."
    },
    {
        "slug": "magic-arena-geography",
        "name": "Magic: The Gathering Arena geography",
        "type": "place",
        "short_description": "Broader geographic framing for Magic: The Gathering Arena.",
        "description": "Regions, routes, and spatial systems that situate Magic: The Gathering Arena beyond single named places."
    },
    {
        "slug": "magic-arena-legacy",
        "name": "Magic: The Gathering Arena legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Magic: The Gathering Arena.",
        "description": "How Magic: The Gathering Arena continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "magic-arena-practices",
        "name": "Magic: The Gathering Arena practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Magic: The Gathering Arena.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Magic: The Gathering Arena."
    },
    {
        "slug": "magic-arena-entry-1",
        "name": "Magic: The Gathering Arena entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-2",
        "name": "Magic: The Gathering Arena entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-3",
        "name": "Magic: The Gathering Arena entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-4",
        "name": "Magic: The Gathering Arena entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-5",
        "name": "Magic: The Gathering Arena entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-6",
        "name": "Magic: The Gathering Arena entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-7",
        "name": "Magic: The Gathering Arena entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-8",
        "name": "Magic: The Gathering Arena entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-9",
        "name": "Magic: The Gathering Arena entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-10",
        "name": "Magic: The Gathering Arena entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-11",
        "name": "Magic: The Gathering Arena entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-12",
        "name": "Magic: The Gathering Arena entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-13",
        "name": "Magic: The Gathering Arena entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-14",
        "name": "Magic: The Gathering Arena entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-15",
        "name": "Magic: The Gathering Arena entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-16",
        "name": "Magic: The Gathering Arena entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-17",
        "name": "Magic: The Gathering Arena entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-18",
        "name": "Magic: The Gathering Arena entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-19",
        "name": "Magic: The Gathering Arena entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-20",
        "name": "Magic: The Gathering Arena entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-21",
        "name": "Magic: The Gathering Arena entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-22",
        "name": "Magic: The Gathering Arena entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-23",
        "name": "Magic: The Gathering Arena entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "magic-arena-entry-24",
        "name": "Magic: The Gathering Arena entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Magic: The Gathering Arena.",
        "description": "A supporting encyclopedia entry in the Magic: The Gathering Arena subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "magic-arena",
        "magic-arena-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "magic-arena",
        "magic-arena-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "magic-arena",
        "magic-arena-places",
        "contains",
        "Magic: The Gathering Arena places is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-events",
        "contains",
        "Magic: The Gathering Arena events is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-objects",
        "contains",
        "Magic: The Gathering Arena objects & artifacts is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-factions",
        "contains",
        "Magic: The Gathering Arena factions & groups is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-concepts",
        "contains",
        "Magic: The Gathering Arena concepts is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-eras",
        "contains",
        "Magic: The Gathering Arena eras is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-works",
        "contains",
        "Magic: The Gathering Arena works & media is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-symbols",
        "contains",
        "Magic: The Gathering Arena symbols is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-controversies",
        "contains",
        "Magic: The Gathering Arena controversies is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-sources",
        "contains",
        "Magic: The Gathering Arena sources is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-geography",
        "contains",
        "Magic: The Gathering Arena geography is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-legacy",
        "contains",
        "Magic: The Gathering Arena legacy is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-practices",
        "contains",
        "Magic: The Gathering Arena practices is a primary trailhead under Magic: The Gathering Arena.",
        0.88,
        0.82
    ],
    [
        "magic-arena",
        "magic-arena-entry-1",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-2",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-3",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-4",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-5",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-6",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-7",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-8",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-9",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-10",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-11",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-12",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-13",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-14",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-15",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-16",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-17",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-18",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-19",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-20",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-21",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-22",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-23",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ],
    [
        "magic-arena",
        "magic-arena-entry-24",
        "contains",
        "Supporting entry under Magic: The Gathering Arena.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
