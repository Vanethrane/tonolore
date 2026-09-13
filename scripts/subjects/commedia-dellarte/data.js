/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "commedia-dellarte",
        "name": "Commedia dell'arte",
        "type": "topic",
        "short_description": "Stock masks, improvisation, and the Italian comedy troupes that seeded modern clown and farce.",
        "description": "Stock masks, improvisation, and the Italian comedy troupes that seeded modern clown and farce. This Ton-o-Lore subject maps people, places, events, and ideas tied to Commedia dell'arte so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "commedia-dellarte-figures",
        "name": "Commedia dell'arte figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Commedia dell'arte.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Commedia dell'arte."
    },
    {
        "slug": "commedia-dellarte-world",
        "name": "Commedia dell'arte world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Commedia dell'arte.",
        "description": "Geography, institutions, and periodization that give Commedia dell'arte its encyclopedia shape."
    },
    {
        "slug": "commedia-dellarte-places",
        "name": "Commedia dell'arte places",
        "type": "place",
        "short_description": "Locations and geographies that frame Commedia dell'arte.",
        "description": "Places, regions, and built sites that give Commedia dell'arte its map — where events and figures concentrate."
    },
    {
        "slug": "commedia-dellarte-events",
        "name": "Commedia dell'arte events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Commedia dell'arte.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Commedia dell'arte timeline."
    },
    {
        "slug": "commedia-dellarte-objects",
        "name": "Commedia dell'arte objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Commedia dell'arte.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Commedia dell'arte."
    },
    {
        "slug": "commedia-dellarte-factions",
        "name": "Commedia dell'arte factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Commedia dell'arte.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Commedia dell'arte."
    },
    {
        "slug": "commedia-dellarte-concepts",
        "name": "Commedia dell'arte concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Commedia dell'arte.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Commedia dell'arte readable as a lore graph."
    },
    {
        "slug": "commedia-dellarte-eras",
        "name": "Commedia dell'arte eras",
        "type": "event",
        "short_description": "Periodization for Commedia dell'arte.",
        "description": "Named eras and phases that help readers track how Commedia dell'arte changes across time."
    },
    {
        "slug": "commedia-dellarte-works",
        "name": "Commedia dell'arte works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Commedia dell'arte.",
        "description": "Primary works and adaptations through which most audiences encounter Commedia dell'arte."
    },
    {
        "slug": "commedia-dellarte-symbols",
        "name": "Commedia dell'arte symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Commedia dell'arte.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Commedia dell'arte."
    },
    {
        "slug": "commedia-dellarte-controversies",
        "name": "Commedia dell'arte controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Commedia dell'arte.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Commedia dell'arte argumentative."
    },
    {
        "slug": "commedia-dellarte-sources",
        "name": "Commedia dell'arte sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Commedia dell'arte.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Commedia dell'arte."
    },
    {
        "slug": "commedia-dellarte-geography",
        "name": "Commedia dell'arte geography",
        "type": "place",
        "short_description": "Broader geographic framing for Commedia dell'arte.",
        "description": "Regions, routes, and spatial systems that situate Commedia dell'arte beyond single named places."
    },
    {
        "slug": "commedia-dellarte-legacy",
        "name": "Commedia dell'arte legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Commedia dell'arte.",
        "description": "How Commedia dell'arte continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "commedia-dellarte-practices",
        "name": "Commedia dell'arte practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Commedia dell'arte.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Commedia dell'arte."
    },
    {
        "slug": "commedia-dellarte-entry-1",
        "name": "Commedia dell'arte entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-2",
        "name": "Commedia dell'arte entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-3",
        "name": "Commedia dell'arte entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-4",
        "name": "Commedia dell'arte entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-5",
        "name": "Commedia dell'arte entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-6",
        "name": "Commedia dell'arte entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-7",
        "name": "Commedia dell'arte entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-8",
        "name": "Commedia dell'arte entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-9",
        "name": "Commedia dell'arte entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-10",
        "name": "Commedia dell'arte entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-11",
        "name": "Commedia dell'arte entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-12",
        "name": "Commedia dell'arte entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-13",
        "name": "Commedia dell'arte entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-14",
        "name": "Commedia dell'arte entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-15",
        "name": "Commedia dell'arte entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-16",
        "name": "Commedia dell'arte entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-17",
        "name": "Commedia dell'arte entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-18",
        "name": "Commedia dell'arte entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-19",
        "name": "Commedia dell'arte entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-20",
        "name": "Commedia dell'arte entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-21",
        "name": "Commedia dell'arte entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-22",
        "name": "Commedia dell'arte entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-23",
        "name": "Commedia dell'arte entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "commedia-dellarte-entry-24",
        "name": "Commedia dell'arte entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Commedia dell'arte.",
        "description": "A supporting encyclopedia entry in the Commedia dell'arte subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "commedia-dellarte",
        "commedia-dellarte-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-places",
        "contains",
        "Commedia dell'arte places is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-events",
        "contains",
        "Commedia dell'arte events is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-objects",
        "contains",
        "Commedia dell'arte objects & artifacts is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-factions",
        "contains",
        "Commedia dell'arte factions & groups is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-concepts",
        "contains",
        "Commedia dell'arte concepts is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-eras",
        "contains",
        "Commedia dell'arte eras is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-works",
        "contains",
        "Commedia dell'arte works & media is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-symbols",
        "contains",
        "Commedia dell'arte symbols is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-controversies",
        "contains",
        "Commedia dell'arte controversies is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-sources",
        "contains",
        "Commedia dell'arte sources is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-geography",
        "contains",
        "Commedia dell'arte geography is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-legacy",
        "contains",
        "Commedia dell'arte legacy is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-practices",
        "contains",
        "Commedia dell'arte practices is a primary trailhead under Commedia dell'arte.",
        0.88,
        0.82
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-1",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-2",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-3",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-4",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-5",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-6",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-7",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-8",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-9",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-10",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-11",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-12",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-13",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-14",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-15",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-16",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-17",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-18",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-19",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-20",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-21",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-22",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-23",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ],
    [
        "commedia-dellarte",
        "commedia-dellarte-entry-24",
        "contains",
        "Supporting entry under Commedia dell'arte.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
