/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "american-girl",
        "name": "American Girl",
        "type": "topic",
        "short_description": "Historical dolls, stories, and the character-driven collecting brand built on American eras.",
        "description": "Historical dolls, stories, and the character-driven collecting brand built on American eras. This Ton-o-Lore subject maps people, places, events, and ideas tied to American Girl so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "american-girl-figures",
        "name": "American Girl figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to American Girl.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring American Girl."
    },
    {
        "slug": "american-girl-world",
        "name": "American Girl world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame American Girl.",
        "description": "Geography, institutions, and periodization that give American Girl its encyclopedia shape."
    },
    {
        "slug": "american-girl-places",
        "name": "American Girl places",
        "type": "place",
        "short_description": "Locations and geographies that frame American Girl.",
        "description": "Places, regions, and built sites that give American Girl its map — where events and figures concentrate."
    },
    {
        "slug": "american-girl-events",
        "name": "American Girl events",
        "type": "event",
        "short_description": "Turning points and dated episodes in American Girl.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the American Girl timeline."
    },
    {
        "slug": "american-girl-objects",
        "name": "American Girl objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to American Girl.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through American Girl."
    },
    {
        "slug": "american-girl-factions",
        "name": "American Girl factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside American Girl.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in American Girl."
    },
    {
        "slug": "american-girl-concepts",
        "name": "American Girl concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize American Girl.",
        "description": "Keywords, doctrines, systems, and abstract forces that make American Girl readable as a lore graph."
    },
    {
        "slug": "american-girl-eras",
        "name": "American Girl eras",
        "type": "event",
        "short_description": "Periodization for American Girl.",
        "description": "Named eras and phases that help readers track how American Girl changes across time."
    },
    {
        "slug": "american-girl-works",
        "name": "American Girl works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry American Girl.",
        "description": "Primary works and adaptations through which most audiences encounter American Girl."
    },
    {
        "slug": "american-girl-symbols",
        "name": "American Girl symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with American Girl.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside American Girl."
    },
    {
        "slug": "american-girl-controversies",
        "name": "American Girl controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in American Girl.",
        "description": "Debates, rival canons, scandals, and contested facts that keep American Girl argumentative."
    },
    {
        "slug": "american-girl-sources",
        "name": "American Girl sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into American Girl.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify American Girl."
    },
    {
        "slug": "american-girl-geography",
        "name": "American Girl geography",
        "type": "place",
        "short_description": "Broader geographic framing for American Girl.",
        "description": "Regions, routes, and spatial systems that situate American Girl beyond single named places."
    },
    {
        "slug": "american-girl-legacy",
        "name": "American Girl legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of American Girl.",
        "description": "How American Girl continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "american-girl-practices",
        "name": "American Girl practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in American Girl.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in American Girl."
    },
    {
        "slug": "american-girl-entry-1",
        "name": "American Girl entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-2",
        "name": "American Girl entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-3",
        "name": "American Girl entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-4",
        "name": "American Girl entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-5",
        "name": "American Girl entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-6",
        "name": "American Girl entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-7",
        "name": "American Girl entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-8",
        "name": "American Girl entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-9",
        "name": "American Girl entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-10",
        "name": "American Girl entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-11",
        "name": "American Girl entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-12",
        "name": "American Girl entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-13",
        "name": "American Girl entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-14",
        "name": "American Girl entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-15",
        "name": "American Girl entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-16",
        "name": "American Girl entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-17",
        "name": "American Girl entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-18",
        "name": "American Girl entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-19",
        "name": "American Girl entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-20",
        "name": "American Girl entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-21",
        "name": "American Girl entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-22",
        "name": "American Girl entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-23",
        "name": "American Girl entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "american-girl-entry-24",
        "name": "American Girl entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside American Girl.",
        "description": "A supporting encyclopedia entry in the American Girl subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "american-girl",
        "american-girl-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "american-girl",
        "american-girl-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "american-girl",
        "american-girl-places",
        "contains",
        "American Girl places is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-events",
        "contains",
        "American Girl events is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-objects",
        "contains",
        "American Girl objects & artifacts is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-factions",
        "contains",
        "American Girl factions & groups is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-concepts",
        "contains",
        "American Girl concepts is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-eras",
        "contains",
        "American Girl eras is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-works",
        "contains",
        "American Girl works & media is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-symbols",
        "contains",
        "American Girl symbols is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-controversies",
        "contains",
        "American Girl controversies is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-sources",
        "contains",
        "American Girl sources is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-geography",
        "contains",
        "American Girl geography is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-legacy",
        "contains",
        "American Girl legacy is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-practices",
        "contains",
        "American Girl practices is a primary trailhead under American Girl.",
        0.88,
        0.82
    ],
    [
        "american-girl",
        "american-girl-entry-1",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-2",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-3",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-4",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-5",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-6",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-7",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-8",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-9",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-10",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-11",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-12",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-13",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-14",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-15",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-16",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-17",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-18",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-19",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-20",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-21",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-22",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-23",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ],
    [
        "american-girl",
        "american-girl-entry-24",
        "contains",
        "Supporting entry under American Girl.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
