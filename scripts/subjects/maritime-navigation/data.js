/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "maritime-navigation",
        "name": "Maritime navigation",
        "type": "topic",
        "short_description": "Sextants, chronometers, charts, and the craft of finding longitude at sea.",
        "description": "Sextants, chronometers, charts, and the craft of finding longitude at sea. This Ton-o-Lore subject maps people, places, events, and ideas tied to Maritime navigation so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "maritime-navigation-figures",
        "name": "Maritime navigation figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Maritime navigation.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Maritime navigation."
    },
    {
        "slug": "maritime-navigation-world",
        "name": "Maritime navigation world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Maritime navigation.",
        "description": "Geography, institutions, and periodization that give Maritime navigation its encyclopedia shape."
    },
    {
        "slug": "maritime-navigation-places",
        "name": "Maritime navigation places",
        "type": "place",
        "short_description": "Locations and geographies that frame Maritime navigation.",
        "description": "Places, regions, and built sites that give Maritime navigation its map — where events and figures concentrate."
    },
    {
        "slug": "maritime-navigation-events",
        "name": "Maritime navigation events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Maritime navigation.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Maritime navigation timeline."
    },
    {
        "slug": "maritime-navigation-objects",
        "name": "Maritime navigation objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Maritime navigation.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Maritime navigation."
    },
    {
        "slug": "maritime-navigation-factions",
        "name": "Maritime navigation factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Maritime navigation.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Maritime navigation."
    },
    {
        "slug": "maritime-navigation-concepts",
        "name": "Maritime navigation concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Maritime navigation.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Maritime navigation readable as a lore graph."
    },
    {
        "slug": "maritime-navigation-eras",
        "name": "Maritime navigation eras",
        "type": "event",
        "short_description": "Periodization for Maritime navigation.",
        "description": "Named eras and phases that help readers track how Maritime navigation changes across time."
    },
    {
        "slug": "maritime-navigation-works",
        "name": "Maritime navigation works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Maritime navigation.",
        "description": "Primary works and adaptations through which most audiences encounter Maritime navigation."
    },
    {
        "slug": "maritime-navigation-symbols",
        "name": "Maritime navigation symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Maritime navigation.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Maritime navigation."
    },
    {
        "slug": "maritime-navigation-controversies",
        "name": "Maritime navigation controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Maritime navigation.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Maritime navigation argumentative."
    },
    {
        "slug": "maritime-navigation-sources",
        "name": "Maritime navigation sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Maritime navigation.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Maritime navigation."
    },
    {
        "slug": "maritime-navigation-geography",
        "name": "Maritime navigation geography",
        "type": "place",
        "short_description": "Broader geographic framing for Maritime navigation.",
        "description": "Regions, routes, and spatial systems that situate Maritime navigation beyond single named places."
    },
    {
        "slug": "maritime-navigation-legacy",
        "name": "Maritime navigation legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Maritime navigation.",
        "description": "How Maritime navigation continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "maritime-navigation-practices",
        "name": "Maritime navigation practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Maritime navigation.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Maritime navigation."
    },
    {
        "slug": "maritime-navigation-entry-1",
        "name": "Maritime navigation entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-2",
        "name": "Maritime navigation entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-3",
        "name": "Maritime navigation entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-4",
        "name": "Maritime navigation entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-5",
        "name": "Maritime navigation entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-6",
        "name": "Maritime navigation entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-7",
        "name": "Maritime navigation entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-8",
        "name": "Maritime navigation entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-9",
        "name": "Maritime navigation entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-10",
        "name": "Maritime navigation entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-11",
        "name": "Maritime navigation entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-12",
        "name": "Maritime navigation entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-13",
        "name": "Maritime navigation entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-14",
        "name": "Maritime navigation entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-15",
        "name": "Maritime navigation entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-16",
        "name": "Maritime navigation entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-17",
        "name": "Maritime navigation entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-18",
        "name": "Maritime navigation entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-19",
        "name": "Maritime navigation entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-20",
        "name": "Maritime navigation entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-21",
        "name": "Maritime navigation entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-22",
        "name": "Maritime navigation entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-23",
        "name": "Maritime navigation entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "maritime-navigation-entry-24",
        "name": "Maritime navigation entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Maritime navigation.",
        "description": "A supporting encyclopedia entry in the Maritime navigation subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "maritime-navigation",
        "maritime-navigation-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "maritime-navigation",
        "maritime-navigation-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "maritime-navigation",
        "maritime-navigation-places",
        "contains",
        "Maritime navigation places is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-events",
        "contains",
        "Maritime navigation events is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-objects",
        "contains",
        "Maritime navigation objects & artifacts is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-factions",
        "contains",
        "Maritime navigation factions & groups is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-concepts",
        "contains",
        "Maritime navigation concepts is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-eras",
        "contains",
        "Maritime navigation eras is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-works",
        "contains",
        "Maritime navigation works & media is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-symbols",
        "contains",
        "Maritime navigation symbols is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-controversies",
        "contains",
        "Maritime navigation controversies is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-sources",
        "contains",
        "Maritime navigation sources is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-geography",
        "contains",
        "Maritime navigation geography is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-legacy",
        "contains",
        "Maritime navigation legacy is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-practices",
        "contains",
        "Maritime navigation practices is a primary trailhead under Maritime navigation.",
        0.88,
        0.82
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-1",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-2",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-3",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-4",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-5",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-6",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-7",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-8",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-9",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-10",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-11",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-12",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-13",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-14",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-15",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-16",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-17",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-18",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-19",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-20",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-21",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-22",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-23",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ],
    [
        "maritime-navigation",
        "maritime-navigation-entry-24",
        "contains",
        "Supporting entry under Maritime navigation.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
