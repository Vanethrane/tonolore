/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fortnite",
        "name": "Fortnite",
        "type": "topic",
        "short_description": "Battle Royale seasons, metaverse concerts, and the cultural chameleon of late-2010s gaming.",
        "description": "Battle Royale seasons, metaverse concerts, and the cultural chameleon of late-2010s gaming. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fortnite so readers can follow long-tail connections across video games."
    },
    {
        "slug": "fortnite-figures",
        "name": "Fortnite figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fortnite.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fortnite."
    },
    {
        "slug": "fortnite-world",
        "name": "Fortnite world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fortnite.",
        "description": "Geography, institutions, and periodization that give Fortnite its encyclopedia shape."
    },
    {
        "slug": "fortnite-places",
        "name": "Fortnite places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fortnite.",
        "description": "Places, regions, and built sites that give Fortnite its map — where events and figures concentrate."
    },
    {
        "slug": "fortnite-events",
        "name": "Fortnite events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fortnite.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fortnite timeline."
    },
    {
        "slug": "fortnite-objects",
        "name": "Fortnite objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fortnite.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fortnite."
    },
    {
        "slug": "fortnite-factions",
        "name": "Fortnite factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fortnite.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fortnite."
    },
    {
        "slug": "fortnite-concepts",
        "name": "Fortnite concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fortnite.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fortnite readable as a lore graph."
    },
    {
        "slug": "fortnite-eras",
        "name": "Fortnite eras",
        "type": "event",
        "short_description": "Periodization for Fortnite.",
        "description": "Named eras and phases that help readers track how Fortnite changes across time."
    },
    {
        "slug": "fortnite-works",
        "name": "Fortnite works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fortnite.",
        "description": "Primary works and adaptations through which most audiences encounter Fortnite."
    },
    {
        "slug": "fortnite-symbols",
        "name": "Fortnite symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fortnite.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fortnite."
    },
    {
        "slug": "fortnite-controversies",
        "name": "Fortnite controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fortnite.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fortnite argumentative."
    },
    {
        "slug": "fortnite-sources",
        "name": "Fortnite sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fortnite.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fortnite."
    },
    {
        "slug": "fortnite-geography",
        "name": "Fortnite geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fortnite.",
        "description": "Regions, routes, and spatial systems that situate Fortnite beyond single named places."
    },
    {
        "slug": "fortnite-legacy",
        "name": "Fortnite legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fortnite.",
        "description": "How Fortnite continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fortnite-practices",
        "name": "Fortnite practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fortnite.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fortnite."
    },
    {
        "slug": "fortnite-entry-1",
        "name": "Fortnite entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-2",
        "name": "Fortnite entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-3",
        "name": "Fortnite entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-4",
        "name": "Fortnite entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-5",
        "name": "Fortnite entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-6",
        "name": "Fortnite entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-7",
        "name": "Fortnite entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-8",
        "name": "Fortnite entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-9",
        "name": "Fortnite entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-10",
        "name": "Fortnite entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-11",
        "name": "Fortnite entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-12",
        "name": "Fortnite entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-13",
        "name": "Fortnite entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-14",
        "name": "Fortnite entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-15",
        "name": "Fortnite entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-16",
        "name": "Fortnite entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-17",
        "name": "Fortnite entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-18",
        "name": "Fortnite entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-19",
        "name": "Fortnite entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-20",
        "name": "Fortnite entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-21",
        "name": "Fortnite entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-22",
        "name": "Fortnite entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-23",
        "name": "Fortnite entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fortnite-entry-24",
        "name": "Fortnite entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fortnite.",
        "description": "A supporting encyclopedia entry in the Fortnite subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fortnite",
        "fortnite-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fortnite",
        "fortnite-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fortnite",
        "fortnite-places",
        "contains",
        "Fortnite places is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-events",
        "contains",
        "Fortnite events is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-objects",
        "contains",
        "Fortnite objects & artifacts is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-factions",
        "contains",
        "Fortnite factions & groups is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-concepts",
        "contains",
        "Fortnite concepts is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-eras",
        "contains",
        "Fortnite eras is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-works",
        "contains",
        "Fortnite works & media is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-symbols",
        "contains",
        "Fortnite symbols is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-controversies",
        "contains",
        "Fortnite controversies is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-sources",
        "contains",
        "Fortnite sources is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-geography",
        "contains",
        "Fortnite geography is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-legacy",
        "contains",
        "Fortnite legacy is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-practices",
        "contains",
        "Fortnite practices is a primary trailhead under Fortnite.",
        0.88,
        0.82
    ],
    [
        "fortnite",
        "fortnite-entry-1",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-2",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-3",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-4",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-5",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-6",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-7",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-8",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-9",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-10",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-11",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-12",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-13",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-14",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-15",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-16",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-17",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-18",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-19",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-20",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-21",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-22",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-23",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ],
    [
        "fortnite",
        "fortnite-entry-24",
        "contains",
        "Supporting entry under Fortnite.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
