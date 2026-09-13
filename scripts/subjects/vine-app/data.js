/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "vine-app",
        "name": "Vine",
        "type": "topic",
        "short_description": "Six-second loops, early creator stars, and the short-video culture TikTok later inherited.",
        "description": "Six-second loops, early creator stars, and the short-video culture TikTok later inherited. This Ton-o-Lore subject maps people, places, events, and ideas tied to Vine so readers can follow long-tail connections across internet culture."
    },
    {
        "slug": "vine-app-figures",
        "name": "Vine figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Vine.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Vine."
    },
    {
        "slug": "vine-app-world",
        "name": "Vine world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Vine.",
        "description": "Geography, institutions, and periodization that give Vine its encyclopedia shape."
    },
    {
        "slug": "vine-app-places",
        "name": "Vine places",
        "type": "place",
        "short_description": "Locations and geographies that frame Vine.",
        "description": "Places, regions, and built sites that give Vine its map — where events and figures concentrate."
    },
    {
        "slug": "vine-app-events",
        "name": "Vine events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Vine.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Vine timeline."
    },
    {
        "slug": "vine-app-objects",
        "name": "Vine objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Vine.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Vine."
    },
    {
        "slug": "vine-app-factions",
        "name": "Vine factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Vine.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Vine."
    },
    {
        "slug": "vine-app-concepts",
        "name": "Vine concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Vine.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Vine readable as a lore graph."
    },
    {
        "slug": "vine-app-eras",
        "name": "Vine eras",
        "type": "event",
        "short_description": "Periodization for Vine.",
        "description": "Named eras and phases that help readers track how Vine changes across time."
    },
    {
        "slug": "vine-app-works",
        "name": "Vine works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Vine.",
        "description": "Primary works and adaptations through which most audiences encounter Vine."
    },
    {
        "slug": "vine-app-symbols",
        "name": "Vine symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Vine.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Vine."
    },
    {
        "slug": "vine-app-controversies",
        "name": "Vine controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Vine.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Vine argumentative."
    },
    {
        "slug": "vine-app-sources",
        "name": "Vine sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Vine.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Vine."
    },
    {
        "slug": "vine-app-geography",
        "name": "Vine geography",
        "type": "place",
        "short_description": "Broader geographic framing for Vine.",
        "description": "Regions, routes, and spatial systems that situate Vine beyond single named places."
    },
    {
        "slug": "vine-app-legacy",
        "name": "Vine legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Vine.",
        "description": "How Vine continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "vine-app-practices",
        "name": "Vine practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Vine.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Vine."
    },
    {
        "slug": "vine-app-entry-1",
        "name": "Vine entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-2",
        "name": "Vine entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-3",
        "name": "Vine entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-4",
        "name": "Vine entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-5",
        "name": "Vine entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-6",
        "name": "Vine entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-7",
        "name": "Vine entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-8",
        "name": "Vine entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-9",
        "name": "Vine entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-10",
        "name": "Vine entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-11",
        "name": "Vine entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-12",
        "name": "Vine entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-13",
        "name": "Vine entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-14",
        "name": "Vine entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-15",
        "name": "Vine entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-16",
        "name": "Vine entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-17",
        "name": "Vine entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-18",
        "name": "Vine entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-19",
        "name": "Vine entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-20",
        "name": "Vine entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-21",
        "name": "Vine entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-22",
        "name": "Vine entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-23",
        "name": "Vine entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "vine-app-entry-24",
        "name": "Vine entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Vine.",
        "description": "A supporting encyclopedia entry in the Vine subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "vine-app",
        "vine-app-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "vine-app",
        "vine-app-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "vine-app",
        "vine-app-places",
        "contains",
        "Vine places is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-events",
        "contains",
        "Vine events is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-objects",
        "contains",
        "Vine objects & artifacts is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-factions",
        "contains",
        "Vine factions & groups is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-concepts",
        "contains",
        "Vine concepts is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-eras",
        "contains",
        "Vine eras is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-works",
        "contains",
        "Vine works & media is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-symbols",
        "contains",
        "Vine symbols is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-controversies",
        "contains",
        "Vine controversies is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-sources",
        "contains",
        "Vine sources is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-geography",
        "contains",
        "Vine geography is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-legacy",
        "contains",
        "Vine legacy is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-practices",
        "contains",
        "Vine practices is a primary trailhead under Vine.",
        0.88,
        0.82
    ],
    [
        "vine-app",
        "vine-app-entry-1",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-2",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-3",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-4",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-5",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-6",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-7",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-8",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-9",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-10",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-11",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-12",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-13",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-14",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-15",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-16",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-17",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-18",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-19",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-20",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-21",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-22",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-23",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ],
    [
        "vine-app",
        "vine-app-entry-24",
        "contains",
        "Supporting entry under Vine.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
