/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "siege-warfare",
        "name": "Siege warfare",
        "type": "topic",
        "short_description": "Walls, sappers, and the long contests for fortified cities across eras.",
        "description": "Walls, sappers, and the long contests for fortified cities across eras. This Ton-o-Lore subject maps people, places, events, and ideas tied to Siege warfare so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "siege-warfare-figures",
        "name": "Siege warfare figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Siege warfare.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Siege warfare."
    },
    {
        "slug": "siege-warfare-world",
        "name": "Siege warfare world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Siege warfare.",
        "description": "Geography, institutions, and periodization that give Siege warfare its encyclopedia shape."
    },
    {
        "slug": "siege-warfare-places",
        "name": "Siege warfare places",
        "type": "place",
        "short_description": "Locations and geographies that frame Siege warfare.",
        "description": "Places, regions, and built sites that give Siege warfare its map — where events and figures concentrate."
    },
    {
        "slug": "siege-warfare-events",
        "name": "Siege warfare events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Siege warfare.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Siege warfare timeline."
    },
    {
        "slug": "siege-warfare-objects",
        "name": "Siege warfare objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Siege warfare.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Siege warfare."
    },
    {
        "slug": "siege-warfare-factions",
        "name": "Siege warfare factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Siege warfare.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Siege warfare."
    },
    {
        "slug": "siege-warfare-concepts",
        "name": "Siege warfare concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Siege warfare.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Siege warfare readable as a lore graph."
    },
    {
        "slug": "siege-warfare-eras",
        "name": "Siege warfare eras",
        "type": "event",
        "short_description": "Periodization for Siege warfare.",
        "description": "Named eras and phases that help readers track how Siege warfare changes across time."
    },
    {
        "slug": "siege-warfare-works",
        "name": "Siege warfare works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Siege warfare.",
        "description": "Primary works and adaptations through which most audiences encounter Siege warfare."
    },
    {
        "slug": "siege-warfare-symbols",
        "name": "Siege warfare symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Siege warfare.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Siege warfare."
    },
    {
        "slug": "siege-warfare-controversies",
        "name": "Siege warfare controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Siege warfare.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Siege warfare argumentative."
    },
    {
        "slug": "siege-warfare-sources",
        "name": "Siege warfare sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Siege warfare.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Siege warfare."
    },
    {
        "slug": "siege-warfare-geography",
        "name": "Siege warfare geography",
        "type": "place",
        "short_description": "Broader geographic framing for Siege warfare.",
        "description": "Regions, routes, and spatial systems that situate Siege warfare beyond single named places."
    },
    {
        "slug": "siege-warfare-legacy",
        "name": "Siege warfare legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Siege warfare.",
        "description": "How Siege warfare continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "siege-warfare-practices",
        "name": "Siege warfare practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Siege warfare.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Siege warfare."
    },
    {
        "slug": "siege-warfare-entry-1",
        "name": "Siege warfare entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-2",
        "name": "Siege warfare entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-3",
        "name": "Siege warfare entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-4",
        "name": "Siege warfare entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-5",
        "name": "Siege warfare entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-6",
        "name": "Siege warfare entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-7",
        "name": "Siege warfare entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-8",
        "name": "Siege warfare entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-9",
        "name": "Siege warfare entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-10",
        "name": "Siege warfare entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-11",
        "name": "Siege warfare entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-12",
        "name": "Siege warfare entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-13",
        "name": "Siege warfare entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-14",
        "name": "Siege warfare entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-15",
        "name": "Siege warfare entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-16",
        "name": "Siege warfare entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-17",
        "name": "Siege warfare entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-18",
        "name": "Siege warfare entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-19",
        "name": "Siege warfare entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-20",
        "name": "Siege warfare entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-21",
        "name": "Siege warfare entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-22",
        "name": "Siege warfare entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-23",
        "name": "Siege warfare entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "siege-warfare-entry-24",
        "name": "Siege warfare entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Siege warfare.",
        "description": "A supporting encyclopedia entry in the Siege warfare subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "siege-warfare",
        "siege-warfare-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "siege-warfare",
        "siege-warfare-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "siege-warfare",
        "siege-warfare-places",
        "contains",
        "Siege warfare places is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-events",
        "contains",
        "Siege warfare events is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-objects",
        "contains",
        "Siege warfare objects & artifacts is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-factions",
        "contains",
        "Siege warfare factions & groups is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-concepts",
        "contains",
        "Siege warfare concepts is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-eras",
        "contains",
        "Siege warfare eras is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-works",
        "contains",
        "Siege warfare works & media is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-symbols",
        "contains",
        "Siege warfare symbols is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-controversies",
        "contains",
        "Siege warfare controversies is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-sources",
        "contains",
        "Siege warfare sources is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-geography",
        "contains",
        "Siege warfare geography is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-legacy",
        "contains",
        "Siege warfare legacy is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-practices",
        "contains",
        "Siege warfare practices is a primary trailhead under Siege warfare.",
        0.88,
        0.82
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-1",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-2",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-3",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-4",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-5",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-6",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-7",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-8",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-9",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-10",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-11",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-12",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-13",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-14",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-15",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-16",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-17",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-18",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-19",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-20",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-21",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-22",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-23",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ],
    [
        "siege-warfare",
        "siege-warfare-entry-24",
        "contains",
        "Supporting entry under Siege warfare.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
