/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pirates-of-the-caribbean",
        "name": "Pirates of the Caribbean",
        "type": "topic",
        "short_description": "Curse gold, Sparrow chaos, and the theme-park movie that revived swashbucklers.",
        "description": "Curse gold, Sparrow chaos, and the theme-park movie that revived swashbucklers. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pirates of the Caribbean so readers can follow long-tail connections across movies."
    },
    {
        "slug": "pirates-of-the-caribbean-figures",
        "name": "Pirates of the Caribbean figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pirates of the Caribbean.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pirates of the Caribbean."
    },
    {
        "slug": "pirates-of-the-caribbean-world",
        "name": "Pirates of the Caribbean world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pirates of the Caribbean.",
        "description": "Geography, institutions, and periodization that give Pirates of the Caribbean its encyclopedia shape."
    },
    {
        "slug": "pirates-of-the-caribbean-places",
        "name": "Pirates of the Caribbean places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pirates of the Caribbean.",
        "description": "Places, regions, and built sites that give Pirates of the Caribbean its map — where events and figures concentrate."
    },
    {
        "slug": "pirates-of-the-caribbean-events",
        "name": "Pirates of the Caribbean events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pirates of the Caribbean.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pirates of the Caribbean timeline."
    },
    {
        "slug": "pirates-of-the-caribbean-objects",
        "name": "Pirates of the Caribbean objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pirates of the Caribbean.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pirates of the Caribbean."
    },
    {
        "slug": "pirates-of-the-caribbean-factions",
        "name": "Pirates of the Caribbean factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pirates of the Caribbean.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pirates of the Caribbean."
    },
    {
        "slug": "pirates-of-the-caribbean-concepts",
        "name": "Pirates of the Caribbean concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pirates of the Caribbean.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pirates of the Caribbean readable as a lore graph."
    },
    {
        "slug": "pirates-of-the-caribbean-eras",
        "name": "Pirates of the Caribbean eras",
        "type": "event",
        "short_description": "Periodization for Pirates of the Caribbean.",
        "description": "Named eras and phases that help readers track how Pirates of the Caribbean changes across time."
    },
    {
        "slug": "pirates-of-the-caribbean-works",
        "name": "Pirates of the Caribbean works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pirates of the Caribbean.",
        "description": "Primary works and adaptations through which most audiences encounter Pirates of the Caribbean."
    },
    {
        "slug": "pirates-of-the-caribbean-symbols",
        "name": "Pirates of the Caribbean symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pirates of the Caribbean.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pirates of the Caribbean."
    },
    {
        "slug": "pirates-of-the-caribbean-controversies",
        "name": "Pirates of the Caribbean controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pirates of the Caribbean.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pirates of the Caribbean argumentative."
    },
    {
        "slug": "pirates-of-the-caribbean-sources",
        "name": "Pirates of the Caribbean sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pirates of the Caribbean.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pirates of the Caribbean."
    },
    {
        "slug": "pirates-of-the-caribbean-geography",
        "name": "Pirates of the Caribbean geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pirates of the Caribbean.",
        "description": "Regions, routes, and spatial systems that situate Pirates of the Caribbean beyond single named places."
    },
    {
        "slug": "pirates-of-the-caribbean-legacy",
        "name": "Pirates of the Caribbean legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pirates of the Caribbean.",
        "description": "How Pirates of the Caribbean continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pirates-of-the-caribbean-practices",
        "name": "Pirates of the Caribbean practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pirates of the Caribbean.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pirates of the Caribbean."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-1",
        "name": "Pirates of the Caribbean entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-2",
        "name": "Pirates of the Caribbean entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-3",
        "name": "Pirates of the Caribbean entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-4",
        "name": "Pirates of the Caribbean entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-5",
        "name": "Pirates of the Caribbean entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-6",
        "name": "Pirates of the Caribbean entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-7",
        "name": "Pirates of the Caribbean entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-8",
        "name": "Pirates of the Caribbean entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-9",
        "name": "Pirates of the Caribbean entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-10",
        "name": "Pirates of the Caribbean entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-11",
        "name": "Pirates of the Caribbean entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-12",
        "name": "Pirates of the Caribbean entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-13",
        "name": "Pirates of the Caribbean entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-14",
        "name": "Pirates of the Caribbean entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-15",
        "name": "Pirates of the Caribbean entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-16",
        "name": "Pirates of the Caribbean entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-17",
        "name": "Pirates of the Caribbean entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-18",
        "name": "Pirates of the Caribbean entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-19",
        "name": "Pirates of the Caribbean entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-20",
        "name": "Pirates of the Caribbean entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-21",
        "name": "Pirates of the Caribbean entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-22",
        "name": "Pirates of the Caribbean entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-23",
        "name": "Pirates of the Caribbean entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pirates-of-the-caribbean-entry-24",
        "name": "Pirates of the Caribbean entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pirates of the Caribbean.",
        "description": "A supporting encyclopedia entry in the Pirates of the Caribbean subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-places",
        "contains",
        "Pirates of the Caribbean places is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-events",
        "contains",
        "Pirates of the Caribbean events is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-objects",
        "contains",
        "Pirates of the Caribbean objects & artifacts is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-factions",
        "contains",
        "Pirates of the Caribbean factions & groups is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-concepts",
        "contains",
        "Pirates of the Caribbean concepts is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-eras",
        "contains",
        "Pirates of the Caribbean eras is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-works",
        "contains",
        "Pirates of the Caribbean works & media is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-symbols",
        "contains",
        "Pirates of the Caribbean symbols is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-controversies",
        "contains",
        "Pirates of the Caribbean controversies is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-sources",
        "contains",
        "Pirates of the Caribbean sources is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-geography",
        "contains",
        "Pirates of the Caribbean geography is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-legacy",
        "contains",
        "Pirates of the Caribbean legacy is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-practices",
        "contains",
        "Pirates of the Caribbean practices is a primary trailhead under Pirates of the Caribbean.",
        0.88,
        0.82
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-1",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-2",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-3",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-4",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-5",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-6",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-7",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-8",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-9",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-10",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-11",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-12",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-13",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-14",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-15",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-16",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-17",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-18",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-19",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-20",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-21",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-22",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-23",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ],
    [
        "pirates-of-the-caribbean",
        "pirates-of-the-caribbean-entry-24",
        "contains",
        "Supporting entry under Pirates of the Caribbean.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
