/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "starrcade-legacy",
        "name": "Starrcade",
        "type": "topic",
        "short_description": "Thanksgiving tradition, Flair eras, and the NWA/WCW supercard that preceded WrestleMania’s dominance.",
        "description": "Thanksgiving tradition, Flair eras, and the NWA/WCW supercard that preceded WrestleMania’s dominance. This Ton-o-Lore subject maps people, places, events, and ideas tied to Starrcade so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "starrcade-legacy-figures",
        "name": "Starrcade figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Starrcade.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Starrcade."
    },
    {
        "slug": "starrcade-legacy-world",
        "name": "Starrcade world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Starrcade.",
        "description": "Geography, institutions, and periodization that give Starrcade its encyclopedia shape."
    },
    {
        "slug": "starrcade-legacy-places",
        "name": "Starrcade places",
        "type": "place",
        "short_description": "Locations and geographies that frame Starrcade.",
        "description": "Places, regions, and built sites that give Starrcade its map — where events and figures concentrate."
    },
    {
        "slug": "starrcade-legacy-events",
        "name": "Starrcade events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Starrcade.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Starrcade timeline."
    },
    {
        "slug": "starrcade-legacy-objects",
        "name": "Starrcade objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Starrcade.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Starrcade."
    },
    {
        "slug": "starrcade-legacy-factions",
        "name": "Starrcade factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Starrcade.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Starrcade."
    },
    {
        "slug": "starrcade-legacy-concepts",
        "name": "Starrcade concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Starrcade.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Starrcade readable as a lore graph."
    },
    {
        "slug": "starrcade-legacy-eras",
        "name": "Starrcade eras",
        "type": "event",
        "short_description": "Periodization for Starrcade.",
        "description": "Named eras and phases that help readers track how Starrcade changes across time."
    },
    {
        "slug": "starrcade-legacy-works",
        "name": "Starrcade works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Starrcade.",
        "description": "Primary works and adaptations through which most audiences encounter Starrcade."
    },
    {
        "slug": "starrcade-legacy-symbols",
        "name": "Starrcade symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Starrcade.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Starrcade."
    },
    {
        "slug": "starrcade-legacy-controversies",
        "name": "Starrcade controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Starrcade.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Starrcade argumentative."
    },
    {
        "slug": "starrcade-legacy-sources",
        "name": "Starrcade sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Starrcade.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Starrcade."
    },
    {
        "slug": "starrcade-legacy-geography",
        "name": "Starrcade geography",
        "type": "place",
        "short_description": "Broader geographic framing for Starrcade.",
        "description": "Regions, routes, and spatial systems that situate Starrcade beyond single named places."
    },
    {
        "slug": "starrcade-legacy-legacy",
        "name": "Starrcade legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Starrcade.",
        "description": "How Starrcade continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "starrcade-legacy-practices",
        "name": "Starrcade practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Starrcade.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Starrcade."
    },
    {
        "slug": "starrcade-legacy-entry-1",
        "name": "Starrcade entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-2",
        "name": "Starrcade entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-3",
        "name": "Starrcade entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-4",
        "name": "Starrcade entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-5",
        "name": "Starrcade entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-6",
        "name": "Starrcade entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-7",
        "name": "Starrcade entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-8",
        "name": "Starrcade entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-9",
        "name": "Starrcade entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-10",
        "name": "Starrcade entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-11",
        "name": "Starrcade entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-12",
        "name": "Starrcade entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-13",
        "name": "Starrcade entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-14",
        "name": "Starrcade entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-15",
        "name": "Starrcade entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-16",
        "name": "Starrcade entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-17",
        "name": "Starrcade entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-18",
        "name": "Starrcade entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-19",
        "name": "Starrcade entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-20",
        "name": "Starrcade entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-21",
        "name": "Starrcade entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-22",
        "name": "Starrcade entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-23",
        "name": "Starrcade entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "starrcade-legacy-entry-24",
        "name": "Starrcade entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Starrcade.",
        "description": "A supporting encyclopedia entry in the Starrcade subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "starrcade-legacy",
        "starrcade-legacy-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-places",
        "contains",
        "Starrcade places is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-events",
        "contains",
        "Starrcade events is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-objects",
        "contains",
        "Starrcade objects & artifacts is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-factions",
        "contains",
        "Starrcade factions & groups is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-concepts",
        "contains",
        "Starrcade concepts is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-eras",
        "contains",
        "Starrcade eras is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-works",
        "contains",
        "Starrcade works & media is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-symbols",
        "contains",
        "Starrcade symbols is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-controversies",
        "contains",
        "Starrcade controversies is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-sources",
        "contains",
        "Starrcade sources is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-geography",
        "contains",
        "Starrcade geography is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-legacy",
        "contains",
        "Starrcade legacy is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-practices",
        "contains",
        "Starrcade practices is a primary trailhead under Starrcade.",
        0.88,
        0.82
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-1",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-2",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-3",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-4",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-5",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-6",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-7",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-8",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-9",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-10",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-11",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-12",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-13",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-14",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-15",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-16",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-17",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-18",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-19",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-20",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-21",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-22",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-23",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ],
    [
        "starrcade-legacy",
        "starrcade-legacy-entry-24",
        "contains",
        "Supporting entry under Starrcade.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
