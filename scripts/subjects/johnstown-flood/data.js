/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "johnstown-flood",
        "name": "Johnstown Flood",
        "type": "topic",
        "short_description": "Dam failure, 1889 Pennsylvania disaster, and the industrial negligence flood that shocked America.",
        "description": "Dam failure, 1889 Pennsylvania disaster, and the industrial negligence flood that shocked America. This Ton-o-Lore subject maps people, places, events, and ideas tied to Johnstown Flood so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "johnstown-flood-figures",
        "name": "Johnstown Flood figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Johnstown Flood.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Johnstown Flood."
    },
    {
        "slug": "johnstown-flood-world",
        "name": "Johnstown Flood world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Johnstown Flood.",
        "description": "Geography, institutions, and periodization that give Johnstown Flood its encyclopedia shape."
    },
    {
        "slug": "johnstown-flood-places",
        "name": "Johnstown Flood places",
        "type": "place",
        "short_description": "Locations and geographies that frame Johnstown Flood.",
        "description": "Places, regions, and built sites that give Johnstown Flood its map — where events and figures concentrate."
    },
    {
        "slug": "johnstown-flood-events",
        "name": "Johnstown Flood events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Johnstown Flood.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Johnstown Flood timeline."
    },
    {
        "slug": "johnstown-flood-objects",
        "name": "Johnstown Flood objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Johnstown Flood.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Johnstown Flood."
    },
    {
        "slug": "johnstown-flood-factions",
        "name": "Johnstown Flood factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Johnstown Flood.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Johnstown Flood."
    },
    {
        "slug": "johnstown-flood-concepts",
        "name": "Johnstown Flood concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Johnstown Flood.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Johnstown Flood readable as a lore graph."
    },
    {
        "slug": "johnstown-flood-eras",
        "name": "Johnstown Flood eras",
        "type": "event",
        "short_description": "Periodization for Johnstown Flood.",
        "description": "Named eras and phases that help readers track how Johnstown Flood changes across time."
    },
    {
        "slug": "johnstown-flood-works",
        "name": "Johnstown Flood works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Johnstown Flood.",
        "description": "Primary works and adaptations through which most audiences encounter Johnstown Flood."
    },
    {
        "slug": "johnstown-flood-symbols",
        "name": "Johnstown Flood symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Johnstown Flood.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Johnstown Flood."
    },
    {
        "slug": "johnstown-flood-controversies",
        "name": "Johnstown Flood controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Johnstown Flood.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Johnstown Flood argumentative."
    },
    {
        "slug": "johnstown-flood-sources",
        "name": "Johnstown Flood sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Johnstown Flood.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Johnstown Flood."
    },
    {
        "slug": "johnstown-flood-geography",
        "name": "Johnstown Flood geography",
        "type": "place",
        "short_description": "Broader geographic framing for Johnstown Flood.",
        "description": "Regions, routes, and spatial systems that situate Johnstown Flood beyond single named places."
    },
    {
        "slug": "johnstown-flood-legacy",
        "name": "Johnstown Flood legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Johnstown Flood.",
        "description": "How Johnstown Flood continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "johnstown-flood-practices",
        "name": "Johnstown Flood practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Johnstown Flood.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Johnstown Flood."
    },
    {
        "slug": "johnstown-flood-entry-1",
        "name": "Johnstown Flood entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-2",
        "name": "Johnstown Flood entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-3",
        "name": "Johnstown Flood entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-4",
        "name": "Johnstown Flood entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-5",
        "name": "Johnstown Flood entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-6",
        "name": "Johnstown Flood entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-7",
        "name": "Johnstown Flood entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-8",
        "name": "Johnstown Flood entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-9",
        "name": "Johnstown Flood entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-10",
        "name": "Johnstown Flood entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-11",
        "name": "Johnstown Flood entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-12",
        "name": "Johnstown Flood entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-13",
        "name": "Johnstown Flood entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-14",
        "name": "Johnstown Flood entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-15",
        "name": "Johnstown Flood entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-16",
        "name": "Johnstown Flood entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-17",
        "name": "Johnstown Flood entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-18",
        "name": "Johnstown Flood entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-19",
        "name": "Johnstown Flood entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-20",
        "name": "Johnstown Flood entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-21",
        "name": "Johnstown Flood entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-22",
        "name": "Johnstown Flood entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-23",
        "name": "Johnstown Flood entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "johnstown-flood-entry-24",
        "name": "Johnstown Flood entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Johnstown Flood.",
        "description": "A supporting encyclopedia entry in the Johnstown Flood subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "johnstown-flood",
        "johnstown-flood-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "johnstown-flood",
        "johnstown-flood-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "johnstown-flood",
        "johnstown-flood-places",
        "contains",
        "Johnstown Flood places is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-events",
        "contains",
        "Johnstown Flood events is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-objects",
        "contains",
        "Johnstown Flood objects & artifacts is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-factions",
        "contains",
        "Johnstown Flood factions & groups is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-concepts",
        "contains",
        "Johnstown Flood concepts is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-eras",
        "contains",
        "Johnstown Flood eras is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-works",
        "contains",
        "Johnstown Flood works & media is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-symbols",
        "contains",
        "Johnstown Flood symbols is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-controversies",
        "contains",
        "Johnstown Flood controversies is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-sources",
        "contains",
        "Johnstown Flood sources is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-geography",
        "contains",
        "Johnstown Flood geography is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-legacy",
        "contains",
        "Johnstown Flood legacy is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-practices",
        "contains",
        "Johnstown Flood practices is a primary trailhead under Johnstown Flood.",
        0.88,
        0.82
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-1",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-2",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-3",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-4",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-5",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-6",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-7",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-8",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-9",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-10",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-11",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-12",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-13",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-14",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-15",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-16",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-17",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-18",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-19",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-20",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-21",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-22",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-23",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ],
    [
        "johnstown-flood",
        "johnstown-flood-entry-24",
        "contains",
        "Supporting entry under Johnstown Flood.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
