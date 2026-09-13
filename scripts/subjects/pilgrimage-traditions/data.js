/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pilgrimage-traditions",
        "name": "Pilgrimage traditions",
        "type": "topic",
        "short_description": "Hajj, Camino, Kumbh Mela — sacred journeys that organize devotion in motion.",
        "description": "Hajj, Camino, Kumbh Mela — sacred journeys that organize devotion in motion. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pilgrimage traditions so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "pilgrimage-traditions-figures",
        "name": "Pilgrimage traditions figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pilgrimage traditions.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pilgrimage traditions."
    },
    {
        "slug": "pilgrimage-traditions-world",
        "name": "Pilgrimage traditions world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pilgrimage traditions.",
        "description": "Geography, institutions, and periodization that give Pilgrimage traditions its encyclopedia shape."
    },
    {
        "slug": "pilgrimage-traditions-places",
        "name": "Pilgrimage traditions places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pilgrimage traditions.",
        "description": "Places, regions, and built sites that give Pilgrimage traditions its map — where events and figures concentrate."
    },
    {
        "slug": "pilgrimage-traditions-events",
        "name": "Pilgrimage traditions events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pilgrimage traditions.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pilgrimage traditions timeline."
    },
    {
        "slug": "pilgrimage-traditions-objects",
        "name": "Pilgrimage traditions objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pilgrimage traditions.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pilgrimage traditions."
    },
    {
        "slug": "pilgrimage-traditions-factions",
        "name": "Pilgrimage traditions factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pilgrimage traditions.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pilgrimage traditions."
    },
    {
        "slug": "pilgrimage-traditions-concepts",
        "name": "Pilgrimage traditions concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pilgrimage traditions.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pilgrimage traditions readable as a lore graph."
    },
    {
        "slug": "pilgrimage-traditions-eras",
        "name": "Pilgrimage traditions eras",
        "type": "event",
        "short_description": "Periodization for Pilgrimage traditions.",
        "description": "Named eras and phases that help readers track how Pilgrimage traditions changes across time."
    },
    {
        "slug": "pilgrimage-traditions-works",
        "name": "Pilgrimage traditions works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pilgrimage traditions.",
        "description": "Primary works and adaptations through which most audiences encounter Pilgrimage traditions."
    },
    {
        "slug": "pilgrimage-traditions-symbols",
        "name": "Pilgrimage traditions symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pilgrimage traditions.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pilgrimage traditions."
    },
    {
        "slug": "pilgrimage-traditions-controversies",
        "name": "Pilgrimage traditions controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pilgrimage traditions.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pilgrimage traditions argumentative."
    },
    {
        "slug": "pilgrimage-traditions-sources",
        "name": "Pilgrimage traditions sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pilgrimage traditions.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pilgrimage traditions."
    },
    {
        "slug": "pilgrimage-traditions-geography",
        "name": "Pilgrimage traditions geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pilgrimage traditions.",
        "description": "Regions, routes, and spatial systems that situate Pilgrimage traditions beyond single named places."
    },
    {
        "slug": "pilgrimage-traditions-legacy",
        "name": "Pilgrimage traditions legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pilgrimage traditions.",
        "description": "How Pilgrimage traditions continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pilgrimage-traditions-practices",
        "name": "Pilgrimage traditions practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pilgrimage traditions.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pilgrimage traditions."
    },
    {
        "slug": "pilgrimage-traditions-entry-1",
        "name": "Pilgrimage traditions entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-2",
        "name": "Pilgrimage traditions entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-3",
        "name": "Pilgrimage traditions entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-4",
        "name": "Pilgrimage traditions entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-5",
        "name": "Pilgrimage traditions entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-6",
        "name": "Pilgrimage traditions entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-7",
        "name": "Pilgrimage traditions entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-8",
        "name": "Pilgrimage traditions entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-9",
        "name": "Pilgrimage traditions entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-10",
        "name": "Pilgrimage traditions entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-11",
        "name": "Pilgrimage traditions entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-12",
        "name": "Pilgrimage traditions entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-13",
        "name": "Pilgrimage traditions entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-14",
        "name": "Pilgrimage traditions entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-15",
        "name": "Pilgrimage traditions entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-16",
        "name": "Pilgrimage traditions entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-17",
        "name": "Pilgrimage traditions entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-18",
        "name": "Pilgrimage traditions entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-19",
        "name": "Pilgrimage traditions entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-20",
        "name": "Pilgrimage traditions entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-21",
        "name": "Pilgrimage traditions entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-22",
        "name": "Pilgrimage traditions entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-23",
        "name": "Pilgrimage traditions entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pilgrimage-traditions-entry-24",
        "name": "Pilgrimage traditions entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pilgrimage traditions.",
        "description": "A supporting encyclopedia entry in the Pilgrimage traditions subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-places",
        "contains",
        "Pilgrimage traditions places is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-events",
        "contains",
        "Pilgrimage traditions events is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-objects",
        "contains",
        "Pilgrimage traditions objects & artifacts is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-factions",
        "contains",
        "Pilgrimage traditions factions & groups is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-concepts",
        "contains",
        "Pilgrimage traditions concepts is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-eras",
        "contains",
        "Pilgrimage traditions eras is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-works",
        "contains",
        "Pilgrimage traditions works & media is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-symbols",
        "contains",
        "Pilgrimage traditions symbols is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-controversies",
        "contains",
        "Pilgrimage traditions controversies is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-sources",
        "contains",
        "Pilgrimage traditions sources is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-geography",
        "contains",
        "Pilgrimage traditions geography is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-legacy",
        "contains",
        "Pilgrimage traditions legacy is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-practices",
        "contains",
        "Pilgrimage traditions practices is a primary trailhead under Pilgrimage traditions.",
        0.88,
        0.82
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-1",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-2",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-3",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-4",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-5",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-6",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-7",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-8",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-9",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-10",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-11",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-12",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-13",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-14",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-15",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-16",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-17",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-18",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-19",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-20",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-21",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-22",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-23",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ],
    [
        "pilgrimage-traditions",
        "pilgrimage-traditions-entry-24",
        "contains",
        "Supporting entry under Pilgrimage traditions.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
