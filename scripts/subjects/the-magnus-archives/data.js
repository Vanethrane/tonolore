/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "the-magnus-archives",
        "name": "The Magnus Archives",
        "type": "topic",
        "short_description": "Statement horror, Entities, and the archival anthology that defined modern audio horror lore.",
        "description": "Statement horror, Entities, and the archival anthology that defined modern audio horror lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Magnus Archives so readers can follow long-tail connections across podcasts & audio."
    },
    {
        "slug": "the-magnus-archives-figures",
        "name": "The Magnus Archives figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Magnus Archives.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Magnus Archives."
    },
    {
        "slug": "the-magnus-archives-world",
        "name": "The Magnus Archives world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Magnus Archives.",
        "description": "Geography, institutions, and periodization that give The Magnus Archives its encyclopedia shape."
    },
    {
        "slug": "the-magnus-archives-places",
        "name": "The Magnus Archives places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Magnus Archives.",
        "description": "Places, regions, and built sites that give The Magnus Archives its map — where events and figures concentrate."
    },
    {
        "slug": "the-magnus-archives-events",
        "name": "The Magnus Archives events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Magnus Archives.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Magnus Archives timeline."
    },
    {
        "slug": "the-magnus-archives-objects",
        "name": "The Magnus Archives objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Magnus Archives.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Magnus Archives."
    },
    {
        "slug": "the-magnus-archives-factions",
        "name": "The Magnus Archives factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Magnus Archives.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Magnus Archives."
    },
    {
        "slug": "the-magnus-archives-concepts",
        "name": "The Magnus Archives concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Magnus Archives.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Magnus Archives readable as a lore graph."
    },
    {
        "slug": "the-magnus-archives-eras",
        "name": "The Magnus Archives eras",
        "type": "event",
        "short_description": "Periodization for The Magnus Archives.",
        "description": "Named eras and phases that help readers track how The Magnus Archives changes across time."
    },
    {
        "slug": "the-magnus-archives-works",
        "name": "The Magnus Archives works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Magnus Archives.",
        "description": "Primary works and adaptations through which most audiences encounter The Magnus Archives."
    },
    {
        "slug": "the-magnus-archives-symbols",
        "name": "The Magnus Archives symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Magnus Archives.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Magnus Archives."
    },
    {
        "slug": "the-magnus-archives-controversies",
        "name": "The Magnus Archives controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Magnus Archives.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Magnus Archives argumentative."
    },
    {
        "slug": "the-magnus-archives-sources",
        "name": "The Magnus Archives sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Magnus Archives.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Magnus Archives."
    },
    {
        "slug": "the-magnus-archives-geography",
        "name": "The Magnus Archives geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Magnus Archives.",
        "description": "Regions, routes, and spatial systems that situate The Magnus Archives beyond single named places."
    },
    {
        "slug": "the-magnus-archives-legacy",
        "name": "The Magnus Archives legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Magnus Archives.",
        "description": "How The Magnus Archives continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "the-magnus-archives-practices",
        "name": "The Magnus Archives practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Magnus Archives.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Magnus Archives."
    },
    {
        "slug": "the-magnus-archives-entry-1",
        "name": "The Magnus Archives entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-2",
        "name": "The Magnus Archives entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-3",
        "name": "The Magnus Archives entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-4",
        "name": "The Magnus Archives entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-5",
        "name": "The Magnus Archives entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-6",
        "name": "The Magnus Archives entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-7",
        "name": "The Magnus Archives entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-8",
        "name": "The Magnus Archives entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-9",
        "name": "The Magnus Archives entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-10",
        "name": "The Magnus Archives entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-11",
        "name": "The Magnus Archives entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-12",
        "name": "The Magnus Archives entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-13",
        "name": "The Magnus Archives entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-14",
        "name": "The Magnus Archives entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-15",
        "name": "The Magnus Archives entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-16",
        "name": "The Magnus Archives entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-17",
        "name": "The Magnus Archives entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-18",
        "name": "The Magnus Archives entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-19",
        "name": "The Magnus Archives entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-20",
        "name": "The Magnus Archives entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-21",
        "name": "The Magnus Archives entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-22",
        "name": "The Magnus Archives entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-23",
        "name": "The Magnus Archives entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "the-magnus-archives-entry-24",
        "name": "The Magnus Archives entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Magnus Archives.",
        "description": "A supporting encyclopedia entry in the The Magnus Archives subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "the-magnus-archives",
        "the-magnus-archives-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-places",
        "contains",
        "The Magnus Archives places is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-events",
        "contains",
        "The Magnus Archives events is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-objects",
        "contains",
        "The Magnus Archives objects & artifacts is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-factions",
        "contains",
        "The Magnus Archives factions & groups is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-concepts",
        "contains",
        "The Magnus Archives concepts is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-eras",
        "contains",
        "The Magnus Archives eras is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-works",
        "contains",
        "The Magnus Archives works & media is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-symbols",
        "contains",
        "The Magnus Archives symbols is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-controversies",
        "contains",
        "The Magnus Archives controversies is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-sources",
        "contains",
        "The Magnus Archives sources is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-geography",
        "contains",
        "The Magnus Archives geography is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-legacy",
        "contains",
        "The Magnus Archives legacy is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-practices",
        "contains",
        "The Magnus Archives practices is a primary trailhead under The Magnus Archives.",
        0.88,
        0.82
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-1",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-2",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-3",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-4",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-5",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-6",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-7",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-8",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-9",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-10",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-11",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-12",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-13",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-14",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-15",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-16",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-17",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-18",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-19",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-20",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-21",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-22",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-23",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ],
    [
        "the-magnus-archives",
        "the-magnus-archives-entry-24",
        "contains",
        "Supporting entry under The Magnus Archives.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
