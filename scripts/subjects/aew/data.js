/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aew",
        "name": "AEW",
        "type": "topic",
        "short_description": "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative.",
        "description": "All Elite Wrestling — factions, PPV mythmaking, and the modern U.S. alternative. This Ton-o-Lore subject maps people, places, events, and ideas tied to AEW so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "aew-figures",
        "name": "AEW figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to AEW.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring AEW."
    },
    {
        "slug": "aew-world",
        "name": "AEW world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame AEW.",
        "description": "Geography, institutions, and periodization that give AEW its encyclopedia shape."
    },
    {
        "slug": "aew-places",
        "name": "AEW places",
        "type": "place",
        "short_description": "Locations and geographies that frame AEW.",
        "description": "Places, regions, and built sites that give AEW its map — where events and figures concentrate."
    },
    {
        "slug": "aew-events",
        "name": "AEW events",
        "type": "event",
        "short_description": "Turning points and dated episodes in AEW.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the AEW timeline."
    },
    {
        "slug": "aew-objects",
        "name": "AEW objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to AEW.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through AEW."
    },
    {
        "slug": "aew-factions",
        "name": "AEW factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside AEW.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in AEW."
    },
    {
        "slug": "aew-concepts",
        "name": "AEW concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize AEW.",
        "description": "Keywords, doctrines, systems, and abstract forces that make AEW readable as a lore graph."
    },
    {
        "slug": "aew-eras",
        "name": "AEW eras",
        "type": "event",
        "short_description": "Periodization for AEW.",
        "description": "Named eras and phases that help readers track how AEW changes across time."
    },
    {
        "slug": "aew-works",
        "name": "AEW works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry AEW.",
        "description": "Primary works and adaptations through which most audiences encounter AEW."
    },
    {
        "slug": "aew-symbols",
        "name": "AEW symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with AEW.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside AEW."
    },
    {
        "slug": "aew-controversies",
        "name": "AEW controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in AEW.",
        "description": "Debates, rival canons, scandals, and contested facts that keep AEW argumentative."
    },
    {
        "slug": "aew-sources",
        "name": "AEW sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into AEW.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify AEW."
    },
    {
        "slug": "aew-geography",
        "name": "AEW geography",
        "type": "place",
        "short_description": "Broader geographic framing for AEW.",
        "description": "Regions, routes, and spatial systems that situate AEW beyond single named places."
    },
    {
        "slug": "aew-legacy",
        "name": "AEW legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of AEW.",
        "description": "How AEW continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aew-practices",
        "name": "AEW practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in AEW.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in AEW."
    },
    {
        "slug": "aew-entry-1",
        "name": "AEW entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-2",
        "name": "AEW entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-3",
        "name": "AEW entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-4",
        "name": "AEW entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-5",
        "name": "AEW entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-6",
        "name": "AEW entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-7",
        "name": "AEW entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-8",
        "name": "AEW entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-9",
        "name": "AEW entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-10",
        "name": "AEW entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-11",
        "name": "AEW entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-12",
        "name": "AEW entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-13",
        "name": "AEW entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-14",
        "name": "AEW entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-15",
        "name": "AEW entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-16",
        "name": "AEW entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-17",
        "name": "AEW entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-18",
        "name": "AEW entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-19",
        "name": "AEW entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-20",
        "name": "AEW entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-21",
        "name": "AEW entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-22",
        "name": "AEW entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-23",
        "name": "AEW entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aew-entry-24",
        "name": "AEW entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside AEW.",
        "description": "A supporting encyclopedia entry in the AEW subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aew",
        "aew-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aew",
        "aew-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aew",
        "aew-places",
        "contains",
        "AEW places is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-events",
        "contains",
        "AEW events is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-objects",
        "contains",
        "AEW objects & artifacts is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-factions",
        "contains",
        "AEW factions & groups is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-concepts",
        "contains",
        "AEW concepts is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-eras",
        "contains",
        "AEW eras is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-works",
        "contains",
        "AEW works & media is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-symbols",
        "contains",
        "AEW symbols is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-controversies",
        "contains",
        "AEW controversies is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-sources",
        "contains",
        "AEW sources is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-geography",
        "contains",
        "AEW geography is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-legacy",
        "contains",
        "AEW legacy is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-practices",
        "contains",
        "AEW practices is a primary trailhead under AEW.",
        0.88,
        0.82
    ],
    [
        "aew",
        "aew-entry-1",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-2",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-3",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-4",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-5",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-6",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-7",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-8",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-9",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-10",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-11",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-12",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-13",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-14",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-15",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-16",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-17",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-18",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-19",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-20",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-21",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-22",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-23",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ],
    [
        "aew",
        "aew-entry-24",
        "contains",
        "Supporting entry under AEW.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
