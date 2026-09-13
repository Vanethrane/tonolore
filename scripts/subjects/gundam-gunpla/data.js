/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "gundam-gunpla",
        "name": "Gundam Gunpla",
        "type": "topic",
        "short_description": "Model kits, mobile suit grades, and the builder culture around the Gundam franchise.",
        "description": "Model kits, mobile suit grades, and the builder culture around the Gundam franchise. This Ton-o-Lore subject maps people, places, events, and ideas tied to Gundam Gunpla so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "gundam-gunpla-figures",
        "name": "Gundam Gunpla figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Gundam Gunpla.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Gundam Gunpla."
    },
    {
        "slug": "gundam-gunpla-world",
        "name": "Gundam Gunpla world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Gundam Gunpla.",
        "description": "Geography, institutions, and periodization that give Gundam Gunpla its encyclopedia shape."
    },
    {
        "slug": "gundam-gunpla-places",
        "name": "Gundam Gunpla places",
        "type": "place",
        "short_description": "Locations and geographies that frame Gundam Gunpla.",
        "description": "Places, regions, and built sites that give Gundam Gunpla its map — where events and figures concentrate."
    },
    {
        "slug": "gundam-gunpla-events",
        "name": "Gundam Gunpla events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Gundam Gunpla.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Gundam Gunpla timeline."
    },
    {
        "slug": "gundam-gunpla-objects",
        "name": "Gundam Gunpla objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Gundam Gunpla.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Gundam Gunpla."
    },
    {
        "slug": "gundam-gunpla-factions",
        "name": "Gundam Gunpla factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Gundam Gunpla.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Gundam Gunpla."
    },
    {
        "slug": "gundam-gunpla-concepts",
        "name": "Gundam Gunpla concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Gundam Gunpla.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Gundam Gunpla readable as a lore graph."
    },
    {
        "slug": "gundam-gunpla-eras",
        "name": "Gundam Gunpla eras",
        "type": "event",
        "short_description": "Periodization for Gundam Gunpla.",
        "description": "Named eras and phases that help readers track how Gundam Gunpla changes across time."
    },
    {
        "slug": "gundam-gunpla-works",
        "name": "Gundam Gunpla works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Gundam Gunpla.",
        "description": "Primary works and adaptations through which most audiences encounter Gundam Gunpla."
    },
    {
        "slug": "gundam-gunpla-symbols",
        "name": "Gundam Gunpla symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Gundam Gunpla.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Gundam Gunpla."
    },
    {
        "slug": "gundam-gunpla-controversies",
        "name": "Gundam Gunpla controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Gundam Gunpla.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Gundam Gunpla argumentative."
    },
    {
        "slug": "gundam-gunpla-sources",
        "name": "Gundam Gunpla sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Gundam Gunpla.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Gundam Gunpla."
    },
    {
        "slug": "gundam-gunpla-geography",
        "name": "Gundam Gunpla geography",
        "type": "place",
        "short_description": "Broader geographic framing for Gundam Gunpla.",
        "description": "Regions, routes, and spatial systems that situate Gundam Gunpla beyond single named places."
    },
    {
        "slug": "gundam-gunpla-legacy",
        "name": "Gundam Gunpla legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Gundam Gunpla.",
        "description": "How Gundam Gunpla continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "gundam-gunpla-practices",
        "name": "Gundam Gunpla practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Gundam Gunpla.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Gundam Gunpla."
    },
    {
        "slug": "gundam-gunpla-entry-1",
        "name": "Gundam Gunpla entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-2",
        "name": "Gundam Gunpla entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-3",
        "name": "Gundam Gunpla entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-4",
        "name": "Gundam Gunpla entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-5",
        "name": "Gundam Gunpla entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-6",
        "name": "Gundam Gunpla entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-7",
        "name": "Gundam Gunpla entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-8",
        "name": "Gundam Gunpla entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-9",
        "name": "Gundam Gunpla entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-10",
        "name": "Gundam Gunpla entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-11",
        "name": "Gundam Gunpla entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-12",
        "name": "Gundam Gunpla entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-13",
        "name": "Gundam Gunpla entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-14",
        "name": "Gundam Gunpla entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-15",
        "name": "Gundam Gunpla entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-16",
        "name": "Gundam Gunpla entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-17",
        "name": "Gundam Gunpla entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-18",
        "name": "Gundam Gunpla entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-19",
        "name": "Gundam Gunpla entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-20",
        "name": "Gundam Gunpla entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-21",
        "name": "Gundam Gunpla entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-22",
        "name": "Gundam Gunpla entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-23",
        "name": "Gundam Gunpla entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "gundam-gunpla-entry-24",
        "name": "Gundam Gunpla entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Gundam Gunpla.",
        "description": "A supporting encyclopedia entry in the Gundam Gunpla subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "gundam-gunpla",
        "gundam-gunpla-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-places",
        "contains",
        "Gundam Gunpla places is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-events",
        "contains",
        "Gundam Gunpla events is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-objects",
        "contains",
        "Gundam Gunpla objects & artifacts is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-factions",
        "contains",
        "Gundam Gunpla factions & groups is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-concepts",
        "contains",
        "Gundam Gunpla concepts is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-eras",
        "contains",
        "Gundam Gunpla eras is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-works",
        "contains",
        "Gundam Gunpla works & media is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-symbols",
        "contains",
        "Gundam Gunpla symbols is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-controversies",
        "contains",
        "Gundam Gunpla controversies is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-sources",
        "contains",
        "Gundam Gunpla sources is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-geography",
        "contains",
        "Gundam Gunpla geography is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-legacy",
        "contains",
        "Gundam Gunpla legacy is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-practices",
        "contains",
        "Gundam Gunpla practices is a primary trailhead under Gundam Gunpla.",
        0.88,
        0.82
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-1",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-2",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-3",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-4",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-5",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-6",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-7",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-8",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-9",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-10",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-11",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-12",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-13",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-14",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-15",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-16",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-17",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-18",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-19",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-20",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-21",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-22",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-23",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ],
    [
        "gundam-gunpla",
        "gundam-gunpla-entry-24",
        "contains",
        "Supporting entry under Gundam Gunpla.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
