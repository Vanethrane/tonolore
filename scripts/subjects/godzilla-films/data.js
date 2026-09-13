/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "godzilla-films",
        "name": "Godzilla films",
        "type": "topic",
        "short_description": "Kaiju eras, atomic allegory, and the longest-running monster film mythology.",
        "description": "Kaiju eras, atomic allegory, and the longest-running monster film mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Godzilla films so readers can follow long-tail connections across movies."
    },
    {
        "slug": "godzilla-films-figures",
        "name": "Godzilla films figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Godzilla films.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Godzilla films."
    },
    {
        "slug": "godzilla-films-world",
        "name": "Godzilla films world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Godzilla films.",
        "description": "Geography, institutions, and periodization that give Godzilla films its encyclopedia shape."
    },
    {
        "slug": "godzilla-films-places",
        "name": "Godzilla films places",
        "type": "place",
        "short_description": "Locations and geographies that frame Godzilla films.",
        "description": "Places, regions, and built sites that give Godzilla films its map — where events and figures concentrate."
    },
    {
        "slug": "godzilla-films-events",
        "name": "Godzilla films events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Godzilla films.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Godzilla films timeline."
    },
    {
        "slug": "godzilla-films-objects",
        "name": "Godzilla films objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Godzilla films.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Godzilla films."
    },
    {
        "slug": "godzilla-films-factions",
        "name": "Godzilla films factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Godzilla films.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Godzilla films."
    },
    {
        "slug": "godzilla-films-concepts",
        "name": "Godzilla films concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Godzilla films.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Godzilla films readable as a lore graph."
    },
    {
        "slug": "godzilla-films-eras",
        "name": "Godzilla films eras",
        "type": "event",
        "short_description": "Periodization for Godzilla films.",
        "description": "Named eras and phases that help readers track how Godzilla films changes across time."
    },
    {
        "slug": "godzilla-films-works",
        "name": "Godzilla films works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Godzilla films.",
        "description": "Primary works and adaptations through which most audiences encounter Godzilla films."
    },
    {
        "slug": "godzilla-films-symbols",
        "name": "Godzilla films symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Godzilla films.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Godzilla films."
    },
    {
        "slug": "godzilla-films-controversies",
        "name": "Godzilla films controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Godzilla films.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Godzilla films argumentative."
    },
    {
        "slug": "godzilla-films-sources",
        "name": "Godzilla films sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Godzilla films.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Godzilla films."
    },
    {
        "slug": "godzilla-films-geography",
        "name": "Godzilla films geography",
        "type": "place",
        "short_description": "Broader geographic framing for Godzilla films.",
        "description": "Regions, routes, and spatial systems that situate Godzilla films beyond single named places."
    },
    {
        "slug": "godzilla-films-legacy",
        "name": "Godzilla films legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Godzilla films.",
        "description": "How Godzilla films continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "godzilla-films-practices",
        "name": "Godzilla films practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Godzilla films.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Godzilla films."
    },
    {
        "slug": "godzilla-films-entry-1",
        "name": "Godzilla films entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-2",
        "name": "Godzilla films entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-3",
        "name": "Godzilla films entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-4",
        "name": "Godzilla films entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-5",
        "name": "Godzilla films entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-6",
        "name": "Godzilla films entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-7",
        "name": "Godzilla films entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-8",
        "name": "Godzilla films entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-9",
        "name": "Godzilla films entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-10",
        "name": "Godzilla films entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-11",
        "name": "Godzilla films entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-12",
        "name": "Godzilla films entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-13",
        "name": "Godzilla films entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-14",
        "name": "Godzilla films entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-15",
        "name": "Godzilla films entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-16",
        "name": "Godzilla films entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-17",
        "name": "Godzilla films entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-18",
        "name": "Godzilla films entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-19",
        "name": "Godzilla films entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-20",
        "name": "Godzilla films entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-21",
        "name": "Godzilla films entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-22",
        "name": "Godzilla films entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-23",
        "name": "Godzilla films entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "godzilla-films-entry-24",
        "name": "Godzilla films entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Godzilla films.",
        "description": "A supporting encyclopedia entry in the Godzilla films subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "godzilla-films",
        "godzilla-films-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "godzilla-films",
        "godzilla-films-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "godzilla-films",
        "godzilla-films-places",
        "contains",
        "Godzilla films places is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-events",
        "contains",
        "Godzilla films events is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-objects",
        "contains",
        "Godzilla films objects & artifacts is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-factions",
        "contains",
        "Godzilla films factions & groups is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-concepts",
        "contains",
        "Godzilla films concepts is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-eras",
        "contains",
        "Godzilla films eras is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-works",
        "contains",
        "Godzilla films works & media is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-symbols",
        "contains",
        "Godzilla films symbols is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-controversies",
        "contains",
        "Godzilla films controversies is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-sources",
        "contains",
        "Godzilla films sources is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-geography",
        "contains",
        "Godzilla films geography is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-legacy",
        "contains",
        "Godzilla films legacy is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-practices",
        "contains",
        "Godzilla films practices is a primary trailhead under Godzilla films.",
        0.88,
        0.82
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-1",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-2",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-3",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-4",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-5",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-6",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-7",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-8",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-9",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-10",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-11",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-12",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-13",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-14",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-15",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-16",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-17",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-18",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-19",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-20",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-21",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-22",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-23",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ],
    [
        "godzilla-films",
        "godzilla-films-entry-24",
        "contains",
        "Supporting entry under Godzilla films.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
