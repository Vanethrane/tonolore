/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "new-japan-strong",
        "name": "NJPW Strong / US expansion",
        "type": "topic",
        "short_description": "American tapings, junior heavyweight showcases, and New Japan’s overseas storytelling arm.",
        "description": "American tapings, junior heavyweight showcases, and New Japan’s overseas storytelling arm. This Ton-o-Lore subject maps people, places, events, and ideas tied to NJPW Strong / US expansion so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "new-japan-strong-figures",
        "name": "NJPW Strong / US expansion figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to NJPW Strong / US expansion.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring NJPW Strong / US expansion."
    },
    {
        "slug": "new-japan-strong-world",
        "name": "NJPW Strong / US expansion world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame NJPW Strong / US expansion.",
        "description": "Geography, institutions, and periodization that give NJPW Strong / US expansion its encyclopedia shape."
    },
    {
        "slug": "new-japan-strong-places",
        "name": "NJPW Strong / US expansion places",
        "type": "place",
        "short_description": "Locations and geographies that frame NJPW Strong / US expansion.",
        "description": "Places, regions, and built sites that give NJPW Strong / US expansion its map — where events and figures concentrate."
    },
    {
        "slug": "new-japan-strong-events",
        "name": "NJPW Strong / US expansion events",
        "type": "event",
        "short_description": "Turning points and dated episodes in NJPW Strong / US expansion.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the NJPW Strong / US expansion timeline."
    },
    {
        "slug": "new-japan-strong-objects",
        "name": "NJPW Strong / US expansion objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to NJPW Strong / US expansion.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through NJPW Strong / US expansion."
    },
    {
        "slug": "new-japan-strong-factions",
        "name": "NJPW Strong / US expansion factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside NJPW Strong / US expansion.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in NJPW Strong / US expansion."
    },
    {
        "slug": "new-japan-strong-concepts",
        "name": "NJPW Strong / US expansion concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize NJPW Strong / US expansion.",
        "description": "Keywords, doctrines, systems, and abstract forces that make NJPW Strong / US expansion readable as a lore graph."
    },
    {
        "slug": "new-japan-strong-eras",
        "name": "NJPW Strong / US expansion eras",
        "type": "event",
        "short_description": "Periodization for NJPW Strong / US expansion.",
        "description": "Named eras and phases that help readers track how NJPW Strong / US expansion changes across time."
    },
    {
        "slug": "new-japan-strong-works",
        "name": "NJPW Strong / US expansion works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry NJPW Strong / US expansion.",
        "description": "Primary works and adaptations through which most audiences encounter NJPW Strong / US expansion."
    },
    {
        "slug": "new-japan-strong-symbols",
        "name": "NJPW Strong / US expansion symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with NJPW Strong / US expansion.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside NJPW Strong / US expansion."
    },
    {
        "slug": "new-japan-strong-controversies",
        "name": "NJPW Strong / US expansion controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in NJPW Strong / US expansion.",
        "description": "Debates, rival canons, scandals, and contested facts that keep NJPW Strong / US expansion argumentative."
    },
    {
        "slug": "new-japan-strong-sources",
        "name": "NJPW Strong / US expansion sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into NJPW Strong / US expansion.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify NJPW Strong / US expansion."
    },
    {
        "slug": "new-japan-strong-geography",
        "name": "NJPW Strong / US expansion geography",
        "type": "place",
        "short_description": "Broader geographic framing for NJPW Strong / US expansion.",
        "description": "Regions, routes, and spatial systems that situate NJPW Strong / US expansion beyond single named places."
    },
    {
        "slug": "new-japan-strong-legacy",
        "name": "NJPW Strong / US expansion legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of NJPW Strong / US expansion.",
        "description": "How NJPW Strong / US expansion continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "new-japan-strong-practices",
        "name": "NJPW Strong / US expansion practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in NJPW Strong / US expansion.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in NJPW Strong / US expansion."
    },
    {
        "slug": "new-japan-strong-entry-1",
        "name": "NJPW Strong / US expansion entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-2",
        "name": "NJPW Strong / US expansion entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-3",
        "name": "NJPW Strong / US expansion entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-4",
        "name": "NJPW Strong / US expansion entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-5",
        "name": "NJPW Strong / US expansion entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-6",
        "name": "NJPW Strong / US expansion entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-7",
        "name": "NJPW Strong / US expansion entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-8",
        "name": "NJPW Strong / US expansion entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-9",
        "name": "NJPW Strong / US expansion entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-10",
        "name": "NJPW Strong / US expansion entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-11",
        "name": "NJPW Strong / US expansion entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-12",
        "name": "NJPW Strong / US expansion entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-13",
        "name": "NJPW Strong / US expansion entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-14",
        "name": "NJPW Strong / US expansion entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-15",
        "name": "NJPW Strong / US expansion entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-16",
        "name": "NJPW Strong / US expansion entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-17",
        "name": "NJPW Strong / US expansion entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-18",
        "name": "NJPW Strong / US expansion entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-19",
        "name": "NJPW Strong / US expansion entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-20",
        "name": "NJPW Strong / US expansion entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-21",
        "name": "NJPW Strong / US expansion entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-22",
        "name": "NJPW Strong / US expansion entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-23",
        "name": "NJPW Strong / US expansion entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "new-japan-strong-entry-24",
        "name": "NJPW Strong / US expansion entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside NJPW Strong / US expansion.",
        "description": "A supporting encyclopedia entry in the NJPW Strong / US expansion subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "new-japan-strong",
        "new-japan-strong-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "new-japan-strong",
        "new-japan-strong-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "new-japan-strong",
        "new-japan-strong-places",
        "contains",
        "NJPW Strong / US expansion places is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-events",
        "contains",
        "NJPW Strong / US expansion events is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-objects",
        "contains",
        "NJPW Strong / US expansion objects & artifacts is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-factions",
        "contains",
        "NJPW Strong / US expansion factions & groups is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-concepts",
        "contains",
        "NJPW Strong / US expansion concepts is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-eras",
        "contains",
        "NJPW Strong / US expansion eras is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-works",
        "contains",
        "NJPW Strong / US expansion works & media is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-symbols",
        "contains",
        "NJPW Strong / US expansion symbols is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-controversies",
        "contains",
        "NJPW Strong / US expansion controversies is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-sources",
        "contains",
        "NJPW Strong / US expansion sources is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-geography",
        "contains",
        "NJPW Strong / US expansion geography is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-legacy",
        "contains",
        "NJPW Strong / US expansion legacy is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-practices",
        "contains",
        "NJPW Strong / US expansion practices is a primary trailhead under NJPW Strong / US expansion.",
        0.88,
        0.82
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-1",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-2",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-3",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-4",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-5",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-6",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-7",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-8",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-9",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-10",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-11",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-12",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-13",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-14",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-15",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-16",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-17",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-18",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-19",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-20",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-21",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-22",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-23",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ],
    [
        "new-japan-strong",
        "new-japan-strong-entry-24",
        "contains",
        "Supporting entry under NJPW Strong / US expansion.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
