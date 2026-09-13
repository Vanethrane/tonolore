/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "twin-peaks-horror",
        "name": "Twin Peaks",
        "type": "topic",
        "short_description": "Black Lodge, Laura Palmer, and the surreal Pacific Northwest mythos of small-town evil.",
        "description": "Black Lodge, Laura Palmer, and the surreal Pacific Northwest mythos of small-town evil. This Ton-o-Lore subject maps people, places, events, and ideas tied to Twin Peaks so readers can follow long-tail connections across horror."
    },
    {
        "slug": "twin-peaks-horror-figures",
        "name": "Twin Peaks figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Twin Peaks.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Twin Peaks."
    },
    {
        "slug": "twin-peaks-horror-world",
        "name": "Twin Peaks world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Twin Peaks.",
        "description": "Geography, institutions, and periodization that give Twin Peaks its encyclopedia shape."
    },
    {
        "slug": "twin-peaks-horror-places",
        "name": "Twin Peaks places",
        "type": "place",
        "short_description": "Locations and geographies that frame Twin Peaks.",
        "description": "Places, regions, and built sites that give Twin Peaks its map — where events and figures concentrate."
    },
    {
        "slug": "twin-peaks-horror-events",
        "name": "Twin Peaks events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Twin Peaks.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Twin Peaks timeline."
    },
    {
        "slug": "twin-peaks-horror-objects",
        "name": "Twin Peaks objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Twin Peaks.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Twin Peaks."
    },
    {
        "slug": "twin-peaks-horror-factions",
        "name": "Twin Peaks factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Twin Peaks.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Twin Peaks."
    },
    {
        "slug": "twin-peaks-horror-concepts",
        "name": "Twin Peaks concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Twin Peaks.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Twin Peaks readable as a lore graph."
    },
    {
        "slug": "twin-peaks-horror-eras",
        "name": "Twin Peaks eras",
        "type": "event",
        "short_description": "Periodization for Twin Peaks.",
        "description": "Named eras and phases that help readers track how Twin Peaks changes across time."
    },
    {
        "slug": "twin-peaks-horror-works",
        "name": "Twin Peaks works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Twin Peaks.",
        "description": "Primary works and adaptations through which most audiences encounter Twin Peaks."
    },
    {
        "slug": "twin-peaks-horror-symbols",
        "name": "Twin Peaks symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Twin Peaks.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Twin Peaks."
    },
    {
        "slug": "twin-peaks-horror-controversies",
        "name": "Twin Peaks controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Twin Peaks.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Twin Peaks argumentative."
    },
    {
        "slug": "twin-peaks-horror-sources",
        "name": "Twin Peaks sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Twin Peaks.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Twin Peaks."
    },
    {
        "slug": "twin-peaks-horror-geography",
        "name": "Twin Peaks geography",
        "type": "place",
        "short_description": "Broader geographic framing for Twin Peaks.",
        "description": "Regions, routes, and spatial systems that situate Twin Peaks beyond single named places."
    },
    {
        "slug": "twin-peaks-horror-legacy",
        "name": "Twin Peaks legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Twin Peaks.",
        "description": "How Twin Peaks continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "twin-peaks-horror-practices",
        "name": "Twin Peaks practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Twin Peaks.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Twin Peaks."
    },
    {
        "slug": "twin-peaks-horror-entry-1",
        "name": "Twin Peaks entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-2",
        "name": "Twin Peaks entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-3",
        "name": "Twin Peaks entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-4",
        "name": "Twin Peaks entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-5",
        "name": "Twin Peaks entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-6",
        "name": "Twin Peaks entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-7",
        "name": "Twin Peaks entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-8",
        "name": "Twin Peaks entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-9",
        "name": "Twin Peaks entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-10",
        "name": "Twin Peaks entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-11",
        "name": "Twin Peaks entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-12",
        "name": "Twin Peaks entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-13",
        "name": "Twin Peaks entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-14",
        "name": "Twin Peaks entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-15",
        "name": "Twin Peaks entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-16",
        "name": "Twin Peaks entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-17",
        "name": "Twin Peaks entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-18",
        "name": "Twin Peaks entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-19",
        "name": "Twin Peaks entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-20",
        "name": "Twin Peaks entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-21",
        "name": "Twin Peaks entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-22",
        "name": "Twin Peaks entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-23",
        "name": "Twin Peaks entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twin-peaks-horror-entry-24",
        "name": "Twin Peaks entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twin Peaks.",
        "description": "A supporting encyclopedia entry in the Twin Peaks subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "twin-peaks-horror",
        "twin-peaks-horror-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-places",
        "contains",
        "Twin Peaks places is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-events",
        "contains",
        "Twin Peaks events is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-objects",
        "contains",
        "Twin Peaks objects & artifacts is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-factions",
        "contains",
        "Twin Peaks factions & groups is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-concepts",
        "contains",
        "Twin Peaks concepts is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-eras",
        "contains",
        "Twin Peaks eras is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-works",
        "contains",
        "Twin Peaks works & media is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-symbols",
        "contains",
        "Twin Peaks symbols is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-controversies",
        "contains",
        "Twin Peaks controversies is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-sources",
        "contains",
        "Twin Peaks sources is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-geography",
        "contains",
        "Twin Peaks geography is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-legacy",
        "contains",
        "Twin Peaks legacy is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-practices",
        "contains",
        "Twin Peaks practices is a primary trailhead under Twin Peaks.",
        0.88,
        0.82
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-1",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-2",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-3",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-4",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-5",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-6",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-7",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-8",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-9",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-10",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-11",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-12",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-13",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-14",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-15",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-16",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-17",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-18",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-19",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-20",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-21",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-22",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-23",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ],
    [
        "twin-peaks-horror",
        "twin-peaks-horror-entry-24",
        "contains",
        "Supporting entry under Twin Peaks.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
