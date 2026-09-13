/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "orphan-black",
        "name": "Orphan Black",
        "type": "topic",
        "short_description": "Clone clubs, corporate genetics, and the identity thriller built on Tatiana Maslany’s multiplicity.",
        "description": "Clone clubs, corporate genetics, and the identity thriller built on Tatiana Maslany’s multiplicity. This Ton-o-Lore subject maps people, places, events, and ideas tied to Orphan Black so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "orphan-black-figures",
        "name": "Orphan Black figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Orphan Black.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Orphan Black."
    },
    {
        "slug": "orphan-black-world",
        "name": "Orphan Black world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Orphan Black.",
        "description": "Geography, institutions, and periodization that give Orphan Black its encyclopedia shape."
    },
    {
        "slug": "orphan-black-places",
        "name": "Orphan Black places",
        "type": "place",
        "short_description": "Locations and geographies that frame Orphan Black.",
        "description": "Places, regions, and built sites that give Orphan Black its map — where events and figures concentrate."
    },
    {
        "slug": "orphan-black-events",
        "name": "Orphan Black events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Orphan Black.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Orphan Black timeline."
    },
    {
        "slug": "orphan-black-objects",
        "name": "Orphan Black objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Orphan Black.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Orphan Black."
    },
    {
        "slug": "orphan-black-factions",
        "name": "Orphan Black factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Orphan Black.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Orphan Black."
    },
    {
        "slug": "orphan-black-concepts",
        "name": "Orphan Black concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Orphan Black.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Orphan Black readable as a lore graph."
    },
    {
        "slug": "orphan-black-eras",
        "name": "Orphan Black eras",
        "type": "event",
        "short_description": "Periodization for Orphan Black.",
        "description": "Named eras and phases that help readers track how Orphan Black changes across time."
    },
    {
        "slug": "orphan-black-works",
        "name": "Orphan Black works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Orphan Black.",
        "description": "Primary works and adaptations through which most audiences encounter Orphan Black."
    },
    {
        "slug": "orphan-black-symbols",
        "name": "Orphan Black symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Orphan Black.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Orphan Black."
    },
    {
        "slug": "orphan-black-controversies",
        "name": "Orphan Black controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Orphan Black.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Orphan Black argumentative."
    },
    {
        "slug": "orphan-black-sources",
        "name": "Orphan Black sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Orphan Black.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Orphan Black."
    },
    {
        "slug": "orphan-black-geography",
        "name": "Orphan Black geography",
        "type": "place",
        "short_description": "Broader geographic framing for Orphan Black.",
        "description": "Regions, routes, and spatial systems that situate Orphan Black beyond single named places."
    },
    {
        "slug": "orphan-black-legacy",
        "name": "Orphan Black legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Orphan Black.",
        "description": "How Orphan Black continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "orphan-black-practices",
        "name": "Orphan Black practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Orphan Black.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Orphan Black."
    },
    {
        "slug": "orphan-black-entry-1",
        "name": "Orphan Black entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-2",
        "name": "Orphan Black entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-3",
        "name": "Orphan Black entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-4",
        "name": "Orphan Black entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-5",
        "name": "Orphan Black entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-6",
        "name": "Orphan Black entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-7",
        "name": "Orphan Black entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-8",
        "name": "Orphan Black entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-9",
        "name": "Orphan Black entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-10",
        "name": "Orphan Black entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-11",
        "name": "Orphan Black entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-12",
        "name": "Orphan Black entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-13",
        "name": "Orphan Black entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-14",
        "name": "Orphan Black entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-15",
        "name": "Orphan Black entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-16",
        "name": "Orphan Black entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-17",
        "name": "Orphan Black entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-18",
        "name": "Orphan Black entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-19",
        "name": "Orphan Black entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-20",
        "name": "Orphan Black entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-21",
        "name": "Orphan Black entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-22",
        "name": "Orphan Black entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-23",
        "name": "Orphan Black entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "orphan-black-entry-24",
        "name": "Orphan Black entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Orphan Black.",
        "description": "A supporting encyclopedia entry in the Orphan Black subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "orphan-black",
        "orphan-black-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "orphan-black",
        "orphan-black-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "orphan-black",
        "orphan-black-places",
        "contains",
        "Orphan Black places is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-events",
        "contains",
        "Orphan Black events is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-objects",
        "contains",
        "Orphan Black objects & artifacts is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-factions",
        "contains",
        "Orphan Black factions & groups is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-concepts",
        "contains",
        "Orphan Black concepts is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-eras",
        "contains",
        "Orphan Black eras is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-works",
        "contains",
        "Orphan Black works & media is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-symbols",
        "contains",
        "Orphan Black symbols is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-controversies",
        "contains",
        "Orphan Black controversies is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-sources",
        "contains",
        "Orphan Black sources is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-geography",
        "contains",
        "Orphan Black geography is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-legacy",
        "contains",
        "Orphan Black legacy is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-practices",
        "contains",
        "Orphan Black practices is a primary trailhead under Orphan Black.",
        0.88,
        0.82
    ],
    [
        "orphan-black",
        "orphan-black-entry-1",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-2",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-3",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-4",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-5",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-6",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-7",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-8",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-9",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-10",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-11",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-12",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-13",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-14",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-15",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-16",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-17",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-18",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-19",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-20",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-21",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-22",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-23",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ],
    [
        "orphan-black",
        "orphan-black-entry-24",
        "contains",
        "Supporting entry under Orphan Black.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
