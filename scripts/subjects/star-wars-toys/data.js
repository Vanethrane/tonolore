/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "star-wars-toys",
        "name": "Star Wars toys",
        "type": "topic",
        "short_description": "Kenner-to-Hasbro figures, vehicles, and the collecting lore that mapped a galaxy onto shelves.",
        "description": "Kenner-to-Hasbro figures, vehicles, and the collecting lore that mapped a galaxy onto shelves. This Ton-o-Lore subject maps people, places, events, and ideas tied to Star Wars toys so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "star-wars-toys-figures",
        "name": "Star Wars toys figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Star Wars toys.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Star Wars toys."
    },
    {
        "slug": "star-wars-toys-world",
        "name": "Star Wars toys world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Star Wars toys.",
        "description": "Geography, institutions, and periodization that give Star Wars toys its encyclopedia shape."
    },
    {
        "slug": "star-wars-toys-places",
        "name": "Star Wars toys places",
        "type": "place",
        "short_description": "Locations and geographies that frame Star Wars toys.",
        "description": "Places, regions, and built sites that give Star Wars toys its map — where events and figures concentrate."
    },
    {
        "slug": "star-wars-toys-events",
        "name": "Star Wars toys events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Star Wars toys.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Star Wars toys timeline."
    },
    {
        "slug": "star-wars-toys-objects",
        "name": "Star Wars toys objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Star Wars toys.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Star Wars toys."
    },
    {
        "slug": "star-wars-toys-factions",
        "name": "Star Wars toys factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Star Wars toys.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Star Wars toys."
    },
    {
        "slug": "star-wars-toys-concepts",
        "name": "Star Wars toys concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Star Wars toys.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Star Wars toys readable as a lore graph."
    },
    {
        "slug": "star-wars-toys-eras",
        "name": "Star Wars toys eras",
        "type": "event",
        "short_description": "Periodization for Star Wars toys.",
        "description": "Named eras and phases that help readers track how Star Wars toys changes across time."
    },
    {
        "slug": "star-wars-toys-works",
        "name": "Star Wars toys works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Star Wars toys.",
        "description": "Primary works and adaptations through which most audiences encounter Star Wars toys."
    },
    {
        "slug": "star-wars-toys-symbols",
        "name": "Star Wars toys symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Star Wars toys.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Star Wars toys."
    },
    {
        "slug": "star-wars-toys-controversies",
        "name": "Star Wars toys controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Star Wars toys.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Star Wars toys argumentative."
    },
    {
        "slug": "star-wars-toys-sources",
        "name": "Star Wars toys sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Star Wars toys.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Star Wars toys."
    },
    {
        "slug": "star-wars-toys-geography",
        "name": "Star Wars toys geography",
        "type": "place",
        "short_description": "Broader geographic framing for Star Wars toys.",
        "description": "Regions, routes, and spatial systems that situate Star Wars toys beyond single named places."
    },
    {
        "slug": "star-wars-toys-legacy",
        "name": "Star Wars toys legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Star Wars toys.",
        "description": "How Star Wars toys continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "star-wars-toys-practices",
        "name": "Star Wars toys practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Star Wars toys.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Star Wars toys."
    },
    {
        "slug": "star-wars-toys-entry-1",
        "name": "Star Wars toys entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-2",
        "name": "Star Wars toys entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-3",
        "name": "Star Wars toys entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-4",
        "name": "Star Wars toys entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-5",
        "name": "Star Wars toys entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-6",
        "name": "Star Wars toys entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-7",
        "name": "Star Wars toys entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-8",
        "name": "Star Wars toys entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-9",
        "name": "Star Wars toys entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-10",
        "name": "Star Wars toys entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-11",
        "name": "Star Wars toys entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-12",
        "name": "Star Wars toys entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-13",
        "name": "Star Wars toys entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-14",
        "name": "Star Wars toys entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-15",
        "name": "Star Wars toys entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-16",
        "name": "Star Wars toys entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-17",
        "name": "Star Wars toys entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-18",
        "name": "Star Wars toys entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-19",
        "name": "Star Wars toys entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-20",
        "name": "Star Wars toys entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-21",
        "name": "Star Wars toys entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-22",
        "name": "Star Wars toys entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-23",
        "name": "Star Wars toys entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-toys-entry-24",
        "name": "Star Wars toys entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars toys.",
        "description": "A supporting encyclopedia entry in the Star Wars toys subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "star-wars-toys",
        "star-wars-toys-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "star-wars-toys",
        "star-wars-toys-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "star-wars-toys",
        "star-wars-toys-places",
        "contains",
        "Star Wars toys places is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-events",
        "contains",
        "Star Wars toys events is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-objects",
        "contains",
        "Star Wars toys objects & artifacts is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-factions",
        "contains",
        "Star Wars toys factions & groups is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-concepts",
        "contains",
        "Star Wars toys concepts is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-eras",
        "contains",
        "Star Wars toys eras is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-works",
        "contains",
        "Star Wars toys works & media is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-symbols",
        "contains",
        "Star Wars toys symbols is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-controversies",
        "contains",
        "Star Wars toys controversies is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-sources",
        "contains",
        "Star Wars toys sources is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-geography",
        "contains",
        "Star Wars toys geography is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-legacy",
        "contains",
        "Star Wars toys legacy is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-practices",
        "contains",
        "Star Wars toys practices is a primary trailhead under Star Wars toys.",
        0.88,
        0.82
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-1",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-2",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-3",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-4",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-5",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-6",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-7",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-8",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-9",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-10",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-11",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-12",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-13",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-14",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-15",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-16",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-17",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-18",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-19",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-20",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-21",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-22",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-23",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ],
    [
        "star-wars-toys",
        "star-wars-toys-entry-24",
        "contains",
        "Supporting entry under Star Wars toys.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
