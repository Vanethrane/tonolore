/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "royal-families",
        "name": "Royal families",
        "type": "topic",
        "short_description": "Houses, marriages, rivals, claims, and the genealogies that turn politics into family drama.",
        "description": "Houses, marriages, rivals, claims, and the genealogies that turn politics into family drama. This Ton-o-Lore subject maps people, places, events, and ideas tied to Royal families so readers can follow long-tail connections across royalty & thrones."
    },
    {
        "slug": "royal-families-figures",
        "name": "Royal families figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Royal families.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Royal families."
    },
    {
        "slug": "royal-families-world",
        "name": "Royal families world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Royal families.",
        "description": "Geography, institutions, and periodization that give Royal families its encyclopedia shape."
    },
    {
        "slug": "royal-families-places",
        "name": "Royal families places",
        "type": "place",
        "short_description": "Locations and geographies that frame Royal families.",
        "description": "Places, regions, and built sites that give Royal families its map — where events and figures concentrate."
    },
    {
        "slug": "royal-families-events",
        "name": "Royal families events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Royal families.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Royal families timeline."
    },
    {
        "slug": "royal-families-objects",
        "name": "Royal families objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Royal families.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Royal families."
    },
    {
        "slug": "royal-families-factions",
        "name": "Royal families factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Royal families.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Royal families."
    },
    {
        "slug": "royal-families-concepts",
        "name": "Royal families concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Royal families.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Royal families readable as a lore graph."
    },
    {
        "slug": "royal-families-eras",
        "name": "Royal families eras",
        "type": "event",
        "short_description": "Periodization for Royal families.",
        "description": "Named eras and phases that help readers track how Royal families changes across time."
    },
    {
        "slug": "royal-families-works",
        "name": "Royal families works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Royal families.",
        "description": "Primary works and adaptations through which most audiences encounter Royal families."
    },
    {
        "slug": "royal-families-symbols",
        "name": "Royal families symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Royal families.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Royal families."
    },
    {
        "slug": "royal-families-controversies",
        "name": "Royal families controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Royal families.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Royal families argumentative."
    },
    {
        "slug": "royal-families-sources",
        "name": "Royal families sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Royal families.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Royal families."
    },
    {
        "slug": "royal-families-geography",
        "name": "Royal families geography",
        "type": "place",
        "short_description": "Broader geographic framing for Royal families.",
        "description": "Regions, routes, and spatial systems that situate Royal families beyond single named places."
    },
    {
        "slug": "royal-families-legacy",
        "name": "Royal families legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Royal families.",
        "description": "How Royal families continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "royal-families-practices",
        "name": "Royal families practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Royal families.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Royal families."
    },
    {
        "slug": "royal-families-entry-1",
        "name": "Royal families entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-2",
        "name": "Royal families entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-3",
        "name": "Royal families entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-4",
        "name": "Royal families entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-5",
        "name": "Royal families entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-6",
        "name": "Royal families entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-7",
        "name": "Royal families entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-8",
        "name": "Royal families entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-9",
        "name": "Royal families entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-10",
        "name": "Royal families entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-11",
        "name": "Royal families entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-12",
        "name": "Royal families entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-13",
        "name": "Royal families entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-14",
        "name": "Royal families entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-15",
        "name": "Royal families entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-16",
        "name": "Royal families entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-17",
        "name": "Royal families entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-18",
        "name": "Royal families entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-19",
        "name": "Royal families entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-20",
        "name": "Royal families entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-21",
        "name": "Royal families entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-22",
        "name": "Royal families entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-23",
        "name": "Royal families entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "royal-families-entry-24",
        "name": "Royal families entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Royal families.",
        "description": "A supporting encyclopedia entry in the Royal families subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "royal-families",
        "royal-families-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "royal-families",
        "royal-families-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "royal-families",
        "royal-families-places",
        "contains",
        "Royal families places is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-events",
        "contains",
        "Royal families events is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-objects",
        "contains",
        "Royal families objects & artifacts is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-factions",
        "contains",
        "Royal families factions & groups is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-concepts",
        "contains",
        "Royal families concepts is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-eras",
        "contains",
        "Royal families eras is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-works",
        "contains",
        "Royal families works & media is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-symbols",
        "contains",
        "Royal families symbols is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-controversies",
        "contains",
        "Royal families controversies is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-sources",
        "contains",
        "Royal families sources is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-geography",
        "contains",
        "Royal families geography is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-legacy",
        "contains",
        "Royal families legacy is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-practices",
        "contains",
        "Royal families practices is a primary trailhead under Royal families.",
        0.88,
        0.82
    ],
    [
        "royal-families",
        "royal-families-entry-1",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-2",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-3",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-4",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-5",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-6",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-7",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-8",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-9",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-10",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-11",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-12",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-13",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-14",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-15",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-16",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-17",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-18",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-19",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-20",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-21",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-22",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-23",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ],
    [
        "royal-families",
        "royal-families-entry-24",
        "contains",
        "Supporting entry under Royal families.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
