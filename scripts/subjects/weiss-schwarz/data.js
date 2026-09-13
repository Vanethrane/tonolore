/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "weiss-schwarz",
        "name": "Weiss Schwarz",
        "type": "topic",
        "short_description": "Anime/game franchise crossovers in a single TCG ruleset — fans’ character card heaven.",
        "description": "Anime/game franchise crossovers in a single TCG ruleset — fans’ character card heaven. This Ton-o-Lore subject maps people, places, events, and ideas tied to Weiss Schwarz so readers can follow long-tail connections across card games."
    },
    {
        "slug": "weiss-schwarz-figures",
        "name": "Weiss Schwarz figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Weiss Schwarz.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Weiss Schwarz."
    },
    {
        "slug": "weiss-schwarz-world",
        "name": "Weiss Schwarz world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Weiss Schwarz.",
        "description": "Geography, institutions, and periodization that give Weiss Schwarz its encyclopedia shape."
    },
    {
        "slug": "weiss-schwarz-places",
        "name": "Weiss Schwarz places",
        "type": "place",
        "short_description": "Locations and geographies that frame Weiss Schwarz.",
        "description": "Places, regions, and built sites that give Weiss Schwarz its map — where events and figures concentrate."
    },
    {
        "slug": "weiss-schwarz-events",
        "name": "Weiss Schwarz events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Weiss Schwarz.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Weiss Schwarz timeline."
    },
    {
        "slug": "weiss-schwarz-objects",
        "name": "Weiss Schwarz objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Weiss Schwarz.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Weiss Schwarz."
    },
    {
        "slug": "weiss-schwarz-factions",
        "name": "Weiss Schwarz factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Weiss Schwarz.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Weiss Schwarz."
    },
    {
        "slug": "weiss-schwarz-concepts",
        "name": "Weiss Schwarz concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Weiss Schwarz.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Weiss Schwarz readable as a lore graph."
    },
    {
        "slug": "weiss-schwarz-eras",
        "name": "Weiss Schwarz eras",
        "type": "event",
        "short_description": "Periodization for Weiss Schwarz.",
        "description": "Named eras and phases that help readers track how Weiss Schwarz changes across time."
    },
    {
        "slug": "weiss-schwarz-works",
        "name": "Weiss Schwarz works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Weiss Schwarz.",
        "description": "Primary works and adaptations through which most audiences encounter Weiss Schwarz."
    },
    {
        "slug": "weiss-schwarz-symbols",
        "name": "Weiss Schwarz symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Weiss Schwarz.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Weiss Schwarz."
    },
    {
        "slug": "weiss-schwarz-controversies",
        "name": "Weiss Schwarz controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Weiss Schwarz.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Weiss Schwarz argumentative."
    },
    {
        "slug": "weiss-schwarz-sources",
        "name": "Weiss Schwarz sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Weiss Schwarz.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Weiss Schwarz."
    },
    {
        "slug": "weiss-schwarz-geography",
        "name": "Weiss Schwarz geography",
        "type": "place",
        "short_description": "Broader geographic framing for Weiss Schwarz.",
        "description": "Regions, routes, and spatial systems that situate Weiss Schwarz beyond single named places."
    },
    {
        "slug": "weiss-schwarz-legacy",
        "name": "Weiss Schwarz legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Weiss Schwarz.",
        "description": "How Weiss Schwarz continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "weiss-schwarz-practices",
        "name": "Weiss Schwarz practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Weiss Schwarz.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Weiss Schwarz."
    },
    {
        "slug": "weiss-schwarz-entry-1",
        "name": "Weiss Schwarz entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-2",
        "name": "Weiss Schwarz entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-3",
        "name": "Weiss Schwarz entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-4",
        "name": "Weiss Schwarz entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-5",
        "name": "Weiss Schwarz entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-6",
        "name": "Weiss Schwarz entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-7",
        "name": "Weiss Schwarz entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-8",
        "name": "Weiss Schwarz entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-9",
        "name": "Weiss Schwarz entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-10",
        "name": "Weiss Schwarz entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-11",
        "name": "Weiss Schwarz entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-12",
        "name": "Weiss Schwarz entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-13",
        "name": "Weiss Schwarz entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-14",
        "name": "Weiss Schwarz entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-15",
        "name": "Weiss Schwarz entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-16",
        "name": "Weiss Schwarz entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-17",
        "name": "Weiss Schwarz entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-18",
        "name": "Weiss Schwarz entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-19",
        "name": "Weiss Schwarz entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-20",
        "name": "Weiss Schwarz entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-21",
        "name": "Weiss Schwarz entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-22",
        "name": "Weiss Schwarz entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-23",
        "name": "Weiss Schwarz entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "weiss-schwarz-entry-24",
        "name": "Weiss Schwarz entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Weiss Schwarz.",
        "description": "A supporting encyclopedia entry in the Weiss Schwarz subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "weiss-schwarz",
        "weiss-schwarz-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-places",
        "contains",
        "Weiss Schwarz places is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-events",
        "contains",
        "Weiss Schwarz events is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-objects",
        "contains",
        "Weiss Schwarz objects & artifacts is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-factions",
        "contains",
        "Weiss Schwarz factions & groups is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-concepts",
        "contains",
        "Weiss Schwarz concepts is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-eras",
        "contains",
        "Weiss Schwarz eras is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-works",
        "contains",
        "Weiss Schwarz works & media is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-symbols",
        "contains",
        "Weiss Schwarz symbols is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-controversies",
        "contains",
        "Weiss Schwarz controversies is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-sources",
        "contains",
        "Weiss Schwarz sources is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-geography",
        "contains",
        "Weiss Schwarz geography is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-legacy",
        "contains",
        "Weiss Schwarz legacy is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-practices",
        "contains",
        "Weiss Schwarz practices is a primary trailhead under Weiss Schwarz.",
        0.88,
        0.82
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-1",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-2",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-3",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-4",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-5",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-6",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-7",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-8",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-9",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-10",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-11",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-12",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-13",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-14",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-15",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-16",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-17",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-18",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-19",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-20",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-21",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-22",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-23",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ],
    [
        "weiss-schwarz",
        "weiss-schwarz-entry-24",
        "contains",
        "Supporting entry under Weiss Schwarz.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
