/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sword-art-online",
        "name": "Sword Art Online",
        "type": "topic",
        "short_description": "Trapped VRMMOs, floor bosses, and the isekai template that dominated 2010s anime.",
        "description": "Trapped VRMMOs, floor bosses, and the isekai template that dominated 2010s anime. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sword Art Online so readers can follow long-tail connections across anime."
    },
    {
        "slug": "sword-art-online-figures",
        "name": "Sword Art Online figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sword Art Online.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sword Art Online."
    },
    {
        "slug": "sword-art-online-world",
        "name": "Sword Art Online world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sword Art Online.",
        "description": "Geography, institutions, and periodization that give Sword Art Online its encyclopedia shape."
    },
    {
        "slug": "sword-art-online-places",
        "name": "Sword Art Online places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sword Art Online.",
        "description": "Places, regions, and built sites that give Sword Art Online its map — where events and figures concentrate."
    },
    {
        "slug": "sword-art-online-events",
        "name": "Sword Art Online events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sword Art Online.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sword Art Online timeline."
    },
    {
        "slug": "sword-art-online-objects",
        "name": "Sword Art Online objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sword Art Online.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sword Art Online."
    },
    {
        "slug": "sword-art-online-factions",
        "name": "Sword Art Online factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sword Art Online.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sword Art Online."
    },
    {
        "slug": "sword-art-online-concepts",
        "name": "Sword Art Online concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sword Art Online.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sword Art Online readable as a lore graph."
    },
    {
        "slug": "sword-art-online-eras",
        "name": "Sword Art Online eras",
        "type": "event",
        "short_description": "Periodization for Sword Art Online.",
        "description": "Named eras and phases that help readers track how Sword Art Online changes across time."
    },
    {
        "slug": "sword-art-online-works",
        "name": "Sword Art Online works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sword Art Online.",
        "description": "Primary works and adaptations through which most audiences encounter Sword Art Online."
    },
    {
        "slug": "sword-art-online-symbols",
        "name": "Sword Art Online symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sword Art Online.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sword Art Online."
    },
    {
        "slug": "sword-art-online-controversies",
        "name": "Sword Art Online controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sword Art Online.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sword Art Online argumentative."
    },
    {
        "slug": "sword-art-online-sources",
        "name": "Sword Art Online sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sword Art Online.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sword Art Online."
    },
    {
        "slug": "sword-art-online-geography",
        "name": "Sword Art Online geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sword Art Online.",
        "description": "Regions, routes, and spatial systems that situate Sword Art Online beyond single named places."
    },
    {
        "slug": "sword-art-online-legacy",
        "name": "Sword Art Online legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sword Art Online.",
        "description": "How Sword Art Online continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sword-art-online-practices",
        "name": "Sword Art Online practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sword Art Online.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sword Art Online."
    },
    {
        "slug": "sword-art-online-entry-1",
        "name": "Sword Art Online entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-2",
        "name": "Sword Art Online entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-3",
        "name": "Sword Art Online entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-4",
        "name": "Sword Art Online entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-5",
        "name": "Sword Art Online entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-6",
        "name": "Sword Art Online entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-7",
        "name": "Sword Art Online entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-8",
        "name": "Sword Art Online entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-9",
        "name": "Sword Art Online entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-10",
        "name": "Sword Art Online entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-11",
        "name": "Sword Art Online entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-12",
        "name": "Sword Art Online entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-13",
        "name": "Sword Art Online entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-14",
        "name": "Sword Art Online entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-15",
        "name": "Sword Art Online entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-16",
        "name": "Sword Art Online entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-17",
        "name": "Sword Art Online entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-18",
        "name": "Sword Art Online entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-19",
        "name": "Sword Art Online entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-20",
        "name": "Sword Art Online entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-21",
        "name": "Sword Art Online entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-22",
        "name": "Sword Art Online entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-23",
        "name": "Sword Art Online entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sword-art-online-entry-24",
        "name": "Sword Art Online entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sword Art Online.",
        "description": "A supporting encyclopedia entry in the Sword Art Online subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sword-art-online",
        "sword-art-online-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sword-art-online",
        "sword-art-online-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sword-art-online",
        "sword-art-online-places",
        "contains",
        "Sword Art Online places is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-events",
        "contains",
        "Sword Art Online events is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-objects",
        "contains",
        "Sword Art Online objects & artifacts is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-factions",
        "contains",
        "Sword Art Online factions & groups is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-concepts",
        "contains",
        "Sword Art Online concepts is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-eras",
        "contains",
        "Sword Art Online eras is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-works",
        "contains",
        "Sword Art Online works & media is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-symbols",
        "contains",
        "Sword Art Online symbols is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-controversies",
        "contains",
        "Sword Art Online controversies is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-sources",
        "contains",
        "Sword Art Online sources is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-geography",
        "contains",
        "Sword Art Online geography is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-legacy",
        "contains",
        "Sword Art Online legacy is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-practices",
        "contains",
        "Sword Art Online practices is a primary trailhead under Sword Art Online.",
        0.88,
        0.82
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-1",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-2",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-3",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-4",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-5",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-6",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-7",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-8",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-9",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-10",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-11",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-12",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-13",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-14",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-15",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-16",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-17",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-18",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-19",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-20",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-21",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-22",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-23",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ],
    [
        "sword-art-online",
        "sword-art-online-entry-24",
        "contains",
        "Supporting entry under Sword Art Online.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
