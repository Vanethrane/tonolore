/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "world-war-i-military",
        "name": "World War I military history",
        "type": "topic",
        "short_description": "Trenches, new weapons, and the industrial slaughter that invented modern warfare’s grammar.",
        "description": "Trenches, new weapons, and the industrial slaughter that invented modern warfare’s grammar. This Ton-o-Lore subject maps people, places, events, and ideas tied to World War I military history so readers can follow long-tail connections across military & fortresses."
    },
    {
        "slug": "world-war-i-military-figures",
        "name": "World War I military history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to World War I military history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring World War I military history."
    },
    {
        "slug": "world-war-i-military-world",
        "name": "World War I military history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame World War I military history.",
        "description": "Geography, institutions, and periodization that give World War I military history its encyclopedia shape."
    },
    {
        "slug": "world-war-i-military-places",
        "name": "World War I military history places",
        "type": "place",
        "short_description": "Locations and geographies that frame World War I military history.",
        "description": "Places, regions, and built sites that give World War I military history its map — where events and figures concentrate."
    },
    {
        "slug": "world-war-i-military-events",
        "name": "World War I military history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in World War I military history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the World War I military history timeline."
    },
    {
        "slug": "world-war-i-military-objects",
        "name": "World War I military history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to World War I military history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through World War I military history."
    },
    {
        "slug": "world-war-i-military-factions",
        "name": "World War I military history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside World War I military history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in World War I military history."
    },
    {
        "slug": "world-war-i-military-concepts",
        "name": "World War I military history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize World War I military history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make World War I military history readable as a lore graph."
    },
    {
        "slug": "world-war-i-military-eras",
        "name": "World War I military history eras",
        "type": "event",
        "short_description": "Periodization for World War I military history.",
        "description": "Named eras and phases that help readers track how World War I military history changes across time."
    },
    {
        "slug": "world-war-i-military-works",
        "name": "World War I military history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry World War I military history.",
        "description": "Primary works and adaptations through which most audiences encounter World War I military history."
    },
    {
        "slug": "world-war-i-military-symbols",
        "name": "World War I military history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with World War I military history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside World War I military history."
    },
    {
        "slug": "world-war-i-military-controversies",
        "name": "World War I military history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in World War I military history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep World War I military history argumentative."
    },
    {
        "slug": "world-war-i-military-sources",
        "name": "World War I military history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into World War I military history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify World War I military history."
    },
    {
        "slug": "world-war-i-military-geography",
        "name": "World War I military history geography",
        "type": "place",
        "short_description": "Broader geographic framing for World War I military history.",
        "description": "Regions, routes, and spatial systems that situate World War I military history beyond single named places."
    },
    {
        "slug": "world-war-i-military-legacy",
        "name": "World War I military history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of World War I military history.",
        "description": "How World War I military history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "world-war-i-military-practices",
        "name": "World War I military history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in World War I military history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in World War I military history."
    },
    {
        "slug": "world-war-i-military-entry-1",
        "name": "World War I military history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-2",
        "name": "World War I military history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-3",
        "name": "World War I military history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-4",
        "name": "World War I military history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-5",
        "name": "World War I military history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-6",
        "name": "World War I military history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-7",
        "name": "World War I military history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-8",
        "name": "World War I military history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-9",
        "name": "World War I military history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-10",
        "name": "World War I military history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-11",
        "name": "World War I military history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-12",
        "name": "World War I military history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-13",
        "name": "World War I military history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-14",
        "name": "World War I military history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-15",
        "name": "World War I military history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-16",
        "name": "World War I military history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-17",
        "name": "World War I military history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-18",
        "name": "World War I military history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-19",
        "name": "World War I military history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-20",
        "name": "World War I military history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-21",
        "name": "World War I military history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-22",
        "name": "World War I military history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-23",
        "name": "World War I military history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "world-war-i-military-entry-24",
        "name": "World War I military history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside World War I military history.",
        "description": "A supporting encyclopedia entry in the World War I military history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "world-war-i-military",
        "world-war-i-military-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "world-war-i-military",
        "world-war-i-military-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "world-war-i-military",
        "world-war-i-military-places",
        "contains",
        "World War I military history places is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-events",
        "contains",
        "World War I military history events is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-objects",
        "contains",
        "World War I military history objects & artifacts is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-factions",
        "contains",
        "World War I military history factions & groups is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-concepts",
        "contains",
        "World War I military history concepts is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-eras",
        "contains",
        "World War I military history eras is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-works",
        "contains",
        "World War I military history works & media is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-symbols",
        "contains",
        "World War I military history symbols is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-controversies",
        "contains",
        "World War I military history controversies is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-sources",
        "contains",
        "World War I military history sources is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-geography",
        "contains",
        "World War I military history geography is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-legacy",
        "contains",
        "World War I military history legacy is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-practices",
        "contains",
        "World War I military history practices is a primary trailhead under World War I military history.",
        0.88,
        0.82
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-1",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-2",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-3",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-4",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-5",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-6",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-7",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-8",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-9",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-10",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-11",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-12",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-13",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-14",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-15",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-16",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-17",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-18",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-19",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-20",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-21",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-22",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-23",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ],
    [
        "world-war-i-military",
        "world-war-i-military-entry-24",
        "contains",
        "Supporting entry under World War I military history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
