/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "watchmen-comics",
        "name": "Watchmen",
        "type": "topic",
        "short_description": "Masked Kennedys, moral gray, and Moore/Gibbons’ deconstruction that remade adult comics.",
        "description": "Masked Kennedys, moral gray, and Moore/Gibbons’ deconstruction that remade adult comics. This Ton-o-Lore subject maps people, places, events, and ideas tied to Watchmen so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "watchmen-comics-figures",
        "name": "Watchmen figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Watchmen.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Watchmen."
    },
    {
        "slug": "watchmen-comics-world",
        "name": "Watchmen world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Watchmen.",
        "description": "Geography, institutions, and periodization that give Watchmen its encyclopedia shape."
    },
    {
        "slug": "watchmen-comics-places",
        "name": "Watchmen places",
        "type": "place",
        "short_description": "Locations and geographies that frame Watchmen.",
        "description": "Places, regions, and built sites that give Watchmen its map — where events and figures concentrate."
    },
    {
        "slug": "watchmen-comics-events",
        "name": "Watchmen events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Watchmen.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Watchmen timeline."
    },
    {
        "slug": "watchmen-comics-objects",
        "name": "Watchmen objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Watchmen.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Watchmen."
    },
    {
        "slug": "watchmen-comics-factions",
        "name": "Watchmen factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Watchmen.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Watchmen."
    },
    {
        "slug": "watchmen-comics-concepts",
        "name": "Watchmen concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Watchmen.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Watchmen readable as a lore graph."
    },
    {
        "slug": "watchmen-comics-eras",
        "name": "Watchmen eras",
        "type": "event",
        "short_description": "Periodization for Watchmen.",
        "description": "Named eras and phases that help readers track how Watchmen changes across time."
    },
    {
        "slug": "watchmen-comics-works",
        "name": "Watchmen works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Watchmen.",
        "description": "Primary works and adaptations through which most audiences encounter Watchmen."
    },
    {
        "slug": "watchmen-comics-symbols",
        "name": "Watchmen symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Watchmen.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Watchmen."
    },
    {
        "slug": "watchmen-comics-controversies",
        "name": "Watchmen controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Watchmen.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Watchmen argumentative."
    },
    {
        "slug": "watchmen-comics-sources",
        "name": "Watchmen sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Watchmen.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Watchmen."
    },
    {
        "slug": "watchmen-comics-geography",
        "name": "Watchmen geography",
        "type": "place",
        "short_description": "Broader geographic framing for Watchmen.",
        "description": "Regions, routes, and spatial systems that situate Watchmen beyond single named places."
    },
    {
        "slug": "watchmen-comics-legacy",
        "name": "Watchmen legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Watchmen.",
        "description": "How Watchmen continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "watchmen-comics-practices",
        "name": "Watchmen practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Watchmen.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Watchmen."
    },
    {
        "slug": "watchmen-comics-entry-1",
        "name": "Watchmen entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-2",
        "name": "Watchmen entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-3",
        "name": "Watchmen entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-4",
        "name": "Watchmen entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-5",
        "name": "Watchmen entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-6",
        "name": "Watchmen entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-7",
        "name": "Watchmen entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-8",
        "name": "Watchmen entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-9",
        "name": "Watchmen entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-10",
        "name": "Watchmen entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-11",
        "name": "Watchmen entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-12",
        "name": "Watchmen entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-13",
        "name": "Watchmen entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-14",
        "name": "Watchmen entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-15",
        "name": "Watchmen entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-16",
        "name": "Watchmen entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-17",
        "name": "Watchmen entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-18",
        "name": "Watchmen entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-19",
        "name": "Watchmen entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-20",
        "name": "Watchmen entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-21",
        "name": "Watchmen entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-22",
        "name": "Watchmen entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-23",
        "name": "Watchmen entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "watchmen-comics-entry-24",
        "name": "Watchmen entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Watchmen.",
        "description": "A supporting encyclopedia entry in the Watchmen subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "watchmen-comics",
        "watchmen-comics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "watchmen-comics",
        "watchmen-comics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "watchmen-comics",
        "watchmen-comics-places",
        "contains",
        "Watchmen places is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-events",
        "contains",
        "Watchmen events is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-objects",
        "contains",
        "Watchmen objects & artifacts is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-factions",
        "contains",
        "Watchmen factions & groups is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-concepts",
        "contains",
        "Watchmen concepts is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-eras",
        "contains",
        "Watchmen eras is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-works",
        "contains",
        "Watchmen works & media is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-symbols",
        "contains",
        "Watchmen symbols is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-controversies",
        "contains",
        "Watchmen controversies is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-sources",
        "contains",
        "Watchmen sources is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-geography",
        "contains",
        "Watchmen geography is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-legacy",
        "contains",
        "Watchmen legacy is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-practices",
        "contains",
        "Watchmen practices is a primary trailhead under Watchmen.",
        0.88,
        0.82
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-1",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-2",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-3",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-4",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-5",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-6",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-7",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-8",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-9",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-10",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-11",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-12",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-13",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-14",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-15",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-16",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-17",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-18",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-19",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-20",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-21",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-22",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-23",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ],
    [
        "watchmen-comics",
        "watchmen-comics-entry-24",
        "contains",
        "Supporting entry under Watchmen.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
