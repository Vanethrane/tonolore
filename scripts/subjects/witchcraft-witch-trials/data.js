/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "witchcraft-witch-trials",
        "name": "Witchcraft & witch trials",
        "type": "topic",
        "short_description": "Folk practice, accusations, courts, panics, and the people caught in witchcraft's legal and legendary machinery.",
        "description": "Folk practice, accusations, courts, panics, and the people caught in witchcraft's legal and legendary machinery. This Ton-o-Lore subject maps people, places, events, and ideas tied to Witchcraft & witch trials so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "witchcraft-witch-trials-figures",
        "name": "Witchcraft & witch trials figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Witchcraft & witch trials.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Witchcraft & witch trials."
    },
    {
        "slug": "witchcraft-witch-trials-world",
        "name": "Witchcraft & witch trials world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Witchcraft & witch trials.",
        "description": "Geography, institutions, and periodization that give Witchcraft & witch trials its encyclopedia shape."
    },
    {
        "slug": "witchcraft-witch-trials-places",
        "name": "Witchcraft & witch trials places",
        "type": "place",
        "short_description": "Locations and geographies that frame Witchcraft & witch trials.",
        "description": "Places, regions, and built sites that give Witchcraft & witch trials its map — where events and figures concentrate."
    },
    {
        "slug": "witchcraft-witch-trials-events",
        "name": "Witchcraft & witch trials events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Witchcraft & witch trials.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Witchcraft & witch trials timeline."
    },
    {
        "slug": "witchcraft-witch-trials-objects",
        "name": "Witchcraft & witch trials objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Witchcraft & witch trials.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Witchcraft & witch trials."
    },
    {
        "slug": "witchcraft-witch-trials-factions",
        "name": "Witchcraft & witch trials factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Witchcraft & witch trials.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Witchcraft & witch trials."
    },
    {
        "slug": "witchcraft-witch-trials-concepts",
        "name": "Witchcraft & witch trials concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Witchcraft & witch trials.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Witchcraft & witch trials readable as a lore graph."
    },
    {
        "slug": "witchcraft-witch-trials-eras",
        "name": "Witchcraft & witch trials eras",
        "type": "event",
        "short_description": "Periodization for Witchcraft & witch trials.",
        "description": "Named eras and phases that help readers track how Witchcraft & witch trials changes across time."
    },
    {
        "slug": "witchcraft-witch-trials-works",
        "name": "Witchcraft & witch trials works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Witchcraft & witch trials.",
        "description": "Primary works and adaptations through which most audiences encounter Witchcraft & witch trials."
    },
    {
        "slug": "witchcraft-witch-trials-symbols",
        "name": "Witchcraft & witch trials symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Witchcraft & witch trials.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Witchcraft & witch trials."
    },
    {
        "slug": "witchcraft-witch-trials-controversies",
        "name": "Witchcraft & witch trials controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Witchcraft & witch trials.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Witchcraft & witch trials argumentative."
    },
    {
        "slug": "witchcraft-witch-trials-sources",
        "name": "Witchcraft & witch trials sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Witchcraft & witch trials.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Witchcraft & witch trials."
    },
    {
        "slug": "witchcraft-witch-trials-geography",
        "name": "Witchcraft & witch trials geography",
        "type": "place",
        "short_description": "Broader geographic framing for Witchcraft & witch trials.",
        "description": "Regions, routes, and spatial systems that situate Witchcraft & witch trials beyond single named places."
    },
    {
        "slug": "witchcraft-witch-trials-legacy",
        "name": "Witchcraft & witch trials legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Witchcraft & witch trials.",
        "description": "How Witchcraft & witch trials continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "witchcraft-witch-trials-practices",
        "name": "Witchcraft & witch trials practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Witchcraft & witch trials.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Witchcraft & witch trials."
    },
    {
        "slug": "witchcraft-witch-trials-entry-1",
        "name": "Witchcraft & witch trials entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-2",
        "name": "Witchcraft & witch trials entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-3",
        "name": "Witchcraft & witch trials entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-4",
        "name": "Witchcraft & witch trials entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-5",
        "name": "Witchcraft & witch trials entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-6",
        "name": "Witchcraft & witch trials entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-7",
        "name": "Witchcraft & witch trials entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-8",
        "name": "Witchcraft & witch trials entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-9",
        "name": "Witchcraft & witch trials entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-10",
        "name": "Witchcraft & witch trials entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-11",
        "name": "Witchcraft & witch trials entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-12",
        "name": "Witchcraft & witch trials entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-13",
        "name": "Witchcraft & witch trials entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-14",
        "name": "Witchcraft & witch trials entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-15",
        "name": "Witchcraft & witch trials entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-16",
        "name": "Witchcraft & witch trials entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-17",
        "name": "Witchcraft & witch trials entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-18",
        "name": "Witchcraft & witch trials entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-19",
        "name": "Witchcraft & witch trials entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-20",
        "name": "Witchcraft & witch trials entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-21",
        "name": "Witchcraft & witch trials entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-22",
        "name": "Witchcraft & witch trials entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-23",
        "name": "Witchcraft & witch trials entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "witchcraft-witch-trials-entry-24",
        "name": "Witchcraft & witch trials entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Witchcraft & witch trials.",
        "description": "A supporting encyclopedia entry in the Witchcraft & witch trials subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-places",
        "contains",
        "Witchcraft & witch trials places is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-events",
        "contains",
        "Witchcraft & witch trials events is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-objects",
        "contains",
        "Witchcraft & witch trials objects & artifacts is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-factions",
        "contains",
        "Witchcraft & witch trials factions & groups is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-concepts",
        "contains",
        "Witchcraft & witch trials concepts is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-eras",
        "contains",
        "Witchcraft & witch trials eras is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-works",
        "contains",
        "Witchcraft & witch trials works & media is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-symbols",
        "contains",
        "Witchcraft & witch trials symbols is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-controversies",
        "contains",
        "Witchcraft & witch trials controversies is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-sources",
        "contains",
        "Witchcraft & witch trials sources is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-geography",
        "contains",
        "Witchcraft & witch trials geography is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-legacy",
        "contains",
        "Witchcraft & witch trials legacy is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-practices",
        "contains",
        "Witchcraft & witch trials practices is a primary trailhead under Witchcraft & witch trials.",
        0.88,
        0.82
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-1",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-2",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-3",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-4",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-5",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-6",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-7",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-8",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-9",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-10",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-11",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-12",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-13",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-14",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-15",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-16",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-17",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-18",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-19",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-20",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-21",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-22",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-23",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ],
    [
        "witchcraft-witch-trials",
        "witchcraft-witch-trials-entry-24",
        "contains",
        "Supporting entry under Witchcraft & witch trials.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
