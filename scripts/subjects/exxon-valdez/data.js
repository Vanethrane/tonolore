/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "exxon-valdez",
        "name": "Exxon Valdez oil spill",
        "type": "topic",
        "short_description": "Alaska crude, wildlife damage, and the tanker accident that remade environmental law lore.",
        "description": "Alaska crude, wildlife damage, and the tanker accident that remade environmental law lore. This Ton-o-Lore subject maps people, places, events, and ideas tied to Exxon Valdez oil spill so readers can follow long-tail connections across disasters & catastrophes."
    },
    {
        "slug": "exxon-valdez-figures",
        "name": "Exxon Valdez oil spill figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Exxon Valdez oil spill.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Exxon Valdez oil spill."
    },
    {
        "slug": "exxon-valdez-world",
        "name": "Exxon Valdez oil spill world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Exxon Valdez oil spill.",
        "description": "Geography, institutions, and periodization that give Exxon Valdez oil spill its encyclopedia shape."
    },
    {
        "slug": "exxon-valdez-places",
        "name": "Exxon Valdez oil spill places",
        "type": "place",
        "short_description": "Locations and geographies that frame Exxon Valdez oil spill.",
        "description": "Places, regions, and built sites that give Exxon Valdez oil spill its map — where events and figures concentrate."
    },
    {
        "slug": "exxon-valdez-events",
        "name": "Exxon Valdez oil spill events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Exxon Valdez oil spill.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Exxon Valdez oil spill timeline."
    },
    {
        "slug": "exxon-valdez-objects",
        "name": "Exxon Valdez oil spill objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Exxon Valdez oil spill.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Exxon Valdez oil spill."
    },
    {
        "slug": "exxon-valdez-factions",
        "name": "Exxon Valdez oil spill factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Exxon Valdez oil spill.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Exxon Valdez oil spill."
    },
    {
        "slug": "exxon-valdez-concepts",
        "name": "Exxon Valdez oil spill concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Exxon Valdez oil spill.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Exxon Valdez oil spill readable as a lore graph."
    },
    {
        "slug": "exxon-valdez-eras",
        "name": "Exxon Valdez oil spill eras",
        "type": "event",
        "short_description": "Periodization for Exxon Valdez oil spill.",
        "description": "Named eras and phases that help readers track how Exxon Valdez oil spill changes across time."
    },
    {
        "slug": "exxon-valdez-works",
        "name": "Exxon Valdez oil spill works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Exxon Valdez oil spill.",
        "description": "Primary works and adaptations through which most audiences encounter Exxon Valdez oil spill."
    },
    {
        "slug": "exxon-valdez-symbols",
        "name": "Exxon Valdez oil spill symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Exxon Valdez oil spill.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Exxon Valdez oil spill."
    },
    {
        "slug": "exxon-valdez-controversies",
        "name": "Exxon Valdez oil spill controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Exxon Valdez oil spill.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Exxon Valdez oil spill argumentative."
    },
    {
        "slug": "exxon-valdez-sources",
        "name": "Exxon Valdez oil spill sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Exxon Valdez oil spill.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Exxon Valdez oil spill."
    },
    {
        "slug": "exxon-valdez-geography",
        "name": "Exxon Valdez oil spill geography",
        "type": "place",
        "short_description": "Broader geographic framing for Exxon Valdez oil spill.",
        "description": "Regions, routes, and spatial systems that situate Exxon Valdez oil spill beyond single named places."
    },
    {
        "slug": "exxon-valdez-legacy",
        "name": "Exxon Valdez oil spill legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Exxon Valdez oil spill.",
        "description": "How Exxon Valdez oil spill continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "exxon-valdez-practices",
        "name": "Exxon Valdez oil spill practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Exxon Valdez oil spill.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Exxon Valdez oil spill."
    },
    {
        "slug": "exxon-valdez-entry-1",
        "name": "Exxon Valdez oil spill entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-2",
        "name": "Exxon Valdez oil spill entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-3",
        "name": "Exxon Valdez oil spill entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-4",
        "name": "Exxon Valdez oil spill entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-5",
        "name": "Exxon Valdez oil spill entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-6",
        "name": "Exxon Valdez oil spill entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-7",
        "name": "Exxon Valdez oil spill entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-8",
        "name": "Exxon Valdez oil spill entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-9",
        "name": "Exxon Valdez oil spill entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-10",
        "name": "Exxon Valdez oil spill entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-11",
        "name": "Exxon Valdez oil spill entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-12",
        "name": "Exxon Valdez oil spill entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-13",
        "name": "Exxon Valdez oil spill entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-14",
        "name": "Exxon Valdez oil spill entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-15",
        "name": "Exxon Valdez oil spill entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-16",
        "name": "Exxon Valdez oil spill entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-17",
        "name": "Exxon Valdez oil spill entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-18",
        "name": "Exxon Valdez oil spill entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-19",
        "name": "Exxon Valdez oil spill entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-20",
        "name": "Exxon Valdez oil spill entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-21",
        "name": "Exxon Valdez oil spill entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-22",
        "name": "Exxon Valdez oil spill entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-23",
        "name": "Exxon Valdez oil spill entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "exxon-valdez-entry-24",
        "name": "Exxon Valdez oil spill entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Exxon Valdez oil spill.",
        "description": "A supporting encyclopedia entry in the Exxon Valdez oil spill subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "exxon-valdez",
        "exxon-valdez-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "exxon-valdez",
        "exxon-valdez-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "exxon-valdez",
        "exxon-valdez-places",
        "contains",
        "Exxon Valdez oil spill places is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-events",
        "contains",
        "Exxon Valdez oil spill events is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-objects",
        "contains",
        "Exxon Valdez oil spill objects & artifacts is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-factions",
        "contains",
        "Exxon Valdez oil spill factions & groups is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-concepts",
        "contains",
        "Exxon Valdez oil spill concepts is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-eras",
        "contains",
        "Exxon Valdez oil spill eras is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-works",
        "contains",
        "Exxon Valdez oil spill works & media is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-symbols",
        "contains",
        "Exxon Valdez oil spill symbols is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-controversies",
        "contains",
        "Exxon Valdez oil spill controversies is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-sources",
        "contains",
        "Exxon Valdez oil spill sources is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-geography",
        "contains",
        "Exxon Valdez oil spill geography is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-legacy",
        "contains",
        "Exxon Valdez oil spill legacy is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-practices",
        "contains",
        "Exxon Valdez oil spill practices is a primary trailhead under Exxon Valdez oil spill.",
        0.88,
        0.82
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-1",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-2",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-3",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-4",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-5",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-6",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-7",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-8",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-9",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-10",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-11",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-12",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-13",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-14",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-15",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-16",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-17",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-18",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-19",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-20",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-21",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-22",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-23",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ],
    [
        "exxon-valdez",
        "exxon-valdez-entry-24",
        "contains",
        "Supporting entry under Exxon Valdez oil spill.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
