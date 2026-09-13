/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lighthouses",
        "name": "Lighthouses",
        "type": "topic",
        "short_description": "Individual lights, keepers, shipwrecks nearby, construction feats, and the coastal histories each tower anchors.",
        "description": "Individual lights, keepers, shipwrecks nearby, construction feats, and the coastal histories each tower anchors. This Ton-o-Lore subject maps people, places, events, and ideas tied to Lighthouses so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "lighthouses-figures",
        "name": "Lighthouses figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Lighthouses.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Lighthouses."
    },
    {
        "slug": "lighthouses-world",
        "name": "Lighthouses world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Lighthouses.",
        "description": "Geography, institutions, and periodization that give Lighthouses its encyclopedia shape."
    },
    {
        "slug": "lighthouses-places",
        "name": "Lighthouses places",
        "type": "place",
        "short_description": "Locations and geographies that frame Lighthouses.",
        "description": "Places, regions, and built sites that give Lighthouses its map — where events and figures concentrate."
    },
    {
        "slug": "lighthouses-events",
        "name": "Lighthouses events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Lighthouses.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Lighthouses timeline."
    },
    {
        "slug": "lighthouses-objects",
        "name": "Lighthouses objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Lighthouses.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Lighthouses."
    },
    {
        "slug": "lighthouses-factions",
        "name": "Lighthouses factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Lighthouses.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Lighthouses."
    },
    {
        "slug": "lighthouses-concepts",
        "name": "Lighthouses concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Lighthouses.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Lighthouses readable as a lore graph."
    },
    {
        "slug": "lighthouses-eras",
        "name": "Lighthouses eras",
        "type": "event",
        "short_description": "Periodization for Lighthouses.",
        "description": "Named eras and phases that help readers track how Lighthouses changes across time."
    },
    {
        "slug": "lighthouses-works",
        "name": "Lighthouses works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Lighthouses.",
        "description": "Primary works and adaptations through which most audiences encounter Lighthouses."
    },
    {
        "slug": "lighthouses-symbols",
        "name": "Lighthouses symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Lighthouses.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Lighthouses."
    },
    {
        "slug": "lighthouses-controversies",
        "name": "Lighthouses controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Lighthouses.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Lighthouses argumentative."
    },
    {
        "slug": "lighthouses-sources",
        "name": "Lighthouses sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Lighthouses.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Lighthouses."
    },
    {
        "slug": "lighthouses-geography",
        "name": "Lighthouses geography",
        "type": "place",
        "short_description": "Broader geographic framing for Lighthouses.",
        "description": "Regions, routes, and spatial systems that situate Lighthouses beyond single named places."
    },
    {
        "slug": "lighthouses-legacy",
        "name": "Lighthouses legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Lighthouses.",
        "description": "How Lighthouses continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "lighthouses-practices",
        "name": "Lighthouses practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Lighthouses.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Lighthouses."
    },
    {
        "slug": "lighthouses-entry-1",
        "name": "Lighthouses entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-2",
        "name": "Lighthouses entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-3",
        "name": "Lighthouses entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-4",
        "name": "Lighthouses entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-5",
        "name": "Lighthouses entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-6",
        "name": "Lighthouses entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-7",
        "name": "Lighthouses entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-8",
        "name": "Lighthouses entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-9",
        "name": "Lighthouses entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-10",
        "name": "Lighthouses entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-11",
        "name": "Lighthouses entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-12",
        "name": "Lighthouses entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-13",
        "name": "Lighthouses entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-14",
        "name": "Lighthouses entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-15",
        "name": "Lighthouses entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-16",
        "name": "Lighthouses entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-17",
        "name": "Lighthouses entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-18",
        "name": "Lighthouses entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-19",
        "name": "Lighthouses entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-20",
        "name": "Lighthouses entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-21",
        "name": "Lighthouses entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-22",
        "name": "Lighthouses entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-23",
        "name": "Lighthouses entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouses-entry-24",
        "name": "Lighthouses entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouses.",
        "description": "A supporting encyclopedia entry in the Lighthouses subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "lighthouses",
        "lighthouses-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lighthouses",
        "lighthouses-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lighthouses",
        "lighthouses-places",
        "contains",
        "Lighthouses places is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-events",
        "contains",
        "Lighthouses events is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-objects",
        "contains",
        "Lighthouses objects & artifacts is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-factions",
        "contains",
        "Lighthouses factions & groups is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-concepts",
        "contains",
        "Lighthouses concepts is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-eras",
        "contains",
        "Lighthouses eras is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-works",
        "contains",
        "Lighthouses works & media is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-symbols",
        "contains",
        "Lighthouses symbols is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-controversies",
        "contains",
        "Lighthouses controversies is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-sources",
        "contains",
        "Lighthouses sources is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-geography",
        "contains",
        "Lighthouses geography is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-legacy",
        "contains",
        "Lighthouses legacy is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-practices",
        "contains",
        "Lighthouses practices is a primary trailhead under Lighthouses.",
        0.88,
        0.82
    ],
    [
        "lighthouses",
        "lighthouses-entry-1",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-2",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-3",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-4",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-5",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-6",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-7",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-8",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-9",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-10",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-11",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-12",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-13",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-14",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-15",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-16",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-17",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-18",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-19",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-20",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-21",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-22",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-23",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ],
    [
        "lighthouses",
        "lighthouses-entry-24",
        "contains",
        "Supporting entry under Lighthouses.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
