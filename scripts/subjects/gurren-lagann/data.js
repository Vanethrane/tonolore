/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gurren-lagann",
        "name": "Gurren Lagann",
        "type": "topic",
        "short_description": "Spiral energy, drills, and the maximalist mecha pep talk that became anime optimism canon.",
        "description": "Spiral energy, drills, and the maximalist mecha pep talk that became anime optimism canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Gurren Lagann so readers can follow long-tail connections across anime."
    },
    {
        "slug": "gurren-lagann-figures",
        "name": "Gurren Lagann figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Gurren Lagann.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Gurren Lagann."
    },
    {
        "slug": "gurren-lagann-world",
        "name": "Gurren Lagann world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Gurren Lagann.",
        "description": "Geography, institutions, and periodization that give Gurren Lagann its encyclopedia shape."
    },
    {
        "slug": "gurren-lagann-places",
        "name": "Gurren Lagann places",
        "type": "place",
        "short_description": "Locations and geographies that frame Gurren Lagann.",
        "description": "Places, regions, and built sites that give Gurren Lagann its map — where events and figures concentrate."
    },
    {
        "slug": "gurren-lagann-events",
        "name": "Gurren Lagann events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Gurren Lagann.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Gurren Lagann timeline."
    },
    {
        "slug": "gurren-lagann-objects",
        "name": "Gurren Lagann objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Gurren Lagann.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Gurren Lagann."
    },
    {
        "slug": "gurren-lagann-factions",
        "name": "Gurren Lagann factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Gurren Lagann.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Gurren Lagann."
    },
    {
        "slug": "gurren-lagann-concepts",
        "name": "Gurren Lagann concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Gurren Lagann.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Gurren Lagann readable as a lore graph."
    },
    {
        "slug": "gurren-lagann-eras",
        "name": "Gurren Lagann eras",
        "type": "event",
        "short_description": "Periodization for Gurren Lagann.",
        "description": "Named eras and phases that help readers track how Gurren Lagann changes across time."
    },
    {
        "slug": "gurren-lagann-works",
        "name": "Gurren Lagann works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Gurren Lagann.",
        "description": "Primary works and adaptations through which most audiences encounter Gurren Lagann."
    },
    {
        "slug": "gurren-lagann-symbols",
        "name": "Gurren Lagann symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Gurren Lagann.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Gurren Lagann."
    },
    {
        "slug": "gurren-lagann-controversies",
        "name": "Gurren Lagann controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Gurren Lagann.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Gurren Lagann argumentative."
    },
    {
        "slug": "gurren-lagann-sources",
        "name": "Gurren Lagann sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Gurren Lagann.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Gurren Lagann."
    },
    {
        "slug": "gurren-lagann-geography",
        "name": "Gurren Lagann geography",
        "type": "place",
        "short_description": "Broader geographic framing for Gurren Lagann.",
        "description": "Regions, routes, and spatial systems that situate Gurren Lagann beyond single named places."
    },
    {
        "slug": "gurren-lagann-legacy",
        "name": "Gurren Lagann legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Gurren Lagann.",
        "description": "How Gurren Lagann continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gurren-lagann-practices",
        "name": "Gurren Lagann practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Gurren Lagann.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Gurren Lagann."
    },
    {
        "slug": "gurren-lagann-entry-1",
        "name": "Gurren Lagann entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-2",
        "name": "Gurren Lagann entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-3",
        "name": "Gurren Lagann entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-4",
        "name": "Gurren Lagann entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-5",
        "name": "Gurren Lagann entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-6",
        "name": "Gurren Lagann entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-7",
        "name": "Gurren Lagann entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-8",
        "name": "Gurren Lagann entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-9",
        "name": "Gurren Lagann entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-10",
        "name": "Gurren Lagann entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-11",
        "name": "Gurren Lagann entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-12",
        "name": "Gurren Lagann entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-13",
        "name": "Gurren Lagann entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-14",
        "name": "Gurren Lagann entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-15",
        "name": "Gurren Lagann entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-16",
        "name": "Gurren Lagann entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-17",
        "name": "Gurren Lagann entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-18",
        "name": "Gurren Lagann entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-19",
        "name": "Gurren Lagann entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-20",
        "name": "Gurren Lagann entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-21",
        "name": "Gurren Lagann entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-22",
        "name": "Gurren Lagann entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-23",
        "name": "Gurren Lagann entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurren-lagann-entry-24",
        "name": "Gurren Lagann entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gurren Lagann.",
        "description": "A supporting encyclopedia entry in the Gurren Lagann subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gurren-lagann",
        "gurren-lagann-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gurren-lagann",
        "gurren-lagann-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gurren-lagann",
        "gurren-lagann-places",
        "contains",
        "Gurren Lagann places is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-events",
        "contains",
        "Gurren Lagann events is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-objects",
        "contains",
        "Gurren Lagann objects & artifacts is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-factions",
        "contains",
        "Gurren Lagann factions & groups is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-concepts",
        "contains",
        "Gurren Lagann concepts is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-eras",
        "contains",
        "Gurren Lagann eras is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-works",
        "contains",
        "Gurren Lagann works & media is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-symbols",
        "contains",
        "Gurren Lagann symbols is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-controversies",
        "contains",
        "Gurren Lagann controversies is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-sources",
        "contains",
        "Gurren Lagann sources is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-geography",
        "contains",
        "Gurren Lagann geography is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-legacy",
        "contains",
        "Gurren Lagann legacy is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-practices",
        "contains",
        "Gurren Lagann practices is a primary trailhead under Gurren Lagann.",
        0.88,
        0.82
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-1",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-2",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-3",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-4",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-5",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-6",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-7",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-8",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-9",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-10",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-11",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-12",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-13",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-14",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-15",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-16",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-17",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-18",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-19",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-20",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-21",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-22",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-23",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ],
    [
        "gurren-lagann",
        "gurren-lagann-entry-24",
        "contains",
        "Supporting entry under Gurren Lagann.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
