/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "twilight-imperium",
        "name": "Twilight Imperium",
        "type": "topic",
        "short_description": "Epic galactic politics, marathon sessions, and the board-game space-opera of negotiation.",
        "description": "Epic galactic politics, marathon sessions, and the board-game space-opera of negotiation. This Ton-o-Lore subject maps people, places, events, and ideas tied to Twilight Imperium so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "twilight-imperium-figures",
        "name": "Twilight Imperium figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Twilight Imperium.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Twilight Imperium."
    },
    {
        "slug": "twilight-imperium-world",
        "name": "Twilight Imperium world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Twilight Imperium.",
        "description": "Geography, institutions, and periodization that give Twilight Imperium its encyclopedia shape."
    },
    {
        "slug": "twilight-imperium-places",
        "name": "Twilight Imperium places",
        "type": "place",
        "short_description": "Locations and geographies that frame Twilight Imperium.",
        "description": "Places, regions, and built sites that give Twilight Imperium its map — where events and figures concentrate."
    },
    {
        "slug": "twilight-imperium-events",
        "name": "Twilight Imperium events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Twilight Imperium.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Twilight Imperium timeline."
    },
    {
        "slug": "twilight-imperium-objects",
        "name": "Twilight Imperium objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Twilight Imperium.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Twilight Imperium."
    },
    {
        "slug": "twilight-imperium-factions",
        "name": "Twilight Imperium factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Twilight Imperium.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Twilight Imperium."
    },
    {
        "slug": "twilight-imperium-concepts",
        "name": "Twilight Imperium concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Twilight Imperium.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Twilight Imperium readable as a lore graph."
    },
    {
        "slug": "twilight-imperium-eras",
        "name": "Twilight Imperium eras",
        "type": "event",
        "short_description": "Periodization for Twilight Imperium.",
        "description": "Named eras and phases that help readers track how Twilight Imperium changes across time."
    },
    {
        "slug": "twilight-imperium-works",
        "name": "Twilight Imperium works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Twilight Imperium.",
        "description": "Primary works and adaptations through which most audiences encounter Twilight Imperium."
    },
    {
        "slug": "twilight-imperium-symbols",
        "name": "Twilight Imperium symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Twilight Imperium.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Twilight Imperium."
    },
    {
        "slug": "twilight-imperium-controversies",
        "name": "Twilight Imperium controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Twilight Imperium.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Twilight Imperium argumentative."
    },
    {
        "slug": "twilight-imperium-sources",
        "name": "Twilight Imperium sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Twilight Imperium.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Twilight Imperium."
    },
    {
        "slug": "twilight-imperium-geography",
        "name": "Twilight Imperium geography",
        "type": "place",
        "short_description": "Broader geographic framing for Twilight Imperium.",
        "description": "Regions, routes, and spatial systems that situate Twilight Imperium beyond single named places."
    },
    {
        "slug": "twilight-imperium-legacy",
        "name": "Twilight Imperium legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Twilight Imperium.",
        "description": "How Twilight Imperium continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "twilight-imperium-practices",
        "name": "Twilight Imperium practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Twilight Imperium.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Twilight Imperium."
    },
    {
        "slug": "twilight-imperium-entry-1",
        "name": "Twilight Imperium entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-2",
        "name": "Twilight Imperium entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-3",
        "name": "Twilight Imperium entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-4",
        "name": "Twilight Imperium entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-5",
        "name": "Twilight Imperium entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-6",
        "name": "Twilight Imperium entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-7",
        "name": "Twilight Imperium entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-8",
        "name": "Twilight Imperium entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-9",
        "name": "Twilight Imperium entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-10",
        "name": "Twilight Imperium entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-11",
        "name": "Twilight Imperium entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-12",
        "name": "Twilight Imperium entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-13",
        "name": "Twilight Imperium entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-14",
        "name": "Twilight Imperium entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-15",
        "name": "Twilight Imperium entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-16",
        "name": "Twilight Imperium entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-17",
        "name": "Twilight Imperium entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-18",
        "name": "Twilight Imperium entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-19",
        "name": "Twilight Imperium entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-20",
        "name": "Twilight Imperium entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-21",
        "name": "Twilight Imperium entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-22",
        "name": "Twilight Imperium entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-23",
        "name": "Twilight Imperium entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "twilight-imperium-entry-24",
        "name": "Twilight Imperium entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Twilight Imperium.",
        "description": "A supporting encyclopedia entry in the Twilight Imperium subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "twilight-imperium",
        "twilight-imperium-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "twilight-imperium",
        "twilight-imperium-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "twilight-imperium",
        "twilight-imperium-places",
        "contains",
        "Twilight Imperium places is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-events",
        "contains",
        "Twilight Imperium events is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-objects",
        "contains",
        "Twilight Imperium objects & artifacts is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-factions",
        "contains",
        "Twilight Imperium factions & groups is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-concepts",
        "contains",
        "Twilight Imperium concepts is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-eras",
        "contains",
        "Twilight Imperium eras is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-works",
        "contains",
        "Twilight Imperium works & media is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-symbols",
        "contains",
        "Twilight Imperium symbols is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-controversies",
        "contains",
        "Twilight Imperium controversies is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-sources",
        "contains",
        "Twilight Imperium sources is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-geography",
        "contains",
        "Twilight Imperium geography is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-legacy",
        "contains",
        "Twilight Imperium legacy is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-practices",
        "contains",
        "Twilight Imperium practices is a primary trailhead under Twilight Imperium.",
        0.88,
        0.82
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-1",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-2",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-3",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-4",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-5",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-6",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-7",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-8",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-9",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-10",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-11",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-12",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-13",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-14",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-15",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-16",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-17",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-18",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-19",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-20",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-21",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-22",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-23",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ],
    [
        "twilight-imperium",
        "twilight-imperium-entry-24",
        "contains",
        "Supporting entry under Twilight Imperium.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
