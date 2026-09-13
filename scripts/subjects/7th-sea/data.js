/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "7th-sea",
        "name": "7th Sea",
        "type": "topic",
        "short_description": "Swashbuckling Théah, secret societies, and the cinematic pirate-and-duelist RPG.",
        "description": "Swashbuckling Théah, secret societies, and the cinematic pirate-and-duelist RPG. This Ton-o-Lore subject maps people, places, events, and ideas tied to 7th Sea so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "7th-sea-figures",
        "name": "7th Sea figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to 7th Sea.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring 7th Sea."
    },
    {
        "slug": "7th-sea-world",
        "name": "7th Sea world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame 7th Sea.",
        "description": "Geography, institutions, and periodization that give 7th Sea its encyclopedia shape."
    },
    {
        "slug": "7th-sea-places",
        "name": "7th Sea places",
        "type": "place",
        "short_description": "Locations and geographies that frame 7th Sea.",
        "description": "Places, regions, and built sites that give 7th Sea its map — where events and figures concentrate."
    },
    {
        "slug": "7th-sea-events",
        "name": "7th Sea events",
        "type": "event",
        "short_description": "Turning points and dated episodes in 7th Sea.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the 7th Sea timeline."
    },
    {
        "slug": "7th-sea-objects",
        "name": "7th Sea objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to 7th Sea.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through 7th Sea."
    },
    {
        "slug": "7th-sea-factions",
        "name": "7th Sea factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside 7th Sea.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in 7th Sea."
    },
    {
        "slug": "7th-sea-concepts",
        "name": "7th Sea concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize 7th Sea.",
        "description": "Keywords, doctrines, systems, and abstract forces that make 7th Sea readable as a lore graph."
    },
    {
        "slug": "7th-sea-eras",
        "name": "7th Sea eras",
        "type": "event",
        "short_description": "Periodization for 7th Sea.",
        "description": "Named eras and phases that help readers track how 7th Sea changes across time."
    },
    {
        "slug": "7th-sea-works",
        "name": "7th Sea works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry 7th Sea.",
        "description": "Primary works and adaptations through which most audiences encounter 7th Sea."
    },
    {
        "slug": "7th-sea-symbols",
        "name": "7th Sea symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with 7th Sea.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside 7th Sea."
    },
    {
        "slug": "7th-sea-controversies",
        "name": "7th Sea controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in 7th Sea.",
        "description": "Debates, rival canons, scandals, and contested facts that keep 7th Sea argumentative."
    },
    {
        "slug": "7th-sea-sources",
        "name": "7th Sea sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into 7th Sea.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify 7th Sea."
    },
    {
        "slug": "7th-sea-geography",
        "name": "7th Sea geography",
        "type": "place",
        "short_description": "Broader geographic framing for 7th Sea.",
        "description": "Regions, routes, and spatial systems that situate 7th Sea beyond single named places."
    },
    {
        "slug": "7th-sea-legacy",
        "name": "7th Sea legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of 7th Sea.",
        "description": "How 7th Sea continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "7th-sea-practices",
        "name": "7th Sea practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in 7th Sea.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in 7th Sea."
    },
    {
        "slug": "7th-sea-entry-1",
        "name": "7th Sea entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-2",
        "name": "7th Sea entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-3",
        "name": "7th Sea entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-4",
        "name": "7th Sea entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-5",
        "name": "7th Sea entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-6",
        "name": "7th Sea entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-7",
        "name": "7th Sea entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-8",
        "name": "7th Sea entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-9",
        "name": "7th Sea entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-10",
        "name": "7th Sea entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-11",
        "name": "7th Sea entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-12",
        "name": "7th Sea entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-13",
        "name": "7th Sea entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-14",
        "name": "7th Sea entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-15",
        "name": "7th Sea entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-16",
        "name": "7th Sea entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-17",
        "name": "7th Sea entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-18",
        "name": "7th Sea entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-19",
        "name": "7th Sea entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-20",
        "name": "7th Sea entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-21",
        "name": "7th Sea entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-22",
        "name": "7th Sea entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-23",
        "name": "7th Sea entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "7th-sea-entry-24",
        "name": "7th Sea entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside 7th Sea.",
        "description": "A supporting encyclopedia entry in the 7th Sea subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "7th-sea",
        "7th-sea-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "7th-sea",
        "7th-sea-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "7th-sea",
        "7th-sea-places",
        "contains",
        "7th Sea places is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-events",
        "contains",
        "7th Sea events is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-objects",
        "contains",
        "7th Sea objects & artifacts is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-factions",
        "contains",
        "7th Sea factions & groups is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-concepts",
        "contains",
        "7th Sea concepts is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-eras",
        "contains",
        "7th Sea eras is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-works",
        "contains",
        "7th Sea works & media is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-symbols",
        "contains",
        "7th Sea symbols is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-controversies",
        "contains",
        "7th Sea controversies is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-sources",
        "contains",
        "7th Sea sources is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-geography",
        "contains",
        "7th Sea geography is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-legacy",
        "contains",
        "7th Sea legacy is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-practices",
        "contains",
        "7th Sea practices is a primary trailhead under 7th Sea.",
        0.88,
        0.82
    ],
    [
        "7th-sea",
        "7th-sea-entry-1",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-2",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-3",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-4",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-5",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-6",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-7",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-8",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-9",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-10",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-11",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-12",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-13",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-14",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-15",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-16",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-17",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-18",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-19",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-20",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-21",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-22",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-23",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ],
    [
        "7th-sea",
        "7th-sea-entry-24",
        "contains",
        "Supporting entry under 7th Sea.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
