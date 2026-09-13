/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "streetcar-history",
        "name": "Streetcar & tram history",
        "type": "topic",
        "short_description": "Electric rails, urban sprawl, and the transit that shaped early twentieth-century cities.",
        "description": "Electric rails, urban sprawl, and the transit that shaped early twentieth-century cities. This Ton-o-Lore subject maps people, places, events, and ideas tied to Streetcar & tram history so readers can follow long-tail connections across transport & machines."
    },
    {
        "slug": "streetcar-history-figures",
        "name": "Streetcar & tram history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Streetcar & tram history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Streetcar & tram history."
    },
    {
        "slug": "streetcar-history-world",
        "name": "Streetcar & tram history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Streetcar & tram history.",
        "description": "Geography, institutions, and periodization that give Streetcar & tram history its encyclopedia shape."
    },
    {
        "slug": "streetcar-history-places",
        "name": "Streetcar & tram history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Streetcar & tram history.",
        "description": "Places, regions, and built sites that give Streetcar & tram history its map — where events and figures concentrate."
    },
    {
        "slug": "streetcar-history-events",
        "name": "Streetcar & tram history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Streetcar & tram history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Streetcar & tram history timeline."
    },
    {
        "slug": "streetcar-history-objects",
        "name": "Streetcar & tram history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Streetcar & tram history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Streetcar & tram history."
    },
    {
        "slug": "streetcar-history-factions",
        "name": "Streetcar & tram history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Streetcar & tram history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Streetcar & tram history."
    },
    {
        "slug": "streetcar-history-concepts",
        "name": "Streetcar & tram history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Streetcar & tram history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Streetcar & tram history readable as a lore graph."
    },
    {
        "slug": "streetcar-history-eras",
        "name": "Streetcar & tram history eras",
        "type": "event",
        "short_description": "Periodization for Streetcar & tram history.",
        "description": "Named eras and phases that help readers track how Streetcar & tram history changes across time."
    },
    {
        "slug": "streetcar-history-works",
        "name": "Streetcar & tram history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Streetcar & tram history.",
        "description": "Primary works and adaptations through which most audiences encounter Streetcar & tram history."
    },
    {
        "slug": "streetcar-history-symbols",
        "name": "Streetcar & tram history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Streetcar & tram history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Streetcar & tram history."
    },
    {
        "slug": "streetcar-history-controversies",
        "name": "Streetcar & tram history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Streetcar & tram history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Streetcar & tram history argumentative."
    },
    {
        "slug": "streetcar-history-sources",
        "name": "Streetcar & tram history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Streetcar & tram history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Streetcar & tram history."
    },
    {
        "slug": "streetcar-history-geography",
        "name": "Streetcar & tram history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Streetcar & tram history.",
        "description": "Regions, routes, and spatial systems that situate Streetcar & tram history beyond single named places."
    },
    {
        "slug": "streetcar-history-legacy",
        "name": "Streetcar & tram history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Streetcar & tram history.",
        "description": "How Streetcar & tram history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "streetcar-history-practices",
        "name": "Streetcar & tram history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Streetcar & tram history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Streetcar & tram history."
    },
    {
        "slug": "streetcar-history-entry-1",
        "name": "Streetcar & tram history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-2",
        "name": "Streetcar & tram history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-3",
        "name": "Streetcar & tram history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-4",
        "name": "Streetcar & tram history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-5",
        "name": "Streetcar & tram history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-6",
        "name": "Streetcar & tram history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-7",
        "name": "Streetcar & tram history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-8",
        "name": "Streetcar & tram history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-9",
        "name": "Streetcar & tram history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-10",
        "name": "Streetcar & tram history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-11",
        "name": "Streetcar & tram history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-12",
        "name": "Streetcar & tram history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-13",
        "name": "Streetcar & tram history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-14",
        "name": "Streetcar & tram history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-15",
        "name": "Streetcar & tram history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-16",
        "name": "Streetcar & tram history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-17",
        "name": "Streetcar & tram history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-18",
        "name": "Streetcar & tram history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-19",
        "name": "Streetcar & tram history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-20",
        "name": "Streetcar & tram history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-21",
        "name": "Streetcar & tram history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-22",
        "name": "Streetcar & tram history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-23",
        "name": "Streetcar & tram history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "streetcar-history-entry-24",
        "name": "Streetcar & tram history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Streetcar & tram history.",
        "description": "A supporting encyclopedia entry in the Streetcar & tram history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "streetcar-history",
        "streetcar-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "streetcar-history",
        "streetcar-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "streetcar-history",
        "streetcar-history-places",
        "contains",
        "Streetcar & tram history places is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-events",
        "contains",
        "Streetcar & tram history events is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-objects",
        "contains",
        "Streetcar & tram history objects & artifacts is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-factions",
        "contains",
        "Streetcar & tram history factions & groups is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-concepts",
        "contains",
        "Streetcar & tram history concepts is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-eras",
        "contains",
        "Streetcar & tram history eras is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-works",
        "contains",
        "Streetcar & tram history works & media is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-symbols",
        "contains",
        "Streetcar & tram history symbols is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-controversies",
        "contains",
        "Streetcar & tram history controversies is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-sources",
        "contains",
        "Streetcar & tram history sources is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-geography",
        "contains",
        "Streetcar & tram history geography is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-legacy",
        "contains",
        "Streetcar & tram history legacy is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-practices",
        "contains",
        "Streetcar & tram history practices is a primary trailhead under Streetcar & tram history.",
        0.88,
        0.82
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-1",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-2",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-3",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-4",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-5",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-6",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-7",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-8",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-9",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-10",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-11",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-12",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-13",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-14",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-15",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-16",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-17",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-18",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-19",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-20",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-21",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-22",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-23",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ],
    [
        "streetcar-history",
        "streetcar-history-entry-24",
        "contains",
        "Supporting entry under Streetcar & tram history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
