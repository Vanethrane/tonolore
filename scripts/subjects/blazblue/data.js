/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "blazblue",
        "name": "BlazBlue",
        "type": "topic",
        "short_description": "Azure lore, multiple timelines, and the dense anime-fighter successor to Guilty Gear’s spirit.",
        "description": "Azure lore, multiple timelines, and the dense anime-fighter successor to Guilty Gear’s spirit. This Ton-o-Lore subject maps people, places, events, and ideas tied to BlazBlue so readers can follow long-tail connections across fighting games."
    },
    {
        "slug": "blazblue-figures",
        "name": "BlazBlue figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to BlazBlue.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring BlazBlue."
    },
    {
        "slug": "blazblue-world",
        "name": "BlazBlue world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame BlazBlue.",
        "description": "Geography, institutions, and periodization that give BlazBlue its encyclopedia shape."
    },
    {
        "slug": "blazblue-places",
        "name": "BlazBlue places",
        "type": "place",
        "short_description": "Locations and geographies that frame BlazBlue.",
        "description": "Places, regions, and built sites that give BlazBlue its map — where events and figures concentrate."
    },
    {
        "slug": "blazblue-events",
        "name": "BlazBlue events",
        "type": "event",
        "short_description": "Turning points and dated episodes in BlazBlue.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the BlazBlue timeline."
    },
    {
        "slug": "blazblue-objects",
        "name": "BlazBlue objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to BlazBlue.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through BlazBlue."
    },
    {
        "slug": "blazblue-factions",
        "name": "BlazBlue factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside BlazBlue.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in BlazBlue."
    },
    {
        "slug": "blazblue-concepts",
        "name": "BlazBlue concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize BlazBlue.",
        "description": "Keywords, doctrines, systems, and abstract forces that make BlazBlue readable as a lore graph."
    },
    {
        "slug": "blazblue-eras",
        "name": "BlazBlue eras",
        "type": "event",
        "short_description": "Periodization for BlazBlue.",
        "description": "Named eras and phases that help readers track how BlazBlue changes across time."
    },
    {
        "slug": "blazblue-works",
        "name": "BlazBlue works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry BlazBlue.",
        "description": "Primary works and adaptations through which most audiences encounter BlazBlue."
    },
    {
        "slug": "blazblue-symbols",
        "name": "BlazBlue symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with BlazBlue.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside BlazBlue."
    },
    {
        "slug": "blazblue-controversies",
        "name": "BlazBlue controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in BlazBlue.",
        "description": "Debates, rival canons, scandals, and contested facts that keep BlazBlue argumentative."
    },
    {
        "slug": "blazblue-sources",
        "name": "BlazBlue sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into BlazBlue.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify BlazBlue."
    },
    {
        "slug": "blazblue-geography",
        "name": "BlazBlue geography",
        "type": "place",
        "short_description": "Broader geographic framing for BlazBlue.",
        "description": "Regions, routes, and spatial systems that situate BlazBlue beyond single named places."
    },
    {
        "slug": "blazblue-legacy",
        "name": "BlazBlue legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of BlazBlue.",
        "description": "How BlazBlue continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "blazblue-practices",
        "name": "BlazBlue practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in BlazBlue.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in BlazBlue."
    },
    {
        "slug": "blazblue-entry-1",
        "name": "BlazBlue entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-2",
        "name": "BlazBlue entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-3",
        "name": "BlazBlue entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-4",
        "name": "BlazBlue entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-5",
        "name": "BlazBlue entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-6",
        "name": "BlazBlue entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-7",
        "name": "BlazBlue entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-8",
        "name": "BlazBlue entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-9",
        "name": "BlazBlue entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-10",
        "name": "BlazBlue entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-11",
        "name": "BlazBlue entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-12",
        "name": "BlazBlue entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-13",
        "name": "BlazBlue entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-14",
        "name": "BlazBlue entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-15",
        "name": "BlazBlue entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-16",
        "name": "BlazBlue entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-17",
        "name": "BlazBlue entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-18",
        "name": "BlazBlue entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-19",
        "name": "BlazBlue entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-20",
        "name": "BlazBlue entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-21",
        "name": "BlazBlue entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-22",
        "name": "BlazBlue entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-23",
        "name": "BlazBlue entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "blazblue-entry-24",
        "name": "BlazBlue entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside BlazBlue.",
        "description": "A supporting encyclopedia entry in the BlazBlue subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "blazblue",
        "blazblue-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "blazblue",
        "blazblue-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "blazblue",
        "blazblue-places",
        "contains",
        "BlazBlue places is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-events",
        "contains",
        "BlazBlue events is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-objects",
        "contains",
        "BlazBlue objects & artifacts is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-factions",
        "contains",
        "BlazBlue factions & groups is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-concepts",
        "contains",
        "BlazBlue concepts is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-eras",
        "contains",
        "BlazBlue eras is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-works",
        "contains",
        "BlazBlue works & media is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-symbols",
        "contains",
        "BlazBlue symbols is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-controversies",
        "contains",
        "BlazBlue controversies is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-sources",
        "contains",
        "BlazBlue sources is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-geography",
        "contains",
        "BlazBlue geography is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-legacy",
        "contains",
        "BlazBlue legacy is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-practices",
        "contains",
        "BlazBlue practices is a primary trailhead under BlazBlue.",
        0.88,
        0.82
    ],
    [
        "blazblue",
        "blazblue-entry-1",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-2",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-3",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-4",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-5",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-6",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-7",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-8",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-9",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-10",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-11",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-12",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-13",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-14",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-15",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-16",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-17",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-18",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-19",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-20",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-21",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-22",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-23",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ],
    [
        "blazblue",
        "blazblue-entry-24",
        "contains",
        "Supporting entry under BlazBlue.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
