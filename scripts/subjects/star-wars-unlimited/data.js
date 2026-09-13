/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "star-wars-unlimited",
        "name": "Star Wars: Unlimited",
        "type": "topic",
        "short_description": "Bases, aspects, and the new Star Wars TCG competing for table space in a crowded galaxy.",
        "description": "Bases, aspects, and the new Star Wars TCG competing for table space in a crowded galaxy. This Ton-o-Lore subject maps people, places, events, and ideas tied to Star Wars: Unlimited so readers can follow long-tail connections across card games."
    },
    {
        "slug": "star-wars-unlimited-figures",
        "name": "Star Wars: Unlimited figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Star Wars: Unlimited.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Star Wars: Unlimited."
    },
    {
        "slug": "star-wars-unlimited-world",
        "name": "Star Wars: Unlimited world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Star Wars: Unlimited.",
        "description": "Geography, institutions, and periodization that give Star Wars: Unlimited its encyclopedia shape."
    },
    {
        "slug": "star-wars-unlimited-places",
        "name": "Star Wars: Unlimited places",
        "type": "place",
        "short_description": "Locations and geographies that frame Star Wars: Unlimited.",
        "description": "Places, regions, and built sites that give Star Wars: Unlimited its map — where events and figures concentrate."
    },
    {
        "slug": "star-wars-unlimited-events",
        "name": "Star Wars: Unlimited events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Star Wars: Unlimited.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Star Wars: Unlimited timeline."
    },
    {
        "slug": "star-wars-unlimited-objects",
        "name": "Star Wars: Unlimited objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Star Wars: Unlimited.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Star Wars: Unlimited."
    },
    {
        "slug": "star-wars-unlimited-factions",
        "name": "Star Wars: Unlimited factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Star Wars: Unlimited.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Star Wars: Unlimited."
    },
    {
        "slug": "star-wars-unlimited-concepts",
        "name": "Star Wars: Unlimited concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Star Wars: Unlimited.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Star Wars: Unlimited readable as a lore graph."
    },
    {
        "slug": "star-wars-unlimited-eras",
        "name": "Star Wars: Unlimited eras",
        "type": "event",
        "short_description": "Periodization for Star Wars: Unlimited.",
        "description": "Named eras and phases that help readers track how Star Wars: Unlimited changes across time."
    },
    {
        "slug": "star-wars-unlimited-works",
        "name": "Star Wars: Unlimited works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Star Wars: Unlimited.",
        "description": "Primary works and adaptations through which most audiences encounter Star Wars: Unlimited."
    },
    {
        "slug": "star-wars-unlimited-symbols",
        "name": "Star Wars: Unlimited symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Star Wars: Unlimited.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Star Wars: Unlimited."
    },
    {
        "slug": "star-wars-unlimited-controversies",
        "name": "Star Wars: Unlimited controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Star Wars: Unlimited.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Star Wars: Unlimited argumentative."
    },
    {
        "slug": "star-wars-unlimited-sources",
        "name": "Star Wars: Unlimited sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Star Wars: Unlimited.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Star Wars: Unlimited."
    },
    {
        "slug": "star-wars-unlimited-geography",
        "name": "Star Wars: Unlimited geography",
        "type": "place",
        "short_description": "Broader geographic framing for Star Wars: Unlimited.",
        "description": "Regions, routes, and spatial systems that situate Star Wars: Unlimited beyond single named places."
    },
    {
        "slug": "star-wars-unlimited-legacy",
        "name": "Star Wars: Unlimited legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Star Wars: Unlimited.",
        "description": "How Star Wars: Unlimited continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "star-wars-unlimited-practices",
        "name": "Star Wars: Unlimited practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Star Wars: Unlimited.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Star Wars: Unlimited."
    },
    {
        "slug": "star-wars-unlimited-entry-1",
        "name": "Star Wars: Unlimited entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-2",
        "name": "Star Wars: Unlimited entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-3",
        "name": "Star Wars: Unlimited entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-4",
        "name": "Star Wars: Unlimited entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-5",
        "name": "Star Wars: Unlimited entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-6",
        "name": "Star Wars: Unlimited entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-7",
        "name": "Star Wars: Unlimited entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-8",
        "name": "Star Wars: Unlimited entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-9",
        "name": "Star Wars: Unlimited entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-10",
        "name": "Star Wars: Unlimited entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-11",
        "name": "Star Wars: Unlimited entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-12",
        "name": "Star Wars: Unlimited entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-13",
        "name": "Star Wars: Unlimited entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-14",
        "name": "Star Wars: Unlimited entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-15",
        "name": "Star Wars: Unlimited entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-16",
        "name": "Star Wars: Unlimited entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-17",
        "name": "Star Wars: Unlimited entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-18",
        "name": "Star Wars: Unlimited entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-19",
        "name": "Star Wars: Unlimited entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-20",
        "name": "Star Wars: Unlimited entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-21",
        "name": "Star Wars: Unlimited entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-22",
        "name": "Star Wars: Unlimited entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-23",
        "name": "Star Wars: Unlimited entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "star-wars-unlimited-entry-24",
        "name": "Star Wars: Unlimited entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Star Wars: Unlimited.",
        "description": "A supporting encyclopedia entry in the Star Wars: Unlimited subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "star-wars-unlimited",
        "star-wars-unlimited-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-places",
        "contains",
        "Star Wars: Unlimited places is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-events",
        "contains",
        "Star Wars: Unlimited events is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-objects",
        "contains",
        "Star Wars: Unlimited objects & artifacts is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-factions",
        "contains",
        "Star Wars: Unlimited factions & groups is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-concepts",
        "contains",
        "Star Wars: Unlimited concepts is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-eras",
        "contains",
        "Star Wars: Unlimited eras is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-works",
        "contains",
        "Star Wars: Unlimited works & media is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-symbols",
        "contains",
        "Star Wars: Unlimited symbols is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-controversies",
        "contains",
        "Star Wars: Unlimited controversies is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-sources",
        "contains",
        "Star Wars: Unlimited sources is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-geography",
        "contains",
        "Star Wars: Unlimited geography is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-legacy",
        "contains",
        "Star Wars: Unlimited legacy is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-practices",
        "contains",
        "Star Wars: Unlimited practices is a primary trailhead under Star Wars: Unlimited.",
        0.88,
        0.82
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-1",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-2",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-3",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-4",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-5",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-6",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-7",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-8",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-9",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-10",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-11",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-12",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-13",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-14",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-15",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-16",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-17",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-18",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-19",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-20",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-21",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-22",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-23",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ],
    [
        "star-wars-unlimited",
        "star-wars-unlimited-entry-24",
        "contains",
        "Supporting entry under Star Wars: Unlimited.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
