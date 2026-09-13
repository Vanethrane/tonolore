/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "sacred-texts-canon",
        "name": "Sacred texts & canons",
        "type": "topic",
        "short_description": "Scriptures, councils, and the editorial battles that defined holy books.",
        "description": "Scriptures, councils, and the editorial battles that defined holy books. This Ton-o-Lore subject maps people, places, events, and ideas tied to Sacred texts & canons so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "sacred-texts-canon-figures",
        "name": "Sacred texts & canons figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Sacred texts & canons.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Sacred texts & canons."
    },
    {
        "slug": "sacred-texts-canon-world",
        "name": "Sacred texts & canons world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Sacred texts & canons.",
        "description": "Geography, institutions, and periodization that give Sacred texts & canons its encyclopedia shape."
    },
    {
        "slug": "sacred-texts-canon-places",
        "name": "Sacred texts & canons places",
        "type": "place",
        "short_description": "Locations and geographies that frame Sacred texts & canons.",
        "description": "Places, regions, and built sites that give Sacred texts & canons its map — where events and figures concentrate."
    },
    {
        "slug": "sacred-texts-canon-events",
        "name": "Sacred texts & canons events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Sacred texts & canons.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Sacred texts & canons timeline."
    },
    {
        "slug": "sacred-texts-canon-objects",
        "name": "Sacred texts & canons objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Sacred texts & canons.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Sacred texts & canons."
    },
    {
        "slug": "sacred-texts-canon-factions",
        "name": "Sacred texts & canons factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Sacred texts & canons.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Sacred texts & canons."
    },
    {
        "slug": "sacred-texts-canon-concepts",
        "name": "Sacred texts & canons concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Sacred texts & canons.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Sacred texts & canons readable as a lore graph."
    },
    {
        "slug": "sacred-texts-canon-eras",
        "name": "Sacred texts & canons eras",
        "type": "event",
        "short_description": "Periodization for Sacred texts & canons.",
        "description": "Named eras and phases that help readers track how Sacred texts & canons changes across time."
    },
    {
        "slug": "sacred-texts-canon-works",
        "name": "Sacred texts & canons works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Sacred texts & canons.",
        "description": "Primary works and adaptations through which most audiences encounter Sacred texts & canons."
    },
    {
        "slug": "sacred-texts-canon-symbols",
        "name": "Sacred texts & canons symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Sacred texts & canons.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Sacred texts & canons."
    },
    {
        "slug": "sacred-texts-canon-controversies",
        "name": "Sacred texts & canons controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Sacred texts & canons.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Sacred texts & canons argumentative."
    },
    {
        "slug": "sacred-texts-canon-sources",
        "name": "Sacred texts & canons sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Sacred texts & canons.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Sacred texts & canons."
    },
    {
        "slug": "sacred-texts-canon-geography",
        "name": "Sacred texts & canons geography",
        "type": "place",
        "short_description": "Broader geographic framing for Sacred texts & canons.",
        "description": "Regions, routes, and spatial systems that situate Sacred texts & canons beyond single named places."
    },
    {
        "slug": "sacred-texts-canon-legacy",
        "name": "Sacred texts & canons legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Sacred texts & canons.",
        "description": "How Sacred texts & canons continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "sacred-texts-canon-practices",
        "name": "Sacred texts & canons practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Sacred texts & canons.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Sacred texts & canons."
    },
    {
        "slug": "sacred-texts-canon-entry-1",
        "name": "Sacred texts & canons entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-2",
        "name": "Sacred texts & canons entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-3",
        "name": "Sacred texts & canons entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-4",
        "name": "Sacred texts & canons entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-5",
        "name": "Sacred texts & canons entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-6",
        "name": "Sacred texts & canons entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-7",
        "name": "Sacred texts & canons entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-8",
        "name": "Sacred texts & canons entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-9",
        "name": "Sacred texts & canons entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-10",
        "name": "Sacred texts & canons entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-11",
        "name": "Sacred texts & canons entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-12",
        "name": "Sacred texts & canons entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-13",
        "name": "Sacred texts & canons entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-14",
        "name": "Sacred texts & canons entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-15",
        "name": "Sacred texts & canons entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-16",
        "name": "Sacred texts & canons entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-17",
        "name": "Sacred texts & canons entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-18",
        "name": "Sacred texts & canons entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-19",
        "name": "Sacred texts & canons entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-20",
        "name": "Sacred texts & canons entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-21",
        "name": "Sacred texts & canons entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-22",
        "name": "Sacred texts & canons entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-23",
        "name": "Sacred texts & canons entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "sacred-texts-canon-entry-24",
        "name": "Sacred texts & canons entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Sacred texts & canons.",
        "description": "A supporting encyclopedia entry in the Sacred texts & canons subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "sacred-texts-canon",
        "sacred-texts-canon-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-places",
        "contains",
        "Sacred texts & canons places is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-events",
        "contains",
        "Sacred texts & canons events is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-objects",
        "contains",
        "Sacred texts & canons objects & artifacts is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-factions",
        "contains",
        "Sacred texts & canons factions & groups is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-concepts",
        "contains",
        "Sacred texts & canons concepts is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-eras",
        "contains",
        "Sacred texts & canons eras is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-works",
        "contains",
        "Sacred texts & canons works & media is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-symbols",
        "contains",
        "Sacred texts & canons symbols is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-controversies",
        "contains",
        "Sacred texts & canons controversies is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-sources",
        "contains",
        "Sacred texts & canons sources is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-geography",
        "contains",
        "Sacred texts & canons geography is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-legacy",
        "contains",
        "Sacred texts & canons legacy is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-practices",
        "contains",
        "Sacred texts & canons practices is a primary trailhead under Sacred texts & canons.",
        0.88,
        0.82
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-1",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-2",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-3",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-4",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-5",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-6",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-7",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-8",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-9",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-10",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-11",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-12",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-13",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-14",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-15",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-16",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-17",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-18",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-19",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-20",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-21",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-22",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-23",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ],
    [
        "sacred-texts-canon",
        "sacred-texts-canon-entry-24",
        "contains",
        "Supporting entry under Sacred texts & canons.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
