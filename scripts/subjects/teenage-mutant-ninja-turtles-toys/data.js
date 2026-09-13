/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "teenage-mutant-ninja-turtles-toys",
        "name": "TMNT toys",
        "type": "topic",
        "short_description": "Action figures, vehicles, and the sewer-hero toy boom that mirrored the turtles’ media explosion.",
        "description": "Action figures, vehicles, and the sewer-hero toy boom that mirrored the turtles’ media explosion. This Ton-o-Lore subject maps people, places, events, and ideas tied to TMNT toys so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-figures",
        "name": "TMNT toys figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to TMNT toys.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring TMNT toys."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-world",
        "name": "TMNT toys world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame TMNT toys.",
        "description": "Geography, institutions, and periodization that give TMNT toys its encyclopedia shape."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-places",
        "name": "TMNT toys places",
        "type": "place",
        "short_description": "Locations and geographies that frame TMNT toys.",
        "description": "Places, regions, and built sites that give TMNT toys its map — where events and figures concentrate."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-events",
        "name": "TMNT toys events",
        "type": "event",
        "short_description": "Turning points and dated episodes in TMNT toys.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the TMNT toys timeline."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-objects",
        "name": "TMNT toys objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to TMNT toys.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through TMNT toys."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-factions",
        "name": "TMNT toys factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside TMNT toys.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in TMNT toys."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-concepts",
        "name": "TMNT toys concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize TMNT toys.",
        "description": "Keywords, doctrines, systems, and abstract forces that make TMNT toys readable as a lore graph."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-eras",
        "name": "TMNT toys eras",
        "type": "event",
        "short_description": "Periodization for TMNT toys.",
        "description": "Named eras and phases that help readers track how TMNT toys changes across time."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-works",
        "name": "TMNT toys works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry TMNT toys.",
        "description": "Primary works and adaptations through which most audiences encounter TMNT toys."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-symbols",
        "name": "TMNT toys symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with TMNT toys.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside TMNT toys."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-controversies",
        "name": "TMNT toys controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in TMNT toys.",
        "description": "Debates, rival canons, scandals, and contested facts that keep TMNT toys argumentative."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-sources",
        "name": "TMNT toys sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into TMNT toys.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify TMNT toys."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-geography",
        "name": "TMNT toys geography",
        "type": "place",
        "short_description": "Broader geographic framing for TMNT toys.",
        "description": "Regions, routes, and spatial systems that situate TMNT toys beyond single named places."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-legacy",
        "name": "TMNT toys legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of TMNT toys.",
        "description": "How TMNT toys continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-practices",
        "name": "TMNT toys practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in TMNT toys.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in TMNT toys."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-1",
        "name": "TMNT toys entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-2",
        "name": "TMNT toys entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-3",
        "name": "TMNT toys entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-4",
        "name": "TMNT toys entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-5",
        "name": "TMNT toys entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-6",
        "name": "TMNT toys entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-7",
        "name": "TMNT toys entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-8",
        "name": "TMNT toys entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-9",
        "name": "TMNT toys entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-10",
        "name": "TMNT toys entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-11",
        "name": "TMNT toys entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-12",
        "name": "TMNT toys entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-13",
        "name": "TMNT toys entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-14",
        "name": "TMNT toys entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-15",
        "name": "TMNT toys entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-16",
        "name": "TMNT toys entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-17",
        "name": "TMNT toys entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-18",
        "name": "TMNT toys entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-19",
        "name": "TMNT toys entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-20",
        "name": "TMNT toys entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-21",
        "name": "TMNT toys entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-22",
        "name": "TMNT toys entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-23",
        "name": "TMNT toys entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "teenage-mutant-ninja-turtles-toys-entry-24",
        "name": "TMNT toys entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside TMNT toys.",
        "description": "A supporting encyclopedia entry in the TMNT toys subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-places",
        "contains",
        "TMNT toys places is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-events",
        "contains",
        "TMNT toys events is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-objects",
        "contains",
        "TMNT toys objects & artifacts is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-factions",
        "contains",
        "TMNT toys factions & groups is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-concepts",
        "contains",
        "TMNT toys concepts is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-eras",
        "contains",
        "TMNT toys eras is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-works",
        "contains",
        "TMNT toys works & media is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-symbols",
        "contains",
        "TMNT toys symbols is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-controversies",
        "contains",
        "TMNT toys controversies is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-sources",
        "contains",
        "TMNT toys sources is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-geography",
        "contains",
        "TMNT toys geography is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-legacy",
        "contains",
        "TMNT toys legacy is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-practices",
        "contains",
        "TMNT toys practices is a primary trailhead under TMNT toys.",
        0.88,
        0.82
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-1",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-2",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-3",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-4",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-5",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-6",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-7",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-8",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-9",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-10",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-11",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-12",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-13",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-14",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-15",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-16",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-17",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-18",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-19",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-20",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-21",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-22",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-23",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ],
    [
        "teenage-mutant-ninja-turtles-toys",
        "teenage-mutant-ninja-turtles-toys-entry-24",
        "contains",
        "Supporting entry under TMNT toys.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
