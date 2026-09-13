/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "fishing-industry-history",
        "name": "Fishing industry history",
        "type": "topic",
        "short_description": "Fleets, grounds, and the working maritime economies that fed nations.",
        "description": "Fleets, grounds, and the working maritime economies that fed nations. This Ton-o-Lore subject maps people, places, events, and ideas tied to Fishing industry history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "fishing-industry-history-figures",
        "name": "Fishing industry history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Fishing industry history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Fishing industry history."
    },
    {
        "slug": "fishing-industry-history-world",
        "name": "Fishing industry history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Fishing industry history.",
        "description": "Geography, institutions, and periodization that give Fishing industry history its encyclopedia shape."
    },
    {
        "slug": "fishing-industry-history-places",
        "name": "Fishing industry history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Fishing industry history.",
        "description": "Places, regions, and built sites that give Fishing industry history its map — where events and figures concentrate."
    },
    {
        "slug": "fishing-industry-history-events",
        "name": "Fishing industry history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Fishing industry history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Fishing industry history timeline."
    },
    {
        "slug": "fishing-industry-history-objects",
        "name": "Fishing industry history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Fishing industry history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Fishing industry history."
    },
    {
        "slug": "fishing-industry-history-factions",
        "name": "Fishing industry history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Fishing industry history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Fishing industry history."
    },
    {
        "slug": "fishing-industry-history-concepts",
        "name": "Fishing industry history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Fishing industry history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Fishing industry history readable as a lore graph."
    },
    {
        "slug": "fishing-industry-history-eras",
        "name": "Fishing industry history eras",
        "type": "event",
        "short_description": "Periodization for Fishing industry history.",
        "description": "Named eras and phases that help readers track how Fishing industry history changes across time."
    },
    {
        "slug": "fishing-industry-history-works",
        "name": "Fishing industry history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Fishing industry history.",
        "description": "Primary works and adaptations through which most audiences encounter Fishing industry history."
    },
    {
        "slug": "fishing-industry-history-symbols",
        "name": "Fishing industry history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Fishing industry history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Fishing industry history."
    },
    {
        "slug": "fishing-industry-history-controversies",
        "name": "Fishing industry history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Fishing industry history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Fishing industry history argumentative."
    },
    {
        "slug": "fishing-industry-history-sources",
        "name": "Fishing industry history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Fishing industry history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Fishing industry history."
    },
    {
        "slug": "fishing-industry-history-geography",
        "name": "Fishing industry history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Fishing industry history.",
        "description": "Regions, routes, and spatial systems that situate Fishing industry history beyond single named places."
    },
    {
        "slug": "fishing-industry-history-legacy",
        "name": "Fishing industry history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Fishing industry history.",
        "description": "How Fishing industry history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "fishing-industry-history-practices",
        "name": "Fishing industry history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Fishing industry history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Fishing industry history."
    },
    {
        "slug": "fishing-industry-history-entry-1",
        "name": "Fishing industry history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-2",
        "name": "Fishing industry history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-3",
        "name": "Fishing industry history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-4",
        "name": "Fishing industry history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-5",
        "name": "Fishing industry history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-6",
        "name": "Fishing industry history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-7",
        "name": "Fishing industry history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-8",
        "name": "Fishing industry history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-9",
        "name": "Fishing industry history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-10",
        "name": "Fishing industry history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-11",
        "name": "Fishing industry history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-12",
        "name": "Fishing industry history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-13",
        "name": "Fishing industry history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-14",
        "name": "Fishing industry history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-15",
        "name": "Fishing industry history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-16",
        "name": "Fishing industry history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-17",
        "name": "Fishing industry history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-18",
        "name": "Fishing industry history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-19",
        "name": "Fishing industry history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-20",
        "name": "Fishing industry history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-21",
        "name": "Fishing industry history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-22",
        "name": "Fishing industry history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-23",
        "name": "Fishing industry history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "fishing-industry-history-entry-24",
        "name": "Fishing industry history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Fishing industry history.",
        "description": "A supporting encyclopedia entry in the Fishing industry history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "fishing-industry-history",
        "fishing-industry-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-places",
        "contains",
        "Fishing industry history places is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-events",
        "contains",
        "Fishing industry history events is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-objects",
        "contains",
        "Fishing industry history objects & artifacts is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-factions",
        "contains",
        "Fishing industry history factions & groups is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-concepts",
        "contains",
        "Fishing industry history concepts is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-eras",
        "contains",
        "Fishing industry history eras is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-works",
        "contains",
        "Fishing industry history works & media is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-symbols",
        "contains",
        "Fishing industry history symbols is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-controversies",
        "contains",
        "Fishing industry history controversies is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-sources",
        "contains",
        "Fishing industry history sources is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-geography",
        "contains",
        "Fishing industry history geography is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-legacy",
        "contains",
        "Fishing industry history legacy is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-practices",
        "contains",
        "Fishing industry history practices is a primary trailhead under Fishing industry history.",
        0.88,
        0.82
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-1",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-2",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-3",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-4",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-5",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-6",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-7",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-8",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-9",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-10",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-11",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-12",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-13",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-14",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-15",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-16",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-17",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-18",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-19",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-20",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-21",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-22",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-23",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ],
    [
        "fishing-industry-history",
        "fishing-industry-history-entry-24",
        "contains",
        "Supporting entry under Fishing industry history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
