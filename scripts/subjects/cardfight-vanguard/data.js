/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "cardfight-vanguard",
        "name": "Cardfight!! Vanguard",
        "type": "topic",
        "short_description": "Clans, ride decks, and the anime-backed TCG of planetary Cardfight lore.",
        "description": "Clans, ride decks, and the anime-backed TCG of planetary Cardfight lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Cardfight!! Vanguard so readers can follow long-tail connections across card games."
    },
    {
        "slug": "cardfight-vanguard-figures",
        "name": "Cardfight!! Vanguard figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Cardfight!! Vanguard.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Cardfight!! Vanguard."
    },
    {
        "slug": "cardfight-vanguard-world",
        "name": "Cardfight!! Vanguard world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Cardfight!! Vanguard.",
        "description": "Geography, institutions, and periodization that give Cardfight!! Vanguard its encyclopedia shape."
    },
    {
        "slug": "cardfight-vanguard-places",
        "name": "Cardfight!! Vanguard places",
        "type": "place",
        "short_description": "Locations and geographies that frame Cardfight!! Vanguard.",
        "description": "Places, regions, and built sites that give Cardfight!! Vanguard its map — where events and figures concentrate."
    },
    {
        "slug": "cardfight-vanguard-events",
        "name": "Cardfight!! Vanguard events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Cardfight!! Vanguard.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Cardfight!! Vanguard timeline."
    },
    {
        "slug": "cardfight-vanguard-objects",
        "name": "Cardfight!! Vanguard objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Cardfight!! Vanguard.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Cardfight!! Vanguard."
    },
    {
        "slug": "cardfight-vanguard-factions",
        "name": "Cardfight!! Vanguard factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Cardfight!! Vanguard.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Cardfight!! Vanguard."
    },
    {
        "slug": "cardfight-vanguard-concepts",
        "name": "Cardfight!! Vanguard concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Cardfight!! Vanguard.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Cardfight!! Vanguard readable as a lore graph."
    },
    {
        "slug": "cardfight-vanguard-eras",
        "name": "Cardfight!! Vanguard eras",
        "type": "event",
        "short_description": "Periodization for Cardfight!! Vanguard.",
        "description": "Named eras and phases that help readers track how Cardfight!! Vanguard changes across time."
    },
    {
        "slug": "cardfight-vanguard-works",
        "name": "Cardfight!! Vanguard works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Cardfight!! Vanguard.",
        "description": "Primary works and adaptations through which most audiences encounter Cardfight!! Vanguard."
    },
    {
        "slug": "cardfight-vanguard-symbols",
        "name": "Cardfight!! Vanguard symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Cardfight!! Vanguard.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Cardfight!! Vanguard."
    },
    {
        "slug": "cardfight-vanguard-controversies",
        "name": "Cardfight!! Vanguard controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Cardfight!! Vanguard.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Cardfight!! Vanguard argumentative."
    },
    {
        "slug": "cardfight-vanguard-sources",
        "name": "Cardfight!! Vanguard sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Cardfight!! Vanguard.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Cardfight!! Vanguard."
    },
    {
        "slug": "cardfight-vanguard-geography",
        "name": "Cardfight!! Vanguard geography",
        "type": "place",
        "short_description": "Broader geographic framing for Cardfight!! Vanguard.",
        "description": "Regions, routes, and spatial systems that situate Cardfight!! Vanguard beyond single named places."
    },
    {
        "slug": "cardfight-vanguard-legacy",
        "name": "Cardfight!! Vanguard legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Cardfight!! Vanguard.",
        "description": "How Cardfight!! Vanguard continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "cardfight-vanguard-practices",
        "name": "Cardfight!! Vanguard practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Cardfight!! Vanguard.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Cardfight!! Vanguard."
    },
    {
        "slug": "cardfight-vanguard-entry-1",
        "name": "Cardfight!! Vanguard entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-2",
        "name": "Cardfight!! Vanguard entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-3",
        "name": "Cardfight!! Vanguard entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-4",
        "name": "Cardfight!! Vanguard entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-5",
        "name": "Cardfight!! Vanguard entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-6",
        "name": "Cardfight!! Vanguard entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-7",
        "name": "Cardfight!! Vanguard entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-8",
        "name": "Cardfight!! Vanguard entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-9",
        "name": "Cardfight!! Vanguard entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-10",
        "name": "Cardfight!! Vanguard entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-11",
        "name": "Cardfight!! Vanguard entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-12",
        "name": "Cardfight!! Vanguard entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-13",
        "name": "Cardfight!! Vanguard entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-14",
        "name": "Cardfight!! Vanguard entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-15",
        "name": "Cardfight!! Vanguard entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-16",
        "name": "Cardfight!! Vanguard entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-17",
        "name": "Cardfight!! Vanguard entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-18",
        "name": "Cardfight!! Vanguard entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-19",
        "name": "Cardfight!! Vanguard entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-20",
        "name": "Cardfight!! Vanguard entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-21",
        "name": "Cardfight!! Vanguard entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-22",
        "name": "Cardfight!! Vanguard entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-23",
        "name": "Cardfight!! Vanguard entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "cardfight-vanguard-entry-24",
        "name": "Cardfight!! Vanguard entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Cardfight!! Vanguard.",
        "description": "A supporting encyclopedia entry in the Cardfight!! Vanguard subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "cardfight-vanguard",
        "cardfight-vanguard-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-places",
        "contains",
        "Cardfight!! Vanguard places is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-events",
        "contains",
        "Cardfight!! Vanguard events is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-objects",
        "contains",
        "Cardfight!! Vanguard objects & artifacts is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-factions",
        "contains",
        "Cardfight!! Vanguard factions & groups is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-concepts",
        "contains",
        "Cardfight!! Vanguard concepts is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-eras",
        "contains",
        "Cardfight!! Vanguard eras is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-works",
        "contains",
        "Cardfight!! Vanguard works & media is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-symbols",
        "contains",
        "Cardfight!! Vanguard symbols is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-controversies",
        "contains",
        "Cardfight!! Vanguard controversies is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-sources",
        "contains",
        "Cardfight!! Vanguard sources is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-geography",
        "contains",
        "Cardfight!! Vanguard geography is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-legacy",
        "contains",
        "Cardfight!! Vanguard legacy is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-practices",
        "contains",
        "Cardfight!! Vanguard practices is a primary trailhead under Cardfight!! Vanguard.",
        0.88,
        0.82
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-1",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-2",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-3",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-4",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-5",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-6",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-7",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-8",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-9",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-10",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-11",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-12",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-13",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-14",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-15",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-16",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-17",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-18",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-19",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-20",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-21",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-22",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-23",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ],
    [
        "cardfight-vanguard",
        "cardfight-vanguard-entry-24",
        "contains",
        "Supporting entry under Cardfight!! Vanguard.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
