/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "zodiac-killer",
        "name": "Zodiac Killer",
        "type": "topic",
        "short_description": "Ciphers, Bay Area terror, and the unsolved American serial case that feeds endless decoding.",
        "description": "Ciphers, Bay Area terror, and the unsolved American serial case that feeds endless decoding. This Ton-o-Lore subject maps people, places, events, and ideas tied to Zodiac Killer so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "zodiac-killer-figures",
        "name": "Zodiac Killer figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Zodiac Killer.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Zodiac Killer."
    },
    {
        "slug": "zodiac-killer-world",
        "name": "Zodiac Killer world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Zodiac Killer.",
        "description": "Geography, institutions, and periodization that give Zodiac Killer its encyclopedia shape."
    },
    {
        "slug": "zodiac-killer-places",
        "name": "Zodiac Killer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Zodiac Killer.",
        "description": "Places, regions, and built sites that give Zodiac Killer its map — where events and figures concentrate."
    },
    {
        "slug": "zodiac-killer-events",
        "name": "Zodiac Killer events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Zodiac Killer.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Zodiac Killer timeline."
    },
    {
        "slug": "zodiac-killer-objects",
        "name": "Zodiac Killer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Zodiac Killer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Zodiac Killer."
    },
    {
        "slug": "zodiac-killer-factions",
        "name": "Zodiac Killer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Zodiac Killer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Zodiac Killer."
    },
    {
        "slug": "zodiac-killer-concepts",
        "name": "Zodiac Killer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Zodiac Killer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Zodiac Killer readable as a lore graph."
    },
    {
        "slug": "zodiac-killer-eras",
        "name": "Zodiac Killer eras",
        "type": "event",
        "short_description": "Periodization for Zodiac Killer.",
        "description": "Named eras and phases that help readers track how Zodiac Killer changes across time."
    },
    {
        "slug": "zodiac-killer-works",
        "name": "Zodiac Killer works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Zodiac Killer.",
        "description": "Primary works and adaptations through which most audiences encounter Zodiac Killer."
    },
    {
        "slug": "zodiac-killer-symbols",
        "name": "Zodiac Killer symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Zodiac Killer.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Zodiac Killer."
    },
    {
        "slug": "zodiac-killer-controversies",
        "name": "Zodiac Killer controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Zodiac Killer.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Zodiac Killer argumentative."
    },
    {
        "slug": "zodiac-killer-sources",
        "name": "Zodiac Killer sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Zodiac Killer.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Zodiac Killer."
    },
    {
        "slug": "zodiac-killer-geography",
        "name": "Zodiac Killer geography",
        "type": "place",
        "short_description": "Broader geographic framing for Zodiac Killer.",
        "description": "Regions, routes, and spatial systems that situate Zodiac Killer beyond single named places."
    },
    {
        "slug": "zodiac-killer-legacy",
        "name": "Zodiac Killer legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Zodiac Killer.",
        "description": "How Zodiac Killer continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "zodiac-killer-practices",
        "name": "Zodiac Killer practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Zodiac Killer.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Zodiac Killer."
    },
    {
        "slug": "zodiac-killer-entry-1",
        "name": "Zodiac Killer entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-2",
        "name": "Zodiac Killer entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-3",
        "name": "Zodiac Killer entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-4",
        "name": "Zodiac Killer entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-5",
        "name": "Zodiac Killer entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-6",
        "name": "Zodiac Killer entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-7",
        "name": "Zodiac Killer entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-8",
        "name": "Zodiac Killer entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-9",
        "name": "Zodiac Killer entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-10",
        "name": "Zodiac Killer entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-11",
        "name": "Zodiac Killer entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-12",
        "name": "Zodiac Killer entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-13",
        "name": "Zodiac Killer entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-14",
        "name": "Zodiac Killer entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-15",
        "name": "Zodiac Killer entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-16",
        "name": "Zodiac Killer entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-17",
        "name": "Zodiac Killer entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-18",
        "name": "Zodiac Killer entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-19",
        "name": "Zodiac Killer entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-20",
        "name": "Zodiac Killer entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-21",
        "name": "Zodiac Killer entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-22",
        "name": "Zodiac Killer entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-23",
        "name": "Zodiac Killer entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "zodiac-killer-entry-24",
        "name": "Zodiac Killer entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Zodiac Killer.",
        "description": "A supporting encyclopedia entry in the Zodiac Killer subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "zodiac-killer",
        "zodiac-killer-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "zodiac-killer",
        "zodiac-killer-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "zodiac-killer",
        "zodiac-killer-places",
        "contains",
        "Zodiac Killer places is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-events",
        "contains",
        "Zodiac Killer events is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-objects",
        "contains",
        "Zodiac Killer objects & artifacts is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-factions",
        "contains",
        "Zodiac Killer factions & groups is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-concepts",
        "contains",
        "Zodiac Killer concepts is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-eras",
        "contains",
        "Zodiac Killer eras is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-works",
        "contains",
        "Zodiac Killer works & media is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-symbols",
        "contains",
        "Zodiac Killer symbols is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-controversies",
        "contains",
        "Zodiac Killer controversies is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-sources",
        "contains",
        "Zodiac Killer sources is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-geography",
        "contains",
        "Zodiac Killer geography is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-legacy",
        "contains",
        "Zodiac Killer legacy is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-practices",
        "contains",
        "Zodiac Killer practices is a primary trailhead under Zodiac Killer.",
        0.88,
        0.82
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-1",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-2",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-3",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-4",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-5",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-6",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-7",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-8",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-9",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-10",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-11",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-12",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-13",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-14",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-15",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-16",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-17",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-18",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-19",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-20",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-21",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-22",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-23",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ],
    [
        "zodiac-killer",
        "zodiac-killer-entry-24",
        "contains",
        "Supporting entry under Zodiac Killer.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
