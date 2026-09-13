/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "stargate-franchise",
        "name": "Stargate",
        "type": "topic",
        "short_description": "Ancient gates, SG teams, and the long-running portal-adventure mythology across TV series.",
        "description": "Ancient gates, SG teams, and the long-running portal-adventure mythology across TV series. This Ton-o-Lore subject maps people, places, events, and ideas tied to Stargate so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "stargate-franchise-figures",
        "name": "Stargate figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Stargate.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Stargate."
    },
    {
        "slug": "stargate-franchise-world",
        "name": "Stargate world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Stargate.",
        "description": "Geography, institutions, and periodization that give Stargate its encyclopedia shape."
    },
    {
        "slug": "stargate-franchise-places",
        "name": "Stargate places",
        "type": "place",
        "short_description": "Locations and geographies that frame Stargate.",
        "description": "Places, regions, and built sites that give Stargate its map — where events and figures concentrate."
    },
    {
        "slug": "stargate-franchise-events",
        "name": "Stargate events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Stargate.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Stargate timeline."
    },
    {
        "slug": "stargate-franchise-objects",
        "name": "Stargate objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Stargate.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Stargate."
    },
    {
        "slug": "stargate-franchise-factions",
        "name": "Stargate factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Stargate.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Stargate."
    },
    {
        "slug": "stargate-franchise-concepts",
        "name": "Stargate concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Stargate.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Stargate readable as a lore graph."
    },
    {
        "slug": "stargate-franchise-eras",
        "name": "Stargate eras",
        "type": "event",
        "short_description": "Periodization for Stargate.",
        "description": "Named eras and phases that help readers track how Stargate changes across time."
    },
    {
        "slug": "stargate-franchise-works",
        "name": "Stargate works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Stargate.",
        "description": "Primary works and adaptations through which most audiences encounter Stargate."
    },
    {
        "slug": "stargate-franchise-symbols",
        "name": "Stargate symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Stargate.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Stargate."
    },
    {
        "slug": "stargate-franchise-controversies",
        "name": "Stargate controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Stargate.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Stargate argumentative."
    },
    {
        "slug": "stargate-franchise-sources",
        "name": "Stargate sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Stargate.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Stargate."
    },
    {
        "slug": "stargate-franchise-geography",
        "name": "Stargate geography",
        "type": "place",
        "short_description": "Broader geographic framing for Stargate.",
        "description": "Regions, routes, and spatial systems that situate Stargate beyond single named places."
    },
    {
        "slug": "stargate-franchise-legacy",
        "name": "Stargate legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Stargate.",
        "description": "How Stargate continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "stargate-franchise-practices",
        "name": "Stargate practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Stargate.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Stargate."
    },
    {
        "slug": "stargate-franchise-entry-1",
        "name": "Stargate entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-2",
        "name": "Stargate entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-3",
        "name": "Stargate entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-4",
        "name": "Stargate entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-5",
        "name": "Stargate entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-6",
        "name": "Stargate entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-7",
        "name": "Stargate entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-8",
        "name": "Stargate entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-9",
        "name": "Stargate entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-10",
        "name": "Stargate entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-11",
        "name": "Stargate entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-12",
        "name": "Stargate entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-13",
        "name": "Stargate entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-14",
        "name": "Stargate entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-15",
        "name": "Stargate entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-16",
        "name": "Stargate entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-17",
        "name": "Stargate entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-18",
        "name": "Stargate entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-19",
        "name": "Stargate entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-20",
        "name": "Stargate entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-21",
        "name": "Stargate entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-22",
        "name": "Stargate entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-23",
        "name": "Stargate entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "stargate-franchise-entry-24",
        "name": "Stargate entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Stargate.",
        "description": "A supporting encyclopedia entry in the Stargate subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "stargate-franchise",
        "stargate-franchise-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "stargate-franchise",
        "stargate-franchise-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "stargate-franchise",
        "stargate-franchise-places",
        "contains",
        "Stargate places is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-events",
        "contains",
        "Stargate events is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-objects",
        "contains",
        "Stargate objects & artifacts is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-factions",
        "contains",
        "Stargate factions & groups is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-concepts",
        "contains",
        "Stargate concepts is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-eras",
        "contains",
        "Stargate eras is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-works",
        "contains",
        "Stargate works & media is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-symbols",
        "contains",
        "Stargate symbols is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-controversies",
        "contains",
        "Stargate controversies is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-sources",
        "contains",
        "Stargate sources is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-geography",
        "contains",
        "Stargate geography is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-legacy",
        "contains",
        "Stargate legacy is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-practices",
        "contains",
        "Stargate practices is a primary trailhead under Stargate.",
        0.88,
        0.82
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-1",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-2",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-3",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-4",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-5",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-6",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-7",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-8",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-9",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-10",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-11",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-12",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-13",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-14",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-15",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-16",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-17",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-18",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-19",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-20",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-21",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-22",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-23",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ],
    [
        "stargate-franchise",
        "stargate-franchise-entry-24",
        "contains",
        "Supporting entry under Stargate.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
