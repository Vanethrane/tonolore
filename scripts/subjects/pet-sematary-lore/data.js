/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "pet-sematary-lore",
        "name": "Pet Sematary",
        "type": "topic",
        "short_description": "Micmac burial ground, resurrection costs, and King’s New England death-road myth.",
        "description": "Micmac burial ground, resurrection costs, and King’s New England death-road myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Pet Sematary so readers can follow long-tail connections across horror."
    },
    {
        "slug": "pet-sematary-lore-figures",
        "name": "Pet Sematary figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Pet Sematary.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Pet Sematary."
    },
    {
        "slug": "pet-sematary-lore-world",
        "name": "Pet Sematary world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Pet Sematary.",
        "description": "Geography, institutions, and periodization that give Pet Sematary its encyclopedia shape."
    },
    {
        "slug": "pet-sematary-lore-places",
        "name": "Pet Sematary places",
        "type": "place",
        "short_description": "Locations and geographies that frame Pet Sematary.",
        "description": "Places, regions, and built sites that give Pet Sematary its map — where events and figures concentrate."
    },
    {
        "slug": "pet-sematary-lore-events",
        "name": "Pet Sematary events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Pet Sematary.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Pet Sematary timeline."
    },
    {
        "slug": "pet-sematary-lore-objects",
        "name": "Pet Sematary objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Pet Sematary.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Pet Sematary."
    },
    {
        "slug": "pet-sematary-lore-factions",
        "name": "Pet Sematary factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Pet Sematary.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Pet Sematary."
    },
    {
        "slug": "pet-sematary-lore-concepts",
        "name": "Pet Sematary concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Pet Sematary.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Pet Sematary readable as a lore graph."
    },
    {
        "slug": "pet-sematary-lore-eras",
        "name": "Pet Sematary eras",
        "type": "event",
        "short_description": "Periodization for Pet Sematary.",
        "description": "Named eras and phases that help readers track how Pet Sematary changes across time."
    },
    {
        "slug": "pet-sematary-lore-works",
        "name": "Pet Sematary works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Pet Sematary.",
        "description": "Primary works and adaptations through which most audiences encounter Pet Sematary."
    },
    {
        "slug": "pet-sematary-lore-symbols",
        "name": "Pet Sematary symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Pet Sematary.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Pet Sematary."
    },
    {
        "slug": "pet-sematary-lore-controversies",
        "name": "Pet Sematary controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Pet Sematary.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Pet Sematary argumentative."
    },
    {
        "slug": "pet-sematary-lore-sources",
        "name": "Pet Sematary sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Pet Sematary.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Pet Sematary."
    },
    {
        "slug": "pet-sematary-lore-geography",
        "name": "Pet Sematary geography",
        "type": "place",
        "short_description": "Broader geographic framing for Pet Sematary.",
        "description": "Regions, routes, and spatial systems that situate Pet Sematary beyond single named places."
    },
    {
        "slug": "pet-sematary-lore-legacy",
        "name": "Pet Sematary legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Pet Sematary.",
        "description": "How Pet Sematary continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "pet-sematary-lore-practices",
        "name": "Pet Sematary practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Pet Sematary.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Pet Sematary."
    },
    {
        "slug": "pet-sematary-lore-entry-1",
        "name": "Pet Sematary entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-2",
        "name": "Pet Sematary entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-3",
        "name": "Pet Sematary entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-4",
        "name": "Pet Sematary entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-5",
        "name": "Pet Sematary entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-6",
        "name": "Pet Sematary entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-7",
        "name": "Pet Sematary entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-8",
        "name": "Pet Sematary entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-9",
        "name": "Pet Sematary entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-10",
        "name": "Pet Sematary entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-11",
        "name": "Pet Sematary entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-12",
        "name": "Pet Sematary entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-13",
        "name": "Pet Sematary entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-14",
        "name": "Pet Sematary entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-15",
        "name": "Pet Sematary entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-16",
        "name": "Pet Sematary entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-17",
        "name": "Pet Sematary entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-18",
        "name": "Pet Sematary entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-19",
        "name": "Pet Sematary entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-20",
        "name": "Pet Sematary entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-21",
        "name": "Pet Sematary entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-22",
        "name": "Pet Sematary entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-23",
        "name": "Pet Sematary entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "pet-sematary-lore-entry-24",
        "name": "Pet Sematary entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Pet Sematary.",
        "description": "A supporting encyclopedia entry in the Pet Sematary subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "pet-sematary-lore",
        "pet-sematary-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-places",
        "contains",
        "Pet Sematary places is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-events",
        "contains",
        "Pet Sematary events is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-objects",
        "contains",
        "Pet Sematary objects & artifacts is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-factions",
        "contains",
        "Pet Sematary factions & groups is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-concepts",
        "contains",
        "Pet Sematary concepts is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-eras",
        "contains",
        "Pet Sematary eras is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-works",
        "contains",
        "Pet Sematary works & media is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-symbols",
        "contains",
        "Pet Sematary symbols is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-controversies",
        "contains",
        "Pet Sematary controversies is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-sources",
        "contains",
        "Pet Sematary sources is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-geography",
        "contains",
        "Pet Sematary geography is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-legacy",
        "contains",
        "Pet Sematary legacy is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-practices",
        "contains",
        "Pet Sematary practices is a primary trailhead under Pet Sematary.",
        0.88,
        0.82
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-1",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-2",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-3",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-4",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-5",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-6",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-7",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-8",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-9",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-10",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-11",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-12",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-13",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-14",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-15",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-16",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-17",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-18",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-19",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-20",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-21",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-22",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-23",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ],
    [
        "pet-sematary-lore",
        "pet-sematary-lore-entry-24",
        "contains",
        "Supporting entry under Pet Sematary.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
