/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "samurai-warfare",
        "name": "Samurai warfare",
        "type": "topic",
        "short_description": "Bushido ideals, ashigaru, and the martial culture of feudal Japan’s battlefield elite.",
        "description": "Bushido ideals, ashigaru, and the martial culture of feudal Japan’s battlefield elite. This Ton-o-Lore subject maps people, places, events, and ideas tied to Samurai warfare so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "samurai-warfare-figures",
        "name": "Samurai warfare figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Samurai warfare.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Samurai warfare."
    },
    {
        "slug": "samurai-warfare-world",
        "name": "Samurai warfare world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Samurai warfare.",
        "description": "Geography, institutions, and periodization that give Samurai warfare its encyclopedia shape."
    },
    {
        "slug": "samurai-warfare-places",
        "name": "Samurai warfare places",
        "type": "place",
        "short_description": "Locations and geographies that frame Samurai warfare.",
        "description": "Places, regions, and built sites that give Samurai warfare its map — where events and figures concentrate."
    },
    {
        "slug": "samurai-warfare-events",
        "name": "Samurai warfare events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Samurai warfare.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Samurai warfare timeline."
    },
    {
        "slug": "samurai-warfare-objects",
        "name": "Samurai warfare objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Samurai warfare.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Samurai warfare."
    },
    {
        "slug": "samurai-warfare-factions",
        "name": "Samurai warfare factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Samurai warfare.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Samurai warfare."
    },
    {
        "slug": "samurai-warfare-concepts",
        "name": "Samurai warfare concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Samurai warfare.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Samurai warfare readable as a lore graph."
    },
    {
        "slug": "samurai-warfare-eras",
        "name": "Samurai warfare eras",
        "type": "event",
        "short_description": "Periodization for Samurai warfare.",
        "description": "Named eras and phases that help readers track how Samurai warfare changes across time."
    },
    {
        "slug": "samurai-warfare-works",
        "name": "Samurai warfare works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Samurai warfare.",
        "description": "Primary works and adaptations through which most audiences encounter Samurai warfare."
    },
    {
        "slug": "samurai-warfare-symbols",
        "name": "Samurai warfare symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Samurai warfare.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Samurai warfare."
    },
    {
        "slug": "samurai-warfare-controversies",
        "name": "Samurai warfare controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Samurai warfare.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Samurai warfare argumentative."
    },
    {
        "slug": "samurai-warfare-sources",
        "name": "Samurai warfare sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Samurai warfare.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Samurai warfare."
    },
    {
        "slug": "samurai-warfare-geography",
        "name": "Samurai warfare geography",
        "type": "place",
        "short_description": "Broader geographic framing for Samurai warfare.",
        "description": "Regions, routes, and spatial systems that situate Samurai warfare beyond single named places."
    },
    {
        "slug": "samurai-warfare-legacy",
        "name": "Samurai warfare legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Samurai warfare.",
        "description": "How Samurai warfare continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "samurai-warfare-practices",
        "name": "Samurai warfare practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Samurai warfare.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Samurai warfare."
    },
    {
        "slug": "samurai-warfare-entry-1",
        "name": "Samurai warfare entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-2",
        "name": "Samurai warfare entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-3",
        "name": "Samurai warfare entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-4",
        "name": "Samurai warfare entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-5",
        "name": "Samurai warfare entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-6",
        "name": "Samurai warfare entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-7",
        "name": "Samurai warfare entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-8",
        "name": "Samurai warfare entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-9",
        "name": "Samurai warfare entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-10",
        "name": "Samurai warfare entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-11",
        "name": "Samurai warfare entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-12",
        "name": "Samurai warfare entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-13",
        "name": "Samurai warfare entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-14",
        "name": "Samurai warfare entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-15",
        "name": "Samurai warfare entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-16",
        "name": "Samurai warfare entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-17",
        "name": "Samurai warfare entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-18",
        "name": "Samurai warfare entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-19",
        "name": "Samurai warfare entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-20",
        "name": "Samurai warfare entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-21",
        "name": "Samurai warfare entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-22",
        "name": "Samurai warfare entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-23",
        "name": "Samurai warfare entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "samurai-warfare-entry-24",
        "name": "Samurai warfare entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Samurai warfare.",
        "description": "A supporting encyclopedia entry in the Samurai warfare subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "samurai-warfare",
        "samurai-warfare-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "samurai-warfare",
        "samurai-warfare-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "samurai-warfare",
        "samurai-warfare-places",
        "contains",
        "Samurai warfare places is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-events",
        "contains",
        "Samurai warfare events is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-objects",
        "contains",
        "Samurai warfare objects & artifacts is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-factions",
        "contains",
        "Samurai warfare factions & groups is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-concepts",
        "contains",
        "Samurai warfare concepts is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-eras",
        "contains",
        "Samurai warfare eras is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-works",
        "contains",
        "Samurai warfare works & media is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-symbols",
        "contains",
        "Samurai warfare symbols is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-controversies",
        "contains",
        "Samurai warfare controversies is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-sources",
        "contains",
        "Samurai warfare sources is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-geography",
        "contains",
        "Samurai warfare geography is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-legacy",
        "contains",
        "Samurai warfare legacy is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-practices",
        "contains",
        "Samurai warfare practices is a primary trailhead under Samurai warfare.",
        0.88,
        0.82
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-1",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-2",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-3",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-4",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-5",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-6",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-7",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-8",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-9",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-10",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-11",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-12",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-13",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-14",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-15",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-16",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-17",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-18",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-19",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-20",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-21",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-22",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-23",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ],
    [
        "samurai-warfare",
        "samurai-warfare-entry-24",
        "contains",
        "Supporting entry under Samurai warfare.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
