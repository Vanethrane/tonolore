/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "mission-impossible",
        "name": "Mission: Impossible",
        "type": "topic",
        "short_description": "IMF masks, stunt authenticity, and Cruise’s long-running spy set-piece franchise.",
        "description": "IMF masks, stunt authenticity, and Cruise’s long-running spy set-piece franchise. This Ton-o-Lore subject maps people, places, events, and ideas tied to Mission: Impossible so readers can follow long-tail connections across movies."
    },
    {
        "slug": "mission-impossible-figures",
        "name": "Mission: Impossible figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Mission: Impossible.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Mission: Impossible."
    },
    {
        "slug": "mission-impossible-world",
        "name": "Mission: Impossible world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Mission: Impossible.",
        "description": "Geography, institutions, and periodization that give Mission: Impossible its encyclopedia shape."
    },
    {
        "slug": "mission-impossible-places",
        "name": "Mission: Impossible places",
        "type": "place",
        "short_description": "Locations and geographies that frame Mission: Impossible.",
        "description": "Places, regions, and built sites that give Mission: Impossible its map — where events and figures concentrate."
    },
    {
        "slug": "mission-impossible-events",
        "name": "Mission: Impossible events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Mission: Impossible.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Mission: Impossible timeline."
    },
    {
        "slug": "mission-impossible-objects",
        "name": "Mission: Impossible objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Mission: Impossible.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Mission: Impossible."
    },
    {
        "slug": "mission-impossible-factions",
        "name": "Mission: Impossible factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Mission: Impossible.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Mission: Impossible."
    },
    {
        "slug": "mission-impossible-concepts",
        "name": "Mission: Impossible concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Mission: Impossible.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Mission: Impossible readable as a lore graph."
    },
    {
        "slug": "mission-impossible-eras",
        "name": "Mission: Impossible eras",
        "type": "event",
        "short_description": "Periodization for Mission: Impossible.",
        "description": "Named eras and phases that help readers track how Mission: Impossible changes across time."
    },
    {
        "slug": "mission-impossible-works",
        "name": "Mission: Impossible works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Mission: Impossible.",
        "description": "Primary works and adaptations through which most audiences encounter Mission: Impossible."
    },
    {
        "slug": "mission-impossible-symbols",
        "name": "Mission: Impossible symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Mission: Impossible.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Mission: Impossible."
    },
    {
        "slug": "mission-impossible-controversies",
        "name": "Mission: Impossible controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Mission: Impossible.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Mission: Impossible argumentative."
    },
    {
        "slug": "mission-impossible-sources",
        "name": "Mission: Impossible sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Mission: Impossible.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Mission: Impossible."
    },
    {
        "slug": "mission-impossible-geography",
        "name": "Mission: Impossible geography",
        "type": "place",
        "short_description": "Broader geographic framing for Mission: Impossible.",
        "description": "Regions, routes, and spatial systems that situate Mission: Impossible beyond single named places."
    },
    {
        "slug": "mission-impossible-legacy",
        "name": "Mission: Impossible legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Mission: Impossible.",
        "description": "How Mission: Impossible continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "mission-impossible-practices",
        "name": "Mission: Impossible practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Mission: Impossible.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Mission: Impossible."
    },
    {
        "slug": "mission-impossible-entry-1",
        "name": "Mission: Impossible entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-2",
        "name": "Mission: Impossible entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-3",
        "name": "Mission: Impossible entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-4",
        "name": "Mission: Impossible entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-5",
        "name": "Mission: Impossible entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-6",
        "name": "Mission: Impossible entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-7",
        "name": "Mission: Impossible entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-8",
        "name": "Mission: Impossible entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-9",
        "name": "Mission: Impossible entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-10",
        "name": "Mission: Impossible entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-11",
        "name": "Mission: Impossible entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-12",
        "name": "Mission: Impossible entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-13",
        "name": "Mission: Impossible entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-14",
        "name": "Mission: Impossible entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-15",
        "name": "Mission: Impossible entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-16",
        "name": "Mission: Impossible entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-17",
        "name": "Mission: Impossible entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-18",
        "name": "Mission: Impossible entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-19",
        "name": "Mission: Impossible entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-20",
        "name": "Mission: Impossible entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-21",
        "name": "Mission: Impossible entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-22",
        "name": "Mission: Impossible entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-23",
        "name": "Mission: Impossible entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "mission-impossible-entry-24",
        "name": "Mission: Impossible entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Mission: Impossible.",
        "description": "A supporting encyclopedia entry in the Mission: Impossible subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "mission-impossible",
        "mission-impossible-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "mission-impossible",
        "mission-impossible-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "mission-impossible",
        "mission-impossible-places",
        "contains",
        "Mission: Impossible places is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-events",
        "contains",
        "Mission: Impossible events is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-objects",
        "contains",
        "Mission: Impossible objects & artifacts is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-factions",
        "contains",
        "Mission: Impossible factions & groups is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-concepts",
        "contains",
        "Mission: Impossible concepts is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-eras",
        "contains",
        "Mission: Impossible eras is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-works",
        "contains",
        "Mission: Impossible works & media is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-symbols",
        "contains",
        "Mission: Impossible symbols is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-controversies",
        "contains",
        "Mission: Impossible controversies is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-sources",
        "contains",
        "Mission: Impossible sources is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-geography",
        "contains",
        "Mission: Impossible geography is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-legacy",
        "contains",
        "Mission: Impossible legacy is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-practices",
        "contains",
        "Mission: Impossible practices is a primary trailhead under Mission: Impossible.",
        0.88,
        0.82
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-1",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-2",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-3",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-4",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-5",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-6",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-7",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-8",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-9",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-10",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-11",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-12",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-13",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-14",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-15",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-16",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-17",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-18",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-19",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-20",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-21",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-22",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-23",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ],
    [
        "mission-impossible",
        "mission-impossible-entry-24",
        "contains",
        "Supporting entry under Mission: Impossible.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
