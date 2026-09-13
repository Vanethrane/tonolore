/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "guerrilla-warfare",
        "name": "Guerrilla warfare",
        "type": "topic",
        "short_description": "Irregulars, asymmetric tactics, and the small-war tradition that frustrates empires.",
        "description": "Irregulars, asymmetric tactics, and the small-war tradition that frustrates empires. This Ton-o-Lore subject maps people, places, events, and ideas tied to Guerrilla warfare so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "guerrilla-warfare-figures",
        "name": "Guerrilla warfare figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Guerrilla warfare.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Guerrilla warfare."
    },
    {
        "slug": "guerrilla-warfare-world",
        "name": "Guerrilla warfare world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Guerrilla warfare.",
        "description": "Geography, institutions, and periodization that give Guerrilla warfare its encyclopedia shape."
    },
    {
        "slug": "guerrilla-warfare-places",
        "name": "Guerrilla warfare places",
        "type": "place",
        "short_description": "Locations and geographies that frame Guerrilla warfare.",
        "description": "Places, regions, and built sites that give Guerrilla warfare its map — where events and figures concentrate."
    },
    {
        "slug": "guerrilla-warfare-events",
        "name": "Guerrilla warfare events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Guerrilla warfare.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Guerrilla warfare timeline."
    },
    {
        "slug": "guerrilla-warfare-objects",
        "name": "Guerrilla warfare objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Guerrilla warfare.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Guerrilla warfare."
    },
    {
        "slug": "guerrilla-warfare-factions",
        "name": "Guerrilla warfare factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Guerrilla warfare.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Guerrilla warfare."
    },
    {
        "slug": "guerrilla-warfare-concepts",
        "name": "Guerrilla warfare concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Guerrilla warfare.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Guerrilla warfare readable as a lore graph."
    },
    {
        "slug": "guerrilla-warfare-eras",
        "name": "Guerrilla warfare eras",
        "type": "event",
        "short_description": "Periodization for Guerrilla warfare.",
        "description": "Named eras and phases that help readers track how Guerrilla warfare changes across time."
    },
    {
        "slug": "guerrilla-warfare-works",
        "name": "Guerrilla warfare works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Guerrilla warfare.",
        "description": "Primary works and adaptations through which most audiences encounter Guerrilla warfare."
    },
    {
        "slug": "guerrilla-warfare-symbols",
        "name": "Guerrilla warfare symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Guerrilla warfare.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Guerrilla warfare."
    },
    {
        "slug": "guerrilla-warfare-controversies",
        "name": "Guerrilla warfare controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Guerrilla warfare.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Guerrilla warfare argumentative."
    },
    {
        "slug": "guerrilla-warfare-sources",
        "name": "Guerrilla warfare sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Guerrilla warfare.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Guerrilla warfare."
    },
    {
        "slug": "guerrilla-warfare-geography",
        "name": "Guerrilla warfare geography",
        "type": "place",
        "short_description": "Broader geographic framing for Guerrilla warfare.",
        "description": "Regions, routes, and spatial systems that situate Guerrilla warfare beyond single named places."
    },
    {
        "slug": "guerrilla-warfare-legacy",
        "name": "Guerrilla warfare legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Guerrilla warfare.",
        "description": "How Guerrilla warfare continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "guerrilla-warfare-practices",
        "name": "Guerrilla warfare practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Guerrilla warfare.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Guerrilla warfare."
    },
    {
        "slug": "guerrilla-warfare-entry-1",
        "name": "Guerrilla warfare entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-2",
        "name": "Guerrilla warfare entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-3",
        "name": "Guerrilla warfare entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-4",
        "name": "Guerrilla warfare entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-5",
        "name": "Guerrilla warfare entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-6",
        "name": "Guerrilla warfare entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-7",
        "name": "Guerrilla warfare entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-8",
        "name": "Guerrilla warfare entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-9",
        "name": "Guerrilla warfare entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-10",
        "name": "Guerrilla warfare entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-11",
        "name": "Guerrilla warfare entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-12",
        "name": "Guerrilla warfare entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-13",
        "name": "Guerrilla warfare entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-14",
        "name": "Guerrilla warfare entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-15",
        "name": "Guerrilla warfare entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-16",
        "name": "Guerrilla warfare entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-17",
        "name": "Guerrilla warfare entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-18",
        "name": "Guerrilla warfare entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-19",
        "name": "Guerrilla warfare entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-20",
        "name": "Guerrilla warfare entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-21",
        "name": "Guerrilla warfare entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-22",
        "name": "Guerrilla warfare entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-23",
        "name": "Guerrilla warfare entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "guerrilla-warfare-entry-24",
        "name": "Guerrilla warfare entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Guerrilla warfare.",
        "description": "A supporting encyclopedia entry in the Guerrilla warfare subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "guerrilla-warfare",
        "guerrilla-warfare-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-places",
        "contains",
        "Guerrilla warfare places is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-events",
        "contains",
        "Guerrilla warfare events is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-objects",
        "contains",
        "Guerrilla warfare objects & artifacts is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-factions",
        "contains",
        "Guerrilla warfare factions & groups is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-concepts",
        "contains",
        "Guerrilla warfare concepts is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-eras",
        "contains",
        "Guerrilla warfare eras is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-works",
        "contains",
        "Guerrilla warfare works & media is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-symbols",
        "contains",
        "Guerrilla warfare symbols is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-controversies",
        "contains",
        "Guerrilla warfare controversies is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-sources",
        "contains",
        "Guerrilla warfare sources is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-geography",
        "contains",
        "Guerrilla warfare geography is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-legacy",
        "contains",
        "Guerrilla warfare legacy is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-practices",
        "contains",
        "Guerrilla warfare practices is a primary trailhead under Guerrilla warfare.",
        0.88,
        0.82
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-1",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-2",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-3",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-4",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-5",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-6",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-7",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-8",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-9",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-10",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-11",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-12",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-13",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-14",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-15",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-16",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-17",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-18",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-19",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-20",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-21",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-22",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-23",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ],
    [
        "guerrilla-warfare",
        "guerrilla-warfare-entry-24",
        "contains",
        "Supporting entry under Guerrilla warfare.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
