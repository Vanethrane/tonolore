/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "speedrunning",
        "name": "Speedrunning",
        "type": "topic",
        "short_description": "Any% routes, glitch discovery, and the competitive craft of finishing games impossibly fast.",
        "description": "Any% routes, glitch discovery, and the competitive craft of finishing games impossibly fast. This Ton-o-Lore subject maps people, places, events, and ideas tied to Speedrunning so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "speedrunning-figures",
        "name": "Speedrunning figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Speedrunning.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Speedrunning."
    },
    {
        "slug": "speedrunning-world",
        "name": "Speedrunning world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Speedrunning.",
        "description": "Geography, institutions, and periodization that give Speedrunning its encyclopedia shape."
    },
    {
        "slug": "speedrunning-places",
        "name": "Speedrunning places",
        "type": "place",
        "short_description": "Locations and geographies that frame Speedrunning.",
        "description": "Places, regions, and built sites that give Speedrunning its map — where events and figures concentrate."
    },
    {
        "slug": "speedrunning-events",
        "name": "Speedrunning events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Speedrunning.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Speedrunning timeline."
    },
    {
        "slug": "speedrunning-objects",
        "name": "Speedrunning objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Speedrunning.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Speedrunning."
    },
    {
        "slug": "speedrunning-factions",
        "name": "Speedrunning factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Speedrunning.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Speedrunning."
    },
    {
        "slug": "speedrunning-concepts",
        "name": "Speedrunning concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Speedrunning.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Speedrunning readable as a lore graph."
    },
    {
        "slug": "speedrunning-eras",
        "name": "Speedrunning eras",
        "type": "event",
        "short_description": "Periodization for Speedrunning.",
        "description": "Named eras and phases that help readers track how Speedrunning changes across time."
    },
    {
        "slug": "speedrunning-works",
        "name": "Speedrunning works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Speedrunning.",
        "description": "Primary works and adaptations through which most audiences encounter Speedrunning."
    },
    {
        "slug": "speedrunning-symbols",
        "name": "Speedrunning symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Speedrunning.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Speedrunning."
    },
    {
        "slug": "speedrunning-controversies",
        "name": "Speedrunning controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Speedrunning.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Speedrunning argumentative."
    },
    {
        "slug": "speedrunning-sources",
        "name": "Speedrunning sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Speedrunning.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Speedrunning."
    },
    {
        "slug": "speedrunning-geography",
        "name": "Speedrunning geography",
        "type": "place",
        "short_description": "Broader geographic framing for Speedrunning.",
        "description": "Regions, routes, and spatial systems that situate Speedrunning beyond single named places."
    },
    {
        "slug": "speedrunning-legacy",
        "name": "Speedrunning legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Speedrunning.",
        "description": "How Speedrunning continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "speedrunning-practices",
        "name": "Speedrunning practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Speedrunning.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Speedrunning."
    },
    {
        "slug": "speedrunning-entry-1",
        "name": "Speedrunning entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-2",
        "name": "Speedrunning entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-3",
        "name": "Speedrunning entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-4",
        "name": "Speedrunning entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-5",
        "name": "Speedrunning entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-6",
        "name": "Speedrunning entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-7",
        "name": "Speedrunning entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-8",
        "name": "Speedrunning entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-9",
        "name": "Speedrunning entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-10",
        "name": "Speedrunning entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-11",
        "name": "Speedrunning entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-12",
        "name": "Speedrunning entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-13",
        "name": "Speedrunning entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-14",
        "name": "Speedrunning entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-15",
        "name": "Speedrunning entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-16",
        "name": "Speedrunning entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-17",
        "name": "Speedrunning entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-18",
        "name": "Speedrunning entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-19",
        "name": "Speedrunning entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-20",
        "name": "Speedrunning entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-21",
        "name": "Speedrunning entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-22",
        "name": "Speedrunning entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-23",
        "name": "Speedrunning entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "speedrunning-entry-24",
        "name": "Speedrunning entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Speedrunning.",
        "description": "A supporting encyclopedia entry in the Speedrunning subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "speedrunning",
        "speedrunning-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "speedrunning",
        "speedrunning-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "speedrunning",
        "speedrunning-places",
        "contains",
        "Speedrunning places is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-events",
        "contains",
        "Speedrunning events is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-objects",
        "contains",
        "Speedrunning objects & artifacts is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-factions",
        "contains",
        "Speedrunning factions & groups is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-concepts",
        "contains",
        "Speedrunning concepts is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-eras",
        "contains",
        "Speedrunning eras is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-works",
        "contains",
        "Speedrunning works & media is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-symbols",
        "contains",
        "Speedrunning symbols is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-controversies",
        "contains",
        "Speedrunning controversies is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-sources",
        "contains",
        "Speedrunning sources is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-geography",
        "contains",
        "Speedrunning geography is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-legacy",
        "contains",
        "Speedrunning legacy is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-practices",
        "contains",
        "Speedrunning practices is a primary trailhead under Speedrunning.",
        0.88,
        0.82
    ],
    [
        "speedrunning",
        "speedrunning-entry-1",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-2",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-3",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-4",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-5",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-6",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-7",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-8",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-9",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-10",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-11",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-12",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-13",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-14",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-15",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-16",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-17",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-18",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-19",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-20",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-21",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-22",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-23",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ],
    [
        "speedrunning",
        "speedrunning-entry-24",
        "contains",
        "Supporting entry under Speedrunning.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
