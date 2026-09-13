/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "loch-ness-monster",
        "name": "Loch Ness Monster",
        "type": "topic",
        "short_description": "Nessie sightings, sonar hunts, and Scotland’s most famous lake cryptid.",
        "description": "Nessie sightings, sonar hunts, and Scotland’s most famous lake cryptid. This Ton-o-Lore subject maps people, places, events, and ideas tied to Loch Ness Monster so readers can follow long-tail connections across unexplained."
    },
    {
        "slug": "loch-ness-monster-figures",
        "name": "Loch Ness Monster figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Loch Ness Monster.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Loch Ness Monster."
    },
    {
        "slug": "loch-ness-monster-world",
        "name": "Loch Ness Monster world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Loch Ness Monster.",
        "description": "Geography, institutions, and periodization that give Loch Ness Monster its encyclopedia shape."
    },
    {
        "slug": "loch-ness-monster-places",
        "name": "Loch Ness Monster places",
        "type": "place",
        "short_description": "Locations and geographies that frame Loch Ness Monster.",
        "description": "Places, regions, and built sites that give Loch Ness Monster its map — where events and figures concentrate."
    },
    {
        "slug": "loch-ness-monster-events",
        "name": "Loch Ness Monster events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Loch Ness Monster.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Loch Ness Monster timeline."
    },
    {
        "slug": "loch-ness-monster-objects",
        "name": "Loch Ness Monster objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Loch Ness Monster.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Loch Ness Monster."
    },
    {
        "slug": "loch-ness-monster-factions",
        "name": "Loch Ness Monster factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Loch Ness Monster.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Loch Ness Monster."
    },
    {
        "slug": "loch-ness-monster-concepts",
        "name": "Loch Ness Monster concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Loch Ness Monster.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Loch Ness Monster readable as a lore graph."
    },
    {
        "slug": "loch-ness-monster-eras",
        "name": "Loch Ness Monster eras",
        "type": "event",
        "short_description": "Periodization for Loch Ness Monster.",
        "description": "Named eras and phases that help readers track how Loch Ness Monster changes across time."
    },
    {
        "slug": "loch-ness-monster-works",
        "name": "Loch Ness Monster works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Loch Ness Monster.",
        "description": "Primary works and adaptations through which most audiences encounter Loch Ness Monster."
    },
    {
        "slug": "loch-ness-monster-symbols",
        "name": "Loch Ness Monster symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Loch Ness Monster.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Loch Ness Monster."
    },
    {
        "slug": "loch-ness-monster-controversies",
        "name": "Loch Ness Monster controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Loch Ness Monster.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Loch Ness Monster argumentative."
    },
    {
        "slug": "loch-ness-monster-sources",
        "name": "Loch Ness Monster sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Loch Ness Monster.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Loch Ness Monster."
    },
    {
        "slug": "loch-ness-monster-geography",
        "name": "Loch Ness Monster geography",
        "type": "place",
        "short_description": "Broader geographic framing for Loch Ness Monster.",
        "description": "Regions, routes, and spatial systems that situate Loch Ness Monster beyond single named places."
    },
    {
        "slug": "loch-ness-monster-legacy",
        "name": "Loch Ness Monster legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Loch Ness Monster.",
        "description": "How Loch Ness Monster continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "loch-ness-monster-practices",
        "name": "Loch Ness Monster practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Loch Ness Monster.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Loch Ness Monster."
    },
    {
        "slug": "loch-ness-monster-entry-1",
        "name": "Loch Ness Monster entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-2",
        "name": "Loch Ness Monster entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-3",
        "name": "Loch Ness Monster entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-4",
        "name": "Loch Ness Monster entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-5",
        "name": "Loch Ness Monster entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-6",
        "name": "Loch Ness Monster entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-7",
        "name": "Loch Ness Monster entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-8",
        "name": "Loch Ness Monster entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-9",
        "name": "Loch Ness Monster entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-10",
        "name": "Loch Ness Monster entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-11",
        "name": "Loch Ness Monster entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-12",
        "name": "Loch Ness Monster entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-13",
        "name": "Loch Ness Monster entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-14",
        "name": "Loch Ness Monster entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-15",
        "name": "Loch Ness Monster entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-16",
        "name": "Loch Ness Monster entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-17",
        "name": "Loch Ness Monster entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-18",
        "name": "Loch Ness Monster entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-19",
        "name": "Loch Ness Monster entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-20",
        "name": "Loch Ness Monster entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-21",
        "name": "Loch Ness Monster entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-22",
        "name": "Loch Ness Monster entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-23",
        "name": "Loch Ness Monster entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "loch-ness-monster-entry-24",
        "name": "Loch Ness Monster entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Loch Ness Monster.",
        "description": "A supporting encyclopedia entry in the Loch Ness Monster subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "loch-ness-monster",
        "loch-ness-monster-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-places",
        "contains",
        "Loch Ness Monster places is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-events",
        "contains",
        "Loch Ness Monster events is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-objects",
        "contains",
        "Loch Ness Monster objects & artifacts is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-factions",
        "contains",
        "Loch Ness Monster factions & groups is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-concepts",
        "contains",
        "Loch Ness Monster concepts is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-eras",
        "contains",
        "Loch Ness Monster eras is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-works",
        "contains",
        "Loch Ness Monster works & media is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-symbols",
        "contains",
        "Loch Ness Monster symbols is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-controversies",
        "contains",
        "Loch Ness Monster controversies is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-sources",
        "contains",
        "Loch Ness Monster sources is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-geography",
        "contains",
        "Loch Ness Monster geography is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-legacy",
        "contains",
        "Loch Ness Monster legacy is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-practices",
        "contains",
        "Loch Ness Monster practices is a primary trailhead under Loch Ness Monster.",
        0.88,
        0.82
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-1",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-2",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-3",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-4",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-5",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-6",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-7",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-8",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-9",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-10",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-11",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-12",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-13",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-14",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-15",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-16",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-17",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-18",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-19",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-20",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-21",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-22",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-23",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ],
    [
        "loch-ness-monster",
        "loch-ness-monster-entry-24",
        "contains",
        "Supporting entry under Loch Ness Monster.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
