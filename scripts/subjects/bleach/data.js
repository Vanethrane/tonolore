/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bleach",
        "name": "Bleach",
        "type": "topic",
        "short_description": "Soul Society, Hollows, and the long-running shinigami battle manga-anime continuum.",
        "description": "Soul Society, Hollows, and the long-running shinigami battle manga-anime continuum. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bleach so readers can follow long-tail connections across anime."
    },
    {
        "slug": "bleach-figures",
        "name": "Bleach figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bleach.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bleach."
    },
    {
        "slug": "bleach-world",
        "name": "Bleach world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bleach.",
        "description": "Geography, institutions, and periodization that give Bleach its encyclopedia shape."
    },
    {
        "slug": "bleach-places",
        "name": "Bleach places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bleach.",
        "description": "Places, regions, and built sites that give Bleach its map — where events and figures concentrate."
    },
    {
        "slug": "bleach-events",
        "name": "Bleach events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bleach.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bleach timeline."
    },
    {
        "slug": "bleach-objects",
        "name": "Bleach objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bleach.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bleach."
    },
    {
        "slug": "bleach-factions",
        "name": "Bleach factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bleach.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bleach."
    },
    {
        "slug": "bleach-concepts",
        "name": "Bleach concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bleach.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bleach readable as a lore graph."
    },
    {
        "slug": "bleach-eras",
        "name": "Bleach eras",
        "type": "event",
        "short_description": "Periodization for Bleach.",
        "description": "Named eras and phases that help readers track how Bleach changes across time."
    },
    {
        "slug": "bleach-works",
        "name": "Bleach works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bleach.",
        "description": "Primary works and adaptations through which most audiences encounter Bleach."
    },
    {
        "slug": "bleach-symbols",
        "name": "Bleach symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bleach.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bleach."
    },
    {
        "slug": "bleach-controversies",
        "name": "Bleach controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bleach.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bleach argumentative."
    },
    {
        "slug": "bleach-sources",
        "name": "Bleach sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bleach.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bleach."
    },
    {
        "slug": "bleach-geography",
        "name": "Bleach geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bleach.",
        "description": "Regions, routes, and spatial systems that situate Bleach beyond single named places."
    },
    {
        "slug": "bleach-legacy",
        "name": "Bleach legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bleach.",
        "description": "How Bleach continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bleach-practices",
        "name": "Bleach practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bleach.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bleach."
    },
    {
        "slug": "bleach-entry-1",
        "name": "Bleach entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-2",
        "name": "Bleach entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-3",
        "name": "Bleach entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-4",
        "name": "Bleach entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-5",
        "name": "Bleach entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-6",
        "name": "Bleach entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-7",
        "name": "Bleach entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-8",
        "name": "Bleach entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-9",
        "name": "Bleach entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-10",
        "name": "Bleach entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-11",
        "name": "Bleach entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-12",
        "name": "Bleach entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-13",
        "name": "Bleach entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-14",
        "name": "Bleach entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-15",
        "name": "Bleach entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-16",
        "name": "Bleach entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-17",
        "name": "Bleach entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-18",
        "name": "Bleach entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-19",
        "name": "Bleach entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-20",
        "name": "Bleach entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-21",
        "name": "Bleach entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-22",
        "name": "Bleach entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-23",
        "name": "Bleach entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bleach-entry-24",
        "name": "Bleach entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bleach.",
        "description": "A supporting encyclopedia entry in the Bleach subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bleach",
        "bleach-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bleach",
        "bleach-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bleach",
        "bleach-places",
        "contains",
        "Bleach places is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-events",
        "contains",
        "Bleach events is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-objects",
        "contains",
        "Bleach objects & artifacts is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-factions",
        "contains",
        "Bleach factions & groups is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-concepts",
        "contains",
        "Bleach concepts is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-eras",
        "contains",
        "Bleach eras is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-works",
        "contains",
        "Bleach works & media is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-symbols",
        "contains",
        "Bleach symbols is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-controversies",
        "contains",
        "Bleach controversies is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-sources",
        "contains",
        "Bleach sources is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-geography",
        "contains",
        "Bleach geography is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-legacy",
        "contains",
        "Bleach legacy is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-practices",
        "contains",
        "Bleach practices is a primary trailhead under Bleach.",
        0.88,
        0.82
    ],
    [
        "bleach",
        "bleach-entry-1",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-2",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-3",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-4",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-5",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-6",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-7",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-8",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-9",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-10",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-11",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-12",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-13",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-14",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-15",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-16",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-17",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-18",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-19",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-20",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-21",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-22",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-23",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ],
    [
        "bleach",
        "bleach-entry-24",
        "contains",
        "Supporting entry under Bleach.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
