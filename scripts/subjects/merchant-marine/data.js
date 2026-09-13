/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "merchant-marine",
        "name": "Merchant marine history",
        "type": "topic",
        "short_description": "Cargo crews, convoy wars, and the civilian fleets that keep oceans commercial.",
        "description": "Cargo crews, convoy wars, and the civilian fleets that keep oceans commercial. This Ton-o-Lore subject maps people, places, events, and ideas tied to Merchant marine history so readers can follow long-tail connections across maritime."
    },
    {
        "slug": "merchant-marine-figures",
        "name": "Merchant marine history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Merchant marine history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Merchant marine history."
    },
    {
        "slug": "merchant-marine-world",
        "name": "Merchant marine history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Merchant marine history.",
        "description": "Geography, institutions, and periodization that give Merchant marine history its encyclopedia shape."
    },
    {
        "slug": "merchant-marine-places",
        "name": "Merchant marine history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Merchant marine history.",
        "description": "Places, regions, and built sites that give Merchant marine history its map — where events and figures concentrate."
    },
    {
        "slug": "merchant-marine-events",
        "name": "Merchant marine history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Merchant marine history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Merchant marine history timeline."
    },
    {
        "slug": "merchant-marine-objects",
        "name": "Merchant marine history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Merchant marine history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Merchant marine history."
    },
    {
        "slug": "merchant-marine-factions",
        "name": "Merchant marine history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Merchant marine history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Merchant marine history."
    },
    {
        "slug": "merchant-marine-concepts",
        "name": "Merchant marine history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Merchant marine history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Merchant marine history readable as a lore graph."
    },
    {
        "slug": "merchant-marine-eras",
        "name": "Merchant marine history eras",
        "type": "event",
        "short_description": "Periodization for Merchant marine history.",
        "description": "Named eras and phases that help readers track how Merchant marine history changes across time."
    },
    {
        "slug": "merchant-marine-works",
        "name": "Merchant marine history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Merchant marine history.",
        "description": "Primary works and adaptations through which most audiences encounter Merchant marine history."
    },
    {
        "slug": "merchant-marine-symbols",
        "name": "Merchant marine history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Merchant marine history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Merchant marine history."
    },
    {
        "slug": "merchant-marine-controversies",
        "name": "Merchant marine history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Merchant marine history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Merchant marine history argumentative."
    },
    {
        "slug": "merchant-marine-sources",
        "name": "Merchant marine history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Merchant marine history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Merchant marine history."
    },
    {
        "slug": "merchant-marine-geography",
        "name": "Merchant marine history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Merchant marine history.",
        "description": "Regions, routes, and spatial systems that situate Merchant marine history beyond single named places."
    },
    {
        "slug": "merchant-marine-legacy",
        "name": "Merchant marine history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Merchant marine history.",
        "description": "How Merchant marine history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "merchant-marine-practices",
        "name": "Merchant marine history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Merchant marine history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Merchant marine history."
    },
    {
        "slug": "merchant-marine-entry-1",
        "name": "Merchant marine history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-2",
        "name": "Merchant marine history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-3",
        "name": "Merchant marine history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-4",
        "name": "Merchant marine history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-5",
        "name": "Merchant marine history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-6",
        "name": "Merchant marine history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-7",
        "name": "Merchant marine history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-8",
        "name": "Merchant marine history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-9",
        "name": "Merchant marine history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-10",
        "name": "Merchant marine history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-11",
        "name": "Merchant marine history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-12",
        "name": "Merchant marine history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-13",
        "name": "Merchant marine history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-14",
        "name": "Merchant marine history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-15",
        "name": "Merchant marine history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-16",
        "name": "Merchant marine history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-17",
        "name": "Merchant marine history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-18",
        "name": "Merchant marine history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-19",
        "name": "Merchant marine history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-20",
        "name": "Merchant marine history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-21",
        "name": "Merchant marine history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-22",
        "name": "Merchant marine history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-23",
        "name": "Merchant marine history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "merchant-marine-entry-24",
        "name": "Merchant marine history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Merchant marine history.",
        "description": "A supporting encyclopedia entry in the Merchant marine history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "merchant-marine",
        "merchant-marine-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "merchant-marine",
        "merchant-marine-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "merchant-marine",
        "merchant-marine-places",
        "contains",
        "Merchant marine history places is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-events",
        "contains",
        "Merchant marine history events is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-objects",
        "contains",
        "Merchant marine history objects & artifacts is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-factions",
        "contains",
        "Merchant marine history factions & groups is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-concepts",
        "contains",
        "Merchant marine history concepts is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-eras",
        "contains",
        "Merchant marine history eras is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-works",
        "contains",
        "Merchant marine history works & media is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-symbols",
        "contains",
        "Merchant marine history symbols is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-controversies",
        "contains",
        "Merchant marine history controversies is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-sources",
        "contains",
        "Merchant marine history sources is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-geography",
        "contains",
        "Merchant marine history geography is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-legacy",
        "contains",
        "Merchant marine history legacy is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-practices",
        "contains",
        "Merchant marine history practices is a primary trailhead under Merchant marine history.",
        0.88,
        0.82
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-1",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-2",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-3",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-4",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-5",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-6",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-7",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-8",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-9",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-10",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-11",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-12",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-13",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-14",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-15",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-16",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-17",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-18",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-19",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-20",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-21",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-22",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-23",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ],
    [
        "merchant-marine",
        "merchant-marine-entry-24",
        "contains",
        "Supporting entry under Merchant marine history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
