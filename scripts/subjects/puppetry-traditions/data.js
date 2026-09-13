/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "puppetry-traditions",
        "name": "Puppetry traditions",
        "type": "topic",
        "short_description": "Marionettes, shadow play, bunraku, and the global craft of performing with figures.",
        "description": "Marionettes, shadow play, bunraku, and the global craft of performing with figures. This Ton-o-Lore subject maps people, places, events, and ideas tied to Puppetry traditions so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "puppetry-traditions-figures",
        "name": "Puppetry traditions figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Puppetry traditions.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Puppetry traditions."
    },
    {
        "slug": "puppetry-traditions-world",
        "name": "Puppetry traditions world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Puppetry traditions.",
        "description": "Geography, institutions, and periodization that give Puppetry traditions its encyclopedia shape."
    },
    {
        "slug": "puppetry-traditions-places",
        "name": "Puppetry traditions places",
        "type": "place",
        "short_description": "Locations and geographies that frame Puppetry traditions.",
        "description": "Places, regions, and built sites that give Puppetry traditions its map — where events and figures concentrate."
    },
    {
        "slug": "puppetry-traditions-events",
        "name": "Puppetry traditions events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Puppetry traditions.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Puppetry traditions timeline."
    },
    {
        "slug": "puppetry-traditions-objects",
        "name": "Puppetry traditions objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Puppetry traditions.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Puppetry traditions."
    },
    {
        "slug": "puppetry-traditions-factions",
        "name": "Puppetry traditions factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Puppetry traditions.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Puppetry traditions."
    },
    {
        "slug": "puppetry-traditions-concepts",
        "name": "Puppetry traditions concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Puppetry traditions.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Puppetry traditions readable as a lore graph."
    },
    {
        "slug": "puppetry-traditions-eras",
        "name": "Puppetry traditions eras",
        "type": "event",
        "short_description": "Periodization for Puppetry traditions.",
        "description": "Named eras and phases that help readers track how Puppetry traditions changes across time."
    },
    {
        "slug": "puppetry-traditions-works",
        "name": "Puppetry traditions works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Puppetry traditions.",
        "description": "Primary works and adaptations through which most audiences encounter Puppetry traditions."
    },
    {
        "slug": "puppetry-traditions-symbols",
        "name": "Puppetry traditions symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Puppetry traditions.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Puppetry traditions."
    },
    {
        "slug": "puppetry-traditions-controversies",
        "name": "Puppetry traditions controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Puppetry traditions.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Puppetry traditions argumentative."
    },
    {
        "slug": "puppetry-traditions-sources",
        "name": "Puppetry traditions sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Puppetry traditions.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Puppetry traditions."
    },
    {
        "slug": "puppetry-traditions-geography",
        "name": "Puppetry traditions geography",
        "type": "place",
        "short_description": "Broader geographic framing for Puppetry traditions.",
        "description": "Regions, routes, and spatial systems that situate Puppetry traditions beyond single named places."
    },
    {
        "slug": "puppetry-traditions-legacy",
        "name": "Puppetry traditions legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Puppetry traditions.",
        "description": "How Puppetry traditions continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "puppetry-traditions-practices",
        "name": "Puppetry traditions practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Puppetry traditions.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Puppetry traditions."
    },
    {
        "slug": "puppetry-traditions-entry-1",
        "name": "Puppetry traditions entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-2",
        "name": "Puppetry traditions entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-3",
        "name": "Puppetry traditions entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-4",
        "name": "Puppetry traditions entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-5",
        "name": "Puppetry traditions entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-6",
        "name": "Puppetry traditions entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-7",
        "name": "Puppetry traditions entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-8",
        "name": "Puppetry traditions entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-9",
        "name": "Puppetry traditions entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-10",
        "name": "Puppetry traditions entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-11",
        "name": "Puppetry traditions entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-12",
        "name": "Puppetry traditions entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-13",
        "name": "Puppetry traditions entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-14",
        "name": "Puppetry traditions entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-15",
        "name": "Puppetry traditions entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-16",
        "name": "Puppetry traditions entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-17",
        "name": "Puppetry traditions entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-18",
        "name": "Puppetry traditions entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-19",
        "name": "Puppetry traditions entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-20",
        "name": "Puppetry traditions entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-21",
        "name": "Puppetry traditions entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-22",
        "name": "Puppetry traditions entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-23",
        "name": "Puppetry traditions entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "puppetry-traditions-entry-24",
        "name": "Puppetry traditions entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Puppetry traditions.",
        "description": "A supporting encyclopedia entry in the Puppetry traditions subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "puppetry-traditions",
        "puppetry-traditions-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-places",
        "contains",
        "Puppetry traditions places is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-events",
        "contains",
        "Puppetry traditions events is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-objects",
        "contains",
        "Puppetry traditions objects & artifacts is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-factions",
        "contains",
        "Puppetry traditions factions & groups is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-concepts",
        "contains",
        "Puppetry traditions concepts is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-eras",
        "contains",
        "Puppetry traditions eras is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-works",
        "contains",
        "Puppetry traditions works & media is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-symbols",
        "contains",
        "Puppetry traditions symbols is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-controversies",
        "contains",
        "Puppetry traditions controversies is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-sources",
        "contains",
        "Puppetry traditions sources is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-geography",
        "contains",
        "Puppetry traditions geography is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-legacy",
        "contains",
        "Puppetry traditions legacy is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-practices",
        "contains",
        "Puppetry traditions practices is a primary trailhead under Puppetry traditions.",
        0.88,
        0.82
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-1",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-2",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-3",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-4",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-5",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-6",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-7",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-8",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-9",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-10",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-11",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-12",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-13",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-14",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-15",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-16",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-17",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-18",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-19",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-20",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-21",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-22",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-23",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ],
    [
        "puppetry-traditions",
        "puppetry-traditions-entry-24",
        "contains",
        "Supporting entry under Puppetry traditions.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
