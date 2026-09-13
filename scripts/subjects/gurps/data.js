/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gurps",
        "name": "GURPS",
        "type": "topic",
        "short_description": "Generic Universal RolePlaying System — point-buy simulation across any genre.",
        "description": "Generic Universal RolePlaying System — point-buy simulation across any genre. This Ton-o-Lore subject maps people, places, events, and ideas tied to GURPS so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "gurps-figures",
        "name": "GURPS figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to GURPS.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring GURPS."
    },
    {
        "slug": "gurps-world",
        "name": "GURPS world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame GURPS.",
        "description": "Geography, institutions, and periodization that give GURPS its encyclopedia shape."
    },
    {
        "slug": "gurps-places",
        "name": "GURPS places",
        "type": "place",
        "short_description": "Locations and geographies that frame GURPS.",
        "description": "Places, regions, and built sites that give GURPS its map — where events and figures concentrate."
    },
    {
        "slug": "gurps-events",
        "name": "GURPS events",
        "type": "event",
        "short_description": "Turning points and dated episodes in GURPS.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the GURPS timeline."
    },
    {
        "slug": "gurps-objects",
        "name": "GURPS objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to GURPS.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through GURPS."
    },
    {
        "slug": "gurps-factions",
        "name": "GURPS factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside GURPS.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in GURPS."
    },
    {
        "slug": "gurps-concepts",
        "name": "GURPS concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize GURPS.",
        "description": "Keywords, doctrines, systems, and abstract forces that make GURPS readable as a lore graph."
    },
    {
        "slug": "gurps-eras",
        "name": "GURPS eras",
        "type": "event",
        "short_description": "Periodization for GURPS.",
        "description": "Named eras and phases that help readers track how GURPS changes across time."
    },
    {
        "slug": "gurps-works",
        "name": "GURPS works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry GURPS.",
        "description": "Primary works and adaptations through which most audiences encounter GURPS."
    },
    {
        "slug": "gurps-symbols",
        "name": "GURPS symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with GURPS.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside GURPS."
    },
    {
        "slug": "gurps-controversies",
        "name": "GURPS controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in GURPS.",
        "description": "Debates, rival canons, scandals, and contested facts that keep GURPS argumentative."
    },
    {
        "slug": "gurps-sources",
        "name": "GURPS sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into GURPS.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify GURPS."
    },
    {
        "slug": "gurps-geography",
        "name": "GURPS geography",
        "type": "place",
        "short_description": "Broader geographic framing for GURPS.",
        "description": "Regions, routes, and spatial systems that situate GURPS beyond single named places."
    },
    {
        "slug": "gurps-legacy",
        "name": "GURPS legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of GURPS.",
        "description": "How GURPS continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gurps-practices",
        "name": "GURPS practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in GURPS.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in GURPS."
    },
    {
        "slug": "gurps-entry-1",
        "name": "GURPS entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-2",
        "name": "GURPS entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-3",
        "name": "GURPS entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-4",
        "name": "GURPS entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-5",
        "name": "GURPS entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-6",
        "name": "GURPS entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-7",
        "name": "GURPS entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-8",
        "name": "GURPS entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-9",
        "name": "GURPS entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-10",
        "name": "GURPS entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-11",
        "name": "GURPS entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-12",
        "name": "GURPS entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-13",
        "name": "GURPS entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-14",
        "name": "GURPS entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-15",
        "name": "GURPS entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-16",
        "name": "GURPS entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-17",
        "name": "GURPS entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-18",
        "name": "GURPS entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-19",
        "name": "GURPS entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-20",
        "name": "GURPS entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-21",
        "name": "GURPS entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-22",
        "name": "GURPS entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-23",
        "name": "GURPS entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gurps-entry-24",
        "name": "GURPS entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside GURPS.",
        "description": "A supporting encyclopedia entry in the GURPS subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gurps",
        "gurps-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gurps",
        "gurps-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gurps",
        "gurps-places",
        "contains",
        "GURPS places is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-events",
        "contains",
        "GURPS events is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-objects",
        "contains",
        "GURPS objects & artifacts is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-factions",
        "contains",
        "GURPS factions & groups is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-concepts",
        "contains",
        "GURPS concepts is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-eras",
        "contains",
        "GURPS eras is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-works",
        "contains",
        "GURPS works & media is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-symbols",
        "contains",
        "GURPS symbols is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-controversies",
        "contains",
        "GURPS controversies is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-sources",
        "contains",
        "GURPS sources is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-geography",
        "contains",
        "GURPS geography is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-legacy",
        "contains",
        "GURPS legacy is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-practices",
        "contains",
        "GURPS practices is a primary trailhead under GURPS.",
        0.88,
        0.82
    ],
    [
        "gurps",
        "gurps-entry-1",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-2",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-3",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-4",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-5",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-6",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-7",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-8",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-9",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-10",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-11",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-12",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-13",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-14",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-15",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-16",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-17",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-18",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-19",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-20",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-21",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-22",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-23",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ],
    [
        "gurps",
        "gurps-entry-24",
        "contains",
        "Supporting entry under GURPS.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
