/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "legend-of-the-five-rings",
        "name": "Legend of the Five Rings",
        "type": "topic",
        "short_description": "Rokugan clans, honor, and the samurai fantasy RPG/LCG continuum.",
        "description": "Rokugan clans, honor, and the samurai fantasy RPG/LCG continuum. This Ton-o-Lore subject maps people, places, events, and ideas tied to Legend of the Five Rings so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "legend-of-the-five-rings-figures",
        "name": "Legend of the Five Rings figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Legend of the Five Rings.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Legend of the Five Rings."
    },
    {
        "slug": "legend-of-the-five-rings-world",
        "name": "Legend of the Five Rings world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Legend of the Five Rings.",
        "description": "Geography, institutions, and periodization that give Legend of the Five Rings its encyclopedia shape."
    },
    {
        "slug": "legend-of-the-five-rings-places",
        "name": "Legend of the Five Rings places",
        "type": "place",
        "short_description": "Locations and geographies that frame Legend of the Five Rings.",
        "description": "Places, regions, and built sites that give Legend of the Five Rings its map — where events and figures concentrate."
    },
    {
        "slug": "legend-of-the-five-rings-events",
        "name": "Legend of the Five Rings events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Legend of the Five Rings.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Legend of the Five Rings timeline."
    },
    {
        "slug": "legend-of-the-five-rings-objects",
        "name": "Legend of the Five Rings objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Legend of the Five Rings.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Legend of the Five Rings."
    },
    {
        "slug": "legend-of-the-five-rings-factions",
        "name": "Legend of the Five Rings factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Legend of the Five Rings.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Legend of the Five Rings."
    },
    {
        "slug": "legend-of-the-five-rings-concepts",
        "name": "Legend of the Five Rings concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Legend of the Five Rings.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Legend of the Five Rings readable as a lore graph."
    },
    {
        "slug": "legend-of-the-five-rings-eras",
        "name": "Legend of the Five Rings eras",
        "type": "event",
        "short_description": "Periodization for Legend of the Five Rings.",
        "description": "Named eras and phases that help readers track how Legend of the Five Rings changes across time."
    },
    {
        "slug": "legend-of-the-five-rings-works",
        "name": "Legend of the Five Rings works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Legend of the Five Rings.",
        "description": "Primary works and adaptations through which most audiences encounter Legend of the Five Rings."
    },
    {
        "slug": "legend-of-the-five-rings-symbols",
        "name": "Legend of the Five Rings symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Legend of the Five Rings.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Legend of the Five Rings."
    },
    {
        "slug": "legend-of-the-five-rings-controversies",
        "name": "Legend of the Five Rings controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Legend of the Five Rings.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Legend of the Five Rings argumentative."
    },
    {
        "slug": "legend-of-the-five-rings-sources",
        "name": "Legend of the Five Rings sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Legend of the Five Rings.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Legend of the Five Rings."
    },
    {
        "slug": "legend-of-the-five-rings-geography",
        "name": "Legend of the Five Rings geography",
        "type": "place",
        "short_description": "Broader geographic framing for Legend of the Five Rings.",
        "description": "Regions, routes, and spatial systems that situate Legend of the Five Rings beyond single named places."
    },
    {
        "slug": "legend-of-the-five-rings-legacy",
        "name": "Legend of the Five Rings legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Legend of the Five Rings.",
        "description": "How Legend of the Five Rings continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "legend-of-the-five-rings-practices",
        "name": "Legend of the Five Rings practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Legend of the Five Rings.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Legend of the Five Rings."
    },
    {
        "slug": "legend-of-the-five-rings-entry-1",
        "name": "Legend of the Five Rings entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-2",
        "name": "Legend of the Five Rings entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-3",
        "name": "Legend of the Five Rings entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-4",
        "name": "Legend of the Five Rings entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-5",
        "name": "Legend of the Five Rings entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-6",
        "name": "Legend of the Five Rings entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-7",
        "name": "Legend of the Five Rings entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-8",
        "name": "Legend of the Five Rings entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-9",
        "name": "Legend of the Five Rings entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-10",
        "name": "Legend of the Five Rings entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-11",
        "name": "Legend of the Five Rings entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-12",
        "name": "Legend of the Five Rings entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-13",
        "name": "Legend of the Five Rings entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-14",
        "name": "Legend of the Five Rings entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-15",
        "name": "Legend of the Five Rings entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-16",
        "name": "Legend of the Five Rings entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-17",
        "name": "Legend of the Five Rings entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-18",
        "name": "Legend of the Five Rings entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-19",
        "name": "Legend of the Five Rings entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-20",
        "name": "Legend of the Five Rings entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-21",
        "name": "Legend of the Five Rings entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-22",
        "name": "Legend of the Five Rings entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-23",
        "name": "Legend of the Five Rings entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "legend-of-the-five-rings-entry-24",
        "name": "Legend of the Five Rings entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Legend of the Five Rings.",
        "description": "A supporting encyclopedia entry in the Legend of the Five Rings subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-places",
        "contains",
        "Legend of the Five Rings places is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-events",
        "contains",
        "Legend of the Five Rings events is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-objects",
        "contains",
        "Legend of the Five Rings objects & artifacts is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-factions",
        "contains",
        "Legend of the Five Rings factions & groups is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-concepts",
        "contains",
        "Legend of the Five Rings concepts is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-eras",
        "contains",
        "Legend of the Five Rings eras is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-works",
        "contains",
        "Legend of the Five Rings works & media is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-symbols",
        "contains",
        "Legend of the Five Rings symbols is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-controversies",
        "contains",
        "Legend of the Five Rings controversies is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-sources",
        "contains",
        "Legend of the Five Rings sources is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-geography",
        "contains",
        "Legend of the Five Rings geography is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-legacy",
        "contains",
        "Legend of the Five Rings legacy is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-practices",
        "contains",
        "Legend of the Five Rings practices is a primary trailhead under Legend of the Five Rings.",
        0.88,
        0.82
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-1",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-2",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-3",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-4",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-5",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-6",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-7",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-8",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-9",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-10",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-11",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-12",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-13",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-14",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-15",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-16",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-17",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-18",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-19",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-20",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-21",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-22",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-23",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ],
    [
        "legend-of-the-five-rings",
        "legend-of-the-five-rings-entry-24",
        "contains",
        "Supporting entry under Legend of the Five Rings.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
