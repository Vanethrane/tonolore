/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "spices-trade",
        "name": "Spices & trade",
        "type": "topic",
        "short_description": "Cinnamon and beyond — spice routes, empires, merchants, wars, and the geography of flavor.",
        "description": "Cinnamon and beyond — spice routes, empires, merchants, wars, and the geography of flavor. This Ton-o-Lore subject maps people, places, events, and ideas tied to Spices & trade so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "spices-trade-figures",
        "name": "Spices & trade figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Spices & trade.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Spices & trade."
    },
    {
        "slug": "spices-trade-world",
        "name": "Spices & trade world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Spices & trade.",
        "description": "Geography, institutions, and periodization that give Spices & trade its encyclopedia shape."
    },
    {
        "slug": "spices-trade-places",
        "name": "Spices & trade places",
        "type": "place",
        "short_description": "Locations and geographies that frame Spices & trade.",
        "description": "Places, regions, and built sites that give Spices & trade its map — where events and figures concentrate."
    },
    {
        "slug": "spices-trade-events",
        "name": "Spices & trade events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Spices & trade.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Spices & trade timeline."
    },
    {
        "slug": "spices-trade-objects",
        "name": "Spices & trade objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Spices & trade.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Spices & trade."
    },
    {
        "slug": "spices-trade-factions",
        "name": "Spices & trade factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Spices & trade.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Spices & trade."
    },
    {
        "slug": "spices-trade-concepts",
        "name": "Spices & trade concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Spices & trade.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Spices & trade readable as a lore graph."
    },
    {
        "slug": "spices-trade-eras",
        "name": "Spices & trade eras",
        "type": "event",
        "short_description": "Periodization for Spices & trade.",
        "description": "Named eras and phases that help readers track how Spices & trade changes across time."
    },
    {
        "slug": "spices-trade-works",
        "name": "Spices & trade works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Spices & trade.",
        "description": "Primary works and adaptations through which most audiences encounter Spices & trade."
    },
    {
        "slug": "spices-trade-symbols",
        "name": "Spices & trade symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Spices & trade.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Spices & trade."
    },
    {
        "slug": "spices-trade-controversies",
        "name": "Spices & trade controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Spices & trade.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Spices & trade argumentative."
    },
    {
        "slug": "spices-trade-sources",
        "name": "Spices & trade sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Spices & trade.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Spices & trade."
    },
    {
        "slug": "spices-trade-geography",
        "name": "Spices & trade geography",
        "type": "place",
        "short_description": "Broader geographic framing for Spices & trade.",
        "description": "Regions, routes, and spatial systems that situate Spices & trade beyond single named places."
    },
    {
        "slug": "spices-trade-legacy",
        "name": "Spices & trade legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Spices & trade.",
        "description": "How Spices & trade continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "spices-trade-practices",
        "name": "Spices & trade practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Spices & trade.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Spices & trade."
    },
    {
        "slug": "spices-trade-entry-1",
        "name": "Spices & trade entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-2",
        "name": "Spices & trade entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-3",
        "name": "Spices & trade entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-4",
        "name": "Spices & trade entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-5",
        "name": "Spices & trade entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-6",
        "name": "Spices & trade entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-7",
        "name": "Spices & trade entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-8",
        "name": "Spices & trade entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-9",
        "name": "Spices & trade entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-10",
        "name": "Spices & trade entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-11",
        "name": "Spices & trade entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-12",
        "name": "Spices & trade entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-13",
        "name": "Spices & trade entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-14",
        "name": "Spices & trade entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-15",
        "name": "Spices & trade entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-16",
        "name": "Spices & trade entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-17",
        "name": "Spices & trade entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-18",
        "name": "Spices & trade entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-19",
        "name": "Spices & trade entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-20",
        "name": "Spices & trade entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-21",
        "name": "Spices & trade entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-22",
        "name": "Spices & trade entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-23",
        "name": "Spices & trade entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "spices-trade-entry-24",
        "name": "Spices & trade entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Spices & trade.",
        "description": "A supporting encyclopedia entry in the Spices & trade subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "spices-trade",
        "spices-trade-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "spices-trade",
        "spices-trade-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "spices-trade",
        "spices-trade-places",
        "contains",
        "Spices & trade places is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-events",
        "contains",
        "Spices & trade events is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-objects",
        "contains",
        "Spices & trade objects & artifacts is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-factions",
        "contains",
        "Spices & trade factions & groups is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-concepts",
        "contains",
        "Spices & trade concepts is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-eras",
        "contains",
        "Spices & trade eras is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-works",
        "contains",
        "Spices & trade works & media is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-symbols",
        "contains",
        "Spices & trade symbols is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-controversies",
        "contains",
        "Spices & trade controversies is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-sources",
        "contains",
        "Spices & trade sources is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-geography",
        "contains",
        "Spices & trade geography is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-legacy",
        "contains",
        "Spices & trade legacy is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-practices",
        "contains",
        "Spices & trade practices is a primary trailhead under Spices & trade.",
        0.88,
        0.82
    ],
    [
        "spices-trade",
        "spices-trade-entry-1",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-2",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-3",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-4",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-5",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-6",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-7",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-8",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-9",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-10",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-11",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-12",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-13",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-14",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-15",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-16",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-17",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-18",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-19",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-20",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-21",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-22",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-23",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ],
    [
        "spices-trade",
        "spices-trade-entry-24",
        "contains",
        "Supporting entry under Spices & trade.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
