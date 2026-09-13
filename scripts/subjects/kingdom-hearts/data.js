/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "kingdom-hearts",
        "name": "Kingdom Hearts",
        "type": "topic",
        "short_description": "Keyblades, Disney worlds, and the notoriously tangled crossover RPG mythology.",
        "description": "Keyblades, Disney worlds, and the notoriously tangled crossover RPG mythology. This Ton-o-Lore subject maps people, places, events, and ideas tied to Kingdom Hearts so readers can follow long-tail connections across video games."
    },
    {
        "slug": "kingdom-hearts-figures",
        "name": "Kingdom Hearts figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Kingdom Hearts.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Kingdom Hearts."
    },
    {
        "slug": "kingdom-hearts-world",
        "name": "Kingdom Hearts world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Kingdom Hearts.",
        "description": "Geography, institutions, and periodization that give Kingdom Hearts its encyclopedia shape."
    },
    {
        "slug": "kingdom-hearts-places",
        "name": "Kingdom Hearts places",
        "type": "place",
        "short_description": "Locations and geographies that frame Kingdom Hearts.",
        "description": "Places, regions, and built sites that give Kingdom Hearts its map — where events and figures concentrate."
    },
    {
        "slug": "kingdom-hearts-events",
        "name": "Kingdom Hearts events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Kingdom Hearts.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Kingdom Hearts timeline."
    },
    {
        "slug": "kingdom-hearts-objects",
        "name": "Kingdom Hearts objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Kingdom Hearts.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Kingdom Hearts."
    },
    {
        "slug": "kingdom-hearts-factions",
        "name": "Kingdom Hearts factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Kingdom Hearts.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Kingdom Hearts."
    },
    {
        "slug": "kingdom-hearts-concepts",
        "name": "Kingdom Hearts concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Kingdom Hearts.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Kingdom Hearts readable as a lore graph."
    },
    {
        "slug": "kingdom-hearts-eras",
        "name": "Kingdom Hearts eras",
        "type": "event",
        "short_description": "Periodization for Kingdom Hearts.",
        "description": "Named eras and phases that help readers track how Kingdom Hearts changes across time."
    },
    {
        "slug": "kingdom-hearts-works",
        "name": "Kingdom Hearts works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Kingdom Hearts.",
        "description": "Primary works and adaptations through which most audiences encounter Kingdom Hearts."
    },
    {
        "slug": "kingdom-hearts-symbols",
        "name": "Kingdom Hearts symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Kingdom Hearts.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Kingdom Hearts."
    },
    {
        "slug": "kingdom-hearts-controversies",
        "name": "Kingdom Hearts controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Kingdom Hearts.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Kingdom Hearts argumentative."
    },
    {
        "slug": "kingdom-hearts-sources",
        "name": "Kingdom Hearts sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Kingdom Hearts.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Kingdom Hearts."
    },
    {
        "slug": "kingdom-hearts-geography",
        "name": "Kingdom Hearts geography",
        "type": "place",
        "short_description": "Broader geographic framing for Kingdom Hearts.",
        "description": "Regions, routes, and spatial systems that situate Kingdom Hearts beyond single named places."
    },
    {
        "slug": "kingdom-hearts-legacy",
        "name": "Kingdom Hearts legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Kingdom Hearts.",
        "description": "How Kingdom Hearts continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "kingdom-hearts-practices",
        "name": "Kingdom Hearts practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Kingdom Hearts.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Kingdom Hearts."
    },
    {
        "slug": "kingdom-hearts-entry-1",
        "name": "Kingdom Hearts entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-2",
        "name": "Kingdom Hearts entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-3",
        "name": "Kingdom Hearts entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-4",
        "name": "Kingdom Hearts entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-5",
        "name": "Kingdom Hearts entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-6",
        "name": "Kingdom Hearts entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-7",
        "name": "Kingdom Hearts entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-8",
        "name": "Kingdom Hearts entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-9",
        "name": "Kingdom Hearts entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-10",
        "name": "Kingdom Hearts entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-11",
        "name": "Kingdom Hearts entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-12",
        "name": "Kingdom Hearts entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-13",
        "name": "Kingdom Hearts entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-14",
        "name": "Kingdom Hearts entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-15",
        "name": "Kingdom Hearts entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-16",
        "name": "Kingdom Hearts entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-17",
        "name": "Kingdom Hearts entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-18",
        "name": "Kingdom Hearts entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-19",
        "name": "Kingdom Hearts entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-20",
        "name": "Kingdom Hearts entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-21",
        "name": "Kingdom Hearts entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-22",
        "name": "Kingdom Hearts entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-23",
        "name": "Kingdom Hearts entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "kingdom-hearts-entry-24",
        "name": "Kingdom Hearts entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Kingdom Hearts.",
        "description": "A supporting encyclopedia entry in the Kingdom Hearts subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "kingdom-hearts",
        "kingdom-hearts-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-places",
        "contains",
        "Kingdom Hearts places is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-events",
        "contains",
        "Kingdom Hearts events is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-objects",
        "contains",
        "Kingdom Hearts objects & artifacts is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-factions",
        "contains",
        "Kingdom Hearts factions & groups is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-concepts",
        "contains",
        "Kingdom Hearts concepts is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-eras",
        "contains",
        "Kingdom Hearts eras is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-works",
        "contains",
        "Kingdom Hearts works & media is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-symbols",
        "contains",
        "Kingdom Hearts symbols is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-controversies",
        "contains",
        "Kingdom Hearts controversies is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-sources",
        "contains",
        "Kingdom Hearts sources is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-geography",
        "contains",
        "Kingdom Hearts geography is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-legacy",
        "contains",
        "Kingdom Hearts legacy is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-practices",
        "contains",
        "Kingdom Hearts practices is a primary trailhead under Kingdom Hearts.",
        0.88,
        0.82
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-1",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-2",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-3",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-4",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-5",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-6",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-7",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-8",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-9",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-10",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-11",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-12",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-13",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-14",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-15",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-16",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-17",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-18",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-19",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-20",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-21",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-22",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-23",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ],
    [
        "kingdom-hearts",
        "kingdom-hearts-entry-24",
        "contains",
        "Supporting entry under Kingdom Hearts.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
