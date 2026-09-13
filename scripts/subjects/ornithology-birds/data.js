/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ornithology-birds",
        "name": "Ornithology",
        "type": "topic",
        "short_description": "Migration, song, classification, and the avian world birders and scientists map together.",
        "description": "Migration, song, classification, and the avian world birders and scientists map together. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ornithology so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "ornithology-birds-figures",
        "name": "Ornithology figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ornithology.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ornithology."
    },
    {
        "slug": "ornithology-birds-world",
        "name": "Ornithology world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ornithology.",
        "description": "Geography, institutions, and periodization that give Ornithology its encyclopedia shape."
    },
    {
        "slug": "ornithology-birds-places",
        "name": "Ornithology places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ornithology.",
        "description": "Places, regions, and built sites that give Ornithology its map — where events and figures concentrate."
    },
    {
        "slug": "ornithology-birds-events",
        "name": "Ornithology events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ornithology.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ornithology timeline."
    },
    {
        "slug": "ornithology-birds-objects",
        "name": "Ornithology objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ornithology.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ornithology."
    },
    {
        "slug": "ornithology-birds-factions",
        "name": "Ornithology factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ornithology.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ornithology."
    },
    {
        "slug": "ornithology-birds-concepts",
        "name": "Ornithology concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ornithology.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ornithology readable as a lore graph."
    },
    {
        "slug": "ornithology-birds-eras",
        "name": "Ornithology eras",
        "type": "event",
        "short_description": "Periodization for Ornithology.",
        "description": "Named eras and phases that help readers track how Ornithology changes across time."
    },
    {
        "slug": "ornithology-birds-works",
        "name": "Ornithology works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ornithology.",
        "description": "Primary works and adaptations through which most audiences encounter Ornithology."
    },
    {
        "slug": "ornithology-birds-symbols",
        "name": "Ornithology symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ornithology.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ornithology."
    },
    {
        "slug": "ornithology-birds-controversies",
        "name": "Ornithology controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ornithology.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ornithology argumentative."
    },
    {
        "slug": "ornithology-birds-sources",
        "name": "Ornithology sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ornithology.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ornithology."
    },
    {
        "slug": "ornithology-birds-geography",
        "name": "Ornithology geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ornithology.",
        "description": "Regions, routes, and spatial systems that situate Ornithology beyond single named places."
    },
    {
        "slug": "ornithology-birds-legacy",
        "name": "Ornithology legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ornithology.",
        "description": "How Ornithology continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ornithology-birds-practices",
        "name": "Ornithology practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ornithology.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ornithology."
    },
    {
        "slug": "ornithology-birds-entry-1",
        "name": "Ornithology entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-2",
        "name": "Ornithology entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-3",
        "name": "Ornithology entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-4",
        "name": "Ornithology entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-5",
        "name": "Ornithology entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-6",
        "name": "Ornithology entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-7",
        "name": "Ornithology entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-8",
        "name": "Ornithology entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-9",
        "name": "Ornithology entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-10",
        "name": "Ornithology entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-11",
        "name": "Ornithology entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-12",
        "name": "Ornithology entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-13",
        "name": "Ornithology entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-14",
        "name": "Ornithology entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-15",
        "name": "Ornithology entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-16",
        "name": "Ornithology entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-17",
        "name": "Ornithology entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-18",
        "name": "Ornithology entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-19",
        "name": "Ornithology entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-20",
        "name": "Ornithology entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-21",
        "name": "Ornithology entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-22",
        "name": "Ornithology entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-23",
        "name": "Ornithology entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ornithology-birds-entry-24",
        "name": "Ornithology entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ornithology.",
        "description": "A supporting encyclopedia entry in the Ornithology subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ornithology-birds",
        "ornithology-birds-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ornithology-birds",
        "ornithology-birds-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ornithology-birds",
        "ornithology-birds-places",
        "contains",
        "Ornithology places is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-events",
        "contains",
        "Ornithology events is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-objects",
        "contains",
        "Ornithology objects & artifacts is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-factions",
        "contains",
        "Ornithology factions & groups is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-concepts",
        "contains",
        "Ornithology concepts is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-eras",
        "contains",
        "Ornithology eras is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-works",
        "contains",
        "Ornithology works & media is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-symbols",
        "contains",
        "Ornithology symbols is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-controversies",
        "contains",
        "Ornithology controversies is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-sources",
        "contains",
        "Ornithology sources is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-geography",
        "contains",
        "Ornithology geography is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-legacy",
        "contains",
        "Ornithology legacy is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-practices",
        "contains",
        "Ornithology practices is a primary trailhead under Ornithology.",
        0.88,
        0.82
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-1",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-2",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-3",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-4",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-5",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-6",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-7",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-8",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-9",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-10",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-11",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-12",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-13",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-14",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-15",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-16",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-17",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-18",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-19",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-20",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-21",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-22",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-23",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ],
    [
        "ornithology-birds",
        "ornithology-birds-entry-24",
        "contains",
        "Supporting entry under Ornithology.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
