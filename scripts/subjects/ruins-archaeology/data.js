/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ruins-archaeology",
        "name": "Ruins & archaeological sites",
        "type": "topic",
        "short_description": "Excavated cities, standing stones, and the built past recovered from earth.",
        "description": "Excavated cities, standing stones, and the built past recovered from earth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ruins & archaeological sites so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "ruins-archaeology-figures",
        "name": "Ruins & archaeological sites figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ruins & archaeological sites.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ruins & archaeological sites."
    },
    {
        "slug": "ruins-archaeology-world",
        "name": "Ruins & archaeological sites world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ruins & archaeological sites.",
        "description": "Geography, institutions, and periodization that give Ruins & archaeological sites its encyclopedia shape."
    },
    {
        "slug": "ruins-archaeology-places",
        "name": "Ruins & archaeological sites places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ruins & archaeological sites.",
        "description": "Places, regions, and built sites that give Ruins & archaeological sites its map — where events and figures concentrate."
    },
    {
        "slug": "ruins-archaeology-events",
        "name": "Ruins & archaeological sites events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ruins & archaeological sites.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ruins & archaeological sites timeline."
    },
    {
        "slug": "ruins-archaeology-objects",
        "name": "Ruins & archaeological sites objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ruins & archaeological sites.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ruins & archaeological sites."
    },
    {
        "slug": "ruins-archaeology-factions",
        "name": "Ruins & archaeological sites factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ruins & archaeological sites.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ruins & archaeological sites."
    },
    {
        "slug": "ruins-archaeology-concepts",
        "name": "Ruins & archaeological sites concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ruins & archaeological sites.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ruins & archaeological sites readable as a lore graph."
    },
    {
        "slug": "ruins-archaeology-eras",
        "name": "Ruins & archaeological sites eras",
        "type": "event",
        "short_description": "Periodization for Ruins & archaeological sites.",
        "description": "Named eras and phases that help readers track how Ruins & archaeological sites changes across time."
    },
    {
        "slug": "ruins-archaeology-works",
        "name": "Ruins & archaeological sites works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ruins & archaeological sites.",
        "description": "Primary works and adaptations through which most audiences encounter Ruins & archaeological sites."
    },
    {
        "slug": "ruins-archaeology-symbols",
        "name": "Ruins & archaeological sites symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ruins & archaeological sites.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ruins & archaeological sites."
    },
    {
        "slug": "ruins-archaeology-controversies",
        "name": "Ruins & archaeological sites controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ruins & archaeological sites.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ruins & archaeological sites argumentative."
    },
    {
        "slug": "ruins-archaeology-sources",
        "name": "Ruins & archaeological sites sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ruins & archaeological sites.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ruins & archaeological sites."
    },
    {
        "slug": "ruins-archaeology-geography",
        "name": "Ruins & archaeological sites geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ruins & archaeological sites.",
        "description": "Regions, routes, and spatial systems that situate Ruins & archaeological sites beyond single named places."
    },
    {
        "slug": "ruins-archaeology-legacy",
        "name": "Ruins & archaeological sites legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ruins & archaeological sites.",
        "description": "How Ruins & archaeological sites continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ruins-archaeology-practices",
        "name": "Ruins & archaeological sites practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ruins & archaeological sites.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ruins & archaeological sites."
    },
    {
        "slug": "ruins-archaeology-entry-1",
        "name": "Ruins & archaeological sites entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-2",
        "name": "Ruins & archaeological sites entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-3",
        "name": "Ruins & archaeological sites entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-4",
        "name": "Ruins & archaeological sites entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-5",
        "name": "Ruins & archaeological sites entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-6",
        "name": "Ruins & archaeological sites entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-7",
        "name": "Ruins & archaeological sites entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-8",
        "name": "Ruins & archaeological sites entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-9",
        "name": "Ruins & archaeological sites entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-10",
        "name": "Ruins & archaeological sites entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-11",
        "name": "Ruins & archaeological sites entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-12",
        "name": "Ruins & archaeological sites entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-13",
        "name": "Ruins & archaeological sites entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-14",
        "name": "Ruins & archaeological sites entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-15",
        "name": "Ruins & archaeological sites entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-16",
        "name": "Ruins & archaeological sites entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-17",
        "name": "Ruins & archaeological sites entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-18",
        "name": "Ruins & archaeological sites entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-19",
        "name": "Ruins & archaeological sites entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-20",
        "name": "Ruins & archaeological sites entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-21",
        "name": "Ruins & archaeological sites entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-22",
        "name": "Ruins & archaeological sites entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-23",
        "name": "Ruins & archaeological sites entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ruins-archaeology-entry-24",
        "name": "Ruins & archaeological sites entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ruins & archaeological sites.",
        "description": "A supporting encyclopedia entry in the Ruins & archaeological sites subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ruins-archaeology",
        "ruins-archaeology-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-places",
        "contains",
        "Ruins & archaeological sites places is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-events",
        "contains",
        "Ruins & archaeological sites events is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-objects",
        "contains",
        "Ruins & archaeological sites objects & artifacts is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-factions",
        "contains",
        "Ruins & archaeological sites factions & groups is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-concepts",
        "contains",
        "Ruins & archaeological sites concepts is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-eras",
        "contains",
        "Ruins & archaeological sites eras is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-works",
        "contains",
        "Ruins & archaeological sites works & media is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-symbols",
        "contains",
        "Ruins & archaeological sites symbols is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-controversies",
        "contains",
        "Ruins & archaeological sites controversies is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-sources",
        "contains",
        "Ruins & archaeological sites sources is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-geography",
        "contains",
        "Ruins & archaeological sites geography is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-legacy",
        "contains",
        "Ruins & archaeological sites legacy is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-practices",
        "contains",
        "Ruins & archaeological sites practices is a primary trailhead under Ruins & archaeological sites.",
        0.88,
        0.82
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-1",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-2",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-3",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-4",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-5",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-6",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-7",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-8",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-9",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-10",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-11",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-12",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-13",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-14",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-15",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-16",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-17",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-18",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-19",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-20",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-21",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-22",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-23",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ],
    [
        "ruins-archaeology",
        "ruins-archaeology-entry-24",
        "contains",
        "Supporting entry under Ruins & archaeological sites.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
