/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fire-engine-history",
        "name": "Fire engine history",
        "type": "topic",
        "short_description": "Pumpers, ladders, and the apparatus that fights urban blaze.",
        "description": "Pumpers, ladders, and the apparatus that fights urban blaze. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fire engine history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "fire-engine-history-figures",
        "name": "Fire engine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fire engine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fire engine history."
    },
    {
        "slug": "fire-engine-history-world",
        "name": "Fire engine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fire engine history.",
        "description": "Geography, institutions, and periodization that give Fire engine history its encyclopedia shape."
    },
    {
        "slug": "fire-engine-history-places",
        "name": "Fire engine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fire engine history.",
        "description": "Places, regions, and built sites that give Fire engine history its map — where events and figures concentrate."
    },
    {
        "slug": "fire-engine-history-events",
        "name": "Fire engine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fire engine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fire engine history timeline."
    },
    {
        "slug": "fire-engine-history-objects",
        "name": "Fire engine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fire engine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fire engine history."
    },
    {
        "slug": "fire-engine-history-factions",
        "name": "Fire engine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fire engine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fire engine history."
    },
    {
        "slug": "fire-engine-history-concepts",
        "name": "Fire engine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fire engine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fire engine history readable as a lore graph."
    },
    {
        "slug": "fire-engine-history-eras",
        "name": "Fire engine history eras",
        "type": "event",
        "short_description": "Periodization for Fire engine history.",
        "description": "Named eras and phases that help readers track how Fire engine history changes across time."
    },
    {
        "slug": "fire-engine-history-works",
        "name": "Fire engine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fire engine history.",
        "description": "Primary works and adaptations through which most audiences encounter Fire engine history."
    },
    {
        "slug": "fire-engine-history-symbols",
        "name": "Fire engine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fire engine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fire engine history."
    },
    {
        "slug": "fire-engine-history-controversies",
        "name": "Fire engine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fire engine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fire engine history argumentative."
    },
    {
        "slug": "fire-engine-history-sources",
        "name": "Fire engine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fire engine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fire engine history."
    },
    {
        "slug": "fire-engine-history-geography",
        "name": "Fire engine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fire engine history.",
        "description": "Regions, routes, and spatial systems that situate Fire engine history beyond single named places."
    },
    {
        "slug": "fire-engine-history-legacy",
        "name": "Fire engine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fire engine history.",
        "description": "How Fire engine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fire-engine-history-practices",
        "name": "Fire engine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fire engine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fire engine history."
    },
    {
        "slug": "fire-engine-history-entry-1",
        "name": "Fire engine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-2",
        "name": "Fire engine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-3",
        "name": "Fire engine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-4",
        "name": "Fire engine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-5",
        "name": "Fire engine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-6",
        "name": "Fire engine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-7",
        "name": "Fire engine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-8",
        "name": "Fire engine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-9",
        "name": "Fire engine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-10",
        "name": "Fire engine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-11",
        "name": "Fire engine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-12",
        "name": "Fire engine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-13",
        "name": "Fire engine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-14",
        "name": "Fire engine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-15",
        "name": "Fire engine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-16",
        "name": "Fire engine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-17",
        "name": "Fire engine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-18",
        "name": "Fire engine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-19",
        "name": "Fire engine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-20",
        "name": "Fire engine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-21",
        "name": "Fire engine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-22",
        "name": "Fire engine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-23",
        "name": "Fire engine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fire-engine-history-entry-24",
        "name": "Fire engine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fire engine history.",
        "description": "A supporting encyclopedia entry in the Fire engine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fire-engine-history",
        "fire-engine-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fire-engine-history",
        "fire-engine-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fire-engine-history",
        "fire-engine-history-places",
        "contains",
        "Fire engine history places is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-events",
        "contains",
        "Fire engine history events is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-objects",
        "contains",
        "Fire engine history objects & artifacts is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-factions",
        "contains",
        "Fire engine history factions & groups is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-concepts",
        "contains",
        "Fire engine history concepts is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-eras",
        "contains",
        "Fire engine history eras is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-works",
        "contains",
        "Fire engine history works & media is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-symbols",
        "contains",
        "Fire engine history symbols is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-controversies",
        "contains",
        "Fire engine history controversies is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-sources",
        "contains",
        "Fire engine history sources is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-geography",
        "contains",
        "Fire engine history geography is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-legacy",
        "contains",
        "Fire engine history legacy is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-practices",
        "contains",
        "Fire engine history practices is a primary trailhead under Fire engine history.",
        0.88,
        0.82
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-1",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-2",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-3",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-4",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-5",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-6",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-7",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-8",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-9",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-10",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-11",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-12",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-13",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-14",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-15",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-16",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-17",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-18",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-19",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-20",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-21",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-22",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-23",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ],
    [
        "fire-engine-history",
        "fire-engine-history-entry-24",
        "contains",
        "Supporting entry under Fire engine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
