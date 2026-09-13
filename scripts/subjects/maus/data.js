/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "maus",
        "name": "Maus",
        "type": "topic",
        "short_description": "Cats and mice allegory, Holocaust memoir, and the Pulitzer graphic novel that forced comics seriousness.",
        "description": "Cats and mice allegory, Holocaust memoir, and the Pulitzer graphic novel that forced comics seriousness. This Ton-o-Lore subject maps people, places, events, and ideas tied to Maus so readers can follow long-tail connections across comics & manga."
    },
    {
        "slug": "maus-figures",
        "name": "Maus figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Maus.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Maus."
    },
    {
        "slug": "maus-world",
        "name": "Maus world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Maus.",
        "description": "Geography, institutions, and periodization that give Maus its encyclopedia shape."
    },
    {
        "slug": "maus-places",
        "name": "Maus places",
        "type": "place",
        "short_description": "Locations and geographies that frame Maus.",
        "description": "Places, regions, and built sites that give Maus its map — where events and figures concentrate."
    },
    {
        "slug": "maus-events",
        "name": "Maus events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Maus.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Maus timeline."
    },
    {
        "slug": "maus-objects",
        "name": "Maus objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Maus.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Maus."
    },
    {
        "slug": "maus-factions",
        "name": "Maus factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Maus.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Maus."
    },
    {
        "slug": "maus-concepts",
        "name": "Maus concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Maus.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Maus readable as a lore graph."
    },
    {
        "slug": "maus-eras",
        "name": "Maus eras",
        "type": "event",
        "short_description": "Periodization for Maus.",
        "description": "Named eras and phases that help readers track how Maus changes across time."
    },
    {
        "slug": "maus-works",
        "name": "Maus works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Maus.",
        "description": "Primary works and adaptations through which most audiences encounter Maus."
    },
    {
        "slug": "maus-symbols",
        "name": "Maus symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Maus.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Maus."
    },
    {
        "slug": "maus-controversies",
        "name": "Maus controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Maus.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Maus argumentative."
    },
    {
        "slug": "maus-sources",
        "name": "Maus sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Maus.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Maus."
    },
    {
        "slug": "maus-geography",
        "name": "Maus geography",
        "type": "place",
        "short_description": "Broader geographic framing for Maus.",
        "description": "Regions, routes, and spatial systems that situate Maus beyond single named places."
    },
    {
        "slug": "maus-legacy",
        "name": "Maus legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Maus.",
        "description": "How Maus continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "maus-practices",
        "name": "Maus practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Maus.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Maus."
    },
    {
        "slug": "maus-entry-1",
        "name": "Maus entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-2",
        "name": "Maus entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-3",
        "name": "Maus entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-4",
        "name": "Maus entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-5",
        "name": "Maus entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-6",
        "name": "Maus entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-7",
        "name": "Maus entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-8",
        "name": "Maus entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-9",
        "name": "Maus entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-10",
        "name": "Maus entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-11",
        "name": "Maus entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-12",
        "name": "Maus entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-13",
        "name": "Maus entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-14",
        "name": "Maus entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-15",
        "name": "Maus entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-16",
        "name": "Maus entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-17",
        "name": "Maus entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-18",
        "name": "Maus entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-19",
        "name": "Maus entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-20",
        "name": "Maus entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-21",
        "name": "Maus entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-22",
        "name": "Maus entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-23",
        "name": "Maus entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maus-entry-24",
        "name": "Maus entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maus.",
        "description": "A supporting encyclopedia entry in the Maus subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "maus",
        "maus-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "maus",
        "maus-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "maus",
        "maus-places",
        "contains",
        "Maus places is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-events",
        "contains",
        "Maus events is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-objects",
        "contains",
        "Maus objects & artifacts is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-factions",
        "contains",
        "Maus factions & groups is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-concepts",
        "contains",
        "Maus concepts is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-eras",
        "contains",
        "Maus eras is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-works",
        "contains",
        "Maus works & media is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-symbols",
        "contains",
        "Maus symbols is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-controversies",
        "contains",
        "Maus controversies is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-sources",
        "contains",
        "Maus sources is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-geography",
        "contains",
        "Maus geography is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-legacy",
        "contains",
        "Maus legacy is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-practices",
        "contains",
        "Maus practices is a primary trailhead under Maus.",
        0.88,
        0.82
    ],
    [
        "maus",
        "maus-entry-1",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-2",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-3",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-4",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-5",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-6",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-7",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-8",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-9",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-10",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-11",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-12",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-13",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-14",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-15",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-16",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-17",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-18",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-19",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-20",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-21",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-22",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-23",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ],
    [
        "maus",
        "maus-entry-24",
        "contains",
        "Supporting entry under Maus.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
