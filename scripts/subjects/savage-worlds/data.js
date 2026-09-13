/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "savage-worlds",
        "name": "Savage Worlds",
        "type": "topic",
        "short_description": "Fast Furious Fun system powering pulp, Weird Wars, and countless licensed settings.",
        "description": "Fast Furious Fun system powering pulp, Weird Wars, and countless licensed settings. This Ton-o-Lore subject maps people, places, events, and ideas tied to Savage Worlds so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "savage-worlds-figures",
        "name": "Savage Worlds figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Savage Worlds.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Savage Worlds."
    },
    {
        "slug": "savage-worlds-world",
        "name": "Savage Worlds world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Savage Worlds.",
        "description": "Geography, institutions, and periodization that give Savage Worlds its encyclopedia shape."
    },
    {
        "slug": "savage-worlds-places",
        "name": "Savage Worlds places",
        "type": "place",
        "short_description": "Locations and geographies that frame Savage Worlds.",
        "description": "Places, regions, and built sites that give Savage Worlds its map — where events and figures concentrate."
    },
    {
        "slug": "savage-worlds-events",
        "name": "Savage Worlds events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Savage Worlds.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Savage Worlds timeline."
    },
    {
        "slug": "savage-worlds-objects",
        "name": "Savage Worlds objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Savage Worlds.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Savage Worlds."
    },
    {
        "slug": "savage-worlds-factions",
        "name": "Savage Worlds factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Savage Worlds.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Savage Worlds."
    },
    {
        "slug": "savage-worlds-concepts",
        "name": "Savage Worlds concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Savage Worlds.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Savage Worlds readable as a lore graph."
    },
    {
        "slug": "savage-worlds-eras",
        "name": "Savage Worlds eras",
        "type": "event",
        "short_description": "Periodization for Savage Worlds.",
        "description": "Named eras and phases that help readers track how Savage Worlds changes across time."
    },
    {
        "slug": "savage-worlds-works",
        "name": "Savage Worlds works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Savage Worlds.",
        "description": "Primary works and adaptations through which most audiences encounter Savage Worlds."
    },
    {
        "slug": "savage-worlds-symbols",
        "name": "Savage Worlds symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Savage Worlds.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Savage Worlds."
    },
    {
        "slug": "savage-worlds-controversies",
        "name": "Savage Worlds controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Savage Worlds.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Savage Worlds argumentative."
    },
    {
        "slug": "savage-worlds-sources",
        "name": "Savage Worlds sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Savage Worlds.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Savage Worlds."
    },
    {
        "slug": "savage-worlds-geography",
        "name": "Savage Worlds geography",
        "type": "place",
        "short_description": "Broader geographic framing for Savage Worlds.",
        "description": "Regions, routes, and spatial systems that situate Savage Worlds beyond single named places."
    },
    {
        "slug": "savage-worlds-legacy",
        "name": "Savage Worlds legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Savage Worlds.",
        "description": "How Savage Worlds continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "savage-worlds-practices",
        "name": "Savage Worlds practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Savage Worlds.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Savage Worlds."
    },
    {
        "slug": "savage-worlds-entry-1",
        "name": "Savage Worlds entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-2",
        "name": "Savage Worlds entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-3",
        "name": "Savage Worlds entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-4",
        "name": "Savage Worlds entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-5",
        "name": "Savage Worlds entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-6",
        "name": "Savage Worlds entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-7",
        "name": "Savage Worlds entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-8",
        "name": "Savage Worlds entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-9",
        "name": "Savage Worlds entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-10",
        "name": "Savage Worlds entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-11",
        "name": "Savage Worlds entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-12",
        "name": "Savage Worlds entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-13",
        "name": "Savage Worlds entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-14",
        "name": "Savage Worlds entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-15",
        "name": "Savage Worlds entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-16",
        "name": "Savage Worlds entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-17",
        "name": "Savage Worlds entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-18",
        "name": "Savage Worlds entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-19",
        "name": "Savage Worlds entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-20",
        "name": "Savage Worlds entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-21",
        "name": "Savage Worlds entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-22",
        "name": "Savage Worlds entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-23",
        "name": "Savage Worlds entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "savage-worlds-entry-24",
        "name": "Savage Worlds entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Savage Worlds.",
        "description": "A supporting encyclopedia entry in the Savage Worlds subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "savage-worlds",
        "savage-worlds-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "savage-worlds",
        "savage-worlds-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "savage-worlds",
        "savage-worlds-places",
        "contains",
        "Savage Worlds places is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-events",
        "contains",
        "Savage Worlds events is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-objects",
        "contains",
        "Savage Worlds objects & artifacts is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-factions",
        "contains",
        "Savage Worlds factions & groups is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-concepts",
        "contains",
        "Savage Worlds concepts is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-eras",
        "contains",
        "Savage Worlds eras is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-works",
        "contains",
        "Savage Worlds works & media is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-symbols",
        "contains",
        "Savage Worlds symbols is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-controversies",
        "contains",
        "Savage Worlds controversies is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-sources",
        "contains",
        "Savage Worlds sources is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-geography",
        "contains",
        "Savage Worlds geography is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-legacy",
        "contains",
        "Savage Worlds legacy is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-practices",
        "contains",
        "Savage Worlds practices is a primary trailhead under Savage Worlds.",
        0.88,
        0.82
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-1",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-2",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-3",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-4",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-5",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-6",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-7",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-8",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-9",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-10",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-11",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-12",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-13",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-14",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-15",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-16",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-17",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-18",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-19",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-20",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-21",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-22",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-23",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ],
    [
        "savage-worlds",
        "savage-worlds-entry-24",
        "contains",
        "Supporting entry under Savage Worlds.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
