/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "traveller-rpg",
        "name": "Traveller",
        "type": "topic",
        "short_description": "Character generation mishaps, jump drives, and the classic science-fiction RPG of traders and wars.",
        "description": "Character generation mishaps, jump drives, and the classic science-fiction RPG of traders and wars. This Ton-o-Lore subject maps people, places, events, and ideas tied to Traveller so readers can follow long-tail connections across tabletop."
    },
    {
        "slug": "traveller-rpg-figures",
        "name": "Traveller figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Traveller.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Traveller."
    },
    {
        "slug": "traveller-rpg-world",
        "name": "Traveller world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Traveller.",
        "description": "Geography, institutions, and periodization that give Traveller its encyclopedia shape."
    },
    {
        "slug": "traveller-rpg-places",
        "name": "Traveller places",
        "type": "place",
        "short_description": "Locations and geographies that frame Traveller.",
        "description": "Places, regions, and built sites that give Traveller its map — where events and figures concentrate."
    },
    {
        "slug": "traveller-rpg-events",
        "name": "Traveller events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Traveller.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Traveller timeline."
    },
    {
        "slug": "traveller-rpg-objects",
        "name": "Traveller objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Traveller.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Traveller."
    },
    {
        "slug": "traveller-rpg-factions",
        "name": "Traveller factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Traveller.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Traveller."
    },
    {
        "slug": "traveller-rpg-concepts",
        "name": "Traveller concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Traveller.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Traveller readable as a lore graph."
    },
    {
        "slug": "traveller-rpg-eras",
        "name": "Traveller eras",
        "type": "event",
        "short_description": "Periodization for Traveller.",
        "description": "Named eras and phases that help readers track how Traveller changes across time."
    },
    {
        "slug": "traveller-rpg-works",
        "name": "Traveller works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Traveller.",
        "description": "Primary works and adaptations through which most audiences encounter Traveller."
    },
    {
        "slug": "traveller-rpg-symbols",
        "name": "Traveller symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Traveller.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Traveller."
    },
    {
        "slug": "traveller-rpg-controversies",
        "name": "Traveller controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Traveller.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Traveller argumentative."
    },
    {
        "slug": "traveller-rpg-sources",
        "name": "Traveller sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Traveller.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Traveller."
    },
    {
        "slug": "traveller-rpg-geography",
        "name": "Traveller geography",
        "type": "place",
        "short_description": "Broader geographic framing for Traveller.",
        "description": "Regions, routes, and spatial systems that situate Traveller beyond single named places."
    },
    {
        "slug": "traveller-rpg-legacy",
        "name": "Traveller legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Traveller.",
        "description": "How Traveller continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "traveller-rpg-practices",
        "name": "Traveller practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Traveller.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Traveller."
    },
    {
        "slug": "traveller-rpg-entry-1",
        "name": "Traveller entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-2",
        "name": "Traveller entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-3",
        "name": "Traveller entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-4",
        "name": "Traveller entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-5",
        "name": "Traveller entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-6",
        "name": "Traveller entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-7",
        "name": "Traveller entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-8",
        "name": "Traveller entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-9",
        "name": "Traveller entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-10",
        "name": "Traveller entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-11",
        "name": "Traveller entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-12",
        "name": "Traveller entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-13",
        "name": "Traveller entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-14",
        "name": "Traveller entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-15",
        "name": "Traveller entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-16",
        "name": "Traveller entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-17",
        "name": "Traveller entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-18",
        "name": "Traveller entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-19",
        "name": "Traveller entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-20",
        "name": "Traveller entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-21",
        "name": "Traveller entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-22",
        "name": "Traveller entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-23",
        "name": "Traveller entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "traveller-rpg-entry-24",
        "name": "Traveller entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Traveller.",
        "description": "A supporting encyclopedia entry in the Traveller subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "traveller-rpg",
        "traveller-rpg-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "traveller-rpg",
        "traveller-rpg-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "traveller-rpg",
        "traveller-rpg-places",
        "contains",
        "Traveller places is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-events",
        "contains",
        "Traveller events is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-objects",
        "contains",
        "Traveller objects & artifacts is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-factions",
        "contains",
        "Traveller factions & groups is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-concepts",
        "contains",
        "Traveller concepts is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-eras",
        "contains",
        "Traveller eras is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-works",
        "contains",
        "Traveller works & media is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-symbols",
        "contains",
        "Traveller symbols is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-controversies",
        "contains",
        "Traveller controversies is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-sources",
        "contains",
        "Traveller sources is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-geography",
        "contains",
        "Traveller geography is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-legacy",
        "contains",
        "Traveller legacy is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-practices",
        "contains",
        "Traveller practices is a primary trailhead under Traveller.",
        0.88,
        0.82
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-1",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-2",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-3",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-4",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-5",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-6",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-7",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-8",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-9",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-10",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-11",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-12",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-13",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-14",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-15",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-16",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-17",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-18",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-19",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-20",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-21",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-22",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-23",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ],
    [
        "traveller-rpg",
        "traveller-rpg-entry-24",
        "contains",
        "Supporting entry under Traveller.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
