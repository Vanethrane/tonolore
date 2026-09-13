/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "digimon-card-game",
        "name": "Digimon Card Game",
        "type": "topic",
        "short_description": "Digimon's Bandai TCG — digivolution lines, colors, and Digital World mythology on cards.",
        "description": "Digimon's Bandai TCG — digivolution lines, colors, and Digital World mythology on cards. This Ton-o-Lore subject maps people, places, products, and ideas tied to Digimon Card Game so readers can follow long-tail connections across the card game hobby."
    },
    {
        "slug": "digimon-card-game-rules",
        "name": "Digimon Card Game rules & formats",
        "type": "topic",
        "short_description": "How Digimon Card Game is played — core loops and competitive or campaign formats.",
        "description": "An encyclopedia entry for the procedures, win conditions, and formats that structure play in Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-setting",
        "name": "Digimon Card Game setting & lore",
        "type": "topic",
        "short_description": "Fiction, theme, and worldbuilding that flavor Digimon Card Game.",
        "description": "The narrative frame around Digimon Card Game — factions, places, and story hooks that make the table feel like a world."
    },
    {
        "slug": "digimon-card-game-figures",
        "name": "Digimon Card Game figures",
        "type": "topic",
        "short_description": "People and named forces central to Digimon Card Game.",
        "description": "A hub for the figures — historical, fictional, or legendary — that readers meet first when exploring Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-places",
        "name": "Digimon Card Game places",
        "type": "place",
        "short_description": "Locations and geographies that frame Digimon Card Game.",
        "description": "Places, regions, and built sites that give Digimon Card Game its map — where events and figures concentrate."
    },
    {
        "slug": "digimon-card-game-events",
        "name": "Digimon Card Game events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Digimon Card Game.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Digimon Card Game timeline."
    },
    {
        "slug": "digimon-card-game-objects",
        "name": "Digimon Card Game objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Digimon Card Game.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-factions",
        "name": "Digimon Card Game factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Digimon Card Game.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-concepts",
        "name": "Digimon Card Game concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Digimon Card Game.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Digimon Card Game readable as a lore graph."
    },
    {
        "slug": "digimon-card-game-eras",
        "name": "Digimon Card Game eras",
        "type": "event",
        "short_description": "Periodization for Digimon Card Game.",
        "description": "Named eras and phases that help readers track how Digimon Card Game changes across time."
    },
    {
        "slug": "digimon-card-game-works",
        "name": "Digimon Card Game works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Digimon Card Game.",
        "description": "Primary works and adaptations through which most audiences encounter Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-symbols",
        "name": "Digimon Card Game symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Digimon Card Game.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-controversies",
        "name": "Digimon Card Game controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Digimon Card Game.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Digimon Card Game argumentative."
    },
    {
        "slug": "digimon-card-game-sources",
        "name": "Digimon Card Game sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Digimon Card Game.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-geography",
        "name": "Digimon Card Game geography",
        "type": "place",
        "short_description": "Broader geographic framing for Digimon Card Game.",
        "description": "Regions, routes, and spatial systems that situate Digimon Card Game beyond single named places."
    },
    {
        "slug": "digimon-card-game-legacy",
        "name": "Digimon Card Game legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Digimon Card Game.",
        "description": "How Digimon Card Game continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "digimon-card-game-practices",
        "name": "Digimon Card Game practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Digimon Card Game.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Digimon Card Game."
    },
    {
        "slug": "digimon-card-game-entry-1",
        "name": "Digimon Card Game entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-2",
        "name": "Digimon Card Game entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-3",
        "name": "Digimon Card Game entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-4",
        "name": "Digimon Card Game entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-5",
        "name": "Digimon Card Game entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-6",
        "name": "Digimon Card Game entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-7",
        "name": "Digimon Card Game entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-8",
        "name": "Digimon Card Game entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-9",
        "name": "Digimon Card Game entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-10",
        "name": "Digimon Card Game entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-11",
        "name": "Digimon Card Game entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-12",
        "name": "Digimon Card Game entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-13",
        "name": "Digimon Card Game entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-14",
        "name": "Digimon Card Game entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-15",
        "name": "Digimon Card Game entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-16",
        "name": "Digimon Card Game entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-17",
        "name": "Digimon Card Game entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-18",
        "name": "Digimon Card Game entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-19",
        "name": "Digimon Card Game entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-20",
        "name": "Digimon Card Game entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-21",
        "name": "Digimon Card Game entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-22",
        "name": "Digimon Card Game entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "digimon-card-game-entry-23",
        "name": "Digimon Card Game entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Digimon Card Game.",
        "description": "A supporting encyclopedia entry in the Digimon Card Game subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "digimon-card-game",
        "digimon-card-game-rules",
        "contains",
        "Rules and formats are the playable spine of the subject.",
        0.9,
        0.85
    ],
    [
        "digimon-card-game",
        "digimon-card-game-setting",
        "contains",
        "Setting lore gives the cards or board pieces narrative weight.",
        0.85,
        0.8
    ],
    [
        "digimon-card-game",
        "digimon-card-game-figures",
        "contains",
        "Digimon Card Game figures is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-places",
        "contains",
        "Digimon Card Game places is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-events",
        "contains",
        "Digimon Card Game events is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-objects",
        "contains",
        "Digimon Card Game objects & artifacts is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-factions",
        "contains",
        "Digimon Card Game factions & groups is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-concepts",
        "contains",
        "Digimon Card Game concepts is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-eras",
        "contains",
        "Digimon Card Game eras is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-works",
        "contains",
        "Digimon Card Game works & media is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-symbols",
        "contains",
        "Digimon Card Game symbols is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-controversies",
        "contains",
        "Digimon Card Game controversies is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-sources",
        "contains",
        "Digimon Card Game sources is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-geography",
        "contains",
        "Digimon Card Game geography is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-legacy",
        "contains",
        "Digimon Card Game legacy is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-practices",
        "contains",
        "Digimon Card Game practices is a primary trailhead under Digimon Card Game.",
        0.88,
        0.82
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-1",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-2",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-3",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-4",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-5",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-6",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-7",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-8",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-9",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-10",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-11",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-12",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-13",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-14",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-15",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-16",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-17",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-18",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-19",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-20",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-21",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-22",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ],
    [
        "digimon-card-game",
        "digimon-card-game-entry-23",
        "contains",
        "Supporting entry under Digimon Card Game.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
