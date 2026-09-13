/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tambora-year-without-summer",
        "name": "Mount Tambora & Year Without a Summer",
        "type": "topic",
        "short_description": "1815 eruption, 1816 climate shock, and the volcanic winter that starved Europe and America.",
        "description": "1815 eruption, 1816 climate shock, and the volcanic winter that starved Europe and America. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mount Tambora & Year Without a Summer so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "tambora-year-without-summer-figures",
        "name": "Mount Tambora & Year Without a Summer figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mount Tambora & Year Without a Summer.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mount Tambora & Year Without a Summer."
    },
    {
        "slug": "tambora-year-without-summer-world",
        "name": "Mount Tambora & Year Without a Summer world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mount Tambora & Year Without a Summer.",
        "description": "Geography, institutions, and periodization that give Mount Tambora & Year Without a Summer its encyclopedia shape."
    },
    {
        "slug": "tambora-year-without-summer-places",
        "name": "Mount Tambora & Year Without a Summer places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mount Tambora & Year Without a Summer.",
        "description": "Places, regions, and built sites that give Mount Tambora & Year Without a Summer its map — where events and figures concentrate."
    },
    {
        "slug": "tambora-year-without-summer-events",
        "name": "Mount Tambora & Year Without a Summer events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mount Tambora & Year Without a Summer.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mount Tambora & Year Without a Summer timeline."
    },
    {
        "slug": "tambora-year-without-summer-objects",
        "name": "Mount Tambora & Year Without a Summer objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mount Tambora & Year Without a Summer.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mount Tambora & Year Without a Summer."
    },
    {
        "slug": "tambora-year-without-summer-factions",
        "name": "Mount Tambora & Year Without a Summer factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mount Tambora & Year Without a Summer.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mount Tambora & Year Without a Summer."
    },
    {
        "slug": "tambora-year-without-summer-concepts",
        "name": "Mount Tambora & Year Without a Summer concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mount Tambora & Year Without a Summer.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mount Tambora & Year Without a Summer readable as a lore graph."
    },
    {
        "slug": "tambora-year-without-summer-eras",
        "name": "Mount Tambora & Year Without a Summer eras",
        "type": "event",
        "short_description": "Periodization for Mount Tambora & Year Without a Summer.",
        "description": "Named eras and phases that help readers track how Mount Tambora & Year Without a Summer changes across time."
    },
    {
        "slug": "tambora-year-without-summer-works",
        "name": "Mount Tambora & Year Without a Summer works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mount Tambora & Year Without a Summer.",
        "description": "Primary works and adaptations through which most audiences encounter Mount Tambora & Year Without a Summer."
    },
    {
        "slug": "tambora-year-without-summer-symbols",
        "name": "Mount Tambora & Year Without a Summer symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mount Tambora & Year Without a Summer.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mount Tambora & Year Without a Summer."
    },
    {
        "slug": "tambora-year-without-summer-controversies",
        "name": "Mount Tambora & Year Without a Summer controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mount Tambora & Year Without a Summer.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mount Tambora & Year Without a Summer argumentative."
    },
    {
        "slug": "tambora-year-without-summer-sources",
        "name": "Mount Tambora & Year Without a Summer sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mount Tambora & Year Without a Summer.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mount Tambora & Year Without a Summer."
    },
    {
        "slug": "tambora-year-without-summer-geography",
        "name": "Mount Tambora & Year Without a Summer geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mount Tambora & Year Without a Summer.",
        "description": "Regions, routes, and spatial systems that situate Mount Tambora & Year Without a Summer beyond single named places."
    },
    {
        "slug": "tambora-year-without-summer-legacy",
        "name": "Mount Tambora & Year Without a Summer legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mount Tambora & Year Without a Summer.",
        "description": "How Mount Tambora & Year Without a Summer continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tambora-year-without-summer-practices",
        "name": "Mount Tambora & Year Without a Summer practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mount Tambora & Year Without a Summer.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mount Tambora & Year Without a Summer."
    },
    {
        "slug": "tambora-year-without-summer-entry-1",
        "name": "Mount Tambora & Year Without a Summer entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-2",
        "name": "Mount Tambora & Year Without a Summer entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-3",
        "name": "Mount Tambora & Year Without a Summer entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-4",
        "name": "Mount Tambora & Year Without a Summer entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-5",
        "name": "Mount Tambora & Year Without a Summer entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-6",
        "name": "Mount Tambora & Year Without a Summer entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-7",
        "name": "Mount Tambora & Year Without a Summer entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-8",
        "name": "Mount Tambora & Year Without a Summer entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-9",
        "name": "Mount Tambora & Year Without a Summer entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-10",
        "name": "Mount Tambora & Year Without a Summer entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-11",
        "name": "Mount Tambora & Year Without a Summer entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-12",
        "name": "Mount Tambora & Year Without a Summer entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-13",
        "name": "Mount Tambora & Year Without a Summer entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-14",
        "name": "Mount Tambora & Year Without a Summer entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-15",
        "name": "Mount Tambora & Year Without a Summer entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-16",
        "name": "Mount Tambora & Year Without a Summer entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-17",
        "name": "Mount Tambora & Year Without a Summer entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-18",
        "name": "Mount Tambora & Year Without a Summer entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-19",
        "name": "Mount Tambora & Year Without a Summer entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-20",
        "name": "Mount Tambora & Year Without a Summer entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-21",
        "name": "Mount Tambora & Year Without a Summer entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-22",
        "name": "Mount Tambora & Year Without a Summer entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-23",
        "name": "Mount Tambora & Year Without a Summer entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tambora-year-without-summer-entry-24",
        "name": "Mount Tambora & Year Without a Summer entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mount Tambora & Year Without a Summer.",
        "description": "A supporting encyclopedia entry in the Mount Tambora & Year Without a Summer subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-places",
        "contains",
        "Mount Tambora & Year Without a Summer places is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-events",
        "contains",
        "Mount Tambora & Year Without a Summer events is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-objects",
        "contains",
        "Mount Tambora & Year Without a Summer objects & artifacts is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-factions",
        "contains",
        "Mount Tambora & Year Without a Summer factions & groups is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-concepts",
        "contains",
        "Mount Tambora & Year Without a Summer concepts is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-eras",
        "contains",
        "Mount Tambora & Year Without a Summer eras is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-works",
        "contains",
        "Mount Tambora & Year Without a Summer works & media is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-symbols",
        "contains",
        "Mount Tambora & Year Without a Summer symbols is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-controversies",
        "contains",
        "Mount Tambora & Year Without a Summer controversies is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-sources",
        "contains",
        "Mount Tambora & Year Without a Summer sources is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-geography",
        "contains",
        "Mount Tambora & Year Without a Summer geography is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-legacy",
        "contains",
        "Mount Tambora & Year Without a Summer legacy is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-practices",
        "contains",
        "Mount Tambora & Year Without a Summer practices is a primary trailhead under Mount Tambora & Year Without a Summer.",
        0.88,
        0.82
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-1",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-2",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-3",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-4",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-5",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-6",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-7",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-8",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-9",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-10",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-11",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-12",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-13",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-14",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-15",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-16",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-17",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-18",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-19",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-20",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-21",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-22",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-23",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ],
    [
        "tambora-year-without-summer",
        "tambora-year-without-summer-entry-24",
        "contains",
        "Supporting entry under Mount Tambora & Year Without a Summer.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
