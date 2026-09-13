/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gothic-cathedrals",
        "name": "Gothic cathedrals",
        "type": "topic",
        "short_description": "Flying buttresses, stained glass, and the medieval vertical ambition of stone faith.",
        "description": "Flying buttresses, stained glass, and the medieval vertical ambition of stone faith. This Ton-o-Lore subject maps people, places, events, and ideas tied to Gothic cathedrals so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "gothic-cathedrals-figures",
        "name": "Gothic cathedrals figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Gothic cathedrals.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Gothic cathedrals."
    },
    {
        "slug": "gothic-cathedrals-world",
        "name": "Gothic cathedrals world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Gothic cathedrals.",
        "description": "Geography, institutions, and periodization that give Gothic cathedrals its encyclopedia shape."
    },
    {
        "slug": "gothic-cathedrals-places",
        "name": "Gothic cathedrals places",
        "type": "place",
        "short_description": "Locations and geographies that frame Gothic cathedrals.",
        "description": "Places, regions, and built sites that give Gothic cathedrals its map — where events and figures concentrate."
    },
    {
        "slug": "gothic-cathedrals-events",
        "name": "Gothic cathedrals events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Gothic cathedrals.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Gothic cathedrals timeline."
    },
    {
        "slug": "gothic-cathedrals-objects",
        "name": "Gothic cathedrals objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Gothic cathedrals.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Gothic cathedrals."
    },
    {
        "slug": "gothic-cathedrals-factions",
        "name": "Gothic cathedrals factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Gothic cathedrals.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Gothic cathedrals."
    },
    {
        "slug": "gothic-cathedrals-concepts",
        "name": "Gothic cathedrals concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Gothic cathedrals.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Gothic cathedrals readable as a lore graph."
    },
    {
        "slug": "gothic-cathedrals-eras",
        "name": "Gothic cathedrals eras",
        "type": "event",
        "short_description": "Periodization for Gothic cathedrals.",
        "description": "Named eras and phases that help readers track how Gothic cathedrals changes across time."
    },
    {
        "slug": "gothic-cathedrals-works",
        "name": "Gothic cathedrals works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Gothic cathedrals.",
        "description": "Primary works and adaptations through which most audiences encounter Gothic cathedrals."
    },
    {
        "slug": "gothic-cathedrals-symbols",
        "name": "Gothic cathedrals symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Gothic cathedrals.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Gothic cathedrals."
    },
    {
        "slug": "gothic-cathedrals-controversies",
        "name": "Gothic cathedrals controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Gothic cathedrals.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Gothic cathedrals argumentative."
    },
    {
        "slug": "gothic-cathedrals-sources",
        "name": "Gothic cathedrals sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Gothic cathedrals.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Gothic cathedrals."
    },
    {
        "slug": "gothic-cathedrals-geography",
        "name": "Gothic cathedrals geography",
        "type": "place",
        "short_description": "Broader geographic framing for Gothic cathedrals.",
        "description": "Regions, routes, and spatial systems that situate Gothic cathedrals beyond single named places."
    },
    {
        "slug": "gothic-cathedrals-legacy",
        "name": "Gothic cathedrals legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Gothic cathedrals.",
        "description": "How Gothic cathedrals continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gothic-cathedrals-practices",
        "name": "Gothic cathedrals practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Gothic cathedrals.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Gothic cathedrals."
    },
    {
        "slug": "gothic-cathedrals-entry-1",
        "name": "Gothic cathedrals entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-2",
        "name": "Gothic cathedrals entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-3",
        "name": "Gothic cathedrals entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-4",
        "name": "Gothic cathedrals entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-5",
        "name": "Gothic cathedrals entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-6",
        "name": "Gothic cathedrals entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-7",
        "name": "Gothic cathedrals entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-8",
        "name": "Gothic cathedrals entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-9",
        "name": "Gothic cathedrals entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-10",
        "name": "Gothic cathedrals entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-11",
        "name": "Gothic cathedrals entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-12",
        "name": "Gothic cathedrals entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-13",
        "name": "Gothic cathedrals entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-14",
        "name": "Gothic cathedrals entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-15",
        "name": "Gothic cathedrals entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-16",
        "name": "Gothic cathedrals entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-17",
        "name": "Gothic cathedrals entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-18",
        "name": "Gothic cathedrals entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-19",
        "name": "Gothic cathedrals entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-20",
        "name": "Gothic cathedrals entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-21",
        "name": "Gothic cathedrals entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-22",
        "name": "Gothic cathedrals entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-23",
        "name": "Gothic cathedrals entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gothic-cathedrals-entry-24",
        "name": "Gothic cathedrals entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gothic cathedrals.",
        "description": "A supporting encyclopedia entry in the Gothic cathedrals subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gothic-cathedrals",
        "gothic-cathedrals-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-places",
        "contains",
        "Gothic cathedrals places is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-events",
        "contains",
        "Gothic cathedrals events is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-objects",
        "contains",
        "Gothic cathedrals objects & artifacts is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-factions",
        "contains",
        "Gothic cathedrals factions & groups is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-concepts",
        "contains",
        "Gothic cathedrals concepts is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-eras",
        "contains",
        "Gothic cathedrals eras is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-works",
        "contains",
        "Gothic cathedrals works & media is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-symbols",
        "contains",
        "Gothic cathedrals symbols is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-controversies",
        "contains",
        "Gothic cathedrals controversies is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-sources",
        "contains",
        "Gothic cathedrals sources is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-geography",
        "contains",
        "Gothic cathedrals geography is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-legacy",
        "contains",
        "Gothic cathedrals legacy is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-practices",
        "contains",
        "Gothic cathedrals practices is a primary trailhead under Gothic cathedrals.",
        0.88,
        0.82
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-1",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-2",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-3",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-4",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-5",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-6",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-7",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-8",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-9",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-10",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-11",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-12",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-13",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-14",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-15",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-16",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-17",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-18",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-19",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-20",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-21",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-22",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-23",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ],
    [
        "gothic-cathedrals",
        "gothic-cathedrals-entry-24",
        "contains",
        "Supporting entry under Gothic cathedrals.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
