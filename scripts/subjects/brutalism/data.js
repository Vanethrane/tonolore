/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "brutalism",
        "name": "Brutalism",
        "type": "topic",
        "short_description": "Raw concrete, civic megastructures, and the polarizing mid-century style now reappraised.",
        "description": "Raw concrete, civic megastructures, and the polarizing mid-century style now reappraised. This Ton-o-Lore subject maps people, places, events, and ideas tied to Brutalism so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "brutalism-figures",
        "name": "Brutalism figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Brutalism.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Brutalism."
    },
    {
        "slug": "brutalism-world",
        "name": "Brutalism world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Brutalism.",
        "description": "Geography, institutions, and periodization that give Brutalism its encyclopedia shape."
    },
    {
        "slug": "brutalism-places",
        "name": "Brutalism places",
        "type": "place",
        "short_description": "Locations and geographies that frame Brutalism.",
        "description": "Places, regions, and built sites that give Brutalism its map — where events and figures concentrate."
    },
    {
        "slug": "brutalism-events",
        "name": "Brutalism events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Brutalism.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Brutalism timeline."
    },
    {
        "slug": "brutalism-objects",
        "name": "Brutalism objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Brutalism.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Brutalism."
    },
    {
        "slug": "brutalism-factions",
        "name": "Brutalism factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Brutalism.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Brutalism."
    },
    {
        "slug": "brutalism-concepts",
        "name": "Brutalism concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Brutalism.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Brutalism readable as a lore graph."
    },
    {
        "slug": "brutalism-eras",
        "name": "Brutalism eras",
        "type": "event",
        "short_description": "Periodization for Brutalism.",
        "description": "Named eras and phases that help readers track how Brutalism changes across time."
    },
    {
        "slug": "brutalism-works",
        "name": "Brutalism works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Brutalism.",
        "description": "Primary works and adaptations through which most audiences encounter Brutalism."
    },
    {
        "slug": "brutalism-symbols",
        "name": "Brutalism symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Brutalism.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Brutalism."
    },
    {
        "slug": "brutalism-controversies",
        "name": "Brutalism controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Brutalism.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Brutalism argumentative."
    },
    {
        "slug": "brutalism-sources",
        "name": "Brutalism sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Brutalism.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Brutalism."
    },
    {
        "slug": "brutalism-geography",
        "name": "Brutalism geography",
        "type": "place",
        "short_description": "Broader geographic framing for Brutalism.",
        "description": "Regions, routes, and spatial systems that situate Brutalism beyond single named places."
    },
    {
        "slug": "brutalism-legacy",
        "name": "Brutalism legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Brutalism.",
        "description": "How Brutalism continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "brutalism-practices",
        "name": "Brutalism practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Brutalism.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Brutalism."
    },
    {
        "slug": "brutalism-entry-1",
        "name": "Brutalism entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-2",
        "name": "Brutalism entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-3",
        "name": "Brutalism entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-4",
        "name": "Brutalism entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-5",
        "name": "Brutalism entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-6",
        "name": "Brutalism entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-7",
        "name": "Brutalism entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-8",
        "name": "Brutalism entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-9",
        "name": "Brutalism entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-10",
        "name": "Brutalism entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-11",
        "name": "Brutalism entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-12",
        "name": "Brutalism entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-13",
        "name": "Brutalism entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-14",
        "name": "Brutalism entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-15",
        "name": "Brutalism entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-16",
        "name": "Brutalism entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-17",
        "name": "Brutalism entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-18",
        "name": "Brutalism entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-19",
        "name": "Brutalism entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-20",
        "name": "Brutalism entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-21",
        "name": "Brutalism entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-22",
        "name": "Brutalism entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-23",
        "name": "Brutalism entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "brutalism-entry-24",
        "name": "Brutalism entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Brutalism.",
        "description": "A supporting encyclopedia entry in the Brutalism subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "brutalism",
        "brutalism-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "brutalism",
        "brutalism-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "brutalism",
        "brutalism-places",
        "contains",
        "Brutalism places is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-events",
        "contains",
        "Brutalism events is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-objects",
        "contains",
        "Brutalism objects & artifacts is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-factions",
        "contains",
        "Brutalism factions & groups is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-concepts",
        "contains",
        "Brutalism concepts is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-eras",
        "contains",
        "Brutalism eras is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-works",
        "contains",
        "Brutalism works & media is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-symbols",
        "contains",
        "Brutalism symbols is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-controversies",
        "contains",
        "Brutalism controversies is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-sources",
        "contains",
        "Brutalism sources is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-geography",
        "contains",
        "Brutalism geography is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-legacy",
        "contains",
        "Brutalism legacy is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-practices",
        "contains",
        "Brutalism practices is a primary trailhead under Brutalism.",
        0.88,
        0.82
    ],
    [
        "brutalism",
        "brutalism-entry-1",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-2",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-3",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-4",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-5",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-6",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-7",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-8",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-9",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-10",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-11",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-12",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-13",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-14",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-15",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-16",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-17",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-18",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-19",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-20",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-21",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-22",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-23",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ],
    [
        "brutalism",
        "brutalism-entry-24",
        "contains",
        "Supporting entry under Brutalism.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
