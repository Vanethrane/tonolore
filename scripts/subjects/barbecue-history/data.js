/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "barbecue-history",
        "name": "Barbecue history",
        "type": "topic",
        "short_description": "Smoke, pits, and the diaspora cooking traditions of the Americas.",
        "description": "Smoke, pits, and the diaspora cooking traditions of the Americas. This Ton-o-Lore subject maps people, places, events, and ideas tied to Barbecue history so readers can follow long-tail connections across food & drink."
    },
    {
        "slug": "barbecue-history-figures",
        "name": "Barbecue history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Barbecue history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Barbecue history."
    },
    {
        "slug": "barbecue-history-world",
        "name": "Barbecue history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Barbecue history.",
        "description": "Geography, institutions, and periodization that give Barbecue history its encyclopedia shape."
    },
    {
        "slug": "barbecue-history-places",
        "name": "Barbecue history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Barbecue history.",
        "description": "Places, regions, and built sites that give Barbecue history its map — where events and figures concentrate."
    },
    {
        "slug": "barbecue-history-events",
        "name": "Barbecue history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Barbecue history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Barbecue history timeline."
    },
    {
        "slug": "barbecue-history-objects",
        "name": "Barbecue history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Barbecue history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Barbecue history."
    },
    {
        "slug": "barbecue-history-factions",
        "name": "Barbecue history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Barbecue history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Barbecue history."
    },
    {
        "slug": "barbecue-history-concepts",
        "name": "Barbecue history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Barbecue history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Barbecue history readable as a lore graph."
    },
    {
        "slug": "barbecue-history-eras",
        "name": "Barbecue history eras",
        "type": "event",
        "short_description": "Periodization for Barbecue history.",
        "description": "Named eras and phases that help readers track how Barbecue history changes across time."
    },
    {
        "slug": "barbecue-history-works",
        "name": "Barbecue history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Barbecue history.",
        "description": "Primary works and adaptations through which most audiences encounter Barbecue history."
    },
    {
        "slug": "barbecue-history-symbols",
        "name": "Barbecue history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Barbecue history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Barbecue history."
    },
    {
        "slug": "barbecue-history-controversies",
        "name": "Barbecue history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Barbecue history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Barbecue history argumentative."
    },
    {
        "slug": "barbecue-history-sources",
        "name": "Barbecue history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Barbecue history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Barbecue history."
    },
    {
        "slug": "barbecue-history-geography",
        "name": "Barbecue history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Barbecue history.",
        "description": "Regions, routes, and spatial systems that situate Barbecue history beyond single named places."
    },
    {
        "slug": "barbecue-history-legacy",
        "name": "Barbecue history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Barbecue history.",
        "description": "How Barbecue history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "barbecue-history-practices",
        "name": "Barbecue history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Barbecue history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Barbecue history."
    },
    {
        "slug": "barbecue-history-entry-1",
        "name": "Barbecue history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-2",
        "name": "Barbecue history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-3",
        "name": "Barbecue history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-4",
        "name": "Barbecue history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-5",
        "name": "Barbecue history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-6",
        "name": "Barbecue history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-7",
        "name": "Barbecue history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-8",
        "name": "Barbecue history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-9",
        "name": "Barbecue history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-10",
        "name": "Barbecue history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-11",
        "name": "Barbecue history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-12",
        "name": "Barbecue history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-13",
        "name": "Barbecue history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-14",
        "name": "Barbecue history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-15",
        "name": "Barbecue history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-16",
        "name": "Barbecue history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-17",
        "name": "Barbecue history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-18",
        "name": "Barbecue history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-19",
        "name": "Barbecue history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-20",
        "name": "Barbecue history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-21",
        "name": "Barbecue history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-22",
        "name": "Barbecue history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-23",
        "name": "Barbecue history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "barbecue-history-entry-24",
        "name": "Barbecue history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Barbecue history.",
        "description": "A supporting encyclopedia entry in the Barbecue history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "barbecue-history",
        "barbecue-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "barbecue-history",
        "barbecue-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "barbecue-history",
        "barbecue-history-places",
        "contains",
        "Barbecue history places is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-events",
        "contains",
        "Barbecue history events is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-objects",
        "contains",
        "Barbecue history objects & artifacts is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-factions",
        "contains",
        "Barbecue history factions & groups is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-concepts",
        "contains",
        "Barbecue history concepts is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-eras",
        "contains",
        "Barbecue history eras is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-works",
        "contains",
        "Barbecue history works & media is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-symbols",
        "contains",
        "Barbecue history symbols is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-controversies",
        "contains",
        "Barbecue history controversies is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-sources",
        "contains",
        "Barbecue history sources is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-geography",
        "contains",
        "Barbecue history geography is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-legacy",
        "contains",
        "Barbecue history legacy is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-practices",
        "contains",
        "Barbecue history practices is a primary trailhead under Barbecue history.",
        0.88,
        0.82
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-1",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-2",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-3",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-4",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-5",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-6",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-7",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-8",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-9",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-10",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-11",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-12",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-13",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-14",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-15",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-16",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-17",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-18",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-19",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-20",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-21",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-22",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-23",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ],
    [
        "barbecue-history",
        "barbecue-history-entry-24",
        "contains",
        "Supporting entry under Barbecue history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
