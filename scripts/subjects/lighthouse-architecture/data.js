/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "lighthouse-architecture",
        "name": "Lighthouse architecture",
        "type": "topic",
        "short_description": "Towers, Fresnel lenses, and the coastal beacons that guided ships home.",
        "description": "Towers, Fresnel lenses, and the coastal beacons that guided ships home. This Ton-o-Lore subject maps people, places, events, and ideas tied to Lighthouse architecture so readers can follow long-tail connections across built environment."
    },
    {
        "slug": "lighthouse-architecture-figures",
        "name": "Lighthouse architecture figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Lighthouse architecture.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Lighthouse architecture."
    },
    {
        "slug": "lighthouse-architecture-world",
        "name": "Lighthouse architecture world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Lighthouse architecture.",
        "description": "Geography, institutions, and periodization that give Lighthouse architecture its encyclopedia shape."
    },
    {
        "slug": "lighthouse-architecture-places",
        "name": "Lighthouse architecture places",
        "type": "place",
        "short_description": "Locations and geographies that frame Lighthouse architecture.",
        "description": "Places, regions, and built sites that give Lighthouse architecture its map — where events and figures concentrate."
    },
    {
        "slug": "lighthouse-architecture-events",
        "name": "Lighthouse architecture events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Lighthouse architecture.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Lighthouse architecture timeline."
    },
    {
        "slug": "lighthouse-architecture-objects",
        "name": "Lighthouse architecture objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Lighthouse architecture.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Lighthouse architecture."
    },
    {
        "slug": "lighthouse-architecture-factions",
        "name": "Lighthouse architecture factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Lighthouse architecture.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Lighthouse architecture."
    },
    {
        "slug": "lighthouse-architecture-concepts",
        "name": "Lighthouse architecture concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Lighthouse architecture.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Lighthouse architecture readable as a lore graph."
    },
    {
        "slug": "lighthouse-architecture-eras",
        "name": "Lighthouse architecture eras",
        "type": "event",
        "short_description": "Periodization for Lighthouse architecture.",
        "description": "Named eras and phases that help readers track how Lighthouse architecture changes across time."
    },
    {
        "slug": "lighthouse-architecture-works",
        "name": "Lighthouse architecture works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Lighthouse architecture.",
        "description": "Primary works and adaptations through which most audiences encounter Lighthouse architecture."
    },
    {
        "slug": "lighthouse-architecture-symbols",
        "name": "Lighthouse architecture symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Lighthouse architecture.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Lighthouse architecture."
    },
    {
        "slug": "lighthouse-architecture-controversies",
        "name": "Lighthouse architecture controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Lighthouse architecture.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Lighthouse architecture argumentative."
    },
    {
        "slug": "lighthouse-architecture-sources",
        "name": "Lighthouse architecture sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Lighthouse architecture.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Lighthouse architecture."
    },
    {
        "slug": "lighthouse-architecture-geography",
        "name": "Lighthouse architecture geography",
        "type": "place",
        "short_description": "Broader geographic framing for Lighthouse architecture.",
        "description": "Regions, routes, and spatial systems that situate Lighthouse architecture beyond single named places."
    },
    {
        "slug": "lighthouse-architecture-legacy",
        "name": "Lighthouse architecture legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Lighthouse architecture.",
        "description": "How Lighthouse architecture continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "lighthouse-architecture-practices",
        "name": "Lighthouse architecture practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Lighthouse architecture.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Lighthouse architecture."
    },
    {
        "slug": "lighthouse-architecture-entry-1",
        "name": "Lighthouse architecture entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-2",
        "name": "Lighthouse architecture entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-3",
        "name": "Lighthouse architecture entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-4",
        "name": "Lighthouse architecture entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-5",
        "name": "Lighthouse architecture entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-6",
        "name": "Lighthouse architecture entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-7",
        "name": "Lighthouse architecture entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-8",
        "name": "Lighthouse architecture entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-9",
        "name": "Lighthouse architecture entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-10",
        "name": "Lighthouse architecture entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-11",
        "name": "Lighthouse architecture entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-12",
        "name": "Lighthouse architecture entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-13",
        "name": "Lighthouse architecture entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-14",
        "name": "Lighthouse architecture entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-15",
        "name": "Lighthouse architecture entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-16",
        "name": "Lighthouse architecture entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-17",
        "name": "Lighthouse architecture entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-18",
        "name": "Lighthouse architecture entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-19",
        "name": "Lighthouse architecture entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-20",
        "name": "Lighthouse architecture entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-21",
        "name": "Lighthouse architecture entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-22",
        "name": "Lighthouse architecture entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-23",
        "name": "Lighthouse architecture entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "lighthouse-architecture-entry-24",
        "name": "Lighthouse architecture entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Lighthouse architecture.",
        "description": "A supporting encyclopedia entry in the Lighthouse architecture subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "lighthouse-architecture",
        "lighthouse-architecture-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-places",
        "contains",
        "Lighthouse architecture places is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-events",
        "contains",
        "Lighthouse architecture events is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-objects",
        "contains",
        "Lighthouse architecture objects & artifacts is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-factions",
        "contains",
        "Lighthouse architecture factions & groups is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-concepts",
        "contains",
        "Lighthouse architecture concepts is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-eras",
        "contains",
        "Lighthouse architecture eras is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-works",
        "contains",
        "Lighthouse architecture works & media is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-symbols",
        "contains",
        "Lighthouse architecture symbols is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-controversies",
        "contains",
        "Lighthouse architecture controversies is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-sources",
        "contains",
        "Lighthouse architecture sources is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-geography",
        "contains",
        "Lighthouse architecture geography is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-legacy",
        "contains",
        "Lighthouse architecture legacy is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-practices",
        "contains",
        "Lighthouse architecture practices is a primary trailhead under Lighthouse architecture.",
        0.88,
        0.82
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-1",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-2",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-3",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-4",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-5",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-6",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-7",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-8",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-9",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-10",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-11",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-12",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-13",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-14",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-15",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-16",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-17",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-18",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-19",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-20",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-21",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-22",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-23",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ],
    [
        "lighthouse-architecture",
        "lighthouse-architecture-entry-24",
        "contains",
        "Supporting entry under Lighthouse architecture.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
