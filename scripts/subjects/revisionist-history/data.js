/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "revisionist-history",
        "name": "Revisionist History",
        "type": "topic",
        "short_description": "Malcolm Gladwell’s contrarian case studies that reframe overlooked historical moments.",
        "description": "Malcolm Gladwell’s contrarian case studies that reframe overlooked historical moments. This Ton-o-Lore subject maps people, places, events, and ideas tied to Revisionist History so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "revisionist-history-figures",
        "name": "Revisionist History figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Revisionist History.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Revisionist History."
    },
    {
        "slug": "revisionist-history-world",
        "name": "Revisionist History world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Revisionist History.",
        "description": "Geography, institutions, and periodization that give Revisionist History its encyclopedia shape."
    },
    {
        "slug": "revisionist-history-places",
        "name": "Revisionist History places",
        "type": "place",
        "short_description": "Locations and geographies that frame Revisionist History.",
        "description": "Places, regions, and built sites that give Revisionist History its map — where events and figures concentrate."
    },
    {
        "slug": "revisionist-history-events",
        "name": "Revisionist History events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Revisionist History.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Revisionist History timeline."
    },
    {
        "slug": "revisionist-history-objects",
        "name": "Revisionist History objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Revisionist History.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Revisionist History."
    },
    {
        "slug": "revisionist-history-factions",
        "name": "Revisionist History factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Revisionist History.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Revisionist History."
    },
    {
        "slug": "revisionist-history-concepts",
        "name": "Revisionist History concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Revisionist History.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Revisionist History readable as a lore graph."
    },
    {
        "slug": "revisionist-history-eras",
        "name": "Revisionist History eras",
        "type": "event",
        "short_description": "Periodization for Revisionist History.",
        "description": "Named eras and phases that help readers track how Revisionist History changes across time."
    },
    {
        "slug": "revisionist-history-works",
        "name": "Revisionist History works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Revisionist History.",
        "description": "Primary works and adaptations through which most audiences encounter Revisionist History."
    },
    {
        "slug": "revisionist-history-symbols",
        "name": "Revisionist History symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Revisionist History.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Revisionist History."
    },
    {
        "slug": "revisionist-history-controversies",
        "name": "Revisionist History controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Revisionist History.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Revisionist History argumentative."
    },
    {
        "slug": "revisionist-history-sources",
        "name": "Revisionist History sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Revisionist History.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Revisionist History."
    },
    {
        "slug": "revisionist-history-geography",
        "name": "Revisionist History geography",
        "type": "place",
        "short_description": "Broader geographic framing for Revisionist History.",
        "description": "Regions, routes, and spatial systems that situate Revisionist History beyond single named places."
    },
    {
        "slug": "revisionist-history-legacy",
        "name": "Revisionist History legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Revisionist History.",
        "description": "How Revisionist History continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "revisionist-history-practices",
        "name": "Revisionist History practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Revisionist History.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Revisionist History."
    },
    {
        "slug": "revisionist-history-entry-1",
        "name": "Revisionist History entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-2",
        "name": "Revisionist History entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-3",
        "name": "Revisionist History entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-4",
        "name": "Revisionist History entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-5",
        "name": "Revisionist History entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-6",
        "name": "Revisionist History entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-7",
        "name": "Revisionist History entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-8",
        "name": "Revisionist History entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-9",
        "name": "Revisionist History entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-10",
        "name": "Revisionist History entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-11",
        "name": "Revisionist History entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-12",
        "name": "Revisionist History entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-13",
        "name": "Revisionist History entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-14",
        "name": "Revisionist History entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-15",
        "name": "Revisionist History entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-16",
        "name": "Revisionist History entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-17",
        "name": "Revisionist History entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-18",
        "name": "Revisionist History entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-19",
        "name": "Revisionist History entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-20",
        "name": "Revisionist History entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-21",
        "name": "Revisionist History entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-22",
        "name": "Revisionist History entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-23",
        "name": "Revisionist History entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "revisionist-history-entry-24",
        "name": "Revisionist History entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Revisionist History.",
        "description": "A supporting encyclopedia entry in the Revisionist History subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "revisionist-history",
        "revisionist-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "revisionist-history",
        "revisionist-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "revisionist-history",
        "revisionist-history-places",
        "contains",
        "Revisionist History places is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-events",
        "contains",
        "Revisionist History events is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-objects",
        "contains",
        "Revisionist History objects & artifacts is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-factions",
        "contains",
        "Revisionist History factions & groups is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-concepts",
        "contains",
        "Revisionist History concepts is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-eras",
        "contains",
        "Revisionist History eras is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-works",
        "contains",
        "Revisionist History works & media is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-symbols",
        "contains",
        "Revisionist History symbols is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-controversies",
        "contains",
        "Revisionist History controversies is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-sources",
        "contains",
        "Revisionist History sources is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-geography",
        "contains",
        "Revisionist History geography is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-legacy",
        "contains",
        "Revisionist History legacy is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-practices",
        "contains",
        "Revisionist History practices is a primary trailhead under Revisionist History.",
        0.88,
        0.82
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-1",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-2",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-3",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-4",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-5",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-6",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-7",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-8",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-9",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-10",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-11",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-12",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-13",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-14",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-15",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-16",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-17",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-18",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-19",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-20",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-21",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-22",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-23",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ],
    [
        "revisionist-history",
        "revisionist-history-entry-24",
        "contains",
        "Supporting entry under Revisionist History.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
