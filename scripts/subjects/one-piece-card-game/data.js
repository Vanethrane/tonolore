/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "one-piece-card-game",
        "name": "One Piece Card Game",
        "type": "topic",
        "short_description": "DON!! power, leaders, and Bandai’s breakout pirate TCG tied to Eiichiro Oda’s world.",
        "description": "DON!! power, leaders, and Bandai’s breakout pirate TCG tied to Eiichiro Oda’s world. This Ton-o-Lore subject maps people, places, events, and ideas tied to One Piece Card Game so readers can follow long-tail connections across card games."
    },
    {
        "slug": "one-piece-card-game-figures",
        "name": "One Piece Card Game figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to One Piece Card Game.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring One Piece Card Game."
    },
    {
        "slug": "one-piece-card-game-world",
        "name": "One Piece Card Game world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame One Piece Card Game.",
        "description": "Geography, institutions, and periodization that give One Piece Card Game its encyclopedia shape."
    },
    {
        "slug": "one-piece-card-game-places",
        "name": "One Piece Card Game places",
        "type": "place",
        "short_description": "Locations and geographies that frame One Piece Card Game.",
        "description": "Places, regions, and built sites that give One Piece Card Game its map — where events and figures concentrate."
    },
    {
        "slug": "one-piece-card-game-events",
        "name": "One Piece Card Game events",
        "type": "event",
        "short_description": "Turning points and dated episodes in One Piece Card Game.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the One Piece Card Game timeline."
    },
    {
        "slug": "one-piece-card-game-objects",
        "name": "One Piece Card Game objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to One Piece Card Game.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through One Piece Card Game."
    },
    {
        "slug": "one-piece-card-game-factions",
        "name": "One Piece Card Game factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside One Piece Card Game.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in One Piece Card Game."
    },
    {
        "slug": "one-piece-card-game-concepts",
        "name": "One Piece Card Game concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize One Piece Card Game.",
        "description": "Keywords, doctrines, systems, and abstract forces that make One Piece Card Game readable as a lore graph."
    },
    {
        "slug": "one-piece-card-game-eras",
        "name": "One Piece Card Game eras",
        "type": "event",
        "short_description": "Periodization for One Piece Card Game.",
        "description": "Named eras and phases that help readers track how One Piece Card Game changes across time."
    },
    {
        "slug": "one-piece-card-game-works",
        "name": "One Piece Card Game works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry One Piece Card Game.",
        "description": "Primary works and adaptations through which most audiences encounter One Piece Card Game."
    },
    {
        "slug": "one-piece-card-game-symbols",
        "name": "One Piece Card Game symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with One Piece Card Game.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside One Piece Card Game."
    },
    {
        "slug": "one-piece-card-game-controversies",
        "name": "One Piece Card Game controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in One Piece Card Game.",
        "description": "Debates, rival canons, scandals, and contested facts that keep One Piece Card Game argumentative."
    },
    {
        "slug": "one-piece-card-game-sources",
        "name": "One Piece Card Game sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into One Piece Card Game.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify One Piece Card Game."
    },
    {
        "slug": "one-piece-card-game-geography",
        "name": "One Piece Card Game geography",
        "type": "place",
        "short_description": "Broader geographic framing for One Piece Card Game.",
        "description": "Regions, routes, and spatial systems that situate One Piece Card Game beyond single named places."
    },
    {
        "slug": "one-piece-card-game-legacy",
        "name": "One Piece Card Game legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of One Piece Card Game.",
        "description": "How One Piece Card Game continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "one-piece-card-game-practices",
        "name": "One Piece Card Game practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in One Piece Card Game.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in One Piece Card Game."
    },
    {
        "slug": "one-piece-card-game-entry-1",
        "name": "One Piece Card Game entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-2",
        "name": "One Piece Card Game entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-3",
        "name": "One Piece Card Game entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-4",
        "name": "One Piece Card Game entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-5",
        "name": "One Piece Card Game entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-6",
        "name": "One Piece Card Game entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-7",
        "name": "One Piece Card Game entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-8",
        "name": "One Piece Card Game entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-9",
        "name": "One Piece Card Game entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-10",
        "name": "One Piece Card Game entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-11",
        "name": "One Piece Card Game entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-12",
        "name": "One Piece Card Game entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-13",
        "name": "One Piece Card Game entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-14",
        "name": "One Piece Card Game entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-15",
        "name": "One Piece Card Game entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-16",
        "name": "One Piece Card Game entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-17",
        "name": "One Piece Card Game entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-18",
        "name": "One Piece Card Game entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-19",
        "name": "One Piece Card Game entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-20",
        "name": "One Piece Card Game entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-21",
        "name": "One Piece Card Game entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-22",
        "name": "One Piece Card Game entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-23",
        "name": "One Piece Card Game entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "one-piece-card-game-entry-24",
        "name": "One Piece Card Game entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside One Piece Card Game.",
        "description": "A supporting encyclopedia entry in the One Piece Card Game subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "one-piece-card-game",
        "one-piece-card-game-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-places",
        "contains",
        "One Piece Card Game places is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-events",
        "contains",
        "One Piece Card Game events is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-objects",
        "contains",
        "One Piece Card Game objects & artifacts is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-factions",
        "contains",
        "One Piece Card Game factions & groups is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-concepts",
        "contains",
        "One Piece Card Game concepts is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-eras",
        "contains",
        "One Piece Card Game eras is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-works",
        "contains",
        "One Piece Card Game works & media is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-symbols",
        "contains",
        "One Piece Card Game symbols is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-controversies",
        "contains",
        "One Piece Card Game controversies is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-sources",
        "contains",
        "One Piece Card Game sources is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-geography",
        "contains",
        "One Piece Card Game geography is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-legacy",
        "contains",
        "One Piece Card Game legacy is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-practices",
        "contains",
        "One Piece Card Game practices is a primary trailhead under One Piece Card Game.",
        0.88,
        0.82
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-1",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-2",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-3",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-4",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-5",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-6",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-7",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-8",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-9",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-10",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-11",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-12",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-13",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-14",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-15",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-16",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-17",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-18",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-19",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-20",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-21",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-22",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-23",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ],
    [
        "one-piece-card-game",
        "one-piece-card-game-entry-24",
        "contains",
        "Supporting entry under One Piece Card Game.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
