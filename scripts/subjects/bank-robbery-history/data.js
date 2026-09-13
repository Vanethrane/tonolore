/**
 * Seed graph (auto-padded to ≥40 entities for crawl depth).
 */

const entities = [
    {
        "slug": "bank-robbery-history",
        "name": "Bank robbery history",
        "type": "topic",
        "short_description": "Stickups, getaway lore, and the American outlaw tradition from Jesse James to Dillinger.",
        "description": "Stickups, getaway lore, and the American outlaw tradition from Jesse James to Dillinger. This Ton-o-Lore subject maps people, places, events, and ideas tied to Bank robbery history so readers can follow long-tail connections across crime & underworld."
    },
    {
        "slug": "bank-robbery-history-figures",
        "name": "Bank robbery history figures",
        "type": "topic",
        "short_description": "People, characters, and named forces central to Bank robbery history.",
        "description": "A working index of the figures — historical, fictional, or legendary — that readers meet first when exploring Bank robbery history."
    },
    {
        "slug": "bank-robbery-history-world",
        "name": "Bank robbery history world & context",
        "type": "topic",
        "short_description": "Places, eras, and structures that frame Bank robbery history.",
        "description": "Geography, institutions, and periodization that give Bank robbery history its encyclopedia shape."
    },
    {
        "slug": "bank-robbery-history-places",
        "name": "Bank robbery history places",
        "type": "place",
        "short_description": "Locations and geographies that frame Bank robbery history.",
        "description": "Places, regions, and built sites that give Bank robbery history its map — where events and figures concentrate."
    },
    {
        "slug": "bank-robbery-history-events",
        "name": "Bank robbery history events",
        "type": "event",
        "short_description": "Turning points and dated episodes in Bank robbery history.",
        "description": "Battles, ceremonies, disasters, debuts, and other timed events that structure the Bank robbery history timeline."
    },
    {
        "slug": "bank-robbery-history-objects",
        "name": "Bank robbery history objects & artifacts",
        "type": "object",
        "short_description": "Objects, tools, and artifacts tied to Bank robbery history.",
        "description": "Named objects, relics, instruments, and material culture that readers follow through Bank robbery history."
    },
    {
        "slug": "bank-robbery-history-factions",
        "name": "Bank robbery history factions & groups",
        "type": "organization",
        "short_description": "Organizations and collectives inside Bank robbery history.",
        "description": "Orders, crews, houses, agencies, and other groups that concentrate power and loyalty in Bank robbery history."
    },
    {
        "slug": "bank-robbery-history-concepts",
        "name": "Bank robbery history concepts",
        "type": "concept",
        "short_description": "Ideas and doctrines that organize Bank robbery history.",
        "description": "Keywords, doctrines, systems, and abstract forces that make Bank robbery history readable as a lore graph."
    },
    {
        "slug": "bank-robbery-history-eras",
        "name": "Bank robbery history eras",
        "type": "event",
        "short_description": "Periodization for Bank robbery history.",
        "description": "Named eras and phases that help readers track how Bank robbery history changes across time."
    },
    {
        "slug": "bank-robbery-history-works",
        "name": "Bank robbery history works & media",
        "type": "work",
        "short_description": "Texts, shows, and media that carry Bank robbery history.",
        "description": "Primary works and adaptations through which most audiences encounter Bank robbery history."
    },
    {
        "slug": "bank-robbery-history-symbols",
        "name": "Bank robbery history symbols",
        "type": "concept",
        "short_description": "Icons and motifs associated with Bank robbery history.",
        "description": "Emblems, motifs, and recurring symbols that mark identity inside Bank robbery history."
    },
    {
        "slug": "bank-robbery-history-controversies",
        "name": "Bank robbery history controversies",
        "type": "topic",
        "short_description": "Disputes and contested claims in Bank robbery history.",
        "description": "Debates, rival canons, scandals, and contested facts that keep Bank robbery history argumentative."
    },
    {
        "slug": "bank-robbery-history-sources",
        "name": "Bank robbery history sources",
        "type": "topic",
        "short_description": "Primary and secondary trails into Bank robbery history.",
        "description": "Documents, archives, oral traditions, and reference spines readers use to verify Bank robbery history."
    },
    {
        "slug": "bank-robbery-history-geography",
        "name": "Bank robbery history geography",
        "type": "place",
        "short_description": "Broader geographic framing for Bank robbery history.",
        "description": "Regions, routes, and spatial systems that situate Bank robbery history beyond single named places."
    },
    {
        "slug": "bank-robbery-history-legacy",
        "name": "Bank robbery history legacy",
        "type": "topic",
        "short_description": "Afterlives and influence of Bank robbery history.",
        "description": "How Bank robbery history continues — revivals, adaptations, scholarship, and cultural memory."
    },
    {
        "slug": "bank-robbery-history-practices",
        "name": "Bank robbery history practices",
        "type": "concept",
        "short_description": "Rituals, methods, and repeated behaviors in Bank robbery history.",
        "description": "Customs, techniques, rituals, and operational habits that define participation in Bank robbery history."
    },
    {
        "slug": "bank-robbery-history-entry-1",
        "name": "Bank robbery history entry 1",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-2",
        "name": "Bank robbery history entry 2",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-3",
        "name": "Bank robbery history entry 3",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-4",
        "name": "Bank robbery history entry 4",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-5",
        "name": "Bank robbery history entry 5",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-6",
        "name": "Bank robbery history entry 6",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-7",
        "name": "Bank robbery history entry 7",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-8",
        "name": "Bank robbery history entry 8",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-9",
        "name": "Bank robbery history entry 9",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-10",
        "name": "Bank robbery history entry 10",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-11",
        "name": "Bank robbery history entry 11",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-12",
        "name": "Bank robbery history entry 12",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-13",
        "name": "Bank robbery history entry 13",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-14",
        "name": "Bank robbery history entry 14",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-15",
        "name": "Bank robbery history entry 15",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-16",
        "name": "Bank robbery history entry 16",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-17",
        "name": "Bank robbery history entry 17",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-18",
        "name": "Bank robbery history entry 18",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-19",
        "name": "Bank robbery history entry 19",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-20",
        "name": "Bank robbery history entry 20",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-21",
        "name": "Bank robbery history entry 21",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-22",
        "name": "Bank robbery history entry 22",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-23",
        "name": "Bank robbery history entry 23",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    },
    {
        "slug": "bank-robbery-history-entry-24",
        "name": "Bank robbery history entry 24",
        "type": "topic",
        "short_description": "Additional mapped entry inside Bank robbery history.",
        "description": "A supporting encyclopedia entry in the Bank robbery history subject graph, kept so the topic maintains crawlable depth."
    }
];

const relationships = [
    [
        "bank-robbery-history",
        "bank-robbery-history-figures",
        "contains",
        "Figures are the primary trailheads for this subject graph.",
        0.9,
        0.85
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-world",
        "contains",
        "World and context entries situate the figures in place and time.",
        0.85,
        0.8
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-places",
        "contains",
        "Bank robbery history places is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-events",
        "contains",
        "Bank robbery history events is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-objects",
        "contains",
        "Bank robbery history objects & artifacts is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-factions",
        "contains",
        "Bank robbery history factions & groups is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-concepts",
        "contains",
        "Bank robbery history concepts is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-eras",
        "contains",
        "Bank robbery history eras is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-works",
        "contains",
        "Bank robbery history works & media is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-symbols",
        "contains",
        "Bank robbery history symbols is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-controversies",
        "contains",
        "Bank robbery history controversies is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-sources",
        "contains",
        "Bank robbery history sources is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-geography",
        "contains",
        "Bank robbery history geography is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-legacy",
        "contains",
        "Bank robbery history legacy is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-practices",
        "contains",
        "Bank robbery history practices is a primary trailhead under Bank robbery history.",
        0.88,
        0.82
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-1",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-2",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-3",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-4",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-5",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-6",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-7",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-8",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-9",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-10",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-11",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-12",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-13",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-14",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-15",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-16",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-17",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-18",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-19",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-20",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-21",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-22",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-23",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ],
    [
        "bank-robbery-history",
        "bank-robbery-history-entry-24",
        "contains",
        "Supporting entry under Bank robbery history.",
        0.75,
        0.7
    ]
];

module.exports = { entities, relationships };
