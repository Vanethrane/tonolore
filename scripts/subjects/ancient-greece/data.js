/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "ancient-greece",
        "name": "Ancient Greece",
        "type": "topic",
        "short_description": "City-states, philosophers, wars, and the classical culture that seeded Western civic myth.",
        "description": "City-states, philosophers, wars, and the classical culture that seeded Western civic myth. This Ton-o-Lore subject maps people, places, events, and ideas tied to Ancient Greece so readers can follow long-tail connections across history."
    },
    {
        "slug": "ancient-greece-figures",
        "name": "Ancient Greece figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Ancient Greece.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Ancient Greece."
    },
    {
        "slug": "ancient-greece-world",
        "name": "Ancient Greece world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Ancient Greece.",
        "description": "Geography, institutions, and periodization that give Ancient Greece its encyclopedia shape."
    },
    {
        "slug": "ancient-greece-places",
        "name": "Ancient Greece places",
        "type": "place",
        "short_description": "Locations and geographies that frame Ancient Greece.",
        "description": "Places, regions, and built sites that give Ancient Greece its map — where events and figures concentrate."
    },
    {
        "slug": "ancient-greece-events",
        "name": "Ancient Greece events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Ancient Greece.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Ancient Greece timeline."
    },
    {
        "slug": "ancient-greece-objects",
        "name": "Ancient Greece objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Ancient Greece.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Ancient Greece."
    },
    {
        "slug": "ancient-greece-factions",
        "name": "Ancient Greece factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Ancient Greece.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Ancient Greece."
    },
    {
        "slug": "ancient-greece-concepts",
        "name": "Ancient Greece concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Ancient Greece.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Ancient Greece readable as a lore graph."
    },
    {
        "slug": "ancient-greece-eras",
        "name": "Ancient Greece eras",
        "type": "event",
        "short_description": "Periodization for Ancient Greece.",
        "description": "Named eras and phases that help readers track how Ancient Greece changes across time."
    },
    {
        "slug": "ancient-greece-works",
        "name": "Ancient Greece works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Ancient Greece.",
        "description": "Primary works and adaptations through which most audiences encounter Ancient Greece."
    },
    {
        "slug": "ancient-greece-symbols",
        "name": "Ancient Greece symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Ancient Greece.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Ancient Greece."
    },
    {
        "slug": "ancient-greece-controversies",
        "name": "Ancient Greece controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Ancient Greece.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Ancient Greece argumentative."
    },
    {
        "slug": "ancient-greece-sources",
        "name": "Ancient Greece sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Ancient Greece.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Ancient Greece."
    },
    {
        "slug": "ancient-greece-geography",
        "name": "Ancient Greece geography",
        "type": "place",
        "short_description": "Broader geographic framing for Ancient Greece.",
        "description": "Regions, routes, and spatial systems that situate Ancient Greece beyond single named places."
    },
    {
        "slug": "ancient-greece-legacy",
        "name": "Ancient Greece legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Ancient Greece.",
        "description": "How Ancient Greece continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "ancient-greece-practices",
        "name": "Ancient Greece practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Ancient Greece.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Ancient Greece."
    },
    {
        "slug": "ancient-greece-entry-1",
        "name": "Ancient Greece entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-2",
        "name": "Ancient Greece entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-3",
        "name": "Ancient Greece entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-4",
        "name": "Ancient Greece entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-5",
        "name": "Ancient Greece entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-6",
        "name": "Ancient Greece entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-7",
        "name": "Ancient Greece entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-8",
        "name": "Ancient Greece entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-9",
        "name": "Ancient Greece entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-10",
        "name": "Ancient Greece entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-11",
        "name": "Ancient Greece entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-12",
        "name": "Ancient Greece entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-13",
        "name": "Ancient Greece entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-14",
        "name": "Ancient Greece entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-15",
        "name": "Ancient Greece entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-16",
        "name": "Ancient Greece entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-17",
        "name": "Ancient Greece entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-18",
        "name": "Ancient Greece entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-19",
        "name": "Ancient Greece entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-20",
        "name": "Ancient Greece entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-21",
        "name": "Ancient Greece entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-22",
        "name": "Ancient Greece entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-23",
        "name": "Ancient Greece entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "ancient-greece-entry-24",
        "name": "Ancient Greece entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Ancient Greece.",
        "description": "A supporting encyclopedia entry in the Ancient Greece subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "ancient-greece",
        "ancient-greece-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "ancient-greece",
        "ancient-greece-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "ancient-greece",
        "ancient-greece-places",
        "contains",
        "Ancient Greece places is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-events",
        "contains",
        "Ancient Greece events is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-objects",
        "contains",
        "Ancient Greece objects & artifacts is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-factions",
        "contains",
        "Ancient Greece factions & groups is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-concepts",
        "contains",
        "Ancient Greece concepts is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-eras",
        "contains",
        "Ancient Greece eras is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-works",
        "contains",
        "Ancient Greece works & media is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-symbols",
        "contains",
        "Ancient Greece symbols is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-controversies",
        "contains",
        "Ancient Greece controversies is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-sources",
        "contains",
        "Ancient Greece sources is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-geography",
        "contains",
        "Ancient Greece geography is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-legacy",
        "contains",
        "Ancient Greece legacy is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-practices",
        "contains",
        "Ancient Greece practices is a primary trailhead under Ancient Greece.",
        0.88,
        0.82
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-1",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-2",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-3",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-4",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-5",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-6",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-7",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-8",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-9",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-10",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-11",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-12",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-13",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-14",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-15",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-16",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-17",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-18",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-19",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-20",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-21",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-22",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-23",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ],
    [
        "ancient-greece",
        "ancient-greece-entry-24",
        "contains",
        "Supporting entry under Ancient Greece.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
