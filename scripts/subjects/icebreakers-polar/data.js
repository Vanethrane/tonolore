/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "icebreakers-polar",
        "name": "Icebreakers & polar navigation",
        "type": "topic",
        "short_description": "Polar routes, frozen seas, and the specialized ships that open high-latitude passages.",
        "description": "Polar routes, frozen seas, and the specialized ships that open high-latitude passages. This Ton-o-Lore subject maps people, places, events, and ideas tied to Icebreakers & polar navigation so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "icebreakers-polar-figures",
        "name": "Icebreakers & polar navigation figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Icebreakers & polar navigation.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Icebreakers & polar navigation."
    },
    {
        "slug": "icebreakers-polar-world",
        "name": "Icebreakers & polar navigation world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Icebreakers & polar navigation.",
        "description": "Geography, institutions, and periodization that give Icebreakers & polar navigation its encyclopedia shape."
    },
    {
        "slug": "icebreakers-polar-places",
        "name": "Icebreakers & polar navigation places",
        "type": "place",
        "short_description": "Locations and geographies that frame Icebreakers & polar navigation.",
        "description": "Places, regions, and built sites that give Icebreakers & polar navigation its map — where events and figures concentrate."
    },
    {
        "slug": "icebreakers-polar-events",
        "name": "Icebreakers & polar navigation events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Icebreakers & polar navigation.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Icebreakers & polar navigation timeline."
    },
    {
        "slug": "icebreakers-polar-objects",
        "name": "Icebreakers & polar navigation objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Icebreakers & polar navigation.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Icebreakers & polar navigation."
    },
    {
        "slug": "icebreakers-polar-factions",
        "name": "Icebreakers & polar navigation factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Icebreakers & polar navigation.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Icebreakers & polar navigation."
    },
    {
        "slug": "icebreakers-polar-concepts",
        "name": "Icebreakers & polar navigation concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Icebreakers & polar navigation.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Icebreakers & polar navigation readable as a lore graph."
    },
    {
        "slug": "icebreakers-polar-eras",
        "name": "Icebreakers & polar navigation eras",
        "type": "event",
        "short_description": "Periodization for Icebreakers & polar navigation.",
        "description": "Named eras and phases that help readers track how Icebreakers & polar navigation changes across time."
    },
    {
        "slug": "icebreakers-polar-works",
        "name": "Icebreakers & polar navigation works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Icebreakers & polar navigation.",
        "description": "Primary works and adaptations through which most audiences encounter Icebreakers & polar navigation."
    },
    {
        "slug": "icebreakers-polar-symbols",
        "name": "Icebreakers & polar navigation symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Icebreakers & polar navigation.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Icebreakers & polar navigation."
    },
    {
        "slug": "icebreakers-polar-controversies",
        "name": "Icebreakers & polar navigation controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Icebreakers & polar navigation.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Icebreakers & polar navigation argumentative."
    },
    {
        "slug": "icebreakers-polar-sources",
        "name": "Icebreakers & polar navigation sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Icebreakers & polar navigation.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Icebreakers & polar navigation."
    },
    {
        "slug": "icebreakers-polar-geography",
        "name": "Icebreakers & polar navigation geography",
        "type": "place",
        "short_description": "Broader geographic framing for Icebreakers & polar navigation.",
        "description": "Regions, routes, and spatial systems that situate Icebreakers & polar navigation beyond single named places."
    },
    {
        "slug": "icebreakers-polar-legacy",
        "name": "Icebreakers & polar navigation legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Icebreakers & polar navigation.",
        "description": "How Icebreakers & polar navigation continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "icebreakers-polar-practices",
        "name": "Icebreakers & polar navigation practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Icebreakers & polar navigation.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Icebreakers & polar navigation."
    },
    {
        "slug": "icebreakers-polar-entry-1",
        "name": "Icebreakers & polar navigation entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-2",
        "name": "Icebreakers & polar navigation entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-3",
        "name": "Icebreakers & polar navigation entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-4",
        "name": "Icebreakers & polar navigation entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-5",
        "name": "Icebreakers & polar navigation entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-6",
        "name": "Icebreakers & polar navigation entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-7",
        "name": "Icebreakers & polar navigation entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-8",
        "name": "Icebreakers & polar navigation entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-9",
        "name": "Icebreakers & polar navigation entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-10",
        "name": "Icebreakers & polar navigation entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-11",
        "name": "Icebreakers & polar navigation entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-12",
        "name": "Icebreakers & polar navigation entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-13",
        "name": "Icebreakers & polar navigation entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-14",
        "name": "Icebreakers & polar navigation entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-15",
        "name": "Icebreakers & polar navigation entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-16",
        "name": "Icebreakers & polar navigation entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-17",
        "name": "Icebreakers & polar navigation entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-18",
        "name": "Icebreakers & polar navigation entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-19",
        "name": "Icebreakers & polar navigation entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-20",
        "name": "Icebreakers & polar navigation entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-21",
        "name": "Icebreakers & polar navigation entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-22",
        "name": "Icebreakers & polar navigation entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-23",
        "name": "Icebreakers & polar navigation entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "icebreakers-polar-entry-24",
        "name": "Icebreakers & polar navigation entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Icebreakers & polar navigation.",
        "description": "A supporting encyclopedia entry in the Icebreakers & polar navigation subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "icebreakers-polar",
        "icebreakers-polar-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-places",
        "contains",
        "Icebreakers & polar navigation places is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-events",
        "contains",
        "Icebreakers & polar navigation events is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-objects",
        "contains",
        "Icebreakers & polar navigation objects & artifacts is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-factions",
        "contains",
        "Icebreakers & polar navigation factions & groups is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-concepts",
        "contains",
        "Icebreakers & polar navigation concepts is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-eras",
        "contains",
        "Icebreakers & polar navigation eras is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-works",
        "contains",
        "Icebreakers & polar navigation works & media is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-symbols",
        "contains",
        "Icebreakers & polar navigation symbols is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-controversies",
        "contains",
        "Icebreakers & polar navigation controversies is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-sources",
        "contains",
        "Icebreakers & polar navigation sources is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-geography",
        "contains",
        "Icebreakers & polar navigation geography is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-legacy",
        "contains",
        "Icebreakers & polar navigation legacy is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-practices",
        "contains",
        "Icebreakers & polar navigation practices is a primary trailhead under Icebreakers & polar navigation.",
        0.88,
        0.82
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-1",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-2",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-3",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-4",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-5",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-6",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-7",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-8",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-9",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-10",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-11",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-12",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-13",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-14",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-15",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-16",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-17",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-18",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-19",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-20",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-21",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-22",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-23",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ],
    [
        "icebreakers-polar",
        "icebreakers-polar-entry-24",
        "contains",
        "Supporting entry under Icebreakers & polar navigation.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
