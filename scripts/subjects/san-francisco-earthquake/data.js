/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "san-francisco-earthquake",
        "name": "1906 San Francisco earthquake",
        "type": "topic",
        "short_description": "Rupture, firestorm, and the quake that remade a West Coast metropolis.",
        "description": "Rupture, firestorm, and the quake that remade a West Coast metropolis. This Ton-o-Lore subject maps people, places, events, and ideas tied to 1906 San Francisco earthquake so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "san-francisco-earthquake-figures",
        "name": "1906 San Francisco earthquake figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to 1906 San Francisco earthquake.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring 1906 San Francisco earthquake."
    },
    {
        "slug": "san-francisco-earthquake-world",
        "name": "1906 San Francisco earthquake world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame 1906 San Francisco earthquake.",
        "description": "Geography, institutions, and periodization that give 1906 San Francisco earthquake its encyclopedia shape."
    },
    {
        "slug": "san-francisco-earthquake-places",
        "name": "1906 San Francisco earthquake places",
        "type": "place",
        "short_description": "Locations and geographies that frame 1906 San Francisco earthquake.",
        "description": "Places, regions, and built sites that give 1906 San Francisco earthquake its map — where events and figures concentrate."
    },
    {
        "slug": "san-francisco-earthquake-events",
        "name": "1906 San Francisco earthquake events",
        "type": "event",
        "short_description": "Turning points and dated episodes in 1906 San Francisco earthquake.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the 1906 San Francisco earthquake timeline."
    },
    {
        "slug": "san-francisco-earthquake-objects",
        "name": "1906 San Francisco earthquake objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to 1906 San Francisco earthquake.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through 1906 San Francisco earthquake."
    },
    {
        "slug": "san-francisco-earthquake-factions",
        "name": "1906 San Francisco earthquake factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside 1906 San Francisco earthquake.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in 1906 San Francisco earthquake."
    },
    {
        "slug": "san-francisco-earthquake-concepts",
        "name": "1906 San Francisco earthquake concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize 1906 San Francisco earthquake.",
        "description": "Keywords, doctrines, systems, and abstract forces that make 1906 San Francisco earthquake readable as a lore graph."
    },
    {
        "slug": "san-francisco-earthquake-eras",
        "name": "1906 San Francisco earthquake eras",
        "type": "event",
        "short_description": "Periodization for 1906 San Francisco earthquake.",
        "description": "Named eras and phases that help readers track how 1906 San Francisco earthquake changes across time."
    },
    {
        "slug": "san-francisco-earthquake-works",
        "name": "1906 San Francisco earthquake works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry 1906 San Francisco earthquake.",
        "description": "Primary works and adaptations through which most audiences encounter 1906 San Francisco earthquake."
    },
    {
        "slug": "san-francisco-earthquake-symbols",
        "name": "1906 San Francisco earthquake symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with 1906 San Francisco earthquake.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside 1906 San Francisco earthquake."
    },
    {
        "slug": "san-francisco-earthquake-controversies",
        "name": "1906 San Francisco earthquake controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in 1906 San Francisco earthquake.",
        "description": "Debates, rival canons, scandals, and contested facts that keep 1906 San Francisco earthquake argumentative."
    },
    {
        "slug": "san-francisco-earthquake-sources",
        "name": "1906 San Francisco earthquake sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into 1906 San Francisco earthquake.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify 1906 San Francisco earthquake."
    },
    {
        "slug": "san-francisco-earthquake-geography",
        "name": "1906 San Francisco earthquake geography",
        "type": "place",
        "short_description": "Broader geographic framing for 1906 San Francisco earthquake.",
        "description": "Regions, routes, and spatial systems that situate 1906 San Francisco earthquake beyond single named places."
    },
    {
        "slug": "san-francisco-earthquake-legacy",
        "name": "1906 San Francisco earthquake legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of 1906 San Francisco earthquake.",
        "description": "How 1906 San Francisco earthquake continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "san-francisco-earthquake-practices",
        "name": "1906 San Francisco earthquake practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in 1906 San Francisco earthquake.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in 1906 San Francisco earthquake."
    },
    {
        "slug": "san-francisco-earthquake-entry-1",
        "name": "1906 San Francisco earthquake entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-2",
        "name": "1906 San Francisco earthquake entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-3",
        "name": "1906 San Francisco earthquake entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-4",
        "name": "1906 San Francisco earthquake entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-5",
        "name": "1906 San Francisco earthquake entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-6",
        "name": "1906 San Francisco earthquake entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-7",
        "name": "1906 San Francisco earthquake entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-8",
        "name": "1906 San Francisco earthquake entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-9",
        "name": "1906 San Francisco earthquake entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-10",
        "name": "1906 San Francisco earthquake entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-11",
        "name": "1906 San Francisco earthquake entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-12",
        "name": "1906 San Francisco earthquake entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-13",
        "name": "1906 San Francisco earthquake entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-14",
        "name": "1906 San Francisco earthquake entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-15",
        "name": "1906 San Francisco earthquake entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-16",
        "name": "1906 San Francisco earthquake entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-17",
        "name": "1906 San Francisco earthquake entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-18",
        "name": "1906 San Francisco earthquake entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-19",
        "name": "1906 San Francisco earthquake entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-20",
        "name": "1906 San Francisco earthquake entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-21",
        "name": "1906 San Francisco earthquake entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-22",
        "name": "1906 San Francisco earthquake entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-23",
        "name": "1906 San Francisco earthquake entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "san-francisco-earthquake-entry-24",
        "name": "1906 San Francisco earthquake entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside 1906 San Francisco earthquake.",
        "description": "A supporting encyclopedia entry in the 1906 San Francisco earthquake subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-places",
        "contains",
        "1906 San Francisco earthquake places is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-events",
        "contains",
        "1906 San Francisco earthquake events is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-objects",
        "contains",
        "1906 San Francisco earthquake objects & artifacts is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-factions",
        "contains",
        "1906 San Francisco earthquake factions & groups is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-concepts",
        "contains",
        "1906 San Francisco earthquake concepts is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-eras",
        "contains",
        "1906 San Francisco earthquake eras is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-works",
        "contains",
        "1906 San Francisco earthquake works & media is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-symbols",
        "contains",
        "1906 San Francisco earthquake symbols is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-controversies",
        "contains",
        "1906 San Francisco earthquake controversies is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-sources",
        "contains",
        "1906 San Francisco earthquake sources is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-geography",
        "contains",
        "1906 San Francisco earthquake geography is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-legacy",
        "contains",
        "1906 San Francisco earthquake legacy is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-practices",
        "contains",
        "1906 San Francisco earthquake practices is a primary trailhead under 1906 San Francisco earthquake.",
        0.88,
        0.82
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-1",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-2",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-3",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-4",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-5",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-6",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-7",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-8",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-9",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-10",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-11",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-12",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-13",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-14",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-15",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-16",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-17",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-18",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-19",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-20",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-21",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-22",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-23",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ],
    [
        "san-francisco-earthquake",
        "san-francisco-earthquake-entry-24",
        "contains",
        "Supporting entry under 1906 San Francisco earthquake.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
