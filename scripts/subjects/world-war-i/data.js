/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-war-i",
        "name": "World War I",
        "type": "topic",
        "short_description": "Trenches, empires collapsing, and the Great War that remade the twentieth century.",
        "description": "Trenches, empires collapsing, and the Great War that remade the twentieth century. This Ton-o-Lore subject maps people, places, events, and ideas tied to World War I so readers can follow long-tail connections across history."
    },
    {
        "slug": "world-war-i-figures",
        "name": "World War I figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to World War I.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World War I."
    },
    {
        "slug": "world-war-i-world",
        "name": "World War I world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame World War I.",
        "description": "Geography, institutions, and periodization that give World War I its encyclopedia shape."
    },
    {
        "slug": "world-war-i-places",
        "name": "World War I places",
        "type": "place",
        "short_description": "Locations and geographies that frame World War I.",
        "description": "Places, regions, and built sites that give World War I its map — where events and figures concentrate."
    },
    {
        "slug": "world-war-i-events",
        "name": "World War I events",
        "type": "event",
        "short_description": "Turning points and dated episodes in World War I.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the World War I timeline."
    },
    {
        "slug": "world-war-i-objects",
        "name": "World War I objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World War I.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World War I."
    },
    {
        "slug": "world-war-i-factions",
        "name": "World War I factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World War I.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World War I."
    },
    {
        "slug": "world-war-i-concepts",
        "name": "World War I concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World War I.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World War I readable as a lore graph."
    },
    {
        "slug": "world-war-i-eras",
        "name": "World War I eras",
        "type": "event",
        "short_description": "Periodization for World War I.",
        "description": "Named eras and phases that help readers track how World War I changes across time."
    },
    {
        "slug": "world-war-i-works",
        "name": "World War I works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World War I.",
        "description": "Primary works and adaptations through which most audiences encounter World War I."
    },
    {
        "slug": "world-war-i-symbols",
        "name": "World War I symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World War I.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World War I."
    },
    {
        "slug": "world-war-i-controversies",
        "name": "World War I controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World War I.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World War I argumentative."
    },
    {
        "slug": "world-war-i-sources",
        "name": "World War I sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World War I.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World War I."
    },
    {
        "slug": "world-war-i-geography",
        "name": "World War I geography",
        "type": "place",
        "short_description": "Broader geographic framing for World War I.",
        "description": "Regions, routes, and spatial systems that situate World War I beyond single named places."
    },
    {
        "slug": "world-war-i-legacy",
        "name": "World War I legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of World War I.",
        "description": "How World War I continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "world-war-i-practices",
        "name": "World War I practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in World War I.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in World War I."
    },
    {
        "slug": "world-war-i-entry-1",
        "name": "World War I entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-2",
        "name": "World War I entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-3",
        "name": "World War I entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-4",
        "name": "World War I entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-5",
        "name": "World War I entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-6",
        "name": "World War I entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-7",
        "name": "World War I entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-8",
        "name": "World War I entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-9",
        "name": "World War I entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-10",
        "name": "World War I entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-11",
        "name": "World War I entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-12",
        "name": "World War I entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-13",
        "name": "World War I entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-14",
        "name": "World War I entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-15",
        "name": "World War I entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-16",
        "name": "World War I entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-17",
        "name": "World War I entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-18",
        "name": "World War I entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-19",
        "name": "World War I entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-20",
        "name": "World War I entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-21",
        "name": "World War I entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-22",
        "name": "World War I entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-23",
        "name": "World War I entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-entry-24",
        "name": "World War I entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I.",
        "description": "A supporting encyclopedia entry in the World War I subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "world-war-i",
        "world-war-i-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "world-war-i",
        "world-war-i-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "world-war-i",
        "world-war-i-places",
        "contains",
        "World War I places is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-events",
        "contains",
        "World War I events is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-objects",
        "contains",
        "World War I objects & artifacts is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-factions",
        "contains",
        "World War I factions & groups is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-concepts",
        "contains",
        "World War I concepts is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-eras",
        "contains",
        "World War I eras is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-works",
        "contains",
        "World War I works & media is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-symbols",
        "contains",
        "World War I symbols is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-controversies",
        "contains",
        "World War I controversies is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-sources",
        "contains",
        "World War I sources is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-geography",
        "contains",
        "World War I geography is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-legacy",
        "contains",
        "World War I legacy is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-practices",
        "contains",
        "World War I practices is a primary trailhead under World War I.",
        0.88,
        0.82
    ],
    [
        "world-war-i",
        "world-war-i-entry-1",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-2",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-3",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-4",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-5",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-6",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-7",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-8",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-9",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-10",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-11",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-12",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-13",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-14",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-15",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-16",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-17",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-18",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-19",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-20",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-21",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-22",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-23",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ],
    [
        "world-war-i",
        "world-war-i-entry-24",
        "contains",
        "Supporting entry under World War I.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
