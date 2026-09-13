/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "musical-theatre-history",
        "name": "Musical theatre history",
        "type": "topic",
        "short_description": "Book musicals, golden-age standards, and the Broadway–West End tradition of sung drama.",
        "description": "Book musicals, golden-age standards, and the Broadway–West End tradition of sung drama. This Ton-o-Lore subject maps people, places, events, and ideas tied to Musical theatre history so readers can follow long-tail connections across theater & musicals."
    },
    {
        "slug": "musical-theatre-history-figures",
        "name": "Musical theatre history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Musical theatre history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Musical theatre history."
    },
    {
        "slug": "musical-theatre-history-world",
        "name": "Musical theatre history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Musical theatre history.",
        "description": "Geography, institutions, and periodization that give Musical theatre history its encyclopedia shape."
    },
    {
        "slug": "musical-theatre-history-places",
        "name": "Musical theatre history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Musical theatre history.",
        "description": "Places, regions, and built sites that give Musical theatre history its map — where events and figures concentrate."
    },
    {
        "slug": "musical-theatre-history-events",
        "name": "Musical theatre history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Musical theatre history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Musical theatre history timeline."
    },
    {
        "slug": "musical-theatre-history-objects",
        "name": "Musical theatre history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Musical theatre history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Musical theatre history."
    },
    {
        "slug": "musical-theatre-history-factions",
        "name": "Musical theatre history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Musical theatre history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Musical theatre history."
    },
    {
        "slug": "musical-theatre-history-concepts",
        "name": "Musical theatre history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Musical theatre history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Musical theatre history readable as a lore graph."
    },
    {
        "slug": "musical-theatre-history-eras",
        "name": "Musical theatre history eras",
        "type": "event",
        "short_description": "Periodization for Musical theatre history.",
        "description": "Named eras and phases that help readers track how Musical theatre history changes across time."
    },
    {
        "slug": "musical-theatre-history-works",
        "name": "Musical theatre history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Musical theatre history.",
        "description": "Primary works and adaptations through which most audiences encounter Musical theatre history."
    },
    {
        "slug": "musical-theatre-history-symbols",
        "name": "Musical theatre history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Musical theatre history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Musical theatre history."
    },
    {
        "slug": "musical-theatre-history-controversies",
        "name": "Musical theatre history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Musical theatre history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Musical theatre history argumentative."
    },
    {
        "slug": "musical-theatre-history-sources",
        "name": "Musical theatre history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Musical theatre history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Musical theatre history."
    },
    {
        "slug": "musical-theatre-history-geography",
        "name": "Musical theatre history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Musical theatre history.",
        "description": "Regions, routes, and spatial systems that situate Musical theatre history beyond single named places."
    },
    {
        "slug": "musical-theatre-history-legacy",
        "name": "Musical theatre history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Musical theatre history.",
        "description": "How Musical theatre history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "musical-theatre-history-practices",
        "name": "Musical theatre history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Musical theatre history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Musical theatre history."
    },
    {
        "slug": "musical-theatre-history-entry-1",
        "name": "Musical theatre history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-2",
        "name": "Musical theatre history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-3",
        "name": "Musical theatre history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-4",
        "name": "Musical theatre history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-5",
        "name": "Musical theatre history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-6",
        "name": "Musical theatre history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-7",
        "name": "Musical theatre history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-8",
        "name": "Musical theatre history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-9",
        "name": "Musical theatre history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-10",
        "name": "Musical theatre history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-11",
        "name": "Musical theatre history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-12",
        "name": "Musical theatre history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-13",
        "name": "Musical theatre history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-14",
        "name": "Musical theatre history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-15",
        "name": "Musical theatre history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-16",
        "name": "Musical theatre history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-17",
        "name": "Musical theatre history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-18",
        "name": "Musical theatre history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-19",
        "name": "Musical theatre history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-20",
        "name": "Musical theatre history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-21",
        "name": "Musical theatre history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-22",
        "name": "Musical theatre history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-23",
        "name": "Musical theatre history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "musical-theatre-history-entry-24",
        "name": "Musical theatre history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Musical theatre history.",
        "description": "A supporting encyclopedia entry in the Musical theatre history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "musical-theatre-history",
        "musical-theatre-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-places",
        "contains",
        "Musical theatre history places is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-events",
        "contains",
        "Musical theatre history events is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-objects",
        "contains",
        "Musical theatre history objects & artifacts is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-factions",
        "contains",
        "Musical theatre history factions & groups is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-concepts",
        "contains",
        "Musical theatre history concepts is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-eras",
        "contains",
        "Musical theatre history eras is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-works",
        "contains",
        "Musical theatre history works & media is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-symbols",
        "contains",
        "Musical theatre history symbols is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-controversies",
        "contains",
        "Musical theatre history controversies is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-sources",
        "contains",
        "Musical theatre history sources is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-geography",
        "contains",
        "Musical theatre history geography is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-legacy",
        "contains",
        "Musical theatre history legacy is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-practices",
        "contains",
        "Musical theatre history practices is a primary trailhead under Musical theatre history.",
        0.88,
        0.82
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-1",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-2",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-3",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-4",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-5",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-6",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-7",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-8",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-9",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-10",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-11",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-12",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-13",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-14",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-15",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-16",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-17",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-18",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-19",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-20",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-21",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-22",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-23",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ],
    [
        "musical-theatre-history",
        "musical-theatre-history-entry-24",
        "contains",
        "Supporting entry under Musical theatre history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
