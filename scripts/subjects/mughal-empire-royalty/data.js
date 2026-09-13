/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mughal-empire-royalty",
        "name": "Mughal emperors",
        "type": "topic",
        "short_description": "Taj commissions, court culture, and the Timurid-descended rulers of early modern India.",
        "description": "Taj commissions, court culture, and the Timurid-descended rulers of early modern India. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mughal emperors so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "mughal-empire-royalty-figures",
        "name": "Mughal emperors figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mughal emperors.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mughal emperors."
    },
    {
        "slug": "mughal-empire-royalty-world",
        "name": "Mughal emperors world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mughal emperors.",
        "description": "Geography, institutions, and periodization that give Mughal emperors its encyclopedia shape."
    },
    {
        "slug": "mughal-empire-royalty-places",
        "name": "Mughal emperors places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mughal emperors.",
        "description": "Places, regions, and built sites that give Mughal emperors its map — where events and figures concentrate."
    },
    {
        "slug": "mughal-empire-royalty-events",
        "name": "Mughal emperors events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mughal emperors.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mughal emperors timeline."
    },
    {
        "slug": "mughal-empire-royalty-objects",
        "name": "Mughal emperors objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mughal emperors.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mughal emperors."
    },
    {
        "slug": "mughal-empire-royalty-factions",
        "name": "Mughal emperors factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mughal emperors.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mughal emperors."
    },
    {
        "slug": "mughal-empire-royalty-concepts",
        "name": "Mughal emperors concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mughal emperors.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mughal emperors readable as a lore graph."
    },
    {
        "slug": "mughal-empire-royalty-eras",
        "name": "Mughal emperors eras",
        "type": "event",
        "short_description": "Periodization for Mughal emperors.",
        "description": "Named eras and phases that help readers track how Mughal emperors changes across time."
    },
    {
        "slug": "mughal-empire-royalty-works",
        "name": "Mughal emperors works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mughal emperors.",
        "description": "Primary works and adaptations through which most audiences encounter Mughal emperors."
    },
    {
        "slug": "mughal-empire-royalty-symbols",
        "name": "Mughal emperors symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mughal emperors.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mughal emperors."
    },
    {
        "slug": "mughal-empire-royalty-controversies",
        "name": "Mughal emperors controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mughal emperors.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mughal emperors argumentative."
    },
    {
        "slug": "mughal-empire-royalty-sources",
        "name": "Mughal emperors sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mughal emperors.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mughal emperors."
    },
    {
        "slug": "mughal-empire-royalty-geography",
        "name": "Mughal emperors geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mughal emperors.",
        "description": "Regions, routes, and spatial systems that situate Mughal emperors beyond single named places."
    },
    {
        "slug": "mughal-empire-royalty-legacy",
        "name": "Mughal emperors legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mughal emperors.",
        "description": "How Mughal emperors continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mughal-empire-royalty-practices",
        "name": "Mughal emperors practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mughal emperors.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mughal emperors."
    },
    {
        "slug": "mughal-empire-royalty-entry-1",
        "name": "Mughal emperors entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-2",
        "name": "Mughal emperors entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-3",
        "name": "Mughal emperors entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-4",
        "name": "Mughal emperors entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-5",
        "name": "Mughal emperors entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-6",
        "name": "Mughal emperors entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-7",
        "name": "Mughal emperors entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-8",
        "name": "Mughal emperors entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-9",
        "name": "Mughal emperors entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-10",
        "name": "Mughal emperors entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-11",
        "name": "Mughal emperors entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-12",
        "name": "Mughal emperors entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-13",
        "name": "Mughal emperors entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-14",
        "name": "Mughal emperors entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-15",
        "name": "Mughal emperors entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-16",
        "name": "Mughal emperors entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-17",
        "name": "Mughal emperors entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-18",
        "name": "Mughal emperors entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-19",
        "name": "Mughal emperors entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-20",
        "name": "Mughal emperors entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-21",
        "name": "Mughal emperors entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-22",
        "name": "Mughal emperors entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-23",
        "name": "Mughal emperors entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mughal-empire-royalty-entry-24",
        "name": "Mughal emperors entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mughal emperors.",
        "description": "A supporting encyclopedia entry in the Mughal emperors subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-places",
        "contains",
        "Mughal emperors places is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-events",
        "contains",
        "Mughal emperors events is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-objects",
        "contains",
        "Mughal emperors objects & artifacts is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-factions",
        "contains",
        "Mughal emperors factions & groups is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-concepts",
        "contains",
        "Mughal emperors concepts is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-eras",
        "contains",
        "Mughal emperors eras is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-works",
        "contains",
        "Mughal emperors works & media is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-symbols",
        "contains",
        "Mughal emperors symbols is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-controversies",
        "contains",
        "Mughal emperors controversies is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-sources",
        "contains",
        "Mughal emperors sources is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-geography",
        "contains",
        "Mughal emperors geography is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-legacy",
        "contains",
        "Mughal emperors legacy is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-practices",
        "contains",
        "Mughal emperors practices is a primary trailhead under Mughal emperors.",
        0.88,
        0.82
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-1",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-2",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-3",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-4",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-5",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-6",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-7",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-8",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-9",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-10",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-11",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-12",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-13",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-14",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-15",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-16",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-17",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-18",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-19",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-20",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-21",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-22",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-23",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ],
    [
        "mughal-empire-royalty",
        "mughal-empire-royalty-entry-24",
        "contains",
        "Supporting entry under Mughal emperors.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
