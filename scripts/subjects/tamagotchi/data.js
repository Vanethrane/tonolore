/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "tamagotchi",
        "name": "Tamagotchi",
        "type": "topic",
        "short_description": "Virtual pets, care loops, and the pocket digital companion craze from Japan.",
        "description": "Virtual pets, care loops, and the pocket digital companion craze from Japan. This Ton-o-Lore subject maps people, places, events, and ideas tied to Tamagotchi so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "tamagotchi-figures",
        "name": "Tamagotchi figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Tamagotchi.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Tamagotchi."
    },
    {
        "slug": "tamagotchi-world",
        "name": "Tamagotchi world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Tamagotchi.",
        "description": "Geography, institutions, and periodization that give Tamagotchi its encyclopedia shape."
    },
    {
        "slug": "tamagotchi-places",
        "name": "Tamagotchi places",
        "type": "place",
        "short_description": "Locations and geographies that frame Tamagotchi.",
        "description": "Places, regions, and built sites that give Tamagotchi its map — where events and figures concentrate."
    },
    {
        "slug": "tamagotchi-events",
        "name": "Tamagotchi events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Tamagotchi.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Tamagotchi timeline."
    },
    {
        "slug": "tamagotchi-objects",
        "name": "Tamagotchi objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Tamagotchi.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Tamagotchi."
    },
    {
        "slug": "tamagotchi-factions",
        "name": "Tamagotchi factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Tamagotchi.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Tamagotchi."
    },
    {
        "slug": "tamagotchi-concepts",
        "name": "Tamagotchi concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Tamagotchi.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Tamagotchi readable as a lore graph."
    },
    {
        "slug": "tamagotchi-eras",
        "name": "Tamagotchi eras",
        "type": "event",
        "short_description": "Periodization for Tamagotchi.",
        "description": "Named eras and phases that help readers track how Tamagotchi changes across time."
    },
    {
        "slug": "tamagotchi-works",
        "name": "Tamagotchi works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Tamagotchi.",
        "description": "Primary works and adaptations through which most audiences encounter Tamagotchi."
    },
    {
        "slug": "tamagotchi-symbols",
        "name": "Tamagotchi symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Tamagotchi.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Tamagotchi."
    },
    {
        "slug": "tamagotchi-controversies",
        "name": "Tamagotchi controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Tamagotchi.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Tamagotchi argumentative."
    },
    {
        "slug": "tamagotchi-sources",
        "name": "Tamagotchi sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Tamagotchi.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Tamagotchi."
    },
    {
        "slug": "tamagotchi-geography",
        "name": "Tamagotchi geography",
        "type": "place",
        "short_description": "Broader geographic framing for Tamagotchi.",
        "description": "Regions, routes, and spatial systems that situate Tamagotchi beyond single named places."
    },
    {
        "slug": "tamagotchi-legacy",
        "name": "Tamagotchi legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Tamagotchi.",
        "description": "How Tamagotchi continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "tamagotchi-practices",
        "name": "Tamagotchi practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Tamagotchi.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Tamagotchi."
    },
    {
        "slug": "tamagotchi-entry-1",
        "name": "Tamagotchi entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-2",
        "name": "Tamagotchi entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-3",
        "name": "Tamagotchi entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-4",
        "name": "Tamagotchi entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-5",
        "name": "Tamagotchi entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-6",
        "name": "Tamagotchi entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-7",
        "name": "Tamagotchi entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-8",
        "name": "Tamagotchi entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-9",
        "name": "Tamagotchi entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-10",
        "name": "Tamagotchi entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-11",
        "name": "Tamagotchi entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-12",
        "name": "Tamagotchi entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-13",
        "name": "Tamagotchi entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-14",
        "name": "Tamagotchi entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-15",
        "name": "Tamagotchi entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-16",
        "name": "Tamagotchi entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-17",
        "name": "Tamagotchi entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-18",
        "name": "Tamagotchi entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-19",
        "name": "Tamagotchi entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-20",
        "name": "Tamagotchi entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-21",
        "name": "Tamagotchi entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-22",
        "name": "Tamagotchi entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-23",
        "name": "Tamagotchi entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "tamagotchi-entry-24",
        "name": "Tamagotchi entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Tamagotchi.",
        "description": "A supporting encyclopedia entry in the Tamagotchi subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "tamagotchi",
        "tamagotchi-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "tamagotchi",
        "tamagotchi-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "tamagotchi",
        "tamagotchi-places",
        "contains",
        "Tamagotchi places is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-events",
        "contains",
        "Tamagotchi events is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-objects",
        "contains",
        "Tamagotchi objects & artifacts is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-factions",
        "contains",
        "Tamagotchi factions & groups is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-concepts",
        "contains",
        "Tamagotchi concepts is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-eras",
        "contains",
        "Tamagotchi eras is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-works",
        "contains",
        "Tamagotchi works & media is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-symbols",
        "contains",
        "Tamagotchi symbols is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-controversies",
        "contains",
        "Tamagotchi controversies is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-sources",
        "contains",
        "Tamagotchi sources is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-geography",
        "contains",
        "Tamagotchi geography is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-legacy",
        "contains",
        "Tamagotchi legacy is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-practices",
        "contains",
        "Tamagotchi practices is a primary trailhead under Tamagotchi.",
        0.88,
        0.82
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-1",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-2",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-3",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-4",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-5",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-6",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-7",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-8",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-9",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-10",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-11",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-12",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-13",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-14",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-15",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-16",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-17",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-18",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-19",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-20",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-21",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-22",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-23",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ],
    [
        "tamagotchi",
        "tamagotchi-entry-24",
        "contains",
        "Supporting entry under Tamagotchi.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
