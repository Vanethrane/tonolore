/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "quantum-physics",
        "name": "Quantum physics",
        "type": "topic",
        "short_description": "Uncertainty, entanglement, and the microscopic rules that upended classical reality.",
        "description": "Uncertainty, entanglement, and the microscopic rules that upended classical reality. This Ton-o-Lore subject maps people, places, events, and ideas tied to Quantum physics so readers can follow long-tail connections across science & nature."
    },
    {
        "slug": "quantum-physics-figures",
        "name": "Quantum physics figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Quantum physics.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Quantum physics."
    },
    {
        "slug": "quantum-physics-world",
        "name": "Quantum physics world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Quantum physics.",
        "description": "Geography, institutions, and periodization that give Quantum physics its encyclopedia shape."
    },
    {
        "slug": "quantum-physics-places",
        "name": "Quantum physics places",
        "type": "place",
        "short_description": "Locations and geographies that frame Quantum physics.",
        "description": "Places, regions, and built sites that give Quantum physics its map — where events and figures concentrate."
    },
    {
        "slug": "quantum-physics-events",
        "name": "Quantum physics events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Quantum physics.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Quantum physics timeline."
    },
    {
        "slug": "quantum-physics-objects",
        "name": "Quantum physics objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Quantum physics.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Quantum physics."
    },
    {
        "slug": "quantum-physics-factions",
        "name": "Quantum physics factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Quantum physics.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Quantum physics."
    },
    {
        "slug": "quantum-physics-concepts",
        "name": "Quantum physics concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Quantum physics.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Quantum physics readable as a lore graph."
    },
    {
        "slug": "quantum-physics-eras",
        "name": "Quantum physics eras",
        "type": "event",
        "short_description": "Periodization for Quantum physics.",
        "description": "Named eras and phases that help readers track how Quantum physics changes across time."
    },
    {
        "slug": "quantum-physics-works",
        "name": "Quantum physics works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Quantum physics.",
        "description": "Primary works and adaptations through which most audiences encounter Quantum physics."
    },
    {
        "slug": "quantum-physics-symbols",
        "name": "Quantum physics symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Quantum physics.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Quantum physics."
    },
    {
        "slug": "quantum-physics-controversies",
        "name": "Quantum physics controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Quantum physics.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Quantum physics argumentative."
    },
    {
        "slug": "quantum-physics-sources",
        "name": "Quantum physics sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Quantum physics.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Quantum physics."
    },
    {
        "slug": "quantum-physics-geography",
        "name": "Quantum physics geography",
        "type": "place",
        "short_description": "Broader geographic framing for Quantum physics.",
        "description": "Regions, routes, and spatial systems that situate Quantum physics beyond single named places."
    },
    {
        "slug": "quantum-physics-legacy",
        "name": "Quantum physics legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Quantum physics.",
        "description": "How Quantum physics continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "quantum-physics-practices",
        "name": "Quantum physics practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Quantum physics.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Quantum physics."
    },
    {
        "slug": "quantum-physics-entry-1",
        "name": "Quantum physics entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-2",
        "name": "Quantum physics entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-3",
        "name": "Quantum physics entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-4",
        "name": "Quantum physics entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-5",
        "name": "Quantum physics entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-6",
        "name": "Quantum physics entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-7",
        "name": "Quantum physics entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-8",
        "name": "Quantum physics entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-9",
        "name": "Quantum physics entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-10",
        "name": "Quantum physics entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-11",
        "name": "Quantum physics entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-12",
        "name": "Quantum physics entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-13",
        "name": "Quantum physics entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-14",
        "name": "Quantum physics entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-15",
        "name": "Quantum physics entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-16",
        "name": "Quantum physics entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-17",
        "name": "Quantum physics entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-18",
        "name": "Quantum physics entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-19",
        "name": "Quantum physics entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-20",
        "name": "Quantum physics entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-21",
        "name": "Quantum physics entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-22",
        "name": "Quantum physics entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-23",
        "name": "Quantum physics entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "quantum-physics-entry-24",
        "name": "Quantum physics entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Quantum physics.",
        "description": "A supporting encyclopedia entry in the Quantum physics subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "quantum-physics",
        "quantum-physics-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "quantum-physics",
        "quantum-physics-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "quantum-physics",
        "quantum-physics-places",
        "contains",
        "Quantum physics places is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-events",
        "contains",
        "Quantum physics events is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-objects",
        "contains",
        "Quantum physics objects & artifacts is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-factions",
        "contains",
        "Quantum physics factions & groups is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-concepts",
        "contains",
        "Quantum physics concepts is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-eras",
        "contains",
        "Quantum physics eras is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-works",
        "contains",
        "Quantum physics works & media is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-symbols",
        "contains",
        "Quantum physics symbols is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-controversies",
        "contains",
        "Quantum physics controversies is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-sources",
        "contains",
        "Quantum physics sources is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-geography",
        "contains",
        "Quantum physics geography is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-legacy",
        "contains",
        "Quantum physics legacy is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-practices",
        "contains",
        "Quantum physics practices is a primary trailhead under Quantum physics.",
        0.88,
        0.82
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-1",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-2",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-3",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-4",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-5",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-6",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-7",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-8",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-9",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-10",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-11",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-12",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-13",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-14",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-15",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-16",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-17",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-18",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-19",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-20",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-21",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-22",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-23",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ],
    [
        "quantum-physics",
        "quantum-physics-entry-24",
        "contains",
        "Supporting entry under Quantum physics.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
