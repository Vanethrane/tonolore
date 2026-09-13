/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "abandoned-places",
        "name": "Abandoned places",
        "type": "topic",
        "short_description": "Individual sites, prior owners, disasters, photographs, legends, and the histories that emptied them.",
        "description": "Individual sites, prior owners, disasters, photographs, legends, and the histories that emptied them. This Ton-o-Lore subject maps people, places, events, and ideas tied to Abandoned places so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "abandoned-places-figures",
        "name": "Abandoned places figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Abandoned places.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Abandoned places."
    },
    {
        "slug": "abandoned-places-world",
        "name": "Abandoned places world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Abandoned places.",
        "description": "Geography, institutions, and periodization that give Abandoned places its encyclopedia shape."
    },
    {
        "slug": "abandoned-places-places",
        "name": "Abandoned places places",
        "type": "place",
        "short_description": "Locations and geographies that frame Abandoned places.",
        "description": "Places, regions, and built sites that give Abandoned places its map — where events and figures concentrate."
    },
    {
        "slug": "abandoned-places-events",
        "name": "Abandoned places events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Abandoned places.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Abandoned places timeline."
    },
    {
        "slug": "abandoned-places-objects",
        "name": "Abandoned places objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Abandoned places.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Abandoned places."
    },
    {
        "slug": "abandoned-places-factions",
        "name": "Abandoned places factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Abandoned places.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Abandoned places."
    },
    {
        "slug": "abandoned-places-concepts",
        "name": "Abandoned places concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Abandoned places.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Abandoned places readable as a lore graph."
    },
    {
        "slug": "abandoned-places-eras",
        "name": "Abandoned places eras",
        "type": "event",
        "short_description": "Periodization for Abandoned places.",
        "description": "Named eras and phases that help readers track how Abandoned places changes across time."
    },
    {
        "slug": "abandoned-places-works",
        "name": "Abandoned places works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Abandoned places.",
        "description": "Primary works and adaptations through which most audiences encounter Abandoned places."
    },
    {
        "slug": "abandoned-places-symbols",
        "name": "Abandoned places symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Abandoned places.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Abandoned places."
    },
    {
        "slug": "abandoned-places-controversies",
        "name": "Abandoned places controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Abandoned places.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Abandoned places argumentative."
    },
    {
        "slug": "abandoned-places-sources",
        "name": "Abandoned places sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Abandoned places.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Abandoned places."
    },
    {
        "slug": "abandoned-places-geography",
        "name": "Abandoned places geography",
        "type": "place",
        "short_description": "Broader geographic framing for Abandoned places.",
        "description": "Regions, routes, and spatial systems that situate Abandoned places beyond single named places."
    },
    {
        "slug": "abandoned-places-legacy",
        "name": "Abandoned places legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Abandoned places.",
        "description": "How Abandoned places continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "abandoned-places-practices",
        "name": "Abandoned places practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Abandoned places.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Abandoned places."
    },
    {
        "slug": "abandoned-places-entry-1",
        "name": "Abandoned places entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-2",
        "name": "Abandoned places entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-3",
        "name": "Abandoned places entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-4",
        "name": "Abandoned places entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-5",
        "name": "Abandoned places entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-6",
        "name": "Abandoned places entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-7",
        "name": "Abandoned places entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-8",
        "name": "Abandoned places entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-9",
        "name": "Abandoned places entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-10",
        "name": "Abandoned places entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-11",
        "name": "Abandoned places entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-12",
        "name": "Abandoned places entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-13",
        "name": "Abandoned places entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-14",
        "name": "Abandoned places entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-15",
        "name": "Abandoned places entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-16",
        "name": "Abandoned places entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-17",
        "name": "Abandoned places entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-18",
        "name": "Abandoned places entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-19",
        "name": "Abandoned places entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-20",
        "name": "Abandoned places entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-21",
        "name": "Abandoned places entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-22",
        "name": "Abandoned places entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-23",
        "name": "Abandoned places entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "abandoned-places-entry-24",
        "name": "Abandoned places entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Abandoned places.",
        "description": "A supporting encyclopedia entry in the Abandoned places subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "abandoned-places",
        "abandoned-places-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "abandoned-places",
        "abandoned-places-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "abandoned-places",
        "abandoned-places-places",
        "contains",
        "Abandoned places places is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-events",
        "contains",
        "Abandoned places events is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-objects",
        "contains",
        "Abandoned places objects & artifacts is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-factions",
        "contains",
        "Abandoned places factions & groups is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-concepts",
        "contains",
        "Abandoned places concepts is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-eras",
        "contains",
        "Abandoned places eras is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-works",
        "contains",
        "Abandoned places works & media is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-symbols",
        "contains",
        "Abandoned places symbols is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-controversies",
        "contains",
        "Abandoned places controversies is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-sources",
        "contains",
        "Abandoned places sources is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-geography",
        "contains",
        "Abandoned places geography is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-legacy",
        "contains",
        "Abandoned places legacy is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-practices",
        "contains",
        "Abandoned places practices is a primary trailhead under Abandoned places.",
        0.88,
        0.82
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-1",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-2",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-3",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-4",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-5",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-6",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-7",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-8",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-9",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-10",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-11",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-12",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-13",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-14",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-15",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-16",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-17",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-18",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-19",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-20",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-21",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-22",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-23",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ],
    [
        "abandoned-places",
        "abandoned-places-entry-24",
        "contains",
        "Supporting entry under Abandoned places.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
