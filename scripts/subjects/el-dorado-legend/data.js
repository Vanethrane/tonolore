/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "el-dorado-legend",
        "name": "El Dorado",
        "type": "topic",
        "short_description": "Golden king, failed expeditions, and the South American mirage that drove colonial greed.",
        "description": "Golden king, failed expeditions, and the South American mirage that drove colonial greed. This Ton-o-Lore subject maps people, places, events, and ideas tied to El Dorado so readers can follow long-tail connections across folklore & legend."
    },
    {
        "slug": "el-dorado-legend-figures",
        "name": "El Dorado figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to El Dorado.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring El Dorado."
    },
    {
        "slug": "el-dorado-legend-world",
        "name": "El Dorado world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame El Dorado.",
        "description": "Geography, institutions, and periodization that give El Dorado its encyclopedia shape."
    },
    {
        "slug": "el-dorado-legend-places",
        "name": "El Dorado places",
        "type": "place",
        "short_description": "Locations and geographies that frame El Dorado.",
        "description": "Places, regions, and built sites that give El Dorado its map — where events and figures concentrate."
    },
    {
        "slug": "el-dorado-legend-events",
        "name": "El Dorado events",
        "type": "event",
        "short_description": "Turning points and dated episodes in El Dorado.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the El Dorado timeline."
    },
    {
        "slug": "el-dorado-legend-objects",
        "name": "El Dorado objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to El Dorado.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through El Dorado."
    },
    {
        "slug": "el-dorado-legend-factions",
        "name": "El Dorado factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside El Dorado.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in El Dorado."
    },
    {
        "slug": "el-dorado-legend-concepts",
        "name": "El Dorado concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize El Dorado.",
        "description": "Keywords, doctrines, systems, and abstract forces that make El Dorado readable as a lore graph."
    },
    {
        "slug": "el-dorado-legend-eras",
        "name": "El Dorado eras",
        "type": "event",
        "short_description": "Periodization for El Dorado.",
        "description": "Named eras and phases that help readers track how El Dorado changes across time."
    },
    {
        "slug": "el-dorado-legend-works",
        "name": "El Dorado works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry El Dorado.",
        "description": "Primary works and adaptations through which most audiences encounter El Dorado."
    },
    {
        "slug": "el-dorado-legend-symbols",
        "name": "El Dorado symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with El Dorado.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside El Dorado."
    },
    {
        "slug": "el-dorado-legend-controversies",
        "name": "El Dorado controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in El Dorado.",
        "description": "Debates, rival canons, scandals, and contested facts that keep El Dorado argumentative."
    },
    {
        "slug": "el-dorado-legend-sources",
        "name": "El Dorado sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into El Dorado.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify El Dorado."
    },
    {
        "slug": "el-dorado-legend-geography",
        "name": "El Dorado geography",
        "type": "place",
        "short_description": "Broader geographic framing for El Dorado.",
        "description": "Regions, routes, and spatial systems that situate El Dorado beyond single named places."
    },
    {
        "slug": "el-dorado-legend-legacy",
        "name": "El Dorado legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of El Dorado.",
        "description": "How El Dorado continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "el-dorado-legend-practices",
        "name": "El Dorado practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in El Dorado.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in El Dorado."
    },
    {
        "slug": "el-dorado-legend-entry-1",
        "name": "El Dorado entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-2",
        "name": "El Dorado entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-3",
        "name": "El Dorado entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-4",
        "name": "El Dorado entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-5",
        "name": "El Dorado entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-6",
        "name": "El Dorado entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-7",
        "name": "El Dorado entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-8",
        "name": "El Dorado entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-9",
        "name": "El Dorado entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-10",
        "name": "El Dorado entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-11",
        "name": "El Dorado entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-12",
        "name": "El Dorado entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-13",
        "name": "El Dorado entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-14",
        "name": "El Dorado entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-15",
        "name": "El Dorado entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-16",
        "name": "El Dorado entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-17",
        "name": "El Dorado entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-18",
        "name": "El Dorado entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-19",
        "name": "El Dorado entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-20",
        "name": "El Dorado entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-21",
        "name": "El Dorado entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-22",
        "name": "El Dorado entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-23",
        "name": "El Dorado entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "el-dorado-legend-entry-24",
        "name": "El Dorado entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside El Dorado.",
        "description": "A supporting encyclopedia entry in the El Dorado subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "el-dorado-legend",
        "el-dorado-legend-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-places",
        "contains",
        "El Dorado places is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-events",
        "contains",
        "El Dorado events is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-objects",
        "contains",
        "El Dorado objects & artifacts is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-factions",
        "contains",
        "El Dorado factions & groups is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-concepts",
        "contains",
        "El Dorado concepts is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-eras",
        "contains",
        "El Dorado eras is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-works",
        "contains",
        "El Dorado works & media is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-symbols",
        "contains",
        "El Dorado symbols is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-controversies",
        "contains",
        "El Dorado controversies is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-sources",
        "contains",
        "El Dorado sources is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-geography",
        "contains",
        "El Dorado geography is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-legacy",
        "contains",
        "El Dorado legacy is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-practices",
        "contains",
        "El Dorado practices is a primary trailhead under El Dorado.",
        0.88,
        0.82
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-1",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-2",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-3",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-4",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-5",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-6",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-7",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-8",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-9",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-10",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-11",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-12",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-13",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-14",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-15",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-16",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-17",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-18",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-19",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-20",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-21",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-22",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-23",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ],
    [
        "el-dorado-legend",
        "el-dorado-legend-entry-24",
        "contains",
        "Supporting entry under El Dorado.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
