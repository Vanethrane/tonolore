/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "monasticism-history",
        "name": "Monasticism history",
        "type": "topic",
        "short_description": "Abbeys, vinaya, and the withdrawn life that preserved texts and shaped piety.",
        "description": "Abbeys, vinaya, and the withdrawn life that preserved texts and shaped piety. This Ton-o-Lore subject maps people, places, events, and ideas tied to Monasticism history so readers can follow long-tail connections across religion & belief."
    },
    {
        "slug": "monasticism-history-figures",
        "name": "Monasticism history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Monasticism history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Monasticism history."
    },
    {
        "slug": "monasticism-history-world",
        "name": "Monasticism history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Monasticism history.",
        "description": "Geography, institutions, and periodization that give Monasticism history its encyclopedia shape."
    },
    {
        "slug": "monasticism-history-places",
        "name": "Monasticism history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Monasticism history.",
        "description": "Places, regions, and built sites that give Monasticism history its map — where events and figures concentrate."
    },
    {
        "slug": "monasticism-history-events",
        "name": "Monasticism history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Monasticism history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Monasticism history timeline."
    },
    {
        "slug": "monasticism-history-objects",
        "name": "Monasticism history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Monasticism history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Monasticism history."
    },
    {
        "slug": "monasticism-history-factions",
        "name": "Monasticism history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Monasticism history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Monasticism history."
    },
    {
        "slug": "monasticism-history-concepts",
        "name": "Monasticism history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Monasticism history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Monasticism history readable as a lore graph."
    },
    {
        "slug": "monasticism-history-eras",
        "name": "Monasticism history eras",
        "type": "event",
        "short_description": "Periodization for Monasticism history.",
        "description": "Named eras and phases that help readers track how Monasticism history changes across time."
    },
    {
        "slug": "monasticism-history-works",
        "name": "Monasticism history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Monasticism history.",
        "description": "Primary works and adaptations through which most audiences encounter Monasticism history."
    },
    {
        "slug": "monasticism-history-symbols",
        "name": "Monasticism history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Monasticism history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Monasticism history."
    },
    {
        "slug": "monasticism-history-controversies",
        "name": "Monasticism history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Monasticism history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Monasticism history argumentative."
    },
    {
        "slug": "monasticism-history-sources",
        "name": "Monasticism history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Monasticism history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Monasticism history."
    },
    {
        "slug": "monasticism-history-geography",
        "name": "Monasticism history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Monasticism history.",
        "description": "Regions, routes, and spatial systems that situate Monasticism history beyond single named places."
    },
    {
        "slug": "monasticism-history-legacy",
        "name": "Monasticism history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Monasticism history.",
        "description": "How Monasticism history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "monasticism-history-practices",
        "name": "Monasticism history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Monasticism history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Monasticism history."
    },
    {
        "slug": "monasticism-history-entry-1",
        "name": "Monasticism history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-2",
        "name": "Monasticism history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-3",
        "name": "Monasticism history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-4",
        "name": "Monasticism history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-5",
        "name": "Monasticism history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-6",
        "name": "Monasticism history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-7",
        "name": "Monasticism history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-8",
        "name": "Monasticism history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-9",
        "name": "Monasticism history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-10",
        "name": "Monasticism history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-11",
        "name": "Monasticism history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-12",
        "name": "Monasticism history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-13",
        "name": "Monasticism history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-14",
        "name": "Monasticism history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-15",
        "name": "Monasticism history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-16",
        "name": "Monasticism history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-17",
        "name": "Monasticism history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-18",
        "name": "Monasticism history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-19",
        "name": "Monasticism history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-20",
        "name": "Monasticism history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-21",
        "name": "Monasticism history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-22",
        "name": "Monasticism history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-23",
        "name": "Monasticism history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "monasticism-history-entry-24",
        "name": "Monasticism history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Monasticism history.",
        "description": "A supporting encyclopedia entry in the Monasticism history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "monasticism-history",
        "monasticism-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "monasticism-history",
        "monasticism-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "monasticism-history",
        "monasticism-history-places",
        "contains",
        "Monasticism history places is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-events",
        "contains",
        "Monasticism history events is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-objects",
        "contains",
        "Monasticism history objects & artifacts is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-factions",
        "contains",
        "Monasticism history factions & groups is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-concepts",
        "contains",
        "Monasticism history concepts is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-eras",
        "contains",
        "Monasticism history eras is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-works",
        "contains",
        "Monasticism history works & media is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-symbols",
        "contains",
        "Monasticism history symbols is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-controversies",
        "contains",
        "Monasticism history controversies is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-sources",
        "contains",
        "Monasticism history sources is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-geography",
        "contains",
        "Monasticism history geography is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-legacy",
        "contains",
        "Monasticism history legacy is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-practices",
        "contains",
        "Monasticism history practices is a primary trailhead under Monasticism history.",
        0.88,
        0.82
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-1",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-2",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-3",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-4",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-5",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-6",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-7",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-8",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-9",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-10",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-11",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-12",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-13",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-14",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-15",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-16",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-17",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-18",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-19",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-20",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-21",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-22",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-23",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ],
    [
        "monasticism-history",
        "monasticism-history-entry-24",
        "contains",
        "Supporting entry under Monasticism history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
