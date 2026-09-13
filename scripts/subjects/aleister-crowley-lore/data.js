/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "aleister-crowley-lore",
        "name": "Aleister Crowley lore",
        "type": "topic",
        "short_description": "Thelema, Abbey of Thelema, and the notorious magus who became occult pop culture.",
        "description": "Thelema, Abbey of Thelema, and the notorious magus who became occult pop culture. This Ton-o-Lore subject maps people, places, events, and ideas tied to Aleister Crowley lore so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "aleister-crowley-lore-figures",
        "name": "Aleister Crowley lore figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Aleister Crowley lore.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Aleister Crowley lore."
    },
    {
        "slug": "aleister-crowley-lore-world",
        "name": "Aleister Crowley lore world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Aleister Crowley lore.",
        "description": "Geography, institutions, and periodization that give Aleister Crowley lore its encyclopedia shape."
    },
    {
        "slug": "aleister-crowley-lore-places",
        "name": "Aleister Crowley lore places",
        "type": "place",
        "short_description": "Locations and geographies that frame Aleister Crowley lore.",
        "description": "Places, regions, and built sites that give Aleister Crowley lore its map — where events and figures concentrate."
    },
    {
        "slug": "aleister-crowley-lore-events",
        "name": "Aleister Crowley lore events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Aleister Crowley lore.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Aleister Crowley lore timeline."
    },
    {
        "slug": "aleister-crowley-lore-objects",
        "name": "Aleister Crowley lore objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Aleister Crowley lore.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Aleister Crowley lore."
    },
    {
        "slug": "aleister-crowley-lore-factions",
        "name": "Aleister Crowley lore factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Aleister Crowley lore.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Aleister Crowley lore."
    },
    {
        "slug": "aleister-crowley-lore-concepts",
        "name": "Aleister Crowley lore concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Aleister Crowley lore.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Aleister Crowley lore readable as a lore graph."
    },
    {
        "slug": "aleister-crowley-lore-eras",
        "name": "Aleister Crowley lore eras",
        "type": "event",
        "short_description": "Periodization for Aleister Crowley lore.",
        "description": "Named eras and phases that help readers track how Aleister Crowley lore changes across time."
    },
    {
        "slug": "aleister-crowley-lore-works",
        "name": "Aleister Crowley lore works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Aleister Crowley lore.",
        "description": "Primary works and adaptations through which most audiences encounter Aleister Crowley lore."
    },
    {
        "slug": "aleister-crowley-lore-symbols",
        "name": "Aleister Crowley lore symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Aleister Crowley lore.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Aleister Crowley lore."
    },
    {
        "slug": "aleister-crowley-lore-controversies",
        "name": "Aleister Crowley lore controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Aleister Crowley lore.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Aleister Crowley lore argumentative."
    },
    {
        "slug": "aleister-crowley-lore-sources",
        "name": "Aleister Crowley lore sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Aleister Crowley lore.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Aleister Crowley lore."
    },
    {
        "slug": "aleister-crowley-lore-geography",
        "name": "Aleister Crowley lore geography",
        "type": "place",
        "short_description": "Broader geographic framing for Aleister Crowley lore.",
        "description": "Regions, routes, and spatial systems that situate Aleister Crowley lore beyond single named places."
    },
    {
        "slug": "aleister-crowley-lore-legacy",
        "name": "Aleister Crowley lore legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Aleister Crowley lore.",
        "description": "How Aleister Crowley lore continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "aleister-crowley-lore-practices",
        "name": "Aleister Crowley lore practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Aleister Crowley lore.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Aleister Crowley lore."
    },
    {
        "slug": "aleister-crowley-lore-entry-1",
        "name": "Aleister Crowley lore entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-2",
        "name": "Aleister Crowley lore entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-3",
        "name": "Aleister Crowley lore entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-4",
        "name": "Aleister Crowley lore entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-5",
        "name": "Aleister Crowley lore entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-6",
        "name": "Aleister Crowley lore entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-7",
        "name": "Aleister Crowley lore entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-8",
        "name": "Aleister Crowley lore entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-9",
        "name": "Aleister Crowley lore entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-10",
        "name": "Aleister Crowley lore entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-11",
        "name": "Aleister Crowley lore entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-12",
        "name": "Aleister Crowley lore entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-13",
        "name": "Aleister Crowley lore entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-14",
        "name": "Aleister Crowley lore entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-15",
        "name": "Aleister Crowley lore entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-16",
        "name": "Aleister Crowley lore entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-17",
        "name": "Aleister Crowley lore entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-18",
        "name": "Aleister Crowley lore entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-19",
        "name": "Aleister Crowley lore entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-20",
        "name": "Aleister Crowley lore entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-21",
        "name": "Aleister Crowley lore entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-22",
        "name": "Aleister Crowley lore entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-23",
        "name": "Aleister Crowley lore entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "aleister-crowley-lore-entry-24",
        "name": "Aleister Crowley lore entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Aleister Crowley lore.",
        "description": "A supporting encyclopedia entry in the Aleister Crowley lore subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-places",
        "contains",
        "Aleister Crowley lore places is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-events",
        "contains",
        "Aleister Crowley lore events is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-objects",
        "contains",
        "Aleister Crowley lore objects & artifacts is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-factions",
        "contains",
        "Aleister Crowley lore factions & groups is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-concepts",
        "contains",
        "Aleister Crowley lore concepts is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-eras",
        "contains",
        "Aleister Crowley lore eras is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-works",
        "contains",
        "Aleister Crowley lore works & media is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-symbols",
        "contains",
        "Aleister Crowley lore symbols is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-controversies",
        "contains",
        "Aleister Crowley lore controversies is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-sources",
        "contains",
        "Aleister Crowley lore sources is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-geography",
        "contains",
        "Aleister Crowley lore geography is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-legacy",
        "contains",
        "Aleister Crowley lore legacy is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-practices",
        "contains",
        "Aleister Crowley lore practices is a primary trailhead under Aleister Crowley lore.",
        0.88,
        0.82
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-1",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-2",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-3",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-4",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-5",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-6",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-7",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-8",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-9",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-10",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-11",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-12",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-13",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-14",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-15",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-16",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-17",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-18",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-19",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-20",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-21",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-22",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-23",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ],
    [
        "aleister-crowley-lore",
        "aleister-crowley-lore-entry-24",
        "contains",
        "Supporting entry under Aleister Crowley lore.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
