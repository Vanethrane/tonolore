/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "hardcore-history",
        "name": "Hardcore History",
        "type": "topic",
        "short_description": "Marathon historical narratives and Carlin’s signature long-form war and empire deep dives.",
        "description": "Marathon historical narratives and Carlin’s signature long-form war and empire deep dives. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hardcore History so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "hardcore-history-figures",
        "name": "Hardcore History figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hardcore History.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hardcore History."
    },
    {
        "slug": "hardcore-history-world",
        "name": "Hardcore History world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hardcore History.",
        "description": "Geography, institutions, and periodization that give Hardcore History its encyclopedia shape."
    },
    {
        "slug": "hardcore-history-places",
        "name": "Hardcore History places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hardcore History.",
        "description": "Places, regions, and built sites that give Hardcore History its map — where events and figures concentrate."
    },
    {
        "slug": "hardcore-history-events",
        "name": "Hardcore History events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hardcore History.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hardcore History timeline."
    },
    {
        "slug": "hardcore-history-objects",
        "name": "Hardcore History objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hardcore History.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hardcore History."
    },
    {
        "slug": "hardcore-history-factions",
        "name": "Hardcore History factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hardcore History.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hardcore History."
    },
    {
        "slug": "hardcore-history-concepts",
        "name": "Hardcore History concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hardcore History.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hardcore History readable as a lore graph."
    },
    {
        "slug": "hardcore-history-eras",
        "name": "Hardcore History eras",
        "type": "event",
        "short_description": "Periodization for Hardcore History.",
        "description": "Named eras and phases that help readers track how Hardcore History changes across time."
    },
    {
        "slug": "hardcore-history-works",
        "name": "Hardcore History works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hardcore History.",
        "description": "Primary works and adaptations through which most audiences encounter Hardcore History."
    },
    {
        "slug": "hardcore-history-symbols",
        "name": "Hardcore History symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hardcore History.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hardcore History."
    },
    {
        "slug": "hardcore-history-controversies",
        "name": "Hardcore History controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hardcore History.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hardcore History argumentative."
    },
    {
        "slug": "hardcore-history-sources",
        "name": "Hardcore History sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hardcore History.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hardcore History."
    },
    {
        "slug": "hardcore-history-geography",
        "name": "Hardcore History geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hardcore History.",
        "description": "Regions, routes, and spatial systems that situate Hardcore History beyond single named places."
    },
    {
        "slug": "hardcore-history-legacy",
        "name": "Hardcore History legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hardcore History.",
        "description": "How Hardcore History continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "hardcore-history-practices",
        "name": "Hardcore History practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hardcore History.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hardcore History."
    },
    {
        "slug": "hardcore-history-entry-1",
        "name": "Hardcore History entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-2",
        "name": "Hardcore History entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-3",
        "name": "Hardcore History entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-4",
        "name": "Hardcore History entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-5",
        "name": "Hardcore History entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-6",
        "name": "Hardcore History entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-7",
        "name": "Hardcore History entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-8",
        "name": "Hardcore History entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-9",
        "name": "Hardcore History entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-10",
        "name": "Hardcore History entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-11",
        "name": "Hardcore History entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-12",
        "name": "Hardcore History entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-13",
        "name": "Hardcore History entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-14",
        "name": "Hardcore History entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-15",
        "name": "Hardcore History entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-16",
        "name": "Hardcore History entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-17",
        "name": "Hardcore History entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-18",
        "name": "Hardcore History entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-19",
        "name": "Hardcore History entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-20",
        "name": "Hardcore History entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-21",
        "name": "Hardcore History entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-22",
        "name": "Hardcore History entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-23",
        "name": "Hardcore History entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "hardcore-history-entry-24",
        "name": "Hardcore History entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hardcore History.",
        "description": "A supporting encyclopedia entry in the Hardcore History subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "hardcore-history",
        "hardcore-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "hardcore-history",
        "hardcore-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "hardcore-history",
        "hardcore-history-places",
        "contains",
        "Hardcore History places is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-events",
        "contains",
        "Hardcore History events is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-objects",
        "contains",
        "Hardcore History objects & artifacts is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-factions",
        "contains",
        "Hardcore History factions & groups is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-concepts",
        "contains",
        "Hardcore History concepts is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-eras",
        "contains",
        "Hardcore History eras is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-works",
        "contains",
        "Hardcore History works & media is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-symbols",
        "contains",
        "Hardcore History symbols is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-controversies",
        "contains",
        "Hardcore History controversies is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-sources",
        "contains",
        "Hardcore History sources is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-geography",
        "contains",
        "Hardcore History geography is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-legacy",
        "contains",
        "Hardcore History legacy is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-practices",
        "contains",
        "Hardcore History practices is a primary trailhead under Hardcore History.",
        0.88,
        0.82
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-1",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-2",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-3",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-4",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-5",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-6",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-7",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-8",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-9",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-10",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-11",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-12",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-13",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-14",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-15",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-16",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-17",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-18",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-19",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-20",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-21",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-22",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-23",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ],
    [
        "hardcore-history",
        "hardcore-history-entry-24",
        "contains",
        "Supporting entry under Hardcore History.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
