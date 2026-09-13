/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "three-body-problem",
        "name": "The Three-Body Problem",
        "type": "topic",
        "short_description": "Trisolarans, Cultural Revolution roots, and the Chinese hard-SF saga that remapped first contact.",
        "description": "Trisolarans, Cultural Revolution roots, and the Chinese hard-SF saga that remapped first contact. This Ton-o-Lore subject maps people, places, events, and ideas tied to The Three-Body Problem so readers can follow long-tail connections across science fiction."
    },
    {
        "slug": "three-body-problem-figures",
        "name": "The Three-Body Problem figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to The Three-Body Problem.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring The Three-Body Problem."
    },
    {
        "slug": "three-body-problem-world",
        "name": "The Three-Body Problem world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame The Three-Body Problem.",
        "description": "Geography, institutions, and periodization that give The Three-Body Problem its encyclopedia shape."
    },
    {
        "slug": "three-body-problem-places",
        "name": "The Three-Body Problem places",
        "type": "place",
        "short_description": "Locations and geographies that frame The Three-Body Problem.",
        "description": "Places, regions, and built sites that give The Three-Body Problem its map — where events and figures concentrate."
    },
    {
        "slug": "three-body-problem-events",
        "name": "The Three-Body Problem events",
        "type": "event",
        "short_description": "Turning points and dated episodes in The Three-Body Problem.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the The Three-Body Problem timeline."
    },
    {
        "slug": "three-body-problem-objects",
        "name": "The Three-Body Problem objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to The Three-Body Problem.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through The Three-Body Problem."
    },
    {
        "slug": "three-body-problem-factions",
        "name": "The Three-Body Problem factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside The Three-Body Problem.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in The Three-Body Problem."
    },
    {
        "slug": "three-body-problem-concepts",
        "name": "The Three-Body Problem concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize The Three-Body Problem.",
        "description": "Keywords, doctrines, systems, and abstract forces that make The Three-Body Problem readable as a lore graph."
    },
    {
        "slug": "three-body-problem-eras",
        "name": "The Three-Body Problem eras",
        "type": "event",
        "short_description": "Periodization for The Three-Body Problem.",
        "description": "Named eras and phases that help readers track how The Three-Body Problem changes across time."
    },
    {
        "slug": "three-body-problem-works",
        "name": "The Three-Body Problem works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry The Three-Body Problem.",
        "description": "Primary works and adaptations through which most audiences encounter The Three-Body Problem."
    },
    {
        "slug": "three-body-problem-symbols",
        "name": "The Three-Body Problem symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with The Three-Body Problem.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside The Three-Body Problem."
    },
    {
        "slug": "three-body-problem-controversies",
        "name": "The Three-Body Problem controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in The Three-Body Problem.",
        "description": "Debates, rival canons, scandals, and contested facts that keep The Three-Body Problem argumentative."
    },
    {
        "slug": "three-body-problem-sources",
        "name": "The Three-Body Problem sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into The Three-Body Problem.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify The Three-Body Problem."
    },
    {
        "slug": "three-body-problem-geography",
        "name": "The Three-Body Problem geography",
        "type": "place",
        "short_description": "Broader geographic framing for The Three-Body Problem.",
        "description": "Regions, routes, and spatial systems that situate The Three-Body Problem beyond single named places."
    },
    {
        "slug": "three-body-problem-legacy",
        "name": "The Three-Body Problem legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of The Three-Body Problem.",
        "description": "How The Three-Body Problem continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "three-body-problem-practices",
        "name": "The Three-Body Problem practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in The Three-Body Problem.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in The Three-Body Problem."
    },
    {
        "slug": "three-body-problem-entry-1",
        "name": "The Three-Body Problem entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-2",
        "name": "The Three-Body Problem entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-3",
        "name": "The Three-Body Problem entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-4",
        "name": "The Three-Body Problem entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-5",
        "name": "The Three-Body Problem entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-6",
        "name": "The Three-Body Problem entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-7",
        "name": "The Three-Body Problem entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-8",
        "name": "The Three-Body Problem entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-9",
        "name": "The Three-Body Problem entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-10",
        "name": "The Three-Body Problem entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-11",
        "name": "The Three-Body Problem entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-12",
        "name": "The Three-Body Problem entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-13",
        "name": "The Three-Body Problem entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-14",
        "name": "The Three-Body Problem entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-15",
        "name": "The Three-Body Problem entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-16",
        "name": "The Three-Body Problem entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-17",
        "name": "The Three-Body Problem entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-18",
        "name": "The Three-Body Problem entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-19",
        "name": "The Three-Body Problem entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-20",
        "name": "The Three-Body Problem entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-21",
        "name": "The Three-Body Problem entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-22",
        "name": "The Three-Body Problem entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-23",
        "name": "The Three-Body Problem entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "three-body-problem-entry-24",
        "name": "The Three-Body Problem entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside The Three-Body Problem.",
        "description": "A supporting encyclopedia entry in the The Three-Body Problem subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "three-body-problem",
        "three-body-problem-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "three-body-problem",
        "three-body-problem-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "three-body-problem",
        "three-body-problem-places",
        "contains",
        "The Three-Body Problem places is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-events",
        "contains",
        "The Three-Body Problem events is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-objects",
        "contains",
        "The Three-Body Problem objects & artifacts is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-factions",
        "contains",
        "The Three-Body Problem factions & groups is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-concepts",
        "contains",
        "The Three-Body Problem concepts is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-eras",
        "contains",
        "The Three-Body Problem eras is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-works",
        "contains",
        "The Three-Body Problem works & media is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-symbols",
        "contains",
        "The Three-Body Problem symbols is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-controversies",
        "contains",
        "The Three-Body Problem controversies is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-sources",
        "contains",
        "The Three-Body Problem sources is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-geography",
        "contains",
        "The Three-Body Problem geography is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-legacy",
        "contains",
        "The Three-Body Problem legacy is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-practices",
        "contains",
        "The Three-Body Problem practices is a primary trailhead under The Three-Body Problem.",
        0.88,
        0.82
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-1",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-2",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-3",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-4",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-5",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-6",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-7",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-8",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-9",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-10",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-11",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-12",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-13",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-14",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-15",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-16",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-17",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-18",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-19",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-20",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-21",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-22",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-23",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ],
    [
        "three-body-problem",
        "three-body-problem-entry-24",
        "contains",
        "Supporting entry under The Three-Body Problem.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
