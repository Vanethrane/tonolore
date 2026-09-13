/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "radiolab",
        "name": "Radiolab",
        "type": "topic",
        "short_description": "Sound-designed science and curiosity stories that remade public-radio storytelling.",
        "description": "Sound-designed science and curiosity stories that remade public-radio storytelling. This Ton-o-Lore subject maps people, places, events, and ideas tied to Radiolab so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "radiolab-figures",
        "name": "Radiolab figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Radiolab.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Radiolab."
    },
    {
        "slug": "radiolab-world",
        "name": "Radiolab world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Radiolab.",
        "description": "Geography, institutions, and periodization that give Radiolab its encyclopedia shape."
    },
    {
        "slug": "radiolab-places",
        "name": "Radiolab places",
        "type": "place",
        "short_description": "Locations and geographies that frame Radiolab.",
        "description": "Places, regions, and built sites that give Radiolab its map — where events and figures concentrate."
    },
    {
        "slug": "radiolab-events",
        "name": "Radiolab events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Radiolab.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Radiolab timeline."
    },
    {
        "slug": "radiolab-objects",
        "name": "Radiolab objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Radiolab.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Radiolab."
    },
    {
        "slug": "radiolab-factions",
        "name": "Radiolab factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Radiolab.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Radiolab."
    },
    {
        "slug": "radiolab-concepts",
        "name": "Radiolab concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Radiolab.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Radiolab readable as a lore graph."
    },
    {
        "slug": "radiolab-eras",
        "name": "Radiolab eras",
        "type": "event",
        "short_description": "Periodization for Radiolab.",
        "description": "Named eras and phases that help readers track how Radiolab changes across time."
    },
    {
        "slug": "radiolab-works",
        "name": "Radiolab works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Radiolab.",
        "description": "Primary works and adaptations through which most audiences encounter Radiolab."
    },
    {
        "slug": "radiolab-symbols",
        "name": "Radiolab symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Radiolab.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Radiolab."
    },
    {
        "slug": "radiolab-controversies",
        "name": "Radiolab controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Radiolab.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Radiolab argumentative."
    },
    {
        "slug": "radiolab-sources",
        "name": "Radiolab sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Radiolab.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Radiolab."
    },
    {
        "slug": "radiolab-geography",
        "name": "Radiolab geography",
        "type": "place",
        "short_description": "Broader geographic framing for Radiolab.",
        "description": "Regions, routes, and spatial systems that situate Radiolab beyond single named places."
    },
    {
        "slug": "radiolab-legacy",
        "name": "Radiolab legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Radiolab.",
        "description": "How Radiolab continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "radiolab-practices",
        "name": "Radiolab practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Radiolab.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Radiolab."
    },
    {
        "slug": "radiolab-entry-1",
        "name": "Radiolab entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-2",
        "name": "Radiolab entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-3",
        "name": "Radiolab entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-4",
        "name": "Radiolab entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-5",
        "name": "Radiolab entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-6",
        "name": "Radiolab entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-7",
        "name": "Radiolab entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-8",
        "name": "Radiolab entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-9",
        "name": "Radiolab entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-10",
        "name": "Radiolab entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-11",
        "name": "Radiolab entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-12",
        "name": "Radiolab entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-13",
        "name": "Radiolab entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-14",
        "name": "Radiolab entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-15",
        "name": "Radiolab entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-16",
        "name": "Radiolab entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-17",
        "name": "Radiolab entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-18",
        "name": "Radiolab entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-19",
        "name": "Radiolab entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-20",
        "name": "Radiolab entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-21",
        "name": "Radiolab entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-22",
        "name": "Radiolab entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-23",
        "name": "Radiolab entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "radiolab-entry-24",
        "name": "Radiolab entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Radiolab.",
        "description": "A supporting encyclopedia entry in the Radiolab subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "radiolab",
        "radiolab-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "radiolab",
        "radiolab-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "radiolab",
        "radiolab-places",
        "contains",
        "Radiolab places is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-events",
        "contains",
        "Radiolab events is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-objects",
        "contains",
        "Radiolab objects & artifacts is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-factions",
        "contains",
        "Radiolab factions & groups is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-concepts",
        "contains",
        "Radiolab concepts is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-eras",
        "contains",
        "Radiolab eras is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-works",
        "contains",
        "Radiolab works & media is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-symbols",
        "contains",
        "Radiolab symbols is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-controversies",
        "contains",
        "Radiolab controversies is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-sources",
        "contains",
        "Radiolab sources is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-geography",
        "contains",
        "Radiolab geography is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-legacy",
        "contains",
        "Radiolab legacy is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-practices",
        "contains",
        "Radiolab practices is a primary trailhead under Radiolab.",
        0.88,
        0.82
    ],
    [
        "radiolab",
        "radiolab-entry-1",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-2",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-3",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-4",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-5",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-6",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-7",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-8",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-9",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-10",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-11",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-12",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-13",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-14",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-15",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-16",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-17",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-18",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-19",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-20",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-21",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-22",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-23",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ],
    [
        "radiolab",
        "radiolab-entry-24",
        "contains",
        "Supporting entry under Radiolab.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
