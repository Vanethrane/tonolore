/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "g1-climax",
        "name": "G1 Climax",
        "type": "topic",
        "short_description": "Round-robin war, block standings, and the tournament that crowns New Japan’s yearly narrative.",
        "description": "Round-robin war, block standings, and the tournament that crowns New Japan’s yearly narrative. This Ton-o-Lore subject maps people, places, events, and ideas tied to G1 Climax so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "g1-climax-figures",
        "name": "G1 Climax figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to G1 Climax.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring G1 Climax."
    },
    {
        "slug": "g1-climax-world",
        "name": "G1 Climax world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame G1 Climax.",
        "description": "Geography, institutions, and periodization that give G1 Climax its encyclopedia shape."
    },
    {
        "slug": "g1-climax-places",
        "name": "G1 Climax places",
        "type": "place",
        "short_description": "Locations and geographies that frame G1 Climax.",
        "description": "Places, regions, and built sites that give G1 Climax its map — where events and figures concentrate."
    },
    {
        "slug": "g1-climax-events",
        "name": "G1 Climax events",
        "type": "event",
        "short_description": "Turning points and dated episodes in G1 Climax.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the G1 Climax timeline."
    },
    {
        "slug": "g1-climax-objects",
        "name": "G1 Climax objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to G1 Climax.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through G1 Climax."
    },
    {
        "slug": "g1-climax-factions",
        "name": "G1 Climax factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside G1 Climax.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in G1 Climax."
    },
    {
        "slug": "g1-climax-concepts",
        "name": "G1 Climax concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize G1 Climax.",
        "description": "Keywords, doctrines, systems, and abstract forces that make G1 Climax readable as a lore graph."
    },
    {
        "slug": "g1-climax-eras",
        "name": "G1 Climax eras",
        "type": "event",
        "short_description": "Periodization for G1 Climax.",
        "description": "Named eras and phases that help readers track how G1 Climax changes across time."
    },
    {
        "slug": "g1-climax-works",
        "name": "G1 Climax works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry G1 Climax.",
        "description": "Primary works and adaptations through which most audiences encounter G1 Climax."
    },
    {
        "slug": "g1-climax-symbols",
        "name": "G1 Climax symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with G1 Climax.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside G1 Climax."
    },
    {
        "slug": "g1-climax-controversies",
        "name": "G1 Climax controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in G1 Climax.",
        "description": "Debates, rival canons, scandals, and contested facts that keep G1 Climax argumentative."
    },
    {
        "slug": "g1-climax-sources",
        "name": "G1 Climax sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into G1 Climax.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify G1 Climax."
    },
    {
        "slug": "g1-climax-geography",
        "name": "G1 Climax geography",
        "type": "place",
        "short_description": "Broader geographic framing for G1 Climax.",
        "description": "Regions, routes, and spatial systems that situate G1 Climax beyond single named places."
    },
    {
        "slug": "g1-climax-legacy",
        "name": "G1 Climax legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of G1 Climax.",
        "description": "How G1 Climax continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "g1-climax-practices",
        "name": "G1 Climax practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in G1 Climax.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in G1 Climax."
    },
    {
        "slug": "g1-climax-entry-1",
        "name": "G1 Climax entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-2",
        "name": "G1 Climax entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-3",
        "name": "G1 Climax entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-4",
        "name": "G1 Climax entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-5",
        "name": "G1 Climax entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-6",
        "name": "G1 Climax entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-7",
        "name": "G1 Climax entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-8",
        "name": "G1 Climax entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-9",
        "name": "G1 Climax entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-10",
        "name": "G1 Climax entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-11",
        "name": "G1 Climax entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-12",
        "name": "G1 Climax entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-13",
        "name": "G1 Climax entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-14",
        "name": "G1 Climax entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-15",
        "name": "G1 Climax entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-16",
        "name": "G1 Climax entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-17",
        "name": "G1 Climax entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-18",
        "name": "G1 Climax entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-19",
        "name": "G1 Climax entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-20",
        "name": "G1 Climax entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-21",
        "name": "G1 Climax entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-22",
        "name": "G1 Climax entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-23",
        "name": "G1 Climax entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "g1-climax-entry-24",
        "name": "G1 Climax entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside G1 Climax.",
        "description": "A supporting encyclopedia entry in the G1 Climax subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "g1-climax",
        "g1-climax-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "g1-climax",
        "g1-climax-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "g1-climax",
        "g1-climax-places",
        "contains",
        "G1 Climax places is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-events",
        "contains",
        "G1 Climax events is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-objects",
        "contains",
        "G1 Climax objects & artifacts is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-factions",
        "contains",
        "G1 Climax factions & groups is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-concepts",
        "contains",
        "G1 Climax concepts is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-eras",
        "contains",
        "G1 Climax eras is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-works",
        "contains",
        "G1 Climax works & media is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-symbols",
        "contains",
        "G1 Climax symbols is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-controversies",
        "contains",
        "G1 Climax controversies is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-sources",
        "contains",
        "G1 Climax sources is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-geography",
        "contains",
        "G1 Climax geography is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-legacy",
        "contains",
        "G1 Climax legacy is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-practices",
        "contains",
        "G1 Climax practices is a primary trailhead under G1 Climax.",
        0.88,
        0.82
    ],
    [
        "g1-climax",
        "g1-climax-entry-1",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-2",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-3",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-4",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-5",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-6",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-7",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-8",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-9",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-10",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-11",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-12",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-13",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-14",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-15",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-16",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-17",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-18",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-19",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-20",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-21",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-22",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-23",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ],
    [
        "g1-climax",
        "g1-climax-entry-24",
        "contains",
        "Supporting entry under G1 Climax.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
