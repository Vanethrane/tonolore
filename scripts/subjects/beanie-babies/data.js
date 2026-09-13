/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "beanie-babies",
        "name": "Beanie Babies",
        "type": "topic",
        "short_description": "Plush tags, retired drops, and the 1990s collectible frenzy that taught scarcity marketing.",
        "description": "Plush tags, retired drops, and the 1990s collectible frenzy that taught scarcity marketing. This Ton-o-Lore subject maps people, places, events, and ideas tied to Beanie Babies so readers can follow long-tail connections across toys & collectibles."
    },
    {
        "slug": "beanie-babies-figures",
        "name": "Beanie Babies figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Beanie Babies.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Beanie Babies."
    },
    {
        "slug": "beanie-babies-world",
        "name": "Beanie Babies world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Beanie Babies.",
        "description": "Geography, institutions, and periodization that give Beanie Babies its encyclopedia shape."
    },
    {
        "slug": "beanie-babies-places",
        "name": "Beanie Babies places",
        "type": "place",
        "short_description": "Locations and geographies that frame Beanie Babies.",
        "description": "Places, regions, and built sites that give Beanie Babies its map — where events and figures concentrate."
    },
    {
        "slug": "beanie-babies-events",
        "name": "Beanie Babies events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Beanie Babies.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Beanie Babies timeline."
    },
    {
        "slug": "beanie-babies-objects",
        "name": "Beanie Babies objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Beanie Babies.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Beanie Babies."
    },
    {
        "slug": "beanie-babies-factions",
        "name": "Beanie Babies factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Beanie Babies.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Beanie Babies."
    },
    {
        "slug": "beanie-babies-concepts",
        "name": "Beanie Babies concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Beanie Babies.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Beanie Babies readable as a lore graph."
    },
    {
        "slug": "beanie-babies-eras",
        "name": "Beanie Babies eras",
        "type": "event",
        "short_description": "Periodization for Beanie Babies.",
        "description": "Named eras and phases that help readers track how Beanie Babies changes across time."
    },
    {
        "slug": "beanie-babies-works",
        "name": "Beanie Babies works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Beanie Babies.",
        "description": "Primary works and adaptations through which most audiences encounter Beanie Babies."
    },
    {
        "slug": "beanie-babies-symbols",
        "name": "Beanie Babies symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Beanie Babies.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Beanie Babies."
    },
    {
        "slug": "beanie-babies-controversies",
        "name": "Beanie Babies controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Beanie Babies.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Beanie Babies argumentative."
    },
    {
        "slug": "beanie-babies-sources",
        "name": "Beanie Babies sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Beanie Babies.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Beanie Babies."
    },
    {
        "slug": "beanie-babies-geography",
        "name": "Beanie Babies geography",
        "type": "place",
        "short_description": "Broader geographic framing for Beanie Babies.",
        "description": "Regions, routes, and spatial systems that situate Beanie Babies beyond single named places."
    },
    {
        "slug": "beanie-babies-legacy",
        "name": "Beanie Babies legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Beanie Babies.",
        "description": "How Beanie Babies continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "beanie-babies-practices",
        "name": "Beanie Babies practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Beanie Babies.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Beanie Babies."
    },
    {
        "slug": "beanie-babies-entry-1",
        "name": "Beanie Babies entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-2",
        "name": "Beanie Babies entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-3",
        "name": "Beanie Babies entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-4",
        "name": "Beanie Babies entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-5",
        "name": "Beanie Babies entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-6",
        "name": "Beanie Babies entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-7",
        "name": "Beanie Babies entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-8",
        "name": "Beanie Babies entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-9",
        "name": "Beanie Babies entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-10",
        "name": "Beanie Babies entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-11",
        "name": "Beanie Babies entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-12",
        "name": "Beanie Babies entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-13",
        "name": "Beanie Babies entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-14",
        "name": "Beanie Babies entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-15",
        "name": "Beanie Babies entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-16",
        "name": "Beanie Babies entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-17",
        "name": "Beanie Babies entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-18",
        "name": "Beanie Babies entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-19",
        "name": "Beanie Babies entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-20",
        "name": "Beanie Babies entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-21",
        "name": "Beanie Babies entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-22",
        "name": "Beanie Babies entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-23",
        "name": "Beanie Babies entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "beanie-babies-entry-24",
        "name": "Beanie Babies entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Beanie Babies.",
        "description": "A supporting encyclopedia entry in the Beanie Babies subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "beanie-babies",
        "beanie-babies-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "beanie-babies",
        "beanie-babies-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "beanie-babies",
        "beanie-babies-places",
        "contains",
        "Beanie Babies places is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-events",
        "contains",
        "Beanie Babies events is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-objects",
        "contains",
        "Beanie Babies objects & artifacts is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-factions",
        "contains",
        "Beanie Babies factions & groups is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-concepts",
        "contains",
        "Beanie Babies concepts is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-eras",
        "contains",
        "Beanie Babies eras is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-works",
        "contains",
        "Beanie Babies works & media is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-symbols",
        "contains",
        "Beanie Babies symbols is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-controversies",
        "contains",
        "Beanie Babies controversies is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-sources",
        "contains",
        "Beanie Babies sources is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-geography",
        "contains",
        "Beanie Babies geography is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-legacy",
        "contains",
        "Beanie Babies legacy is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-practices",
        "contains",
        "Beanie Babies practices is a primary trailhead under Beanie Babies.",
        0.88,
        0.82
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-1",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-2",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-3",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-4",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-5",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-6",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-7",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-8",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-9",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-10",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-11",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-12",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-13",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-14",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-15",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-16",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-17",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-18",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-19",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-20",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-21",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-22",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-23",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ],
    [
        "beanie-babies",
        "beanie-babies-entry-24",
        "contains",
        "Supporting entry under Beanie Babies.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
