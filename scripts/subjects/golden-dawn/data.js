/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "golden-dawn",
        "name": "Hermetic Order of the Golden Dawn",
        "type": "topic",
        "short_description": "Grade magic, Yeats membership lore, and the ritual order that trained modern ceremonial magicians.",
        "description": "Grade magic, Yeats membership lore, and the ritual order that trained modern ceremonial magicians. This Ton-o-Lore subject maps people, places, events, and ideas tied to Hermetic Order of the Golden Dawn so readers can follow long-tail connections across occult & esoterica."
    },
    {
        "slug": "golden-dawn-figures",
        "name": "Hermetic Order of the Golden Dawn figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Hermetic Order of the Golden Dawn.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Hermetic Order of the Golden Dawn."
    },
    {
        "slug": "golden-dawn-world",
        "name": "Hermetic Order of the Golden Dawn world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Hermetic Order of the Golden Dawn.",
        "description": "Geography, institutions, and periodization that give Hermetic Order of the Golden Dawn its encyclopedia shape."
    },
    {
        "slug": "golden-dawn-places",
        "name": "Hermetic Order of the Golden Dawn places",
        "type": "place",
        "short_description": "Locations and geographies that frame Hermetic Order of the Golden Dawn.",
        "description": "Places, regions, and built sites that give Hermetic Order of the Golden Dawn its map — where events and figures concentrate."
    },
    {
        "slug": "golden-dawn-events",
        "name": "Hermetic Order of the Golden Dawn events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Hermetic Order of the Golden Dawn.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Hermetic Order of the Golden Dawn timeline."
    },
    {
        "slug": "golden-dawn-objects",
        "name": "Hermetic Order of the Golden Dawn objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Hermetic Order of the Golden Dawn.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Hermetic Order of the Golden Dawn."
    },
    {
        "slug": "golden-dawn-factions",
        "name": "Hermetic Order of the Golden Dawn factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Hermetic Order of the Golden Dawn.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Hermetic Order of the Golden Dawn."
    },
    {
        "slug": "golden-dawn-concepts",
        "name": "Hermetic Order of the Golden Dawn concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Hermetic Order of the Golden Dawn.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Hermetic Order of the Golden Dawn readable as a lore graph."
    },
    {
        "slug": "golden-dawn-eras",
        "name": "Hermetic Order of the Golden Dawn eras",
        "type": "event",
        "short_description": "Periodization for Hermetic Order of the Golden Dawn.",
        "description": "Named eras and phases that help readers track how Hermetic Order of the Golden Dawn changes across time."
    },
    {
        "slug": "golden-dawn-works",
        "name": "Hermetic Order of the Golden Dawn works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Hermetic Order of the Golden Dawn.",
        "description": "Primary works and adaptations through which most audiences encounter Hermetic Order of the Golden Dawn."
    },
    {
        "slug": "golden-dawn-symbols",
        "name": "Hermetic Order of the Golden Dawn symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Hermetic Order of the Golden Dawn.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Hermetic Order of the Golden Dawn."
    },
    {
        "slug": "golden-dawn-controversies",
        "name": "Hermetic Order of the Golden Dawn controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Hermetic Order of the Golden Dawn.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Hermetic Order of the Golden Dawn argumentative."
    },
    {
        "slug": "golden-dawn-sources",
        "name": "Hermetic Order of the Golden Dawn sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Hermetic Order of the Golden Dawn.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Hermetic Order of the Golden Dawn."
    },
    {
        "slug": "golden-dawn-geography",
        "name": "Hermetic Order of the Golden Dawn geography",
        "type": "place",
        "short_description": "Broader geographic framing for Hermetic Order of the Golden Dawn.",
        "description": "Regions, routes, and spatial systems that situate Hermetic Order of the Golden Dawn beyond single named places."
    },
    {
        "slug": "golden-dawn-legacy",
        "name": "Hermetic Order of the Golden Dawn legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Hermetic Order of the Golden Dawn.",
        "description": "How Hermetic Order of the Golden Dawn continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "golden-dawn-practices",
        "name": "Hermetic Order of the Golden Dawn practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Hermetic Order of the Golden Dawn.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Hermetic Order of the Golden Dawn."
    },
    {
        "slug": "golden-dawn-entry-1",
        "name": "Hermetic Order of the Golden Dawn entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-2",
        "name": "Hermetic Order of the Golden Dawn entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-3",
        "name": "Hermetic Order of the Golden Dawn entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-4",
        "name": "Hermetic Order of the Golden Dawn entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-5",
        "name": "Hermetic Order of the Golden Dawn entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-6",
        "name": "Hermetic Order of the Golden Dawn entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-7",
        "name": "Hermetic Order of the Golden Dawn entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-8",
        "name": "Hermetic Order of the Golden Dawn entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-9",
        "name": "Hermetic Order of the Golden Dawn entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-10",
        "name": "Hermetic Order of the Golden Dawn entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-11",
        "name": "Hermetic Order of the Golden Dawn entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-12",
        "name": "Hermetic Order of the Golden Dawn entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-13",
        "name": "Hermetic Order of the Golden Dawn entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-14",
        "name": "Hermetic Order of the Golden Dawn entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-15",
        "name": "Hermetic Order of the Golden Dawn entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-16",
        "name": "Hermetic Order of the Golden Dawn entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-17",
        "name": "Hermetic Order of the Golden Dawn entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-18",
        "name": "Hermetic Order of the Golden Dawn entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-19",
        "name": "Hermetic Order of the Golden Dawn entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-20",
        "name": "Hermetic Order of the Golden Dawn entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-21",
        "name": "Hermetic Order of the Golden Dawn entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-22",
        "name": "Hermetic Order of the Golden Dawn entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-23",
        "name": "Hermetic Order of the Golden Dawn entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "golden-dawn-entry-24",
        "name": "Hermetic Order of the Golden Dawn entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Hermetic Order of the Golden Dawn.",
        "description": "A supporting encyclopedia entry in the Hermetic Order of the Golden Dawn subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "golden-dawn",
        "golden-dawn-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "golden-dawn",
        "golden-dawn-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "golden-dawn",
        "golden-dawn-places",
        "contains",
        "Hermetic Order of the Golden Dawn places is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-events",
        "contains",
        "Hermetic Order of the Golden Dawn events is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-objects",
        "contains",
        "Hermetic Order of the Golden Dawn objects & artifacts is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-factions",
        "contains",
        "Hermetic Order of the Golden Dawn factions & groups is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-concepts",
        "contains",
        "Hermetic Order of the Golden Dawn concepts is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-eras",
        "contains",
        "Hermetic Order of the Golden Dawn eras is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-works",
        "contains",
        "Hermetic Order of the Golden Dawn works & media is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-symbols",
        "contains",
        "Hermetic Order of the Golden Dawn symbols is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-controversies",
        "contains",
        "Hermetic Order of the Golden Dawn controversies is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-sources",
        "contains",
        "Hermetic Order of the Golden Dawn sources is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-geography",
        "contains",
        "Hermetic Order of the Golden Dawn geography is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-legacy",
        "contains",
        "Hermetic Order of the Golden Dawn legacy is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-practices",
        "contains",
        "Hermetic Order of the Golden Dawn practices is a primary trailhead under Hermetic Order of the Golden Dawn.",
        0.88,
        0.82
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-1",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-2",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-3",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-4",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-5",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-6",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-7",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-8",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-9",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-10",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-11",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-12",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-13",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-14",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-15",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-16",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-17",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-18",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-19",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-20",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-21",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-22",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-23",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ],
    [
        "golden-dawn",
        "golden-dawn-entry-24",
        "contains",
        "Supporting entry under Hermetic Order of the Golden Dawn.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
