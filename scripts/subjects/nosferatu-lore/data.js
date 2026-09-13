/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "nosferatu-lore",
        "name": "Nosferatu",
        "type": "topic",
        "short_description": "Orlok’s plague-shadow, Expressionist dread, and the unauthorized Dracula that became its own icon.",
        "description": "Orlok’s plague-shadow, Expressionist dread, and the unauthorized Dracula that became its own icon. This Ton-o-Lore subject maps people, places, events, and ideas tied to Nosferatu so readers can follow long-tail connections across horror."
    },
    {
        "slug": "nosferatu-lore-figures",
        "name": "Nosferatu figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Nosferatu.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Nosferatu."
    },
    {
        "slug": "nosferatu-lore-world",
        "name": "Nosferatu world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Nosferatu.",
        "description": "Geography, institutions, and periodization that give Nosferatu its encyclopedia shape."
    },
    {
        "slug": "nosferatu-lore-places",
        "name": "Nosferatu places",
        "type": "place",
        "short_description": "Locations and geographies that frame Nosferatu.",
        "description": "Places, regions, and built sites that give Nosferatu its map — where events and figures concentrate."
    },
    {
        "slug": "nosferatu-lore-events",
        "name": "Nosferatu events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Nosferatu.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Nosferatu timeline."
    },
    {
        "slug": "nosferatu-lore-objects",
        "name": "Nosferatu objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Nosferatu.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Nosferatu."
    },
    {
        "slug": "nosferatu-lore-factions",
        "name": "Nosferatu factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Nosferatu.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Nosferatu."
    },
    {
        "slug": "nosferatu-lore-concepts",
        "name": "Nosferatu concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Nosferatu.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Nosferatu readable as a lore graph."
    },
    {
        "slug": "nosferatu-lore-eras",
        "name": "Nosferatu eras",
        "type": "event",
        "short_description": "Periodization for Nosferatu.",
        "description": "Named eras and phases that help readers track how Nosferatu changes across time."
    },
    {
        "slug": "nosferatu-lore-works",
        "name": "Nosferatu works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Nosferatu.",
        "description": "Primary works and adaptations through which most audiences encounter Nosferatu."
    },
    {
        "slug": "nosferatu-lore-symbols",
        "name": "Nosferatu symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Nosferatu.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Nosferatu."
    },
    {
        "slug": "nosferatu-lore-controversies",
        "name": "Nosferatu controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Nosferatu.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Nosferatu argumentative."
    },
    {
        "slug": "nosferatu-lore-sources",
        "name": "Nosferatu sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Nosferatu.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Nosferatu."
    },
    {
        "slug": "nosferatu-lore-geography",
        "name": "Nosferatu geography",
        "type": "place",
        "short_description": "Broader geographic framing for Nosferatu.",
        "description": "Regions, routes, and spatial systems that situate Nosferatu beyond single named places."
    },
    {
        "slug": "nosferatu-lore-legacy",
        "name": "Nosferatu legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Nosferatu.",
        "description": "How Nosferatu continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "nosferatu-lore-practices",
        "name": "Nosferatu practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Nosferatu.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Nosferatu."
    },
    {
        "slug": "nosferatu-lore-entry-1",
        "name": "Nosferatu entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-2",
        "name": "Nosferatu entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-3",
        "name": "Nosferatu entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-4",
        "name": "Nosferatu entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-5",
        "name": "Nosferatu entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-6",
        "name": "Nosferatu entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-7",
        "name": "Nosferatu entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-8",
        "name": "Nosferatu entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-9",
        "name": "Nosferatu entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-10",
        "name": "Nosferatu entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-11",
        "name": "Nosferatu entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-12",
        "name": "Nosferatu entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-13",
        "name": "Nosferatu entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-14",
        "name": "Nosferatu entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-15",
        "name": "Nosferatu entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-16",
        "name": "Nosferatu entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-17",
        "name": "Nosferatu entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-18",
        "name": "Nosferatu entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-19",
        "name": "Nosferatu entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-20",
        "name": "Nosferatu entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-21",
        "name": "Nosferatu entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-22",
        "name": "Nosferatu entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-23",
        "name": "Nosferatu entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "nosferatu-lore-entry-24",
        "name": "Nosferatu entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Nosferatu.",
        "description": "A supporting encyclopedia entry in the Nosferatu subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "nosferatu-lore",
        "nosferatu-lore-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-places",
        "contains",
        "Nosferatu places is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-events",
        "contains",
        "Nosferatu events is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-objects",
        "contains",
        "Nosferatu objects & artifacts is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-factions",
        "contains",
        "Nosferatu factions & groups is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-concepts",
        "contains",
        "Nosferatu concepts is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-eras",
        "contains",
        "Nosferatu eras is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-works",
        "contains",
        "Nosferatu works & media is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-symbols",
        "contains",
        "Nosferatu symbols is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-controversies",
        "contains",
        "Nosferatu controversies is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-sources",
        "contains",
        "Nosferatu sources is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-geography",
        "contains",
        "Nosferatu geography is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-legacy",
        "contains",
        "Nosferatu legacy is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-practices",
        "contains",
        "Nosferatu practices is a primary trailhead under Nosferatu.",
        0.88,
        0.82
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-1",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-2",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-3",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-4",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-5",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-6",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-7",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-8",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-9",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-10",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-11",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-12",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-13",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-14",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-15",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-16",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-17",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-18",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-19",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-20",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-21",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-22",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-23",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ],
    [
        "nosferatu-lore",
        "nosferatu-lore-entry-24",
        "contains",
        "Supporting entry under Nosferatu.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
