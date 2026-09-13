/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "wrestlemania-history",
        "name": "WrestleMania history",
        "type": "topic",
        "short_description": "Card myths, celebrity crossovers, and the annual event that became wrestling’s Super Bowl.",
        "description": "Card myths, celebrity crossovers, and the annual event that became wrestling’s Super Bowl. This Ton-o-Lore subject maps people, places, events, and ideas tied to WrestleMania history so readers can follow long-tail connections across pro wrestling."
    },
    {
        "slug": "wrestlemania-history-figures",
        "name": "WrestleMania history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to WrestleMania history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring WrestleMania history."
    },
    {
        "slug": "wrestlemania-history-world",
        "name": "WrestleMania history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame WrestleMania history.",
        "description": "Geography, institutions, and periodization that give WrestleMania history its encyclopedia shape."
    },
    {
        "slug": "wrestlemania-history-places",
        "name": "WrestleMania history places",
        "type": "place",
        "short_description": "Locations and geographies that frame WrestleMania history.",
        "description": "Places, regions, and built sites that give WrestleMania history its map — where events and figures concentrate."
    },
    {
        "slug": "wrestlemania-history-events",
        "name": "WrestleMania history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in WrestleMania history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the WrestleMania history timeline."
    },
    {
        "slug": "wrestlemania-history-objects",
        "name": "WrestleMania history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to WrestleMania history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through WrestleMania history."
    },
    {
        "slug": "wrestlemania-history-factions",
        "name": "WrestleMania history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside WrestleMania history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in WrestleMania history."
    },
    {
        "slug": "wrestlemania-history-concepts",
        "name": "WrestleMania history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize WrestleMania history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make WrestleMania history readable as a lore graph."
    },
    {
        "slug": "wrestlemania-history-eras",
        "name": "WrestleMania history eras",
        "type": "event",
        "short_description": "Periodization for WrestleMania history.",
        "description": "Named eras and phases that help readers track how WrestleMania history changes across time."
    },
    {
        "slug": "wrestlemania-history-works",
        "name": "WrestleMania history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry WrestleMania history.",
        "description": "Primary works and adaptations through which most audiences encounter WrestleMania history."
    },
    {
        "slug": "wrestlemania-history-symbols",
        "name": "WrestleMania history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with WrestleMania history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside WrestleMania history."
    },
    {
        "slug": "wrestlemania-history-controversies",
        "name": "WrestleMania history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in WrestleMania history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep WrestleMania history argumentative."
    },
    {
        "slug": "wrestlemania-history-sources",
        "name": "WrestleMania history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into WrestleMania history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify WrestleMania history."
    },
    {
        "slug": "wrestlemania-history-geography",
        "name": "WrestleMania history geography",
        "type": "place",
        "short_description": "Broader geographic framing for WrestleMania history.",
        "description": "Regions, routes, and spatial systems that situate WrestleMania history beyond single named places."
    },
    {
        "slug": "wrestlemania-history-legacy",
        "name": "WrestleMania history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of WrestleMania history.",
        "description": "How WrestleMania history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "wrestlemania-history-practices",
        "name": "WrestleMania history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in WrestleMania history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in WrestleMania history."
    },
    {
        "slug": "wrestlemania-history-entry-1",
        "name": "WrestleMania history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-2",
        "name": "WrestleMania history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-3",
        "name": "WrestleMania history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-4",
        "name": "WrestleMania history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-5",
        "name": "WrestleMania history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-6",
        "name": "WrestleMania history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-7",
        "name": "WrestleMania history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-8",
        "name": "WrestleMania history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-9",
        "name": "WrestleMania history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-10",
        "name": "WrestleMania history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-11",
        "name": "WrestleMania history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-12",
        "name": "WrestleMania history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-13",
        "name": "WrestleMania history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-14",
        "name": "WrestleMania history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-15",
        "name": "WrestleMania history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-16",
        "name": "WrestleMania history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-17",
        "name": "WrestleMania history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-18",
        "name": "WrestleMania history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-19",
        "name": "WrestleMania history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-20",
        "name": "WrestleMania history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-21",
        "name": "WrestleMania history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-22",
        "name": "WrestleMania history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-23",
        "name": "WrestleMania history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "wrestlemania-history-entry-24",
        "name": "WrestleMania history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside WrestleMania history.",
        "description": "A supporting encyclopedia entry in the WrestleMania history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "wrestlemania-history",
        "wrestlemania-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-places",
        "contains",
        "WrestleMania history places is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-events",
        "contains",
        "WrestleMania history events is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-objects",
        "contains",
        "WrestleMania history objects & artifacts is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-factions",
        "contains",
        "WrestleMania history factions & groups is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-concepts",
        "contains",
        "WrestleMania history concepts is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-eras",
        "contains",
        "WrestleMania history eras is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-works",
        "contains",
        "WrestleMania history works & media is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-symbols",
        "contains",
        "WrestleMania history symbols is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-controversies",
        "contains",
        "WrestleMania history controversies is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-sources",
        "contains",
        "WrestleMania history sources is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-geography",
        "contains",
        "WrestleMania history geography is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-legacy",
        "contains",
        "WrestleMania history legacy is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-practices",
        "contains",
        "WrestleMania history practices is a primary trailhead under WrestleMania history.",
        0.88,
        0.82
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-1",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-2",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-3",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-4",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-5",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-6",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-7",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-8",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-9",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-10",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-11",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-12",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-13",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-14",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-15",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-16",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-17",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-18",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-19",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-20",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-21",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-22",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-23",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ],
    [
        "wrestlemania-history",
        "wrestlemania-history-entry-24",
        "contains",
        "Supporting entry under WrestleMania history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
