/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ghostbusters",
        "name": "Ghostbusters",
        "type": "topic",
        "short_description": "Proton packs, Slimer, and the paranormal comedy franchise that became Halloween cosplay canon.",
        "description": "Proton packs, Slimer, and the paranormal comedy franchise that became Halloween cosplay canon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ghostbusters so readers can follow long-tail connections across movies."
    },
    {
        "slug": "ghostbusters-figures",
        "name": "Ghostbusters figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ghostbusters.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ghostbusters."
    },
    {
        "slug": "ghostbusters-world",
        "name": "Ghostbusters world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ghostbusters.",
        "description": "Geography, institutions, and periodization that give Ghostbusters its encyclopedia shape."
    },
    {
        "slug": "ghostbusters-places",
        "name": "Ghostbusters places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ghostbusters.",
        "description": "Places, regions, and built sites that give Ghostbusters its map — where events and figures concentrate."
    },
    {
        "slug": "ghostbusters-events",
        "name": "Ghostbusters events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ghostbusters.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ghostbusters timeline."
    },
    {
        "slug": "ghostbusters-objects",
        "name": "Ghostbusters objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ghostbusters.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ghostbusters."
    },
    {
        "slug": "ghostbusters-factions",
        "name": "Ghostbusters factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ghostbusters.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ghostbusters."
    },
    {
        "slug": "ghostbusters-concepts",
        "name": "Ghostbusters concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ghostbusters.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ghostbusters readable as a lore graph."
    },
    {
        "slug": "ghostbusters-eras",
        "name": "Ghostbusters eras",
        "type": "event",
        "short_description": "Periodization for Ghostbusters.",
        "description": "Named eras and phases that help readers track how Ghostbusters changes across time."
    },
    {
        "slug": "ghostbusters-works",
        "name": "Ghostbusters works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ghostbusters.",
        "description": "Primary works and adaptations through which most audiences encounter Ghostbusters."
    },
    {
        "slug": "ghostbusters-symbols",
        "name": "Ghostbusters symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ghostbusters.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ghostbusters."
    },
    {
        "slug": "ghostbusters-controversies",
        "name": "Ghostbusters controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ghostbusters.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ghostbusters argumentative."
    },
    {
        "slug": "ghostbusters-sources",
        "name": "Ghostbusters sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ghostbusters.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ghostbusters."
    },
    {
        "slug": "ghostbusters-geography",
        "name": "Ghostbusters geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ghostbusters.",
        "description": "Regions, routes, and spatial systems that situate Ghostbusters beyond single named places."
    },
    {
        "slug": "ghostbusters-legacy",
        "name": "Ghostbusters legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ghostbusters.",
        "description": "How Ghostbusters continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ghostbusters-practices",
        "name": "Ghostbusters practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ghostbusters.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ghostbusters."
    },
    {
        "slug": "ghostbusters-entry-1",
        "name": "Ghostbusters entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-2",
        "name": "Ghostbusters entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-3",
        "name": "Ghostbusters entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-4",
        "name": "Ghostbusters entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-5",
        "name": "Ghostbusters entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-6",
        "name": "Ghostbusters entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-7",
        "name": "Ghostbusters entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-8",
        "name": "Ghostbusters entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-9",
        "name": "Ghostbusters entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-10",
        "name": "Ghostbusters entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-11",
        "name": "Ghostbusters entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-12",
        "name": "Ghostbusters entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-13",
        "name": "Ghostbusters entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-14",
        "name": "Ghostbusters entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-15",
        "name": "Ghostbusters entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-16",
        "name": "Ghostbusters entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-17",
        "name": "Ghostbusters entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-18",
        "name": "Ghostbusters entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-19",
        "name": "Ghostbusters entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-20",
        "name": "Ghostbusters entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-21",
        "name": "Ghostbusters entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-22",
        "name": "Ghostbusters entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-23",
        "name": "Ghostbusters entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ghostbusters-entry-24",
        "name": "Ghostbusters entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ghostbusters.",
        "description": "A supporting encyclopedia entry in the Ghostbusters subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ghostbusters",
        "ghostbusters-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ghostbusters",
        "ghostbusters-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ghostbusters",
        "ghostbusters-places",
        "contains",
        "Ghostbusters places is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-events",
        "contains",
        "Ghostbusters events is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-objects",
        "contains",
        "Ghostbusters objects & artifacts is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-factions",
        "contains",
        "Ghostbusters factions & groups is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-concepts",
        "contains",
        "Ghostbusters concepts is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-eras",
        "contains",
        "Ghostbusters eras is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-works",
        "contains",
        "Ghostbusters works & media is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-symbols",
        "contains",
        "Ghostbusters symbols is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-controversies",
        "contains",
        "Ghostbusters controversies is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-sources",
        "contains",
        "Ghostbusters sources is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-geography",
        "contains",
        "Ghostbusters geography is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-legacy",
        "contains",
        "Ghostbusters legacy is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-practices",
        "contains",
        "Ghostbusters practices is a primary trailhead under Ghostbusters.",
        0.88,
        0.82
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-1",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-2",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-3",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-4",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-5",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-6",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-7",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-8",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-9",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-10",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-11",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-12",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-13",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-14",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-15",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-16",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-17",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-18",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-19",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-20",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-21",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-22",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-23",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ],
    [
        "ghostbusters",
        "ghostbusters-entry-24",
        "contains",
        "Supporting entry under Ghostbusters.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
